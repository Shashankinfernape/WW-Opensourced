import React, { useEffect, useRef } from 'react';
import { Icon } from '../icons/Icon';

interface LoginViewProps {
  onOpenChat?: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onOpenChat }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const qrData =
      'data:image/png;base64,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';

    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, 264, 264);
      ctx.drawImage(img, 0, 0, 264, 264);
    };
    img.src = qrData;
  }, []);

  return (
    <div id="app" data-testid="app-login" style={{ minHeight: '100vh', backgroundColor: '#111b21' }}>
      <div className="x78zum5 xdt5ytf x5yr21d">
        <div tabIndex={-1} className="app-wrapper-web os-win x1n2onr6 xupqr0c xh8yej3 x5yr21d xsxifin x1vs4gjj">
          <div id="wa-popovers-bucket"></div>
          <span className=""></span>
          <span className=""></span>

          <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x2lwn1j x1nhvcw1 xdt5ytf x1dr59a3 xw2csxc x1odjw0f xyinxu5 xp48ta0 x1g2khh7 xtssl2i xp9ttsr x6s0dn4 x9f619 xowvryd xe4h88v">
            {/* Header: Logo and Wordmark */}
            <div className="x1c4vz4f xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 xh8yej3 xwzfr38 xn95wi4" style={{ flexShrink: 0 }}>
              <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4">
                <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 x1icxu4v x1rdy4ex xw36f2b" style={{ flexGrow: 0 }}>
                  <span data-testid="wa-logo" aria-hidden="true" data-icon="wa-logo">
                    <svg viewBox="0 0 31 30" height="30" preserveAspectRatio="xMidYMid meet" className="x1y4xi8" fill="none">
                      <title>wa-logo</title>
                      <path fill="currentColor" d="M30.31 14.32A14.87 14.87 0 0 0 15.54 0h-.07A14.87 14.87 0 0 0 2.41 22L1.1 29.87a.11.11 0 0 0 .11.13h.02l7.79-1.73c2 .96 4.2 1.47 6.44 1.46h.42a14.86 14.86 0 0 0 14.43-15.4Zm-14.5 12.83h-.35a12.3 12.3 0 0 1-5.67-1.38l-.4-.2-5.27 1.24.97-5.34-.22-.38a12.3 12.3 0 0 1 10.25-18.5h.36a12.29 12.29 0 0 1 .34 24.56h-.01Z"></path>
                      <path fill="currentColor" d="M10.29 7.69a1.37 1.37 0 0 0-.98.44c-.35.36-1.34 1.23-1.4 3.07-.06 1.84 1.23 3.65 1.4 3.9.18.26 2.46 4.23 6.2 5.84 2.2.95 3.17 1.11 3.8 1.11.25 0 .45-.03.65-.04.69-.04 2.24-.83 2.57-1.7.34-.86.36-1.61.28-1.76-.1-.15-.34-.26-.7-.46-.37-.19-2.18-1.15-2.52-1.29a.91.91 0 0 0-.4-.1.55.55 0 0 0-.44.26c-.3.38-1 1.2-1.23 1.43a.55.55 0 0 1-.4.19.97.97 0 0 1-.41-.11 9.52 9.52 0 0 1-2.94-1.96c-.8-.78-1.47-1.68-2-2.66-.2-.38 0-.57.19-.75.19-.18.39-.42.58-.64.16-.18.29-.38.4-.6a.69.69 0 0 0-.02-.66c-.09-.19-.75-2.05-1.07-2.8-.25-.64-.55-.66-.81-.68a8.15 8.15 0 0 0-.72-.03h-.03"></path>
                    </svg>
                  </span>
                </div>
                <div className="xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 x1oa3qoh x12fk4p8 xe9ewy2 xw36f2b" style={{ flexGrow: 1 }}>
                  <span data-testid="wa-wordmark" aria-hidden="true" data-icon="wa-wordmark">
                    <svg viewBox="0 0 104 28" height="20" preserveAspectRatio="xMidYMid meet" className="x1y4xi8" fill="none">
                      <title>wa-wordmark</title>
                      <path fill="currentColor" d="m69.56 15.13 2.05-6.26 2.07 6.26zm28.8 3.94c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-7.04-6.43c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-16.06-4.19h3.41l1.14-3.41h5.81l1.15 3.41h3.52L73.69 5.9h-4zm-5.42.35c3.26 0 4.92-1.34 4.92-3.54S62.62 15 59.64 14.5l-1.4-.24c-1.2-.2-1.58-.58-1.58-1.2 0-.63.48-1.13 1.84-1.13 1.27 0 1.8.47 2 1.68h2.99c-.17-2.57-1.82-3.93-4.99-3.93-2.96 0-4.86 1.28-4.86 3.46s1.27 3.02 4.13 3.5l1.3.21c1.18.2 1.46.63 1.46 1.28 0 .75-.5 1.23-1.86 1.23s-2.14-.52-2.26-1.7h-3.05c.1 2.8 2.16 3.99 5.38 3.99m-8.86-.09c1 0 2.01-.28 2.62-.7v-2.41q-.92.52-1.73.52c-.93 0-1.43-.39-1.43-1.58v-4.86h3.16v-2.5h-3.16v-3.1H46.5v1.73c0 .97-.23 1.38-1.2 1.38h-.85v2.5h1.7v4.97c0 2.61 1 4.06 3.74 4.06m-11.96-2.16c-1.04 0-1.62-.45-1.62-1.25 0-.9.67-1.34 2.22-1.6a5 5 0 0 0 2.06-.7v1.11c0 1.49-1.06 2.44-2.66 2.44m-.82 2.25c1.66 0 2.83-.7 3.74-1.7q.16.8.56 1.35h3.02q-.8-1.27-.78-3.76v-3.6c0-2.68-1.42-4.26-4.8-4.26-2.97 0-4.72 1.23-5.07 3.93h2.92c.17-1.03.8-1.64 2.05-1.64 1.17 0 1.84.48 1.84 1.3s-.5 1.1-2.7 1.42c-2.4.35-4.6 1.21-4.6 3.63 0 2.16 1.53 3.33 3.82 3.33m-15.61-.35h3.2v-6.6c0-.79.19-1.15.66-1.63a2.5 2.5 0 0 1 1.77-.73c1.06 0 1.62.58 1.62 2v6.96h3.2v-7.56c0-2.61-1.3-4.06-3.74-4.06-1.25 0-2.42.4-3.52 1.69V5.89h-3.2zm-17.34 0h3.52l2.55-11.12 2.59 11.12h3.56L20.45 5.9h-3.54l-2.42 11.38-2.59-11.3H8.7L6.07 17.33 3.65 5.89H0z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Top Windows Download Banner */}
            <div className="xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xgpatz3 xeuugli x2lwn1j xl56j7k xdt5ytf x6s0dn4 xw36f2b xn95wi4" style={{ flexGrow: 1, flexShrink: 0 }}>
              <div className="x1lliihq xh8yej3">
                <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 xamitd3 x7v7x1q xy296fx x91od0 x1p5oq8j x18w32sv x15zmtp0 xym2i8p xwxc41k xk3sftt x1oiqv2n x1i50ybd x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x12peec7">
                  <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x1qgv0r9 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4">
                    <div className="x1c4vz4f xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1cy8zhl xn95wi4" style={{ flexShrink: 0 }}>
                      <span aria-hidden="true">
                        <svg viewBox="0 0 132 88" height="88" width="132" preserveAspectRatio="xMidYMid meet" fill="none">
                          <title>wds-ill-laptop-calling</title>
                          <g stroke="#111b21" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#a)">
                            <path fill="#e6ffda" d="M109.06 82.84h-91.2c-3.6 0-6.5-2.76-6.5-6.16v-58.9c0-3.4 2.9-6.17 6.5-6.17h91.2c3.6 0 6.5 2.76 6.5 6.16v58.86c0 3.4-2.9 6.21-6.5 6.21Z"></path>
                            <path fill="#e6ffda" d="M1.5 77.52c0 4.44 3.6 8.04 8.04 8.04h107.95c4.44 0 8.04-3.6 8.04-8.04z"></path>
                            <path d="M77.51 77.52c0 2.05-1.88 4.42-3.8 4.42H54.34c-2.9 0-4.78-1.94-4.78-4.42"></path>
                            <path fill="#fcf5eb" strokeLinecap="round" d="M55.2 2.45h70.19a6.1 6.1 0 0 1 6.11 6.1v54.34a5.76 5.76 0 0 1-5.74 5.74H55.2z"></path>
                            <path fill="#25d366" strokeLinecap="round" d="M59.67 38.78v29.84H31.73a5.75 5.75 0 0 1-5.74-5.74V8.18a5.75 5.75 0 0 1 5.74-5.73h27.94z"></path>
                            <path strokeLinecap="round" d="M33.88 33.02H53.6m-19.72-7.79H53.6M33.88 40.72H53.6M31.9 7.05l3.4 3.39m-3.4-.14 3.25-3.25"></path>
                            <path fill="#25d366" strokeLinecap="round" d="M88.52 32.6c-.94-1.89 3.34-4.13 3.6-5.16l-.02-.02c.06-.22 0-.45-.07-.67a15 15 0 0 0-3.22-5.79c-.37-.4-.79-.81-1.32-.97-.35-.1-.73-.07-1.08-.02-3.05.48-5.16 3.35-5.54 6.29s.64 5.9 1.86 8.65c2.64 5.9 6.59 11.65 12.52 14.68 2.11 1.09 4.55 1.8 6.86 1.34 1.56-.31 3.13-1.43 3.05-2.95a4.5 4.5 0 0 0-.83-2l-2.64-4.2c-.45-.7-.98-1.46-1.82-1.63-1.74-.34-2.92 2.19-4.68 1.96-.7-.1-6.1-8.22-6.67-9.5"></path>
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h132v88H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>

                    <div className="xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x1r0jzty xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1cy8zhl xw36f2b" style={{ flexGrow: 1 }}>
                      <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl x1c3i2sq xk50ysn x1o2sk6j xowvryd">Download WhatsApp for Windows</div>
                      <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1cy8zhl x9f619 x2b8uid x1q0g3np x1rdy4ex x249io5 x78zum5 x6s0dn4 xl56j7k">
                        Get extra features like voice and video calling, screen sharing and more.
                      </div>
                    </div>

                    <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1cy8zhl xn95wi4" style={{ flexShrink: 0 }}>
                      <button className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x1cy8zhl xk50ysn x1mzt3pk x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13a6bvl">
                        <span className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1cy8zhl x9f619 x2b8uid x1q0g3np x1rdy4ex x249io5 x78zum5 x6s0dn4 xl56j7k">Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main QR Card Container */}
            <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xeuugli x2lwn1j xozqiw3 xamitd3 x7v7x1q xy296fx x91od0 x1p5oq8j x18w32sv x15zmtp0 xym2i8p xwxc41k xk3sftt x1oiqv2n x1i50ybd x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x12peec7">
              <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x1qgv0r9 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4">
                {/* Left Steps Section */}
                <div className="xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf xw36f2b" style={{ flexGrow: 1 }}>
                  <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl x1c3i2sq xk50ysn x1o2sk6j xowvryd">
                    Scan to log in
                  </div>

                  <ol className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1cy8zhl x9f619 x2b8uid x1q0g3np x1rdy4ex x249io5" style={{ listStylePosition: 'inside', paddingLeft: 0, margin: '16px 0' }}>
                    <li style={{ margin: '8px 0' }}>Scan the QR code with your phone's camera</li>
                    <li style={{ margin: '8px 0' }}>Tap the link to open <strong>WhatsApp</strong></li>
                    <li style={{ margin: '8px 0' }}>Scan the QR code again to link to your account</li>
                  </ol>

                  <div style={{ marginTop: '20px' }}>
                    <button
                      onClick={onOpenChat}
                      style={{ background: 'none', border: 'none', color: '#00a884', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: 500 }}
                    >
                      Log in with phone number
                    </button>
                  </div>
                </div>

                {/* Right QR Canvas Section */}
                <div className="xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf xw36f2b" style={{ position: 'relative', width: '264px', height: '264px', margin: '0 0 0 32px' }}>
                  <canvas ref={canvasRef} width="264" height="264" style={{ borderRadius: '8px', background: '#fff' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
                    <span data-testid="wa-logo" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" fill="none">
                        <rect width="64" height="64" rx="32" fill="#fff" />
                        <path fill="#25D366" d="M32 10C19.85 10 10 19.85 10 32c0 4.28 1.22 8.28 3.32 11.68L11 53l9.64-2.26A21.9 21.9 0 0 0 32 54c12.15 0 22-9.85 22-22S44.15 10 32 10z" />
                        <path fill="#fff" d="M43.3 37.6c-.6-.3-3.6-1.8-4.2-2s-1-.3-1.4.3-1.6 2-2 2.4-.8.5-1.4.2c-.6-.3-2.6-1-5-3.1-1.9-1.7-3.1-3.7-3.5-4.3s0-1 .3-1.3c.3-.3.6-.8.9-1.1s.4-.6.6-1c.2-.4.1-.7 0-1s-.9-2.2-1.3-3c-.4-.8-.7-.7-1-.7h-.9c-.3 0-.8.1-1.2.6s-1.6 1.6-1.6 3.8 1.6 4.4 1.9 4.7 3.2 4.9 7.8 6.9c1.1.5 2 .8 2.7 1 .9.3 1.8.3 2.5.2.8-.1 2.5-1 2.8-2 .4-.9.4-1.8.3-2-.1-.2-.5-.3-1.1-.6z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom checkbox & links */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(134, 150, 160, 0.15)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#8696a0' }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: '#00a884' }} />
                  Stay logged in on this browser
                </label>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button onClick={onOpenChat} style={{ background: 'none', border: 'none', color: '#00a884', cursor: 'pointer', font: 'inherit', fontSize: '14px' }}>
                    Need help?
                  </button>
                  <button onClick={onOpenChat} style={{ background: 'none', border: 'none', color: '#00a884', cursor: 'pointer', font: 'inherit', fontSize: '14px' }}>
                    Link with phone number instead.
                  </button>
                </div>
              </div>
            </div>

            {/* End-to-end encryption notice */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '32px', color: '#8696a0', fontSize: '14px' }}>
              <Icon name="ic-lock" size={18} color="currentColor" />
              <span>Your personal messages are end-to-end encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
