import React from 'react';
import { Icon } from '../icons/Icon';
import { ChatSummary } from './ChatListPanel';

interface ContactInfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  chat: ChatSummary;
}

export const ContactInfoDrawer: React.FC<ContactInfoDrawerProps> = ({
  isOpen,
  onClose,
  chat,
}) => {
  if (!isOpen) return null;

  return (
    <div
      data-testid="drawer-right"
      className="x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw x1vb5itz x2ydcri x1873f8k x1fkvrks"
      style={{
        width: '400px',
        height: '100%',
        backgroundColor: 'var(--WDS-surface-default, #161717)',
        borderLeft: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 50,
        flexShrink: 0,
      }}
    >
      {/* Header (h: 64px) */}
      <header
        className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x1a8lsjc x106a9eq x1xnnf8n"
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          gap: '20px',
          borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px', display: 'flex' }}
        >
          <Icon name="ic-close" size={24} />
        </button>
        <h2 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)', margin: 0 }}>
          Contact info
        </h2>
      </header>

      {/* Drawer Body Scrollable */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Profile Card */}
        <div
          style={{
            backgroundColor: 'var(--WDS-surface-default, #161717)',
            padding: '28px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderBottom: '10px solid var(--app-background, #0b141a)',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: chat.color,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 600,
              marginBottom: '16px',
              userSelect: 'none',
            }}
          >
            {chat.initial}
          </div>
          <div style={{ fontSize: '20px', fontWeight: 500, color: 'var(--primary, #e9edef)', marginBottom: '4px' }}>
            {chat.name}
          </div>
          <div style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)' }}>
            +1 (555) 019-2834
          </div>
        </div>

        {/* About Section */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '10px solid var(--app-background, #0b141a)',
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '6px' }}>
            About
          </div>
          <div style={{ fontSize: '14.5px', color: 'var(--primary, #e9edef)' }}>
            Available for chats & calls.
          </div>
        </div>

        {/* Media, links and docs */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '10px solid var(--app-background, #0b141a)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '14px', color: 'var(--primary, #e9edef)' }}>
            Media, links and docs
          </span>
          <span style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)' }}>
            0 ›
          </span>
        </div>

        {/* Encryption notice */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '10px solid var(--app-background, #0b141a)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          <span style={{ color: 'var(--icon, #8696a0)', marginTop: '2px' }}>
            <Icon name="ic-lock" size={20} />
          </span>
          <div>
            <div style={{ fontSize: '14px', color: 'var(--primary, #e9edef)', fontWeight: 500 }}>
              Encryption
            </div>
            <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginTop: '2px' }}>
              Messages and calls are end-to-end encrypted. Tap to verify.
            </div>
          </div>
        </div>

        {/* Action buttons (Block, Report) */}
        <div style={{ padding: '8px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'none',
              border: 'none',
              color: '#ea4335',
              cursor: 'pointer',
              fontSize: '15px',
              padding: 0,
            }}
          >
            Block {chat.name}
          </button>
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'none',
              border: 'none',
              color: '#ea4335',
              cursor: 'pointer',
              fontSize: '15px',
              padding: 0,
            }}
          >
            Report {chat.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoDrawer;
