import { upcomingEvents } from '@/lib/data/tasks';
import { StatusPill } from '@/components/ui/StatusPill';

export default function UpcomingEvents() {
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
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)', marginBottom: 16 }}>
        Upcoming
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {upcomingEvents.map((event) => (
          <div
            key={event.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              padding: '12px 14px',
              borderRadius: 10,
              background: 'var(--uniflow-card)',
              border: '1px solid var(--uniflow-border)',
              borderLeft: `3px solid ${event.hot ? 'var(--uniflow-blue)' : 'var(--uniflow-6)'}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono), ui-monospace, monospace',
                  fontSize: 10,
                  fontWeight: 700,
                  color: event.hot ? 'var(--uniflow-blue)' : 'var(--uniflow-text-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {event.when}
              </span>
              {event.hot && <StatusPill tone="brand" label="Live" size="xs" uppercase />}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--uniflow-text-1)' }}>
              {event.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
