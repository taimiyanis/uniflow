'use client';

import { useState } from 'react';
import { Lock, Sparkles, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { StatusPill } from '@/components/ui/StatusPill';
import { NumericDisplay } from '@/components/ui/NumericDisplay';

const videos = [
  { title: 'Introduction to Macroeconomics', duration: '14 min' },
  { title: 'GDP and National Accounts', duration: '22 min' },
  { title: 'Inflation and the Price Level', duration: '18 min' },
  { title: 'The IS-LM Model', duration: '31 min' },
];

const proFeatures = [
  'Video lessons for all 22 courses',
  'Live sessions with tutors',
  'AI Tutor Pro — unlimited usage',
  'Downloadable workbook PDFs',
  'Past exams with full solutions',
];

export default function VideosTab() {
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <>
      <div
        style={{
          background: 'var(--uniflow-card)',
          border: '1px solid var(--uniflow-border)',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: 'var(--uniflow-shadow)',
          position: 'relative',
        }}
      >
        {/* Lock banner */}
        <div
          style={{
            background:
              'linear-gradient(135deg, var(--uniflow-12) 0%, var(--uniflow-9) 100%)',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 10px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 999,
              fontSize: 10,
              fontWeight: 700,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: 12,
            }}
          >
            <Sparkles size={11} strokeWidth={2.5} />
            UNIFLOW+
          </div>
          <div style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6, letterSpacing: '-0.3px' }}>
            Unlock 8 video lessons for this course
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 18 }}>
            Plus AI Tutor Pro, live sessions, and workbook downloads across all 22 courses.
          </div>
          <button
            type="button"
            onClick={() => setShowUpgrade(true)}
            style={{
              background: '#fff',
              color: 'var(--uniflow-blue)',
              border: 'none',
              borderRadius: 8,
              padding: '10px 24px',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
            }}
          >
            See plans
          </button>
        </div>

        {/* Video list — blurred preview (Linear/Notion pattern, replaces opacity 0.4) */}
        <div style={{ padding: '20px 24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 14,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--uniflow-text-2)', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
              Videos in this course
            </div>
            <StatusPill tone="pro" label="PRO" size="xs" uppercase />
          </div>
          <div
            aria-hidden
            style={{
              filter: 'blur(3px)',
              userSelect: 'none',
              pointerEvents: 'none',
              opacity: 0.85,
            }}
          >
            {videos.map((v, i) => (
              <div
                key={v.title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 0',
                  borderBottom: i === videos.length - 1 ? 'none' : '1px solid var(--uniflow-border)',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 32,
                    background: 'var(--uniflow-3)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--uniflow-text-3)',
                    flexShrink: 0,
                  }}
                >
                  <Lock size={13} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--uniflow-text-1)' }}>
                    {v.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: 11,
                      color: 'var(--uniflow-text-3)',
                    }}
                  >
                    {v.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showUpgrade} onOpenChange={(open) => setShowUpgrade(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to UNIFLOW+</DialogTitle>
            <DialogDescription>
              Get live sessions and video lessons for all 22 courses. Available at the start of next semester.
            </DialogDescription>
          </DialogHeader>

          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--uniflow-text-3)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10 }}>
              What you get
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {proFeatures.map((f) => (
                <li
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--uniflow-text-1)',
                    fontWeight: 500,
                  }}
                >
                  <Check size={14} strokeWidth={2.5} color="var(--success)" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20 }}>
            <div
              style={{
                background: 'var(--uniflow-card)',
                border: '1px solid var(--uniflow-border)',
                borderRadius: 12,
                padding: '16px 18px',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--uniflow-text-3)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 6 }}>
                Student
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginBottom: 6 }}>
                <NumericDisplay size={26} weight={800} color="var(--uniflow-text-1)" letterSpacing="-1px">
                  €29
                </NumericDisplay>
                <span style={{ fontSize: 12, color: 'var(--uniflow-text-3)', fontWeight: 600 }}>/month</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--uniflow-text-2)' }}>Billed monthly</div>
            </div>
            <div
              style={{
                background: 'var(--uniflow-blue-light)',
                border: '1px solid var(--uniflow-blue-border)',
                borderRadius: 12,
                padding: '16px 18px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -10,
                  right: 10,
                }}
              >
                <StatusPill tone="success" label="Save 43%" size="xs" uppercase />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--uniflow-blue)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 6 }}>
                Annual
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginBottom: 6 }}>
                <NumericDisplay size={26} weight={800} color="var(--uniflow-blue-dark)" letterSpacing="-1px">
                  €199
                </NumericDisplay>
                <span style={{ fontSize: 12, color: 'var(--uniflow-text-3)', fontWeight: 600 }}>/year</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--uniflow-text-2)' }}>
                <NumericDisplay size={11} weight={600} color="var(--uniflow-text-2)">€16.58</NumericDisplay>
                {' '}per month equivalent
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
