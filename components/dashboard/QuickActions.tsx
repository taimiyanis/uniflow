import Link from 'next/link';
import { Sparkles, CalendarDays, ArrowRight } from 'lucide-react';
import { plannerTasks } from '@/lib/data/tasks';
import { StatusPill } from '@/components/ui/StatusPill';
import { NumericDisplay } from '@/components/ui/NumericDisplay';

export default function QuickActions() {
  const pending = plannerTasks.filter((t) => !t.done);
  const previewTasks = pending.slice(0, 3);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginBottom: 24,
      }}
    >
      {/* AI Tutor — hero card */}
      <Link
        href="/ai-tutor"
        className="uniflow-interactive-card"
        style={{
          textDecoration: 'none',
          background:
            'linear-gradient(135deg, var(--uniflow-9) 0%, var(--uniflow-12) 100%)',
          border: '1px solid var(--uniflow-blue-border)',
          borderRadius: 14,
          padding: '24px 26px',
          boxShadow: 'var(--uniflow-shadow)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 158,
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 10px',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.20)',
              borderRadius: 999,
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              marginBottom: 14,
            }}
          >
            <Sparkles size={11} strokeWidth={2.5} />
            AI Tutor
          </div>
          <div
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.4px',
              marginBottom: 6,
            }}
          >
            Ask anything about your courses.
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.45,
              maxWidth: 320,
            }}
          >
            Explanations, quizzes, scheduled review sessions — for every course in your B2.
          </div>
        </div>
        <div
          style={{
            marginTop: 16,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
          }}
        >
          Open tutor
          <ArrowRight size={13} strokeWidth={2.5} />
        </div>

        {/* Decorative background sparkle */}
        <Sparkles
          size={120}
          strokeWidth={1.25}
          style={{
            position: 'absolute',
            right: -20,
            bottom: -22,
            color: 'rgba(255,255,255,0.08)',
            pointerEvents: 'none',
          }}
        />
      </Link>

      {/* Planner preview */}
      <Link
        href="/planner"
        className="uniflow-interactive-card"
        style={{
          textDecoration: 'none',
          background: 'var(--uniflow-card)',
          border: '1px solid var(--uniflow-border)',
          borderRadius: 14,
          padding: '20px 22px',
          boxShadow: 'var(--uniflow-shadow)',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          minHeight: 158,
          cursor: 'pointer',
          color: 'var(--uniflow-text-1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11,
              fontWeight: 700,
              color: 'var(--uniflow-text-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
            }}
          >
            <CalendarDays size={12} strokeWidth={2.25} />
            This week
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--uniflow-text-3)',
            }}
          >
            <NumericDisplay size={11} weight={700} color="var(--uniflow-text-1)">
              {pending.length}
            </NumericDisplay>{' '}
            open
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          {previewTasks.length === 0 ? (
            <div
              style={{
                fontSize: 13,
                color: 'var(--uniflow-text-2)',
                padding: '12px 0',
              }}
            >
              All caught up — nothing pending.
            </div>
          ) : (
            previewTasks.map((t) => (
              <div
                key={t.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '6px 0',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 4,
                    border: '2px solid var(--uniflow-7)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    color: 'var(--uniflow-text-1)',
                    fontWeight: 500,
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t.label}
                </span>
                <StatusPill tone="brand" label={t.course} size="xs" />
              </div>
            ))
          )}
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--uniflow-blue)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
          }}
        >
          Open planner
          <ArrowRight size={13} strokeWidth={2.5} />
        </div>
      </Link>
    </div>
  );
}
