import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface SettingsPanelProps {
  onClose?: () => void;
  onOpenProfile?: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose, onOpenProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubpage, setActiveSubpage] = useState<string | null>(null);

  const menuItems = [
    { id: 'profile', testid: 'li-profile', label: 'Profile', subtitle: 'Name, profile picture, username', icon: 'ic-account-circle', onClick: onOpenProfile },
    { id: 'account', testid: 'li-account', label: 'Account', subtitle: 'Security notifications, account info', icon: 'ic-key', onClick: () => setActiveSubpage('Account') },
    { id: 'privacy', testid: 'settings-drawer-item-privacy', label: 'Privacy', subtitle: 'Blocked contacts, disappearing messages', icon: 'ic-lock', onClick: () => setActiveSubpage('Privacy') },
    { id: 'chats', testid: 'li-chats', label: 'Chats', subtitle: 'Theme, wallpaper, chat settings', icon: 'wds-ic-chat', onClick: () => setActiveSubpage('Chats') },
    { id: 'notifications', testid: 'li-notifications', label: 'Notifications', subtitle: 'Messages, groups, sounds', icon: 'ic-notifications', onClick: () => setActiveSubpage('Notifications') },
    { id: 'shortcuts', testid: 'li-keyboard-shortcuts', label: 'Keyboard shortcuts', subtitle: 'Quick actions', icon: 'ic-keyboard', onClick: () => setActiveSubpage('Keyboard shortcuts') },
    { id: 'help', testid: 'li-help', label: 'Help and feedback', subtitle: 'Help centre, contact us, privacy policy', icon: 'ic-help', onClick: () => setActiveSubpage('Help') },
    { id: 'logout', testid: 'li-logout', label: 'Log out', icon: 'ic-logout', danger: true, onClick: onClose }
  ];

  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="xnpuxes x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x1280gxy copyable-area" data-testid="me-tab-drawer" style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Header */}
      <header className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x1a8lsjc x106a9eq x1xnnf8n">
        <div className="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl">
          {activeSubpage && (
            <button
              type="button"
              aria-label="Back"
              onClick={() => setActiveSubpage(null)}
              className="html-button"
              style={{ background: 'none', border: 'none', color: 'var(--icon, #aebac1)', cursor: 'pointer', paddingRight: '16px' }}
            >
              <Icon name="ic-arrow-back" size={24} />
            </button>
          )}
          <div data-testid="drawer-title-body" className="x1iyjqo2 x6ikm8r x10wlt62 x1mzt3pk">
            <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
              <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1aueamr xjb2p0i xo1l8bm xladpa3 x1ic7a3i" style={{ fontSize: '22px', lineHeight: '15.6406px' }}>
                <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span dir="auto" title={activeSubpage || 'Alex Rivera'} className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft xnpuxes" style={{ minHeight: '0px' }}>{activeSubpage || 'Alex Rivera'}</span>
                  </span>
                </span>
              </span>
            </h2>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm">
        {!activeSubpage && (
          <div className="x1phvje8 xcldk2z x1tiyuxx x1nbhmlj">
            {/* Search */}
            <div dir="ltr" className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl">
              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x5yr21d xh8yej3">
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1q0g3np xh8yej3 x78zum5 x6s0dn4 x9f619 x4wrhlh x1w9h8z1 xn2mukg x1yo0frk x2b5yea x1vqgdyp xq91m4v x1fxkg6m x1x15s1u x17mvztg x1bsbh89 xxyb0qf x8qhm2e">
                  <div className="html-div xdj266r xat24cr xexx8yu xyri2b x18d9i69 x1c1uobl xw4jnvo x1qx5ct2 x1yzq74r xv4jd37 xhslqc4">
                    <span aria-hidden="true"><Icon name="ic-search" size={20} /></span>
                  </div>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1iyjqo2">
                    <input
                      role="textbox"
                      aria-label="Search"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="html-input xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl x14ug900 xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1qx5ct2 xlyipyv xh8yej3 x1uvtmcs x1hcheoe x1nzty39 xkrh14z x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Avatar Card (120px) */}
            <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x6s0dn4 x9r8f99" style={{ padding: '24px 0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#00a884', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: 600, cursor: 'pointer', marginBottom: '12px' }} onClick={onOpenProfile}>
                AR
              </div>
              <div style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)' }}>
                Available
              </div>
            </div>

            {/* Listbox */}
            <div role="listbox" data-testid="dropdown" className="x78zum5 x1iyjqo2 xw2csxc x1odjw0f">
              <div tabIndex={-1} className="x78zum5 xdt5ytf x1iyjqo2 x2lah0s xdl72j9 x1odjw0f xh8yej3">
                <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1qjc9v5 x16ovd2e x1nzty39 x12xbjc7 x12w63v0" data-testid="menu-controller-focus-receiver" tabIndex={0}>
                  <div className="x3psx0u xat24cr x1280gxy x1h678fw xv6tirj x1c1uobl xyri2b">
                    {filteredItems.map(item => (
                      <button
                        key={item.id}
                        data-testid={item.testid}
                        aria-disabled="false"
                        type="button"
                        role="listitem"
                        tabIndex={0}
                        data-tab="0"
                        onClick={item.onClick}
                        className="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x1fmog5m xu25z0z x140muxe xo1y3bh xexx8yu xyri2b x18d9i69 x1c1uobl x1yc453h x6ikm8r x10wlt62 x78zum5 x1iyjqo2 x2lah0s xdl72j9 xkh2ocl xh8yej3"
                        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        <div className="x78zum5 xh8yej3 x1iyjqo2 x1n2onr6 x9f619 xkh2ocl" data-testid="cell-frame-container" aria-disabled="false" role="button" tabIndex={-1} style={{ width: '100%' }}>
                          <div className="xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x1nhvcw1 x1q0g3np x9f619 x1iyjqo2 x1qjc9v5 x879a55 x16ydxro xyo1k6t xlr9sxt xvvg52n xwd4zgb xq8v1ta x17gydlx x1jsj9aw" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                            <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x2lwn1j xl56j7k x1q0g3np x6s0dn4 xz9dl7a xsag5q8 xe2zdcy x1pic42t x1fns5xo xn95wi4" style={{ flexShrink: 0, marginRight: '16px' }}>
                              <div className={item.danger ? '' : 'xhslqc4'}>
                                <span aria-hidden="true"><Icon name={item.icon} size={24} color={item.danger ? '#ea4335' : 'var(--icon, #8696a0)'} /></span>
                              </div>
                            </div>
                            <div className="x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xdt5ytf x12lumcd x1qjc9v5 xl56j7k x9f619 xz9dl7a xsag5q8 x1mz2wy7 xw36f2b xn95wi4" style={{ flexBasis: 'auto', flexGrow: 1, flexShrink: 1 }}>
                              <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4">
                                <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 x6ikm8r x10wlt62 xuxw1ft xlyipyv x9f619 xggjnk3 xw36f2b" style={{ flexGrow: 1 }}>
                                  <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px', color: item.danger ? '#ea4335' : 'var(--primary, #e9edef)' }}>
                                    {item.label}
                                  </span>
                                </div>
                              </div>
                              {item.subtitle && (
                                <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl">
                                  <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 x6ikm8r x10wlt62 xuxw1ft xlyipyv x9f619 xw36f2b" style={{ flexGrow: 1 }}>
                                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '14px', lineHeight: '9.9531px', color: 'var(--secondary, #8696a0)' }}>
                                      {item.subtitle}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Subpage View */}
        {activeSubpage && (
          <div style={{ padding: '24px 20px', color: 'var(--primary, #e9edef)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>{activeSubpage} Options</h3>
            <p style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)', lineHeight: '20px' }}>
              Manage your {activeSubpage.toLowerCase()} settings and preferences.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPanel;
