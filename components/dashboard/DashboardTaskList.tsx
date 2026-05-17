'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { plannerTasks } from '@/lib/data/tasks';
import { StatusPill } from '@/components/ui/StatusPill';
import type { StatusPillTone } from '@/components/ui/StatusPill';

const courseTone: Record<string, StatusPillTone> = {
  EC22: 'brand',
  AC22: 'info',
  MA22: 'success',
  LW22: 'warn',
  MK21: 'neutral',
};

export default function DashboardTaskList() {
  const [tasks, setTasks] = useState(plannerTasks.slice(0, 6));

  const toggle = (id: string) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 20px',
        boxShadow: 'var(--uniflow-shadow)',
        flex: 1,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            color: 'var(--uniflow-text-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.9px',
          }}
        >
          Today&apos;s tasks
        </span>
        <span
          style={{
            fontSize: 11,
            fontFamily: 'var(--font-mono)',
            color: 'var(--uniflow-text-3)',
          }}
        >
          {doneCount}/{tasks.length}
        </span>
      </div>

      {/* Task rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => toggle(task.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 6px',
              borderRadius: 8,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              transition: 'background 120ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--uniflow-1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {/* Checkbox */}
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                border: task.done
                  ? '1.5px solid var(--uniflow-blue)'
                  : '1.5px solid var(--uniflow-border)',
                background: task.done ? 'var(--uniflow-blue)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 150ms, border-color 150ms',
              }}
            >
              {task.done && <Check size={9} strokeWidth={3} color="#ffffff" />}
            </span>

            {/* Label */}
            <span
              style={{
                flex: 1,
                fontSize: 13,
                fontFamily: 'var(--font-body)',
                color: task.done ? 'var(--uniflow-text-3)' : 'var(--uniflow-text-1)',
                textDecoration: task.done ? 'line-through' : 'none',
                lineHeight: 1.4,
                transition: 'color 150ms',
              }}
            >
              {task.label}
            </span>

            {/* Course pill */}
            <StatusPill
              tone={courseTone[task.course] ?? 'neutral'}
              label={task.course}
              size="xs"
            />
          </button>
        ))}
      </div>

      {/* View all link */}
      <Link
        href="/planner"
        style={{
          display: 'block',
          marginTop: 12,
          fontSize: 12,
          fontFamily: 'var(--font-body)',
          color: 'var(--uniflow-blue)',
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        View all tasks →
      </Link>
    </div>
  );
}
