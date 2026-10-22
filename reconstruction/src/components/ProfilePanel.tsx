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
  const [isHoveredPhoto, setIsHoveredPhoto] = useState(false);

  return (
    <div
      className="xnpuxes x1280gxy x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 copyable-area"
      data-testid="profile-drawer"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'rgb(22, 23, 23)',
      }}
    >
      <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod" tabIndex={-1} style={{ width: '100%', height: '100%' }}>
        <div className="x1rife3k x78zum5 xdt5ytf x5yr21d" style={{ height: '100%' }}>
          {/* Header */}
          <header
            className="x570efc x9f619 x78zum5 x1okw0bk x6s0dn4 x1peatla x14ug900 x1280gxy x889kno x2vl965 x1a8lsjc xe2zdcy"
            style={{ height: '64px', backgroundColor: 'rgb(22, 23, 23)', padding: '0 20px', display: 'flex', alignItems: 'center' }}
          >
            <div className="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xo1l8bm x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div className="x1okw0bk">
                <div>
                  <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                    <div className="x1n2onr6">
                      <button
                        data-tab="2"
                        aria-label="Back"
                        aria-disabled="false"
                        tabIndex={0}
                        type="button"
                        onClick={onClose}
                        className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm" style={{ display: 'flex', alignItems: 'center' }}>
                              <span aria-hidden="true" className="xxk0z11 xvy4d1p" style={{ color: 'var(--icon, #aebac1)', display: 'flex' }}>
                                <Icon name="ic-arrow-back" size={24} />
                              </span>
                            </div>
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f"></div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </span>
                </div>
              </div>
              <div data-testid="drawer-title-profile" className="x1iyjqo2 x6ikm8r x10wlt62 x1mzt3pk x6prxxf x1o2sk6j" style={{ marginLeft: '24px' }}>
                <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli" style={{ margin: 0 }}>
                  <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x13fj5qh x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i" style={{ fontSize: '16px', lineHeight: '11.375px' }}>
                    <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft" style={{ color: 'rgb(250, 250, 250)', fontWeight: 500 }}>
                        Edit profile
                      </span>
                    </span>
                  </span>
                </h2>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr x1anedsm" style={{ flex: 1, overflowY: 'auto' }}>
            {/* Child 0: Photo area */}
            <div className="x1c4vz4f xdl72j9 x1g77sc7 xeuugli xozqiw3 x1oa3qoh x12fk4p8 x2lah0s x1q9ymp4 x9r8f99 xi3av73 x1n2onr6" style={{ margin: '40px 0', padding: 0, display: 'flex', justifyContent: 'center' }}>
              <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x6s0dn4">
                <div tabIndex={-1} className="x1n2onr6 x2pejg6 x1nbnut7 xvc5jky x11t971q" aria-label="View group profile picture" style={{ width: '120px', height: '120px', margin: '0 auto', position: 'relative' }}>
                  <div className="x6s0dn4 x78zum5 x5yr21d xl56j7k xh8yej3" data-testid="profile-pic-picker" style={{ width: '120px', height: '120px' }}>
                    <div className="x3nfvp2 x2lah0s x16ye13r x5lhr3w" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                        <button
                          aria-label="Edit"
                          type="button"
                          onMouseEnter={() => setIsHoveredPhoto(true)}
                          onMouseLeave={() => setIsHoveredPhoto(false)}
                          className="xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x3nfvp2 x2lah0s x1plvlek xryxfnj xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x3oybdh x13t8fmb x11xpdln xum2xem xtnn1bt x9v5kkp xmw7ebm xrdum7p x16ye13r x5lhr3w"
                          style={{ height: '120px', width: '120px', background: 'none', border: 'none', padding: 0, cursor: 'pointer', position: 'relative', overflow: 'hidden', borderRadius: '50%' }}
                        >
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xyri2b x18d9i69 x1c1uobl xqtp20y x1n2onr6 xh8yej3 x1jm3axb" style={{ paddingTop: '100%' }}>
                            <div className="html-div x1qjc9v5 x1q0q8m5 x1qhh985 x18b5jzi x10w94by x1t7ytsu x14e42zd x13fuv20 x972fbf x1ey2m1c x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xtijo5x x1o0tod x1qughib xat24cr x14z9mp x1lziwak xdj266r x2lwn1j xeuugli x18d9i69 xyri2b x1c1uobl xexx8yu x10l6tqk x13vifvy x1ja2u2z" style={{ position: 'absolute', inset: 0 }}>
                              <svg aria-hidden="true" className="x5yr21d xh8yej3" height="120" width="120">
                                <mask id="_r_profile_mask_">
                                  <g fill="white"><circle cx="50%" cy="50%" r="calc(50% - 0px)"></circle></g>
                                  <g fill="black"></g>
                                </mask>
                                <g mask="url(#_r_profile_mask_)">
                                  <circle cx="60" cy="60" r="60" fill="#6b7780" />
                                  <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="44" fontWeight="600" fontFamily="Segoe UI, Helvetica Neue, Arial">AR</text>
                                  <g fill="transparent" stroke="var(--WDS-components-outline-profile-photo, rgba(255,255,255,0.1))" strokeWidth="1">
                                    <circle cx="50%" cy="50%" r="calc(50% - 0px)"></circle>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          {/* Hover camera overlay */}
                          <div
                            aria-hidden="true"
                            className="x6s0dn4 x78zum5 xl56j7k x6ikm8r x10wlt62 x10l6tqk x16zzebs x1m2rwpn xfk5h6u x1em17wz x1c9tyrk xeusxvb x1pahc9y x1ertn4p xg01cxk x1o7uuvo x19991ni xx6bhzk x9lcvmn"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              opacity: isHoveredPhoto ? 1 : 0,
                              transition: 'opacity 0.15s ease',
                              backgroundColor: 'rgba(11, 20, 26, 0.55)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff',
                            }}
                          >
                            <svg aria-hidden="true" height="100%" className="x13vifvy x1o0tod x47corl x10l6tqk" viewBox="0 0 120 120" width="100%" style={{ position: 'absolute', inset: 0 }}>
                              <circle cx="60" cy="60" fill="var(--WDS-background-dimmer, rgba(11,20,26,0.4))" r="60"></circle>
                            </svg>
                            <div className="x14ju556 x3oybdh xcum6zn x11xpdln xx6bhzk x9lcvmn x14rh7hd" style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <span aria-hidden="true">
                                <Icon name="ic-add-a-photo" size={54} color="#ffffff" />
                              </span>
                            </div>
                          </div>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Child 1: Name Section */}
            <div
              className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x1280gxy xyinxu5 x5zjp28 x1a8lsjc x162tt16"
              style={{ margin: '0 0 10px', padding: '14px 30px 10px', backgroundColor: 'rgb(22, 23, 23)' }}
            >
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x18d9i69 x1c1uobl x1u7kmwd x16ovd2e" data-testid="pushname-section">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span
                      className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu"
                      style={{ fontSize: '14px', lineHeight: '9.9531px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}
                    >
                      Name
                    </span>
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
                        style={{
                          background: 'none',
                          borderBottom: '2px solid #00a884',
                          borderTop: 'none',
                          borderLeft: 'none',
                          borderRight: 'none',
                          color: 'rgb(250, 250, 250)',
                          fontSize: '16px',
                          outline: 'none',
                          width: '90%',
                        }}
                      />
                    ) : (
                      <span
                        data-testid="pushname-input-read-only selectable-text"
                        dir="auto"
                        className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv x1fj9vlw xnpuxes selectable-text copyable-text"
                        style={{ minHeight: '0px', fontSize: '16px', color: 'rgb(250, 250, 250)' }}
                      >
                        <span className="">{name}</span>
                      </span>
                    )}
                  </div>
                  <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xfex06f xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl">
                    <span className="x78zum5 x1c4vz4f x2lah0s xdl72j9 xtqikln x1y1aw1k xjji8sl"></span>
                    <span className="x2lah0s x14ug900 xamitd3">
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                        <button
                          aria-label="Edit Name"
                          aria-disabled="false"
                          tabIndex={0}
                          type="button"
                          onClick={() => setIsEditingName(!isEditingName)}
                          className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--icon, #8696a0)', display: 'flex' }}
                        >
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                                <span aria-hidden="true" className="xxk0z11 xvy4d1p" style={{ display: 'flex' }}>
                                  <Icon name="ic-edit" size={24} />
                                </span>
                              </div>
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f"></div>
                            </div>
                          </div>
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Child 2: Pushname Description */}
            <div data-testid="pushname-description" className="xyorhqc x2pibh5 xymharo" style={{ margin: '0 30px 10px' }}>
              <span
                className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
                style={{ fontSize: '14px', lineHeight: '20px', color: 'rgba(255, 255, 255, 0.6)' }}
              >
                This is not your username or PIN. This name will be visible to your WhatsApp contacts.
              </span>
            </div>

            {/* Child 3: About Section */}
            <div
              className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x1280gxy xyinxu5 x5zjp28 x1a8lsjc x162tt16"
              style={{ margin: '0 0 10px', padding: '14px 30px 10px', backgroundColor: 'rgb(22, 23, 23)' }}
            >
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x18d9i69 x1c1uobl x1u7kmwd x16ovd2e" data-testid="about-section">
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span
                      className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu"
                      style={{ fontSize: '14px', lineHeight: '9.9531px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}
                    >
                      About
                    </span>
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
                        style={{
                          background: 'none',
                          borderBottom: '2px solid #00a884',
                          borderTop: 'none',
                          borderLeft: 'none',
                          borderRight: 'none',
                          color: 'rgb(250, 250, 250)',
                          fontSize: '16px',
                          outline: 'none',
                          width: '90%',
                        }}
                      />
                    ) : (
                      <span
                        data-testid="about-input-read-only selectable-text"
                        dir="auto"
                        className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv x1fj9vlw xnpuxes selectable-text copyable-text"
                        style={{ minHeight: '0px', fontSize: '16px', color: 'rgb(250, 250, 250)' }}
                      >
                        <span className="">{about}</span>
                      </span>
                    )}
                  </div>
                  <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xfex06f xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl">
                    <span className="x78zum5 x1c4vz4f x2lah0s xdl72j9 xtqikln x1y1aw1k xjji8sl"></span>
                    <span className="x2lah0s x14ug900 xamitd3">
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                        <button
                          aria-label="Edit"
                          aria-disabled="false"
                          tabIndex={0}
                          type="button"
                          onClick={() => setIsEditingAbout(!isEditingAbout)}
                          className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--icon, #8696a0)', display: 'flex' }}
                        >
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                                <span aria-hidden="true" className="xxk0z11 xvy4d1p" style={{ display: 'flex' }}>
                                  <Icon name="ic-edit" size={24} />
                                </span>
                              </div>
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f"></div>
                            </div>
                          </div>
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Child 4: Reserved Username Section */}
            <div
              className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1280gxy xyri2b x18d9i69 x1c1uobl xyinxu5 xat24cr"
              style={{ margin: 0, padding: '14px 0 0', backgroundColor: 'rgb(22, 23, 23)' }}
            >
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x16ovd2e x162tt16 xjkvuk6" style={{ padding: '8px 0 4px 30px' }}>
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span
                      className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu"
                      style={{ fontSize: '14px', lineHeight: '9.9531px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}
                    >
                      Reserved Username
                    </span>
                  </div>
                </div>
              </div>

              <div role="button" tabIndex={0} className="x162tt16" data-testid="container" style={{ padding: '0 0 0 30px', cursor: 'pointer' }}>
                <div className="x78zum5 x6s0dn4 xng8ra x5zjp28" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px', height: '48px' }}>
                  <div className="x1iyjqo2 xs83m0k xdl72j9 x1rdy4ex x6ikm8r x10wlt62 xlyipyv xuxw1ft" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x1na6gtj x1qgv0r9 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span aria-hidden="true" className="xhslqc4" style={{ color: 'var(--icon, #8696a0)', display: 'flex', alignItems: 'center' }}>
                        <Icon name="ic-alternate-email" size={24} />
                      </span>
                      <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1cy8zhl">
                        <span
                          className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i"
                          style={{ fontSize: '16px', lineHeight: '11.375px', color: 'rgb(250, 250, 250)' }}
                        >
                          alexrivera
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="x1c4vz4f x2lah0s xdl72j9 x1bc76pt">
                    <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x13a6bvl x1q0g3np x1cy8zhl">
                      <span aria-hidden="true" className="xhslqc4" style={{ color: 'var(--icon, #8696a0)', display: 'flex', alignItems: 'center' }}>
                        <Icon name="ic-chevron-right" size={24} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Child 5: Phone Section */}
            <div
              className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1280gxy xyri2b x18d9i69 x1c1uobl xyinxu5 xat24cr"
              style={{ margin: 0, padding: '14px 0 0', backgroundColor: 'rgb(22, 23, 23)' }}
            >
              <div className="xtnn1bt x9v5kkp xmw7ebm xrdum7p xyri2b x16ovd2e x162tt16 xjkvuk6" style={{ padding: '8px 0 4px 30px' }}>
                <div className="x78zum5 x6s0dn4">
                  <div className="x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                    <span
                      className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu"
                      style={{ fontSize: '14px', lineHeight: '9.9531px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}
                    >
                      Phone
                    </span>
                  </div>
                </div>
              </div>

              <div tabIndex={-1} className="x162tt16" data-testid="container" style={{ padding: '0 0 0 30px' }}>
                <div className="x78zum5 x6s0dn4 xng8ra x5zjp28" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px', height: '48px' }}>
                  <div className="x1iyjqo2 xs83m0k xdl72j9 x1rdy4ex x6ikm8r x10wlt62 xlyipyv xuxw1ft" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x1na6gtj x1qgv0r9 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span aria-hidden="true" className="xhslqc4" style={{ color: 'var(--icon, #8696a0)', display: 'flex', alignItems: 'center' }}>
                        <Icon name="ic-call" size={24} />
                      </span>
                      <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1cy8zhl">
                        <div>
                          <span
                            className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i"
                            style={{ fontSize: '16px', lineHeight: '11.375px', color: 'rgb(250, 250, 250)' }}
                          >
                            +1 (555) 019-2834
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="x1c4vz4f x2lah0s xdl72j9 x1bc76pt">
                    <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x13a6bvl x1q0g3np x1cy8zhl">
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                        <button
                          aria-label="Copy"
                          aria-disabled="false"
                          tabIndex={0}
                          type="button"
                          className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--icon, #8696a0)', display: 'flex' }}
                        >
                          <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                            <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                              <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                                <span aria-hidden="true" className="xxk0z11 xvy4d1p" style={{ display: 'flex' }}>
                                  <Icon name="ic-content-copy" size={24} />
                                </span>
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
            </div>

            {/* Child 6: Spacer */}
            <div className="xexx8yu xyri2b xefzj8c x1c1uobl" style={{ padding: '0 0 60px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
