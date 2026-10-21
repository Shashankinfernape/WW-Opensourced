import React from 'react';
import { Icon } from '../icons/Icon';

interface StatusPanelProps {
  onClose?: () => void;
}

export const StatusPanel: React.FC<StatusPanelProps> = () => {
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
      {/* Header */}
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
          Status
        </h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            aria-label="New status"
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px' }}
          >
            <Icon name="ic-add" size={24} />
          </button>
          <button
            type="button"
            aria-label="Status menu"
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px' }}
          >
            <Icon name="ic-more-vert" size={24} />
          </button>
        </div>
      </header>

      {/* Body */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* My Status Row */}
        <div
          role="button"
          tabIndex={0}
          className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 20px',
            cursor: 'pointer',
          }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--avatar-placeholder-background, #6b7780)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                fontSize: '18px',
              }}
            >
              U
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#00a884',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #161717',
              }}
            >
              <Icon name="ic-add" size={14} />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}>
              My status
            </div>
            <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)' }}>
              Click to add status update
            </div>
          </div>
        </div>

        <div style={{ height: '8px', backgroundColor: 'var(--app-background, #0b141a)' }} />

        {/* Section title: Recent updates */}
        <div style={{ padding: '16px 20px 8px', fontSize: '14px', fontWeight: 500, color: '#00a884' }}>
          Recent updates
        </div>

        {/* Status updates items */}
        {[
          { name: 'Alex Rivera', time: 'Today at 3:12 PM', initial: 'A', color: '#00a884' },
          { name: 'Taylor Brooks', time: 'Today at 1:45 PM', initial: 'T', color: '#6b5b95' },
          { name: 'Morgan Smith', time: 'Yesterday at 9:20 PM', initial: 'M', color: '#d9534f' },
        ].map((item, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 20px',
              cursor: 'pointer',
            }}
          >
            {/* Status ring */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                padding: '2px',
                border: '2px solid #00a884',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                {item.initial}
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}>
                {item.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)' }}>
                {item.time}
              </div>
            </div>
          </div>
        ))}

        {/* Encryption notice */}
        <div style={{ padding: '32px 20px', textAlign: 'center', fontSize: '12px', color: 'var(--secondary, #8696a0)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <Icon name="ic-lock" size={12} color="var(--secondary, #8696a0)" />
          <span>Your status updates are end-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
