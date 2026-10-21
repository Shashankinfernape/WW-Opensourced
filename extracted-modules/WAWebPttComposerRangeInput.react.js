__d("WAWebPttComposerRangeInput.react", [
    "WAWebKeyboardConstants",
    "WDSFocusStateStyles",
    "clamp",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useRef, useState } = c;
    const f = {
        base: {
            cursor: "x1ypdohk",
            borderStartStartRadius: "xr9e8f9",
            borderStartEndRadius: "x1e4oeot",
            borderEndEndRadius: "x1ui04y5",
            borderEndStartRadius: "x6en5u8",
            $$css: true
        },
        disabled: {
            cursor: "x1h6gzvc",
            $$css: true
        }
    };
    function g(t) {
        const n = o("react-compiler-runtime").c(47);
        const { ariaLabel, value, valueText, min, max, smallSkip, largeSkip, onChange, onCommit, disabled, children, tabIndex, inset } = t;
        let R;
        if (n[0] !== inset) {
            R = inset === undefined ? [
                0,
                0
            ] : inset;
            n[0] = inset;
            n[1] = R;
        } else {
            R = n[1];
        }
        const L = R;
        const E = useState(false);
        const k = E[0];
        const I = E[1];
        const T = useState(false);
        const D = T[0];
        const x = T[1];
        let $;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            $ = function() {
                I(true);
            };
            n[2] = $;
        } else {
            $ = n[2];
        }
        const P = $;
        let N;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            N = function() {
                I(false);
            };
            n[3] = N;
        } else {
            N = n[3];
        }
        const M = N;
        const wRef = useRef();
        const ARef = useRef();
        const FRef = useRef();
        let O;
        if (n[4] !== max || n[5] !== min) {
            O = function(t) {
                const e = r("nullthrows")(ARef.current);
                const n = r("nullthrows")(FRef.current);
                const t_clientX = t.clientX;
                const a = r("clamp")((t_clientX - e) / (n - e), 0, 1);
                return min + a * (max - min);
            };
            n[4] = max;
            n[5] = min;
            n[6] = O;
        } else {
            O = n[6];
        }
        const B = O;
        let W;
        if (n[7] !== B || n[8] !== onChange) {
            W = function(t) {
                t.preventDefault();
                onChange?.(B(t));
            };
            n[7] = B;
            n[8] = onChange;
            n[9] = W;
        } else {
            W = n[9];
        }
        const q = r("useWAWebStableCallback")(W);
        let U;
        if (n[10] !== B || n[11] !== onChange || n[12] !== onCommit) {
            U = function(t) {
                if (t.button === 0) {
                    M();
                    const e = B(t);
                    onChange?.(e);
                    onCommit(e);
                }
            };
            n[10] = B;
            n[11] = onChange;
            n[12] = onCommit;
            n[13] = U;
        } else {
            U = n[13];
        }
        const V = r("useWAWebStableCallback")(U);
        let H;
        if (n[14] !== B || n[15] !== disabled || n[16] !== L || n[17] !== onChange) {
            H = function(t) {
                if (t.button === 0 && disabled !== true) {
                    t.preventDefault();
                    const n = r("nullthrows")(wRef.current?.getBoundingClientRect());
                    const o = L[0];
                    const a = L[1];
                    ARef.current = n.left + o;
                    FRef.current = n.left + n.width - a;
                    P();
                    onChange?.(B(t));
                }
            };
            n[14] = B;
            n[15] = disabled;
            n[16] = L;
            n[17] = onChange;
            n[18] = H;
        } else {
            H = n[18];
        }
        const G = H;
        let z;
        if (n[19] !== disabled || n[20] !== D || n[21] !== largeSkip || n[22] !== max || n[23] !== min || n[24] !== onCommit || n[25] !== smallSkip || n[26] !== value) {
            z = function(t) {
                if (disabled !== true) {
                    let e;
                    e: switch(t.key){
                        case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ARROW_RIGHT:
                            {
                                if (D) {
                                    e = smallSkip;
                                    t.stopPropagation();
                                }
                                break e;
                            }
                        case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ARROW_LEFT:
                            {
                                if (D) {
                                    e = -smallSkip;
                                    t.stopPropagation();
                                }
                                break e;
                            }
                        case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.PAGE_UP:
                            {
                                if (D) {
                                    e = largeSkip;
                                }
                                break e;
                            }
                        case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.PAGE_DOWN:
                            {
                                if (D) {
                                    e = -largeSkip;
                                }
                                break e;
                            }
                        case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ENTER:
                        case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.SPACE:
                            {
                                x(true);
                                break e;
                            }
                        case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ESCAPE:
                            x(false);
                            t.stopPropagation();
                    }
                    if (e != null) {
                        t.preventDefault();
                        const n = r("clamp")(value + e, min, max);
                        onCommit(n);
                    }
                }
            };
            n[19] = disabled;
            n[20] = D;
            n[21] = largeSkip;
            n[22] = max;
            n[23] = min;
            n[24] = onCommit;
            n[25] = smallSkip;
            n[26] = value;
            n[27] = z;
        } else {
            z = n[27];
        }
        const j = z;
        let K;
        if (n[28] === Symbol.for("react.memo_cache_sentinel")) {
            K = function() {
                x(false);
            };
            n[28] = K;
        } else {
            K = n[28];
        }
        const Q = K;
        let X;
        let Y;
        if (n[29] !== q || n[30] !== V || n[31] !== k) {
            X = function() {
                if (k) {
                    window.addEventListener("mousemove", q);
                    window.addEventListener("mouseup", V);
                    return function() {
                        window.removeEventListener("mousemove", q);
                        window.removeEventListener("mouseup", V);
                    };
                }
            };
            Y = [
                q,
                V,
                k
            ];
            n[29] = q;
            n[30] = V;
            n[31] = k;
            n[32] = X;
            n[33] = Y;
        } else {
            X = n[32];
            Y = n[33];
        }
        useEffect(X, Y);
        let J;
        if (n[34] !== disabled) {
            J = (e || (e = r("stylex"))).props(f.base, disabled === true && f.disabled, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
            n[34] = disabled;
            n[35] = J;
        } else {
            J = n[35];
        }
        let Z;
        if (n[36] !== ariaLabel || n[37] !== children || n[38] !== j || n[39] !== G || n[40] !== max || n[41] !== min || n[42] !== J || n[43] !== tabIndex || n[44] !== value || n[45] !== valueText) {
            Z = <div {...babelHelpers.extends({
                ref: wRef
            }, J, {
                onBlur: Q,
                role: "slider",
                "aria-label": ariaLabel,
                "aria-valuenow": value,
                "aria-valuetext": valueText,
                "aria-valuemin": min,
                "aria-valuemax": max,
                "data-tab": tabIndex,
                tabIndex: 0,
                onMouseDown: G,
                onKeyDown: j,
                children
            })}/>;
            n[36] = ariaLabel;
            n[37] = children;
            n[38] = j;
            n[39] = G;
            n[40] = max;
            n[41] = min;
            n[42] = J;
            n[43] = tabIndex;
            n[44] = value;
            n[45] = valueText;
            n[46] = Z;
        } else {
            Z = n[46];
        }
        return Z;
    }
    l.default = g;
}, 98);