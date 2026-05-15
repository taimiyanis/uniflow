import TaskList from '@/components/planner/TaskList';
import UpcomingEvents from '@/components/planner/UpcomingEvents';

export default function PlannerPage() {
  return (
    <div>
      <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--uniflow-text-1)', marginBottom: 24 }}>Planner</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <TaskList />
        <UpcomingEvents />
      </div>
    </div>
  );
}
