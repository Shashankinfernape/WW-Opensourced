import React from 'react';
import { Icon } from '../icons/Icon';

interface StarredMessagesPanelProps {
  onClose: () => void;
}

export const StarredMessagesPanel: React.FC<StarredMessagesPanelProps> = ({ onClose }) => {
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
          padding: '0 20px',
          gap: '24px',
          borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
        }}
      >
        <button
          type="button"
          aria-label="Back"
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px', display: 'flex' }}
        >
          <Icon name="ic-arrow-back" size={24} />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--primary, #e9edef)', margin: 0 }}>
          Starred messages
        </h2>
      </header>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px',
          textAlign: 'center',
          color: 'var(--secondary, #8696a0)',
        }}
      >
        <div style={{ fontSize: '15px', color: 'var(--primary, #e9edef)', marginBottom: '8px' }}>
          No starred messages
        </div>
        <div style={{ fontSize: '13px', lineHeight: '20px' }}>
          Tap and hold on any message to star it, so you can easily find it later.
        </div>
      </div>
    </div>
  );
};

export default StarredMessagesPanel;
