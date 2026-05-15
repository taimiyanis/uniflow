'use client';

import { useEffect, useRef } from 'react';

const CIRCUMFERENCE = 263.9; // 2π × 42

export default function ProgressRing() {
  const strokeRef = useRef<SVGCircleElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stroke = strokeRef.current;
    const pct = pctRef.current;
    if (!stroke || !pct) return;

    const targetPct = 68;
    const targetOffset = CIRCUMFERENCE - (targetPct / 100) * CIRCUMFERENCE;
    stroke.style.strokeDashoffset = String(CIRCUMFERENCE);

    const ringDuration = 1400;
    const counterDuration = 1200;
    let startTime: number | null = null;

    function step(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / Math.max(ringDuration, counterDuration), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const ringProgress = Math.min((ts - startTime) / ringDuration, 1);
      const ringEased = 1 - Math.pow(1 - ringProgress, 3);
      stroke!.style.strokeDashoffset = String(CIRCUMFERENCE - (CIRCUMFERENCE - targetOffset) * ringEased);

      pct!.textContent = Math.round(eased * targetPct) + '%';

      if (progress < 1) requestAnimationFrame(step);
    }

    const timer = setTimeout(() => requestAnimationFrame(step), 200);
    return () => clearTimeout(timer);
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
          <circle cx="45" cy="45" r="42" fill="none" stroke="var(--uniflow-blue-light)" strokeWidth="7" />
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
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span ref={pctRef} style={{ fontSize: 18, fontWeight: 900, color: 'var(--uniflow-blue)' }}>0%</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 4 }}>Course Progress</div>
        <div style={{ fontSize: 13, color: 'var(--uniflow-text-2)', marginBottom: 8 }}>7 of 10 courses active</div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--uniflow-blue)',
            background: 'var(--uniflow-blue-light)',
            padding: '4px 10px',
            borderRadius: 6,
            display: 'inline-block',
          }}
        >
          Chapter 4 — The IS-LM Model
        </div>
      </div>
    </div>
  );
}
