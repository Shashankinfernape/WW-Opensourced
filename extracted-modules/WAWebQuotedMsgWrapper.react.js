__d("WAWebQuotedMsgWrapper.react", [
    "fbt",
    "WAWebKeyboardIsKeyActivation",
    "WAWebTabOrder",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        quotedMsg: {
            position: "x1n2onr6",
            display: "x78zum5",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundColor: "x16p640f",
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            $$css: true
        },
        quotedMsgRefresh: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        noBorderRadius: {
            borderStartStartRadius: null,
            borderStartEndRadius: null,
            borderEndEndRadius: null,
            borderEndStartRadius: null,
            $$css: true
        },
        hover: {
            cursor: "x1ypdohk",
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        colorBar: {
            flexShrink: "x2lah0s",
            flexGrow: "x1c4vz4f",
            flexBasis: "xdl72j9",
            width: "x51ohtg",
            borderStartStartRadius: "x1liijdw",
            borderEndStartRadius: "x16pgt24",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(30);
        const { authorBackgroundStyle, children, clickable, handleClick, rootMsg, theme } = t;
        const f = u_useState(false);
        const g = f[0];
        const h = f[1];
        const y = !g && !!rootMsg;
        const C = clickable ? "button" : null;
        const b = theme === "composeBox";
        let v;
        if (n[0] !== y) {
            v = function(t) {
                if (y) {
                    h(true);
                }
            };
            n[0] = y;
            n[1] = v;
        } else {
            v = n[1];
        }
        const S = v;
        let R;
        if (n[2] !== g) {
            R = function(t) {
                if (g) {
                    h(false);
                }
            };
            n[2] = g;
            n[3] = R;
        } else {
            R = n[3];
        }
        const L = R;
        let E;
        if (n[4] !== clickable || n[5] !== handleClick) {
            E = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t) && clickable) {
                    handleClick();
                }
            };
            n[4] = clickable;
            n[5] = handleClick;
            n[6] = E;
        } else {
            E = n[6];
        }
        const k = E;
        let I;
        if (n[7] !== g || n[8] !== theme) {
            I = (e || (e = r("stylex")))(m.quotedMsg, m.quotedMsgRefresh, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner, theme === "composeBox" && m.noBorderRadius, g && m.hover);
            n[7] = g;
            n[8] = theme;
            n[9] = I;
        } else {
            I = n[9];
        }
        const T = I;
        let D;
        if (n[10] !== authorBackgroundStyle) {
            D = (e || (e = r("stylex")))(authorBackgroundStyle, m.colorBar);
            n[10] = authorBackgroundStyle;
            n[11] = D;
        } else {
            D = n[11];
        }
        const x = D;
        let $;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            $ = s._("Quoted message");
            n[12] = $;
        } else {
            $ = n[12];
        }
        const P = $;
        let N;
        if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                className: "xh8yej3 xeuugli"
            };
            n[13] = N;
        } else {
            N = n[13];
        }
        const onMouseOver = clickable ? S : null;
        const w = clickable ? S : null;
        const A = clickable ? L : null;
        const F = clickable ? 0 : null;
        const O = b && clickable ? o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL : undefined;
        const B = clickable ? handleClick : null;
        let W;
        if (n[14] !== x) {
            W = <span className={x}/>;
            n[14] = x;
            n[15] = W;
        } else {
            W = n[15];
        }
        let q;
        if (n[16] !== children || n[17] !== k || n[18] !== T || n[19] !== C || n[20] !== F || n[21] !== O || n[22] !== B || n[23] !== W) {
            q = <div className={T} role={C} aria-label={P} tabIndex={F} data-tab={O} onKeyDown={k} onClick={B}>{W}{children}</div>;
            n[16] = children;
            n[17] = k;
            n[18] = T;
            n[19] = C;
            n[20] = F;
            n[21] = O;
            n[22] = B;
            n[23] = W;
            n[24] = q;
        } else {
            q = n[24];
        }
        let U;
        if (n[25] !== A || n[26] !== q || n[27] !== onMouseOver || n[28] !== w) {
            U = <div {...babelHelpers.extends({
                "data-testid": "quoted-message"
            }, N, {
                onMouseOver,
                onMouseEnter: w,
                onMouseLeave: A,
                children: q
            })}/>;
            n[25] = A;
            n[26] = q;
            n[27] = onMouseOver;
            n[28] = w;
            n[29] = U;
        } else {
            U = n[29];
        }
        return U;
    }
    l.default = p;
}, 226);