'use client';

import { useEffect, useRef } from 'react';

export default function ExamCountdown() {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const target = 10;
    const duration = 800;
    let startTime: number | null = null;

    let rafId: number;

    function step(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el!.textContent = String(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    }

    const timer = setTimeout(() => { rafId = requestAnimationFrame(step); }, 200);
    return () => { clearTimeout(timer); cancelAnimationFrame(rafId); };
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
        gap: 16,
        marginBottom: 24,
      }}
    >
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--uniflow-text-3)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 4 }}>
          Macroeconomics Exam
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span ref={numRef} style={{ fontSize: 36, fontWeight: 900, color: 'var(--uniflow-blue)' }}>0</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--uniflow-text-2)' }}>days away</span>
        </div>
        <div style={{ fontSize: 12, color: 'var(--uniflow-text-3)', marginTop: 2, fontWeight: 500 }}>May 22 · Keep the momentum.</div>
      </div>
    </div>
  );
}
