import React from 'react';
import { Icon } from '../icons/Icon';

export const ChannelsPanel: React.FC = () => {
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
          Channels
        </h1>
        <button
          type="button"
          aria-label="New channel"
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px' }}
        >
          <Icon name="ic-add" size={24} />
        </button>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        <div style={{ fontSize: '15px', color: 'var(--primary, #e9edef)', marginBottom: '8px', fontWeight: 500 }}>
          Stay updated on topics that matter to you
        </div>
        <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)', marginBottom: '20px', lineHeight: '18px' }}>
          Find channels to follow below. Channels are public, so anyone can find them and see what’s been shared.
        </div>

        <div style={{ fontSize: '14px', fontWeight: 500, color: '#00a884', marginBottom: '16px' }}>
          Find channels
        </div>

        {[
          { name: 'WhatsApp', followers: '182M followers', verified: true },
          { name: 'Real Madrid C.F.', followers: '45M followers', verified: true },
          { name: 'TechCrunch', followers: '12M followers', verified: true },
          { name: 'National Geographic', followers: '28M followers', verified: true },
        ].map((channel, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))',
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
                {channel.name[0]}
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}>
                  {channel.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--secondary, #8696a0)' }}>
                  {channel.followers}
                </div>
              </div>
            </div>
            <button
              type="button"
              style={{
                backgroundColor: 'rgba(0, 168, 132, 0.15)',
                color: '#00a884',
                border: 'none',
                borderRadius: '16px',
                padding: '6px 16px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelsPanel;
