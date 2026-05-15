'use client';

import { useState } from 'react';
import { ec22Chapters } from '@/lib/data/chapters';
import ChapterNavigator from './ChapterNavigator';
import AIChatPanel from './AIChatPanel';
import NotesTab from './tabs/NotesTab';
import ExercisesTab from './tabs/ExercisesTab';
import PastExamsTab from './tabs/PastExamsTab';
import QuizTab from './tabs/QuizTab';
import VideosTab from './tabs/VideosTab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CoursePageClient() {
  const [selectedChapter, setSelectedChapter] = useState(3); // default: Ch.4 (IS-LM)

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--uniflow-text-3)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 6 }}>
            EC22 · Macroeconomics
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--uniflow-text-1)', marginBottom: 4 }}>
            Macroeconomics
          </div>
          <div style={{ fontSize: 13, color: 'var(--uniflow-text-2)' }}>B2 Fall 2025 · ESCP BIM</div>
        </div>

        <ChapterNavigator
          chapters={ec22Chapters}
          selectedIndex={selectedChapter}
          onSelect={setSelectedChapter}
        />

        <Tabs defaultValue="notes">
          <TabsList className="mb-5">
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="exercises">Exercises</TabsTrigger>
            <TabsTrigger value="exams">Past Exams</TabsTrigger>
            <TabsTrigger value="quiz">Quizzes</TabsTrigger>
            <TabsTrigger value="videos">Videos ★ PRO</TabsTrigger>
          </TabsList>
          <TabsContent value="notes">
            <NotesTab selectedChapterIndex={selectedChapter} />
          </TabsContent>
          <TabsContent value="exercises">
            <ExercisesTab />
          </TabsContent>
          <TabsContent value="exams">
            <PastExamsTab />
          </TabsContent>
          <TabsContent value="quiz">
            <QuizTab />
          </TabsContent>
          <TabsContent value="videos">
            <VideosTab />
          </TabsContent>
        </Tabs>
      </div>

      {/* AI Chat Panel */}
      <AIChatPanel />
    </div>
  );
}
