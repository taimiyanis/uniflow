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
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 14,
        marginBottom: 24,
      }}
    >
      {cards.map((card) => (
        <div
          key={card.label}
          style={{
            background: 'var(--uniflow-card)',
            border: `1px solid var(--uniflow-border)`,
            borderLeft: `3px solid ${card.accent}`,
            borderRadius: 12,
            padding: '16px 18px',
            boxShadow: 'var(--uniflow-shadow)',
          }}
        >
          {card.icon}
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: 'var(--uniflow-text-1)',
              fontFamily: 'var(--font-syne)',
              lineHeight: 1,
              marginTop: 8,
            }}
          >
            {card.value}
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--uniflow-text-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginTop: 4,
            }}
          >
            {card.label}
          </div>
        </div>
      ))}
    </div>
  );
}
