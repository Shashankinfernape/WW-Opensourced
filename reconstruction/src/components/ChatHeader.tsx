import React from 'react';
import { Icon } from '../icons/Icon';
import { ChatSummary } from './ChatListPanel';

interface ChatHeaderProps {
  chat: ChatSummary;
  onSearchClick?: () => void;
  onMenuClick?: () => void;
  onContactInfoClick?: () => void;
  onVideoCall?: () => void;
  onVoiceCall?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  chat,
  onSearchClick,
  onMenuClick,
  onContactInfoClick,
  onVideoCall,
  onVoiceCall,
}) => {
  const headerBtnClass =
    'html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf';

  return (
    <header
      data-testid="conversation-header"
      aria-label="Conversation header"
      className="x1n2onr6 x9f619 x78zum5 x6s0dn4 xh8yej3 x185czh x1j6awrg x1te75w5 x1iygr5g x4eaejv xcock1l xl9llhp x1qj619r x1r9ni5o xb1pvdl x16uhe5s x889kno x1a8lsjc xdx6fka xvtqlqk x1s928wv x1h1zc6f x1280gxy xstzfhl x11iowje"
      style={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        boxSizing: 'border-box',
        borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {/* Contact info trigger */}
      <div
        className="x78zum5 x6s0dn4 x1iyjqo2 x1r8uery xeuugli x101abm8 x1s73dr8 xbzw7fd"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        onClick={onContactInfoClick}
      >
        <div
          className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1n1b19v x78zum5 xdj266r"
          aria-label="Profile details"
          title="Profile details"
          role="button"
          style={{ cursor: 'pointer' }}
        >
          {/* Neutral initials avatar (Rule 4) */}
          <div
            className="x78zum5 x6s0dn4 xl56j7k"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: chat.color,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '16px',
              userSelect: 'none',
              flexShrink: 0,
            }}
          >
            {chat.initial}
          </div>
        </div>

        <div
          role="button"
          tabIndex={0}
          data-testid="conversation-info-header"
          data-tab="6"
          className="x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli xtnn1bt x9v5kkp xmw7ebm xrdum7p"
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <div data-testid="conversation-info-header-chat-title-name" className="x6s0dn4 x78zum5 xs83m0k xeuugli x6ikm8r x10wlt62">
            <span
              data-testid="conversation-info-header-chat-title"
              dir="auto"
              className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu xnpuxes"
              style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}
            >
              {chat.name}
            </span>
          </div>
          {chat.isOnline && (
            <span style={{ fontSize: '12px', color: '#00a884' }}>online</span>
          )}
        </div>
      </div>

      {/* Header action buttons */}
      <div className="x1c4vz4f x2lah0s xdl72j9 xeuugli x101abm8 x1s73dr8 xgog33f xlese2p">
        <div className="x1s70e7g x78zum5 x6s0dn4 x1afcbsf x14ug900" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Video call */}
          <button
            data-tab="6"
            aria-label="Video call"
            type="button"
            onClick={onVideoCall}
            className={headerBtnClass}
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '8px', display: 'flex' }}
          >
            <Icon name="ic-videocam" size={24} />
          </button>

          {/* Voice call */}
          <button
            data-tab="6"
            aria-label="Voice call"
            type="button"
            onClick={onVoiceCall}
            className={headerBtnClass}
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '8px', display: 'flex' }}
          >
            <Icon name="ic-call" size={24} />
          </button>

          {/* Search in chat */}
          <button
            data-tab="6"
            aria-label="Search..."
            type="button"
            onClick={onSearchClick}
            className={headerBtnClass}
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '8px', display: 'flex' }}
          >
            <Icon name="ic-search" size={24} />
          </button>

          {/* Menu */}
          <button
            data-tab="6"
            aria-label="Menu"
            type="button"
            onClick={onMenuClick}
            className={headerBtnClass}
            style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '8px', display: 'flex' }}
          >
            <Icon name="ic-more-vert" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
