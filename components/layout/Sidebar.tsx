'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import {
  LayoutDashboardIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  SparklesIcon,
  PaletteIcon,
  GaugeIcon,
  CrownIcon,
  type LucideIcon,
} from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
  Icon: LucideIcon;
  shortcut?: string;
  pro?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', Icon: LayoutDashboardIcon, shortcut: '1' },
  { label: 'My Courses', href: '/course/ec22', Icon: BookOpenIcon, shortcut: '2' },
  { label: 'Planner', href: '/planner', Icon: CalendarDaysIcon, shortcut: '3' },
  { label: 'AI Tutor', href: '#', Icon: SparklesIcon, shortcut: '4' },
  { label: 'Design Research', href: '/design-research', Icon: PaletteIcon, shortcut: '5' },
  { label: 'Grades', href: '#', Icon: GaugeIcon, pro: true },
  { label: 'UNIFLOW+', href: '#', Icon: CrownIcon, pro: true },
];

const DEMO_USER = { name: 'Yanis Taimi', initials: 'YT', subtitle: 'B2 · ESCP BIM' };

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // Linear-style ⌘1..⌘5 keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey)) return;
      const item = navItems.find((n) => n.shortcut === e.key);
      if (!item || item.href === '#') return;
      e.preventDefault();
      router.push(item.href);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [router]);

  return (
    <aside
      style={{
        width: 224,
        minWidth: 224,
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
          const isDisabled = item.href === '#';
          const commonStyle = {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 10px',
            borderRadius: 8,
            marginBottom: 2,
            textDecoration: 'none',
            background: isActive ? 'rgba(47,111,237,0.18)' : 'transparent',
            color: isActive ? '#fff' : 'rgba(255,255,255,0.65)',
            fontSize: 13,
            fontWeight: isActive ? 600 : 500,
            transition: 'background 0.15s, color 0.15s',
            cursor: isDisabled ? 'default' : 'pointer',
          } as React.CSSProperties;

          const inner = (
            <>
              <item.Icon
                size={16}
                strokeWidth={isActive ? 2.25 : 2}
                style={{ opacity: isActive ? 1 : 0.75, flexShrink: 0 }}
              />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.shortcut && !item.pro && (
                <span
                  className="nav-shortcut"
                  style={{
                    fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
                    fontSize: 10,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.45)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '1px 5px',
                    borderRadius: 4,
                    letterSpacing: '0.3px',
                  }}
                >
                  ⌘{item.shortcut}
                </span>
              )}
              {item.pro && (
                <span
                  style={{
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

          if (isDisabled) {
            return (
              <button key={item.label} type="button" style={{ ...commonStyle, border: 'none', width: '100%', textAlign: 'left' }}>
                {inner}
              </button>
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
