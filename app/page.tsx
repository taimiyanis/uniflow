import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import ExamCountdown from '@/components/dashboard/ExamCountdown';
import ProgressRing from '@/components/dashboard/ProgressRing';
import CourseGrid from '@/components/dashboard/CourseGrid';

export default function HomePage() {
  return (
    <div>
      <WelcomeBanner />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        <ExamCountdown />
        <ProgressRing />
      </div>
      <CourseGrid />
    </div>
  );
}
