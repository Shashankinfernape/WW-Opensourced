import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface EmojiGifPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEmoji: (emoji: string) => void;
}

const EMOJI_CATEGORIES = {
  smileys: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳'],
  gestures: ['👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👋', '🤚', '🖐️', '✋', '🖖', '👏', '🙌', '👐', '🤲', '🤝', '🙏'],
  hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝'],
  objects: ['🔥', '✨', '🌟', '💫', '🎉', '🎊', '🎁', '🎈', '🏆', '🥇', '🥈', '🥉', '⚽', '🏀', '🏈', '⚾', '🎾', '🏐'],
};

export const EmojiGifPanel: React.FC<EmojiGifPanelProps> = ({
  isOpen,
  onClose,
  onSelectEmoji,
}) => {
  const [tab, setTab] = useState<'emoji' | 'gif' | 'sticker'>('emoji');
  const [category, setCategory] = useState<keyof typeof EMOJI_CATEGORIES>('smileys');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '64px',
        left: 0,
        right: 0,
        height: '320px',
        backgroundColor: 'var(--WDS-surface-default, #161717)',
        borderTop: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 40,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
      }}
    >
      {/* Tab bar (Emoji / GIF / Sticker) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          {(['emoji', 'gif', 'sticker'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                background: 'none',
                border: 'none',
                color: tab === t ? '#00a884' : 'var(--secondary, #8696a0)',
                fontWeight: tab === t ? 600 : 400,
                fontSize: '14px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                padding: '4px 8px',
                borderBottom: tab === t ? '2px solid #00a884' : '2px solid transparent',
              }}
            >
              {t === 'emoji' ? 'Emojis' : t === 'gif' ? 'GIFs' : 'Stickers'}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Close emoji picker"
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '4px' }}
        >
          <Icon name="ic-close" size={20} />
        </button>
      </div>

      {/* Emoji Grid Area */}
      {tab === 'emoji' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {/* Category buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
            {(Object.keys(EMOJI_CATEGORIES) as Array<keyof typeof EMOJI_CATEGORIES>).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                style={{
                  background: category === cat ? 'rgba(0, 168, 132, 0.2)' : 'none',
                  border: 'none',
                  borderRadius: '12px',
                  color: category === cat ? '#00a884' : 'var(--secondary, #8696a0)',
                  padding: '4px 10px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))',
              gap: '8px',
            }}
          >
            {EMOJI_CATEGORIES[category].map((emoji, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectEmoji(emoji)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* GIF / Sticker Placeholder */}
      {tab !== 'emoji' && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--secondary, #8696a0)',
            fontSize: '14px',
          }}
        >
          No {tab === 'gif' ? 'GIFs' : 'stickers'} available yet.
        </div>
      )}
    </div>
  );
};

export default EmojiGifPanel;
