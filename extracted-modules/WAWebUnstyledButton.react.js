__d("WAWebUnstyledButton.react", [
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "WAWebUnstyledButtonStyles",
    "WDSFocusStateStyles",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref",
        "applyWrapperFocusStyles",
        "children",
        "customDataAttr",
        "dataTab",
        "dir",
        "disabled",
        "onBlur",
        "onClick",
        "onContextMenu",
        "onDisabledClick",
        "onFocus",
        "onKeyDown",
        "onMouseDown",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseOver",
        "onMouseUp",
        "onPaste",
        "role",
        "tabIndex",
        "testid",
        "title",
        "type",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback: m, useRef: p } = d;
    function _(t) {
        const a = o("react-compiler-runtime").c(62);
        let i;
        let l;
        let u;
        let d;
        let m;
        let _;
        let f;
        let g;
        let h;
        let y;
        let C;
        let b;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let x;
        let $;
        let P;
        let N;
        let M;
        if (a[0] !== t) {
            k = t.ref;
            D = t.applyWrapperFocusStyles;
            i = t.children;
            l = t.customDataAttr;
            u = t.dataTab;
            d = t.dir;
            m = t.disabled;
            _ = t.onBlur;
            f = t.onClick;
            g = t.onContextMenu;
            h = t.onDisabledClick;
            y = t.onFocus;
            C = t.onKeyDown;
            b = t.onMouseDown;
            v = t.onMouseEnter;
            S = t.onMouseLeave;
            R = t.onMouseOver;
            L = t.onMouseUp;
            E = t.onPaste;
            T = t.role;
            x = t.tabIndex;
            P = t.testid;
            N = t.title;
            $ = t.type;
            M = t.xstyle;
            I = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = u;
            a[4] = d;
            a[5] = m;
            a[6] = _;
            a[7] = f;
            a[8] = g;
            a[9] = h;
            a[10] = y;
            a[11] = C;
            a[12] = b;
            a[13] = v;
            a[14] = S;
            a[15] = R;
            a[16] = L;
            a[17] = E;
            a[18] = k;
            a[19] = I;
            a[20] = T;
            a[21] = D;
            a[22] = x;
            a[23] = $;
            a[24] = P;
            a[25] = N;
            a[26] = M;
        } else {
            i = a[1];
            l = a[2];
            u = a[3];
            d = a[4];
            m = a[5];
            _ = a[6];
            f = a[7];
            g = a[8];
            h = a[9];
            y = a[10];
            C = a[11];
            b = a[12];
            v = a[13];
            S = a[14];
            R = a[15];
            L = a[16];
            E = a[17];
            k = a[18];
            I = a[19];
            T = a[20];
            D = a[21];
            x = a[22];
            $ = a[23];
            P = a[24];
            N = a[25];
            M = a[26];
        }
        const w = D === void 0 ? true : D;
        const A = x === void 0 ? 0 : x;
        const F = $ === void 0 ? "button" : $;
        const O = p(null);
        const B = r("useMergeRefs")(k, O);
        const W = I["aria-label"] ?? N;
        let q;
        if (a[27] === Symbol.for("react.memo_cache_sentinel")) {
            q = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    t.stopPropagation();
                    t.preventDefault();
                    O.current?.click();
                }
            };
            a[27] = q;
        } else {
            q = a[27];
        }
        const U = q;
        const V = m === true ? h : f;
        let H;
        if (a[28] !== m || a[29] !== V) {
            H = function(t) {
                if (V != null) {
                    if (m === true) {
                        t.stopPropagation();
                        t.preventDefault();
                    }
                    V(t);
                }
            };
            a[28] = m;
            a[29] = V;
            a[30] = H;
        } else {
            H = a[30];
        }
        const G = H;
        let z;
        if (a[31] !== w || a[32] !== m || a[33] !== M) {
            z = o("WAWebClassnames").classnamesConvertMeToStylexPlease((s || (s = r("stylex")))(r("WAWebUnstyledButtonStyles").button, w && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSPaddings.stylex").wdsPaddings.padding0, m === true && r("WAWebUnstyledButtonStyles").disabled, M));
            a[31] = w;
            a[32] = m;
            a[33] = M;
            a[34] = z;
        } else {
            z = a[34];
        }
        const j = u ?? void 0;
        const K = m === true && h == null;
        const Q = m === true;
        const X = V == null ? null : G;
        let Y;
        if (a[35] !== W || a[36] !== i || a[37] !== l || a[38] !== d || a[39] !== B || a[40] !== _ || a[41] !== g || a[42] !== y || a[43] !== C || a[44] !== b || a[45] !== v || a[46] !== S || a[47] !== R || a[48] !== L || a[49] !== E || a[50] !== I || a[51] !== T || a[52] !== X || a[53] !== z || a[54] !== j || a[55] !== K || a[56] !== Q || a[57] !== A || a[58] !== P || a[59] !== N || a[60] !== F) {
            Y = <button {...babelHelpers.extends({
                className: z,
                tabIndex: A,
                "data-tab": j,
                "data-testid": P,
                disabled: K,
                "aria-disabled": Q,
                onClick: X,
                onContextMenu: g,
                onMouseEnter: v,
                onMouseOver: R,
                onMouseLeave: S,
                onMouseDown: b,
                onMouseUp: L,
                onKeyDown: C,
                onKeyPress: U,
                onPaste: E,
                onFocus: y,
                onBlur: _,
                ref: B,
                title: N,
                type: F,
                role: T,
                dir: d,
                "aria-label": W,
                "data-custom-attr": l
            }, I, {
                children: i
            })}/>;
            a[35] = W;
            a[36] = i;
            a[37] = l;
            a[38] = d;
            a[39] = B;
            a[40] = _;
            a[41] = g;
            a[42] = y;
            a[43] = C;
            a[44] = b;
            a[45] = v;
            a[46] = S;
            a[47] = R;
            a[48] = L;
            a[49] = E;
            a[50] = I;
            a[51] = T;
            a[52] = X;
            a[53] = z;
            a[54] = j;
            a[55] = K;
            a[56] = Q;
            a[57] = A;
            a[58] = P;
            a[59] = N;
            a[60] = F;
            a[61] = Y;
        } else {
            Y = a[61];
        }
        return Y;
    }
    l.default = _;
}, 98);