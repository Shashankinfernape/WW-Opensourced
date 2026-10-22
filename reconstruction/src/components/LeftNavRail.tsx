import React from 'react';
import { Icon } from '../icons/Icon';

/**
 * Reconstructed Left Navigation Rail
 * Ground truth sources:
 * - Module: WAWebNavigationBar.react in chunk_10_3nzqNpHbcmc__bundle.js#L41617
 * - Child items:
 *   - WAWebChatsNavBarItem.react in chunk_10_3nzqNpHbcmc__bundle.js#L14418 (Icon: WDSIconWdsIcChat.react / WDSIconWdsIcChatFilled.react)
 *   - WAWebCallsNavBarItemLoadable.react in chunk_10_3nzqNpHbcmc__bundle.js#L10377 (Icon: WDSIconIcCall.react / WDSIconIcCallFilled.react)
 *   - WAWebStatusNavBarItem.react in chunk_10_3nzqNpHbcmc__bundle.js#L40516 (Icon: WDSIconWdsIcStatus.react / WDSIconWdsIcStatusFilled.react)
 *   - WAWebNewslettersNavBarItem.react in chunk_10_3nzqNpHbcmc__bundle.js#L39884 (Icon: WDSIconWdsIcChannels.react / WDSIconWdsIcChannelsFilled.react)
 *   - WAWebCommunitiesNavBarItem.react in chunk_10_3nzqNpHbcmc__bundle.js#L221461 (Icon: WDSIconWdsIcCommunities.react / WDSIconWdsIcCommunitiesFilled.react)
 *   - WAWebMetaBotNavBarItem.react in chunk_10_3nzqNpHbcmc__bundle.js#L39659 (Icon: WDSIconWdsIcLogoMetaAi.react in chunk_04#L5490362)
 *   - WAWebSettingsNavBarItem.react in chunk_10_3nzqNpHbcmc__bundle.js#L40410 (Icon: WDSIconIcSettings.react in chunk_04#L5490212)
 *   - WAWebProfileNavBarItem.react in chunk_10_3nzqNpHbcmc__bundle.js#L39269
 * - Styles: production.css atomic StyleX classes
 */

export interface LeftNavRailProps {
  activeTab?: 'chats' | 'calls' | 'status' | 'channels' | 'communities';
  activeDrawer?: 'none' | 'newchat' | 'archived' | 'starred' | 'settings' | 'profile';
  onTabChange?: (tab: 'chats' | 'calls' | 'status' | 'channels' | 'communities') => void;
  onOpenSettings?: () => void;
}

