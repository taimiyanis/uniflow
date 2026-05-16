'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courses } from '@/lib/data/courses';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { StatusPill } from '@/components/ui/StatusPill';

export default function CourseGrid() {
  const [comingSoon, setComingSoon] = useState<{ code: string; name: string } | null>(null);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: 'var(--uniflow-text-1)',
            marginBottom: 16,
          }}
        >
          Your Courses
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 14,
          }}
        >
          {courses.map((course) =>
            course.available ? (
              <Link
                key={course.code}
                href={`/course/${course.code.toLowerCase()}`}
                className="uniflow-interactive-card"
                style={{
                  background: 'var(--uniflow-card)',
                  border: '1px solid var(--uniflow-border)',
                  borderLeft: '4px solid var(--uniflow-blue)',
                  borderRadius: 12,
                  padding: '16px 18px',
                  textDecoration: 'none',
                  boxShadow: 'var(--uniflow-shadow)',
                  display: 'block',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono), ui-monospace, monospace',
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--uniflow-blue)',
                    letterSpacing: '0.5px',
                    marginBottom: 8,
                  }}
                >
                  {course.code}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--uniflow-text-1)',
                    lineHeight: 1.35,
                    marginBottom: 12,
                  }}
                >
                  {course.name}
                </div>
                <StatusPill tone="success" label="Active" size="xs" uppercase />
              </Link>
            ) : (
              <div
                key={course.code}
                role="button"
                tabIndex={0}
                onClick={() => setComingSoon({ code: course.code, name: course.name })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ')
                    setComingSoon({ code: course.code, name: course.name });
                }}
                className="uniflow-interactive-card"
                style={{
                  background: 'var(--uniflow-card)',
                  border: '1px solid var(--uniflow-border)',
                  borderLeft: '4px solid var(--uniflow-border)',
                  borderRadius: 12,
                  padding: '16px 18px',
                  boxShadow: 'var(--uniflow-shadow)',
                  cursor: 'pointer',
                  opacity: 0.7,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono), ui-monospace, monospace',
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--uniflow-text-3)',
                    letterSpacing: '0.5px',
                    marginBottom: 8,
                  }}
                >
                  {course.code}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--uniflow-text-2)',
                    lineHeight: 1.35,
                    marginBottom: 12,
                  }}
                >
                  {course.name}
                </div>
                <StatusPill tone="neutral" label="Coming soon" size="xs" uppercase />
              </div>
            )
          )}
        </div>
      </div>

      <Dialog open={!!comingSoon} onOpenChange={() => setComingSoon(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {comingSoon?.code} — {comingSoon?.name}
            </DialogTitle>
            <DialogDescription>
              This course is not yet available on UNIFLOW. We are adding content for all 5 B2 Fall courses. Check back soon.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
