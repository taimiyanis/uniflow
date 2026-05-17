import DashboardHeader from '@/components/dashboard/DashboardHeader';
import PerformanceBars from '@/components/dashboard/PerformanceBars';
import ActivityChart from '@/components/dashboard/ActivityChart';
import DashboardTaskList from '@/components/dashboard/DashboardTaskList';
import ExamReadiness from '@/components/dashboard/ExamReadiness';
import UpcomingCalendar from '@/components/dashboard/UpcomingCalendar';
import StatCards from '@/components/dashboard/StatCards';

export default function HomePage() {
  return (
    <div
      style={{
        padding: '28px 28px 40px',
        minHeight: '100%',
      }}
    >
      {/* 3-column asymmetric grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr 240px',
          gap: 20,
          alignItems: 'start',
        }}
      >
        {/* LEFT COLUMN — greeting + course progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <DashboardHeader />
          <PerformanceBars />
        </div>

        {/* CENTER COLUMN — activity + tasks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ActivityChart />
          <DashboardTaskList />
        </div>

        {/* RIGHT COLUMN — readiness + upcoming + stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ExamReadiness />
          <UpcomingCalendar />
          <StatCards />
        </div>
      </div>
    </div>
  );
}
