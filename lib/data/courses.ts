export interface Course {
  code: string;
  name: string;
  available: boolean;
  examDate?: string; // ISO yyyy-mm-dd
}

export const courses: Course[] = [
  { code: 'EC22', name: 'Macroeconomics', available: true, examDate: '2026-05-22' },
  { code: 'AC22', name: 'Financial Accounting', available: false },
  { code: 'MA22', name: 'Fundamentals of Mathematics 2', available: false },
  { code: 'LW22', name: 'Contract & Business Law in Europe', available: false },
  { code: 'MK21', name: 'Marketing', available: false },
];

export const HERO_EXAM = courses[0]; // EC22 Macro is the demo hero

/** Days from today to ISO date. Returns ≥0 (clamps past dates to 0). */
export function daysUntil(isoDate: string): number {
  const now = new Date();
  const target = new Date(isoDate + 'T00:00:00');
  const diffMs = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}
