'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const videos = [
  { title: 'Introduction to Macroeconomics', duration: '14 min' },
  { title: 'GDP and National Accounts', duration: '22 min' },
  { title: 'Inflation and the Price Level', duration: '18 min' },
  { title: 'The IS-LM Model', duration: '31 min' },
];

export default function VideosTab() {
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <>
      <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--uniflow-shadow)' }}>
        {/* Lock banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1B2B5E 0%, #2F6FED 100%)',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 6 }}>UNIFLOW+ required</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Unlock 8 video lessons for this course</div>
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
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Upgrade to UNIFLOW+
          </button>
        </div>

        {/* Video list (dimmed) */}
        <div style={{ padding: '16px 20px', opacity: 0.4 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--uniflow-text-2)', marginBottom: 12 }}>Videos in this course</div>
          {videos.map((v) => (
            <div key={v.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--uniflow-border)' }}>
              <div style={{ width: 44, height: 32, background: '#F3F4F6', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: 'var(--uniflow-text-3)', flexShrink: 0 }}>
                PRO
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--uniflow-text-1)' }}>{v.title}</div>
                <div style={{ fontSize: 11, color: 'var(--uniflow-text-3)' }}>{v.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={showUpgrade} onOpenChange={setShowUpgrade}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to UNIFLOW+</DialogTitle>
            <DialogDescription>
              Get live sessions and video lessons for all 22 courses. Available at the start of next semester.
            </DialogDescription>
          </DialogHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
            <div style={{ background: 'var(--uniflow-blue-light)', border: '1px solid var(--uniflow-blue-border)', borderRadius: 10, padding: '16px 20px' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-blue)', marginBottom: 4 }}>Student — €29/month</div>
              <div style={{ fontSize: 12, color: 'var(--uniflow-text-2)' }}>Video lessons · Live sessions · AI Tutor Pro</div>
            </div>
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 10, padding: '16px 20px' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#15803D', marginBottom: 4 }}>Annual — €199/year</div>
              <div style={{ fontSize: 12, color: 'var(--uniflow-text-2)' }}>Everything in Student · Save 43%</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
