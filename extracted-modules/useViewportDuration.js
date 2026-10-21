__d("useViewportDuration", [
    "BaseViewportMarginsContext",
    "CometVisibilityUserActivityMonitor",
    "ExecutionEnvironment",
    "HiddenSubtreePassiveContext",
    "Run",
    "getIntersectionMarginFromViewportMargin",
    "getStyleProperty",
    "gkx",
    "intersectionObserverEntryIsIntersecting",
    "nullIntersectionObserverEntryLogger",
    "react",
    "react-compiler-runtime",
    "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED",
    "useIntersectionObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useContext, useLayoutEffect, useMemo, useRef } = u;
    const f = (t)=>{
        if (t.target == null) {
            return null;
        }
        if (r("getStyleProperty")(t.target, "opacity") === "0") {
            return "TARGET_TRANSPARENT";
        }
        if (r("getStyleProperty")(t.target, "visibility") === "hidden") {
            return "TARGET_HIDDEN";
        }
        return null;
    };
    const g = (t)=>t.boundingClientRect && (t.boundingClientRect.height === 0 || t.boundingClientRect.width === 0);
    function useH(e) {
        const i = arguments;
        const s = o("react-compiler-runtime").c(38);
        const { onHidden, onIntersection, onVisibilityDurationUpdated, onVisible, options, threshold } = e;
        let b;
        if (s[0] !== options) {
            b = options === undefined ? {} : options;
            s[0] = options;
            s[1] = b;
        } else {
            b = s[1];
        }
        const v = b;
        const S = v.hiddenWhenZeroArea ?? false;
        const R = v.hiddenWhenCSSStyleHidden ?? false;
        const L = v.isEntryInViewport ?? r("intersectionObserverEntryIsIntersecting");
        const ERef = useRef(null);
        const kRef = useRef(false);
        const IRef = useRef(null);
        const TRef = useRef(null);
        const DRef = useRef(null);
        const x = useContext(r("HiddenSubtreePassiveContext"));
        const $ = v.activityMonitorOverride !== undefined ? v.activityMonitorOverride : r("CometVisibilityUserActivityMonitor");
        let P;
        if (s[2] !== $ || s[3] !== x || s[4] !== R || s[5] !== S) {
            P = function(t) {
                if ($ && !$.isUserActive()) {
                    return "USER_INACTIVE";
                }
                const e = x.getCurrentState();
                if (e.hidden) {
                    return "PUSH_VIEW_HIDDEN";
                }
                if (e.backgrounded) {
                    return "BACKGROUNDED";
                }
                if (kRef.current === false) {
                    return "NOT_IN_VIEWPORT";
                }
                if (S === true && g(t)) {
                    return "TARGET_SIZE_0";
                }
                if (R === true) {
                    const n = f(t);
                    if (n !== null) {
                        return n;
                    }
                }
                return null;
            };
            s[2] = $;
            s[3] = x;
            s[4] = R;
            s[5] = S;
            s[6] = P;
        } else {
            P = s[6];
        }
        const N = P;
        let M;
        if (s[7] !== N) {
            M = function(t) {
                return N(t) === null;
            };
            s[7] = N;
            s[8] = M;
        } else {
            M = s[8];
        }
        const w = M;
        let A;
        if (s[9] !== N || s[10] !== onHidden || s[11] !== onVisibilityDurationUpdated || s[12] !== onVisible) {
            A = function(t, n, r) {
                const e = ERef.current != null;
                if (!e && r) {
                    const o = Date.now();
                    ERef.current = o;
                    if (onVisible != null && n != null) {
                        onVisible({
                            entry: n,
                            visibleTime: o
                        });
                    }
                } else if (e && !r) {
                    const i = ERef.current ?? 0;
                    const hiddenTime = Date.now();
                    if (onHidden != null) {
                        const hiddenReason = t || n && N(n) || "UNKNOWN";
                        onHidden({
                            entry: n,
                            hiddenReason,
                            hiddenTime,
                            visibleDuration: hiddenTime - i,
                            visibleTime: i
                        });
                    }
                    ERef.current = null;
                }
            };
            s[9] = N;
            s[10] = onHidden;
            s[11] = onVisibilityDurationUpdated;
            s[12] = onVisible;
            s[13] = A;
        } else {
            A = s[13];
        }
        const F = A;
        const ORef = useRef(F);
        let B;
        let W;
        if (s[14] !== F) {
            B = function() {
                ORef.current = F;
            };
            W = [
                F
            ];
            s[14] = F;
            s[15] = B;
            s[16] = W;
        } else {
            B = s[15];
            W = s[16];
        }
        useLayoutEffect(B, W);
        let q;
        let U;
        if (s[17] === Symbol.for("react.memo_cache_sentinel")) {
            q = function() {
                return function() {
                    ORef.current("COMPONENT_UNMOUNTED", null, false);
                    if (IRef.current != null) {
                        IRef.current();
                        IRef.current = null;
                    }
                    if (DRef.current != null) {
                        DRef.current.remove();
                        DRef.current = null;
                    }
                    if (TRef.current != null) {
                        TRef.current.remove();
                        TRef.current = null;
                    }
                };
            };
            U = [];
            s[17] = q;
            s[18] = U;
        } else {
            q = s[17];
            U = s[18];
        }
        r("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(q, U);
        let V;
        if (s[19] !== w || s[20] !== $ || s[21] !== x || s[22] !== L || s[23] !== onIntersection) {
            V = function(t) {
                r("nullIntersectionObserverEntryLogger")(t, `IntersectionObserverEntry is null. num_arguments=${i.length}`);
                const e = kRef.current = L(t);
                if (onIntersection) {
                    onIntersection({
                        entry: t,
                        isElementVisible: w(t)
                    });
                }
                if (IRef.current == null) {
                    if (e) {
                        IRef.current = $ && $.subscribe(function(e) {
                            return ORef.current("USER_INACTIVE", t, w(t));
                        });
                        DRef.current = x.subscribeToChanges(function(e) {
                            return ORef.current(e.hidden ? "PUSH_VIEW_HIDDEN" : "BACKGROUNDED", t, w(t));
                        });
                        if (TRef.current != null) {
                            TRef.current.remove();
                        }
                        TRef.current = o("Run").onBeforeUnload(function(e) {
                            ORef.current("PAGE_UNLOAD", null, false);
                        }, false);
                    }
                } else if (!e) {
                    if (IRef.current != null) {
                        IRef.current();
                        IRef.current = null;
                    }
                    if (DRef.current) {
                        DRef.current.remove();
                        DRef.current = null;
                    }
                    if (TRef.current != null) {
                        TRef.current.remove();
                        TRef.current = null;
                    }
                }
                ORef.current(null, t, w(t));
            };
            s[19] = w;
            s[20] = $;
            s[21] = x;
            s[22] = L;
            s[23] = onIntersection;
            s[24] = V;
        } else {
            V = s[24];
        }
        const H = V;
        const G = useContext(r("BaseViewportMarginsContext"));
        const bottom = G.bottom + 1;
        const j = G.left + 1;
        const K = G.right + 1;
        const top = G.top + 1;
        let X;
        if (s[25] !== bottom || s[26] !== j || s[27] !== K || s[28] !== top) {
            X = {
                bottom,
                left: j,
                right: K,
                top
            };
            s[25] = bottom;
            s[26] = j;
            s[27] = K;
            s[28] = top;
            s[29] = X;
        } else {
            X = s[29];
        }
        const Y = X;
        const J = v.root ?? null;
        let Z;
        if (s[30] !== Y || s[31] !== v.rootMargin) {
            Z = v.rootMargin ?? r("getIntersectionMarginFromViewportMargin")(Y);
            s[30] = Y;
            s[31] = v.rootMargin;
            s[32] = Z;
        } else {
            Z = s[32];
        }
        const te = Z;
        let ne;
        if (s[33] !== v.scrollMargin || s[34] !== J || s[35] !== te || s[36] !== threshold) {
            ne = {
                root: J,
                rootMargin: te,
                scrollMargin: v.scrollMargin,
                threshold
            };
            s[33] = v.scrollMargin;
            s[34] = J;
            s[35] = te;
            s[36] = threshold;
            s[37] = ne;
        } else {
            ne = s[37];
        }
        return r("useIntersectionObserver")(H, ne);
    }
    function y(e) {
        return C;
    }
    function C(e) {}
    const b = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? useH : y;
    l.default = b;
}, 98);