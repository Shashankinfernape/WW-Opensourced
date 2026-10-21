import React from 'react';

interface ChatListContextMenuProps {
  isOpen: boolean;
  x: number;
  y: number;
  onClose: () => void;
  onArchive?: () => void;
  onMute?: () => void;
  onDelete?: () => void;
  onPin?: () => void;
  onMarkUnread?: () => void;
}

export const ChatListContextMenu: React.FC<ChatListContextMenuProps> = ({
  isOpen,
  x,
  y,
  onClose,
  onArchive,
  onMute,
  onDelete,
  onPin,
  onMarkUnread,
}) => {
  if (!isOpen) return null;

  const actions = [
    { label: 'Archive chat', onClick: onArchive },
    { label: 'Mute notifications', onClick: onMute },
    { label: 'Pin chat', onClick: onPin },
    { label: 'Mark as unread', onClick: onMarkUnread },
    { label: 'Delete chat', onClick: onDelete, danger: true },
  ];

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 150,
        }}
      />
      <div
        role="menu"
        style={{
          position: 'fixed',
          top: y,
          left: x,
          backgroundColor: 'var(--WDS-surface-default, #161717)',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          border: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
          padding: '6px 0',
          minWidth: '180px',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {actions.map((act, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              act.onClick?.();
              onClose();
            }}
            style={{
              padding: '10px 20px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: act.danger ? '#ea4335' : 'var(--primary, #e9edef)',
              fontSize: '14.5px',
              textAlign: 'left',
              width: '100%',
            }}
          >
            {act.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default ChatListContextMenu;
