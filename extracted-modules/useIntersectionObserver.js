__d("useIntersectionObserver", [
    "DOMRectReadOnly",
    "ExecutionEnvironment",
    "JSScheduler",
    "observeIntersection",
    "react",
    "react-compiler-runtime",
    "useDynamicCallbackDANGEROUS"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = s || (s = o("react"));
    const d = s;
    const { useCallback, useLayoutEffect, useRef } = d;
    const f = {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    };
    const rootBounds = r("DOMRectReadOnly").fromRect();
    const h = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
    };
    function y(e) {
        let t;
        if (e == null) {
            t = f;
        } else {
            if (typeof e === "string") {
                return e;
            }
            if (typeof e === "number") {
                t = {
                    bottom: e,
                    left: e,
                    right: e,
                    top: e
                };
            } else {
                t = babelHelpers.extends({}, f, e);
            }
        }
        const n = t;
        const { bottom, left, right, top } = n;
        return `${top}px ${right}px ${bottom}px ${left}px`;
    }
    function C(e, t, n, onIntersect) {
        const { root, rootMargin, scrollMargin, threshold } = t;
        const u = root === null ? null : root();
        const c = e == null || e.element !== n || e.onIntersect !== onIntersect || e.observedRoot !== u || e.rootMargin !== rootMargin || e.scrollMargin !== scrollMargin || e.threshold !== threshold;
        if (c) {
            if (e) {
                e.subscription.remove();
            }
            const subscription = r("observeIntersection")(n, onIntersect, {
                root: u,
                rootMargin: y(rootMargin),
                scrollMargin: y(scrollMargin),
                threshold
            });
            return babelHelpers.extends({}, t, {
                element: n,
                observedRoot: u,
                onIntersect,
                subscription
            });
        }
        return e;
    }
    function useB(e, t) {
        const n = o("react-compiler-runtime").c(16);
        const { disabled, root, rootMargin, scrollMargin, threshold } = t;
        const d = disabled === undefined ? false : disabled;
        const mRef = useRef(null);
        const fRef = useRef(null);
        const yRef = useRef(null);
        const bRef = useRef(null);
        const vRef = useRef(false);
        const S = r("useDynamicCallbackDANGEROUS")(e);
        let R;
        if (n[0] !== S || n[1] !== root || n[2] !== rootMargin || n[3] !== scrollMargin || n[4] !== threshold) {
            R = function(t) {
                if (mRef.current !== t) {
                    if (mRef.current != null && t == null) {
                        if (bRef.current != null) {
                            (u || (u = o("JSScheduler"))).cancelCallback(bRef.current);
                        }
                        const e = mRef.current;
                        bRef.current = (u || (u = o("JSScheduler"))).scheduleImmediatePriCallback(function() {
                            if (mRef.current === null && vRef.current === false) {
                                S({
                                    boundingClientRect: h,
                                    intersectionRatio: 0,
                                    intersectionRect: h,
                                    isIntersecting: false,
                                    isVisible: false,
                                    rootBounds,
                                    target: e,
                                    time: Date.now()
                                });
                            }
                            bRef.current = null;
                        });
                    }
                    mRef.current = t;
                    if (fRef.current != null) {
                        fRef.current.subscription.remove();
                        fRef.current = null;
                    }
                    if (yRef.current != null) {
                        (u || (u = o("JSScheduler"))).cancelCallback(yRef.current);
                    }
                    yRef.current = (u || (u = o("JSScheduler"))).scheduleImmediatePriCallback(function() {
                        if (mRef.current != null) {
                            fRef.current = C(fRef.current, {
                                root,
                                rootMargin,
                                scrollMargin,
                                threshold
                            }, mRef.current, S);
                        }
                        yRef.current = null;
                    });
                }
            };
            n[0] = S;
            n[1] = root;
            n[2] = rootMargin;
            n[3] = scrollMargin;
            n[4] = threshold;
            n[5] = R;
        } else {
            R = n[5];
        }
        const L = R;
        let E;
        let k;
        if (n[6] !== d || n[7] !== S || n[8] !== root || n[9] !== rootMargin || n[10] !== scrollMargin || n[11] !== threshold) {
            E = function() {
                if (!d) {
                    if (yRef.current != null) {
                        (u || (u = o("JSScheduler"))).cancelCallback(yRef.current);
                    }
                    yRef.current = (u || (u = o("JSScheduler"))).scheduleImmediatePriCallback(function() {
                        if (mRef.current != null) {
                            fRef.current = C(fRef.current, {
                                root,
                                rootMargin,
                                scrollMargin,
                                threshold
                            }, mRef.current, S);
                        }
                        yRef.current = null;
                    });
                    return function() {
                        if (fRef.current != null) {
                            fRef.current.subscription.remove();
                            fRef.current = null;
                        }
                        if (yRef.current != null) {
                            (u || (u = o("JSScheduler"))).cancelCallback(yRef.current);
                            yRef.current = null;
                        }
                    };
                }
            };
            k = [
                S,
                root,
                d,
                rootMargin,
                scrollMargin,
                threshold
            ];
            n[6] = d;
            n[7] = S;
            n[8] = root;
            n[9] = rootMargin;
            n[10] = scrollMargin;
            n[11] = threshold;
            n[12] = E;
            n[13] = k;
        } else {
            E = n[12];
            k = n[13];
        }
        useLayoutEffect(E, k);
        let I;
        let T;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            I = function() {
                vRef.current = false;
                return function() {
                    vRef.current = true;
                };
            };
            T = [];
            n[14] = I;
            n[15] = T;
        } else {
            I = n[14];
            T = n[15];
        }
        useLayoutEffect(I, T);
        return L;
    }
    function v(e, t, n) {
        return S;
    }
    function S(e) {}
    const R = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? useB : v;
    l.default = R;
}, 98);