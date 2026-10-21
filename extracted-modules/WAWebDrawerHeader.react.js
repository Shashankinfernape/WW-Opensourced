__d("WAWebDrawerHeader.react", [
    "fbt",
    "WAWebAdaptiveLayoutContext.react",
    "WAWebFocusTracer",
    "WAWebMenuBar.react",
    "WAWebSpinner.react",
    "WAWebStylesEnv",
    "WAWebTabOrder",
    "WDSIconIcArrowBack.react",
    "WDSIconIcClose.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "cr:23046",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useContext: p, useEffect: _, useMemo: f, useRef: g } = m;
    const h = {
        SMALL: "small",
        POPUP: "popup",
        OFFSET: "offset",
        TAB: "tab",
        FLYOUT: "flyout",
        MODAL: "modal",
        SUBHEADER: "subheader"
    };
    const y = {
        titleBodyRefreshed: {
            flexGrow: "x1iyjqo2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            overflowWrap: "x1mzt3pk",
            $$css: true
        },
        titleBodyDrawerSmallRefreshed: {
            fontSize: "x6prxxf",
            lineHeight: "x1o2sk6j",
            $$css: true
        },
        fontSmoothing: {
            "-webkit-font-smoothing": "xvmahel",
            "-moz-osx-font-smoothing": "xlh3980",
            $$css: true
        },
        fontWeight500: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        headerPwa: {
            "@media (display-mode: standalone)_borderStartStartRadius": "x570efc",
            $$css: true
        },
        headerWindows: {
            borderStartStartRadius: "xyi3aci",
            $$css: true
        },
        headerSmallRefreshed: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flex: "x1okw0bk",
            alignItems: "x6s0dn4",
            height: "x1peatla",
            color: "x14ug900",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        headerOffset: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flex: "x1okw0bk",
            alignItems: "x6s0dn4",
            height: "xdj0cbh",
            color: "x14ug900",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        headerPopup: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flex: "x1okw0bk",
            alignItems: "x6s0dn4",
            height: "xdiz9cm",
            color: "x14ug900",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1fqc64z",
            borderStartEndRadius: "xs83zq4",
            $$css: true
        },
        subHeaderHeader: {
            height: "xzpcc6d",
            $$css: true
        },
        focusableTitle: {
            outline: "x1a2a7pz",
            $$css: true
        },
        marginStart8: {
            marginInlineStart: "x13fj5qh",
            $$css: true
        },
        paddingAll10: {
            paddingTop: "x889kno",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        },
        paddingHoriz20: {
            paddingInlineStart: "x106a9eq",
            paddingInlineEnd: "x1xnnf8n",
            $$css: true
        },
        paddingVert0Start10End20: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "x1xnnf8n",
            $$css: true
        },
        paddingFlyoutOrModal: {
            paddingTop: "x1d0ri9u",
            paddingBottom: "x1ug4tga",
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "xziim83",
            $$css: true
        }
    };
    const C = 500;
    const b = (n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) === true;
    function v(t) {
        const n = o("react-compiler-runtime").c(79);
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
        const { children: c, focusBackOrCancel: m, focusTitle: f, menu: v, onBack: S, onCancel: R, rightActionElement: L, spinner: E, title: k, type: I } = l;
        const T = m === void 0 ? false : m;
        const D = f === void 0 ? false : f;
        const x = L === void 0 ? null : L;
        const $ = E === void 0 ? false : E;
        const P = g(null);
        const N = g(null);
        let M;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            M = function() {
                r("WAWebFocusTracer").focus(P.current);
            };
            n[3] = M;
        } else {
            M = n[3];
        }
        const w = o("useWAWebTimeout").useManualTimeout(M);
        const A = w[0];
        let F;
        let O;
        if (n[4] !== T || n[5] !== A) {
            F = function() {
                if (T === true && P.current != null) {
                    A(C);
                }
            };
            O = [
                T,
                A
            ];
            n[4] = T;
            n[5] = A;
            n[6] = F;
            n[7] = O;
        } else {
            F = n[6];
            O = n[7];
        }
        _(F, O);
        let B;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            B = function() {
                r("WAWebFocusTracer").focus(N.current);
            };
            n[8] = B;
        } else {
            B = n[8];
        }
        const W = o("useWAWebTimeout").useManualTimeout(B);
        const q = W[0];
        let U;
        let V;
        if (n[9] !== D || n[10] !== q) {
            V = function() {
                if (D === true && N.current != null) {
                    q(C);
                }
            };
            U = [
                D,
                q
            ];
            n[9] = D;
            n[10] = q;
            n[11] = U;
            n[12] = V;
        } else {
            U = n[11];
            V = n[12];
        }
        _(V, U);
        let H;
        e: {
            if (R && I !== h.MODAL || !S) {
                H = void 0;
                break e;
            }
            let G;
            if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
                G = s._("Back");
                n[13] = G;
            } else {
                G = n[13];
            }
            let z;
            if (n[14] !== S) {
                const Component = r("WDSMenuBarItem.react");
                z = <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER} testid="btn-closer-drawer" onClick={S} title={G} ref={P} icon={r("WDSIconIcArrowBack.react")}/>;
                n[14] = S;
                n[15] = z;
            } else {
                z = n[15];
            }
            H = z;
        }
        const j = H;
        const K = p(r("WAWebAdaptiveLayoutContext.react"));
        const Q = K.mode;
        let X;
        e: {
            if (!R) {
                X = void 0;
                break e;
            }
            let Y;
            if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
                Y = s._("Close");
                n[16] = Y;
            } else {
                Y = n[16];
            }
            const J = r(Q === "wide" ? "WDSIconIcClose.react" : "WDSIconIcArrowBack.react");
            let Z;
            if (n[17] !== R || n[18] !== J) {
                const Component = r("WDSMenuBarItem.react");
                Z = <Component testid="btn-closer-drawer" tabOrder={o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER} onClick={R} title={Y} ref={P} icon={J}/>;
                n[17] = R;
                n[18] = J;
                n[19] = Z;
            } else {
                Z = n[19];
            }
            X = Z;
        }
        const ee = X;
        let te;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            te = [
                h.SMALL,
                h.TAB,
                h.SUBHEADER
            ];
            n[20] = te;
        } else {
            te = n[20];
        }
        const ne = te.includes(I);
        let re;
        if (n[21] !== ne || n[22] !== v) {
            const Component = o("WAWebMenuBar.react").MenuBar;
            re = v != null ? <span className="x1okw0bk"><Component key="drawer-header" theme={ne ? null : "inverse"}>{v}</Component></span> : null;
            n[21] = ne;
            n[22] = v;
            n[23] = re;
        } else {
            re = n[23];
        }
        const oe = re;
        const ae = I === h.OFFSET || I === h.POPUP;
        const ie = k !== "" && k != null;
        let le;
        if (n[24] !== c || n[25] !== ie) {
            le = ie && c != null ? <div className="x78zum5 x1okw0bk x6s0dn4 xdwrcjd">{c}</div> : null;
            n[24] = c;
            n[25] = ie;
            n[26] = le;
        } else {
            le = n[26];
        }
        const se = le;
        let ue;
        e: {
            if (I === h.TAB || I === h.SUBHEADER) {
                ue = null;
                break e;
            }
            let ce;
            if (n[27] !== ae) {
                ce = ({
                    0: {
                        className: "x1okw0bk"
                    },
                    1: {
                        className: "x1okw0bk x14qfxbe x1ks1olk"
                    }
                })[!!ae << 0];
                n[27] = ae;
                n[28] = ce;
            } else {
                ce = n[28];
            }
            const de = I !== h.MODAL && ee;
            let me;
            if (n[29] !== j || n[30] !== ce || n[31] !== de) {
                me = <div {...babelHelpers.extends({}, ce, {
                    children: [
                        j,
                        de
                    ]
                })}/>;
                n[29] = j;
                n[30] = ce;
                n[31] = de;
                n[32] = me;
            } else {
                me = n[32];
            }
            ue = me;
        }
        const pe = ue;
        let _e;
        e: {
            if (x != null) {
                _e = x;
                break e;
            }
            if (I !== h.MODAL) {
                _e = null;
                break e;
            }
            let fe;
            if (n[33] === Symbol.for("react.memo_cache_sentinel")) {
                fe = {
                    className: "x1okw0bk xpqajaz xvy4d1p"
                };
                n[33] = fe;
            } else {
                fe = n[33];
            }
            let ge;
            if (n[34] !== ee) {
                ge = <div {...babelHelpers.extends({}, fe, {
                    children: ee
                })}/>;
                n[34] = ee;
                n[35] = ge;
            } else {
                ge = n[35];
            }
            _e = ge;
        }
        const he = _e;
        const ye = I === h.FLYOUT || I === h.MODAL;
        let Ce;
        if (n[36] !== ae || n[37] !== ye || n[38] !== ne || n[39] !== I) {
            Ce = (u || (u = r("stylex")))(b && y.headerWindows, y.headerPwa, ne && [
                y.headerSmallRefreshed,
                y.paddingAll10
            ], ae && [
                y.headerOffset,
                y.paddingVert0Start10End20
            ], I === h.POPUP && [
                y.headerPopup,
                y.paddingVert0Start10End20
            ], I === h.TAB && y.paddingHoriz20, I === h.SUBHEADER && [
                y.paddingHoriz20,
                y.subHeaderHeader
            ], ye && y.paddingFlyoutOrModal);
            n[36] = ae;
            n[37] = ye;
            n[38] = ne;
            n[39] = I;
            n[40] = Ce;
        } else {
            Ce = n[40];
        }
        const be = Ce;
        let ve;
        if (n[41] !== ye || n[42] !== I) {
            ve = ({
                0: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl",
                2: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xo1l8bm x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl",
                1: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl x1603h9y x1s688f",
                3: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl x1603h9y x1s688f"
            })[(I === h.SMALL) << 1 | !!ye << 0];
            n[41] = ye;
            n[42] = I;
            n[43] = ve;
        } else {
            ve = n[43];
        }
        const Se = ve;
        const Re = I === h.SMALL && y.titleBodyDrawerSmallRefreshed;
        const Le = ae && y.fontWeight500;
        const Ee = ae && o("WAWebStylesEnv").isOSMac && y.fontSmoothing;
        const ke = D && y.focusableTitle;
        let Ie;
        let Te;
        let De;
        let xe;
        let $e;
        if (n[44] !== c || n[45] !== D || n[46] !== be || n[47] !== ie || n[48] !== a.testid || n[49] !== i || n[50] !== $ || n[51] !== Re || n[52] !== Le || n[53] !== Ee || n[54] !== ke || n[55] !== k || n[56] !== Se || n[57] !== pe || n[58] !== I) {
            const Ne = [
                y.titleBodyRefreshed,
                Re,
                false,
                Le,
                Ee,
                ke
            ];
            const Me = ie ? k : c;
            let we;
            if (n[64] !== $ || n[65] !== Me || n[66] !== I) {
                const Component = r("WDSText.react");
                const Component_1 = r("WDSText.react");
                const Component_2 = r("WDSText.react");
                we = I === h.TAB ? <Component type="Headline2" maxLines={1} isSemanticHeading colorName="contentDefault">{Me}</Component> : I === h.SUBHEADER ? <Component_1 type="Body1Emphasized" maxLines={1} isSemanticHeading colorName="contentDefault">{Me}</Component_1> : <><Component_2 type="Body1" maxLines={1} isSemanticHeading xstyle={y.marginStart8} colorName="contentDefault">{Me}</Component_2>{$ ? <span className="x13fj5qh">{d.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 16
                })}</span> : null}</>;
                n[64] = $;
                n[65] = Me;
                n[66] = I;
                n[67] = we;
            } else {
                we = n[67];
            }
            const Ae = we;
            xe = i;
            $e = be;
            Ie = Se;
            Te = pe;
            De = Me != null && <div {...babelHelpers.extends({
                "data-testid": a.testid ?? "drawer-title-body",
                ref: N,
                tabIndex: D ? -1 : void 0
            }, (u || (u = r("stylex"))).props(Ne), {
                children: Ae
            })}/>;
            n[44] = c;
            n[45] = D;
            n[46] = be;
            n[47] = ie;
            n[48] = a.testid;
            n[49] = i;
            n[50] = $;
            n[51] = Re;
            n[52] = Le;
            n[53] = Ee;
            n[54] = ke;
            n[55] = k;
            n[56] = Se;
            n[57] = pe;
            n[58] = I;
            n[59] = Ie;
            n[60] = Te;
            n[61] = De;
            n[62] = xe;
            n[63] = $e;
        } else {
            Ie = n[59];
            Te = n[60];
            De = n[61];
            xe = n[62];
            $e = n[63];
        }
        let Fe;
        if (n[68] !== se || n[69] !== oe || n[70] !== Ie || n[71] !== Te || n[72] !== De || n[73] !== he) {
            Fe = <div className={Ie}>{Te}{De}{se}{oe}{he}</div>;
            n[68] = se;
            n[69] = oe;
            n[70] = Ie;
            n[71] = Te;
            n[72] = De;
            n[73] = he;
            n[74] = Fe;
        } else {
            Fe = n[74];
        }
        let Oe;
        if (n[75] !== xe || n[76] !== $e || n[77] !== Fe) {
            Oe = <header ref={xe} className={$e}>{Fe}</header>;
            n[75] = xe;
            n[76] = $e;
            n[77] = Fe;
            n[78] = Oe;
        } else {
            Oe = n[78];
        }
        return Oe;
    }
    l.DRAWER_HEADER_TYPE = h;
    l.DrawerHeader = v;
}, 226);