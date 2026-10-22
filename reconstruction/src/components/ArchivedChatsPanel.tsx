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
    color: '#00a884',
    lastMessage: 'Release notes v1.2 published.',
    time: '30/9/2026',
    unreadCount: 0,
    ack: 3,
  },
  {
    id: 'arch_2',
    name: 'Product Discussion',
    initial: 'P',
    color: '#34b7f1',
    lastMessage: 'Thanks for sharing the updates!',
    time: '28/9/2026',
    unreadCount: 0,
    ack: 2,
  },
];

export const ArchivedChatsPanel: React.FC<ArchivedChatsPanelProps> = ({ onClose, onSelectChat }) => {
  return (
    <div className="xnpuxes x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x1280gxy copyable-area" data-testid="archived-drawer" style={{ width: '100%', height: '100%', position: 'relative' }}>
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
              <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x13fj5qh x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '21px' }}>
                <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Archived</span>
                </span>
              </span>
            </h2>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="x1n2onr6 x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm">
        <div tabIndex={-1} className="">
          <div className="x1xnncb0">
            <div className="x1phvje8 xcldk2z x1a8lsjc">
              <div className="x1yc453h">
                <p className="">
                  <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '20px' }}>
                    These chats stay archived when new messages are received. To change this experience, go to <span className="x117nqv4">Settings &gt; Chats</span> on your phone.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="x889kno x1xnnf8n x1a8lsjc x106a9eq">
            <div className="xjm9jq1 xkh2ocl x1uew315"></div>
          </div>
          <div tabIndex={-1} className="x6ikm8r x10wlt62" data-testid="archived-chatlist">
            <div className="x1y332i5 x1n2onr6 x6ikm8r x10wlt62" style={{ height: `${ARCHIVED_FIXTURES.length * 76}px`, position: 'relative' }}>
              {ARCHIVED_FIXTURES.map((item, idx) => (
                <div key={item.id} className="x10l6tqk xh8yej3 x1g42fcv" role="listitem" data-testid={`list-item-${idx}`} style={{ zIndex: 1000000 - idx, height: '76px', transform: `translateY(${idx * 76}px)` }}>
                  <div tabIndex={-1} className="" role="button" onClick={() => onSelectChat(item.id)}>
                    <div data-testid="cell-frame-container" className="x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis xb5mbof xiitwr3 x206yn3">
                      <div className="x78zum5">
                        <div className="x6s0dn4 x78zum5 x1c4vz4f x2lah0s x1y332i5 x18d9i69 xexx8yu x1n1b19v xbmws1g">
                          <div style={{ width: '49px', height: '49px', borderRadius: '50%', backgroundColor: item.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '18px' }}>
                            {item.initial}
                          </div>
                        </div>
                      </div>
                      <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v">
                        <div role="gridcell" aria-colindex={2} className="x6s0dn4 x78zum5 xggjnk3 x1yc453h">
                          <div className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3 xdod15v x6ikm8r x10wlt62 x1mzt3pk x1yc453h xo1l8bm" data-testid="cell-frame-title">
                            <span dir="auto" title={item.name} className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft xnpuxes" style={{ minHeight: '0px' }}>{item.name}</span>
                          </div>
                          <div className="xhslqc4 x1c4vz4f x2lah0s x1pg5gke xdzw4kq x193iq5w x1xxsxie x7r5mf7 x6ikm8r x10wlt62 xlyipyv xuxw1ft" data-testid="cell-frame-primary-detail">
                            <span data-testid="chat-list-timestamp">
                              <span style={{ fontSize: '12px' }}>{item.time}</span>
                            </span>
                          </div>
                        </div>
                        <div className="x6s0dn4 xhslqc4 x78zum5 x1nxh6w3 x1fc57z9 xr9ek0c xisnujt" data-testid="cell-frame-secondary">
                          <div className="xjbqb8w x1iyjqo2 x1f6kntn x1fc57z9 x6ikm8r x10wlt62 x1yc453h xlyipyv xuxw1ft xo1l8bm">
                            <span className="x78zum5 x1cy8zhl" data-testid="last-msg-status">
                              <div className="x6ikm8r x10wlt62 xlyipyv">{item.lastMessage}</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedChatsPanel;
