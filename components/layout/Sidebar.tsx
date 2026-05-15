'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = { label: string; href: string; icon: string; pro?: boolean };

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: '▣' },
  { label: 'My Courses', href: '/course/ec22', icon: '◈' },
  { label: 'Planner', href: '/planner', icon: '◷' },
  { label: 'AI Tutor', href: '#', icon: '◎' },
  { label: 'Grades', href: '#', icon: '◆', pro: true },
  { label: 'UNIFLOW+', href: '#', icon: '★', pro: true },
];

const DEMO_USER = { name: 'Yanis Taimi', initials: 'YT', subtitle: 'B2 · ESCP BIM' };

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 220,
        minWidth: 220,
        background: 'var(--uniflow-sidebar)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '24px 0',
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '0 20px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #2F6FED 0%, #1A4FC4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(47,111,237,0.45)',
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 19,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
            }}
          >
            UNIFLOW
          </span>
        </div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', marginTop: 10, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
          Student Portal
        </div>
      </div>

      {/* User avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 8 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'var(--uniflow-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 800,
            color: '#fff',
            flexShrink: 0,
          }}
        >
          {DEMO_USER.initials}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{DEMO_USER.name}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{DEMO_USER.subtitle}</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '0 12px' }}>
        {navItems.map((item) => {
          const isActive = item.href !== '#' && pathname === item.href;
          const commonStyle = {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '9px 12px',
            borderRadius: 8,
            marginBottom: 2,
            textDecoration: 'none',
            background: isActive ? 'rgba(47,111,237,0.18)' : 'transparent',
            color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
            fontSize: 13,
            fontWeight: isActive ? 700 : 500,
            transition: 'background 0.15s, color 0.15s',
            cursor: 'pointer',
          } as React.CSSProperties;

          const inner = (
            <>
              <span style={{ fontSize: 15, opacity: isActive ? 1 : 0.7 }}>{item.icon}</span>
              {item.label}
              {item.pro && (
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: 9,
                    fontWeight: 800,
                    background: 'rgba(245,158,11,0.18)',
                    color: 'var(--uniflow-amber)',
                    padding: '2px 6px',
                    borderRadius: 4,
                    letterSpacing: '0.5px',
                  }}
                >
                  PRO
                </span>
              )}
            </>
          );

          if (item.href === '#') {
            return (
              <span key={item.label} role="button" tabIndex={0} style={commonStyle}>
                {inner}
              </span>
            );
          }

          return (
            <Link key={item.label} href={item.href} style={commonStyle}>
              {inner}
            </Link>
          );
        })}
      </nav>

      {/* Motivation line */}
      <div style={{ padding: '16px 20px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.5 }}>
          Turn your effort into top scores.
        </div>
      </div>
    </aside>
  );
}
