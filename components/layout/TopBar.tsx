'use client';

import { Search, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <nav
      aria-label="Top navigation"
      style={{
        height: 'var(--topbar-height)',
        background: 'var(--uniflow-card)',
        borderBottom: '1px solid var(--uniflow-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 28,
        paddingRight: 28,
        flexShrink: 0,
        zIndex: 20,
      }}
    >
      {/* Search */}
      <div
        style={{
          position: 'relative',
          width: 260,
        }}
      >
        <Search
          size={14}
          strokeWidth={2}
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--uniflow-text-3)',
            pointerEvents: 'none',
          }}
        />
        <input
          type="search"
          placeholder="Search courses, topics…"
          aria-label="Search"
          style={{
            width: '100%',
            height: 34,
            paddingLeft: 34,
            paddingRight: 12,
            borderRadius: 999,
            border: '1px solid var(--uniflow-border)',
            background: 'var(--uniflow-1)',
            fontSize: 13,
            fontFamily: 'var(--font-body)',
            color: 'var(--uniflow-text-1)',
            outline: 'none',
            transition: 'border-color 150ms, box-shadow 150ms',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--uniflow-blue-border)';
            e.currentTarget.style.boxShadow = '0 0 0 3px var(--uniflow-blue-light)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--uniflow-border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Notification bell */}
        <button
          aria-label="Notifications"
          style={{
            width: 34,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--uniflow-text-2)',
            transition: 'background 150ms, color 150ms',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--uniflow-1)';
            e.currentTarget.style.color = 'var(--uniflow-text-1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--uniflow-text-2)';
          }}
        >
          <Bell size={18} strokeWidth={1.8} />
        </button>

        {/* Avatar chip */}
        <div
          aria-label="User menu"
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'var(--uniflow-blue)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 600,
            fontFamily: 'var(--font-display)',
            cursor: 'pointer',
            flexShrink: 0,
            userSelect: 'none',
          }}
        >
          YT
        </div>
      </div>
    </nav>
  );
}
