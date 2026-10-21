__d("WAWebChatCheckboxWrapper.react", [
    "WAWebCheckBox.react",
    "WAWebKeyboardIsKeyActivation",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { Children, cloneElement, useState } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(32);
        const { checkboxAriaLabel, children, initialSelection, model, multiSelection, onArrowKeyLeftRight, onSelect, ref, role, selectableState, theme } = e;
        const b = role === undefined ? "none" : role;
        let v;
        if (t[0] !== initialSelection || t[1] !== model || t[2] !== multiSelection) {
            v = function() {
                switch(initialSelection){
                    case 0:
                        return false;
                    case 1:
                    case 2:
                        return true;
                    default:
                        return multiSelection.isSelected(model);
                }
            };
            t[0] = initialSelection;
            t[1] = model;
            t[2] = multiSelection;
            t[3] = v;
        } else {
            v = t[3];
        }
        const S = useState(v);
        const R = S[0];
        const L = S[1];
        let E;
        if (t[4] !== initialSelection) {
            E = function() {
                return initialSelection === 2;
            };
            t[4] = initialSelection;
            t[5] = E;
        } else {
            E = t[5];
        }
        const k = useState(E);
        const I = k[0];
        const T = k[1];
        let D;
        if (t[6] !== model.id) {
            D = model.id.toString();
            t[6] = model.id;
            t[7] = D;
        } else {
            D = t[7];
        }
        const x = D;
        const $ = useState(x);
        const P = $[0];
        const N = $[1];
        if (P !== x) {
            N(x);
            L(multiSelection.isSelected(model));
        }
        let M;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            M = function(t) {
                L(t);
            };
            t[8] = M;
        } else {
            M = t[8];
        }
        const w = M;
        let A;
        if (t[9] !== model || t[10] !== onSelect || t[11] !== R) {
            A = function(t) {
                if (!(t != null && t.isDefaultPrevented())) {
                    if (t) {
                        t.stopPropagation();
                    }
                    let e;
                    if (R) {
                        L(false);
                        T(false);
                        e = false;
                    } else {
                        e = true;
                    }
                    onSelect?.(model, e, false);
                }
            };
            t[9] = model;
            t[10] = onSelect;
            t[11] = R;
            t[12] = A;
        } else {
            A = t[12];
        }
        const F = A;
        const onKeyPress = function(t) {
            if (!(!r("WAWebKeyboardIsKeyActivation")(t) || f(t))) {
                t.stopPropagation();
                t.preventDefault();
                if (V != null) {
                    V();
                }
            }
        };
        o("useWAWebListener").useListener(multiSelection, P, w);
        let B;
        if (t[13] !== selectableState.isSelectable) {
            B = function() {
                return selectableState.isSelectable;
            };
            t[13] = selectableState.isSelectable;
            t[14] = B;
        } else {
            B = t[14];
        }
        const W = r("useWAWebEventTargetValue")(selectableState, "all", B);
        const q = {};
        if (W && theme) {
            q.theme = theme;
        }
        if (W) {
            q.noContext = true;
        }
        if (children == null) {
            return null;
        }
        const U = Children.toArray(children)[0];
        var V = theme === "label-selection" || theme === "label-selection-redesigned" ? F : null;
        const H = W ? "button" : b;
        let G;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            G = {
                className: "x1n2onr6"
            };
            t[15] = G;
        } else {
            G = t[15];
        }
        const tabIndex = 0;
        const j = V;
        let K;
        if (t[16] !== checkboxAriaLabel || t[17] !== F || t[18] !== W || t[19] !== onArrowKeyLeftRight || t[20] !== I || t[21] !== R || t[22] !== theme) {
            const Component = o("WAWebCheckBox.react").CheckBox;
            K = W && <div {...babelHelpers.extends({}, {
                0: {
                    className: "x10l6tqk x1pe450p x16uhe5s x78zum5 x6s0dn4 x1pju0fl x5yr21d"
                },
                2: {
                    className: "x10l6tqk x16uhe5s x78zum5 x6s0dn4 x5yr21d x145d82y xlgexem x14atkfc"
                },
                1: {
                    className: "x10l6tqk x1pe450p x16uhe5s x78zum5 x6s0dn4 x1pju0fl x5yr21d xdg88n9"
                },
                3: {
                    className: "x10l6tqk x16uhe5s x78zum5 x6s0dn4 x5yr21d xlgexem x14atkfc xdg88n9"
                }
            }[(theme === "label-selection" || theme === "label-selection-redesigned") << 1 | (theme === "label-selection-redesigned") << 0], {
                tabIndex: -1,
                children: <Component onChange={F} ariaLabel={checkboxAriaLabel} onArrowKeyLeftRight={onArrowKeyLeftRight} checked={R} theme={R && I ? o("WAWebCheckBox.react").CheckboxTheme.PARTIAL : undefined}/>
            })}/>;
            t[16] = checkboxAriaLabel;
            t[17] = F;
            t[18] = W;
            t[19] = onArrowKeyLeftRight;
            t[20] = I;
            t[21] = R;
            t[22] = theme;
            t[23] = K;
        } else {
            K = t[23];
        }
        const Q = cloneElement(U, q);
        let X;
        if (t[24] !== onKeyPress || t[25] !== ref || t[26] !== j || t[27] !== K || t[28] !== Q || t[29] !== H || t[30] !== G) {
            X = <div {...babelHelpers.extends({
                ref,
                role: H
            }, G, {
                onKeyPress,
                tabIndex,
                onClick: j,
                children: [
                    K,
                    Q
                ]
            })}/>;
            t[24] = onKeyPress;
            t[25] = ref;
            t[26] = j;
            t[27] = K;
            t[28] = Q;
            t[29] = H;
            t[30] = G;
            t[31] = X;
        } else {
            X = t[31];
        }
        return X;
    }
    const _ = 'a[href], button, input, select, textarea, [role="button"], [role="link"]';
    function f({ currentTarget, target }) {
        if (!(target instanceof Element)) {
            return false;
        }
        const r = target.closest(_);
        return r != null && !r.contains(currentTarget);
    }
    l.default = p;
}, 98);