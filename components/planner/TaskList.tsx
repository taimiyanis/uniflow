'use client';

import { useState } from 'react';
import { plannerTasks, Task } from '@/lib/data/tasks';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(plannerTasks);

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, padding: '20px 24px', boxShadow: 'var(--uniflow-shadow)' }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 16 }}>This week&apos;s tasks</div>
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            role="button"
            tabIndex={0}
            onClick={() => toggle(task.id)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(task.id); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 0',
              borderBottom: '1px solid var(--uniflow-border)',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                border: `2px solid ${task.done ? 'var(--uniflow-blue)' : 'var(--uniflow-border)'}`,
                background: task.done ? 'var(--uniflow-blue)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#fff',
                fontSize: 11,
                fontWeight: 800,
              }}
            >
              {task.done ? '✓' : ''}
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: task.done ? 'var(--uniflow-text-3)' : 'var(--uniflow-text-1)', textDecoration: task.done ? 'line-through' : 'none', flex: 1 }}>
              {task.label}
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--uniflow-blue)', background: 'var(--uniflow-blue-light)', padding: '2px 8px', borderRadius: 4 }}>
              {task.course}
            </span>
            {task.due && (
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--uniflow-text-3)' }}>{task.due}</span>
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
          background: 'none',
          border: '1px dashed var(--uniflow-border)',
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--uniflow-text-3)',
          cursor: 'pointer',
        }}
      >
        + Add task
      </button>
    </div>
  );
}
