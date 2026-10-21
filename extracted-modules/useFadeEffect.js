__d("useFadeEffect", [
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useLayoutEffect, useReducer, useRef } = s;
    const p = 1000;
    function _(e, t) {
        switch(t.type){
            case "start":
                return {
                    isTransitioning: true,
                    shouldBeVisible: t.shouldBeVisible
                };
            case "finish":
                return {
                    isTransitioning: false,
                    shouldBeVisible: e.shouldBeVisible
                };
            default:
                return e;
        }
    }
    function useF(e) {
        const t = o("react-compiler-runtime").c(12);
        const nRef = useRef(null);
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                isTransitioning: false,
                shouldBeVisible: false
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = useReducer(_, a);
        const l = i[0];
        const s = i[1];
        const { isTransitioning, shouldBeVisible } = l;
        const gRef = useRef(null);
        const hRef = useRef(null);
        let y;
        let C;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            y = function() {
                return function() {
                    if (gRef.current != null) {
                        r("clearTimeout")(gRef.current);
                    }
                    if (hRef.current != null) {
                        window.cancelAnimationFrame(hRef.current);
                    }
                };
            };
            C = [];
            t[1] = y;
            t[2] = C;
        } else {
            y = t[1];
            C = t[2];
        }
        r("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(y, C);
        let b;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            b = function() {
                s({
                    type: "finish"
                });
                if (gRef.current != null) {
                    r("clearTimeout")(gRef.current);
                }
                gRef.current = null;
            };
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = b;
        let S;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            S = function(shouldBeVisible_1) {
                if (hRef.current != null) {
                    window.cancelAnimationFrame(hRef.current);
                }
                hRef.current = window.requestAnimationFrame(function() {
                    s({
                        shouldBeVisible: shouldBeVisible_1,
                        type: "start"
                    });
                    hRef.current = null;
                    if (gRef.current != null) {
                        r("clearTimeout")(gRef.current);
                    }
                    gRef.current = r("setTimeout")(v, p);
                });
            };
            t[4] = S;
        } else {
            S = t[4];
        }
        const R = S;
        const LRef = useRef(false);
        let E;
        let k;
        if (t[5] !== e) {
            E = function() {
                if (LRef.current !== e && (!e || nRef.current != null)) {
                    R(e);
                }
                LRef.current = e;
            };
            k = [
                e,
                R
            ];
            t[5] = e;
            t[6] = E;
            t[7] = k;
        } else {
            E = t[6];
            k = t[7];
        }
        useLayoutEffect(E, k);
        let I;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            I = function(t) {
                const nRef_current = nRef.current;
                nRef.current = t;
                if (t != null) {
                    t.addEventListener("transitionend", v);
                    t.addEventListener("webkitTransitionEnd", v);
                    if (LRef.current === true) {
                        R(true);
                    }
                } else if (nRef_current != null) {
                    nRef_current.removeEventListener("transitionend", v);
                    nRef_current.removeEventListener("webkitTransitionEnd", v);
                }
            };
            t[8] = I;
        } else {
            I = t[8];
        }
        const T = I;
        const D = isTransitioning || shouldBeVisible || e;
        let x;
        if (t[9] !== shouldBeVisible || t[10] !== D) {
            x = [
                D,
                shouldBeVisible,
                T
            ];
            t[9] = shouldBeVisible;
            t[10] = D;
            t[11] = x;
        } else {
            x = t[11];
        }
        return x;
    }
    l.default = useF;
}, 98);