__d("WAWebRow.react", [
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        clickable: {
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(23);
        const { "aria-label": aria_label, children, ellipsify, onClick, side, testid, xstyle } = t;
        const _ = ellipsify === undefined ? false : ellipsify;
        let f;
        if (n[0] !== side) {
            f = side != null ? <div className="x1okw0bk x1hm9lzh">{side}</div> : null;
            n[0] = side;
            n[1] = f;
        } else {
            f = n[1];
        }
        const g = f;
        let h;
        const y = r("useWAWebStaticButtonA11y")(onClick);
        const C = y[0];
        const b = y[1];
        if (onClick != null) {
            let v;
            if (n[2] !== b || n[3] !== C) {
                v = babelHelpers.extends({
                    ref: C
                }, b);
                n[2] = b;
                n[3] = C;
                n[4] = v;
            } else {
                v = n[4];
            }
            h = v;
        }
        let S;
        if (n[5] !== onClick || n[6] !== xstyle) {
            S = (e || (e = r("stylex"))).props(onClick && c.clickable, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, xstyle);
            n[5] = onClick;
            n[6] = xstyle;
            n[7] = S;
        } else {
            S = n[7];
        }
        const R = h;
        let L;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x78zum5 x6s0dn4"
            };
            n[8] = L;
        } else {
            L = n[8];
        }
        let E;
        if (n[9] !== _) {
            E = ({
                0: {
                    className: "x12lumcd x6ikm8r x10wlt62"
                },
                1: {
                    className: "x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft"
                }
            })[!!_ << 0];
            n[9] = _;
            n[10] = E;
        } else {
            E = n[10];
        }
        let k;
        if (n[11] !== children || n[12] !== E) {
            k = <div {...babelHelpers.extends({}, E, {
                children
            })}/>;
            n[11] = children;
            n[12] = E;
            n[13] = k;
        } else {
            k = n[13];
        }
        let I;
        if (n[14] !== g || n[15] !== k) {
            I = <div {...babelHelpers.extends({}, L, {
                children: [
                    k,
                    g
                ]
            })}/>;
            n[14] = g;
            n[15] = k;
            n[16] = I;
        } else {
            I = n[16];
        }
        let T;
        if (n[17] !== aria_label || n[18] !== h || n[19] !== S || n[20] !== I || n[21] !== testid) {
            T = <div {...babelHelpers.extends({}, S, {
                "aria-label": aria_label,
                "data-testid": testid
            }, R, {
                children: I
            })}/>;
            n[17] = aria_label;
            n[18] = h;
            n[19] = S;
            n[20] = I;
            n[21] = testid;
            n[22] = T;
        } else {
            T = n[22];
        }
        return T;
    }
    l.default = d;
}, 98);