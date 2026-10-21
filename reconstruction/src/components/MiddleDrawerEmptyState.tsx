import React from 'react';
import { Icon } from '../icons/Icon';

interface MiddleDrawerEmptyStateProps {
  type: 'status' | 'channels' | 'communities';
}

export const MiddleDrawerEmptyState: React.FC<MiddleDrawerEmptyStateProps> = ({ type }) => {
  let iconName = 'nav-communities-filled';
  let title = 'Create communities';
  let subtitle = 'Bring members together in topic-based groups and easily send them admin announcements.';
  let footer = 'Your personal messages in communities are end-to-end encrypted';
  let showLock = true;

  if (type === 'channels') {
    iconName = 'nav-channels-filled';
    title = 'Discover channels';
    subtitle = 'Entertainment, sports, news, lifestyle, people and more. Follow your interests to stay updated.';
    footer = 'Channels are public and anyone can discover and follow them.';
    showLock = false;
  } else if (type === 'status') {
    iconName = 'nav-status-filled';
    title = 'Share statuses';
    subtitle = 'Share photos, videos and text that disappear after 24 hours.';
    footer = 'Your status updates are end-to-end encrypted';
    showLock = true;
  }

  return (
    <div
      className="x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr"
      data-testid="drawer-middle"
      style={{
        flex: '1 1 0',
        minWidth: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'var(--WDS-surface-default, #161717)',
      }}
    >
      <div style={{ height: '100%', width: '100%' }}>
        <span className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod">
          <div style={{ height: '100%', width: '100%' }}>
            <div
              className="xnpuxes x78zum5 xdt5ytf x5yr21d x1o0tod x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x1280gxy copyable-area"
              data-testid="empty-state-drawer"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="x1n2onr6 xupqr0c x78zum5 x1r8uery x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  maxWidth: '460px',
                  padding: '32px',
                }}
              >
                <div className="x10l6tqk x1vjfegm x9f619 x78zum5 x1iyjqo2 x6s0dn4 xl56j7k xh8yej3 x5yr21d xv8gdss xgb8hzy xt0e3qv x6egj2d x11xpdln x13dflua xwji4o3">
                  <div className="xktia5q x27kpxv x135pmgq x2b8uid">
                    <div style={{ marginBottom: '24px' }}>
                      <span aria-hidden="true" style={{ color: 'var(--icon-lighter, #8696a0)' }}>
                        <Icon name={iconName} size={64} />
                      </span>
                    </div>
                    <h1
                      className="html-h1 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli"
                      style={{ margin: '0 0 16px 0' }}
                    >
                      <span
                        className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 xcytdqz x9u28bd x1hx0egp x579bpy xjb2p0i xo1l8bm x1akz92t x1ic7a3i"
                        style={{
                          fontSize: '32px',
                          lineHeight: '38px',
                          color: 'var(--primary, #e9edef)',
                          fontWeight: 300,
                        }}
                      >
                        {title}
                      </span>
                    </h1>
                    <span
                      className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x14mdic9 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i"
                      style={{
                        fontSize: '14.5px',
                        lineHeight: '20px',
                        color: 'var(--secondary, #8696a0)',
                        display: 'block',
                        marginBottom: '32px',
                      }}
                    >
                      {subtitle}
                    </span>
                    <div
                      className="x10l6tqk x1qqjqyx x1o0tod xtijo5x xvc5jky x11t971q xhslqc4 x1f6kntn x1fc57z9"
                      style={{
                        fontSize: '12.5px',
                        color: 'var(--secondary, #8696a0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                    >
                      {showLock && (
                        <span className="x1rg5ohu xjpr12u xxymvpz">
                          <Icon name="ic-lock" size={14} />
                        </span>
                      )}
                      <span>{footer}</span>
                    </div>
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
