export interface Course {
  code: string;
  name: string;
  available: boolean;
}

export const courses: Course[] = [
  { code: 'EC22', name: 'Macroeconomics', available: true },
  { code: 'AC22', name: 'Financial Accounting', available: false },
  { code: 'MA22', name: 'Fundamentals of Mathematics 2', available: false },
  { code: 'LW22', name: 'Contract & Business Law in Europe', available: false },
  { code: 'MK21', name: 'Marketing', available: false },
];
