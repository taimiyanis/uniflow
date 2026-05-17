import { upcomingEvents } from '@/lib/data/tasks';

export default function UpcomingCalendar() {
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 20px',
        boxShadow: 'var(--uniflow-shadow)',
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
          marginBottom: 14,
        }}
      >
        Upcoming
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {upcomingEvents.map((event, i) => (
          <div key={i}>
            {i > 0 && (
              <div
                style={{
                  height: 1,
                  background: 'var(--uniflow-border)',
                  margin: '10px 0',
                }}
              />
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Date accent bar */}
              <div
                style={{
                  width: 3,
                  height: 32,
                  borderRadius: 999,
                  background: event.hot ? 'var(--uniflow-blue)' : 'var(--uniflow-border)',
                  flexShrink: 0,
                }}
              />

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontFamily: 'var(--font-body)',
                    color: event.hot ? 'var(--uniflow-blue)' : 'var(--uniflow-text-3)',
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  {event.when}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: 'var(--uniflow-text-1)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {event.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
