import { upcomingEvents } from '@/lib/data/tasks';

export default function UpcomingEvents() {
  return (
    <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, padding: '20px 24px', boxShadow: 'var(--uniflow-shadow)' }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 16 }}>Upcoming</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {upcomingEvents.map((event) => (
          <div
            key={event.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              padding: '12px 16px',
              borderRadius: 10,
              background: event.hot ? 'var(--uniflow-blue-light)' : 'var(--uniflow-bg)',
              border: `1px solid ${event.hot ? 'var(--uniflow-blue-border)' : 'var(--uniflow-border)'}`,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: event.hot ? 'var(--uniflow-blue)' : 'var(--uniflow-text-3)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {event.when}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--uniflow-text-1)' }}>{event.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
