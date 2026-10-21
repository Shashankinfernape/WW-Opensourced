__d("ReactFocusEvent.react", [
    "ReactDOM",
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
    "react-compiler-runtime",
    "useUnsafeRef_DEPRECATED"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useLayoutEffect, useMemo, useRef } = u;
    const f = o("ReactEventHelpers").hasPointerEvents ? [
        "keydown",
        "pointermove",
        "pointerdown",
        "pointerup"
    ] : [
        "keydown",
        "mousedown",
        "mousemove",
        "mouseup",
        "touchmove",
        "touchstart",
        "touchend"
    ];
    const g = {
        passive: true
    };
    let h = true;
    let y = false;
    function C() {
        return h;
    }
    function b() {
        f.forEach((e)=>{
            window.addEventListener(e, R, true);
        });
    }
    function v({ altKey, ctrlKey, metaKey }) {
        return !(metaKey || !o("ReactEventHelpers").isMac && altKey || ctrlKey);
    }
    function S({ key, target }) {
        if (key === "Tab" || key === "Escape") {
            return false;
        }
        const { isContentEditable, tagName } = target;
        return tagName === "INPUT" || tagName === "TEXTAREA" || isContentEditable;
    }
    function R(e) {
        if (e.type === "keydown") {
            if (v(e)) {
                h = true;
            }
        } else {
            const t = e.target.nodeName;
            if (t === "HTML") {
                return;
            }
            h = false;
        }
    }
    function L(e, t, n) {
        if (e.type === "keydown") {
            const r = e.nativeEvent;
            if (v(r) && !S(r)) {
                n(true);
            }
        } else {
            if (t.isFocused) {
                n(t.isFocusVisible);
            } else {
                h = false;
                n(false);
            }
        }
    }
    function E(e, t, n, r) {
        e.forEach((e)=>{
            e.setListener(t, function(e) {
                return L(e, n, r);
            });
        });
    }
    function k() {
        const e = o("react-compiler-runtime").c(4);
        const t = r("ReactUseEvent.react")("mousedown", g);
        const n = r("ReactUseEvent.react")(o("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", g);
        const a = r("ReactUseEvent.react")("keydown", g);
        let i;
        if (e[0] !== a || e[1] !== t || e[2] !== n) {
            i = [
                t,
                n,
                a
            ];
            e[0] = a;
            e[1] = t;
            e[2] = n;
            e[3] = i;
        } else {
            i = e[3];
        }
        return i;
    }
    function useI() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        useEffect(T, t);
    }
    function T() {
        if (!y) {
            y = true;
            b();
        }
    }
    function useD(e, t) {
        const n = o("react-compiler-runtime").c(17);
        const { disabled, onBlur, onFocus, onFocusChange, onFocusVisibleChange } = t;
        let c;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                isFocused: false,
                isFocusVisible: false
            };
            n[0] = c;
        } else {
            c = n[0];
        }
        const pRef = useRef(c);
        const f = r("ReactUseEvent.react")("focusin", g);
        const y = r("ReactUseEvent.react")("focusout", g);
        const C = k();
        let b;
        let v;
        if (n[1] !== y || n[2] !== disabled || n[3] !== f || n[4] !== e || n[5] !== C || n[6] !== onBlur || n[7] !== onFocus || n[8] !== onFocusChange || n[9] !== onFocusVisibleChange) {
            b = function() {
                const e_current = e.current;
                const pRef_current = pRef.current;
                if (e_current !== null && e_current.nodeType === 1) {
                    pRef_current.isFocused = document.activeElement === e_current;
                    E(C, e_current, pRef_current, function(e) {
                        if (pRef_current.isFocused && pRef_current.isFocusVisible !== e) {
                            pRef_current.isFocusVisible = e;
                            if (onFocusVisibleChange) {
                                onFocusVisibleChange(e);
                            }
                        }
                    });
                    const r = (t)=>{
                        if (pRef_current.isFocused) {
                            pRef_current.isFocused = false;
                            if (onBlur) {
                                onBlur(t);
                            }
                            if (onFocusChange) {
                                onFocusChange(false);
                            }
                            if (pRef_current.isFocusVisible && onFocusVisibleChange) {
                                onFocusVisibleChange(false);
                            }
                            pRef_current.isFocusVisible = h;
                        }
                    };
                    f.setListener(e_current, function(e) {
                        if (disabled !== true) {
                            if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(e, "useFocus")) {
                                o("ReactEventHookPropagation").stopEventHookPropagation(e, "useFocus");
                                if (!pRef_current.isFocused && e_current === e.target) {
                                    pRef_current.isFocused = true;
                                    pRef_current.isFocusVisible = h;
                                    if (onFocus) {
                                        onFocus(e);
                                    }
                                    if (onFocusChange) {
                                        onFocusChange(true);
                                    }
                                    if (pRef_current.isFocusVisible && onFocusVisibleChange) {
                                        onFocusVisibleChange(true);
                                    }
                                }
                            }
                        }
                    });
                    y.setListener(e_current, function(e) {
                        if (disabled !== true) {
                            if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(e, "useFocus")) {
                                o("ReactEventHookPropagation").stopEventHookPropagation(e, "useFocus");
                                r(e);
                            }
                        }
                    });
                }
            };
            v = [
                y,
                disabled,
                f,
                e,
                C,
                onBlur,
                onFocus,
                onFocusChange,
                onFocusVisibleChange
            ];
            n[1] = y;
            n[2] = disabled;
            n[3] = f;
            n[4] = e;
            n[5] = C;
            n[6] = onBlur;
            n[7] = onFocus;
            n[8] = onFocusChange;
            n[9] = onFocusVisibleChange;
            n[10] = b;
            n[11] = v;
        } else {
            b = n[10];
            v = n[11];
        }
        useLayoutEffect(b, v);
        let S;
        if (n[12] !== e || n[13] !== onBlur || n[14] !== onFocusChange || n[15] !== onFocusVisibleChange) {
            S = function() {
                const e_current = e.current;
                const pRef_current = pRef.current;
                return function() {
                    if (e.current === null && pRef_current.isFocused) {
                        pRef_current.isFocused = false;
                        const r = new window.FocusEvent("blur");
                        Object.defineProperty(r, "target", {
                            value: e_current
                        });
                        if (onBlur) {
                            onBlur(r);
                        }
                        if (onFocusChange) {
                            onFocusChange(false);
                        }
                        if (pRef_current.isFocusVisible && onFocusVisibleChange) {
                            onFocusVisibleChange(false);
                        }
                        pRef_current.isFocusVisible = h;
                    }
                };
            };
            n[12] = e;
            n[13] = onBlur;
            n[14] = onFocusChange;
            n[15] = onFocusVisibleChange;
            n[16] = S;
        } else {
            S = n[16];
        }
        useEffect(S, undefined);
        useI();
    }
    function useX(e, { disabled, onAfterBlurWithin, onBeforeBlurWithin, onBlurWithin, onFocusWithin, onFocusWithinChange, onFocusWithinVisibleChange }) {
        let n;
        const pRef = useRef({
            isFocused: false,
            isFocusVisible: false
        });
        const f = (n = r("ReactUseEvent.react"))("focusin", g);
        const y = n("focusout", g);
        const C = n("afterblur", g);
        const b = n("beforeblur", g);
        const v = k();
        const S = useCallback(function(t) {
            if (typeof e === "function") {
                e(t);
            } else {
                e.current = t;
            }
            const pRef_current = pRef.current;
            if (t !== null && pRef_current !== null) {
                E(v, t, pRef_current, function(e) {
                    if (pRef_current.isFocused && pRef_current.isFocusVisible !== e) {
                        pRef_current.isFocusVisible = e;
                        if (onFocusWithinVisibleChange) {
                            onFocusWithinVisibleChange(e);
                        }
                    }
                });
                f.setListener(t, function(e) {
                    if (disabled !== true) {
                        if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(e, "useFocusWithin")) {
                            if (!pRef_current.isFocused) {
                                pRef_current.isFocused = true;
                                pRef_current.isFocusVisible = h;
                                if (onFocusWithinChange) {
                                    onFocusWithinChange(true);
                                }
                                if (pRef_current.isFocusVisible && onFocusWithinVisibleChange) {
                                    onFocusWithinVisibleChange(true);
                                }
                            }
                            if (!pRef_current.isFocusVisible && h) {
                                pRef_current.isFocusVisible = h;
                                if (onFocusWithinVisibleChange) {
                                    onFocusWithinVisibleChange(true);
                                }
                            }
                            if (onFocusWithin) {
                                onFocusWithin(e);
                            }
                        }
                    }
                });
                y.setListener(t, function(e) {
                    if (disabled !== true) {
                        const r = e.nativeEvent.relatedTarget;
                        if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(e, "useFocusWithin")) {
                            if (pRef_current.isFocused && !o("ReactEventHelpers").isRelatedTargetWithin(t, r)) {
                                pRef_current.isFocused = false;
                                if (onFocusWithinChange) {
                                    onFocusWithinChange(false);
                                }
                                if (pRef_current.isFocusVisible && onFocusWithinVisibleChange) {
                                    onFocusWithinVisibleChange(false);
                                }
                                if (onBlurWithin) {
                                    onBlurWithin(e);
                                }
                            } else {
                                o("ReactEventHookPropagation").stopEventHookPropagation(e, "useFocusWithin");
                            }
                        }
                    }
                });
                b.setListener(t, function(e) {
                    if (disabled !== true && onBeforeBlurWithin) {
                        onBeforeBlurWithin(e);
                        C.setListener(document, function(e) {
                            if (onAfterBlurWithin) {
                                onAfterBlurWithin(e);
                            }
                            C.setListener(document, null);
                        });
                    }
                });
            }
        }, [
            C,
            b,
            y,
            disabled,
            f,
            v,
            e,
            onAfterBlurWithin,
            onBeforeBlurWithin,
            onBlurWithin,
            onFocusWithin,
            onFocusWithinChange,
            onFocusWithinVisibleChange
        ]);
        useI();
        return S;
    }
    function $() {
        const e = o("react-compiler-runtime").c(4);
        const t = N("mousedown", g);
        const n = N(o("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", g);
        const r = N("keydown", g);
        let a;
        if (e[0] !== r || e[1] !== t || e[2] !== n) {
            a = [
                t,
                n,
                r
            ];
            e[0] = r;
            e[1] = t;
            e[2] = n;
            e[3] = a;
        } else {
            a = e[3];
        }
        return a;
    }
    function useP(e) {
        const t = o("react-compiler-runtime").c(15);
        const { disabled, initializer, onAfterBlurWithin, onBeforeBlurWithin, onBlurWithin, onFocusWithin, onFocusWithinChange, onFocusWithinVisibleChange } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                isFocused: false,
                isFocusVisible: false
            };
            t[0] = d;
        } else {
            d = t[0];
        }
        const mRef = useRef(d);
        const p = N("focusin", g);
        const f = N("focusout", g);
        const y = N("afterblur", g);
        const C = N("beforeblur", g);
        const b = $();
        let v;
        if (t[1] !== y || t[2] !== C || t[3] !== f || t[4] !== disabled || t[5] !== p || t[6] !== b || t[7] !== initializer || t[8] !== onAfterBlurWithin || t[9] !== onBeforeBlurWithin || t[10] !== onBlurWithin || t[11] !== onFocusWithin || t[12] !== onFocusWithinChange || t[13] !== onFocusWithinVisibleChange) {
            v = function(t) {
                const mRef_current = mRef.current;
                if (t !== null && mRef_current !== null) {
                    if (initializer) {
                        initializer(t);
                    }
                    E(b, t, mRef_current, function(t) {
                        if (mRef_current.isFocused && mRef_current.isFocusVisible !== t) {
                            mRef_current.isFocusVisible = t;
                            if (onFocusWithinVisibleChange) {
                                onFocusWithinVisibleChange(t);
                            }
                        }
                    });
                    p.setListener(t, function(t) {
                        if (disabled !== true) {
                            if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(t, "useFocusWithin")) {
                                if (!mRef_current.isFocused) {
                                    mRef_current.isFocused = true;
                                    mRef_current.isFocusVisible = h;
                                    if (onFocusWithinChange) {
                                        onFocusWithinChange(true);
                                    }
                                    if (mRef_current.isFocusVisible && onFocusWithinVisibleChange) {
                                        onFocusWithinVisibleChange(true);
                                    }
                                }
                                if (!mRef_current.isFocusVisible && h) {
                                    mRef_current.isFocusVisible = h;
                                    if (onFocusWithinVisibleChange) {
                                        onFocusWithinVisibleChange(true);
                                    }
                                }
                                if (onFocusWithin) {
                                    onFocusWithin(t);
                                }
                            }
                        }
                    });
                    f.setListener(t, function(r) {
                        if (disabled !== true) {
                            const a = r.nativeEvent.relatedTarget;
                            if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(r, "useFocusWithin")) {
                                if (mRef_current.isFocused && !o("ReactEventHelpers").isRelatedTargetWithin(t, a)) {
                                    mRef_current.isFocused = false;
                                    if (onFocusWithinChange) {
                                        onFocusWithinChange(false);
                                    }
                                    if (mRef_current.isFocusVisible && onFocusWithinVisibleChange) {
                                        onFocusWithinVisibleChange(false);
                                    }
                                    if (onBlurWithin) {
                                        onBlurWithin(r);
                                    }
                                } else {
                                    o("ReactEventHookPropagation").stopEventHookPropagation(r, "useFocusWithin");
                                }
                            }
                        }
                    });
                    C.setListener(t, function(e) {
                        if (disabled !== true && onBeforeBlurWithin) {
                            onBeforeBlurWithin(e);
                            y.setListener(document, function(e) {
                                if (onAfterBlurWithin) {
                                    onAfterBlurWithin(e);
                                }
                                y.setListener(document, null);
                            });
                        }
                    });
                } else if (t === null) {
                    p.clear();
                    f.clear();
                    C.clear();
                }
            };
            t[1] = y;
            t[2] = C;
            t[3] = f;
            t[4] = disabled;
            t[5] = p;
            t[6] = b;
            t[7] = initializer;
            t[8] = onAfterBlurWithin;
            t[9] = onBeforeBlurWithin;
            t[10] = onBlurWithin;
            t[11] = onFocusWithin;
            t[12] = onFocusWithinChange;
            t[13] = onFocusWithinVisibleChange;
            t[14] = v;
        } else {
            v = t[14];
        }
        const S = v;
        useI();
        return S;
    }
    function N(t, n) {
        const a = (e || (e = r("useUnsafeRef_DEPRECATED")))(null);
        let a_current = a.current;
        if (n) {
            n.passive = undefined;
        }
        if (a_current === null) {
            const l = o("ReactDOM").unstable_createEventHandle(t, n);
            const s = new Map;
            a_current = {
                setListener: function(t, n) {
                    let e = s.get(t);
                    if (e !== undefined) {
                        e();
                    }
                    if (n === null) {
                        s.delete(t);
                        return;
                    }
                    e = l(t, function() {
                        n(...arguments);
                    });
                    s.set(t, e);
                },
                clear: function() {
                    for(let e = Array.from(s.values()), t = 0; t < e.length; t++){
                        e[t]();
                    }
                    s.clear();
                }
            };
            a.current = a_current;
        }
        return a_current;
    }
    l.getGlobalFocusVisible = C;
    l.useFocus = useD;
    l.useFocusWithin_DEPRECATED = useX;
    l.useFocusWithin = useP;
}, 98);