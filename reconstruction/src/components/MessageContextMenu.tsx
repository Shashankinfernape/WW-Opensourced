import React from 'react';
import { Icon } from '../icons/Icon';

interface MessageContextMenuProps {
  isOpen: boolean;
  x: number;
  y: number;
  onClose: () => void;
  onReply?: () => void;
  onReact?: (emoji: string) => void;
  onDelete?: () => void;
  onStar?: () => void;
}

export const MessageContextMenu: React.FC<MessageContextMenuProps> = ({
  isOpen,
  x,
  y,
  onClose,
  onReply,
  onReact,
  onDelete,
  onStar,
}) => {
  if (!isOpen) return null;

  const quickReactions = ['👍', '❤️', '😂', '😮', '😢', '🙏'];

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
        {/* Quick Reactions Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '8px 12px',
            borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
          }}
        >
          {quickReactions.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => {
                onReact?.(emoji);
                onClose();
              }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '2px 4px',
                borderRadius: '6px',
              }}
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <button
          type="button"
          onClick={() => {
            onReply?.();
            onClose();
          }}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--primary, #e9edef)',
            fontSize: '14.5px',
            textAlign: 'left',
            width: '100%',
          }}
        >
          Reply
        </button>

        <button
          type="button"
          onClick={() => {
            onStar?.();
            onClose();
          }}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--primary, #e9edef)',
            fontSize: '14.5px',
            textAlign: 'left',
            width: '100%',
          }}
        >
          Star message
        </button>

        <button
          type="button"
          onClick={() => {
            onDelete?.();
            onClose();
          }}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: '#ea4335',
            fontSize: '14.5px',
            textAlign: 'left',
            width: '100%',
          }}
        >
          Delete message
        </button>
      </div>
    </>
  );
};

export default MessageContextMenu;
