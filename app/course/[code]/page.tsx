import CoursePageClient from '@/components/course/CoursePageClient';

export default async function CoursePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  if (code !== 'ec22') {
    return <div style={{ padding: 40, color: 'var(--uniflow-text-2)' }}>Course not found.</div>;
  }
  return <CoursePageClient />;
}
