import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface ProfilePanelProps {
  onClose: () => void;
}

export const ProfilePanel: React.FC<ProfilePanelProps> = ({ onClose }) => {
  const [name, setName] = useState('Alex Rivera');
  const [about, setAbout] = useState('Available');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  return (
    <div className="xnpuxes x1280gxy x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 copyable-area" data-testid="profile-drawer" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod" tabIndex={-1} style={{ width: '100%', height: '100%' }}>
        <div className="x1rife3k x78zum5 xdt5ytf x5yr21d">
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
              <div data-testid="drawer-title-profile" className="x1iyjqo2 x6ikm8r x10wlt62 x1mzt3pk x6prxxf x1o2sk6j">
                <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
                  <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x13fj5qh x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px' }}>
                    <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">Profile</span>
                    </span>
                  </span>
                </h2>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm">
            {/* Photo picker area */}
            <div className="x1c4vz4f xdl72j9 x1g77sc7 xeuugli xozqiw3 x1oa3qoh x12fk4p8 x2lah0s x1q9ymp4 x9r8f99 xi3av73 x1n2onr6" style={{ padding: '28px 0', display: 'flex', justifyContent: 'center' }}>
              <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x6s0dn4">
                <div tabIndex={-1} className="x1n2onr6 x2pejg6 x1nbnut7 xvc5jky x11t971q" aria-label="View group profile picture" style={{ width: '120px', height: '120px', position: 'relative' }}>
                  <div className="x6s0dn4 x78zum5 x5yr21d xl56j7k xh8yej3" data-testid="profile-pic-picker">
                    <div className="x3nfvp2 x2lah0s x16ye13r x5lhr3w" style={{ height: '120px', width: '120px', borderRadius: '50%', backgroundColor: '#00a884', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '48px', fontWeight: 600, overflow: 'hidden', position: 'relative' }}>
                      AR
                      <div className="x6s0dn4 x78zum5 xl56j7k x6ikm8r x10wlt62 x10l6tqk x16zzebs x1m2rwpn xfk5h6u x1em17wz" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11, 20, 26, 0.45)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', opacity: 0.9 }}>
                        <Icon name="ic-add-a-photo" size={24} />
                        <span style={{ fontSize: '11px', textTransform: 'uppercase', marginTop: '6px', textAlign: 'center', lineHeight: '14px', maxWidth: '80px' }}>Change Profile Photo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name Section */}
            <div className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x1280gxy xyinxu5 x5zjp28 x1a8lsjc x162tt16" style={{ padding: '14px 30px' }}>
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x18d9i69 x1c1uobl x1u7kmwd x16ovd2e" data-testid="pushname-section">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', color: '#00a884' }}>Your name</span>
                  </div>
                </div>
              </div>

              <div tabIndex={-1} className="x1n2onr6 x1vvkbs" style={{ marginTop: '10px' }}>
                <div className="x1n2onr6 xhtitgo x78zum5 x1cy8zhl xlxy82 x1q0q8m5 x16stqrj" dir="ltr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="x1iyjqo2 xs83m0k x1t1x2f9 x1y1aw1k x1gabggj x6ikm8r x10wlt62 x1fc57z9 x1vvkbs" style={{ flex: 1 }}>
                    {isEditingName ? (
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onBlur={() => setIsEditingName(false)}
                        autoFocus
                        style={{ background: 'none', borderBottom: '2px solid #00a884', borderTop: 'none', borderLeft: 'none', borderRight: 'none', color: 'inherit', fontSize: '16px', outline: 'none', width: '90%' }}
                      />
                    ) : (
                      <span data-testid="pushname-input-read-only selectable-text" dir="auto" className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv x1fj9vlw xnpuxes selectable-text copyable-text" style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}>{name}</span>
                    )}
                  </div>
                  <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xfex06f xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl">
                    <button aria-label="Edit Name" aria-disabled="false" tabIndex={0} type="button" onClick={() => setIsEditingName(!isEditingName)} style={{ background: 'none', border: 'none', color: 'var(--icon, #8696a0)', cursor: 'pointer', padding: '4px' }}>
                      <Icon name="ic-edit" size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div data-testid="pushname-description" className="xyorhqc x2pibh5 xymharo" style={{ marginTop: '10px' }}>
                <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--secondary, #8696a0)' }}>
                  This is not your username or PIN. This name will be visible to your WhatsApp contacts.
                </span>
              </div>
            </div>

            {/* About Section */}
            <div className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x1280gxy xyinxu5 x5zjp28 x1a8lsjc x162tt16" style={{ padding: '14px 30px' }}>
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x18d9i69 x1c1uobl x1u7kmwd x16ovd2e" data-testid="about-section">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', color: '#00a884' }}>About</span>
                  </div>
                </div>
              </div>

              <div tabIndex={-1} className="x1n2onr6 x1vvkbs" style={{ marginTop: '10px' }}>
                <div className="x1n2onr6 xhtitgo x78zum5 x1cy8zhl xlxy82 x1q0q8m5 x16stqrj" dir="ltr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="x1iyjqo2 xs83m0k x1t1x2f9 x1y1aw1k x1gabggj x6ikm8r x10wlt62 x1fc57z9 x1vvkbs" style={{ flex: 1 }}>
                    {isEditingAbout ? (
                      <input
                        type="text"
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                        onBlur={() => setIsEditingAbout(false)}
                        autoFocus
                        style={{ background: 'none', borderBottom: '2px solid #00a884', borderTop: 'none', borderLeft: 'none', borderRight: 'none', color: 'inherit', fontSize: '16px', outline: 'none', width: '90%' }}
                      />
                    ) : (
                      <span data-testid="about-input-read-only selectable-text" dir="auto" className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv x1fj9vlw xnpuxes selectable-text copyable-text" style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}>{about}</span>
                    )}
                  </div>
                  <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xfex06f xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl">
                    <button aria-label="Edit" aria-disabled="false" tabIndex={0} type="button" onClick={() => setIsEditingAbout(!isEditingAbout)} style={{ background: 'none', border: 'none', color: 'var(--icon, #8696a0)', cursor: 'pointer', padding: '4px' }}>
                      <Icon name="ic-edit" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reserved Username Section */}
            <div className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1280gxy xyri2b x18d9i69 x1c1uobl xyinxu5 xat24cr" style={{ padding: '14px 30px' }}>
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x16ovd2e x162tt16 xjkvuk6">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', color: '#00a884' }}>Reserved Username</span>
                  </div>
                </div>
              </div>
              <div role="button" tabIndex={0} className="x162tt16" data-testid="container" style={{ marginTop: '10px', cursor: 'pointer' }}>
                <div className="x78zum5 x6s0dn4 xng8ra x5zjp28" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="x1iyjqo2 xs83m0k xdl72j9 x1rdy4ex x6ikm8r x10wlt62 xlyipyv xuxw1ft" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span aria-hidden="true" className="xhslqc4" style={{ color: 'var(--icon, #8696a0)', display: 'flex', alignItems: 'center' }}><Icon name="ic-alternate-email" size={24} /></span>
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px', color: 'var(--primary, #e9edef)' }}>alexrivera</span>
                  </div>
                  <div className="x1c4vz4f x2lah0s xdl72j9 x1bc76pt">
                    <span aria-hidden="true" className="xhslqc4" style={{ color: 'var(--icon, #8696a0)', display: 'flex', alignItems: 'center' }}><Icon name="ic-chevron-right" size={24} /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1280gxy xyri2b x18d9i69 x1c1uobl xyinxu5 xat24cr" style={{ padding: '14px 30px' }}>
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x16ovd2e x162tt16 xjkvuk6">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', color: '#00a884' }}>Phone</span>
                  </div>
                </div>
              </div>
              <div tabIndex={-1} className="x162tt16" data-testid="container" style={{ marginTop: '10px' }}>
                <div className="x78zum5 x6s0dn4 xng8ra x5zjp28" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="x1iyjqo2 xs83m0k xdl72j9 x1rdy4ex x6ikm8r x10wlt62 xlyipyv xuxw1ft" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span aria-hidden="true" className="xhslqc4" style={{ color: 'var(--icon, #8696a0)', display: 'flex', alignItems: 'center' }}><Icon name="ic-call" size={24} /></span>
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px', color: 'var(--primary, #e9edef)' }}>+1 555-0199</span>
                  </div>
                  <div className="x1c4vz4f x2lah0s xdl72j9 x1bc76pt">
                    <button aria-label="Copy" aria-disabled="false" tabIndex={0} type="button" className="html-button" style={{ background: 'none', border: 'none', color: 'var(--icon, #8696a0)', cursor: 'pointer', padding: '4px' }}>
                      <Icon name="ic-content-copy" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="xexx8yu xyri2b xefzj8c x1c1uobl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
