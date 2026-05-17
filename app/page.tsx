import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import ExamCountdown from '@/components/dashboard/ExamCountdown';
import ProgressRing from '@/components/dashboard/ProgressRing';
import QuickActions from '@/components/dashboard/QuickActions';
import CourseGrid from '@/components/dashboard/CourseGrid';

export default function HomePage() {
  return (
    <div>
      <WelcomeBanner />
      <div className="grid grid-cols-2 gap-4">
        <ExamCountdown />
        <ProgressRing />
      </div>
      <QuickActions />
      <CourseGrid />
    </div>
  );
}
