'use client';

import { useEffect, useRef, useState } from 'react';
import { studyStats } from '@/lib/data/stats';
import { HERO_EXAM, daysUntil } from '@/lib/data/courses';

const CIRCUMFERENCE = 2 * Math.PI * 36; // r=36
const TARGET_PCT = Math.round(
  (studyStats.quizAvgPct * 0.6) + ((studyStats.chaptersCompleted / studyStats.totalChapters) * 100 * 0.4)
);

export default function ExamReadiness() {
  const strokeRef = useRef<SVGCircleElement>(null);
  const [displayPct, setDisplayPct] = useState(0);
  const days = HERO_EXAM.examDate ? daysUntil(HERO_EXAM.examDate) : null;

  useEffect(() => {
    const stroke = strokeRef.current;
    if (!stroke) return;

    const targetOffset = CIRCUMFERENCE - (TARGET_PCT / 100) * CIRCUMFERENCE;
    stroke.style.strokeDashoffset = String(CIRCUMFERENCE);

    const duration = 1200;
    let startTime: number | null = null;
    let rafId: number;

    function step(ts: number) {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      stroke!.style.strokeDashoffset = String(
        CIRCUMFERENCE - (CIRCUMFERENCE - targetOffset) * eased
      );
      setDisplayPct(Math.round(eased * TARGET_PCT));
      if (progress < 1) rafId = requestAnimationFrame(step);
    }

    const timer = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, 300);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 20px',
        boxShadow: 'var(--uniflow-shadow)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
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
          alignSelf: 'flex-start',
          marginBottom: 16,
        }}
      >
        Exam readiness
      </div>

      {/* Donut */}
      <div style={{ position: 'relative', width: 96, height: 96 }}>
        <svg width="96" height="96" viewBox="0 0 96 96" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="48"
            cy="48"
            r="36"
            fill="none"
            stroke="var(--uniflow-1)"
            strokeWidth="8"
          />
          <circle
            ref={strokeRef}
            cx="48"
            cy="48"
            r="36"
            fill="none"
            stroke="var(--uniflow-blue)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              color: 'var(--uniflow-text-1)',
              lineHeight: 1,
            }}
          >
            {displayPct}%
          </span>
        </div>
      </div>

      {/* Exam label */}
      <div
        style={{
          marginTop: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            color: 'var(--uniflow-text-1)',
          }}
        >
          {HERO_EXAM.name}
        </span>
        {days !== null && (
          <span
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-body)',
              color: days <= 7 ? 'var(--danger)' : days <= 14 ? 'var(--uniflow-amber)' : 'var(--uniflow-text-3)',
              fontWeight: 500,
            }}
          >
            {days} days to exam
          </span>
        )}
      </div>
    </div>
  );
}
