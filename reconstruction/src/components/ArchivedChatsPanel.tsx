import React from 'react';
import { Icon } from '../icons/Icon';
import { ChatSummary } from './ChatListPanel';

interface ArchivedChatsPanelProps {
  onClose: () => void;
  onSelectChat: (id: string) => void;
}

const ARCHIVED_FIXTURES: ChatSummary[] = [
  {
    id: 'arch_1',
    name: 'Project Updates Group',
    initial: 'P',
    color: '#34495e',
    lastMessage: 'Release notes v1.2 published.',
    time: '12/10/2026',
    unreadCount: 0,
    ack: 3,
  },
  {
    id: 'arch_2',
    name: 'Family Archive',
    initial: 'F',
    color: '#16a085',
    lastMessage: 'Thanks for sharing the photos!',
    time: '05/10/2026',
    unreadCount: 0,
    ack: 2,
  },
];

export const ArchivedChatsPanel: React.FC<ArchivedChatsPanelProps> = ({ onClose, onSelectChat }) => {
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
          Archived
        </h2>
      </header>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ padding: '16px 20px', fontSize: '13px', color: 'var(--secondary, #8696a0)', borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))' }}>
          These chats stay archived when new messages are received.
        </div>

        {ARCHIVED_FIXTURES.map((chat) => (
          <div
            key={chat.id}
            role="button"
            tabIndex={0}
            onClick={() => {
              onSelectChat(chat.id);
              onClose();
            }}
            className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '12px 16px',
              cursor: 'pointer',
              borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: chat.color,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {chat.initial}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}>
                  {chat.name}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--secondary, #8696a0)' }}>
                  {chat.time}
                </span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {chat.lastMessage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivedChatsPanel;
