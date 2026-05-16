'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import {
  LayoutDashboardIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  SparklesIcon,
  PaletteIcon,
  CornerDownLeftIcon,
  SearchIcon,
} from 'lucide-react';
import { ec22Chapters } from '@/lib/data/chapters';
import { plannerTasks } from '@/lib/data/tasks';
import { KbdHint } from '@/components/ui/KbdHint';

type Route = {
  key: string;
  label: string;
  href: string;
  Icon: typeof LayoutDashboardIcon;
  shortcut?: string;
};

const routes: Route[] = [
  { key: 'dashboard', label: 'Dashboard', href: '/', Icon: LayoutDashboardIcon, shortcut: '1' },
  { key: 'courses', label: 'Macroeconomics (EC22)', href: '/course/ec22', Icon: BookOpenIcon, shortcut: '2' },
  { key: 'planner', label: 'Planner', href: '/planner', Icon: CalendarDaysIcon, shortcut: '3' },
  { key: 'ai-tutor', label: 'AI Tutor', href: '/course/ec22', Icon: SparklesIcon, shortcut: '4' },
  { key: 'design-research', label: 'Design Research', href: '/design-research', Icon: PaletteIcon, shortcut: '5' },
];

export default function CommandBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (!open) setSearch('');
  }, [open]);

  const pendingTasks = useMemo(() => plannerTasks.filter((t) => !t.done), []);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  function askAI() {
    setOpen(false);
    router.push('/course/ec22');
  }

  return (
    <>
      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(27, 43, 94, 0.40)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            zIndex: 100,
            animation: 'cmd-fade-in var(--duration-fast) var(--ease-out)',
          }}
        />
      )}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 96,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(640px, calc(100vw - 32px))',
            zIndex: 101,
            animation: 'cmd-spring-in var(--duration-base) var(--ease-spring)',
          }}
        >
          <Command
            label="Command palette"
            shouldFilter
            style={{
              background: 'var(--uniflow-card)',
              border: '1px solid var(--uniflow-border)',
              borderRadius: 14,
              boxShadow:
                '0 24px 48px -12px oklch(0.245 0.085 263 / 0.20), 0 8px 16px -8px oklch(0.245 0.085 263 / 0.10)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 18px',
                borderBottom: '1px solid var(--uniflow-border)',
              }}
            >
              <SearchIcon size={16} color="var(--uniflow-text-3)" strokeWidth={2} />
              <Command.Input
                autoFocus
                value={search}
                onValueChange={setSearch}
                placeholder="Search courses, chapters, tasks…"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--uniflow-text-1)',
                  fontFamily: 'inherit',
                }}
              />
              <KbdHint>ESC</KbdHint>
            </div>

            <Command.List
              style={{
                maxHeight: 420,
                overflowY: 'auto',
                padding: '8px',
              }}
            >
              <Command.Empty
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  fontSize: 13,
                  color: 'var(--uniflow-text-2)',
                }}
              >
                <button
                  type="button"
                  onClick={askAI}
                  style={{
                    width: '100%',
                    background: 'var(--uniflow-blue-light)',
                    border: '1px solid var(--uniflow-blue-border)',
                    borderRadius: 10,
                    padding: '14px 16px',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--uniflow-blue-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <SparklesIcon size={14} strokeWidth={2.25} />
                    Ask AI: <em>{search || '…'}</em>
                  </span>
                  <KbdHint>↵</KbdHint>
                </button>
              </Command.Empty>

              <CommandSection heading="Go to">
                {routes.map((r) => (
                  <Row
                    key={r.key}
                    value={r.label}
                    onSelect={() => navigate(r.href)}
                    icon={<r.Icon size={15} strokeWidth={2} />}
                    label={r.label}
                    accessory={r.shortcut ? <KbdHint>⌘{r.shortcut}</KbdHint> : undefined}
                  />
                ))}
              </CommandSection>

              <CommandSection heading="EC22 · Macroeconomics · Chapters">
                {ec22Chapters.map((ch) => (
                  <Row
                    key={ch.index}
                    value={`${ch.label} ${ch.title}`}
                    onSelect={() =>
                      ch.status !== 'locked'
                        ? navigate(`/course/ec22?chapter=${ch.index}`)
                        : undefined
                    }
                    icon={<BookOpenIcon size={15} strokeWidth={2} />}
                    label={ch.title}
                    leadingMono={ch.label}
                    accessory={
                      ch.status === 'done' ? (
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--success)' }}>
                          DONE
                        </span>
                      ) : ch.status === 'current' ? (
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--uniflow-blue)' }}>
                          CURRENT
                        </span>
                      ) : (
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--uniflow-text-3)' }}>
                          LOCKED
                        </span>
                      )
                    }
                    disabled={ch.status === 'locked'}
                  />
                ))}
              </CommandSection>

              {pendingTasks.length > 0 && (
                <CommandSection heading="Open tasks">
                  {pendingTasks.map((t) => (
                    <Row
                      key={t.id}
                      value={`${t.label} ${t.course} ${t.due ?? ''}`}
                      onSelect={() => navigate('/planner')}
                      icon={<CalendarDaysIcon size={15} strokeWidth={2} />}
                      label={t.label}
                      leadingMono={t.course}
                      accessory={
                        t.due ? (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono), monospace',
                              fontSize: 11,
                              color: 'var(--uniflow-text-3)',
                            }}
                          >
                            {t.due}
                          </span>
                        ) : undefined
                      }
                    />
                  ))}
                </CommandSection>
              )}

              <CommandSection heading="AI Tutor">
                <Row
                  value="ask ai sparkles tutor"
                  onSelect={askAI}
                  icon={<SparklesIcon size={15} strokeWidth={2} color="var(--uniflow-blue)" />}
                  label={
                    search ? (
                      <>
                        Ask AI: <em style={{ color: 'var(--uniflow-blue-dark)' }}>{search}</em>
                      </>
                    ) : (
                      'Ask the AI Tutor anything'
                    )
                  }
                  accessory={<KbdHint>↵</KbdHint>}
                />
              </CommandSection>
            </Command.List>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 14px',
                borderTop: '1px solid var(--uniflow-border)',
                background: 'var(--uniflow-2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--uniflow-text-3)' }}>
                  <KbdHint>↑</KbdHint>
                  <KbdHint>↓</KbdHint>
                  to navigate
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--uniflow-text-3)' }}>
                  <KbdHint>
                    <CornerDownLeftIcon size={9} strokeWidth={2.5} />
                  </KbdHint>
                  to open
                </span>
              </div>
              <span style={{ fontSize: 11, color: 'var(--uniflow-text-3)', fontWeight: 500 }}>
                UNIFLOW · Cmd+K
              </span>
            </div>
          </Command>
        </div>
      )}

      <style>{`
        @keyframes cmd-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cmd-spring-in {
          from { opacity: 0; transform: translate(-50%, -8px) scale(0.97); }
          to   { opacity: 1; transform: translate(-50%, 0)    scale(1); }
        }
        [cmdk-item][data-selected="true"] {
          background: var(--uniflow-2);
        }
        [cmdk-item][data-disabled="true"] {
          opacity: 0.5;
          cursor: not-allowed;
        }
        [cmdk-group-heading] {
          padding: 8px 12px 4px;
          font-size: 10px;
          font-weight: 700;
          color: var(--uniflow-text-3);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
      `}</style>
    </>
  );
}

function CommandSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <Command.Group heading={heading} style={{ marginBottom: 4 }}>
      {children}
    </Command.Group>
  );
}

function Row({
  value,
  onSelect,
  icon,
  leadingMono,
  label,
  accessory,
  disabled,
}: {
  value: string;
  onSelect: () => void;
  icon?: React.ReactNode;
  leadingMono?: string;
  label: React.ReactNode;
  accessory?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <Command.Item
      value={value}
      onSelect={onSelect}
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 12px',
        borderRadius: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: 13,
        color: 'var(--uniflow-text-1)',
        userSelect: 'none',
      }}
    >
      {icon && (
        <span style={{ color: 'var(--uniflow-text-3)', display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
      )}
      {leadingMono && (
        <span
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--uniflow-text-3)',
            minWidth: 36,
          }}
        >
          {leadingMono}
        </span>
      )}
      <span style={{ flex: 1, fontWeight: 500 }}>{label}</span>
      {accessory}
    </Command.Item>
  );
}
