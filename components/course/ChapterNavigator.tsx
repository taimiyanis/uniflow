import { Chapter } from '@/lib/data/chapters';

interface Props {
  chapters: Chapter[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function ChapterNavigator({ chapters, selectedIndex, onSelect }: Props) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
      {chapters.map((ch) => {
        const isSelected = ch.index === selectedIndex;
        const isDone = ch.status === 'done';
        const isCurrent = ch.status === 'current';
        const isLocked = ch.status === 'locked';

        return (
          <button
            key={ch.index}
            type="button"
            onClick={() => !isLocked && onSelect(ch.index)}
            disabled={isLocked}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              borderRadius: 8,
              border: `1px solid ${isSelected ? 'var(--uniflow-blue)' : 'var(--uniflow-border)'}`,
              borderLeft: `3px solid ${isDone || isCurrent ? (isSelected || isCurrent ? 'var(--uniflow-blue)' : 'var(--uniflow-green)') : 'var(--uniflow-border)'}`,
              background: isSelected ? 'var(--uniflow-blue-light)' : 'var(--uniflow-card)',
              cursor: isLocked ? 'default' : 'pointer',
              opacity: isLocked ? 0.5 : 1,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 800, color: isSelected ? 'var(--uniflow-blue)' : 'var(--uniflow-text-3)' }}>
              {ch.label}
            </span>
            <span style={{ fontSize: 12, fontWeight: 600, color: isSelected ? 'var(--uniflow-blue-dark)' : 'var(--uniflow-text-2)' }}>
              {ch.title}
            </span>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: isDone || isCurrent
                  ? (isSelected ? 'var(--uniflow-blue)' : isDone ? 'var(--uniflow-green)' : 'var(--uniflow-blue)')
                  : 'var(--uniflow-border)',
                flexShrink: 0,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
