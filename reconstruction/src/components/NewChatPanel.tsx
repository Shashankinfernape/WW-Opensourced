import React, { useState } from 'react';
import { Icon } from '../icons/Icon';
import { ChatSummary } from './ChatListPanel';

interface NewChatPanelProps {
  onClose: () => void;
  onSelectContact: (contact: ChatSummary) => void;
}

const CONTACTS_FIXTURES: ChatSummary[] = [
  { id: 'c_1', name: 'Alex Rivera', initial: 'A', color: '#00a884', lastMessage: 'Available', time: '', unreadCount: 0 },
  { id: 'c_2', name: 'Bailey Chen', initial: 'B', color: '#1f7a8c', lastMessage: 'At work', time: '', unreadCount: 0 },
  { id: 'c_3', name: 'Cameron Diaz', initial: 'C', color: '#6b5b95', lastMessage: 'Hey there! I am using WhatsApp.', time: '', unreadCount: 0 },
  { id: 'c_4', name: 'Devon Patel', initial: 'D', color: '#d9534f', lastMessage: 'Busy', time: '', unreadCount: 0 },
  { id: 'c_5', name: 'Elena Gomez', initial: 'E', color: '#3b5998', lastMessage: 'In a meeting', time: '', unreadCount: 0 },
  { id: 'c_6', name: 'Jordan Lee', initial: 'J', color: '#25d366', lastMessage: 'Battery about to die', time: '', unreadCount: 0 },
  { id: 'c_7', name: 'Morgan Smith', initial: 'M', color: '#f39c12', lastMessage: 'Sleeping', time: '', unreadCount: 0 },
  { id: 'c_8', name: 'Taylor Brooks', initial: 'T', color: '#9b59b6', lastMessage: 'Urgent calls only', time: '', unreadCount: 0 },
];

export const NewChatPanel: React.FC<NewChatPanelProps> = ({ onClose, onSelectContact }) => {
  const [query, setQuery] = useState('');

  const filtered = CONTACTS_FIXTURES.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

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
      {/* Header (h: 64px) */}
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
          className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
          style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', padding: '6px', display: 'flex' }}
        >
          <Icon name="ic-arrow-back" size={24} />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--primary, #e9edef)', margin: 0 }}>
          New chat
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
              aria-label="Search name or number"
              autoComplete="off"
              dir="ltr"
              placeholder="Search name or number"
              className="html-input xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl x14ug900 xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1qx5ct2 xlyipyv xh8yej3 x1uvtmcs x1hcheoe x1nzty39 xkrh14z x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Action list: New group, New community */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div
          role="button"
          tabIndex={0}
          className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
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
              backgroundColor: '#00a884',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="nav-communities" size={24} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}>
            New group
          </div>
        </div>

        <div
          role="button"
          tabIndex={0}
          className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
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
              backgroundColor: '#00a884',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="nav-communities-filled" size={24} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}>
            New community
          </div>
        </div>

        {/* Section title: Contacts */}
        <div style={{ padding: '20px 16px 8px', fontSize: '14px', fontWeight: 500, color: '#00a884', textTransform: 'uppercase' }}>
          Contacts on WhatsApp
        </div>

        {/* Contact list */}
        {filtered.map((contact) => (
          <div
            key={contact.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelectContact(contact)}
            className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '10px 16px',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: contact.color,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 600,
                userSelect: 'none',
                flexShrink: 0,
              }}
            >
              {contact.initial}
            </div>
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary, #e9edef)' }}>
                {contact.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--secondary, #8696a0)' }}>
                {contact.lastMessage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChatPanel;
