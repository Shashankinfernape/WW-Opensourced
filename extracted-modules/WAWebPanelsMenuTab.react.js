__d("WAWebPanelsMenuTab.react", [
    "WAWebFocusTracer",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef } = c;
    const p = {
        CAROUSEL: "CAROUSEL",
        CAROUSEL_END: "CAROUSEL_END",
        MENU: "MENU",
        NONE: "NONE"
    };
    const _ = {
        tab: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            height: "xgzjj13",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            boxSizing: "x9f619",
            $$css: true
        },
        menu: {
            boxSizing: "x9f619",
            flex: "x98rzlu",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1uc92m",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x181vq82",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1nxh6w3 x324065",
            fontWeight: "xk50ysn",
            lineHeight: "x17fgdl5",
            color: "xhslqc4",
            textTransform: "xtvhhri",
            $$css: true
        },
        menuHover: {
            ":hover_color": "xxxijta",
            $$css: true
        },
        carousel: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            opacity: "x1hc1fzr",
            transition: "x17e1izs",
            $$css: true
        },
        carouselEnd: {
            opacity: "xg01cxk",
            transition: "xktt2wv",
            $$css: true
        },
        selected: {
            color: "x14ug900",
            $$css: true
        }
    };
    function useF(t) {
        const n = o("react-compiler-runtime").c(28);
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
        const { children, role, selected, showFocusIndicator, testid, theme, title } = l;
        const bRef = useRef();
        let v;
        if (n[3] !== a) {
            v = function(t) {
                bRef.current = t;
                a.onRef?.(t);
            };
            n[3] = a;
            n[4] = v;
        } else {
            v = n[4];
        }
        const S = v;
        let R;
        if (n[5] !== a) {
            R = function(t) {
                a.onClick?.(a.sectionId, t);
            };
            n[5] = a;
            n[6] = R;
        } else {
            R = n[6];
        }
        const L = R;
        let E;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                if (document.activeElement) {
                    return bRef.current === document.activeElement;
                }
                return false;
            };
            n[7] = E;
        } else {
            E = n[7];
        }
        const k = E;
        let I;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = function() {
                if (bRef != null && bRef.current) {
                    if (!k()) {
                        r("WAWebFocusTracer").focus(bRef.current);
                    }
                }
            };
            n[8] = I;
        } else {
            I = n[8];
        }
        const T = I;
        let D;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            D = function() {
                return {
                    hasFocus: k,
                    focus: T
                };
            };
            n[9] = D;
        } else {
            D = n[9];
        }
        useImperativeHandle(i, D);
        let x;
        if (n[10] !== testid || n[11] !== title) {
            x = {};
            if (testid != null) {
                x.testid = testid;
            }
            if (title != null) {
                x.title = title;
            }
            n[10] = testid;
            n[11] = title;
            n[12] = x;
        } else {
            x = n[12];
        }
        const $ = theme === p.MENU ? _.menu : null;
        const P = theme === p.MENU && selected !== true ? _.menuHover : null;
        const N = theme === p.CAROUSEL || theme === p.CAROUSEL_END ? _.carousel : null;
        const M = theme === p.CAROUSEL_END ? _.carouselEnd : null;
        const w = selected === true ? _.selected : null;
        const A = showFocusIndicator === true ? o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner : null;
        let F;
        if (n[13] !== w || n[14] !== A || n[15] !== $ || n[16] !== P || n[17] !== N || n[18] !== M) {
            F = [
                _.tab,
                $,
                P,
                N,
                M,
                w,
                A
            ];
            n[13] = w;
            n[14] = A;
            n[15] = $;
            n[16] = P;
            n[17] = N;
            n[18] = M;
            n[19] = F;
        } else {
            F = n[19];
        }
        const O = selected ?? false;
        let B;
        if (n[20] !== children || n[21] !== L || n[22] !== x || n[23] !== role || n[24] !== S || n[25] !== F || n[26] !== O) {
            B = u.jsx(r("WAWebUnstyledButton.react"), babelHelpers.extends({
                role,
                ref: S,
                xstyle: F,
                onClick: L,
                tabIndex: 0,
                "aria-current": O
            }, x, {
                children
            }));
            n[20] = children;
            n[21] = L;
            n[22] = x;
            n[23] = role;
            n[24] = S;
            n[25] = F;
            n[26] = O;
            n[27] = B;
        } else {
            B = n[27];
        }
        return B;
    }
    l.THEMES = p;
    l.MenuTab = useF;
}, 98);