import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ec22Chapters } from '@/lib/data/chapters';
import { StatusPill } from '@/components/ui/StatusPill';

export default function ContinueLearning() {
  const doneCount = ec22Chapters.filter((c) => c.status === 'done').length;
  const total = ec22Chapters.length;
  const currentChapter = ec22Chapters.find((c) => c.status === 'current');
  const nextChapter = ec22Chapters.find((c) => c.status === 'locked');
  const pct = Math.round((doneCount / total) * 100);

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
      <StatusPill tone="brand" label="EC22 · Macroeconomics" size="sm" />

      <div
        style={{
          fontSize: 16,
          fontWeight: 800,
          color: 'var(--uniflow-text-1)',
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <BookOpen size={15} strokeWidth={2} style={{ color: 'var(--uniflow-blue)', flexShrink: 0 }} />
        {currentChapter?.label} · {currentChapter?.title}
      </div>

      <div style={{ marginTop: 14 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--uniflow-text-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            marginBottom: 6,
          }}
        >
          {doneCount} / {total} chapters
        </div>
        <div
          style={{
            width: '100%',
            height: 6,
            borderRadius: 999,
            background: 'var(--uniflow-3)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${pct}%`,
              height: '100%',
              borderRadius: 999,
              background: 'var(--uniflow-blue)',
            }}
          />
        </div>
      </div>

      {nextChapter && (
        <div
          style={{
            fontSize: 12,
            color: 'var(--uniflow-text-2)',
            marginTop: 8,
          }}
        >
          → Next up: {nextChapter.label} · {nextChapter.title}
        </div>
      )}

      <Link
        href="/course/ec22"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--uniflow-blue)',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          marginTop: 16,
          textDecoration: 'none',
        }}
      >
        Continue
        <ArrowRight size={13} strokeWidth={2.5} />
      </Link>
    </div>
  );
}
