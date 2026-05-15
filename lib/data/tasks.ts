export interface Task {
  id: string;
  label: string;
  course: string;
  due: string | null;
  done: boolean;
}

export interface Event {
  when: string;
  name: string;
  hot: boolean;
}

export const plannerTasks: Task[] = [
  { id: '1', label: 'Read Chapter 4 — Macro', course: 'EC22', due: null, done: true },
  { id: '2', label: 'Finish exercises set 3', course: 'AC22', due: 'Mon', done: false },
  { id: '3', label: 'Review past exam paper', course: 'LW22', due: 'Wed', done: false },
  { id: '4', label: 'Prepare IS-LM diagram notes', course: 'EC22', due: 'Thu', done: false },
  { id: '5', label: 'Complete Chapter Quiz', course: 'MA22', due: 'Fri', done: false },
];

export const upcomingEvents: Event[] = [
  { when: 'Today · 14:00', name: 'Macroeconomics Live Session', hot: true },
  { when: 'Friday', name: 'Maths 2 — Chapter Quiz', hot: false },
  { when: 'Next Tuesday', name: 'Financial Accounting Mock', hot: false },
  { when: 'May 22', name: 'Macroeconomics Exam', hot: false },
];
