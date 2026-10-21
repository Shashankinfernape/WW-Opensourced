import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface CallRecord {
  id: string;
  name: string;
  time: string;
  incoming: boolean;
  isVideo?: boolean;
  missed?: boolean;
  initials: string;
  color: string;
}

const FIXTURE_CALLS: CallRecord[] = [
  { id: '1', name: 'Alex Rivera', time: 'Friday', incoming: false, isVideo: false, missed: true, initials: 'AR', color: '#00a884' },
  { id: '2', name: 'Jordan Lee', time: 'Friday', incoming: false, isVideo: false, initials: 'JL', color: '#34b7f1' },
  { id: '3', name: 'Taylor Brooks', time: '13/10/2026', incoming: true, missed: true, initials: 'TB', color: '#ea4335' },
  { id: '4', name: 'Morgan Smith', time: '13/10/2026', incoming: true, isVideo: false, initials: 'MS', color: '#ffb900' }
];

export const CallsPanel: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showBanner, setShowBanner] = useState(true);

  const filteredCalls = FIXTURE_CALLS.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div tabIndex={-1} className="" aria-label="Calls drawer" data-testid="calls-tab-drawer" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="xnpuxes x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x1280gxy copyable-area" data-testid="calls-drawer">
        {/* Header */}
        <header className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x1a8lsjc x106a9eq x1xnnf8n">
          <div className="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl">
            <div data-testid="drawer-title-body" className="x1iyjqo2 x6ikm8r x10wlt62 x1mzt3pk">
              <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
                <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1aueamr xjb2p0i xo1l8bm xladpa3 x1ic7a3i" style={{ fontSize: '22px', lineHeight: '15.6406px' }}>
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                    <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Calls</span>
                  </span>
                </span>
              </h2>
            </div>
            <span className="x1okw0bk">
              <div className="x1s70e7g x78zum5 x6s0dn4 x1afcbsf x14ug900">
                <div>
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                    <button data-tab="2" aria-label="Menu" aria-disabled="false" aria-expanded="false" aria-haspopup="menu" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                        <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                            <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-more-vert" size={24} /></span>
                          </div>
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f"></div>
                        </div>
                      </div>
                    </button>
                  </span>
                </div>
                <div>
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                    <div className="x1n2onr6">
                      <button data-tab="2" aria-label="New call" aria-disabled="false" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xfn3atn x1pse0pq x1yxkqql xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf">
                        <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                              <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-add" size={24} /></span>
                            </div>
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f"></div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </span>
          </div>
        </header>

        {/* Search Container */}
        <div data-testid="chat-list-search-container" className="x1n2onr6 x9f619 x98rzlu x1plvlek xryxfnj">
          <div className="x1gxa6cn xa0aww2">
            <div dir="ltr" className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl">
              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x5yr21d xh8yej3">
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1q0g3np xh8yej3 x78zum5 x6s0dn4 x9f619 x4wrhlh x1w9h8z1 xn2mukg x1yo0frk x2b5yea x1vqgdyp xq91m4v x1fxkg6m x1x15s1u x17mvztg x1bsbh89 xxyb0qf x8qhm2e">
                  <div className="html-div xdj266r xat24cr xexx8yu xyri2b x18d9i69 x1c1uobl xw4jnvo x1qx5ct2 x1yzq74r xv4jd37 xhslqc4">
                    <span aria-hidden="true"><Icon name="ic-search" size={20} /></span>
                  </div>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1iyjqo2 x78zum5 x6s0dn4 xdt5ytf xl56j7k">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search name, number or @username"
                      aria-label="Search name, number or @username"
                      className="x1iorvi4 xjkvuk6 x1f6kntn x17qophe x159bzp0 x1a8lsjc x1xfsgkm"
                      style={{ background: 'none', border: 'none', outline: 'none', width: '100%', color: 'inherit' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications off banner */}
        {showBanner && (
          <div role="status" data-testid="calls_tab_notifications_off_banner_wrapper" className="x2lah0s x1uvdrpn x14mko6t x1380le5 xefnzgg">
            <div className="x1n2onr6">
              <div className="x67dgr1 x10l6tqk x1ngp85i">
                <div className="x6s0dn4 xs2akgl x78zum5 x1q0g3np x6nvzda x4i4b9w xhl9efl xj65ea0 x1xrf6ya xvtqlqk xscbp6u xdx6fka x1abdmlv" style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', gap: '16px', backgroundColor: 'var(--WDS-surface-sunken, #111b21)', borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))' }}>
                  <span aria-hidden="true" className="x1v5yvga x19kjcj4" style={{ color: '#00a884' }}><Icon name="ic-notifications-off" size={32} /></span>
                  <div className="x78zum5 xdt5ytf x129bwdz x1yc453h" style={{ flex: 1 }}>
                    <div className="xp48ta0">
                      <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '18px', color: 'var(--primary, #e9edef)' }}>
                        Notifications are off.&nbsp;
                        <button data-tab="4" type="button" onClick={() => setShowBanner(false)} style={{ background: 'none', border: 'none', color: '#00a884', fontWeight: 500, cursor: 'pointer', padding: 0 }}>Turn on</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calls body */}
        <div className="x1n2onr6 x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x9w6j0p x1anedsm">
          <div tabIndex={0} className="" data-tab="3">
            <div tabIndex={-1} className="">
              <div className="x1y332i5 x1n2onr6 x6ikm8r x10wlt62" role="list" aria-label="Chat list" style={{ height: '700px', position: 'relative' }}>
                {/* list-item-0: Favourites Heading */}
                <div className="x10l6tqk xh8yej3 x1g42fcv" role="row" data-testid="list-item-0" style={{ zIndex: 1000000, height: '56px', transform: 'translateY(0px)' }}>
                  <div className="x78zum5 xdt5ytf xh8yej3">
                    <div className="x6s0dn4 x78zum5 xs2akgl x1qughib x12xbjc7 x1p57kb1 x1phvje8 xcldk2z" style={{ padding: '0 20px', height: '56px', display: 'flex', alignItems: 'center' }}>
                      <div className="x78zum5 xdt5ytf x1iyjqo2 xeuugli">
                        <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
                          <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xfjzk2p x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px', color: '#00a884', fontWeight: 500 }}>Favourites</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* list-item-1: Add favourite */}
                <div className="x10l6tqk xh8yej3 x1g42fcv" role="row" data-testid="list-item-1" style={{ zIndex: 999999, height: '76px', transform: 'translateY(56px)' }}>
                  <div role="gridcell" style={{ width: '100%' }}>
                    <div className="x78zum5 xh8yej3 x1iyjqo2 x1n2onr6 x9f619 xkh2ocl" data-testid="add-favorite" aria-label="Add favorite" aria-disabled="false" role="button" tabIndex={0} style={{ padding: '0 16px', height: '76px', display: 'flex', alignItems: 'center' }}>
                      <div className="xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x1nhvcw1 x1q0g3np x9f619 x1iyjqo2 x1qjc9v5 x879a55 x16ydxro xyo1k6t xlr9sxt xvvg52n xwd4zgb xq8v1ta x17gydlx x1jsj9aw" style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '15px' }}>
                        <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x2lwn1j xl56j7k x1q0g3np x6s0dn4 xz9dl7a xsag5q8 xe2zdcy x1pic42t x1fns5xo xn95wi4" style={{ flexShrink: 0 }}>
                          <div className="x78zum5 x6s0dn4 xl56j7k x1pse0pq xe5due1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x100vrsf x1vqgdyp" style={{ backgroundColor: '#00a884', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                            <span aria-hidden="true"><Icon name="ic-add" size={24} /></span>
                          </div>
                        </div>
                        <div className="x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xdt5ytf x12lumcd x1qjc9v5 xl56j7k x9f619 x2vl965 xz9dl7a xsag5q8 x1mz2wy7 xw36f2b xn95wi4" style={{ flexGrow: 1 }}>
                          <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4">
                            <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px', color: 'var(--primary, #e9edef)' }}>Add favourite</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* list-item-2: Recent Heading */}
                <div className="x10l6tqk xh8yej3 x1g42fcv" role="row" data-testid="list-item-2" style={{ zIndex: 999998, height: '61px', transform: 'translateY(132px)' }}>
                  <div className="x78zum5 xdt5ytf xh8yej3">
                    <div className="x6s0dn4 x78zum5 xs2akgl x1qughib x12xbjc7 x1p57kb1 x1phvje8 xcldk2z" style={{ padding: '0 20px', height: '61px', display: 'flex', alignItems: 'center' }}>
                      <div className="x78zum5 xdt5ytf x1iyjqo2 xeuugli">
                        <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
                          <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xfjzk2p x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px', color: '#00a884', fontWeight: 500 }}>Recent</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call History Rows */}
                {filteredCalls.map((call, idx) => (
                  <div key={call.id} className="x10l6tqk xh8yej3 x1g42fcv" role="row" data-testid={`list-item-${idx + 3}`} style={{ zIndex: 999997 - idx, height: '76px', transform: `translateY(${193 + idx * 76}px)` }}>
                    <div role="gridcell" className="x1n2onr6" tabIndex={0} style={{ width: '100%' }}>
                      <div tabIndex={-1} className="">
                        <div data-testid={`chatlist-message-${idx}`} className="x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis xb5mbof xiitwr3 x206yn3" style={{ padding: '0 16px', height: '76px', display: 'flex', alignItems: 'center' }}>
                          <div className="x78zum5" style={{ marginRight: '15px' }}>
                            <div className="x6s0dn4 x78zum5 x1c4vz4f x2lah0s x1y332i5 x18d9i69 xexx8yu x1n1b19v xbmws1g">
                              <div className="x47corl">
                                <div className="x1n2onr6 x1c7u0tx x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x5lhr3w x16ye13r" style={{ width: '49px', height: '49px' }}>
                                  <div className="x1n2onr6 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x16ye13r x5lhr3w" style={{ height: '49px', width: '49px' }}>
                                    <div className="x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d" style={{ backgroundColor: call.color, borderRadius: '50%', color: '#fff', fontWeight: 600, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                      {call.initials}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v">
                            <div role="gridcell" aria-colindex={2} className="x6s0dn4 x78zum5 xggjnk3 x1yc453h">
                              <div className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3 xdod15v x6ikm8r x10wlt62 x1mzt3pk x1yc453h xo1l8bm" data-testid="cell-frame-title">
                                <span dir="auto" title={call.name} className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft xnpuxes" style={{ minHeight: '0px', color: call.missed ? '#ea4335' : 'inherit' }}>{call.name}</span>
                              </div>
                              <div className="xhslqc4 x1c4vz4f x2lah0s x1pg5gke xdzw4kq x193iq5w x1xxsxie x7r5mf7 x6ikm8r x10wlt62 xlyipyv xuxw1ft" data-testid="cell-frame-primary-detail" style={{ marginLeft: 'auto' }}>
                                <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1pg5gke xjb2p0i xo1l8bm xl2ypbo x1ic7a3i" style={{ fontSize: '12px', color: 'var(--secondary, #8696a0)' }}>{call.time}</span>
                              </div>
                            </div>
                            <div className="x6s0dn4 xhslqc4 x78zum5 x1nxh6w3 x1fc57z9 xr9ek0c xisnujt" data-testid="cell-frame-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                              <span style={{ color: call.missed ? '#ea4335' : '#00a884', fontSize: '13px' }}>{call.incoming ? '↙' : '↗'}</span>
                              <span style={{ fontSize: '13px', color: call.missed ? '#ea4335' : 'var(--secondary, #8696a0)' }}>{call.missed ? 'Missed' : (call.incoming ? 'Incoming' : 'Outgoing')}</span>
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
    </div>
  );
};

export default CallsPanel;
