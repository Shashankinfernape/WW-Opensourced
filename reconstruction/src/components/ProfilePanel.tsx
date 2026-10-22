import React, { useState } from 'react';
import { Icon } from '../icons/Icon';

interface ProfilePanelProps {
  onClose: () => void;
}

export const ProfilePanel: React.FC<ProfilePanelProps> = ({ onClose }) => {
  const [name, setName] = useState('Alex Rivera');
  const [about, setAbout] = useState('Available');
  const [isEditingName, setIsEditingName] = useState(false);
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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod" tabIndex={-1} style={{ width: '100%', height: '100%' }}>
        <div className="x1rife3k x78zum5 xdt5ytf x5yr21d" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <header
            style={{
              height: '64px',
              backgroundColor: 'rgb(22, 23, 23)',
              padding: '0 20px 0 10px',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <button
                aria-label="Back"
                type="button"
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgb(250, 250, 250)',
                }}
              >
                <Icon name="ic-arrow-back" size={24} />
              </button>
              <div data-testid="drawer-title-profile" style={{ marginLeft: '8px' }}>
                <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 400, color: 'rgb(250, 250, 250)', lineHeight: '24px' }}>
                  Edit profile
                </h2>
              </div>
            </div>
          </header>

          {/* Body */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {/* Child 0: Photo area */}
            <div style={{ margin: '40px 0', padding: 0, display: 'flex', justifyContent: 'center' }}>
              <div
                tabIndex={-1}
                aria-label="View group profile picture"
                style={{ width: '120px', height: '120px', position: 'relative', cursor: 'pointer' }}
                onMouseEnter={() => setIsHoveredPhoto(true)}
                onMouseLeave={() => setIsHoveredPhoto(false)}
              >
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                  <svg height="120" width="120" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="60" fill="#202c33" />
                    <circle cx="60" cy="46" r="22" fill="#536471" />
                    <ellipse cx="60" cy="98" rx="36" ry="24" fill="#536471" />
                  </svg>
                  {/* Hover camera overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: isHoveredPhoto ? 1 : 0,
                      transition: 'opacity 0.15s ease',
                      backgroundColor: 'rgba(11, 20, 26, 0.55)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <Icon name="ic-add-a-photo" size={54} color="#ffffff" />
                  </div>
                </div>
              </div>
            </div>

            {/* Child 1: Name Section */}
            <div style={{ margin: '0 0 10px', padding: '14px 30px 10px', backgroundColor: 'rgb(22, 23, 23)' }}>
              <div style={{ fontSize: '14px', lineHeight: '20px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}>
                Name
              </div>
              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
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
                    <span style={{ fontSize: '16px', color: 'rgb(250, 250, 250)', lineHeight: '20px' }}>
                      {name}
                    </span>
                  )}
                </div>
                <button
                  aria-label="Edit Name"
                  type="button"
                  onClick={() => setIsEditingName(!isEditingName)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    color: 'rgb(250, 250, 250)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="ic-edit" size={24} />
                </button>
              </div>
            </div>

            {/* Child 2: About Section */}
            <div style={{ margin: '0 0 10px', padding: '14px 30px 10px', backgroundColor: 'rgb(22, 23, 23)' }}>
              <div style={{ fontSize: '14px', lineHeight: '20px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}>
                About
              </div>
              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '16px', color: 'rgb(250, 250, 250)', lineHeight: '20px' }}>
                  {about}
                </span>
              </div>
            </div>

            {/* Child 3: Reserved Username Section */}
            <div style={{ margin: 0, padding: '14px 0 0', backgroundColor: 'rgb(22, 23, 23)' }}>
              <div style={{ padding: '8px 0 4px 30px', fontSize: '14px', lineHeight: '20px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}>
                Reserved Username
              </div>
              <div
                role="button"
                tabIndex={0}
                style={{
                  padding: '0 30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '60px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center' }}>
                    <Icon name="ic-alternate-email" size={24} />
                  </span>
                  <span style={{ fontSize: '16px', color: 'rgb(250, 250, 250)', lineHeight: '24px' }}>
                    alexrivera
                  </span>
                </div>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center' }}>
                  <Icon name="ic-chevron-right" size={24} />
                </span>
              </div>
            </div>

            {/* Child 4: Phone Section */}
            <div style={{ margin: 0, padding: '14px 0 0', backgroundColor: 'rgb(22, 23, 23)' }}>
              <div style={{ padding: '8px 0 4px 30px', fontSize: '14px', lineHeight: '20px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 545 }}>
                Phone
              </div>
              <div
                style={{
                  padding: '0 20px 0 30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '60px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center' }}>
                    <Icon name="ic-call" size={24} />
                  </span>
                  <span style={{ fontSize: '16px', color: 'rgb(250, 250, 250)', lineHeight: '24px' }}>
                    +1 (555) 019-2834
                  </span>
                </div>
                <button
                  aria-label="Copy"
                  type="button"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    color: 'rgb(250, 250, 250)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="ic-content-copy" size={24} />
                </button>
              </div>
            </div>

            {/* Spacer */}
            <div style={{ height: '60px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
