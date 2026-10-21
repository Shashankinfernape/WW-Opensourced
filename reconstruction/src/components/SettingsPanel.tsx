import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface SettingsPanelProps {
  onClose?: () => void;
  onOpenProfile?: () => void;
}

type SettingsSubpage = 'main' | 'notifications' | 'privacy' | 'security' | 'theme' | 'wallpaper' | 'shortcuts' | 'help';

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose, onOpenProfile }) => {
  const [subpage, setSubpage] = useState<SettingsSubpage>('main');
  const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light' | 'system'>('dark');

  const menuItems = [
    { id: 'notifications', label: 'Notifications', icon: 'ic-notifications-off' },
    { id: 'privacy', label: 'Privacy', icon: 'ic-lock' },
    { id: 'security', label: 'Security', icon: 'ic-lock' },
    { id: 'theme', label: 'Theme', icon: 'nav-settings' },
    { id: 'wallpaper', label: 'Chat wallpaper', icon: 'nav-media' },
    { id: 'shortcuts', label: 'Keyboard shortcuts', icon: 'nav-settings' },
    { id: 'help', label: 'Help', icon: 'nav-settings' },
  ];

  return (
    <div
      className="x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1"
      style={{
        width: '414px',
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
          padding: '0 20px',
          gap: '24px',
          borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
        }}
      >
        {subpage !== 'main' ? (
          <button
            type="button"
            aria-label="Back"
            onClick={() => setSubpage('main')}
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px', display: 'flex' }}
          >
            <Icon name="ic-arrow-back" size={24} />
          </button>
        ) : onClose ? (
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px', display: 'flex' }}
          >
            <Icon name="ic-arrow-back" size={24} />
          </button>
        ) : null}
        <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--primary, #e9edef)', margin: 0, textTransform: 'capitalize' }}>
          {subpage === 'main' ? 'Settings' : subpage}
        </h2>
      </header>

      {/* Main Settings Page */}
      {subpage === 'main' && (
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* Profile Card Trigger */}
          <div
            role="button"
            tabIndex={0}
            onClick={onOpenProfile}
            className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              cursor: 'pointer',
              borderBottom: '8px solid var(--app-background, #0b141a)',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--avatar-placeholder-background, #6b7780)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              U
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--primary, #e9edef)', marginBottom: '4px' }}>
                User
              </div>
              <div style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)' }}>
                Hey there! I am using WhatsApp.
              </div>
            </div>
          </div>

          {/* Settings Menu Items */}
          {menuItems.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSubpage(item.id as SettingsSubpage)}
              className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '16px 24px',
                cursor: 'pointer',
                borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))',
              }}
            >
              <div style={{ color: 'var(--icon, #aebac1)', display: 'flex' }}>
                <Icon name={item.icon} size={22} />
              </div>
              <div style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}>
                {item.label}
              </div>
            </div>
          ))}

          {/* Log Out */}
          <div
            role="button"
            tabIndex={0}
            className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              padding: '16px 24px',
              cursor: 'pointer',
              color: '#ea4335',
            }}
          >
            <div style={{ display: 'flex' }}>
              <Icon name="ic-close" size={22} color="#ea4335" />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>
              Log out
            </div>
          </div>
        </div>
      )}

      {/* Subpage: Theme */}
      {subpage === 'theme' && (
        <div style={{ padding: '24px' }}>
          <div style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)', marginBottom: '16px' }}>
            Choose a theme
          </div>
          {(['dark', 'light', 'system'] as const).map((t) => (
            <label
              key={t}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 0',
                cursor: 'pointer',
                color: 'var(--primary, #e9edef)',
                fontSize: '15px',
                textTransform: 'capitalize',
              }}
            >
              <input
                type="radio"
                name="theme"
                value={t}
                checked={selectedTheme === t}
                onChange={() => setSelectedTheme(t)}
                style={{ accentColor: '#00a884', width: '18px', height: '18px' }}
              />
              <span>{t === 'system' ? 'System default' : t}</span>
            </label>
          ))}
        </div>
      )}

      {/* Subpage: Notifications */}
      {subpage === 'notifications' && (
        <div style={{ padding: '24px' }}>
          <div style={{ fontSize: '15px', color: 'var(--primary, #e9edef)', fontWeight: 500, marginBottom: '8px' }}>
            Messages
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '20px' }}>
            Show notifications for new messages
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary, #e9edef)', fontSize: '14px' }}>
            <input type="checkbox" defaultChecked style={{ accentColor: '#00a884' }} />
            <span>Message sounds</span>
          </label>
        </div>
      )}

      {/* Subpage: Privacy */}
      {subpage === 'privacy' && (
        <div style={{ padding: '24px' }}>
          <div style={{ fontSize: '15px', color: 'var(--primary, #e9edef)', fontWeight: 500, marginBottom: '8px' }}>
            Who can see my personal info
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '16px' }}>
            Last seen and online: Everyone
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '16px' }}>
            Profile photo: Everyone
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '16px' }}>
            About: Everyone
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '16px' }}>
            Read receipts: On
          </div>
        </div>
      )}

      {/* Subpage: Security */}
      {subpage === 'security' && (
        <div style={{ padding: '24px' }}>
          <div style={{ fontSize: '15px', color: 'var(--primary, #e9edef)', fontWeight: 500, marginBottom: '8px' }}>
            End-to-end encryption
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', lineHeight: '20px' }}>
            Messages and calls in end-to-end encrypted chats stay between you and the people you choose. Not even WhatsApp can read or listen to them.
          </div>
        </div>
      )}

      {/* Subpage: Shortcuts */}
      {subpage === 'shortcuts' && (
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
          {[
            { key: 'Ctrl + Alt + N', desc: 'New chat' },
            { key: 'Ctrl + Alt + Shift + [', desc: 'Previous chat' },
            { key: 'Ctrl + Alt + Shift + ]', desc: 'Next chat' },
            { key: 'Ctrl + Alt + Shift + M', desc: 'Mute chat' },
            { key: 'Ctrl + Alt + Backspace', desc: 'Delete chat' },
            { key: 'Ctrl + Alt + Shift + U', desc: 'Mark as unread' },
            { key: 'Ctrl + Alt + Shift + P', desc: 'Pin chat' },
            { key: 'Ctrl + Alt + /', desc: 'Search chat' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--primary, #e9edef)' }}>{item.desc}</span>
              <kbd style={{ backgroundColor: '#202c33', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', color: 'var(--secondary, #8696a0)' }}>
                {item.key}
              </kbd>
            </div>
          ))}
        </div>
      )}

      {/* Subpage: Help */}
      {subpage === 'help' && (
        <div style={{ padding: '24px' }}>
          <div style={{ fontSize: '15px', color: 'var(--primary, #e9edef)', fontWeight: 500, marginBottom: '8px' }}>
            Help Center
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '16px' }}>
            WhatsApp Web version 2.3000.1030025732
          </div>
          <div style={{ fontSize: '13px', color: '#00a884', cursor: 'pointer' }}>
            Terms & Privacy Policy
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
