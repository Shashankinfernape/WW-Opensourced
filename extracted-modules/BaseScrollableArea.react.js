__d("BaseScrollableArea.react", [
    "BasePopoverReflowSheetContext",
    "BaseScrollableAreaContext",
    "CometDebounce",
    "CometVisualCompletionAttributes",
    "Locale",
    "UserAgent",
    "gkx",
    "react",
    "react-compiler-runtime",
    "resize-observer-polyfill-deprecated",
    "stylex",
    "useVisibilityObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    const s = [
        "children",
        "contentRef",
        "expanding",
        "forceBrowserDefault",
        "hasScrollChaining",
        "hideScrollbar",
        "horizontal",
        "id",
        "indicatorStyle",
        "keyboardDismissMode",
        "keyboardShouldPersistTaps",
        "nestedScrollEnabled",
        "onScroll",
        "onScrollBottom",
        "onScrollEnd",
        "onScrollTop",
        "persistentScrollbar",
        "role",
        "scrollThumbXStyle",
        "scrollTracePolicy",
        "scrollTrackXStyle",
        "style",
        "tabIndex",
        "testid",
        "vertical",
        "withBottomShadow",
        "withTopShadow",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } = m;
    const C = 16;
    const b = 50;
    const v = {
        default: {
            MsOverflowStyle: "x2atdfe",
            MsScrollChaining: "xb57i2i",
            MsScrollRails: "x1q594ok",
            WebkitOverflowScrolling: "x5lxg6s",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            $$css: true
        },
        expanding: {
            flexBasis: "x1l7klhg",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            minHeight: "x2lwn1j",
            $$css: true
        },
        hideScrollbar: {
            MsOverflowStyle: "x1pq812k",
            scrollbarWidth: "x1rohswg",
            "::-webkit-scrollbar_display": "xfk6m8",
            "::-webkit-scrollbar_height": "x1yqm8si",
            "::-webkit-scrollbar_width": "xjx87ck",
            $$css: true
        },
        horizontalAuto: {
            overflowX: "xw2csxc",
            overscrollBehaviorX: "x7p5m3t",
            $$css: true
        },
        horizontalOverScrollBehaviorAuto: {
            overscrollBehaviorX: null,
            $$css: true
        },
        perspective: {
            perspective: "xx8ngbg",
            perspectiveOrigin: "xwo3gff",
            position: "x1n2onr6",
            transformStyle: "x1oyok0e",
            $$css: true
        },
        perspectiveRTL: {
            perspectiveOrigin: "x1glq8lk",
            $$css: true
        },
        verticalAuto: {
            overflowY: "x1odjw0f",
            overscrollBehaviorY: "x1e4zzel",
            $$css: true
        },
        verticalOverScrollBehaviorAuto: {
            overscrollBehaviorY: null,
            $$css: true
        }
    };
    const S = {
        base: {
            boxSizing: "x9f619",
            display: "x1s85apg",
            insetInlineEnd: "xtijo5x",
            opacity: "xg01cxk",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x135b78x",
            paddingInlineEnd: "x11lfxj5",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            top: "x13vifvy",
            transformOrigin: "x1n4smgl",
            transitionDuration: "x1d8287x",
            transitionProperty: "x19991ni",
            transitionTimingFunction: "xwji4o3",
            width: "x1kky2od",
            $$css: true
        },
        hovered: {
            opacity: "x1hc1fzr",
            transitionDuration: "x1mq3mr6",
            $$css: true
        },
        rtl: {
            transformOrigin: "xyyilfv",
            $$css: true
        }
    };
    const R = {
        base: {
            backgroundColor: "x14nfmen",
            display: "x1s85apg",
            height: "x5yr21d",
            insetInlineEnd: "xtijo5x",
            opacity: "xg01cxk",
            position: "x10l6tqk",
            top: "x13vifvy",
            transitionDuration: "x1wsgiic",
            transitionProperty: "x19991ni",
            transitionTimingFunction: "xwji4o3",
            width: "x1kky2od",
            ":hover_opacity": "x1sd63oq",
            $$css: true
        }
    };
    const L = o("Locale").isRTL();
    function EComponent(t) {
        const n = o("react-compiler-runtime").c(139);
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
        let l;
        let c;
        let m;
        let g;
        let C;
        let b;
        let E;
        let I;
        let onScrollEnd_1;
        let D;
        let N;
        let M;
        let w;
        let A;
        let F;
        let O;
        let B;
        let W;
        let q;
        let U;
        let V;
        let H;
        let G;
        let z;
        if (n[3] !== a) {
            const j = a;
            const { children, contentRef, expanding, forceBrowserDefault, hasScrollChaining, hideScrollbar, horizontal, id, indicatorStyle, keyboardDismissMode, keyboardShouldPersistTaps, nestedScrollEnabled, onScroll, onScrollBottom, onScrollEnd, onScrollTop, persistentScrollbar, role, scrollThumbXStyle, scrollTracePolicy, scrollTrackXStyle, style, tabIndex, testid, vertical, withBottomShadow, withTopShadow, xstyle } = j;
            const Se = babelHelpers.objectWithoutPropertiesLoose(j, s);
            c = children;
            m = contentRef;
            O = expanding;
            B = forceBrowserDefault;
            g = hasScrollChaining;
            W = hideScrollbar;
            C = horizontal;
            b = id;
            E = onScroll;
            I = onScrollBottom;
            onScrollEnd_1 = onScrollEnd;
            D = onScrollTop;
            N = role;
            M = scrollThumbXStyle;
            w = scrollTracePolicy;
            A = scrollTrackXStyle;
            F = style;
            V = tabIndex;
            H = testid;
            G = vertical;
            q = withBottomShadow;
            U = withTopShadow;
            z = xstyle;
            l = Se;
            n[3] = a;
            n[4] = l;
            n[5] = c;
            n[6] = m;
            n[7] = g;
            n[8] = C;
            n[9] = b;
            n[10] = E;
            n[11] = I;
            n[12] = onScrollEnd_1;
            n[13] = D;
            n[14] = N;
            n[15] = M;
            n[16] = w;
            n[17] = A;
            n[18] = F;
            n[19] = O;
            n[20] = B;
            n[21] = W;
            n[22] = q;
            n[23] = U;
            n[24] = V;
            n[25] = H;
            n[26] = G;
            n[27] = z;
        } else {
            l = n[4];
            c = n[5];
            m = n[6];
            g = n[7];
            C = n[8];
            b = n[9];
            E = n[10];
            I = n[11];
            onScrollEnd_1 = n[12];
            D = n[13];
            N = n[14];
            M = n[15];
            w = n[16];
            A = n[17];
            F = n[18];
            O = n[19];
            B = n[20];
            W = n[21];
            q = n[22];
            U = n[23];
            V = n[24];
            H = n[25];
            G = n[26];
            z = n[27];
        }
        const Re = O === undefined ? false : O;
        const Le = B === undefined ? false : B;
        const Ee = W === undefined ? false : W;
        const ke = q === undefined ? false : q;
        const Ie = U === undefined ? false : U;
        let Te = g;
        if (Te == null) {
            Te = r("gkx")("8581");
        }
        let De;
        if (n[28] !== Le || n[29] !== Ee || n[30] !== C || n[31] !== G) {
            De = Le || !G || Ee || C || P();
            n[28] = Le;
            n[29] = Ee;
            n[30] = C;
            n[31] = G;
            n[32] = De;
        } else {
            De = n[32];
        }
        const xe = De;
        const $e = useContext(r("BasePopoverReflowSheetContext"));
        const $e_isReflowSheet = $e.isReflowSheet;
        const Ne = useState(false);
        const Me = Ne[0];
        const we = Ne[1];
        const Ae = useState(false);
        const Fe = Ae[0];
        const Oe = Ae[1];
        const Be = useState(false);
        const We = Be[0];
        const qe = Be[1];
        const Ue = useContext(r("BaseScrollableAreaContext"));
        const VeRef = useRef(null);
        const HeRef = useRef(null);
        const GeRef = useRef(null);
        const zeRef = useRef(null);
        const jeRef = useRef(null);
        const KeRef = useRef(0);
        let Qe;
        let Xe;
        if (n[33] !== m || n[34] !== xe) {
            Qe = function() {
                if (!xe) {
                    const n = HeRef.current;
                    const o = VeRef.current;
                    const a = m?.current ?? o;
                    const i = zeRef.current;
                    const l = GeRef.current;
                    if (!(o == null || a == null || n == null || l == null || i == null)) {
                        let s = 0;
                        let u = 0;
                        const c = function() {
                            i.style.display = "none";
                            l.style.display = "none";
                            const e = n.getBoundingClientRect();
                            const t = a.getBoundingClientRect();
                            const n_scrollHeight = n.scrollHeight;
                            const o_scrollHeight = o.scrollHeight;
                            const a_scrollHeight = a.scrollHeight;
                            const m = o_scrollHeight - a_scrollHeight;
                            const p = m !== 0;
                            const _ = n.clientHeight - m;
                            u = e.top;
                            KeRef.current = p ? a_scrollHeight : n_scrollHeight;
                            const KeRef_current = KeRef.current;
                            s = _ ** 2 / KeRef_current;
                            l.style.height = KeRef_current <= _ ? "0px" : `${s}px`;
                            i.style.height = `${KeRef_current}px`;
                            if (L) {
                                l.style.left = "0px";
                                i.style.left = "0px";
                            } else {
                                l.style.right = "0px";
                                i.style.right = "0px";
                            }
                            const n_scrollTop = n.scrollTop;
                            const h = t.top - e.top + n_scrollTop;
                            let y = 0;
                            if (p) {
                                y = h * -1;
                                i.style.top = `${h}px`;
                                l.style.top = `${h}px`;
                            }
                            const C = (_ - s) / (KeRef_current - _);
                            l.style.transform = [
                                `matrix3d(
          1,0,0,0,
          0,1,0,0,
          0,${y},1,0,
          0,0,0,-1)`,
                                `scale(${1 / C})`,
                                `translateZ(${1 - 1 / C}px)`,
                                "translateZ(-2px)"
                            ].join(" ");
                            l.style.display = "block";
                            i.style.display = KeRef_current <= _ ? "none" : "block";
                        };
                        const d = function(t) {
                            k(t);
                            const t_clientY = t.clientY;
                            const { clientHeight, scrollTop } = n;
                            qe(true);
                            const a = KeRef.current / clientHeight;
                            const l = scrollTop / a;
                            if (t_clientY < u + l || t_clientY > u + l + s) {
                                const c = t_clientY < u + l ? -20 : 20;
                                let d = true;
                                const m = window.setInterval(function() {
                                    if (d) {
                                        n.scrollTo({
                                            top: n.scrollTop + c
                                        });
                                    }
                                }, 16);
                                const p = function(t) {
                                    k(t);
                                    if (m) {
                                        window.clearInterval(m);
                                    }
                                    window.removeEventListener("mouseup", p, true);
                                    i.removeEventListener("mouseenter", _);
                                    i.removeEventListener("mouseleave", f);
                                };
                                var _ = function(t) {
                                    k(t);
                                    d = true;
                                };
                                var f = function(t) {
                                    k(t);
                                    d = false;
                                };
                                window.addEventListener("mouseup", p, true);
                                i.addEventListener("mouseenter", _);
                                i.addEventListener("mouseleave", f);
                                return;
                            }
                            const g = function(r) {
                                k(r);
                                const t = r.clientY - t_clientY;
                                n.scrollTo({
                                    top: scrollTop + t * a
                                });
                            };
                            const h = function(t) {
                                k(t);
                                qe(false);
                                window.removeEventListener("mousemove", g, true);
                                window.removeEventListener("mouseup", h, true);
                            };
                            window.addEventListener("mousemove", g, true);
                            window.addEventListener("mouseup", h, true);
                        };
                        const p = r("CometDebounce")(c, {
                            wait: 100
                        });
                        window.addEventListener("resize", p);
                        i.addEventListener("mousedown", d);
                        const _ = new (r("resize-observer-polyfill-deprecated"))(function(e, t) {
                            return p();
                        });
                        _.observe(o);
                        _.observe(n);
                        return function() {
                            window.removeEventListener("resize", p);
                            i.removeEventListener("mousedown", d);
                            _.disconnect();
                            p.reset();
                        };
                    }
                }
            };
            Xe = [
                m,
                HeRef,
                xe
            ];
            n[33] = m;
            n[34] = xe;
            n[35] = Qe;
            n[36] = Xe;
        } else {
            Qe = n[35];
            Xe = n[36];
        }
        useEffect(Qe, Xe);
        let Ye;
        if (n[37] === Symbol.for("react.memo_cache_sentinel")) {
            Ye = function() {
                we(true);
            };
            n[37] = Ye;
        } else {
            Ye = n[37];
        }
        const Je = Ye;
        let Ze;
        if (n[38] === Symbol.for("react.memo_cache_sentinel")) {
            Ze = function() {
                return we(false);
            };
            n[38] = Ze;
        } else {
            Ze = n[38];
        }
        const et = Ze;
        let tt;
        if (n[39] !== E) {
            tt = function(t) {
                if (E) {
                    E(t);
                }
                Oe(true);
                if (jeRef.current != null && jeRef.current !== 0) {
                    window.clearTimeout(jeRef.current);
                }
                jeRef.current = window.setTimeout(function() {
                    Oe(false);
                }, 1000);
            };
            n[39] = E;
            n[40] = tt;
        } else {
            tt = n[40];
        }
        const onScroll = tt;
        let rt;
        let ot;
        if (n[41] === Symbol.for("react.memo_cache_sentinel")) {
            rt = function() {
                return function() {
                    window.clearTimeout(jeRef.current);
                };
            };
            ot = [];
            n[41] = rt;
            n[42] = ot;
        } else {
            rt = n[41];
            ot = n[42];
        }
        useEffect(rt, ot);
        let at;
        if (n[43] === Symbol.for("react.memo_cache_sentinel")) {
            at = {
                getDOMNode: function() {
                    return HeRef.current;
                }
            };
            n[43] = at;
        } else {
            at = n[43];
        }
        const it = at;
        let lt;
        let st;
        if (n[44] === Symbol.for("react.memo_cache_sentinel")) {
            lt = function() {
                return it;
            };
            st = [
                it
            ];
            n[44] = lt;
            n[45] = st;
        } else {
            lt = n[44];
            st = n[45];
        }
        useImperativeHandle(i, lt, st);
        let ut;
        if (n[46] !== Ue) {
            ut = [].concat(Ue, [
                it
            ]);
            n[46] = Ue;
            n[47] = ut;
        } else {
            ut = n[47];
        }
        const ct = ut;
        let dt;
        if (n[48] === Symbol.for("react.memo_cache_sentinel")) {
            dt = <div className="x78zum5 xdt5ytf x2lah0s x10wjd1d xtijo5x x1o0tod x47corl x7wzq59 x1vjfegm x7itwyc x1nhvcw1 xepu288"><div className="x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x13vifvy"/></div>;
            n[48] = dt;
        } else {
            dt = n[48];
        }
        const mt = dt;
        let pt;
        if (n[49] === Symbol.for("react.memo_cache_sentinel")) {
            pt = <div className="x78zum5 xdt5ytf x2lah0s x10wjd1d xtijo5x x1o0tod x47corl x7wzq59 x1vjfegm x1l3hj4d x3m8hty x13a6bvl x1yztbdb"><div className="x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x1ey2m1c xtjevij"/></div>;
            n[49] = pt;
        } else {
            pt = n[49];
        }
        const _t = pt;
        const ft = N ?? (V === 0 ? "region" : undefined);
        if (xe) {
            let gt;
            if (n[50] !== Re || n[51] !== Te || n[52] !== Ee || n[53] !== C || n[54] !== $e_isReflowSheet || n[55] !== G || n[56] !== z) {
                gt = (u || (u = r("stylex"))).props(v.default, Re && v.expanding, Ee && v.hideScrollbar, C && v.horizontalAuto, C && ($e_isReflowSheet || Te) && v.horizontalOverScrollBehaviorAuto, G && v.verticalAuto, G && ($e_isReflowSheet || Te) && v.verticalOverScrollBehaviorAuto, z);
                n[50] = Re;
                n[51] = Te;
                n[52] = Ee;
                n[53] = C;
                n[54] = $e_isReflowSheet;
                n[55] = G;
                n[56] = z;
                n[57] = gt;
            } else {
                gt = n[57];
            }
            const ht = Ie && mt;
            let yt;
            if (n[58] !== C || n[59] !== G || n[60] !== ke || n[61] !== Ie) {
                yt = ({
                    0: {
                        className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6"
                    },
                    4: {
                        className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np"
                    },
                    2: {
                        className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi"
                    },
                    6: {
                        className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi"
                    },
                    1: {
                        className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 x129vozr"
                    },
                    5: {
                        className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np x129vozr"
                    },
                    3: {
                        className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi x129vozr"
                    },
                    7: {
                        className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi x129vozr"
                    }
                })[!!(C && !G) << 2 | !!Ie << 1 | !!ke << 0];
                n[58] = C;
                n[59] = G;
                n[60] = ke;
                n[61] = Ie;
                n[62] = yt;
            } else {
                yt = n[62];
            }
            let Ct;
            if (n[63] !== D) {
                Ct = D ? <$ onVisible={D} scrollerRef={HeRef}/> : null;
                n[63] = D;
                n[64] = Ct;
            } else {
                Ct = n[64];
            }
            let bt;
            if (n[65] !== I) {
                bt = I ? <X1Component onVisible={I} scrollerRef={HeRef}/> : null;
                n[65] = I;
                n[66] = bt;
            } else {
                bt = n[66];
            }
            let vt;
            if (n[67] !== c || n[68] !== yt || n[69] !== Ct || n[70] !== bt) {
                vt = <div {...babelHelpers.extends({}, yt, {
                    children: [
                        Ct,
                        c,
                        bt
                    ]
                })}/>;
                n[67] = c;
                n[68] = yt;
                n[69] = Ct;
                n[70] = bt;
                n[71] = vt;
            } else {
                vt = n[71];
            }
            const St = ke && _t;
            let Rt;
            if (n[72] !== l || n[73] !== ft || n[74] !== onScroll || n[75] !== b || n[76] !== onScrollEnd_1 || n[77] !== F || n[78] !== gt || n[79] !== ht || n[80] !== vt || n[81] !== St || n[82] !== V || n[83] !== H) {
                Rt = <div {...babelHelpers.extends({}, l, gt, {
                    "data-testid": undefined,
                    id: b,
                    onScroll,
                    onScrollEnd: onScrollEnd_1,
                    ref: HeRef,
                    role: ft,
                    style: F,
                    tabIndex: V,
                    children: [
                        ht,
                        vt,
                        St
                    ]
                })}/>;
                n[72] = l;
                n[73] = ft;
                n[74] = onScroll;
                n[75] = b;
                n[76] = onScrollEnd_1;
                n[77] = F;
                n[78] = gt;
                n[79] = ht;
                n[80] = vt;
                n[81] = St;
                n[82] = V;
                n[83] = H;
                n[84] = Rt;
            } else {
                Rt = n[84];
            }
            let Lt;
            if (n[85] !== ct || n[86] !== Rt) {
                const Component = r("BaseScrollableAreaContext").Provider;
                Lt = <Component value={ct}>{Rt}</Component>;
                n[85] = ct;
                n[86] = Rt;
                n[87] = Lt;
            } else {
                Lt = n[87];
            }
            return Lt;
        }
        let Et;
        if (n[88] !== Re || n[89] !== Te || n[90] !== C || n[91] !== $e_isReflowSheet || n[92] !== G || n[93] !== z) {
            Et = (u || (u = r("stylex"))).props(v.default, v.hideScrollbar, Re && v.expanding, v.perspective, L && v.perspectiveRTL, C && v.horizontalAuto, C && ($e_isReflowSheet || Te) && v.horizontalOverScrollBehaviorAuto, G && v.verticalAuto, G && ($e_isReflowSheet || Te) && v.verticalOverScrollBehaviorAuto, z);
            n[88] = Re;
            n[89] = Te;
            n[90] = C;
            n[91] = $e_isReflowSheet;
            n[92] = G;
            n[93] = z;
            n[94] = Et;
        } else {
            Et = n[94];
        }
        const kt = Ie && mt;
        let It;
        if (n[95] !== C || n[96] !== G || n[97] !== ke || n[98] !== Ie) {
            It = ({
                0: {
                    className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6"
                },
                4: {
                    className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np"
                },
                2: {
                    className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi"
                },
                6: {
                    className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi"
                },
                1: {
                    className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 x129vozr"
                },
                5: {
                    className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np x129vozr"
                },
                3: {
                    className: "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6 xaci4zi x129vozr"
                },
                7: {
                    className: "x78zum5 x1iyjqo2 x1n2onr6 x1q0g3np xaci4zi x129vozr"
                }
            })[!!(C && !G) << 2 | !!Ie << 1 | !!ke << 0];
            n[95] = C;
            n[96] = G;
            n[97] = ke;
            n[98] = Ie;
            n[99] = It;
        } else {
            It = n[99];
        }
        let Tt;
        if (n[100] !== D) {
            Tt = D ? <$ onVisible={D} scrollerRef={HeRef}/> : null;
            n[100] = D;
            n[101] = Tt;
        } else {
            Tt = n[101];
        }
        let Dt;
        if (n[102] !== I) {
            Dt = I ? <X1Component onVisible={I} scrollerRef={HeRef}/> : null;
            n[102] = I;
            n[103] = Dt;
        } else {
            Dt = n[103];
        }
        let xt;
        if (n[104] !== c || n[105] !== It || n[106] !== Tt || n[107] !== Dt) {
            xt = <div {...babelHelpers.extends({}, It, {
                ref: VeRef,
                children: [
                    Tt,
                    c,
                    Dt
                ]
            })}/>;
            n[104] = c;
            n[105] = It;
            n[106] = Tt;
            n[107] = Dt;
            n[108] = xt;
        } else {
            xt = n[108];
        }
        const $t = ke && _t;
        let Pt;
        if (n[109] !== A) {
            Pt = (u || (u = r("stylex"))).props([
                R.base,
                A
            ]);
            n[109] = A;
            n[110] = Pt;
        } else {
            Pt = n[110];
        }
        let Nt;
        if (n[111] !== Pt) {
            Nt = <div {...babelHelpers.extends({}, Pt, r("CometVisualCompletionAttributes").IGNORE, {
                "data-thumb": 1,
                ref: zeRef
            })}/>;
            n[111] = Pt;
            n[112] = Nt;
        } else {
            Nt = n[112];
        }
        let Mt;
        if (n[113] !== Me || n[114] !== We || n[115] !== M || n[116] !== Fe) {
            Mt = (u || (u = r("stylex"))).props([
                S.base,
                L && S.rtl,
                (Me || Fe || We) && S.hovered,
                M
            ]);
            n[113] = Me;
            n[114] = We;
            n[115] = M;
            n[116] = Fe;
            n[117] = Mt;
        } else {
            Mt = n[117];
        }
        let wt;
        if (n[118] === Symbol.for("react.memo_cache_sentinel")) {
            wt = <div className="x1hwfnsy xjwep3j x1t39747 x1wcsgtt x1pczhz8 x5yr21d xh8yej3"/>;
            n[118] = wt;
        } else {
            wt = n[118];
        }
        let At;
        if (n[119] !== Mt) {
            At = <div {...babelHelpers.extends({}, Mt, r("CometVisualCompletionAttributes").IGNORE, {
                "data-thumb": 1,
                ref: GeRef,
                children: wt
            })}/>;
            n[119] = Mt;
            n[120] = At;
        } else {
            At = n[120];
        }
        let Ft;
        if (n[121] !== l || n[122] !== ft || n[123] !== onScroll || n[124] !== b || n[125] !== w || n[126] !== F || n[127] !== Et || n[128] !== kt || n[129] !== xt || n[130] !== $t || n[131] !== Nt || n[132] !== At || n[133] !== V || n[134] !== H) {
            Ft = <div {...babelHelpers.extends({}, l, Et, {
                "data-scrolltracepolicy": w,
                "data-testid": undefined,
                id: b,
                onMouseEnter: Je,
                onMouseLeave: et,
                onScroll,
                ref: HeRef,
                role: ft,
                style: F,
                tabIndex: V,
                children: [
                    kt,
                    xt,
                    $t,
                    Nt,
                    At
                ]
            })}/>;
            n[121] = l;
            n[122] = ft;
            n[123] = onScroll;
            n[124] = b;
            n[125] = w;
            n[126] = F;
            n[127] = Et;
            n[128] = kt;
            n[129] = xt;
            n[130] = $t;
            n[131] = Nt;
            n[132] = At;
            n[133] = V;
            n[134] = H;
            n[135] = Ft;
        } else {
            Ft = n[135];
        }
        let Ot;
        if (n[136] !== ct || n[137] !== Ft) {
            const Component = r("BaseScrollableAreaContext").Provider;
            Ot = <Component value={ct}>{Ft}</Component>;
            n[136] = ct;
            n[137] = Ft;
            n[138] = Ot;
        } else {
            Ot = n[138];
        }
        return Ot;
    }
    var k = (t)=>{
        t.preventDefault();
        t.stopPropagation();
        t.stopImmediatePropagation();
    };
    const I = 1;
    const T = {
        bottom: {
            bottom: "x1ey2m1c",
            $$css: true
        },
        main: {
            height: "xjm9jq1",
            opacity: "xg01cxk",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            width: "x1i1rx1s",
            $$css: true
        },
        top: {
            top: "x13vifvy",
            $$css: true
        }
    };
    function D(e) {
        const t = o("react-compiler-runtime").c(12);
        const { xstyle, onVisible, scrollerRef } = e;
        let l;
        if (t[0] !== scrollerRef) {
            l = function() {
                return scrollerRef.current;
            };
            t[0] = scrollerRef;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = l;
        let c;
        if (t[2] !== s) {
            c = {
                root: s,
                rootMargin: 0
            };
            t[2] = s;
            t[3] = c;
        } else {
            c = t[3];
        }
        let m;
        if (t[4] !== onVisible || t[5] !== c) {
            m = {
                onVisible,
                options: c
            };
            t[4] = onVisible;
            t[5] = c;
            t[6] = m;
        } else {
            m = t[6];
        }
        const p = r("useVisibilityObserver")(m);
        let _;
        if (t[7] !== xstyle) {
            _ = (u || (u = r("stylex"))).props(T.main, xstyle);
            t[7] = xstyle;
            t[8] = _;
        } else {
            _ = t[8];
        }
        let f;
        if (t[9] !== p || t[10] !== _) {
            f = <div {...babelHelpers.extends({}, _, {
                ref: p
            })}/>;
            t[9] = p;
            t[10] = _;
            t[11] = f;
        } else {
            f = t[11];
        }
        return f;
    }
    function X1Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const { onVisible, scrollerRef } = e;
        let a;
        if (t[0] !== onVisible || t[1] !== scrollerRef) {
            a = <D onVisible={onVisible} scrollerRef={scrollerRef} xstyle={T.bottom}/>;
            t[0] = onVisible;
            t[1] = scrollerRef;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function $(e) {
        const t = o("react-compiler-runtime").c(3);
        const { onVisible, scrollerRef } = e;
        let a;
        if (t[0] !== onVisible || t[1] !== scrollerRef) {
            a = <D onVisible={onVisible} scrollerRef={scrollerRef} xstyle={T.top}/>;
            t[0] = onVisible;
            t[1] = scrollerRef;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function P() {
        return r("UserAgent").isPlatform("iOS") || r("UserAgent").isPlatform("Android") || r("UserAgent").isBrowser("Edge") || r("UserAgent").isBrowser("IE") || r("UserAgent").isBrowser("Firefox < 64") || r("gkx")("19588") && r("UserAgent").isBrowser("Chrome >= 142");
    }
    l.default = EComponent;
}, 98);