'use client';

import { useState } from 'react';
import { Lightbulb, Check, X as XIcon } from 'lucide-react';
import { ec22Quiz } from '@/lib/data/quiz';
import { NumericDisplay } from '@/components/ui/NumericDisplay';
import { StatusPill } from '@/components/ui/StatusPill';

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
    const passed = score >= 8;
    return (
      <div
        style={{
          background: 'var(--uniflow-card)',
          border: '1px solid var(--uniflow-border)',
          borderRadius: 14,
          padding: '40px',
          textAlign: 'center',
          boxShadow: 'var(--uniflow-shadow)',
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <StatusPill
            tone={passed ? 'success' : score >= 6 ? 'warn' : 'danger'}
            label={passed ? 'Mastered' : score >= 6 ? 'Familiar' : 'Needs review'}
            size="sm"
            uppercase
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            gap: 4,
            marginBottom: 12,
          }}
        >
          <NumericDisplay size={56} weight={800} color="var(--uniflow-9)" letterSpacing="-2px">
            {score}
          </NumericDisplay>
          <NumericDisplay size={28} weight={600} color="var(--uniflow-text-3)">
            /{ec22Quiz.length}
          </NumericDisplay>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--uniflow-text-1)', marginBottom: 4 }}>
          Quiz complete
        </div>
        <div style={{ fontSize: 13, color: 'var(--uniflow-text-2)', marginBottom: 24, maxWidth: 360, margin: '0 auto 24px' }}>
          {passed
            ? 'Excellent. You have a solid grasp of these concepts.'
            : score >= 6
              ? 'Good effort. Review the questions you missed.'
              : 'Keep practising. Go through the Notes tab and try again.'}
        </div>
        <button
          type="button"
          onClick={handleRestart}
          style={{
            background: 'var(--uniflow-blue)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 24px',
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Restart quiz
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 14,
        padding: '28px 32px',
        boxShadow: 'var(--uniflow-shadow)',
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          height: 8,
          background: 'var(--uniflow-blue-light)',
          borderRadius: 4,
          marginBottom: 20,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--uniflow-blue)',
            borderRadius: 4,
            transition: 'width var(--duration-slow) var(--ease-out)',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--uniflow-text-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            display: 'flex',
            alignItems: 'baseline',
            gap: 4,
          }}
        >
          Question{' '}
          <NumericDisplay size={11} weight={700} color="var(--uniflow-text-2)">
            {questionIndex + 1}
          </NumericDisplay>
          {' '}of{' '}
          <NumericDisplay size={11} weight={700} color="var(--uniflow-text-2)">
            {ec22Quiz.length}
          </NumericDisplay>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--uniflow-text-3)' }}>
          Score:{' '}
          <NumericDisplay size={11} weight={700} color="var(--uniflow-text-1)">
            {score}
          </NumericDisplay>
        </div>
      </div>

      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: 'var(--uniflow-text-1)',
          lineHeight: 1.45,
          marginBottom: 20,
        }}
      >
        {question.question}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {question.options.map((opt, i) => {
          const isCorrectOpt = i === question.correctIndex;
          const isSelectedOpt = i === selectedOption;
          let borderColor = 'var(--uniflow-border)';
          let bg = 'var(--uniflow-card)';
          let color = 'var(--uniflow-text-1)';
          let letterBg = 'var(--uniflow-3)';
          let letterColor = 'var(--uniflow-text-2)';

          if (isAnswered) {
            if (isCorrectOpt) {
              borderColor = 'var(--success)';
              bg = 'var(--success-bg)';
              color = 'var(--success-text)';
              letterBg = 'var(--success)';
              letterColor = '#fff';
            } else if (isSelectedOpt) {
              borderColor = 'var(--danger)';
              bg = 'var(--danger-bg)';
              color = 'var(--danger-text)';
              letterBg = 'var(--danger)';
              letterColor = '#fff';
            }
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleAnswer(i)}
              disabled={isAnswered}
              aria-disabled={isAnswered}
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
                cursor: isAnswered ? 'not-allowed' : 'pointer',
                transition: 'border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
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
                  fontFamily: 'var(--font-mono), monospace',
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
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            padding: '14px 16px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1.6,
            marginBottom: 16,
            background: answerState === 'correct' ? 'var(--success-bg)' : 'var(--danger-bg)',
            color: answerState === 'correct' ? 'var(--success-text)' : 'var(--danger-text)',
            border: `1px solid ${answerState === 'correct' ? 'oklch(0.680 0.165 152 / 0.25)' : 'oklch(0.605 0.225 27 / 0.25)'}`,
          }}
        >
          {answerState === 'correct' ? (
            <Check size={16} style={{ flexShrink: 0, marginTop: 1 }} strokeWidth={2.5} />
          ) : (
            <Lightbulb size={16} style={{ flexShrink: 0, marginTop: 1 }} strokeWidth={2} />
          )}
          <span>
            <strong>{answerState === 'correct' ? 'Correct. ' : 'Not quite. '}</strong>
            {question.explanation}
          </span>
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
