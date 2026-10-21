__d("WDSProfilePhoto.react", [
    "BaseImage.react",
    "BaseProfilePhoto.react",
    "WDSFocusStateStyles",
    "WDSIconIcAddAPhoto.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSPressMotionStyles",
    "WDSProfilePhotoRenderingMode",
    "WDSProfilePhotoSegmentedRing.react",
    "WDSProfilePhotoUtils",
    "WDSSpinner.react",
    "WDSTooltip.react",
    "WDSVars.stylex",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useId, useState } = c;
    const _ = {
        image: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            display: "x1lliihq",
            $$css: true
        },
        outline: {
            "::after_borderTopColor": "x1f65lpj",
            "::after_borderInlineEndColor": "x1dp6k3u",
            "::after_borderBottomColor": "x15j2znp",
            "::after_borderInlineStartColor": "xwr2rdz",
            "::after_borderStartStartRadius": "xrw4ojt",
            "::after_borderStartEndRadius": "xg6frx5",
            "::after_borderEndEndRadius": "xw872ko",
            "::after_borderEndStartRadius": "xhgbb2x",
            "::after_borderTopStyle": "xynf4tj",
            "::after_borderInlineEndStyle": "xdjs2zz",
            "::after_borderBottomStyle": "x1r9ni5o",
            "::after_borderInlineStartStyle": "xvsnedh",
            "::after_borderTopWidth": "x1g7kj8l",
            "::after_borderInlineEndWidth": "xqo1zpi",
            "::after_borderBottomWidth": "x2qsnth",
            "::after_borderInlineStartWidth": "xh2ebzn",
            "::after_boxSizing": "xx38sju",
            "::after_content": "x1s928wv",
            "::after_top": "x1m1drc7",
            "::after_insetInlineEnd": "x1unh1gc",
            "::after_bottom": "x1xrz1ek",
            "::after_insetInlineStart": "x1iygr5g",
            "::after_pointerEvents": "x2q1x1w",
            "::after_position": "x1j6awrg",
            $$css: true
        }
    };
    const f = {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        lineHeight: "x14ju556",
        $$css: true
    };
    const g = {
        borderStartStartRadius: "xykpoxv",
        borderStartEndRadius: "xsejb3s",
        borderEndEndRadius: "x1swlh40",
        borderEndStartRadius: "x1mjayxm",
        $$css: true
    };
    const h = {
        container: function(t) {
            return [
                f,
                {
                    height: t != null ? "x16ye13r" : t,
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        position: {
            bottom: "x1ey2m1c",
            insetInlineEnd: "xtijo5x",
            position: "x10l6tqk",
            $$css: true
        },
        rounded: function(t) {
            return [
                g,
                {
                    "--x-borderRadius": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t / 2)
                }
            ];
        },
        surface: function(t) {
            return [
                {
                    backgroundColor: t != null ? "xl8spv7" : t,
                    $$css: true
                },
                {
                    "--x-backgroundColor": t ?? undefined
                }
            ];
        },
        content: function(t) {
            return [
                {
                    color: t != null ? "x14rh7hd" : t,
                    $$css: true
                },
                {
                    "--x-color": t ?? undefined
                }
            ];
        }
    };
    const y = {
        base: {
            display: "x3nfvp2",
            flexShrink: "x2lah0s",
            $$css: true
        },
        size: function(t) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        positioned: {
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            position: "x1n2onr6",
            $$css: true
        },
        starburstMask: function(t) {
            return [
                {
                    mask: t != null ? "x1hw4fh5" : t,
                    $$css: true
                },
                {
                    "--x-mask": t ?? undefined
                }
            ];
        }
    };
    const C = {
        fontWeight: "xfjzk2p",
        lineHeight: "xo5v014",
        textTransform: "xtvhhri",
        userSelect: "x87ps6o",
        $$css: true
    };
    const b = {
        lineHeight: "x14ju556",
        $$css: true
    };
    const v = {
        container: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            height: "x5yr21d",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            $$css: true
        },
        initials: function(t, n) {
            return [
                C,
                {
                    color: t != null ? "x14rh7hd" : t,
                    fontSize: n != null ? "xdmh292" : n,
                    $$css: true
                },
                {
                    "--x-color": t ?? undefined,
                    "--x-fontSize": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(n)
                }
            ];
        },
        icon: function(t) {
            return [
                b,
                {
                    color: t != null ? "x14rh7hd" : t,
                    $$css: true
                },
                {
                    "--x-color": t ?? undefined
                }
            ];
        }
    };
    const S = {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        position: "x10l6tqk",
        $$css: true
    };
    const R = {
        pressableWrapper: {
            backgroundColor: "xjbqb8w",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            cursor: "x1ypdohk",
            display: "x3nfvp2",
            flexShrink: "x2lah0s",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            position: "x1n2onr6",
            $$css: true
        },
        circle: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        squircle: {
            borderStartStartRadius: "x1xstdij",
            borderStartEndRadius: "x1hpb3w5",
            borderEndEndRadius: "xyd612o",
            borderEndStartRadius: "x1pvccs7",
            $$css: true
        },
        iconOverlay: function(t) {
            return [
                S,
                {
                    top: t != null ? "x16zzebs" : t,
                    insetInlineEnd: t != null ? "x1m2rwpn" : t,
                    bottom: t != null ? "xfk5h6u" : t,
                    insetInlineStart: t != null ? "x1em17wz" : t,
                    $$css: true
                },
                {
                    "--x-inset": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        circleClip: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        squircleClip: {
            borderStartStartRadius: "x1xstdij",
            borderStartEndRadius: "x1hpb3w5",
            borderEndEndRadius: "xyd612o",
            borderEndStartRadius: "x1pvccs7",
            $$css: true
        },
        iconContainer: {
            lineHeight: "x14ju556",
            transform: "x3oybdh xcum6zn",
            transitionProperty: "x11xpdln",
            transitionDuration: "xx6bhzk",
            transitionTimingFunction: "x9lcvmn",
            $$css: true
        },
        iconColor: function(t) {
            return [
                {
                    color: t != null ? "x14rh7hd" : t,
                    $$css: true
                },
                {
                    "--x-color": t ?? undefined
                }
            ];
        },
        hoverFade: {
            opacity: "xg01cxk x1o7uuvo",
            transitionProperty: "x19991ni",
            transitionDuration: "xx6bhzk",
            transitionTimingFunction: "x9lcvmn",
            $$css: true
        }
    };
    function LComponent({ addOns, badge, color = "green", customColor, cutouts, initials, interaction, isDecorative = false, loading = false, name, placeholderIcon, size = "medium", src, statusRing, tabOrder, testid, tooltipDisabled = false, type, videoSrc }) {
        const G = useId();
        const z = useState(false);
        const j = z[0];
        const K = z[1];
        const Q = useState(null);
        const X = Q[0];
        const Y = Q[1];
        const J = videoSrc != null && X === videoSrc;
        const Z = useCallback(function() {
            Y(videoSrc ?? null);
        }, [
            videoSrc
        ]);
        const ee = useCallback(function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
            }
        }, []);
        const te = o("WDSProfilePhotoUtils").SIZE_TO_PX[size];
        const ne = type === "community" || type === "announcement";
        const re = !loading && interaction?.type === "edit" && te >= 36;
        const oe = !loading && interaction != null && (re || interaction.type !== "edit" && te >= 24);
        const ae = badge != null ? o("WDSProfilePhotoUtils").BADGE_SIZE_MAP[te] : undefined;
        const ie = ae != null ? o("WDSProfilePhotoUtils").BADGE_CUTOUT_SPEC[te] : null;
        const le = ((t)=>{
            if (badge == null || ae == null) {
                return null;
            }
            const n = o("WDSProfilePhotoUtils").BADGE_COLORS[badge.type];
            const { content, surface } = n;
            const l = o("WDSProfilePhotoUtils").BADGE_ICON_SIZE[ae];
            let s = ae;
            if (l != null) {
                s = surface != null ? l.withSurface : l.noSurface;
            }
            const C = badge.type === "verified" ? r("WDSIconWdsIcVerifiedFilled.react") : (t = badge.Icon) != null ? t : o("WDSProfilePhotoUtils").DEFAULT_BADGE_ICON[badge.type];
            return <div {...babelHelpers.extends({
                "data-testid": undefined
            }, (e || (e = r("stylex"))).props(h.position, h.container(ae), surface != null && h.rounded(ae), surface != null && h.surface(surface), h.content(content)), {
                children: <C height={s} width={s}/>
            })}/>;
        })();
        const se = badge?.type === "verified";
        const cutouts_1 = (()=>{
            if (badge == null || ae == null || se || ie == null) {
                return cutouts;
            }
            const e = type !== "community" && type !== "announcement";
            const t = Math.round(e ? te * 0.1465 - ae / 2 : -ae / 2);
            const n = {
                type: "addOnCircle",
                position: "bottom-end",
                radius: ie.maskSize / 2,
                offsetX: t,
                offsetY: t
            };
            if (cutouts != null) {
                return [
                    n
                ].concat(cutouts);
            }
            return [
                n
            ];
        })();
        const ce = type === "community" || type === "announcement" ? o("WDSProfilePhotoUtils").SQUIRCLE_SHAPE : "circle";
        const de = customColor ?? o("WDSProfilePhotoUtils").colorTokenMap[color];
        const me = o("WDSProfilePhotoUtils").ICON_SIZE_MAP[te] ?? Math.round(te * 0.45);
        const pe = o("WDSProfilePhotoUtils").INITIALS_FONT_SIZE_MAP[te] ?? Math.round(te * 0.41);
        const _e = o("WDSProfilePhotoUtils").STATUS_RING_SPEC[te];
        const fe = statusRing != null && statusRing.totalCount >= 1 && type !== "community" && type !== "announcement" && o("WDSProfilePhotoUtils").RING_SUPPORTED_SIZES[size] === true && _e != null ? statusRing : undefined;
        const ge = src != null && src !== "";
        const he = o("WDSProfilePhotoRenderingMode").getWDSProfilePhotoRenderingMode() === "maybe-BaseImage" && ge && !loading && (videoSrc == null || videoSrc === "") && type !== "community" && type !== "announcement" && badge == null && fe == null && !(addOns != null && addOns.length) && !(cutouts != null && cutouts.length) && !oe;
        if (he && src != null) {
            return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.base, y.size(te), y.positioned, _.outline), {
                children: u.jsx(r("BaseImage.react"), {
                    alt: isDecorative ? undefined : name,
                    draggable: false,
                    height: te,
                    isDecorative,
                    objectFit: "cover",
                    src,
                    testid: undefined,
                    width: te,
                    xstyle: _.image
                })
            })}/>;
        }
        const totalCount = fe?.totalCount ?? 0;
        const viewedCount = fe?.viewedCount ?? 0;
        const be = fe != null && totalCount > 1;
        const variant = fe?.variant ?? "default";
        const color_1 = variant === "closeFriends" ? viewedCount < totalCount ? o("WDSProfilePhotoUtils").UNVIEWED_CLOSE_FRIENDS_COLOR : o("WDSProfilePhotoUtils").VIEWED_COLOR : viewedCount < totalCount ? o("WDSProfilePhotoUtils").UNVIEWED_COLOR : o("WDSProfilePhotoUtils").VIEWED_COLOR;
        const ring = (()=>{
            if (!(fe == null || _e == null)) {
                if (be) {
                    return {
                        color: "transparent",
                        gap: _e.gap + _e.strokeWidth,
                        thickness: 0
                    };
                }
                return {
                    color: color_1,
                    gap: _e.gap,
                    thickness: _e.strokeWidth
                };
            }
        })();
        const Le = (ring?.gap ?? 0) + (ring?.thickness ?? 0);
        const x = Le;
        const y_1 = Le;
        const Ie = te - 2 * Le;
        const Te = (()=>{
            if (loading) {
                return <foreignObject x={x} y={y_1} width={Ie} height={Ie}><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.icon(de.content)), {
                    children: u.jsx(r("WDSSpinner.react"), {
                        size: me
                    })
                })}/></foreignObject>;
            }
            if (src != null && src !== "") {
                return null;
            }
            if (placeholderIcon != null) {
                return <foreignObject x={x} y={y_1} width={Ie} height={Ie}><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.icon(de.content)), {
                    children: placeholderIcon({
                        height: me,
                        width: me
                    })
                })}/></foreignObject>;
            }
            if (type === "person" && initials != null && initials !== "") {
                return <foreignObject x={x} y={y_1} width={Ie} height={Ie}><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.initials(de.content, pe)), {
                    children: initials
                })}/></foreignObject>;
            }
            const t = o("WDSProfilePhotoUtils").getPlaceholderIcon(type, me);
            if (t == null) {
                return null;
            }
            return <foreignObject x={x} y={y_1} width={Ie} height={Ie}><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.icon(de.content)), {
                children: t
            })}/></foreignObject>;
        })();
        const backgroundFill = ge && !loading ? undefined : de.surface;
        const xe = videoSrc != null && videoSrc !== "" && !J ? <foreignObject x={x} y={y_1} width={Ie} height={Ie}><video className="x1lliihq x5yr21d xl1xv1r xh8yej3" aria-hidden autoPlay disablePictureInPicture loop muted onError={Z} playsInline poster={ge ? src : undefined} src={videoSrc}/></foreignObject> : null;
        const $e = be && _e != null ? u.jsx(r("WDSProfilePhotoSegmentedRing.react"), {
            badgeMaskCx: ae != null && !se ? te - ae / 2 : undefined,
            badgeMaskCy: ae != null && !se ? te - ae / 2 : undefined,
            badgeMaskId: ae != null && ie != null && !se ? `${G}-ring` : undefined,
            badgeMaskR: ie != null && !se ? ie.maskSize / 2 : undefined,
            sizePx: te,
            strokeWidth: _e.strokeWidth,
            totalCount,
            variant,
            viewedCount
        }) : null;
        const Pe = type === "community" || type === "announcement" ? <svg aria-hidden height={te} className="x13vifvy x1o0tod x47corl x10l6tqk" viewBox="0 0 200 200" width={te}>{ae != null && ie != null && !se && <defs><mask id={`${G}-squircle`}><rect fill="white" height="200" width="200"/><circle cx={200 - ae / 2 * (200 / te)} cy={200 - ae / 2 * (200 / te)} fill="black" r={ie.maskSize / 2 * (200 / te)}/></mask></defs>}<path d={o("WDSProfilePhotoUtils").SQUIRCLE_PATH} fill="none" mask={ae != null && ie != null && !se ? `url(#${G}-squircle)` : undefined} stroke={o("WDSProfilePhotoUtils").DECORATIVE_OUTLINE.color} strokeWidth={o("WDSProfilePhotoUtils").DECORATIVE_OUTLINE.thickness} vectorEffect="non-scaling-stroke"/></svg> : null;
        const Ne = `${G}-starburst`;
        const Me = (()=>{
            if (!se || ae == null || ie == null) {
                return null;
            }
            return {
                scale: ae / 24,
                strokeW: ie.offset * 2 * 24 / ae,
                tx: te - ae,
                ty: te - ae
            };
        })();
        const we = fe != null || le != null || Pe != null;
        const Ae = <>{u.jsx(r("BaseProfilePhoto.react"), {
            addOns,
            alt: isDecorative ? undefined : name,
            backgroundFill,
            cutouts: cutouts_1,
            imageUri: !loading && src != null && src !== "" ? src : undefined,
            isDecorative,
            maskedChildren: re ? null : xe ?? Te,
            outline: o("WDSProfilePhotoUtils").DECORATIVE_OUTLINE,
            ring,
            shape: ce,
            size: te,
            testid: undefined
        })}{$e}{Pe}</>;
        const Fe = <>{Me != null && <svg aria-hidden height={0} className="x10l6tqk" width={0}><defs><mask height={te} id={Ne} maskUnits="userSpaceOnUse" width={te} x="0" y="0"><rect fill="white" height={te} width={te}/><g transform={`translate(${Me.tx},${Me.ty}) scale(${Me.scale})`}><path d={o("WDSProfilePhotoUtils").VERIFIED_STARBURST_PATH} fill="black" stroke="black" strokeLinejoin="round" strokeWidth={Me.strokeW}/></g></mask></defs></svg>}{Me != null ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.size(te), y.starburstMask(`url(#${Ne})`)), {
            children: Ae
        })}/> : Ae}</>;
        const Oe = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.base, y.size(te), we && y.positioned), {
            children: [
                Fe,
                le
            ]
        })}/>;
        if (!oe || interaction == null) {
            return Oe;
        }
        const Be = ge ? o("WDSVars.stylex").WDSColors["--WDS-persistent-always-white"] : de.content;
        const We = interaction.tooltipLabel ?? interaction.label;
        const qe = te <= 40 ? o("WDSPressMotionStyles").WDSPressMotionStyles.compact : o("WDSPressMotionStyles").WDSPressMotionStyles.small;
        const Component = r("WDSTooltip.react");
        return <div {...babelHelpers.extends({}, e.props(y.base, y.size(te)), {
            children: <Component disabled={tooltipDisabled} label={We}><button {...babelHelpers.extends({
                "aria-label": interaction.label,
                "data-tab": tabOrder,
                onClick: interaction.onPress,
                onKeyDown: ee,
                type: "button"
            }, e.props(R.pressableWrapper, R.circle, ne && R.squircle, o("WDSPressMotionStyles").WDSPressMotionStyles.pressable, j && qe, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, y.size(te)), {
                onPointerCancel: function() {
                    return K(false);
                },
                onPointerDown: function() {
                    return K(true);
                },
                onPointerLeave: function() {
                    return K(false);
                },
                onPointerUp: function() {
                    return K(false);
                },
                children: [
                    Fe,
                    re && <div {...babelHelpers.extends({
                        "aria-hidden": true
                    }, (e || (e = r("stylex"))).props(R.iconOverlay(Le), ne ? R.squircleClip : R.circleClip, ge && R.hoverFade), {
                        children: [
                            ge && <svg aria-hidden height="100%" className="x13vifvy x1o0tod x47corl x10l6tqk" viewBox={ne ? "0 0 200 200" : `0 0 ${te} ${te}`} width="100%">{ae != null && ie != null && !se && <defs><mask id={`${G}-dimmer`}>{ne ? <><rect fill="white" height="200" width="200"/><circle cx={200 - ae / 2 * (200 / te)} cy={200 - ae / 2 * (200 / te)} fill="black" r={ie.maskSize / 2 * (200 / te)}/></> : <><rect fill="white" height={te} width={te}/><circle cx={te - ae / 2} cy={te - ae / 2} fill="black" r={ie.maskSize / 2}/></>}</mask></defs>}{ne ? <path d={o("WDSProfilePhotoUtils").SQUIRCLE_PATH} fill={o("WDSVars.stylex").WDSVars["--WDS-background-dimmer"]} mask={ae != null && ie != null && !se ? `url(#${G}-dimmer)` : undefined}/> : <circle cx={te / 2} cy={te / 2} fill={o("WDSVars.stylex").WDSVars["--WDS-background-dimmer"]} mask={ae != null && ie != null && !se ? `url(#${G}-dimmer)` : undefined} r={te / 2}/>}</svg>,
                            <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(R.iconContainer, R.iconColor(Be)), {
                                children: u.jsx(r("WDSIconIcAddAPhoto.react"), {
                                    height: me,
                                    width: me
                                })
                            })}/>
                        ]
                    })}/>,
                    le
                ]
            })}/></Component>
        })}/>;
    }
    LComponent.displayName = `${LComponent.name} [from ${i.id}]`;
    l.default = LComponent;
}, 98);