import React, { useRef } from 'react';

interface IntroPanelProps {
  onGoToCalls?: () => void;
  onSendDocument?: () => void;
  onAddContact?: () => void;
  onInviteFriend?: () => void;
  onNewCall?: () => void;
  onAskMetaAi?: () => void;
}

export const IntroPanel: React.FC<IntroPanelProps> = ({
  onGoToCalls,
  onSendDocument,
  onAddContact,
  onInviteFriend,
  onNewCall,
  onAskMetaAi,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDocumentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    if (onSendDocument) {
      onSendDocument();
    }
  };

  return (
    <section
      data-testid="intro-panel"
      className="xs1q97v xh8yej3 x5yr21d x2b8uid x67bb7w x1n2onr6 x6s0dn4 xl56j7k x78zum5 xdt5ytf"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--intro-background, #1d1f1f)',
        position: 'relative',
      }}
    >
      {/* Title Card Container */}
      <div
        data-testid="intro_panel_v2_title_card"
        className="x1rjt51p x1280gxy x1g83kfv x3qq2k7 x2x8art x1qor8vf xl7twdi xyo0t3i xvg22vi xb0esv5 x98l61r xviac27 x1ua1l7f xlese2p x9f619 xg7h5cd"
      >
        <div className="x78zum5 xdt5ytf x1j3ira4 xh8yej3">
          {/* Lottie Calling Illustration SVG (156 x 132) */}
          <div className="x78zum5 xl56j7k">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 156 132"
                  width="156"
                  height="132"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: 'translate3d(0px, 0px, 0px)',
                    contentVisibility: 'visible',
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_16">
                      <rect width="156" height="132" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_16)">
                    {/* Background laptop base */}
                    <g
                      transform="matrix(1,0,0,1,75.51300048828125,68.25199890136719)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,-0.04899999871850014,0.9240000247955322)">
                        <path
                          fill="rgb(230,255,218)"
                          fillOpacity="1"
                          d="M-45.597999572753906,35.61600112915039 C-45.597999572753906,35.61600112915039 45.597999572753906,35.61600112915039 45.597999572753906,35.61600112915039 C49.19599914550781,35.61600112915039 52.10499954223633,32.80500030517578 52.10499954223633,29.40399932861328 C52.10499954223633,29.40399932861328 61.30082702636719,-20.25817108154297 61.30082702636719,-20.25817108154297 C61.30082702636719,-23.65917205810547 58.39183044433594,-26.4201717376709 54.793827056884766,-26.4201717376709 C54.793827056884766,-26.4201717376709 -54.793827056884766,-26.4201717376709 -54.793827056884766,-26.4201717376709 C-58.39183044433594,-26.4201717376709 -61.30082702636719,-23.65917205810547 -61.30082702636719,-20.25817108154297 C-61.30082702636719,-20.25817108154297 -52.10499954223633,29.45400047302246 -52.10499954223633,29.45400047302246 C-52.10499954223633,32.85499954223633 -49.19599914550781,35.61600112915039 -45.597999572753906,35.61600112915039z"
                        />
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(17,27,33)"
                          strokeOpacity="1"
                          strokeWidth="1.5"
                          d="M-45.597999572753906,35.61600112915039 C-45.597999572753906,35.61600112915039 45.597999572753906,35.61600112915039 45.597999572753906,35.61600112915039 C49.19599914550781,35.61600112915039 52.10499954223633,32.80500030517578 52.10499954223633,29.40399932861328 C52.10499954223633,29.40399932861328 61.30082702636719,-20.25817108154297 61.30082702636719,-20.25817108154297 C61.30082702636719,-23.65917205810547 58.39183044433594,-26.4201717376709 54.793827056884766,-26.4201717376709 C54.793827056884766,-26.4201717376709 -54.793827056884766,-26.4201717376709 -54.793827056884766,-26.4201717376709 C-58.39183044433594,-26.4201717376709 -61.30082702636719,-23.65917205810547 -61.30082702636719,-20.25817108154297 C-61.30082702636719,-20.25817108154297 -52.10499954223633,29.45400047302246 -52.10499954223633,29.45400047302246 C-52.10499954223633,32.85499954223633 -49.19599914550781,35.61600112915039 -45.597999572753906,35.61600112915039z"
                        />
                      </g>
                    </g>
                    {/* Stand bottom */}
                    <g
                      transform="matrix(1,0,0,1,75.51300048828125,68.25199890136719)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,35.23400115966797)">
                        <path
                          fill="rgb(230,255,218)"
                          fillOpacity="1"
                          d="M-53.97800064086914,4.01800012588501 C-58.415000915527344,4.01800012588501 -62.01300048828125,0.4189999997615814 -62.01300048828125,-4.01800012588501 C-62.01300048828125,-4.01800012588501 62.01300048828125,-4.01800012588501 62.01300048828125,-4.01800012588501 C62.01300048828125,0.4189999997615814 58.415000915527344,4.01800012588501 53.97800064086914,4.01800012588501 C53.97800064086914,4.01800012588501 -53.97800064086914,4.01800012588501 -53.97800064086914,4.01800012588501z"
                        />
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(17,27,33)"
                          strokeOpacity="1"
                          strokeWidth="1.5"
                          d="M-53.97800064086914,4.01800012588501 C-58.415000915527344,4.01800012588501 -62.01300048828125,0.4189999997615814 -62.01300048828125,-4.01800012588501 C-62.01300048828125,-4.01800012588501 62.01300048828125,-4.01800012588501 62.01300048828125,-4.01800012588501 C62.01300048828125,0.4189999997615814 58.415000915527344,4.01800012588501 53.97800064086914,4.01800012588501 C53.97800064086914,4.01800012588501 -53.97800064086914,4.01800012588501 -53.97800064086914,4.01800012588501z"
                        />
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0.02500000037252903,33.42399978637695)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(17,27,33)"
                          strokeOpacity="1"
                          strokeWidth="1.5"
                          d="M-13.975000381469727,-2.2079999446868896 C-13.975000381469727,0.27300000190734863 -12.098999977111816,2.2079999446868896 -9.192999839782715,2.2079999446868896 C-9.192999839782715,2.2079999446868896 10.168000221252441,2.2079999446868896 10.168000221252441,2.2079999446868896 C12.090999603271484,2.2079999446868896 13.975000381469727,-0.1589999943971634 13.975000381469727,-2.2079999446868896"
                        />
                      </g>
                    </g>
                    {/* Device screen and chat bubbles */}
                    <g
                      transform="matrix(0.75,0,0,0.75,77.50700378417969,66.09200286865234)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,14.609000205993652,0)">
                        <path
                          fill="rgb(252,245,235)"
                          fillOpacity="1"
                          d="M32.03300094604492,-33.09199905395508 C32.03300094604492,-33.09199905395508 -38.14699935913086,-33.09199905395508 -38.14699935913086,-33.09199905395508 C-38.14699935913086,-33.09199905395508 -38.14699935913086,33.09199905395508 -38.14699935913086,33.09199905395508 C-38.14699935913086,33.09199905395508 32.40399932861328,33.09199905395508 32.40399932861328,33.09199905395508 C35.564998626708984,33.09199905395508 38.14699935913086,30.509000778198242 38.14699935913086,27.349000930786133 C38.14699935913086,27.349000930786133 38.14699935913086,-26.988000869750977 38.14699935913086,-26.988000869750977 C38.14699935913086,-30.354999542236328 35.400001525878906,-33.09199905395508 32.03300094604492,-33.09199905395508z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(17,27,33)"
                          strokeOpacity="1"
                          strokeWidth="1.875"
                          d="M32.03300094604492,-33.09199905395508 C32.03300094604492,-33.09199905395508 -38.14699935913086,-33.09199905395508 -38.14699935913086,-33.09199905395508 C-38.14699935913086,-33.09199905395508 -38.14699935913086,33.09199905395508 -38.14699935913086,33.09199905395508 C-38.14699935913086,33.09199905395508 32.40399932861328,33.09199905395508 32.40399932861328,33.09199905395508 C35.564998626708984,33.09199905395508 38.14699935913086,30.509000778198242 38.14699935913086,27.349000930786133 C38.14699935913086,27.349000930786133 38.14699935913086,-26.988000869750977 38.14699935913086,-26.988000869750977 C38.14699935913086,-30.354999542236328 35.400001525878906,-33.09199905395508 32.03300094604492,-33.09199905395508z"
                        />
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,-35.91699981689453,-0.004999999888241291)">
                        <path
                          fill="rgb(37,211,102)"
                          fillOpacity="1"
                          d="M16.84000015258789,33.08700180053711 C16.84000015258789,33.08700180053711 16.84000015258789,3.247999906539917 16.84000015258789,3.247999906539917 C16.84000015258789,3.247999906539917 16.84000015258789,-33.08700180053711 16.84000015258789,-33.08700180053711 C16.84000015258789,-33.08700180053711 -11.097999572753906,-33.08700180053711 -11.097999572753906,-33.08700180053711 C-14.269000053405762,-33.08700180053711 -16.84000015258789,-30.503999710083008 -16.84000015258789,-27.3439998626709 C-16.84000015258789,-27.3439998626709 -16.84000015258789,27.3439998626709 -16.84000015258789,27.3439998626709 C-16.84000015258789,30.514999389648438 -14.258000373840332,33.08700180053711 -11.097999572753906,33.08700180053711 C-11.097999572753906,33.08700180053711 16.84000015258789,33.08700180053711 16.84000015258789,33.08700180053711z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(17,27,33)"
                          strokeOpacity="1"
                          strokeWidth="1.875"
                          d="M16.84000015258789,33.08700180053711 C16.84000015258789,33.08700180053711 16.84000015258789,3.247999906539917 16.84000015258789,3.247999906539917 C16.84000015258789,3.247999906539917 16.84000015258789,-33.08700180053711 16.84000015258789,-33.08700180053711 C16.84000015258789,-33.08700180053711 -11.097999572753906,-33.08700180053711 -11.097999572753906,-33.08700180053711 C-14.269000053405762,-33.08700180053711 -16.84000015258789,-30.503999710083008 -16.84000015258789,-27.3439998626709 C-16.84000015258789,-27.3439998626709 -16.84000015258789,27.3439998626709 -16.84000015258789,27.3439998626709 C-16.84000015258789,30.514999389648438 -14.258000373840332,33.08700180053711 -11.097999572753906,33.08700180053711 C-11.097999572753906,33.08700180053711 16.84000015258789,33.08700180053711 16.84000015258789,33.08700180053711z"
                        />
                      </g>
                    </g>
                    {/* Handset icon */}
                    <g
                      transform="matrix(0.75,0,0,0.75,77.50700378417969,66.09200286865234)"
                      opacity="1"
                      style={{ display: 'block' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,14.236000061035156,-0.04100000113248825)">
                        <path
                          fill="rgb(37,211,102)"
                          fillOpacity="1"
                          d="M-0.8669999837875366,-8.059000015258789 C-1.121000051498413,-7.0289998054504395 -5.396999835968018,-4.783999919891357 -4.460000038146973,-2.8949999809265137 C-3.8910000324249268,-1.6050000190734863 1.5199999809265137,6.520999908447266 2.2130000591278076,6.613999843597412 C3.9749999046325684,6.843999862670898 5.151000022888184,4.314000129699707 6.894000053405762,4.656000137329102 C7.732999801635742,4.822000026702881 8.265000343322754,5.589000225067139 8.710000038146973,6.291999816894531 C9.593000411987305,7.683000087738037 10.467000007629395,9.079000473022461 11.350000381469727,10.475000381469727 C11.741000175476074,11.104999542236328 12.140999794006348,11.763999938964844 12.1850004196167,12.486000061035156 C12.262999534606934,14.003999710083008 10.687000274658203,15.121999740600586 9.133999824523926,15.430000305175781 C6.824999809265137,15.888999938964844 4.386000156402588,15.180999755859375 2.2720000743865967,14.097000122070312 C-3.6589999198913574,11.065999984741211 -7.607999801635742,5.320000171661377 -10.244000434875488,-0.5910000205039978 C-11.468999862670898,-3.3440001010894775 -12.484999656677246,-6.302000045776367 -12.109000205993652,-9.241000175476074 C-11.732999801635742,-12.180000305175781 -9.619000434875488,-15.050000190734863 -6.572999954223633,-15.52299976348877 C-6.2170000076293945,-15.581999778747559 -5.841000080108643,-15.60099983215332 -5.489999771118164,-15.503000259399414 C-4.958000183105469,-15.347000122070312 -4.543000221252441,-14.942000389099121 -4.171999931335449,-14.536999702453613 C-2.6689999103546143,-12.86299991607666 -1.5549999475479126,-10.866000175476074 -0.9449999928474426,-8.748000144958496 C-0.8769999742507935,-8.52299976348877 -0.8180000185966492,-8.298999786376953 -0.8769999742507935,-8.074000358581543z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(17,27,33)"
                          strokeOpacity="1"
                          strokeWidth="1.875"
                          d="M-0.8669999837875366,-8.059000015258789 C-1.121000051498413,-7.0289998054504395 -5.396999835968018,-4.783999919891357 -4.460000038146973,-2.8949999809265137 C-3.8910000324249268,-1.6050000190734863 1.5199999809265137,6.520999908447266 2.2130000591278076,6.613999843597412 C3.9749999046325684,6.843999862670898 5.151000022888184,4.314000129699707 6.894000053405762,4.656000137329102 C7.732999801635742,4.822000026702881 8.265000343322754,5.589000225067139 8.710000038146973,6.291999816894531 C9.593000411987305,7.683000087738037 10.467000007629395,9.079000473022461 11.350000381469727,10.475000381469727 C11.741000175476074,11.104999542236328 12.140999794006348,11.763999938964844 12.1850004196167,12.486000061035156 C12.262999534606934,14.003999710083008 10.687000274658203,15.121999740600586 9.133999824523926,15.430000305175781 C6.824999809265137,15.888999938964844 4.386000156402588,15.180999755859375 2.2720000743865967,14.097000122070312 C-3.6589999198913574,11.065999984741211 -7.607999801635742,5.320000171661377 -10.244000434875488,-0.5910000205039978 C-11.468999862670898,-3.3440001010894775 -12.484999656677246,-6.302000045776367 -12.109000205993652,-9.241000175476074 C-11.732999801635742,-12.180000305175781 -9.619000434875488,-15.050000190734863 -6.572999954223633,-15.52299976348877 C-6.2170000076293945,-15.581999778747559 -5.841000080108643,-15.60099983215332 -5.489999771118164,-15.503000259399414 C-4.958000183105469,-15.347000122070312 -4.543000221252441,-14.942000389099121 -4.171999931335449,-14.536999702453613 C-2.6689999103546143,-12.86299991607666 -1.5549999475479126,-10.866000175476074 -0.9449999928474426,-8.748000144958496 C-0.8769999742507935,-8.52299976348877 -0.8180000185966492,-8.298999786376953 -0.8769999742507935,-8.074000358581543z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Heading and Subtitle */}
          <div className="x78zum5 xdt5ytf x1f0uite">
            <div className="x78zum5 xdt5ytf x1qvou4u">
              <h2 className="html-h2 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1vvkbs x1heor9g x1qlqyl8 x1pd3egz x1a2a7pz x193iq5w xeuugli">
                <span
                  className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x2b8uid x1lliihq x1fj9vlw x14ug900 x1hx0egp x1aueamr xjb2p0i xo1l8bm xladpa3 x1ic7a3i"
                  style={{
                    fontSize: '22px',
                    lineHeight: '28px',
                    fontWeight: 500,
                    color: 'var(--WDS-content-default, #fafafa)',
                  }}
                >
                  Voice and video calling is now available
                </span>
              </h2>
              <span
                className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x2b8uid x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'var(--WDS-content-deemphasized, rgba(255, 255, 255, 0.6))',
                  marginTop: '4px',
                }}
              >
                Now you can make and join calls on WhatsApp Web.
              </span>
            </div>
          </div>

          {/* Primary Action Button: "Go to Calls" */}
          <div className="x78zum5 xl56j7k" style={{ marginTop: '24px' }}>
            <div className="x78zum5 x1q0g3np x6s0dn4 x1qvou4u x1s70e7g xeq5yr9" role="group">
              <button
                data-tab="8"
                aria-disabled="false"
                tabIndex={0}
                type="button"
                onClick={onGoToCalls}
                className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u x1abdmlv xk4n5i7 x1wjp2x xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x10w6t97 xdx6fka xvtqlqk xeq5yr9"
                style={{
                  backgroundColor: '#00a884',
                  color: '#111b21',
                  borderRadius: '24px',
                  padding: '10px 24px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                }}
              >
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k x1s70e7g">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f x2b8uid">
                      <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xk4n5i7 x87ps6o x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu">
                        <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                          <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                            Go to Calls
                          </span>
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

      {/* Action Tile Group (5 items) */}
      <div
        className="x78zum5 xl56j7k x1f0uite xs2akgl x98l61r"
        data-testid="intro-panel-empty-state-action-tile-group"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px',
          marginTop: '36px',
        }}
      >
        {/* Tile 1: Send document */}
        <div className="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xl56j7k x18qnofl xeuugli">
          <div className="x14atkfc x18qnofl">
            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
              <button
                data-tab="8"
                tabIndex={0}
                type="button"
                onClick={handleDocumentClick}
                className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k x9f619 x18qnofl xnj1f2r x2uibgs xkveyfu x12llq9 x1ypdohk xjbqb8w x1n5bzlp xyftt0y x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14atkfc xfvyar9 xyi3aci xwf5gio x1p453bz x1suzm8a xtnn1bt x9v5kkp xmw7ebm xrdum7p"
                style={{
                  backgroundColor: 'var(--WDS-components-active-list-row, rgba(255, 255, 255, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  width: '120px',
                  color: 'var(--WDS-content-default, #fafafa)',
                }}
              >
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xh8yej3 x5yr21d x78zum5 xdt5ytf x6s0dn4 x9f619 x1fmog5m xu25z0z x140muxe xo1y3bh x1qvou4u x12w63v0 x1nzty39 xexx8yu x18d9i69">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1247r65 xsdox4t xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh x78zum5 x6s0dn4 xl56j7k x1n2onr6 x6ikm8r x10wlt62 x3oybdh x13t8fmb x11xpdln xum2xem">
                    <span aria-hidden="true" className="xuwfzo9 xxk0z11 xvy4d1p">
                      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor">
                        <title>ic-description</title>
                        <path fill="currentColor" d="M9 18h6c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 16H9c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 17c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h6c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 12H9c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 13c0 .28.1.52.29.71.19.2.43.29.71.29Zm-3 8c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V4c0-.55.2-1.02.59-1.41C4.98 2.19 5.45 2 6 2h7.18a1.97 1.97 0 0 1 1.4.58l4.85 4.84a1.94 1.94 0 0 1 .57 1.4V20c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm7-14V4H6v16h12V9h-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 8Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xh8yej3 x78zum5 xl56j7k" style={{ marginTop: '8px' }}>
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x87ps6o x1pg5gke xjb2p0i xo1l8bm xl2ypbo x1ic7a3i" style={{ fontSize: '12px' }}>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                        <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                          Send document
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </span>
          </div>
          <input ref={fileInputRef} accept="*" multiple type="file" style={{ display: 'none' }} />
        </div>

        {/* Tile 2: Add contact */}
        <div className="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xl56j7k x18qnofl xeuugli">
          <div className="x14atkfc x18qnofl">
            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
              <button
                data-tab="8"
                tabIndex={0}
                type="button"
                onClick={onAddContact}
                className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k x9f619 x18qnofl xnj1f2r x2uibgs xkveyfu x12llq9 x1ypdohk xjbqb8w x1n5bzlp xyftt0y x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14atkfc xfvyar9 xyi3aci xwf5gio x1p453bz x1suzm8a xtnn1bt x9v5kkp xmw7ebm xrdum7p"
                style={{
                  backgroundColor: 'var(--WDS-components-active-list-row, rgba(255, 255, 255, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  width: '120px',
                  color: 'var(--WDS-content-default, #fafafa)',
                }}
              >
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xh8yej3 x5yr21d x78zum5 xdt5ytf x6s0dn4 x9f619 x1fmog5m xu25z0z x140muxe xo1y3bh x1qvou4u x12w63v0 x1nzty39 xexx8yu x18d9i69">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1247r65 xsdox4t xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh x78zum5 x6s0dn4 xl56j7k x1n2onr6 x6ikm8r x10wlt62 x3oybdh x13t8fmb x11xpdln xum2xem">
                    <span aria-hidden="true" className="xuwfzo9 xxk0z11 xvy4d1p">
                      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor">
                        <title>ic-person-add</title>
                        <path fill="currentColor" d="M18 11h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 22 11h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 19 14a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 13v-2Zm-9 1a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 5 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 9 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 13 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 9 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm2 0h12v-.8a.97.97 0 0 0-.5-.85c-.9-.45-1.8-.79-2.72-1.01a11.6 11.6 0 0 0-5.55 0c-.92.22-1.83.56-2.73 1.01a.97.97 0 0 0-.5.85v.8Zm6-8c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41C10.02 6.19 9.55 6 9 6c-.55 0-1.02.2-1.41.59C7.19 6.98 7 7.45 7 8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xh8yej3 x78zum5 xl56j7k" style={{ marginTop: '8px' }}>
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x87ps6o x1pg5gke xjb2p0i xo1l8bm xl2ypbo x1ic7a3i" style={{ fontSize: '12px' }}>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                        <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                          Add contact
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </span>
          </div>
        </div>

        {/* Tile 3: Invite a friend */}
        <div className="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xl56j7k x18qnofl xeuugli">
          <div className="x14atkfc x18qnofl">
            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
              <button
                data-tab="8"
                tabIndex={0}
                type="button"
                onClick={onInviteFriend}
                className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k x9f619 x18qnofl xnj1f2r x2uibgs xkveyfu x12llq9 x1ypdohk xjbqb8w x1n5bzlp xyftt0y x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14atkfc xfvyar9 xyi3aci xwf5gio x1p453bz x1suzm8a xtnn1bt x9v5kkp xmw7ebm xrdum7p"
                style={{
                  backgroundColor: 'var(--WDS-components-active-list-row, rgba(255, 255, 255, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  width: '120px',
                  color: 'var(--WDS-content-default, #fafafa)',
                }}
              >
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xh8yej3 x5yr21d x78zum5 xdt5ytf x6s0dn4 x9f619 x1fmog5m xu25z0z x140muxe xo1y3bh x1qvou4u x12w63v0 x1nzty39 xexx8yu x18d9i69">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1247r65 xsdox4t xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh x78zum5 x6s0dn4 xl56j7k x1n2onr6 x6ikm8r x10wlt62 x3oybdh x13t8fmb x11xpdln xum2xem">
                    <span aria-hidden="true" className="xuwfzo9 xxk0z11 xvy4d1p">
                      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor">
                        <title>ic-mail</title>
                        <path fill="currentColor" d="M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4ZM20 8l-7.47 4.68a1.04 1.04 0 0 1-.53.14 1 1 0 0 1-.53-.14L4 8v10h16V8Zm-8 3 8-5H4l8 5ZM4 8.25V6.78v.02-.01 1.46Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xh8yej3 x78zum5 xl56j7k" style={{ marginTop: '8px' }}>
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x87ps6o x1pg5gke xjb2p0i xo1l8bm xl2ypbo x1ic7a3i" style={{ fontSize: '12px' }}>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                        <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                          Invite a friend
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </span>
          </div>
        </div>

        {/* Tile 4: New call */}
        <div className="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xl56j7k x18qnofl xeuugli">
          <div className="x14atkfc x18qnofl">
            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
              <button
                data-tab="8"
                tabIndex={0}
                type="button"
                onClick={onNewCall || onGoToCalls}
                className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k x9f619 x18qnofl xnj1f2r x2uibgs xkveyfu x12llq9 x1ypdohk xjbqb8w x1n5bzlp xyftt0y x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14atkfc xfvyar9 xyi3aci xwf5gio x1p453bz x1suzm8a xtnn1bt x9v5kkp xmw7ebm xrdum7p"
                style={{
                  backgroundColor: 'var(--WDS-components-active-list-row, rgba(255, 255, 255, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  width: '120px',
                  color: 'var(--WDS-content-default, #fafafa)',
                }}
              >
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xh8yej3 x5yr21d x78zum5 xdt5ytf x6s0dn4 x9f619 x1fmog5m xu25z0z x140muxe xo1y3bh x1qvou4u x12w63v0 x1nzty39 xexx8yu x18d9i69">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1247r65 xsdox4t xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh x78zum5 x6s0dn4 xl56j7k x1n2onr6 x6ikm8r x10wlt62 x3oybdh x13t8fmb x11xpdln xum2xem">
                    <span aria-hidden="true" className="xuwfzo9 xxk0z11 xvy4d1p">
                      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor">
                        <title>ic-video-call</title>
                        <path fill="currentColor" d="M10 16c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-2h2c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 13 11h-2V9c0-.28-.1-.52-.29-.71A.97.97 0 0 0 10 8c-.28 0-.52.1-.71.29A.94.94 0 0 0 9 9v2H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 12c0 .28.1.52.29.71.19.2.43.29.71.29h2v2c0 .28.1.52.29.71.19.2.43.29.71.29Zm-6 4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.5l3.15-3.15a.47.47 0 0 1 .54-.11c.2.07.31.23.31.46v8.6c0 .23-.1.39-.31.46a.47.47 0 0 1-.54-.11L18 13.5V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h12V6H4v12Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xh8yej3 x78zum5 xl56j7k" style={{ marginTop: '8px' }}>
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x87ps6o x1pg5gke xjb2p0i xo1l8bm xl2ypbo x1ic7a3i" style={{ fontSize: '12px' }}>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                        <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                          New call
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </span>
          </div>
        </div>

        {/* Tile 5: Ask Meta AI */}
        <div className="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xl56j7k x18qnofl xeuugli">
          <div className="x14atkfc x18qnofl">
            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
              <button
                data-tab="8"
                tabIndex={0}
                type="button"
                onClick={onAskMetaAi}
                className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k x9f619 x18qnofl xnj1f2r x2uibgs xkveyfu x12llq9 x1ypdohk xjbqb8w x1n5bzlp xyftt0y x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14atkfc xfvyar9 xyi3aci xwf5gio x1p453bz x1suzm8a xtnn1bt x9v5kkp xmw7ebm xrdum7p"
                style={{
                  backgroundColor: 'var(--WDS-components-active-list-row, rgba(255, 255, 255, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  width: '120px',
                  color: 'var(--WDS-content-default, #fafafa)',
                }}
              >
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xh8yej3 x5yr21d x78zum5 xdt5ytf x6s0dn4 x9f619 x1fmog5m xu25z0z x140muxe xo1y3bh x1qvou4u x12w63v0 x1nzty39 xexx8yu x18d9i69">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1247r65 xsdox4t xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh x78zum5 x6s0dn4 xl56j7k x1n2onr6 x6ikm8r x10wlt62 x3oybdh x13t8fmb x11xpdln xum2xem">
                    <span aria-hidden="true" className="xuwfzo9 xxk0z11 xvy4d1p">
                      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor">
                        <title>wds-ic-logo-meta-ai-color</title>
                        <g clipPath="url(#WDSIconWdsIcLogoMetaAiColor__a)">
                          <path
                            fill="url(#WDSIconWdsIcLogoMetaAiColor__b)"
                            d="M8.07 15.54c1.74 0 2.88 2.43 2.88 4.26 0 1.56-.81 3.27-2.25 3.27-1.68 0-2.88-2.34-2.88-4.29 0-1.59.81-3.24 2.25-3.24m6.21.96c2.16 0 4.71 1.89 4.71 3.81 0 1.26-1.11 1.95-2.4 1.95-2.13 0-4.65-1.86-4.65-3.84 0-1.29 1.08-1.92 2.34-1.92m-9.03-6.03c1.23 0 1.95.81 1.95 2.01 0 2.16-2.28 4.53-4.35 4.53-1.2 0-1.98-.81-1.98-2.04 0-2.1 2.28-4.5 4.38-4.5m15.75.66c1.53 0 2.55.81 2.55 2.04 0 1.98-2.7 3.48-4.74 3.48-1.56 0-2.55-.9-2.55-2.07 0-1.92 2.64-3.45 4.74-3.45m-2.04-7.86c1.38 0 2.1 1.44 2.1 2.88 0 1.92-1.29 4.53-3.18 4.53-1.38 0-2.13-1.38-2.13-2.85 0-1.98 1.35-4.56 3.21-4.56M5.46 4.35c1.98 0 4.02 1.08 4.02 2.67 0 1.5-1.8 2.37-3.57 2.37-1.98 0-4.02-1.08-4.02-2.64 0-1.44 1.71-2.4 3.57-2.4m5.55-3.9c2.07 0 4.05 2.58 4.05 4.71 0 1.23-.66 2.13-1.89 2.13-2.07 0-4.08-2.58-4.08-4.68 0-1.2.66-2.16 1.92-2.16"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="WDSIconWdsIcLogoMetaAiColor__b"
                            x1="14.12"
                            x2="20.68"
                            y1="-1.69"
                            y2="20.78"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#f356ff" />
                            <stop offset="1" stopColor="#4641ff" />
                          </linearGradient>
                          <clipPath id="WDSIconWdsIcLogoMetaAiColor__a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xh8yej3 x78zum5 xl56j7k" style={{ marginTop: '8px' }}>
                    <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x87ps6o x1pg5gke xjb2p0i xo1l8bm xl2ypbo x1ic7a3i" style={{ fontSize: '12px' }}>
                      <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                        <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                          Ask Meta AI
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPanel;
