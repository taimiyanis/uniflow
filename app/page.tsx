import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatCards from '@/components/dashboard/StatCards';
import ActivityChart from '@/components/dashboard/ActivityChart';
import ContinueLearning from '@/components/dashboard/ContinueLearning';
import QuickActions from '@/components/dashboard/QuickActions';
import CourseGrid from '@/components/dashboard/CourseGrid';

export default function HomePage() {
  return (
    <div>
      <DashboardHeader />
      <StatCards />
      <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 24 }}>
        <ActivityChart />
        <ContinueLearning />
      </div>
      <QuickActions />
      <CourseGrid />
    </div>
  );
}
