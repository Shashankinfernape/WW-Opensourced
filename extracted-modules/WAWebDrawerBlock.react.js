__d("WAWebDrawerBlock.react", [
    "WAWebStylesEnv",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebFocusState",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        containerSeparatorBorder: {
            borderTopWidth: "x178xt8z x1g31smg",
            borderTopStyle: "x13fuv20 x1d9v4yf",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        block: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            height: "xng8ra",
            paddingInlineEnd: "x5zjp28",
            $$css: true
        },
        blockMultiline: {
            height: "xt7dq6l",
            $$css: true
        },
        main: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "xdl72j9",
            marginTop: "x1rdy4ex",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        mainMultiline: {
            paddingTop: "x134lwj9",
            paddingBottom: "x1i2zvha",
            whiteSpace: "xeaf4i8",
            $$css: true
        },
        mainMultilineRefreshed: {
            whiteSpace: "xeaf4i8",
            $$css: true
        },
        mainMac: {
            marginTop: "xdj266r",
            $$css: true
        },
        mainRestrictSpacing: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        active: {
            backgroundColor: "x4wrhlh",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(33);
        const { ariaLabel, blockXstyle, children, focusable, isRefresh, multiline, onClick, restrictSpacing, separator, side, tabOrder, testid, xstyle } = t;
        const b = isRefresh === undefined ? false : isRefresh;
        const v = r("useWAWebStaticButtonA11y")(onClick);
        const S = v[0];
        const R = v[1];
        const L = r("useWAWebFocusState")();
        const E = L[0];
        const k = L[1];
        const I = r("useMergeRefs")(S, E);
        let T;
        if (n[0] !== side) {
            T = side != null ? <div className="x1c4vz4f x2lah0s xdl72j9 x1bc76pt">{side}</div> : null;
            n[0] = side;
            n[1] = T;
        } else {
            T = n[1];
        }
        const D = T;
        const x = separator ?? true;
        const $ = onClick ? "button" : null;
        const P = onClick || focusable === true ? 0 : -1;
        let N;
        if (n[2] !== R || n[3] !== onClick || n[4] !== $ || n[5] !== P) {
            N = babelHelpers.extends({}, R, {
                onClick,
                role: $,
                tabIndex: P
            });
            n[2] = R;
            n[3] = onClick;
            n[4] = $;
            n[5] = P;
            n[6] = N;
        } else {
            N = n[6];
        }
        const M = N;
        const w = testid ?? (x ? "container_with_separator" : "container");
        let A;
        if (n[7] !== k || n[8] !== x || n[9] !== xstyle) {
            A = (e || (e = r("stylex"))).props(c.container, xstyle, x && c.containerSeparatorBorder, k && c.active);
            n[7] = k;
            n[8] = x;
            n[9] = xstyle;
            n[10] = A;
        } else {
            A = n[10];
        }
        let F;
        if (n[11] !== blockXstyle || n[12] !== multiline) {
            F = (e || (e = r("stylex"))).props(c.block, blockXstyle, multiline && c.blockMultiline);
            n[11] = blockXstyle;
            n[12] = multiline;
            n[13] = F;
        } else {
            F = n[13];
        }
        let O;
        if (n[14] !== b || n[15] !== multiline || n[16] !== restrictSpacing) {
            O = (e || (e = r("stylex"))).props(c.main, multiline && (b ? [
                c.mainMultilineRefreshed,
                o("WDSPaddings.stylex").wdsPaddings.padding0
            ] : c.mainMultiline), restrictSpacing && c.mainRestrictSpacing, o("WAWebStylesEnv").isOSMac && c.mainMac);
            n[14] = b;
            n[15] = multiline;
            n[16] = restrictSpacing;
            n[17] = O;
        } else {
            O = n[17];
        }
        let B;
        if (n[18] !== children || n[19] !== O) {
            B = <div {...babelHelpers.extends({}, O, {
                children
            })}/>;
            n[18] = children;
            n[19] = O;
            n[20] = B;
        } else {
            B = n[20];
        }
        let W;
        if (n[21] !== D || n[22] !== F || n[23] !== B) {
            W = <div {...babelHelpers.extends({}, F, {
                children: [
                    B,
                    D
                ]
            })}/>;
            n[21] = D;
            n[22] = F;
            n[23] = B;
            n[24] = W;
        } else {
            W = n[24];
        }
        let q;
        if (n[25] !== ariaLabel || n[26] !== M || n[27] !== I || n[28] !== W || n[29] !== A || n[30] !== tabOrder || n[31] !== w) {
            q = <div {...babelHelpers.extends({
                "data-tab": tabOrder
            }, M, {
                "aria-label": ariaLabel,
                ref: I
            }, A, {
                "data-testid": w,
                children: W
            })}/>;
            n[25] = ariaLabel;
            n[26] = M;
            n[27] = I;
            n[28] = W;
            n[29] = A;
            n[30] = tabOrder;
            n[31] = w;
            n[32] = q;
        } else {
            q = n[32];
        }
        return q;
    }
    l.default = d;
}, 98);