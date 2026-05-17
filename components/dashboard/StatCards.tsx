import { Flame, BookOpen, Target, Clock } from 'lucide-react';
import { studyStats } from '@/lib/data/stats';

interface StatCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  accent: string;
}

const cards: StatCard[] = [
  {
    icon: <Flame size={16} strokeWidth={2} style={{ color: 'var(--uniflow-amber)' }} />,
    value: `${studyStats.streakDays} days`,
    label: 'Streak',
    accent: 'var(--uniflow-amber)',
  },
  {
    icon: <BookOpen size={16} strokeWidth={2} style={{ color: 'var(--uniflow-blue)' }} />,
    value: `${studyStats.chaptersCompleted}/${studyStats.totalChapters}`,
    label: 'Chapters',
    accent: 'var(--uniflow-blue)',
  },
  {
    icon: <Target size={16} strokeWidth={2} style={{ color: 'var(--success)' }} />,
    value: `${studyStats.quizAvgPct}%`,
    label: 'Quiz Avg',
    accent: 'var(--success)',
  },
  {
    icon: <Clock size={16} strokeWidth={2} style={{ color: 'var(--uniflow-text-2)' }} />,
    value: `${studyStats.studyHours}h`,
    label: 'Study Time',
    accent: 'var(--uniflow-text-2)',
  },
];

export default function StatCards() {
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '16px 16px',
        boxShadow: 'var(--uniflow-shadow)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: 'var(--font-body)',
          color: 'var(--uniflow-text-3)',
          textTransform: 'uppercase',
          letterSpacing: '0.9px',
          marginBottom: 8,
        }}
      >
        Stats
      </div>

      {cards.map((card, i) => (
        <div key={card.label}>
          {i > 0 && (
            <div
              style={{
                height: 1,
                background: 'var(--uniflow-border)',
                margin: '8px 0',
              }}
            />
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '2px 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {card.icon}
              <span
                style={{
                  fontSize: 12,
                  fontFamily: 'var(--font-body)',
                  color: 'var(--uniflow-text-2)',
                  fontWeight: 500,
                }}
              >
                {card.label}
              </span>
            </div>
            <span
              style={{
                fontSize: 15,
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--uniflow-text-1)',
              }}
            >
              {card.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
