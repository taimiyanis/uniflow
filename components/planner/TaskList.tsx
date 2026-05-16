'use client';

import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { plannerTasks, type Task } from '@/lib/data/tasks';
import { StatusPill } from '@/components/ui/StatusPill';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(plannerTasks);

  function toggle(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '20px 24px',
        boxShadow: 'var(--uniflow-shadow)',
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)', marginBottom: 16 }}>
        This week&apos;s tasks
      </div>
      <div>
        {tasks.map((task, i) => (
          <div
            key={task.id}
            role="checkbox"
            aria-checked={task.done}
            tabIndex={0}
            onClick={() => toggle(task.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle(task.id);
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 8px',
              margin: '0 -8px',
              borderBottom: i === tasks.length - 1 ? 'none' : '1px solid var(--uniflow-border)',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'background var(--duration-fast) var(--ease-out)',
            }}
            className="uniflow-task-row"
          >
            <div
              aria-hidden
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                border: `2px solid ${task.done ? 'var(--uniflow-blue)' : 'var(--uniflow-7)'}`,
                background: task.done ? 'var(--uniflow-blue)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#fff',
                transition: 'all var(--duration-fast) var(--ease-out)',
              }}
            >
              {task.done && <Check size={13} strokeWidth={3} />}
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: task.done ? 'var(--uniflow-text-3)' : 'var(--uniflow-text-1)',
                textDecoration: task.done ? 'line-through' : 'none',
                flex: 1,
              }}
            >
              {task.label}
            </span>
            <StatusPill tone="brand" label={task.course} size="xs" />
            {task.due && (
              <span
                style={{
                  fontFamily: 'var(--font-mono), ui-monospace, monospace',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--uniflow-text-3)',
                  minWidth: 32,
                  textAlign: 'right',
                }}
              >
                {task.due}
              </span>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        style={{
          marginTop: 14,
          width: '100%',
          padding: '10px',
          background: 'transparent',
          border: '1px dashed var(--uniflow-border)',
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--uniflow-text-3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          transition: 'all var(--duration-fast) var(--ease-out)',
        }}
      >
        <Plus size={14} strokeWidth={2.5} />
        Add task
      </button>
    </div>
  );
}
