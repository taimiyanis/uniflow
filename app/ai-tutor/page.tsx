'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Send,
  BookOpen,
  CalendarDays,
  ListChecks,
  Lightbulb,
  Wand2,
  GraduationCap,
} from 'lucide-react';
import { getAIResponse } from '@/lib/ai';
import { StatusPill } from '@/components/ui/StatusPill';
import { NumericDisplay } from '@/components/ui/NumericDisplay';
import { ec22Chapters } from '@/lib/data/chapters';
import { HERO_EXAM, daysUntil } from '@/lib/data/courses';

type Message = {
  role: 'user' | 'ai';
  text: string;
  ts: number;
};

const SUGGESTIONS = [
  { icon: BookOpen, label: 'Explain the IS-LM model', topic: 'islm' },
  { icon: BookOpen, label: 'GDP vs GNP — what is the difference?', topic: 'gdp' },
  { icon: BookOpen, label: 'Phillips Curve and inflation', topic: 'inflation' },
  { icon: BookOpen, label: 'How does fiscal policy work?', topic: 'fiscal' },
  { icon: BookOpen, label: 'Monetary policy + liquidity trap', topic: 'monetary' },
  { icon: GraduationCap, label: 'Give me a Chapter 3 quiz question', topic: 'quiz' },
];

type ActionId = 'generate-quiz' | 'summarize' | 'schedule';
const ACTIONS: { id: ActionId; label: string; icon: typeof Wand2 }[] = [
  { id: 'generate-quiz', label: 'Generate a quiz from Ch. 4', icon: ListChecks },
  { id: 'summarize', label: 'Summarize current chapter', icon: Lightbulb },
  { id: 'schedule', label: 'Schedule a review session', icon: CalendarDays },
];

const ACTION_PROMPTS: Record<ActionId, string> = {
  'generate-quiz': 'Generate a quiz from Chapter 4 (IS-LM).',
  summarize: 'Summarize the current chapter.',
  schedule: 'Schedule a review session for this week.',
};

