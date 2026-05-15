'use client';

import { useState } from 'react';
import { ec22Quiz } from '@/lib/data/quiz';

type AnswerState = 'unanswered' | 'correct' | 'wrong';

export default function QuizTab() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const question = ec22Quiz[questionIndex];
  const isAnswered = answerState !== 'unanswered';
  const progress = (questionIndex / ec22Quiz.length) * 100;

  function handleAnswer(optionIndex: number) {
    if (isAnswered) return;
    const correct = optionIndex === question.correctIndex;
    setSelectedOption(optionIndex);
    setAnswerState(correct ? 'correct' : 'wrong');
    if (correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (questionIndex < ec22Quiz.length - 1) {
      setQuestionIndex((i) => i + 1);
      setSelectedOption(null);
      setAnswerState('unanswered');
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setQuestionIndex(0);
    setSelectedOption(null);
    setAnswerState('unanswered');
    setFinished(false);
    setScore(0);
  }

  if (finished) {
    return (
      <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, padding: '40px', textAlign: 'center', boxShadow: 'var(--uniflow-shadow)' }}>
        <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--uniflow-blue)', marginBottom: 8 }}>{score}/{ec22Quiz.length}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--uniflow-text-1)', marginBottom: 4 }}>Quiz complete</div>
        <div style={{ fontSize: 13, color: 'var(--uniflow-text-2)', marginBottom: 24 }}>
          {score >= 8 ? 'Excellent. You have a solid grasp of these concepts.' : score >= 6 ? 'Good effort. Review the questions you missed.' : 'Keep practising. Go through the Notes tab and try again.'}
        </div>
        <button
          type="button"
          onClick={handleRestart}
          style={{ background: 'var(--uniflow-blue)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
        >
          Restart quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, padding: '28px 32px', boxShadow: 'var(--uniflow-shadow)' }}>
      {/* Progress bar */}
      <div style={{ height: 4, background: 'var(--uniflow-blue-light)', borderRadius: 2, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--uniflow-blue)', borderRadius: 2, transition: 'width 0.3s' }} />
      </div>

      <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--uniflow-text-3)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 }}>
        Question {questionIndex + 1} of {ec22Quiz.length}
      </div>

      <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--uniflow-text-1)', lineHeight: 1.45, marginBottom: 20 }}>
        {question.question}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {question.options.map((opt, i) => {
          const isCorrectOpt = i === question.correctIndex;
          const isSelectedOpt = i === selectedOption;
          let borderColor = 'var(--uniflow-border)';
          let bg = 'var(--uniflow-card)';
          let color = 'var(--uniflow-text-1)';
          let letterBg = '#F3F4F6';
          let letterColor = 'var(--uniflow-text-2)';

          if (isAnswered) {
            if (isCorrectOpt) {
              borderColor = 'var(--uniflow-green)';
              bg = 'var(--uniflow-green-light)';
              color = '#15803D';
              letterBg = 'var(--uniflow-green)';
              letterColor = '#fff';
            } else if (isSelectedOpt) {
              borderColor = 'var(--uniflow-red)';
              bg = '#FEF2F2';
              color = '#991B1B';
              letterBg = 'var(--uniflow-red)';
              letterColor = '#fff';
            }
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleAnswer(i)}
              disabled={isAnswered}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: 10,
                border: `1px solid ${borderColor}`,
                background: bg,
                color,
                fontSize: 13,
                fontWeight: 600,
                textAlign: 'left',
                cursor: isAnswered ? 'default' : 'pointer',
                transition: 'border-color 0.15s, background 0.15s',
                width: '100%',
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 6,
                  background: letterBg,
                  color: letterColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            lineHeight: 1.6,
            marginBottom: 16,
            background: answerState === 'correct' ? 'var(--uniflow-green-light)' : '#FEF2F2',
            color: answerState === 'correct' ? '#15803D' : '#991B1B',
            border: `1px solid ${answerState === 'correct' ? '#BBF7D0' : '#FECACA'}`,
          }}
        >
          {answerState === 'correct' ? `Correct. ${question.explanation}` : `Not quite. ${question.explanation}`}
        </div>
      )}

      {isAnswered && (
        <button
          type="button"
          onClick={handleNext}
          style={{
            background: 'var(--uniflow-blue)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          {questionIndex < ec22Quiz.length - 1 ? 'Next question →' : 'See results'}
        </button>
      )}
    </div>
  );
}
