import type { CSSProperties, ReactNode } from 'react';

type NumericDisplayProps = {
  children: ReactNode;
  size?: number | string;
  weight?: number;
  color?: string;
  letterSpacing?: string;
  lineHeight?: number | string;
  className?: string;
  style?: CSSProperties;
  as?: 'span' | 'div';
};

/**
 * Renders numeric content (grades, scores, countdowns, percentages, dates)
 * with JetBrains Mono + tabular-nums so widths stay stable as digits change.
 * One of the highest-leverage moves for "serious software" perception.
 */
export function NumericDisplay({
  children,
  size,
  weight = 700,
  color,
  letterSpacing,
  lineHeight,
  className,
  style,
  as: Tag = 'span',
}: NumericDisplayProps) {
  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'var(--font-mono), ui-monospace, "JetBrains Mono", monospace',
        fontVariantNumeric: 'tabular-nums',
        fontFeatureSettings: '"tnum" 1, "calt" 0',
        fontSize: size,
        fontWeight: weight,
        color,
        letterSpacing,
        lineHeight,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
