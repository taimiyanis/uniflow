'use client';

import { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '@/lib/ai';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const chips = [
  'Explain the IS-LM model',
  'GDP vs GNP difference',
  'Phillips Curve and inflation',
  'Fiscal multiplier',
];

export default function AIChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [chipsVisible, setChipsVisible] = useState(true);
  const [defaultIndex, setDefaultIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    setChipsVisible(false);
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    const reply = getAIResponse(text, defaultIndex);
    setDefaultIndex((i) => i + 1);

    timerRef.current = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'ai', text: reply }]);
    }, 1000 + Math.random() * 700);
  }

  return (
    <div
      style={{
        width: 300,
        minWidth: 300,
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        boxShadow: 'var(--uniflow-shadow)',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        maxHeight: 640,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--uniflow-border)' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--uniflow-text-1)' }}>AI Tutor</div>
        <div style={{ fontSize: 11, color: 'var(--uniflow-text-3)', fontWeight: 500 }}>EC22 Macroeconomics</div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {chipsVisible && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {chips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => sendMessage(chip)}
                style={{
                  background: 'var(--uniflow-blue-light)',
                  color: 'var(--uniflow-blue)',
                  border: '1px solid var(--uniflow-blue-border)',
                  borderRadius: 8,
                  padding: '8px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {messages.map((msg, i) =>
          msg.role === 'user' ? (
            <div key={i} style={{ alignSelf: 'flex-end', background: 'var(--uniflow-blue)', color: '#fff', borderRadius: '12px 12px 4px 12px', padding: '8px 12px', fontSize: 12, fontWeight: 600, maxWidth: '80%' }}>
              {msg.text}
            </div>
          ) : (
            <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '90%' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--uniflow-text-3)', marginBottom: 4 }}>UNIFLOW AI</div>
              <div style={{ background: 'var(--uniflow-2)', borderRadius: '4px 12px 12px 12px', padding: '8px 12px', fontSize: 12, color: 'var(--uniflow-text-1)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {msg.text}
              </div>
            </div>
          )
        )}

        {typing && (
          <div style={{ display: 'flex', gap: 4, padding: '8px 12px', background: 'var(--uniflow-2)', borderRadius: '4px 12px 12px 12px', width: 'fit-content' }}>
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
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid var(--uniflow-border)', display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          placeholder="Ask anything..."
          style={{
            flex: 1,
            border: '1px solid var(--uniflow-border)',
            borderRadius: 8,
            padding: '8px 12px',
            fontSize: 12,
            fontFamily: 'inherit',
            background: 'var(--uniflow-bg)',
          }}
        />
        <button
          type="button"
          aria-label="Send message"
          onClick={() => sendMessage(input)}
          style={{
            background: 'var(--uniflow-blue)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '8px 14px',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
