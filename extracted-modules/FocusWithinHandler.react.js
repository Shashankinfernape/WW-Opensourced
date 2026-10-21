__d("FocusWithinHandler.react", [
    "ReactFocusEvent.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useInsertionEffect, useMemo, useRef, useState } = u;
    const s_unstable_Scope = s.unstable_Scope;
    function f(e) {
        const r = o("react-compiler-runtime").c(19);
        const { children, onBlurWithin, onFocusChange, onFocusVisibleChange, onFocusWithin, testOnly } = e;
        const gRef = useRef(null);
        const h = useState((testOnly && testOnly.focus) ?? false);
        const y = h[0];
        const C = h[1];
        const b = useState((testOnly && testOnly.focusVisible) ?? false);
        const v = b[0];
        const S = b[1];
        let R;
        if (r[0] !== y || r[1] !== onBlurWithin || r[2] !== onFocusChange || r[3] !== onFocusVisibleChange || r[4] !== onFocusWithin) {
            let onFocusWithinChange;
            if (r[6] !== onFocusChange) {
                onFocusWithinChange = onFocusChange ? function(e) {
                    C(e);
                    onFocusChange(e);
                } : C;
                r[6] = onFocusChange;
                r[7] = onFocusWithinChange;
            } else {
                onFocusWithinChange = r[7];
            }
            let onFocusWithinVisibleChange;
            if (r[8] !== onFocusVisibleChange) {
                onFocusWithinVisibleChange = onFocusVisibleChange ? function(e) {
                    S(e);
                    onFocusVisibleChange(e);
                } : S;
                r[8] = onFocusVisibleChange;
                r[9] = onFocusWithinVisibleChange;
            } else {
                onFocusWithinVisibleChange = r[9];
            }
            R = {
                onBlurWithin: function(t) {
                    if (onBlurWithin && y) {
                        onBlurWithin(t);
                    }
                },
                onFocusWithin: function(t) {
                    if (onFocusWithin && !y) {
                        onFocusWithin(t);
                    }
                },
                onFocusWithinChange,
                onFocusWithinVisibleChange
            };
            r[0] = y;
            r[1] = onBlurWithin;
            r[2] = onFocusChange;
            r[3] = onFocusVisibleChange;
            r[4] = onFocusWithin;
            r[5] = R;
        } else {
            R = r[5];
        }
        const k = o("ReactFocusEvent.react").useFocusWithin(R);
        let I;
        let T;
        if (r[10] !== k) {
            I = function() {
                k(gRef.current);
                return function() {
                    k(null);
                };
            };
            T = [
                gRef,
                k
            ];
            r[10] = k;
            r[11] = I;
            r[12] = T;
        } else {
            I = r[11];
            T = r[12];
        }
        useInsertionEffect(I, T);
        let D;
        if (r[13] !== children || r[14] !== y || r[15] !== v) {
            D = typeof children === "function" ? children(y, v) : children;
            r[13] = children;
            r[14] = y;
            r[15] = v;
            r[16] = D;
        } else {
            D = r[16];
        }
        let x;
        if (r[17] !== D) {
            x = <s_unstable_Scope ref={gRef}>{D}</s_unstable_Scope>;
            r[17] = D;
            r[18] = x;
        } else {
            x = r[18];
        }
        return x;
    }
    l.default = f;
}, 98);