export const LeftNavRail: React.FC<LeftNavRailProps> = ({
  activeTab = 'chats',
  activeDrawer = 'none',
  onTabChange,
  onOpenSettings,
}) => {
  const isYouActive = activeDrawer === 'profile' || activeDrawer === 'settings';
  const isChats = !isYouActive && activeTab === 'chats';
  const isCalls = !isYouActive && activeTab === 'calls';
  const isStatus = !isYouActive && activeTab === 'status';
  const isChannels = !isYouActive && activeTab === 'channels';
  const isCommunities = !isYouActive && activeTab === 'communities';

  const baseButtonClasses =
    'x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1c1uobl';

  const getItemWrapperStyle = (isActive: boolean): React.CSSProperties => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    margin: '4px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  });

  const getButtonStyle = (isActive: boolean): React.CSSProperties => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: isActive ? '#ffffff' : 'var(--icon-lighter, #8696a0)',
    padding: 0,
    margin: 0,
  });

  return (
    <header
      data-testid="chatlist-header"
      tabIndex={0}
      data-tab={1}
      className="x12xzxwr x1n2onr6 x9f619 x78zum5 x6s0dn4 xq3y45c xbyj736 x5yr21d x1h3rtpe x1iw51ew xde1mab x889kno x1a8lsjc"
    >
      <div className="x78zum5 xdt5ytf xh8yej3 x5yr21d">
        {/* Primary section: chats, calls, status, channels, communities, separator, metabot */}
        <div
          data-testid="navbar-primary-section"
          className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xw36f2b xh8yej3"
          style={{ '--x-flexGrow': 1 } as React.CSSProperties}
        >
          <div className="x78zum5 xdt5ytf x129bwdz">
            {/* Chats Tab */}
            <div className="x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(isChats)}>
              <button
                type="button"
                aria-label="Chats"
                aria-pressed={isChats}
                data-navbar-item="true"
                data-navbar-item-selected={String(isChats)}
                tabIndex={-1}
                onClick={() => onTabChange?.('chats')}
                className={`${baseButtonClasses} ${isChats ? '' : 'xhslqc4'}`}
                style={getButtonStyle(isChats)}
              >
                <Icon name={isChats ? 'nav-chats-filled' : 'nav-chats'} size={24} color={isChats ? '#ffffff' : 'var(--icon-lighter, #8696a0)'} />
              </button>
            </div>

            {/* Calls Tab */}
            <div className="x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(isCalls)}>
              <button
                type="button"
                aria-label="Calls"
                aria-pressed={isCalls}
                data-navbar-item="true"
                data-navbar-item-selected={String(isCalls)}
                tabIndex={-1}
                onClick={() => onTabChange?.('calls')}
                className={`${baseButtonClasses} ${isCalls ? '' : 'xhslqc4'}`}
                style={getButtonStyle(isCalls)}
              >
                <Icon name={isCalls ? 'nav-calls-filled' : 'nav-calls'} size={24} color={isCalls ? '#ffffff' : 'var(--icon-lighter, #8696a0)'} />
              </button>
            </div>

            {/* Status Tab */}
            <div className="x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(isStatus)}>
              <button
                type="button"
                aria-label="Status"
                aria-pressed={isStatus}
                data-navbar-item="true"
                data-navbar-item-selected={String(isStatus)}
                tabIndex={-1}
                onClick={() => onTabChange?.('status')}
                className={`${baseButtonClasses} ${isStatus ? '' : 'xhslqc4'}`}
                style={getButtonStyle(isStatus)}
              >
                <Icon name={isStatus ? 'nav-status-filled' : 'nav-status'} size={24} color={isStatus ? '#ffffff' : 'var(--icon-lighter, #8696a0)'} />
              </button>
            </div>

            {/* Channels Tab */}
            <div className="x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(isChannels)}>
              <button
                type="button"
                aria-label="Channels"
                aria-pressed={isChannels}
                data-navbar-item="true"
                data-navbar-item-selected={String(isChannels)}
                tabIndex={-1}
                onClick={() => onTabChange?.('channels')}
                className={`${baseButtonClasses} ${isChannels ? '' : 'xhslqc4'}`}
                style={getButtonStyle(isChannels)}
              >
                <Icon name={isChannels ? 'nav-channels-filled' : 'nav-channels'} size={24} color={isChannels ? '#ffffff' : 'var(--icon-lighter, #8696a0)'} />
              </button>
            </div>

            {/* Communities Tab */}
            <div className="x1n2onr6 x1vqgdyp x100vrsf xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(isCommunities)}>
              <button
                type="button"
                aria-label="Communities"
                aria-pressed={isCommunities}
                data-navbar-item="true"
                data-navbar-item-selected={String(isCommunities)}
                tabIndex={-1}
                onClick={() => onTabChange?.('communities')}
                className={`${baseButtonClasses} ${isCommunities ? '' : 'xhslqc4'}`}
                style={getButtonStyle(isCommunities)}
              >
                <Icon name={isCommunities ? 'nav-communities-filled' : 'nav-communities'} size={24} color={isCommunities ? '#ffffff' : 'var(--icon-lighter, #8696a0)'} />
              </button>
            </div>

            {/* Separator: <Y2Component /> */}
            <hr className="xh8yej3 xjm9jq1 x178xt8z x13fuv20 xx42vgk x18oe1m7 x1sy0etr xstzfhl" />

            {/* Meta AI Tab (WAWebMetaAIIcon.react with asset 88729: meta-ai-ring.webp) */}
            <div className="x1n2onr6 x100vrsf x1vqgdyp x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(false)}>
              <button
                type="button"
                aria-label="Meta AI"
                aria-pressed={false}
                data-navbar-item="true"
                data-navbar-item-selected="false"
                tabIndex={-1}
                className={baseButtonClasses}
                style={getButtonStyle(false)}
              >
                <img
                  src="/assets/meta-ai-ring.webp"
                  alt="Meta AI"
                  width={24}
                  height={24}
                  draggable={false}
                  style={{ width: '24px', height: '24px' }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Footer section: media hub, you / me tab */}
        <div
          data-testid="navbar-footer-section"
          className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xn95wi4 xh8yej3"
          style={{ '--x-flexShrink': 0 } as React.CSSProperties}
        >
          <div className="x78zum5 xdt5ytf x129bwdz">
            {/* Media Hub Tab (WAWebMediaHubNavBarItem.react, Icon: WDSIconIcFilter.react) */}
            <div className="x1n2onr6 x100vrsf x1vqgdyp x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(false)}>
              <button
                type="button"
                aria-label="Media"
                aria-pressed={false}
                data-navbar-item="true"
                data-navbar-item-selected="false"
                tabIndex={-1}
                className={`${baseButtonClasses} xhslqc4`}
                style={getButtonStyle(false)}
              >
                <Icon name="nav-media" size={24} color="var(--icon-lighter, #8696a0)" />
              </button>
            </div>

            {/* You Tab (WAWebMeTabNavBarItem.react, isMeTabEnabled() === true) */}
            <div className="x1n2onr6 x100vrsf x1vqgdyp x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x78zum5 x6s0dn4 xl56j7k" style={getItemWrapperStyle(isYouActive)}>
              <button
                type="button"
                aria-label="You"
                aria-pressed={isYouActive}
                data-navbar-item="true"
                data-navbar-item-selected={String(isYouActive)}
                data-navbar-item-index="7"
                tabIndex={-1}
                onClick={onOpenSettings}
                className={baseButtonClasses}
                style={getButtonStyle(isYouActive)}
              >
                <div
                  className="x3nfvp2 x2lah0s x16ye13r x5lhr3w x1plvlek xryxfnj x1n2onr6"
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--avatar-placeholder-background, #6b7780)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      userSelect: 'none',
                    }}
                  >
                    AR
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LeftNavRail;
