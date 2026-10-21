__d("WAWebPhotoViewerModal.react", [
    "WAWebCellFrame.react",
    "WAWebContactGetters",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebImg.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebObjectFit.react",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUimUie.react",
    "WAWebVelocityAnimate",
    "WAWebWaChatPsaIcon.react",
    "WAWebWid",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSPaddings.stylex",
    "WDSProfilePhoto.react",
    "WDSTooltip.react",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebDefaultProfileColors",
    "useWAWebProfilePicThumbValues",
    "useWAWebSaveableProfilePicUrl",
    "useWAWebStableCallback",
    "useWAWebVideoAvatarUrl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef, useState } = c;
    const _ = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const f = 500;
    const g = 40;
    const h = 640;
    const y = 641;
    const C = "x18re5ia-B";
    const b = {
        avatarDefaultPSASmall: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        avatarDefaultPSALarge: {
            width: "x11i3ho8",
            height: "xzpm71n",
            $$css: true
        },
        profileContainer: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flex: "xc8qplx",
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            justifyContent: "x1qughib",
            height: "x4t50tc",
            $$css: true
        }
    };
    function v(t) {
        const { animateBorderRadius, animateSquircle } = t;
        const i = animateSquircle === undefined ? false : animateSquircle;
        const { contact, getZoomNode } = t;
        const c = o("useWAWebContactValues").useContactValues(t.contact.id, [
            o("WAWebFrontendContactGetters").getFormattedUser,
            o("WAWebContactGetters").getId
        ]);
        const g = c[0];
        const C = c[1];
        const v = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(t.profilePicThumb.id, [
            o("WAWebProfilePicThumbGetters").getImgFull
        ]);
        const S = v[0];
        const R = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(C);
        const L = o("useWAWebProfilePicThumbValues").useOptionalProfilePicThumbValues(R?.id, [
            o("WAWebProfilePicThumbGetters").getImg
        ]);
        const E = useState(S);
        const k = E[0];
        const I = E[1];
        if (S != null && k !== S) {
            I(S);
        }
        const TRef = useRef(null);
        const D = r("useWAWebVideoAvatarUrl")(C);
        const x = useState(null);
        const $ = x[0];
        const P = x[1];
        const N = D != null && D !== "" && $ !== D;
        const M = function() {
            TRef.current = null;
            P(D);
        };
        const w = r("useWAWebSaveableProfilePicUrl")(N ? null : k);
        const A = useState(function() {
            if (r("WAWebWid").isPSA(t.contact.id)) {
                return {
                    visibility: "visible",
                    transform: "translateX(0px) translateY(0px) scale(1)",
                    borderRadius: "0%",
                    transition: `transform ${f}ms cubic-bezier(.1,.82,.25,1),
                  border-radius ${f}ms cubic-bezier(.1,.82,.25,1)`
                };
            }
            return {
                visibility: "hidden"
            };
        });
        const F = A[0];
        const O = A[1];
        const B = useState(function() {
            if (r("WAWebWid").isPSA(t.contact.id)) {
                return {
                    width: h,
                    height: y
                };
            }
            return null;
        });
        const W = B[0];
        const q = B[1];
        const URef = useRef(false);
        const VRef = useRef();
        const HRef = useRef();
        useEffect(function() {
            const HRef_current = HRef.current;
            HRef.current = null;
            HRef_current?.();
        }, undefined);
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
            surface: "profile-picture-preview"
        });
        const G = (currentTarget, r, o)=>{
            q({
                width: r,
                height: o
            });
            if (TRef.current !== k) {
                TRef.current = k;
                HRef.current = function() {
                    return getZoomNode(function(e) {
                        const r = currentTarget.getBoundingClientRect();
                        const o = e.getBoundingClientRect();
                        const a = o.top - r.top;
                        const i = o.left - r.left;
                        const l = e.clientWidth / currentTarget.clientWidth;
                        const s = {
                            visibility: "hidden",
                            transform: `translateX(${i}px) translateY(${a}px) scale(${l})`,
                            transition: "transform 0s",
                            borderRadius: undefined
                        };
                        if (animateBorderRadius) {
                            s.borderRadius = "50%";
                        }
                        O(s);
                        HRef.current = function() {
                            let e = {
                                transform: "translateX(0px) translateY(0px) scale(1)",
                                transition: `transform ${f}ms cubic-bezier(.1,.82,.25,1)`
                            };
                            if (animateBorderRadius) {
                                e = {
                                    transform: "translateX(0px) translateY(0px) scale(1)",
                                    borderRadius: "0%",
                                    transition: `transform ${f}ms cubic-bezier(.1,.82,.25,1),
                                       border-radius ${f}ms cubic-bezier(.1,.82,.25,1)`
                                };
                            }
                            O(e);
                        };
                    });
                };
            }
        };
        const z = function({ currentTarget }) {
            G(currentTarget, currentTarget.naturalWidth, currentTarget.naturalHeight);
        };
        const onLoadedData = function({ currentTarget }) {
            G(currentTarget, currentTarget.videoWidth, currentTarget.videoHeight);
        };
        const K = r("useWAWebStableCallback")(function() {
            if (!URef.current) {
                URef.current = true;
                let e;
                getZoomNode(function(t) {
                    e = t;
                });
                if (!e) {
                    return o("WAWebModalManager").ModalManager.closeMedia();
                }
                const t = VRef.current;
                if (t) {
                    if (animateBorderRadius || i) {
                        t.style.transition = `${i ? "clip-path" : "border-radius"} ${f}ms cubic-bezier(.1,.82,.25,1)`;
                        if (i) {
                            t.style.clipPath = "var(--squircle-polygon)";
                        } else {
                            t.style.borderRadius = "50%";
                        }
                    }
                    const a = r("nullthrows")(e);
                    const l = t.getBoundingClientRect();
                    const u = a.getBoundingClientRect();
                    const c = u.top - l.top;
                    const d = u.left - l.left;
                    const m = a.clientWidth / t.clientWidth;
                    r("WAWebVelocityAnimate")(t, {
                        translateX: [
                            d,
                            0
                        ],
                        translateY: [
                            c,
                            0
                        ],
                        scale: [
                            m,
                            1
                        ]
                    }, {
                        duration: 200,
                        easing: [
                            0.1,
                            0.82,
                            0.25,
                            1
                        ]
                    }).then(()=>{
                        o("WAWebModalManager").ModalManager.closeMedia();
                    });
                }
            }
        });
        useEffect(function() {
            if ((S == null || S === "") && !r("WAWebWid").isPSA(C)) {
                K();
            }
        }, [
            S,
            K,
            C
        ]);
        const onWheel = function(t) {
            if (Math.abs(t.deltaY) > 3) {
                K();
            }
        };
        let X;
        let Y;
        if (r("WAWebWid").isPSA(C)) {
            X = u.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, {
                iconXstyle: b.avatarDefaultPSALarge
            });
            Y = u.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, {
                iconXstyle: b.avatarDefaultPSASmall
            });
        } else if (k != null && k !== "") {
            const Component = r("WAWebImg.react");
            X = N ? <video aria-hidden="true" autoPlay className="xhtitgo xh8yej3 x5yr21d x19kjcj4" data-testid="profile_photo_viewer_video_avatar" disablePictureInPicture loop muted onError={M} onLoadedData={onLoadedData} playsInline poster={k} src={D}/> : <Component src={w ?? k} hasPrivacyChecks onLoad={z} crossOrigin={false} className="xhtitgo xh8yej3 x5yr21d"/>;
            Y = u.jsx(r("WDSProfilePhoto.react"), {
                type: i ? "community" : o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(C),
                name: o("WAWebFrontendContactGetters").getFormattedUser(contact),
                src: L?.[0] ?? k,
                videoSrc: N ? D : null,
                size: "small",
                color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(C),
                customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(C),
                placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(C),
                isDecorative: true
            });
        }
        const Component = r("WDSButton.react");
        const Component_1 = r("WDSTooltip.react");
        const Component_2 = r("WAWebObjectFit.react");
        const Component_3 = o("WAWebUimUie.react").UIE;
        return <Component_3 displayName="PhotoViewer" escapable requestDismiss={K}><div {...babelHelpers.extends({}, {
            0: {
                className: "x9f619 x5yr21d xu96u03 xixxii4 x13vifvy xh8yej3 x1pb5qga x78zum5 xdt5ytf x1akjpcp xqcmdr3 xfbpl4g xu90me3"
            },
            1: {
                className: "x9f619 x5yr21d xu96u03 xixxii4 xh8yej3 x1pb5qga x78zum5 xdt5ytf x1akjpcp xqcmdr3 xfbpl4g xu90me3 x9ri80z"
            }
        }[!!r("WAWebEnvironment").isWindows << 0], {
            onWheel,
            onClick: K,
            children: [
                <div className="x78zum5 x3psx0u x15zctf7 x6s0dn4 xng8ra x1280gxy xpbwgaa"><div className="x98rzlu x14yy4lh x1sqbtui xnkmj2t">{u.jsx(r("WAWebCellFrame.react"), {
                    image: Y,
                    theme: r("WAWebEnvironment").isWindows ? "label-selection" : "plain",
                    primary: u.jsx(o("WAWebName.react").Name, {
                        contact,
                        selectable: true
                    })
                })}</div><div className="x9ek82g x14iifvp"><Component_1 label={r("WAWebFbtCommon")("Close")}><Component variant="borderless" type="default" size="medium" onPress={K} Icon={r("WDSIconIcClose.react")} testid="btn-close" aria-label={r("WAWebFbtCommon")("Close")}/></Component_1></div></div>,
                <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(b.profileContainer, _.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor0), {
                    dir: "ltr",
                    children: <div className="x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d"><Component_2 type="scaleDown" size={W}><div className="xh8yej3 x5yr21d x6ikm8r x10wlt62 xiy17q3 x1lvsgvq x1tbiz1a xyyilfv" ref={VRef} style={F}>{X}</div></Component_2></div>
                })}/>
            ]
        })}/></Component_3>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    l.default = v;
}, 98);