__d("useCometPressableEventStates", [
    "ExecutionEnvironment",
    "ReactFocusEvent.react",
    "emptyFunction",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useState } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(23);
        const { onFocusChange, onFocusVisibleChange, onHoverChange, onPressChange, ref, testOnly_pressed } = e;
        const u = testOnly_pressed === undefined ? false : testOnly_pressed;
        const c = useState(u);
        const p = c[0];
        const _ = c[1];
        const f = useState(false);
        const g = f[0];
        const h = f[1];
        const y = useState(false);
        const focusVisible = y[0];
        const b = y[1];
        const v = useState(false);
        const hovered = v[0];
        const R = v[1];
        let L;
        if (t[0] !== onPressChange || t[1] !== u) {
            L = function(t) {
                _(t || u);
                if (onPressChange) {
                    onPressChange(t);
                }
            };
            t[0] = onPressChange;
            t[1] = u;
            t[2] = L;
        } else {
            L = t[2];
        }
        const onPressChangesHandler = L;
        let k;
        if (t[3] !== onFocusChange) {
            k = function(t) {
                h(t);
                if (onFocusChange) {
                    onFocusChange(t);
                }
            };
            t[3] = onFocusChange;
            t[4] = k;
        } else {
            k = t[4];
        }
        const onFocusChangeHandler = k;
        let T;
        if (t[5] !== onFocusVisibleChange) {
            T = function(t) {
                b(t);
                if (onFocusVisibleChange) {
                    onFocusVisibleChange(t);
                }
            };
            t[5] = onFocusVisibleChange;
            t[6] = T;
        } else {
            T = t[6];
        }
        const onFocusVisibleChangeHandler = T;
        let x;
        if (t[7] !== onHoverChange) {
            x = function(t) {
                R(t);
                if (onHoverChange) {
                    onHoverChange(t);
                }
            };
            t[7] = onHoverChange;
            t[8] = x;
        } else {
            x = t[8];
        }
        const onHoverChangeHandler = x;
        let P;
        let N;
        if (t[9] !== ref || t[10] !== onFocusChangeHandler || t[11] !== onFocusVisibleChangeHandler) {
            P = function() {
                const ref_current = ref.current;
                if (ref_current != null && ref_current === document.activeElement) {
                    onFocusChangeHandler(true);
                    if (o("ReactFocusEvent.react").getGlobalFocusVisible()) {
                        onFocusVisibleChangeHandler(true);
                    }
                }
            };
            N = [
                ref,
                onFocusChangeHandler,
                onFocusVisibleChangeHandler
            ];
            t[9] = ref;
            t[10] = onFocusChangeHandler;
            t[11] = onFocusVisibleChangeHandler;
            t[12] = P;
            t[13] = N;
        } else {
            P = t[12];
            N = t[13];
        }
        useEffect(P, N);
        let M;
        if (t[14] !== focusVisible || t[15] !== g || t[16] !== hovered || t[17] !== onFocusChangeHandler || t[18] !== onFocusVisibleChangeHandler || t[19] !== onHoverChangeHandler || t[20] !== onPressChangesHandler || t[21] !== p) {
            M = {
                focused: g,
                focusVisible,
                hovered,
                onFocusChangeHandler,
                onFocusVisibleChangeHandler,
                onHoverChangeHandler,
                onPressChangesHandler,
                pressed: p
            };
            t[14] = focusVisible;
            t[15] = g;
            t[16] = hovered;
            t[17] = onFocusChangeHandler;
            t[18] = onFocusVisibleChangeHandler;
            t[19] = onHoverChangeHandler;
            t[20] = onPressChangesHandler;
            t[21] = p;
            t[22] = M;
        } else {
            M = t[22];
        }
        return M;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_testOnly_pressed = e.testOnly_pressed;
        const a = e_testOnly_pressed === undefined ? false : e_testOnly_pressed;
        let i;
        if (t[0] !== a) {
            let l;
            i = {
                focused: false,
                focusVisible: false,
                hovered: false,
                onFocusChangeHandler: l = r("emptyFunction"),
                onFocusVisibleChangeHandler: l,
                onHoverChangeHandler: l,
                onPressChangesHandler: l,
                pressed: a
            };
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        return i;
    }
    const f = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? p : _;
    l.default = f;
}, 98);