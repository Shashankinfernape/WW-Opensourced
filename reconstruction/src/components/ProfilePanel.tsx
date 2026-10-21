import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface ProfilePanelProps {
  onClose: () => void;
}

export const ProfilePanel: React.FC<ProfilePanelProps> = ({ onClose }) => {
  const [name, setName] = useState('User');
  const [about, setAbout] = useState('Hey there! I am using WhatsApp.');

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
        <button
          type="button"
          aria-label="Back"
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px', display: 'flex' }}
        >
          <Icon name="ic-arrow-back" size={24} />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--primary, #e9edef)', margin: 0 }}>
          Profile
        </h2>
      </header>

      {/* Body */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {/* Large Profile Photo Area */}
        <div style={{ padding: '28px 0', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              backgroundColor: 'var(--avatar-placeholder-background, #6b7780)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              fontWeight: 600,
              position: 'relative',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            U
            {/* Camera overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.8,
              }}
            >
              <Icon name="ic-videocam" size={28} color="#ffffff" />
              <span style={{ fontSize: '11px', color: '#ffffff', marginTop: '4px', textTransform: 'uppercase' }}>
                Change photo
              </span>
            </div>
          </div>
        </div>

        {/* Name Section */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))' }}>
          <div style={{ fontSize: '14px', color: '#00a884', marginBottom: '8px' }}>
            Your name
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}>
              {name}
            </span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginTop: '8px', lineHeight: '18px' }}>
            This is not your username or PIN. This name will be visible to your WhatsApp contacts.
          </div>
        </div>

        {/* About Section */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))' }}>
          <div style={{ fontSize: '14px', color: '#00a884', marginBottom: '8px' }}>
            About
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}>
              {about}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
