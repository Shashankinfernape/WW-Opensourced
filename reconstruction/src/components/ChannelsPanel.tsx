import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface ChannelItem {
  id: string;
  name: string;
  followers: string;
  color: string;
  initials: string;
  verified?: boolean;
}

const FIXTURE_CHANNELS: ChannelItem[] = [
  { id: '1', name: 'Chat GPT AI Prompt', followers: '6L followers', color: '#10a37f', initials: 'AI' },
  { id: '2', name: 'Pharma Job Vacancy', followers: '59K followers', color: '#1f7a8c', initials: 'PJ' },
  { id: '3', name: 'Learn MS Excel', followers: '7L followers', color: '#107c41', initials: 'XL' },
  { id: '4', name: 'WhatsApp', followers: '23.3Cr followers', color: '#00a884', initials: 'WA', verified: true },
  { id: '5', name: 'Prompt ⬇️✨', followers: '13.9L followers', color: '#e0245e', initials: 'PR' }
];

export const ChannelsPanel: React.FC = () => {
  const [following, setFollowing] = useState<Record<string, boolean>>({});

  const toggleFollow = (id: string) => {
    setFollowing(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div tabIndex={-1} className="" aria-label="Channel tab drawer" data-testid="newsletter-tab-drawer" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="xnpuxes x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x1280gxy copyable-area" data-testid="newsletter-drawer">
        {/* Header */}
        <header className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x1a8lsjc x106a9eq x1xnnf8n">
          <div className="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl">
            <div data-testid="drawer-title-body" className="x1iyjqo2 x6ikm8r x10wlt62 x1mzt3pk">
              <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
                <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1aueamr xjb2p0i xo1l8bm xladpa3 x1ic7a3i" style={{ fontSize: '22px', lineHeight: '28px' }}>
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                    <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Channels</span>
                  </span>
                </span>
              </h2>
            </div>
            <div className="x78zum5 x1okw0bk x6s0dn4 xdwrcjd">
              <div className="x78zum5 x1qvou4u x1s70e7g">
                <div>
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                    <button data-tab="2" aria-label="Menu" aria-disabled="false" aria-expanded="false" aria-haspopup="menu" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf">
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
          </div>
        </header>

        {/* Recommended Unit */}
        <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x6s0dn4 xh8yej3 x1plvlek xryxfnj xn95wi4" data-testid="newsletter-recommended-unit" style={{ flexShrink: 0 }}>
          <div tabIndex={-1} className="x2b8uid x1ua1l7f" data-testid="newsletter-recommended-block-heading">
            <div className="">
              <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1aueamr xjb2p0i xo1l8bm xladpa3 x1ic7a3i" style={{ fontSize: '22px', lineHeight: '28px' }}>Stay updated on your favourite topics</span>
            </div>
            <div className="x1xmf6yo x1xegmmw x1e56ztr x13fj5qh">
              <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '21px' }}>Find channels to follow below</span>
            </div>
          </div>

          <div className="x1n2onr6 xh8yej3 x1plvlek xryxfnj">
            <div tabIndex={0} className="" role="list" data-tab="4">
              <div tabIndex={-1} className="">
                <div className="x1y332i5 x1n2onr6 xh8yej3 x1plvlek xryxfnj" role="navigation" style={{ height: `${FIXTURE_CHANNELS.length * 72}px`, position: 'relative' }}>
                  {FIXTURE_CHANNELS.map((channel, idx) => (
                    <div key={channel.id} className="x10l6tqk xh8yej3 x1g42fcv" role="listitem" data-testid={`list-item-${idx}`} style={{ zIndex: 1000000 - idx, height: '72px', transform: `translateY(${idx * 72}px)` }}>
                      <div>
                        <div tabIndex={-1} className="" role="button" data-testid="newsletter-recommended-item">
                          <div className="x78zum5 xh8yej3 x1iyjqo2 x1n2onr6 x9f619 xkh2ocl" data-testid="cell-frame-container" aria-disabled="false" role="button" tabIndex={-1}>
                            <div className="xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x1nhvcw1 x1q0g3np x9f619 x1iyjqo2 x1qjc9v5 x1qafhyn xlr9sxt xvvg52n xwd4zgb xq8v1ta x17gydlx x1jsj9aw x1hm9lzh x1sa5p1d">
                              <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x2lwn1j xl56j7k x1q0g3np x6s0dn4 x1y1aw1k xwib8y2 xv54qhq x900493 x1iw51ew xn95wi4" style={{ flexShrink: 0 }}>
                                <div className="x1n2onr6">
                                  <div className="x1n2onr6 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x16ye13r x5lhr3w" style={{ height: '49px', width: '49px' }}>
                                    <div className="x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23 x1hc1fzr x4u6w88 x1g40iwv xnpuxes" style={{ backgroundColor: channel.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: '18px' }}>
                                      {channel.initials}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xdt5ytf x12lumcd x1qjc9v5 xl56j7k x9f619 x1y1aw1k xwib8y2 x1mz2wy7 xw36f2b xn95wi4" style={{ flexBasis: 'auto', flexGrow: 1, flexShrink: 1 }}>
                                <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4">
                                  <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 x6ikm8r x10wlt62 xuxw1ft xlyipyv x9f619 xggjnk3 xw36f2b" style={{ flexGrow: 1 }}>
                                    <div className="x78zum5 x6ikm8r x10wlt62">
                                      <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '21px' }}>
                                        <span className="x1c4vz4f x3nfvp2 x1i7k8ik xq9mrsl x6s0dn4 x6ikm8r x10wlt62 x193iq5w">
                                          <span className="x78zum5 xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                                            <span dir="auto" className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu xnpuxes" style={{ minHeight: '0px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                              {channel.name}
                                              {channel.verified && (
                                                <span style={{ color: '#00a884', display: 'inline-flex', marginLeft: '4px' }}>
                                                  <Icon name="wds-ic-verified-filled" size={16} />
                                                </span>
                                              )}
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl">
                                  <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 x6ikm8r x10wlt62 xuxw1ft xlyipyv x9f619 xw36f2b" style={{ flexGrow: 1 }}>
                                    <div className="">
                                      <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '20px' }}>{channel.followers}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x2lwn1j xl56j7k x1q0g3np x6s0dn4 x1y1aw1k xwib8y2 xf7dkkf x900493 xde1mab xn95wi4" style={{ flexShrink: 0 }}>
                                <button
                                  aria-disabled="false"
                                  tabIndex={0}
                                  type="button"
                                  onClick={() => toggleFollow(channel.id)}
                                  className="html-button"
                                  style={{
                                    background: following[channel.id] ? 'transparent' : '#0c382e',
                                    color: following[channel.id] ? 'var(--secondary, #8696a0)' : '#00a884',
                                    border: following[channel.id] ? '1px solid rgba(134, 150, 160, 0.3)' : 'none',
                                    borderRadius: '24px',
                                    padding: '6px 16px',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease'
                                  }}
                                >
                                  {following[channel.id] ? 'Following' : 'Follow'}
                                </button>
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

          {/* Action buttons: Discover more & Create channel */}
          <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x6s0dn4 xh8yej3 x1plvlek xryxfnj xn95wi4" style={{ flexShrink: 0 }}>
            <div className="xh8yej3 x6ikm8r x10wlt62 x1lliihq" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px', width: '100%', boxSizing: 'border-box' }}>
              <div tabIndex={0} className="x1h678fw x1a8lsjc xe2zdcy x2vl965" data-tab="4">
                <button aria-disabled="false" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1n2onr6 x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xo1mcw5 x1wjp2x xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem xh8yej3 x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp xdx6fka xvtqlqk" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--border-default, rgba(134, 150, 160, 0.2))', padding: '8px 16px', background: 'none', color: 'var(--primary, #00a884)', cursor: 'pointer' }}>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm x1nzty39">
                        <span aria-hidden="true" className="x1qx5ct2 xw4jnvo"><Icon name="ic-grid" size={20} /></span>
                      </div>
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1nzty39 x1c4vz4f" style={{ marginLeft: '12px' }}>
                        <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xo1mcw5 x87ps6o x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 500 }}>
                          <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Discover more</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div tabIndex={0} className="xv6tirj xe2zdcy x2vl965" data-tab="4">
                <button aria-disabled="false" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1n2onr6 x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xo1mcw5 x1wjp2x xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem xh8yej3 x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp xdx6fka xvtqlqk" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--border-default, rgba(134, 150, 160, 0.2))', padding: '8px 16px', background: 'none', color: 'var(--primary, #00a884)', cursor: 'pointer' }}>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm x1nzty39">
                        <span aria-hidden="true" className="x1qx5ct2 xw4jnvo"><Icon name="ic-add" size={20} /></span>
                      </div>
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1nzty39 x1c4vz4f" style={{ marginLeft: '12px' }}>
                        <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xo1mcw5 x87ps6o x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 500 }}>
                          <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Create channel</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
