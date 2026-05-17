'use client';

import { useState } from 'react';
import TaskList from '@/components/planner/TaskList';
import UpcomingEvents from '@/components/planner/UpcomingEvents';
import WeekView from '@/components/planner/WeekView';

type View = 'list' | 'week';

export default function PlannerPage() {
  const [view, setView] = useState<View>('list');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--uniflow-text-1)' }}>Planner</div>
        {/* Toggle pill */}
        <div style={{
          display: 'flex',
          background: 'var(--uniflow-2)',
          border: '1px solid var(--uniflow-border)',
          borderRadius: 8,
          padding: 3,
          gap: 2,
        }}>
          {(['list', 'week'] as View[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              style={{
                padding: '5px 14px',
                borderRadius: 6,
                border: 'none',
                background: view === v ? 'var(--uniflow-card)' : 'transparent',
                color: view === v ? 'var(--uniflow-text-1)' : 'var(--uniflow-text-3)',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'capitalize',
                boxShadow: view === v ? 'var(--uniflow-shadow)' : 'none',
                transition: 'all 0.15s',
              }}
            >
              {v === 'list' ? 'List' : 'Week'}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {view === 'list' ? <TaskList /> : <WeekView />}
        <UpcomingEvents />
      </div>
    </div>
  );
}
