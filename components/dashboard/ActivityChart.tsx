import { studyStats } from '@/lib/data/stats';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MAX_HEIGHT = 80;
const MAX_MINUTES = 120;
// Highlight the tallest bar (index 3 = Thu = 120 min)
const TODAY_INDEX = 3;

function formatDuration(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}h ${m}min`;
}

export default function ActivityChart() {
  const totalMinutes = studyStats.weekActivity.reduce((sum, m) => sum + m, 0);
  const totalFormatted = formatDuration(totalMinutes);

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 24px',
        boxShadow: 'var(--uniflow-shadow)',
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: 'var(--uniflow-text-1)',
        }}
      >
        Learning Activity
      </div>
      <div
        style={{
          fontSize: 12,
          color: 'var(--uniflow-text-3)',
          marginTop: 2,
        }}
      >
        This week · {totalFormatted}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 8,
          height: MAX_HEIGHT,
          margin: '16px 0 8px',
        }}
      >
        {studyStats.weekActivity.map((minutes, i) => {
          const barHeight = Math.min(
            Math.round((minutes / MAX_MINUTES) * MAX_HEIGHT),
            MAX_HEIGHT,
          );
          const isToday = i === TODAY_INDEX;

          return (
            <div
              key={DAYS[i]}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                gap: 6,
                height: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: barHeight,
                  borderRadius: '4px 4px 0 0',
                  background: 'var(--uniflow-blue)',
                  opacity: isToday ? 1 : 0.25,
                  transition: 'opacity 0.2s',
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: 'var(--uniflow-text-3)',
                }}
              >
                {DAYS[i]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
