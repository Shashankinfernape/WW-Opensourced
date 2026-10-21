import React from 'react';
import { Icon } from '../icons/Icon';

export const CommunitiesPanel: React.FC = () => {
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
          borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
        }}
      >
        <h1 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--primary, #e9edef)', margin: 0 }}>
          Communities
        </h1>
      </header>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 168, 132, 0.12)',
            color: '#00a884',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <Icon name="nav-communities-filled" size={40} />
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--primary, #e9edef)', marginBottom: '8px' }}>
          Stay connected with a community
        </h2>

        <p style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)', lineHeight: '20px', marginBottom: '28px' }}>
          Communities bring members together in topic-based groups, and make it easy to get admin announcements. Any community you’re added to will appear here.
        </p>

        <button
          type="button"
          style={{
            backgroundColor: '#00a884',
            color: '#111b21',
            border: 'none',
            borderRadius: '24px',
            padding: '12px 32px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Start a new community
        </button>
      </div>
    </div>
  );
};

export default CommunitiesPanel;
