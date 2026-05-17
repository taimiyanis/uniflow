import type { CSSProperties, ReactNode } from 'react';

export type StatusPillTone =
  | 'success'
  | 'warn'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'brand'
  | 'pro';

type StatusPillSize = 'xs' | 'sm';

type StatusPillProps = {
  tone?: StatusPillTone;
  label: ReactNode;
  size?: StatusPillSize;
  uppercase?: boolean;
  className?: string;
  style?: CSSProperties;
};

const tonePalette: Record<
  StatusPillTone,
  { dot: string; text: string; bg: string; border: string }
> = {
  success: {
    dot: 'var(--success)',
    text: 'var(--success-text)',
    bg: 'var(--success-bg)',
    border: 'oklch(0.680 0.165 152 / 0.25)',
  },
  warn: {
    dot: 'var(--warn)',
    text: '#854D0E',
    bg: 'var(--warn-bg)',
    border: 'oklch(0.665 0.155 75 / 0.30)',
  },
  danger: {
    dot: 'var(--danger)',
    text: '#B91C1C',
    bg: 'var(--danger-bg)',
    border: 'oklch(0.605 0.225 27 / 0.25)',
  },
  info: {
    dot: 'var(--info)',
    text: '#0369A1',
    bg: 'var(--info-bg)',
    border: 'oklch(0.660 0.135 230 / 0.25)',
  },
  neutral: {
    dot: 'var(--uniflow-text-3)',
    text: '#4B5360',
    bg: 'var(--uniflow-2)',
    border: '#E5E7EB',
  },
  brand: {
    dot: 'var(--uniflow-9)',
    text: 'var(--uniflow-blue-dark)',
    bg: 'var(--uniflow-blue-light)',
    border: 'var(--uniflow-blue-border)',
  },
  pro: {
    dot: 'var(--uniflow-amber)',
    text: '#92400E',
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.30)',
  },
};

const sizeStyle: Record<StatusPillSize, CSSProperties> = {
  xs: { fontSize: 10, padding: '2px 7px', gap: 5 },
  sm: { fontSize: 11, padding: '3px 9px', gap: 6 },
};

const sizeDot: Record<StatusPillSize, number> = { xs: 5, sm: 6 };

export function StatusPill({
  tone = 'neutral',
  label,
  size = 'sm',
  uppercase = false,
  className,
  style,
}: StatusPillProps) {
  const p = tonePalette[tone];
  const sz = sizeStyle[size];
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sz.gap,
        padding: sz.padding,
        background: p.bg,
        border: `1px solid ${p.border}`,
        borderRadius: 999,
        fontSize: sz.fontSize,
        fontWeight: 700,
        color: p.text,
        textTransform: uppercase ? 'uppercase' : 'none',
        letterSpacing: uppercase ? '0.6px' : '0',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        ...style,
      }}
    >
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          width: sizeDot[size],
          height: sizeDot[size],
          borderRadius: 999,
          background: p.dot,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}
