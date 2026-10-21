__d("WAWebProductCatalogProductThumb.react", [
    "WAWebMediaDataGetters",
    "WAWebMediaTypes",
    "WDSIconIcStoreFilled.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useHoverState",
    "useWAWebMediaDataValues",
    "useWAWebRenderCallbacks"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useMemo, useRef } = d;
    const _ = [
        "list",
        "cart-list"
    ];
    const f = {
        mediaCanvas: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            zIndex: "x1vjfegm",
            boxSizing: "x9f619",
            width: "xh8yej3",
            height: "x5yr21d",
            backgroundPosition: "x1xsqp64",
            backgroundSize: "x18d0r48",
            borderStartStartRadius: "x2yqj0j",
            borderStartEndRadius: "x1u1eq46",
            borderEndEndRadius: "x1fxmhz6",
            borderEndStartRadius: "xr2wkf5",
            transitionProperty: "x11xpdln",
            transitionDuration: "xktcsoq",
            transitionTimingFunction: "x1wwv7g1",
            transform: "x1c071of",
            $$css: true
        },
        mediaCanvasClickable: {
            cursor: "x1ypdohk",
            $$css: true
        },
        squareThumb: {
            width: "x1useyqa",
            height: "xsdox4t",
            alignSelf: "xamitd3",
            $$css: true
        },
        squareThumbMediaCanvas: {
            borderStartStartRadius: "x1p9lm14",
            borderStartEndRadius: "xbmvzin",
            borderEndEndRadius: "x1t5tj8o",
            borderEndStartRadius: "x17do96b",
            boxShadow: "xuh0odg",
            $$css: true
        },
        placeholder: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            color: "x7nlr4h",
            backgroundColor: "x16kknjp",
            $$css: true
        },
        listWrapper: {
            position: "x1n2onr6",
            marginTop: "x1380le5",
            marginInlineEnd: "x1g6eq07",
            marginBottom: "xefnzgg",
            marginInlineStart: "x1bc76pt",
            $$css: true
        },
        cartListWrapper: {
            position: "x1n2onr6",
            $$css: true
        },
        cartList: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            height: "xy75621",
            width: "xni59qk",
            $$css: true
        },
        list: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            width: "x1n2fh4s",
            $$css: true
        },
        canvasComponent: {
            position: "x1n2onr6",
            width: "xa1il55",
            "::before_display": "xsyprtt",
            "::before_paddingTop": "xkhf6oj",
            "::before_content": "x10tli2e",
            $$css: true
        },
        canvasComponentLargeGallerySpacing: {
            width: "x1anfit2",
            marginBottom: "x14owe82",
            $$css: true
        },
        viewerFlow: {
            position: "x1n2onr6",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x9whnou",
            minWidth: "xa06r8k",
            maxWidth: "xr6zewm",
            height: "xuzvuw4",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            cursor: "x1ypdohk",
            transitionProperty: "x11xpdln",
            transitionDuration: "x1k2tvsc",
            transitionTimingFunction: "x9lcvmn",
            "::before_content": "xnahlnb",
            $$css: true
        },
        viewerFlowHoverInactive: {
            outline: "x7aqg34",
            $$css: true
        },
        active: {
            borderTopWidth: "xl8et2f",
            borderInlineEndWidth: "xuc0g9m",
            borderBottomWidth: "x1dmim90",
            borderInlineStartWidth: "xs4xcjr",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            transform: "xd1alts",
            $$css: true
        }
    };
    function G10(e) {
        const t = o("react-compiler-runtime").c(8);
        const { onClick, theme, xstyle } = e;
        let l;
        if (t[0] !== onClick || t[1] !== theme || t[2] !== xstyle) {
            l = (s || (s = r("stylex"))).props(f.mediaCanvas, (theme === "squareThumb" || theme === "orderSquareThumb") && f.squareThumbMediaCanvas, f.placeholder, !!onClick && f.mediaCanvasClickable, xstyle);
            t[0] = onClick;
            t[1] = theme;
            t[2] = xstyle;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            u = c.jsx(r("WDSIconIcStoreFilled.react"), {
                width: 50,
                height: 50
            });
            t[4] = u;
        } else {
            u = t[4];
        }
        let d;
        if (t[5] !== onClick || t[6] !== l) {
            d = <div {...babelHelpers.extends({}, l, {
                onClick,
                children: u
            })}/>;
            t[5] = onClick;
            t[6] = l;
            t[7] = d;
        } else {
            d = t[7];
        }
        return d;
    }
    function h(t) {
        const n = o("react-compiler-runtime").c(47);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { active, badge, imgRef, onClick, overlayContent, theme } = l;
        const bRef = useRef(null);
        let v;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            let S;
            v = [
                (S = o("WAWebMediaDataGetters")).getMediaStage,
                S.getMediaBlob,
                S.getRenderableUrl,
                S.getPreview
            ];
            n[3] = v;
        } else {
            v = n[3];
        }
        const R = o("useWAWebMediaDataValues").useMediaDataValues(a.mediaData, v);
        const L = R[0];
        const E = R[2];
        const k = r("useHoverState")();
        const { isHovered, onMouseEnter, onMouseLeave } = k;
        let x;
        if (n[4] !== imgRef) {
            x = {
                onMount: function() {
                    imgRef?.(bRef.current);
                },
                onUnmount: function() {
                    imgRef?.(null);
                }
            };
            n[4] = imgRef;
            n[5] = x;
        } else {
            x = n[5];
        }
        r("useWAWebRenderCallbacks")(x);
        let $;
        e: {
            if (L === o("WAWebMediaTypes").MediaDataStage.RESOLVED && overlayContent != null) {
                let P;
                if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
                    P = {
                        className: "x10l6tqk x13vifvy x1o0tod xupqr0c x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x1f6kntn x1xcyms6 x2b8uid xtvhhri x47corl x1y1tjmw x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5"
                    };
                    n[6] = P;
                } else {
                    P = n[6];
                }
                let N;
                if (n[7] !== overlayContent) {
                    N = <div {...babelHelpers.extends({}, P, {
                        children: overlayContent
                    })}/>;
                    n[7] = overlayContent;
                    n[8] = N;
                } else {
                    N = n[8];
                }
                $ = N;
                break e;
            }
            $ = null;
        }
        const M = $;
        let w;
        e: {
            if (L === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING) {
                w = null;
                break e;
            }
            if (L === o("WAWebMediaTypes").MediaDataStage.PREPARING) {
                let A;
                if (n[9] !== a.onClick || n[10] !== a.xstyle || n[11] !== theme) {
                    A = <G10 xstyle={a.xstyle} onClick={a.onClick} theme={theme}/>;
                    n[9] = a.onClick;
                    n[10] = a.xstyle;
                    n[11] = theme;
                    n[12] = A;
                } else {
                    A = n[12];
                }
                w = A;
                break e;
            }
            let F;
            if (n[13] !== onClick || n[14] !== theme) {
                F = ({
                    0: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5 x11xpdln xktcsoq x1wwv7g1 x1c071of",
                    2: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x11xpdln xktcsoq x1wwv7g1 x1c071of x1p9lm14 xbmvzin x1t5tj8o x17do96b xuh0odg",
                    1: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5 x11xpdln xktcsoq x1wwv7g1 x1c071of x1ypdohk",
                    3: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x11xpdln xktcsoq x1wwv7g1 x1c071of x1p9lm14 xbmvzin x1t5tj8o x17do96b xuh0odg x1ypdohk"
                })[(theme === "squareThumb" || theme === "orderSquareThumb") << 1 | !!onClick << 0];
                n[13] = onClick;
                n[14] = theme;
                n[15] = F;
            } else {
                F = n[15];
            }
            const backgroundImage = `url(${E})`;
            let B;
            if (n[16] !== backgroundImage) {
                B = {
                    backgroundImage
                };
                n[16] = backgroundImage;
                n[17] = B;
            } else {
                B = n[17];
            }
            let W;
            if (n[18] !== onClick || n[19] !== F || n[20] !== B) {
                W = <div className={F} style={B} onClick={onClick} ref={bRef}/>;
                n[18] = onClick;
                n[19] = F;
                n[20] = B;
                n[21] = W;
            } else {
                W = n[21];
            }
            w = W;
        }
        const q = w;
        let U;
        if (n[22] !== theme) {
            U = theme != null && _.includes(theme);
            n[22] = theme;
            n[23] = U;
        } else {
            U = n[23];
        }
        const V = U;
        let H;
        if (n[24] !== active || n[25] !== isHovered || n[26] !== V || n[27] !== a.xstyle || n[28] !== theme) {
            H = (s || (s = r("stylex")))(!V && [
                f.canvasComponent,
                o("WDSMargins.stylex").wdsMargins.marginEnd8,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ], theme === "largeGallerySpacing" && [
                f.canvasComponentLargeGallerySpacing,
                o("WDSMargins.stylex").wdsMargins.marginEnd0
            ], theme === "list" && f.list, theme === "cart-list" && f.cartList, theme === "viewerFlow" && [
                f.viewerFlow,
                o("WDSMargins.stylex").wdsMargins.marginEnd8,
                o("WDSMargins.stylex").wdsMargins.marginBottom0,
                o("WDSMargins.stylex").wdsMargins.marginStart0
            ], theme === "viewerFlow" && isHovered && active !== true && f.viewerFlowHoverInactive, theme === "squareThumb" && [
                f.squareThumb,
                o("WDSMargins.stylex").wdsMargins.marginEnd12,
                o("WDSMargins.stylex").wdsMargins.marginBottom0
            ], theme === "orderSquareThumb" && [
                f.squareThumb,
                o("WDSMargins.stylex").wdsMargins.margin0
            ], active === true && f.active, a.xstyle);
            n[24] = active;
            n[25] = isHovered;
            n[26] = V;
            n[27] = a.xstyle;
            n[28] = theme;
            n[29] = H;
        } else {
            H = n[29];
        }
        const G = H;
        if (a.large) {
            let z;
            if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
                z = {
                    className: "x1n2onr6 x4pkz1m"
                };
                n[30] = z;
            } else {
                z = n[30];
            }
            let j;
            if (n[31] !== q) {
                j = <div {...babelHelpers.extends({}, z, {
                    children: q
                })}/>;
                n[31] = q;
                n[32] = j;
            } else {
                j = n[32];
            }
            return j;
        }
        let K;
        if (n[33] === Symbol.for("react.memo_cache_sentinel")) {
            K = <div className="x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl xyiheie xeey69f x8li2gs xc363f1 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd xnje7ou xktcsoq x1wwv7g1"/>;
            n[33] = K;
        } else {
            K = n[33];
        }
        let Q;
        if (n[34] !== badge || n[35] !== G || n[36] !== q || n[37] !== onMouseEnter || n[38] !== onMouseLeave || n[39] !== M || n[40] !== i) {
            Q = <div ref={i} className={G} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{K}{q}{M}{badge}</div>;
            n[34] = badge;
            n[35] = G;
            n[36] = q;
            n[37] = onMouseEnter;
            n[38] = onMouseLeave;
            n[39] = M;
            n[40] = i;
            n[41] = Q;
        } else {
            Q = n[41];
        }
        const X = Q;
        if (V) {
            let Y;
            if (n[42] !== theme) {
                Y = (s || (s = r("stylex"))).props(f.listWrapper, theme === "cart-list" && [
                    f.cartListWrapper,
                    o("WDSMargins.stylex").wdsMargins.margin16
                ]);
                n[42] = theme;
                n[43] = Y;
            } else {
                Y = n[43];
            }
            let J;
            if (n[44] !== Y || n[45] !== X) {
                J = <div {...babelHelpers.extends({}, Y, {
                    children: X
                })}/>;
                n[44] = Y;
                n[45] = X;
                n[46] = J;
            } else {
                J = n[46];
            }
            return J;
        }
        return X;
    }
    l.ProductThumbPlaceholder = G10;
    l.ProductThumb = h;
}, 98);