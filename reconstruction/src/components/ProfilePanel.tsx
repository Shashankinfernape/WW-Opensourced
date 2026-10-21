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
                  <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x13fj5qh x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px' }}>Profile</span>
                </h2>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm">
            {/* Photo picker area */}
            <div className="x78zum5 x6s0dn4 xl56j7k" style={{ padding: '28px 0' }} data-testid="profile-pic-picker">
              <div className="x3nfvp2 x2lah0s x16ye13r x5lhr3w" style={{ height: '120px', width: '120px', position: 'relative' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#00a884', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: 600 }}>
                  AR
                </div>
              </div>
            </div>

            {/* Name Section */}
            <div className="x1280gxy" style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))' }}>
              <div data-testid="pushname-section">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', color: '#00a884' }}>Your name</span>
                  </div>
                </div>
              </div>

              <div className="x78zum5 x6s0dn4" style={{ marginTop: '12px', justifyContent: 'space-between' }}>
                {isEditingName ? (
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={() => setIsEditingName(false)}
                    autoFocus
                    style={{ background: 'none', borderBottom: '2px solid #00a884', borderTop: 'none', borderLeft: 'none', borderRight: 'none', color: 'inherit', fontSize: '16px', outline: 'none', width: '80%' }}
                  />
                ) : (
                  <span data-testid="pushname-input-read-only selectable-text" style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}>{name}</span>
                )}
                <button type="button" aria-label="Edit Name" onClick={() => setIsEditingName(!isEditingName)} style={{ background: 'none', border: 'none', color: 'var(--icon, #8696a0)', cursor: 'pointer' }}>
                  <Icon name="ic-edit" size={20} />
                </button>
              </div>

              <div data-testid="pushname-description" style={{ marginTop: '12px', fontSize: '13px', color: 'var(--secondary, #8696a0)', lineHeight: '18px' }}>
                This is not your username or PIN. This name will be visible to your WhatsApp contacts.
              </div>
            </div>

            {/* About Section */}
            <div className="x1280gxy" style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))', marginTop: '16px' }}>
              <div data-testid="about-section">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', color: '#00a884' }}>About</span>
                  </div>
                </div>
              </div>

              <div className="x78zum5 x6s0dn4" style={{ marginTop: '12px', justifyContent: 'space-between' }}>
                {isEditingAbout ? (
                  <input
                    type="text"
                    value={about}
                    onChange={e => setAbout(e.target.value)}
                    onBlur={() => setIsEditingAbout(false)}
                    autoFocus
                    style={{ background: 'none', borderBottom: '2px solid #00a884', borderTop: 'none', borderLeft: 'none', borderRight: 'none', color: 'inherit', fontSize: '16px', outline: 'none', width: '80%' }}
                  />
                ) : (
                  <span data-testid="about-input-read-only selectable-text" style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}>{about}</span>
                )}
                <button type="button" aria-label="Edit" onClick={() => setIsEditingAbout(!isEditingAbout)} style={{ background: 'none', border: 'none', color: 'var(--icon, #8696a0)', cursor: 'pointer' }}>
                  <Icon name="ic-edit" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
