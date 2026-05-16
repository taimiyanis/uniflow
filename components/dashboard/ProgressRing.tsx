'use client';

import { useEffect, useRef, useState } from 'react';
import { NumericDisplay } from '@/components/ui/NumericDisplay';
import { StatusPill } from '@/components/ui/StatusPill';

const CIRCUMFERENCE = 263.9; // 2π × 42
const TARGET_PCT = 68;
const ACTIVE_COURSES = 7;
const TOTAL_COURSES = 10;

export default function ProgressRing() {
  const strokeRef = useRef<SVGCircleElement>(null);
  const [displayPct, setDisplayPct] = useState(0);

  useEffect(() => {
    const stroke = strokeRef.current;
    if (!stroke) return;

    const targetOffset = CIRCUMFERENCE - (TARGET_PCT / 100) * CIRCUMFERENCE;
    stroke.style.strokeDashoffset = String(CIRCUMFERENCE);

    const duration = 1400;
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
    }, 200);
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
        padding: '20px 24px',
        boxShadow: 'var(--uniflow-shadow)',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginBottom: 24,
      }}
    >
      <div style={{ position: 'relative', width: 90, height: 90, flexShrink: 0 }}>
        <svg width="90" height="90" viewBox="0 0 90 90" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="45"
            cy="45"
            r="42"
            fill="none"
            stroke="var(--uniflow-blue-light)"
            strokeWidth="7"
          />
          <circle
            ref={strokeRef}
            cx="45"
            cy="45"
            r="42"
            fill="none"
            stroke="var(--uniflow-blue)"
            strokeWidth="7"
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
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <NumericDisplay size={20} weight={800} color="var(--uniflow-9)" letterSpacing="-0.5px">
            {displayPct}%
          </NumericDisplay>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--uniflow-text-1)', marginBottom: 4 }}>
          Course Progress
        </div>
        <div
          style={{
            fontSize: 13,
            color: 'var(--uniflow-text-2)',
            marginBottom: 10,
            display: 'flex',
            alignItems: 'baseline',
            gap: 4,
          }}
        >
          <NumericDisplay size={13} weight={700} color="var(--uniflow-text-1)">
            {ACTIVE_COURSES}
          </NumericDisplay>
          <span>of</span>
          <NumericDisplay size={13} weight={700} color="var(--uniflow-text-1)">
            {TOTAL_COURSES}
          </NumericDisplay>
          <span>courses active</span>
        </div>
        <StatusPill tone="brand" label="Chapter 4 · The IS-LM Model" />
      </div>
    </div>
  );
}
