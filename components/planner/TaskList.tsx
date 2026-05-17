'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Plus, X } from 'lucide-react';
import { plannerTasks, type Task } from '@/lib/data/tasks';
import { StatusPill } from '@/components/ui/StatusPill';
import { courses } from '@/lib/data/courses';

const ALL_COURSE_CODES = courses.map((c) => c.code);

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(plannerTasks);
  const [adding, setAdding] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [newCourse, setNewCourse] = useState<string>(ALL_COURSE_CODES[0] ?? 'EC22');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (adding) inputRef.current?.focus();
  }, [adding]);

  function toggle(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function startAdding() {
    setAdding(true);
    setNewLabel('');
  }

  function cancelAdding() {
    setAdding(false);
    setNewLabel('');
  }

  function commitAdding() {
    const label = newLabel.trim();
    if (!label) {
      cancelAdding();
      return;
    }
    const id = `t-${Date.now()}`;
    setTasks((prev) => [...prev, { id, label, course: newCourse, due: null, done: false }]);
    setNewLabel('');
    // keep `adding` true so user can stack tasks; press Esc or click X to leave
    inputRef.current?.focus();
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)' }}>
          This week&apos;s tasks
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: 11,
            color: 'var(--uniflow-text-3)',
            fontWeight: 600,
          }}
        >
          {tasks.filter((t) => t.done).length}/{tasks.length}
        </span>
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
              borderBottom:
                i === tasks.length - 1 && !adding
                  ? 'none'
                  : '1px solid var(--uniflow-border)',
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
                  fontFamily: 'var(--font-mono), monospace',
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

        {/* Inline add-task row */}
        {adding && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 8px',
              margin: '0 -8px',
              borderRadius: 8,
              background: 'var(--uniflow-2)',
              border: '1px dashed var(--uniflow-blue-border)',
            }}
          >
            <div
              aria-hidden
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                border: '2px solid var(--uniflow-blue-border)',
                background: 'transparent',
                flexShrink: 0,
              }}
            />
            <input
              ref={inputRef}
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  commitAdding();
                } else if (e.key === 'Escape') {
                  e.preventDefault();
                  cancelAdding();
                }
              }}
              placeholder="New task — press Enter to save, Esc to close"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--uniflow-text-1)',
                fontFamily: 'inherit',
              }}
            />
            <select
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              aria-label="Course"
              style={{
                background: 'var(--uniflow-blue-light)',
                color: 'var(--uniflow-blue-dark)',
                border: '1px solid var(--uniflow-blue-border)',
                borderRadius: 999,
                padding: '3px 9px',
                fontSize: 11,
                fontWeight: 700,
                fontFamily: 'var(--font-mono), monospace',
                cursor: 'pointer',
              }}
            >
              {ALL_COURSE_CODES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={cancelAdding}
              aria-label="Cancel add task"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--uniflow-text-3)',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={14} strokeWidth={2.25} />
            </button>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={adding ? commitAdding : startAdding}
        style={{
          marginTop: 14,
          width: '100%',
          padding: '10px',
          background: 'transparent',
          border: `1px dashed ${adding ? 'var(--uniflow-blue-border)' : 'var(--uniflow-border)'}`,
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 600,
          color: adding ? 'var(--uniflow-blue)' : 'var(--uniflow-text-3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          transition: 'all var(--duration-fast) var(--ease-out)',
        }}
      >
        <Plus size={14} strokeWidth={2.5} />
        {adding ? 'Save task' : 'Add task'}
      </button>
    </div>
  );
}