const ACTION_REPLIES: Record<ActionId, string> = {
  'generate-quiz':
    'Here are 3 questions from Chapter 4 (IS-LM):\n\n1. In the IS-LM model, an increase in government spending shifts which curve, and in which direction?\n2. What happens to the interest rate r in the short run when the central bank expands the money supply?\n3. Define the liquidity trap and explain why monetary policy loses traction inside it.\n\nReply with your answers and I will mark them with feedback.',
  summarize:
    'Chapter 4 in 90 seconds:\n\n• IS curve: goods-market equilibrium. Slopes down — higher r reduces investment and lowers Y.\n• LM curve: money-market equilibrium. Slopes up — higher Y raises money demand and pushes r up.\n• Equilibrium is the intersection (Y*, r*).\n• Fiscal expansion (G↑): IS shifts right → Y↑, r↑. Some crowding-out.\n• Monetary expansion (Ms↑): LM shifts right → Y↑, r↓. No crowding-out.\n• Liquidity trap: r near zero, LM is horizontal, only fiscal policy moves Y.\n\nFormula to memorize: ΔY = (1 / (1 − c)) × ΔG (multiplier).',
  schedule:
    'I have scheduled three 25-minute review sessions for you this week:\n\n• Mon 09:00 — IS-LM derivation + worked example\n• Wed 14:00 — Fiscal vs. monetary policy comparison\n• Fri 11:00 — Past-exam practice (Jan 2025 final, Q2)\n\nReminders will appear on your Planner. Reply "swap" if any time does not work.',
};

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [defaultIndex, setDefaultIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentChapter = ec22Chapters.find((c) => c.status === 'current') ?? ec22Chapters[3];
  const examDays = HERO_EXAM.examDate ? daysUntil(HERO_EXAM.examDate) : 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    inputRef.current?.focus();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function sendMessage(text: string, cannedReply?: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const ts = Date.now();
    setMessages((prev) => [...prev, { role: 'user', text: trimmed, ts }]);
    setInput('');
    setTyping(true);

    const reply = cannedReply ?? getAIResponse(trimmed, defaultIndex);
    setDefaultIndex((i) => i + 1);

    timerRef.current = setTimeout(
      () => {
        setTyping(false);
        setMessages((prev) => [...prev, { role: 'ai', text: reply, ts: Date.now() }]);
      },
      900 + Math.random() * 700
    );
  }

  function runAction(id: ActionId) {
    sendMessage(ACTION_PROMPTS[id], ACTION_REPLIES[id]);
  }

  const hasMessages = messages.length > 0;

  return (
    <div
      style={{
        maxWidth: 820,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 64px)',
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: hasMessages ? 16 : 32, flexShrink: 0, transition: 'margin-bottom var(--duration-base) var(--ease-out)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, var(--uniflow-9) 0%, var(--uniflow-12) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(47,111,237,0.30)',
            }}
          >
            <Sparkles size={18} color="#fff" strokeWidth={2} />
          </div>
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 24,
                fontWeight: 800,
                color: 'var(--uniflow-text-1)',
                margin: 0,
                letterSpacing: '-0.4px',
                lineHeight: 1.1,
              }}
            >
              AI Tutor
            </h1>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 4,
                fontSize: 12,
                color: 'var(--uniflow-text-2)',
              }}
            >
              <StatusPill
                tone="brand"
                label={`EC22 · ${currentChapter.label} · ${currentChapter.title}`}
                size="xs"
              />
              <span style={{ color: 'var(--uniflow-text-3)' }}>·</span>
              <span style={{ fontWeight: 500 }}>
                Exam in{' '}
                <NumericDisplay size={12} weight={700} color="var(--uniflow-text-1)">
                  {examDays}
                </NumericDisplay>{' '}
                days
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome state */}
      {!hasMessages && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 36,
                fontWeight: 800,
                color: 'var(--uniflow-text-1)',
                margin: '0 0 8px',
                lineHeight: 1.15,
                letterSpacing: '-0.8px',
              }}
            >
              Ask anything about your courses.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--uniflow-text-2)',
                margin: 0,
                lineHeight: 1.5,
                maxWidth: 560,
              }}
            >
              The AI Tutor knows your B2 syllabus, your past exams, and your current
              progress. It can explain concepts, generate quizzes, and schedule review
              sessions on your planner.
            </p>
          </div>

          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--uniflow-text-3)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: 10,
              }}
            >
              Suggested questions
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 10,
              }}
            >
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => sendMessage(s.label)}
                  className="uniflow-interactive-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 14px',
                    border: '1px solid var(--uniflow-border)',
                    borderRadius: 10,
                    background: 'var(--uniflow-2)',
                    cursor: 'pointer',
                  }}
                >
                  <s.icon size={14} color="var(--uniflow-text-3)" strokeWidth={2} />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--uniflow-text-1)',
                      textAlign: 'left',
                      flex: 1,
                    }}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--uniflow-text-3)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: 10,
              }}
            >
              Quick actions
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {ACTIONS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => runAction(a.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 16px',
                    background: 'var(--uniflow-blue-light)',
                    border: '1px solid var(--uniflow-blue-border)',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--uniflow-blue-dark)',
                    cursor: 'pointer',
                  }}
                >
                  <a.icon size={13} strokeWidth={2} />
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      {hasMessages && (
        <div
          role="log"
          aria-live="polite"
          aria-label="Chat messages"
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            paddingBottom: 16,
            paddingRight: 4,
          }}
        >
          {messages.map((msg, i) =>
            msg.role === 'user' ? (
              <div
                key={i}
                style={{
                  alignSelf: 'flex-end',
                  maxWidth: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  role="article"
                  aria-label="Your message"
                  style={{
                    background: 'var(--uniflow-blue)',
                    color: '#fff',
                    borderRadius: '14px 14px 4px 14px',
                    padding: '10px 14px',
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.5,
                    boxShadow: '0 1px 2px rgba(47,111,237,0.20)',
                  }}
                >
                  {msg.text}
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    color: 'var(--uniflow-text-3)',
                    marginTop: 3,
                  }}
                >
                  {new Date(msg.ts).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ) : (
              <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '85%', display: 'flex', gap: 10 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background:
                      'linear-gradient(135deg, var(--uniflow-9) 0%, var(--uniflow-12) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Sparkles size={14} color="#fff" strokeWidth={2} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: 'var(--uniflow-text-3)',
                      marginBottom: 4,
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px',
                    }}
                  >
                    UNIFLOW AI
                  </div>
                  <div
                    role="article"
                    aria-label="AI Tutor response"
                    style={{
                      background: 'var(--uniflow-2)',
                      border: '1px solid var(--uniflow-border)',
                      borderRadius: '4px 14px 14px 14px',
                      padding: '12px 16px',
                      fontSize: 14,
                      color: 'var(--uniflow-text-1)',
                      lineHeight: 1.65,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {msg.text}
                  </div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 10,
                      fontWeight: 500,
                      color: 'var(--uniflow-text-3)',
                      marginTop: 3,
                    }}
                  >
                    {new Date(msg.ts).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            )
          )}

          {typing && (
            <div style={{ alignSelf: 'flex-start', display: 'flex', gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background:
                    'linear-gradient(135deg, var(--uniflow-9) 0%, var(--uniflow-12) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Sparkles size={14} color="#fff" strokeWidth={2} />
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: 4,
                  padding: '12px 16px',
                  background: 'var(--uniflow-2)',
                  border: '1px solid var(--uniflow-border)',
                  borderRadius: '4px 14px 14px 14px',
                  alignSelf: 'center',
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--uniflow-text-2)',
                      animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      )}

      {/* Input bar */}
      <div
        style={{
          flexShrink: 0,
          background: 'var(--uniflow-card)',
          border: '1px solid var(--uniflow-border)',
          borderRadius: 14,
          padding: '6px 6px 6px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          boxShadow: 'var(--uniflow-shadow)',
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage(input);
            }
          }}
          placeholder="Ask anything — IS-LM, GDP, fiscal multipliers…"
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            fontSize: 14,
            fontWeight: 500,
            color: 'var(--uniflow-text-1)',
            fontFamily: 'inherit',
            padding: '10px 0',
          }}
        />
        <button
          type="button"
          aria-label={typing ? "Sending message" : "Send message"}
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || typing}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: (input.trim() && !typing) ? 'var(--uniflow-blue)' : 'var(--uniflow-3)',
            color: (input.trim() && !typing) ? '#fff' : 'var(--uniflow-text-3)',
            border: 'none',
            borderRadius: 10,
            padding: '9px 14px',
            fontSize: 13,
            fontWeight: 700,
            cursor: (!input.trim() || typing) ? 'not-allowed' : 'pointer',
            transition: 'background var(--duration-fast) var(--ease-out)',
          }}
        >
          {typing ? (
            <>
              <span
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: '2px solid currentColor',
                  borderTopColor: 'transparent',
                  animation: 'spin 0.7s linear infinite',
                  flexShrink: 0,
                }}
              />
              <span>Sending</span>
            </>
          ) : (
            <>
              Send
              <Send size={13} strokeWidth={2} />
            </>
          )}
        </button>
      </div>

      {hasMessages && (
        <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap', flexShrink: 0 }}>
          {ACTIONS.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => runAction(a.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '5px 10px',
                background: 'var(--uniflow-2)',
                border: '1px solid var(--uniflow-border)',
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--uniflow-text-2)',
                cursor: 'pointer',
              }}
            >
              <a.icon size={11} strokeWidth={2} />
              {a.label}
            </button>
          ))}
          <Link
            href="/planner"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 10px',
              border: '1px solid var(--uniflow-border)',
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--uniflow-text-2)',
              textDecoration: 'none',
              marginLeft: 'auto',
            }}
          >
            Open planner →
          </Link>
        </div>
      )}
    </div>
  );
}
