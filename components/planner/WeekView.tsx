'use client';

import { plannerTasks } from '@/lib/data/tasks';

const DAYS: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const courseColors: Record<string, { bg: string; text: string; border: string }> = {
  EC22: { bg: 'var(--uniflow-blue-light)', text: 'var(--uniflow-blue-dark)', border: 'var(--uniflow-blue-border)' },
  AC22: { bg: 'var(--success-bg)', text: 'var(--success-text)', border: 'oklch(0.680 0.165 152 / 0.25)' },
  MA22: { bg: 'var(--info-bg)', text: '#0369A1', border: 'oklch(0.660 0.135 230 / 0.25)' },
  LW22: { bg: 'var(--warn-bg)', text: '#854D0E', border: 'oklch(0.665 0.155 75 / 0.30)' },
  MK21: { bg: 'var(--uniflow-2)', text: 'var(--uniflow-text-2)', border: 'var(--uniflow-border)' },
};
const defaultColor = { bg: 'var(--uniflow-2)', text: 'var(--uniflow-text-2)', border: 'var(--uniflow-border)' };

function getWeekDates(): Date[] {
  const today = new Date();
  const day = today.getDay(); // 0=Sun, 1=Mon, ...
  const monday = new Date(today);
  monday.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export default function WeekView() {
  const weekDates = getWeekDates();
  const today = new Date();
  const pendingTasks = plannerTasks.filter((t) => !t.done);

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 22px',
        boxShadow: 'var(--uniflow-shadow)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 10,
        }}
      >
        {DAYS.map((dayName, i) => {
          const date = weekDates[i];
          const isToday =
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate();

          const dayTasks = pendingTasks.filter(
            (t) => t.due !== null && t.due.toLowerCase() === dayName.toLowerCase()
          );

          return (
            <div key={dayName}>
              {/* Day header */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: isToday ? 'var(--uniflow-blue)' : 'var(--uniflow-text-3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                  }}
                >
                  {dayName}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--uniflow-text-1)',
                    marginTop: 2,
                  }}
                >
                  {date.getDate()}
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  borderTop: '1px solid var(--uniflow-border)',
                  margin: '8px 0',
                }}
              />

              {/* Tasks */}
              {dayTasks.length === 0 ? (
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: 11,
                    color: 'var(--uniflow-text-3)',
                  }}
                >
                  —
                </div>
              ) : (
                dayTasks.map((task) => {
                  const colors = courseColors[task.course] ?? defaultColor;
                  return (
                    <div
                      key={task.id}
                      style={{
                        padding: '5px 8px',
                        borderRadius: 6,
                        border: `1px solid ${colors.border}`,
                        background: colors.bg,
                        color: colors.text,
                        marginBottom: 4,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {task.label}
                      </div>
                      <div
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          marginTop: 2,
                        }}
                      >
                        {task.course}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
