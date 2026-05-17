import TaskList from '@/components/planner/TaskList';
import UpcomingEvents from '@/components/planner/UpcomingEvents';

export default function PlannerPage() {
  return (
    <div>
      <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--uniflow-text-1)', marginBottom: 24 }}>Planner</div>
      <div className="grid grid-cols-2 gap-5">
        <TaskList />
        <UpcomingEvents />
      </div>
    </div>
  );
}
