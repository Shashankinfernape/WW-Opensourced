import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface StarredMessagesPanelProps {
  onClose: () => void;
}

export const StarredMessagesPanel: React.FC<StarredMessagesPanelProps> = ({ onClose }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="xevlxbw x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x570efc x18dvir5 xxljpkc x6ikm8r x10wlt62 x1oy9qf3 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1 xpilrb4 x1t7ytsu x1vb5itz" data-testid="drawer-left" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div>
        <span className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod">
          <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod" tabIndex={-1} style={{ height: '100%', opacity: 1 }}>
            <div className="xnpuxes x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x1h3rtpe copyable-area">
              <div className="x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf xh8yej3 x5yr21d x6ikm8r x10wlt62 x67bb7w">
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
                            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Starred messages</span>
                          </span>
                        </span>
                      </h2>
                    </div>
                    <span className="x1okw0bk">
                      <div className="x1s70e7g x78zum5 x6s0dn4 x1afcbsf x14ug900">
                        <div>
                          <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                            <button aria-label="Menu" aria-disabled="false" aria-expanded="false" aria-haspopup="menu" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf">
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
                      </div>
                    </span>
                  </div>
                </header>

                {/* Search Bar */}
                <div className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1280gxy xat24cr">
                  <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1qjc9v5">
                    <div className="x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xexx8yu x1xnnf8n x18d9i69 x106a9eq xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1n2onr6 xh8yej3 x9f619 xdd8jsf x7a106z x1mz2wy7 xw36f2b xn95wi4" style={{ flexBasis: 'auto', flexGrow: 0, flexShrink: 0 }}>
                      <div className="xs83m0k xdl72j9 x1g77sc7 xozqiw3 x1oa3qoh x12fk4p8 xexx8yu x18d9i69 xeuugli x2lwn1j x1nhvcw1 x1n2onr6 x9f619 x78zum5 x1q0g3np x6s0dn4 x14ug900 xjdcl3y x1ekkm8c x1143rjc xum4auv xj21bgg x1vqgdyp x1gnnqk1 x19qpdui x1p4gyq8 xyri2b x4wrhlh x1l0ey4t xw36f2b" style={{ flexGrow: 1 }}>
                        <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x1lziwak xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl x1qx5ct2 xw4jnvo x2lah0s x10l6tqk x1eu8d0j x9p6ekw">
                          <span aria-hidden="true"><Icon name="ic-search" size={20} /></span>
                        </div>
                        <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xf159sx xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl xh8yej3">
                          <input
                            data-testid="search-input"
                            role="textbox"
                            aria-label="Search"
                            placeholder="Search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ background: 'none', border: 'none', outline: 'none', width: '100%', color: 'inherit' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content / Empty Area */}
                <div className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm">
                  <div className="x9f619 x78zum5 x1iyjqo2 xdt5ytf x6s0dn4 xl56j7k x5yr21d x13crsa5 xx281p9 x1rxj1xn x67w97k xhslqc4 x2b8uid" style={{ padding: '40px 20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)' }}>No starred messages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default StarredMessagesPanel;
