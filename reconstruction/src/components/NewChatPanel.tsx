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
    <div className="xnpuxes x1280gxy x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 copyable-area" data-testid="new-chat-drawer" style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Header */}
      <header className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x2vl965 x1a8lsjc xe2zdcy">
        <div className="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xo1l8bm x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl">
          <div className="x1okw0bk">
            <div>
              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                <div className="x1n2onr6">
                  <button data-tab="2" aria-label="Back" aria-disabled="false" tabIndex={0} type="button" onClick={onClose} className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                        <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                          <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-arrow-back" size={24} /></span>
                        </div>
                        <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f"></div>
                      </div>
                    </div>
                  </button>
                </div>
              </span>
            </div>
          </div>
          <div data-testid="drawer-title-body" className="x1iyjqo2 x6ikm8r x10wlt62 x1mzt3pk x6prxxf x1o2sk6j">
            <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
              <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x13fj5qh x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px' }}>New chat</span>
            </h2>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div data-testid="chat-list-search-container" className="x1n2onr6 x9f619 x98rzlu x1plvlek xryxfnj">
        <div className="x1gxa6cn xa0aww2">
          <div dir="ltr" className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl">
            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x5yr21d xh8yej3">
              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1q0g3np xh8yej3 x78zum5 x6s0dn4 x9f619 x4wrhlh x1w9h8z1 xn2mukg x1yo0frk x2b5yea x1vqgdyp xq91m4v x1fxkg6m x1x15s1u x17mvztg x1bsbh89 xxyb0qf x8qhm2e">
                <div className="html-div xdj266r xat24cr xexx8yu xyri2b x18d9i69 x1c1uobl xw4jnvo x1qx5ct2 x1yzq74r xv4jd37 xhslqc4">
                  <span aria-hidden="true"><Icon name="ic-search" size={20} /></span>
                </div>
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1iyjqo2">
                  <input
                    role="textbox"
                    aria-label="Search name, number or @username"
                    placeholder="Search name, number or @username"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="html-input xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl x14ug900 xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1qx5ct2 xlyipyv xh8yej3 x1uvtmcs x1hcheoe x1nzty39 xkrh14z x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body List */}
      <div className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm">
        <div style={{ height: `${(filtered.length + 4) * 60}px`, position: 'relative', width: '100%' }}>
          {/* Action Row 1: New group */}
          <div data-testid="new-chat-drawer-new-group-cell" className="x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis" style={{ height: '60px', cursor: 'pointer' }} role="button" aria-label="New group">
            <div className="x78zum5" style={{ paddingLeft: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#00a884', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="ic-add" size={20} />
              </div>
            </div>
            <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v" style={{ paddingLeft: '16px' }}>
              <span className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3" style={{ fontSize: '16px' }}>New group</span>
            </div>
          </div>

          {/* Action Row 2: New contact */}
          <div data-testid="new-chat-drawer-new-contact-cell" className="x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis" style={{ height: '60px', cursor: 'pointer' }} role="button" aria-label="New contact">
            <div className="x78zum5" style={{ paddingLeft: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#00a884', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="ic-person-add" size={20} />
              </div>
            </div>
            <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v" style={{ paddingLeft: '16px' }}>
              <span className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3" style={{ fontSize: '16px' }}>New contact</span>
            </div>
          </div>

          {/* Action Row 3: New community */}
          <div data-testid="new-chat-drawer-new-community-cell" className="x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis" style={{ height: '60px', cursor: 'pointer' }} role="button" aria-label="New community">
            <div className="x78zum5" style={{ paddingLeft: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#00a884', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="nav-communities-filled" size={20} />
              </div>
            </div>
            <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v" style={{ paddingLeft: '16px' }}>
              <span className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3" style={{ fontSize: '16px' }}>New community</span>
            </div>
          </div>

          {/* Section Header */}
          <div data-testid="section-header" className="x9f619 x1cccnhj x9orja2 xyri2b x1995gp2 xzm8p2n xjbqb8w" style={{ padding: '16px 24px 8px' }}>
            <span style={{ fontSize: '14px', color: '#00a884', fontWeight: 500 }}>CONTACTS ON WHATSAPP</span>
          </div>

          {/* Contact rows */}
          {filtered.map(contact => (
            <div
              key={contact.id}
              data-testid="cell-frame-container"
              onClick={() => onSelectContact(contact)}
              className="x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis"
              style={{ height: '72px', cursor: 'pointer', paddingLeft: '16px' }}
              role="button"
            >
              <div className="x78zum5">
                <div style={{ width: '49px', height: '49px', borderRadius: '50%', backgroundColor: contact.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: '18px' }}>
                  {contact.initial}
                </div>
              </div>
              <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v" style={{ paddingLeft: '16px' }}>
                <div role="gridcell" className="x6s0dn4 x78zum5 xggjnk3 x1yc453h">
                  <div className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3 xdod15v x6ikm8r x10wlt62 x1mzt3pk x1yc453h xo1l8bm" data-testid="cell-frame-title">
                    <span dir="auto" title={contact.name} className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft xnpuxes" style={{ minHeight: '0px' }}>{contact.name}</span>
                  </div>
                </div>
                <div className="x6s0dn4 xhslqc4 x78zum5 x1nxh6w3 x1fc57z9 xr9ek0c xisnujt" data-testid="cell-frame-secondary">
                  <div className="xjbqb8w x1iyjqo2 x1f6kntn x1fc57z9 x6ikm8r x10wlt62 x1yc453h xlyipyv xuxw1ft xo1l8bm">{contact.lastMessage}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewChatPanel;
