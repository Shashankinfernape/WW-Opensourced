__d("WAWebCheckboxSelectableWrapper.react", [
    "WAWebCheckBox.react",
    "WAWebContactModel",
    "WAWebKeyboardHotKeys.react",
    "WAWebNoop",
    "WAWebReachoutTimelockUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = {
        checkboxSelectableWrapper: {
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(36);
        const { children, disabled, active, selections, model, checked, checkboxTheme, onClick, wrapperTestid, checkboxAriaLabel } = e;
        const h = onClick === undefined ? r("WAWebNoop") : onClick;
        let y;
        if (t[0] !== model.id) {
            y = model.id.toString();
            t[0] = model.id;
            t[1] = y;
        } else {
            y = t[1];
        }
        const C = r("useWAWebActiveSelection")(active, y);
        const b = C[0];
        let v;
        if (t[2] !== checked || t[3] !== model || t[4] !== selections) {
            v = function() {
                return selections.isSelected(model) || !!checked;
            };
            t[2] = checked;
            t[3] = model;
            t[4] = selections;
            t[5] = v;
        } else {
            v = t[5];
        }
        const S = e_useState(v);
        const R = S[0];
        const L = S[1];
        let E;
        if (t[6] !== model) {
            E = o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && model instanceof r("WAWebContactModel") && !model.canSendMsgWhileTimelocked;
            t[6] = model;
            t[7] = E;
        } else {
            E = t[7];
        }
        const k = e_useState(E);
        const I = k[0];
        const T = k[1];
        let D;
        if (t[8] !== R) {
            D = function(t) {
                if (t !== R) {
                    L(t);
                }
            };
            t[8] = R;
            t[9] = D;
        } else {
            D = t[9];
        }
        const x = D;
        let $;
        if (t[10] !== h) {
            $ = function(t) {
                t.preventDefault();
                h(t);
            };
            t[10] = h;
            t[11] = $;
        } else {
            $ = t[11];
        }
        const P = $;
        let N;
        if (t[12] !== P) {
            N = {
                enter: P,
                space: P
            };
            t[12] = P;
            t[13] = N;
        } else {
            N = t[13];
        }
        const M = N;
        let w;
        if (t[14] !== model.id) {
            w = model.id.toString();
            t[14] = model.id;
            t[15] = w;
        } else {
            w = t[15];
        }
        o("useWAWebListener").useListener(selections, w, x);
        let A;
        if (t[16] !== model) {
            A = function() {
                T(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && model instanceof r("WAWebContactModel") && !model.canSendMsgWhileTimelocked);
            };
            t[16] = model;
            t[17] = A;
        } else {
            A = t[17];
        }
        o("useWAWebListener").useListener(model, "change:canSendMsgWhileTimelocked", A);
        const F = I ? r("WAWebNoop") : P;
        const O = disabled === true || I;
        let B;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            B = {
                className: "x10l6tqk x1pe450p x11uqc5h x78zum5 x6s0dn4 x5yr21d x47corl"
            };
            t[18] = B;
        } else {
            B = t[18];
        }
        const W = disabled === true || I;
        let q;
        if (t[19] !== checkboxAriaLabel || t[20] !== checkboxTheme || t[21] !== R || t[22] !== W) {
            const Component = o("WAWebCheckBox.react").CheckBox;
            q = <Component onChange={r("WAWebNoop")} ariaLabel={checkboxAriaLabel} checked={R} disabled={W} tabIndex={-1} theme={checkboxTheme}/>;
            t[19] = checkboxAriaLabel;
            t[20] = checkboxTheme;
            t[21] = R;
            t[22] = W;
            t[23] = q;
        } else {
            q = t[23];
        }
        let U;
        if (t[24] !== e.testid || t[25] !== q) {
            U = <div {...babelHelpers.extends({}, B, {
                "data-testid": e.testid,
                children: q
            })}/>;
            t[24] = e.testid;
            t[25] = q;
            t[26] = U;
        } else {
            U = t[26];
        }
        let V;
        if (t[27] !== children || t[28] !== M || t[29] !== b || t[30] !== R || t[31] !== O || t[32] !== U || t[33] !== F || t[34] !== wrapperTestid) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            V = <Component component="div" handlers={M} ref={b} xstyle={c.checkboxSelectableWrapper} onClick={F} data-testid={wrapperTestid} role="checkbox" aria-checked={R} aria-disabled={O} tabIndex={-1}>{U}{children}</Component>;
            t[27] = children;
            t[28] = M;
            t[29] = b;
            t[30] = R;
            t[31] = O;
            t[32] = U;
            t[33] = F;
            t[34] = wrapperTestid;
            t[35] = V;
        } else {
            V = t[35];
        }
        return V;
    }
    l.default = d;
}, 98);