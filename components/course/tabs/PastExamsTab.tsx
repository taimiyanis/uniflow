const exams = [
  { name: 'Final Exam — January 2025', meta: '2h · 4 questions · Solutions included' },
  { name: 'Midterm — November 2024', meta: '1h30 · 3 questions · Solutions included' },
  { name: 'Final Exam — January 2024', meta: '2h · 4 questions · No solutions' },
  { name: 'Midterm — November 2023', meta: '1h30 · 3 questions · Solutions included' },
];

export default function PastExamsTab() {
  return (
    <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--uniflow-shadow)' }}>
      {exams.map((exam, i) => (
        <div
          key={exam.name}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: i < exams.length - 1 ? '1px solid var(--uniflow-border)' : 'none',
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)', marginBottom: 3 }}>{exam.name}</div>
            <div style={{ fontSize: 12, color: 'var(--uniflow-text-3)', fontWeight: 500 }}>{exam.meta}</div>
          </div>
          <button
            type="button"
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--uniflow-blue)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 12px',
            }}
          >
            Download →
          </button>
        </div>
      ))}
    </div>
  );
}
