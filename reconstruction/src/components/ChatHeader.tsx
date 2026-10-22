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
    'html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf';

  return (
    <header
      data-testid="conversation-header"
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
          <div
            className="x3nfvp2 x2lah0s x16ye13r x5lhr3w x1plvlek xryxfnj x1n2onr6 x1f65lpj x1dp6k3u x15j2znp xwr2rdz xrw4ojt xg6frx5 xw872ko xhgbb2x xynf4tj xdjs2zz x1r9ni5o xvsnedh x1g7kj8l xqo1zpi x2qsnth xh2ebzn xx38sju x1s928wv x1m1drc7 x1unh1gc x1xrz1ek x1iygr5g x2q1x1w x1j6awrg"
            style={{ width: '40px', height: '40px' }}
          >
            <div
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
              }}
            >
              {chat.initial}
            </div>
          </div>
        </div>

        <div
          className="x78zum5 xdt5ytf x1iyjqo2 xl56j7k xeuugli xtnn1bt x9v5kkp xmw7ebm xrdum7p"
          role="button"
          tabIndex={0}
          data-testid="conversation-info-header"
          data-tab="6"
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <div className="x78zum5 x1cy8zhl x1y332i5 xggjnk3 x1yc453h">
            <div className="x78zum5 x1q0g3np x6ikm8r x10wlt62 x1jchvi3 xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1s688f x1c4vz4f x2lah0s xdl72j9">
              <div data-testid="conversation-info-header-chat-title-name" className="x6s0dn4 x78zum5 xs83m0k xeuugli x6ikm8r x10wlt62">
                <span
                  data-testid="conversation-info-header-chat-title"
                  dir="auto"
                  className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu xnpuxes"
                  style={{ minHeight: '0px', fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}
                >
                  {chat.name}
                </span>
              </div>
            </div>
          </div>
          {chat.isOnline && (
            <div data-testid="chat-subtitle" className="x78zum5 x1cy8zhl xeuugli xisnujt x1nxh6w3 xcgms0a xhslqc4">
              <span
                data-testid="selectable-text"
                className="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv xuxw1ft xnpuxes selectable-text copyable-text"
                style={{ minHeight: '0px', fontSize: '13px', color: '#00a884' }}
              >
                online
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Header action buttons */}
      <div className="x1c4vz4f x2lah0s xdl72j9 xeuugli x101abm8 x1s73dr8 xgog33f xlese2p">
        <div className="x1s70e7g x78zum5 x6s0dn4 x1afcbsf x14ug900" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Video call button */}
          <button
            aria-label="Video call"
            aria-disabled="false"
            tabIndex={0}
            type="button"
            onClick={onVideoCall}
            className={headerBtnClass}
          >
            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                  <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-videocam" size={24} /></span>
                </div>
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
              </div>
            </div>
          </button>

          {/* Voice call button */}
          <button
            aria-label="Voice call"
            aria-disabled="false"
            tabIndex={0}
            type="button"
            onClick={onVoiceCall}
            className={headerBtnClass}
          >
            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                  <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-call" size={24} /></span>
                </div>
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
              </div>
            </div>
          </button>

          {/* Vertical divider */}
          <div className="xamitd3 x3x0x6p xxk0z11 x1i1rx1s" style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-default, rgba(134, 150, 160, 0.15))', margin: '0 8px' }} />

          {/* Search in chat */}
          <div className="x150mmf0">
            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
              <div className="x1n2onr6">
                <button
                  data-tab="6"
                  aria-label="Search"
                  aria-disabled="false"
                  tabIndex={0}
                  type="button"
                  onClick={onSearchClick}
                  className={headerBtnClass}
                >
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                        <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-search" size={24} /></span>
                      </div>
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
                    </div>
                  </div>
                </button>
              </div>
            </span>
          </div>

          {/* Menu button */}
          <div className="x1n2onr6 x150mmf0">
            <div>
              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                <button
                  data-tab="6"
                  aria-label="Menu"
                  aria-disabled="false"
                  aria-expanded="false"
                  aria-haspopup="menu"
                  tabIndex={0}
                  type="button"
                  onClick={onMenuClick}
                  className={headerBtnClass}
                >
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                        <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-more-vert" size={24} /></span>
                      </div>
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
