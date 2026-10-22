import React, { useState } from 'react';
import { Icon } from '../icons/Icon';
import { ChatSummary } from './ChatListPanel';

interface ChatSearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  chat: ChatSummary;
}

export const ChatSearchDrawer: React.FC<ChatSearchDrawerProps> = ({
  isOpen,
  onClose,
  chat,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div
      data-testid="drawer-right"
      className="x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw x1vb5itz x2ydcri x1873f8k x1fkvrks"
      style={{
        width: '400px',
        height: '100%',
        backgroundColor: 'var(--WDS-surface-default, #161717)',
        borderLeft: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 50,
        flexShrink: 0,
      }}
    >
      {/* Header (h: 64px) */}
      <header
        className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x1a8lsjc x106a9eq x1xnnf8n"
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          gap: '20px',
          borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))',
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px', display: 'flex' }}
        >
          <Icon name="ic-close" size={24} />
        </button>
        <h2 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)', margin: 0 }}>
          Search messages
        </h2>
      </header>

      {/* Search Input Bar */}
      <div style={{ padding: '8px 16px', borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.1))' }}>
        <div
          className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1q0g3np xh8yej3 x78zum5 x6s0dn4 x9f619 x4wrhlh x1w9h8z1 xn2mukg x1yo0frk x2b5yea x1vqgdyp xq91m4v x1fxkg6m x1x15s1u x17mvztg x1bsbh89 xxyb0qf x8qhm2e"
        >
          <div className="html-div xdj266r xat24cr xexx8yu xyri2b x18d9i69 x1c1uobl xw4jnvo x1qx5ct2 x1yzq74r xv4jd37 xhslqc4">
            <span aria-hidden="true">
              <Icon name="ic-search" size={20} />
            </span>
          </div>
          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1iyjqo2">
            <input
              role="textbox"
              aria-label="Search..."
              autoComplete="off"
              dir="ltr"
              placeholder="Search..."
              className="html-input xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl x14ug900 xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1qx5ct2 xlyipyv xh8yej3 x1uvtmcs x1hcheoe x1nzty39 xkrh14z x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Results / Empty placeholder */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px',
          textAlign: 'center',
          color: 'var(--secondary, #8696a0)',
          fontSize: '14px',
        }}
      >
        {query ? `No messages found for "${query}"` : `Search for messages with ${chat.name}`}
      </div>
    </div>
  );
};

export default ChatSearchDrawer;
