import { Download } from 'lucide-react';
import { StatusPill } from '@/components/ui/StatusPill';

interface Exam {
  name: string;
  date: string;
  duration: string;
  questions: number;
  hasSolutions: boolean;
}

const exams: Exam[] = [
  { name: 'Final Exam', date: 'Jan 2025', duration: '2h', questions: 4, hasSolutions: true },
  { name: 'Midterm', date: 'Nov 2024', duration: '1h30', questions: 3, hasSolutions: true },
  { name: 'Final Exam', date: 'Jan 2024', duration: '2h', questions: 4, hasSolutions: false },
  { name: 'Midterm', date: 'Nov 2023', duration: '1h30', questions: 3, hasSolutions: true },
];

export default function PastExamsTab() {
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: 'var(--uniflow-shadow)',
      }}
    >
      {exams.map((exam, i) => (
        <div
          key={`${exam.name}-${exam.date}`}
          className="uniflow-task-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: i < exams.length - 1 ? '1px solid var(--uniflow-border)' : 'none',
            transition: 'background var(--duration-fast) var(--ease-out)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)', marginBottom: 4 }}>
                {exam.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--uniflow-text-3)',
                    letterSpacing: '0.3px',
                  }}
                >
                  {exam.date} · {exam.duration} · {exam.questions} questions
                </span>
                <StatusPill
                  tone={exam.hasSolutions ? 'success' : 'neutral'}
                  label={exam.hasSolutions ? 'Solutions' : 'No solutions'}
                  size="xs"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--uniflow-blue)',
              background: 'var(--uniflow-blue-light)',
              border: '1px solid var(--uniflow-blue-border)',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: 8,
              transition: 'background var(--duration-fast) var(--ease-out)',
            }}
          >
            <Download size={13} strokeWidth={2.5} />
            Download
          </button>
        </div>
      ))}
    </div>
  );
}
