export type ChapterStatus = 'done' | 'current' | 'locked';

export interface Chapter {
  index: number;
  label: string;
  title: string;
  status: ChapterStatus;
}

export const ec22Chapters: Chapter[] = [
  { index: 0, label: 'Ch.1', title: 'Intro to Macro', status: 'done' },
  { index: 1, label: 'Ch.2', title: 'National Accounts', status: 'done' },
  { index: 2, label: 'Ch.3', title: 'GDP & GNP', status: 'done' },
  { index: 3, label: 'Ch.4', title: 'IS-LM Model', status: 'current' },
  { index: 4, label: 'Ch.5', title: 'AS-AD Model', status: 'locked' },
  { index: 5, label: 'Ch.6', title: 'Open Economy', status: 'locked' },
  { index: 6, label: 'Ch.7', title: 'Monetary Policy', status: 'locked' },
  { index: 7, label: 'Ch.8', title: 'Fiscal Policy', status: 'locked' },
];
