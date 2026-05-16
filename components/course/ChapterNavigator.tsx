import { Chapter } from '@/lib/data/chapters';

interface Props {
  chapters: Chapter[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function ChapterNavigator({ chapters, selectedIndex, onSelect }: Props) {
  return (
    <nav
      aria-label="Course chapters"
      style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}
    >
      {chapters.map((ch) => {
        const isSelected = ch.index === selectedIndex;
        const isDone = ch.status === 'done';
        const isCurrent = ch.status === 'current';
        const isLocked = ch.status === 'locked';

        const accentBorder = isSelected
          ? 'var(--uniflow-blue)'
          : isDone
            ? 'var(--success)'
            : isCurrent
              ? 'var(--uniflow-blue)'
              : 'var(--uniflow-border)';

        const dotColor = isSelected
          ? 'var(--uniflow-blue)'
          : isDone
            ? 'var(--success)'
            : isCurrent
              ? 'var(--uniflow-blue)'
              : '#D1D5DB';

        return (
          <button
            key={ch.index}
            type="button"
            onClick={() => !isLocked && onSelect(ch.index)}
            disabled={isLocked}
            aria-current={isSelected ? 'page' : undefined}
            aria-label={`${ch.label}: ${ch.title} (${ch.status})`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              borderRadius: 8,
              border: `1px solid ${isSelected ? 'var(--uniflow-blue)' : 'var(--uniflow-border)'}`,
              borderLeft: `3px solid ${accentBorder}`,
              background: isSelected ? 'var(--uniflow-blue-light)' : 'var(--uniflow-card)',
              cursor: isLocked ? 'not-allowed' : 'pointer',
              opacity: isLocked ? 0.55 : 1,
              transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono), ui-monospace, monospace',
                fontSize: 11,
                fontWeight: 700,
                color: isSelected ? 'var(--uniflow-blue)' : 'var(--uniflow-text-3)',
                letterSpacing: '0.3px',
              }}
            >
              {ch.label}
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: isSelected ? 'var(--uniflow-blue-dark)' : 'var(--uniflow-text-2)',
              }}
            >
              {ch.title}
            </span>
            <span
              aria-hidden
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: dotColor,
                flexShrink: 0,
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
