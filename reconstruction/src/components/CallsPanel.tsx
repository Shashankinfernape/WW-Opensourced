import React from 'react';
import { Icon } from '../icons/Icon';

export const CallsPanel: React.FC = () => {
  const callHistory = [
    { name: 'Alex Rivera', time: 'Today, 2:40 PM', type: 'video', incoming: true, missed: false },
    { name: 'Jordan Lee', time: 'Yesterday, 6:15 PM', type: 'voice', incoming: false, missed: false },
    { name: 'Taylor Brooks', time: '19 October, 11:20 AM', type: 'voice', incoming: true, missed: true },
    { name: 'Morgan Smith', time: '17 October, 4:05 PM', type: 'video', incoming: false, missed: false },
  ];

  return (
    <div
      className="x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1"
      style={{
        width: '100%',
        flexShrink: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--WDS-surface-default, #161717)',
        borderRight: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
      }}
    >
      <header
        className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x1a8lsjc x106a9eq x1xnnf8n"
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
        }}
      >
        <h1 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--primary, #e9edef)', margin: 0 }}>
          Calls
        </h1>
        <button
          type="button"
          aria-label="New call"
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px' }}
        >
          <Icon name="ic-call" size={24} />
        </button>
      </header>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ padding: '16px 20px 8px', fontSize: '14px', fontWeight: 500, color: '#00a884' }}>
          Recent
        </div>

        {callHistory.map((call, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 20px',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#00a884',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                {call.name[0]}
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, color: call.missed ? '#ea4335' : 'var(--primary, #e9edef)' }}>
                  {call.name}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>{call.incoming ? '↙' : '↗'}</span>
                  <span>{call.time}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label={call.type === 'video' ? 'Video call' : 'Voice call'}
              style={{ background: 'none', border: 'none', color: '#00a884', cursor: 'pointer', padding: '8px' }}
            >
              <Icon name={call.type === 'video' ? 'ic-videocam' : 'ic-call'} size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallsPanel;
