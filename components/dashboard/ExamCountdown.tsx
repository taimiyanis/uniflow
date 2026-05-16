'use client';

import { useEffect, useRef, useState } from 'react';
import { NumericDisplay } from '@/components/ui/NumericDisplay';
import { StatusPill } from '@/components/ui/StatusPill';
import { HERO_EXAM, daysUntil } from '@/lib/data/courses';

const EXAM_LABEL_OPTIONS: Record<number | 'default', string> = {
  0: 'Exam is today',
  1: '1 day away',
  default: 'days away',
};

export default function ExamCountdown() {
  const targetDays = HERO_EXAM.examDate ? daysUntil(HERO_EXAM.examDate) : 0;
  const [displayValue, setDisplayValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const duration = 800;
    let startTime: number | null = null;

    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * targetDays));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    timerRef.current = setTimeout(() => {
      rafRef.current = requestAnimationFrame(step);
    }, 200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [targetDays]);

  const isToday = targetDays === 0;
  const isImminent = targetDays > 0 && targetDays <= 7;
  const tone = isToday ? 'danger' : isImminent ? 'warn' : 'brand';

  const dateLabel = HERO_EXAM.examDate
    ? new Date(HERO_EXAM.examDate + 'T00:00:00').toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
      })
    : '';

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 24px',
        boxShadow: 'var(--uniflow-shadow)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 24,
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--uniflow-text-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: 8,
          }}
        >
          {HERO_EXAM.name} Exam
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          {isToday ? (
            <NumericDisplay size={36} weight={800} color="var(--danger)" letterSpacing="-1px">
              0
            </NumericDisplay>
          ) : (
            <NumericDisplay
              size={36}
              weight={800}
              color="var(--uniflow-9)"
              letterSpacing="-1px"
            >
              {displayValue}
            </NumericDisplay>
          )}
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--uniflow-text-2)' }}>
            {targetDays === 0
              ? EXAM_LABEL_OPTIONS[0]
              : targetDays === 1
                ? EXAM_LABEL_OPTIONS[1]
                : EXAM_LABEL_OPTIONS.default}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}
        >
          <StatusPill tone={tone} label={`${dateLabel} · Chapter 4 · IS-LM`} />
        </div>
      </div>
    </div>
  );
}
