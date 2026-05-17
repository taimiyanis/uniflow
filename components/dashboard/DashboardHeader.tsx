import { HERO_EXAM, daysUntil } from '@/lib/data/courses';

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function DashboardHeader() {
  const days = HERO_EXAM.examDate ? daysUntil(HERO_EXAM.examDate) : null;

  const pillColor =
    days === null
      ? 'var(--uniflow-blue)'
      : days <= 7
      ? 'var(--danger)'
      : days <= 14
      ? 'var(--uniflow-amber)'
      : 'var(--uniflow-blue)';

  const pillBg =
    days === null
      ? 'var(--uniflow-blue-light)'
      : days <= 7
      ? 'var(--danger-bg)'
      : days <= 14
      ? 'rgba(245,158,11,0.12)'
      : 'var(--uniflow-blue-light)';

  const pillBorder =
    days === null
      ? 'var(--uniflow-blue-border)'
      : days <= 7
      ? 'oklch(0.605 0.225 27 / 0.25)'
      : days <= 14
      ? 'oklch(0.665 0.155 75 / 0.30)'
      : 'var(--uniflow-blue-border)';

  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--uniflow-text-1)',
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: '-0.3px',
        }}
      >
        {getGreeting()}, Yanis.
      </h1>
      <p
        style={{
          fontSize: 13,
          fontFamily: 'var(--font-body)',
          color: 'var(--uniflow-text-3)',
          margin: '5px 0 0',
        }}
      >
        B2 · ESCP BIM · Fall 2025/2026
      </p>

      {days !== null && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: 16,
            padding: '5px 12px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            color: pillColor,
            background: pillBg,
            border: `1px solid ${pillBorder}`,
            whiteSpace: 'nowrap',
          }}
        >
          {HERO_EXAM.code} exam — {days} days
        </span>
      )}
    </div>
  );
}
