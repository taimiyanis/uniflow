import { courses } from '@/lib/data/courses';

const courseProgress: Record<string, { done: number; total: number }> = {
  EC22: { done: 3, total: 8 },
  AC22: { done: 1, total: 6 },
  MA22: { done: 2, total: 7 },
  LW22: { done: 0, total: 5 },
  MK21: { done: 0, total: 6 },
};

export default function PerformanceBars() {
  const activeCourses = courses.slice(0, 4);

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 20px',
        boxShadow: 'var(--uniflow-shadow)',
        flex: 1,
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
          marginBottom: 16,
        }}
      >
        Your courses
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {activeCourses.map((course) => {
          const prog = courseProgress[course.code] ?? { done: 0, total: 1 };
          const pct = prog.total > 0 ? (prog.done / prog.total) * 100 : 0;

          return (
            <div key={course.code}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: 'var(--font-body)',
                    color: 'var(--uniflow-text-1)',
                  }}
                >
                  {course.name}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--uniflow-text-3)',
                    flexShrink: 0,
                    marginLeft: 8,
                  }}
                >
                  {prog.done}/{prog.total}
                </span>
              </div>

              <div
                style={{
                  height: 4,
                  borderRadius: 999,
                  background: 'var(--uniflow-1)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${pct}%`,
                    borderRadius: 999,
                    background: pct === 0 ? 'transparent' : 'var(--uniflow-blue)',
                    transition: 'width 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
