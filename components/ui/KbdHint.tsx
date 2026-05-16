import type { CSSProperties, ReactNode } from 'react';

type KbdHintTheme = 'light' | 'dark';

type KbdHintProps = {
  children: ReactNode;
  theme?: KbdHintTheme;
  className?: string;
  style?: CSSProperties;
};

/**
 * Small mono pill for keyboard shortcuts — Linear/Raycast pattern.
 * Use inside CommandBar rows, sidebar nav, and next to primary CTAs
 * to telegraph keyboard accessibility.
 */
export function KbdHint({ children, theme = 'light', className, style }: KbdHintProps) {
  const dark = theme === 'dark';
  return (
    <kbd
      className={className}
      style={{
        fontFamily: 'var(--font-mono), ui-monospace, "JetBrains Mono", monospace',
        fontSize: 10,
        fontWeight: 600,
        color: dark ? 'rgba(255,255,255,0.50)' : 'var(--uniflow-text-3)',
        background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
        border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
        padding: '1px 5px',
        borderRadius: 4,
        letterSpacing: '0.3px',
        lineHeight: 1.3,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        ...style,
      }}
    >
      {children}
    </kbd>
  );
}
