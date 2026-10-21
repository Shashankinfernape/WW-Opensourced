import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface StatusItem {
  id: string;
  name: string;
  time: string;
  color: string;
  initials: string;
  broken?: boolean;
}

const FIXTURE_STATUSES: StatusItem[] = [
  { id: '1', name: 'Alex Rivera', time: 'Yesterday at 11:46 pm', color: '#00a884', initials: 'AR' },
  { id: '2', name: 'Jordan Lee', time: 'Yesterday at 11:11 pm', color: '#34b7f1', initials: 'JL', broken: true },
  { id: '3', name: 'Taylor Sam', time: 'Yesterday at 7:54 am', color: '#a62c2b', initials: 'TS' }
];

interface StatusPanelProps {
  onClose?: () => void;
}

export const StatusPanel: React.FC<StatusPanelProps> = () => {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <div tabIndex={-1} className="" aria-label="Status tab drawer" data-testid="status-tab-drawer" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="xnpuxes x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x1280gxy copyable-area" data-testid="status-drawer">
        {/* Header */}
        <header className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x1a8lsjc x106a9eq x1xnnf8n">
          <div className="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl">
            <div data-testid="drawer-title-body" className="x1iyjqo2 x6ikm8r x10wlt62 x1mzt3pk">
              <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
                <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1aueamr xjb2p0i xo1l8bm xladpa3 x1ic7a3i" style={{ fontSize: '22px', lineHeight: '15.6406px' }}>
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                    <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Status</span>
                  </span>
                </span>
              </h2>
            </div>
            <span className="x1okw0bk">
              <div className="x1s70e7g x78zum5 x6s0dn4 x1afcbsf x14ug900">
                <div className="x78zum5 x1qvou4u x1s70e7g">
                  <div>
                    <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                      <button data-tab="2" aria-label="Status Menu" aria-disabled="false" aria-expanded="false" aria-haspopup="menu" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf">
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
                      <button data-tab="2" aria-label="Add Status" aria-disabled="false" aria-expanded="false" aria-haspopup="menu" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf">
                        <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                              <span aria-hidden="true" className="xxk0z11 xvy4d1p"><Icon name="ic-add-circle" size={24} /></span>
                            </div>
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f"></div>
                          </div>
                        </div>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </header>

        {/* My status row */}
        <div className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm">
          <div className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x1280gxy">
            <button className="xjb2p0i xk390pu x1heor9g x972fbf x10w94by x1qhh985 x14e42zd xtnn1bt x9v5kkp xmw7ebm xrdum7p xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 x1c4vz4f x2lah0s xdl72j9 x1q0g3np x6s0dn4 x1qughib xwnsf4a x1yc453h x1ypdohk x1ubxc9n xlr9sxt xvvg52n xwd4zgb xq8v1ta x1hm9lzh x1sa5p1d xnlsq7q" tabIndex={0} data-tab="4" data-testid="status-header" aria-disabled="false" type="button">
              <div className="x1n2onr6">
                <div className="x78zum5 x1q0g3np x6s0dn4 xl56j7k x13zx6y x1peatla x17t9dm2">
                  <div className="x1rg5ohu x1n2onr6 x100vrsf x1vqgdyp">
                    <div className="x1n2onr6 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1gle93d x16ye13r x5lhr3w" style={{ height: '40px', width: '40px' }}>
                      <div className="x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23 x1hc1fzr x4u6w88 x1g40iwv xnpuxes" style={{ backgroundColor: 'var(--avatar-placeholder-background, #6b7780)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600 }}>U</div>
                    </div>
                    <div role="button" tabIndex={-1} data-testid="status-plus-badge" className="x78zum5 x6s0dn4 xl56j7k x1f6kntn xk50ysn xtvhhri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x12s1jxh xwwtwea x1gfkgh9 x1ta3ar0 x1se2ifz x13b0p5u x1gnnqk1 x1pse0pq x1gxa6cn x1j8ymqv xa0aww2 x4tra6z x10l6tqk x1o583il x1euzuty xupqr0c x1280gxy">
                      <div role="button" tabIndex={-1} className="x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1f6kntn xk50ysn xtvhhri x1c9tyrk xeusxvb x1pahc9y x1ertn4p x12s1jxh xwwtwea x1gfkgh9 x1ta3ar0 x1se2ifz x13b0p5u x1gnnqk1 xfn3atn x1pse0pq">
                        <span aria-hidden="true"><Icon name="ic-add" size={14} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="x78zum5 xdt5ytf x1qughib x9hgts1 xc9qbxq x11t971q">
                <span data-testid="my-status" className="x1jchvi3">My status</span>
                <span data-testid="status-no-updates" className="x1nxh6w3 xhslqc4">Click to add status update</span>
              </div>
            </button>
          </div>

          {/* Status list drawer */}
          <div className="x1n2onr6 x1280gxy xat24cr x1iyjqo2 xs83m0k x1t1x2f9" data-testid="status-list-drawer">
            <div className="x1n2onr6 x1iyjqo2 xs83m0k xdl72j9 xwxc41k x1odjw0f x122zoth x16jf5lm">
              <div tabIndex={-1} className="">
                <div className="x1y332i5 x1n2onr6 x6ikm8r x10wlt62" role="list" style={{ height: `${(FIXTURE_STATUSES.length + 2) * 72}px`, position: 'relative' }}>
                  <span className="">
                    {/* Section Header: Recent */}
                    <div className="x10l6tqk xh8yej3 x1g42fcv" role="listitem" data-testid="list-item-0" style={{ zIndex: 1000000, height: '72px', transform: 'translateY(0px)' }}>
                      <div data-testid="section-header" className="x9f619 x1cccnhj x9orja2 xyri2b x1995gp2 xzm8p2n xjbqb8w">
                        <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px' }}>Recent</span>
                      </div>
                    </div>

                    {/* Status rows */}
                    {FIXTURE_STATUSES.map((item, idx) => (
                      <div key={item.id} className="x10l6tqk xh8yej3 x1g42fcv" role="listitem" data-testid={`list-item-${idx + 1}`} style={{ zIndex: 999999 - idx, height: '72px', transform: `translateY(${(idx + 1) * 72}px)` }}>
                        <div data-tab="4" tabIndex={0} data-testid="status-row-cell" data-focusid="status-row-item" className="x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis x1yjtglu xiitwr3 x206yn3" role="button">
                          <div className="x78zum5">
                            <div role="" className="xz9dl7a x1q3ajuy xsag5q8 xbmws1g x1n2onr6 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 x1vqgdyp x100vrsf xfl633f" data-testid="status-thumbnail">
                              <svg className="x165d6jo x1rdy4ex x10l6tqk" data-testid="status-new-indication" width="48" height="48" viewBox="0 0 104 104">
                                {item.broken ? (
                                  <g data-testid="status-ring-broken">
                                    <circle cx="52" cy="52" r="50" fill="none" strokeLinecap="round" strokeDashoffset="387.69908169872417" strokeDasharray="147.07963267948966 10 147.07963267948966 10" strokeWidth="4" className="xc92gef x1r8hjv8"></circle>
                                  </g>
                                ) : (
                                  <circle cx="52" cy="52" r="50" fill="none" strokeLinecap="round" strokeWidth="4" className="xc92gef x1r8hjv8"></circle>
                                )}
                              </svg>
                              <div className="x1n2onr6 xkfcepe x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp x100vrsf">
                                <div className="x10l6tqk x1xsqp64 xiy17q3 x18d0r48 x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp x100vrsf" style={{ backgroundColor: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: '16px', borderRadius: '50%' }}>
                                  {item.initials}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v">
                            <div role="gridcell" aria-colindex={2} className="x6s0dn4 x78zum5 xggjnk3 x1yc453h">
                              <div className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3 xdod15v x6ikm8r x10wlt62 x1mzt3pk x1yc453h xo1l8bm" data-testid="cell-frame-title">
                                <span dir="auto" title={item.name} className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft xnpuxes" style={{ minHeight: '0px' }}>{item.name}</span>
                              </div>
                            </div>
                            <div className="x6s0dn4 xhslqc4 x78zum5 x1nxh6w3 x1fc57z9 xr9ek0c xisnujt" data-testid="cell-frame-secondary">
                              <div className="xjbqb8w x1iyjqo2 x1f6kntn x1fc57z9 x6ikm8r x10wlt62 x1yc453h xlyipyv xuxw1ft xo1l8bm">{item.time}</div>
                            </div>
                          </div>
                          <div className="xdt5ytf xl56j7k xeuugli x6s0dn4 xamitd3 x9f619 x78zum5 xdl72j9 x1c4vz4f x2lah0s x5yr21d x1hwfens">
                            <span className=""></span>
                            <span className="xtrg13t"></span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Section Header: Hidden */}
                    <div className="x10l6tqk xh8yej3 x1g42fcv" role="listitem" data-testid="list-item-4" style={{ zIndex: 999996, height: '72px', transform: `translateY(${(FIXTURE_STATUSES.length + 1) * 72}px)` }}>
                      <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 x2vl965">
                        <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 xw36f2b" style={{ flexGrow: 1 }}>
                          <div data-testid="status-list-mute-section-header" className="x9f619 x1cccnhj x9orja2 xyri2b x1995gp2 xzm8p2n xjbqb8w">
                            <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px' }}>Hidden</span>
                          </div>
                        </div>
                        <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 xamitd3 x12fk4p8 xw36f2b" style={{ flexGrow: 0 }}>
                          <div role="button" tabIndex={0} data-testid="status-list-mute-section-toggle" data-tab="4" className="" onClick={() => setShowHidden(!showHidden)}>
                            <span className="">
                              <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xo1mcw5 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', cursor: 'pointer' }}>{showHidden ? 'Hide' : 'Show'}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
