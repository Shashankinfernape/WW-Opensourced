__d("useDynamicVirtualizationMargin.react", [
    "ExecutionEnvironment",
    "FBLogger",
    "JSResourceForInteraction",
    "VirtualizationConfig",
    "VirtualizationContainerContext",
    "cometVirtualizationMarginBounds",
    "cometVirtualizationMarginRecord",
    "cometVirtualizationMarginStep",
    "err",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "useDebouncedComet",
    "useWeightedScrollSpeedRef.react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore } = u;
    const g = r("JSResourceForInteraction")("CometVirtualizationMarginSession").__setRef("useDynamicVirtualizationMargin.react");
    function useH(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e) {
            n = function() {
                if (e) {
                    return g.getModuleIfRequireable();
                }
                return null;
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = useState(n);
        const i = a[0];
        const l = a[1];
        let s;
        let u;
        if (t[2] !== e) {
            s = function() {
                if (e) {
                    let t = false;
                    r("promiseDone")(g.load().then((e)=>{
                        if (!t) {
                            l(function() {
                                return e;
                            });
                        }
                    }));
                    return function() {
                        t = true;
                    };
                }
            };
            u = [
                e
            ];
            t[2] = e;
            t[3] = s;
            t[4] = u;
        } else {
            s = t[3];
            u = t[4];
        }
        useEffect(s, u);
        return i;
    }
    const y = r("JSResourceForInteraction")("CometVirtualizationSharedMargin").__setRef("useDynamicVirtualizationMargin.react");
    const wait = o("VirtualizationConfig").getScrollHandlingDebounceMs();
    let b = false;
    function useV(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e) {
            n = function() {
                if (e) {
                    return y.getModuleIfRequireable();
                }
                return null;
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = useState(n);
        const i = a[0];
        const l = a[1];
        let s;
        let u;
        if (t[2] !== e) {
            s = function() {
                if (e) {
                    let t = false;
                    r("promiseDone")(y.load().then((e)=>{
                        if (!t) {
                            l(function() {
                                return e;
                            });
                        }
                    }).catch(S));
                    return function() {
                        t = true;
                    };
                }
            };
            u = [
                e
            ];
            t[2] = e;
            t[3] = s;
            t[4] = u;
        } else {
            s = t[3];
            u = t[4];
        }
        useEffect(s, u);
        return i;
    }
    function S(e) {
        if (!b) {
            b = true;
            r("FBLogger")("comet_virtualization").catching(e instanceof Error ? e : r("err")(String(e))).warn("Failed to load the shared virtualization margin");
        }
    }
    function R(t, n, initialLeftRightMargin, initialTopBottomMargin, isInfiniteScrollUp, s, readAheadMarginMax) {
        const c = {
            bottom: initialTopBottomMargin,
            left: initialLeftRightMargin,
            right: initialLeftRightMargin,
            top: initialTopBottomMargin
        };
        if (!t || n == null || s == null || !(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return c;
        }
        const window_innerHeight = window.innerHeight;
        if (!Number.isFinite(window_innerHeight) || window_innerHeight <= 0) {
            return c;
        }
        const m = s.getPersistedMarginForSurface(n, o("cometVirtualizationMarginRecord").getScreenBucket(window_innerHeight));
        if (m == null) {
            return c;
        }
        const p = o("cometVirtualizationMarginBounds").computeMarginBounds(initialTopBottomMargin, window_innerHeight, isInfiniteScrollUp, readAheadMarginMax);
        if (isInfiniteScrollUp) {
            return babelHelpers.extends({}, c, {
                top: o("cometVirtualizationMarginBounds").clampRestoredMargin(m.topMargin, p.topMax, p.lowerBound)
            });
        }
        return babelHelpers.extends({}, c, {
            bottom: o("cometVirtualizationMarginBounds").clampRestoredMargin(m.bottomMargin, p.bottomMax, p.lowerBound)
        });
    }
    function useL(t, initialLeftRightMargin, initialTopBottomMargin, i, l, s, u, c, g) {
        const y = o("react-compiler-runtime").c(66);
        const b = t === undefined ? false : t;
        const isInfiniteScrollUp = i === undefined ? false : i;
        const L = l === undefined ? null : l;
        const T = s === undefined ? false : s;
        const D = u === undefined ? null : u;
        const readAheadMarginMax = c === undefined ? null : c;
        const $ = g === undefined ? false : g;
        const P = D != null && D !== "" ? D : null;
        const N = b && $ && P != null;
        const M = b && T && P != null && !N;
        const w = useH(M);
        const A = M && w != null;
        let F;
        if (y[0] !== w || y[1] !== initialLeftRightMargin || y[2] !== initialTopBottomMargin || y[3] !== isInfiniteScrollUp || y[4] !== P || y[5] !== readAheadMarginMax || y[6] !== A) {
            F = function() {
                return R(A, P, initialLeftRightMargin, initialTopBottomMargin, isInfiniteScrollUp, w, readAheadMarginMax);
            };
            y[0] = w;
            y[1] = initialLeftRightMargin;
            y[2] = initialTopBottomMargin;
            y[3] = isInfiniteScrollUp;
            y[4] = P;
            y[5] = readAheadMarginMax;
            y[6] = A;
            y[7] = F;
        } else {
            F = y[7];
        }
        const O = useState(F);
        const B = O[0];
        const W = O[1];
        const qRef = useRef(false);
        const U = useV(N);
        let V;
        if (y[8] !== initialLeftRightMargin || y[9] !== initialTopBottomMargin || y[10] !== isInfiniteScrollUp || y[11] !== P || y[12] !== readAheadMarginMax || y[13] !== U) {
            V = U != null && P != null ? U.getSharedMarginKey(P, {
                initialLeftRightMargin,
                initialTopBottomMargin,
                isInfiniteScrollUp,
                readAheadMarginMax
            }) : null;
            y[8] = initialLeftRightMargin;
            y[9] = initialTopBottomMargin;
            y[10] = isInfiniteScrollUp;
            y[11] = P;
            y[12] = readAheadMarginMax;
            y[13] = U;
            y[14] = V;
        } else {
            V = y[14];
        }
        const H = V;
        const GRef = useRef(0);
        const z = r("useWeightedScrollSpeedRef.react")(L);
        const j = useContext(r("VirtualizationContainerContext"));
        const KRef = useRef(B);
        let Q;
        let X;
        if (y[15] !== B) {
            X = function() {
                KRef.current = B;
            };
            Q = [
                B
            ];
            y[15] = B;
            y[16] = Q;
            y[17] = X;
        } else {
            Q = y[16];
            X = y[17];
        }
        useEffect(X, Q);
        let Y;
        if (y[18] !== initialLeftRightMargin || y[19] !== initialTopBottomMargin || y[20] !== isInfiniteScrollUp || y[21] !== readAheadMarginMax || y[22] !== z || y[23] !== L || y[24] !== H || y[25] !== U || y[26] !== j?.rootElementRef) {
            Y = function(o) {
                if (U == null || H == null || !(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                    return I;
                }
                const t = typeof L === "function" ? L() : j?.rootElementRef.current;
                return U.subscribeToSharedMargin(H, {
                    initialLeftRightMargin,
                    initialTopBottomMargin,
                    isInfiniteScrollUp,
                    readAheadMarginMax
                }, KRef.current, t ?? window, z, o);
            };
            y[18] = initialLeftRightMargin;
            y[19] = initialTopBottomMargin;
            y[20] = isInfiniteScrollUp;
            y[21] = readAheadMarginMax;
            y[22] = z;
            y[23] = L;
            y[24] = H;
            y[25] = U;
            y[26] = j?.rootElementRef;
            y[27] = Y;
        } else {
            Y = y[27];
        }
        const J = Y;
        let Z;
        if (y[28] !== H || y[29] !== U) {
            Z = function() {
                if (U == null || H == null) {
                    return null;
                }
                return U.readSharedMargin(H);
            };
            y[28] = H;
            y[29] = U;
            y[30] = Z;
        } else {
            Z = y[30];
        }
        const ee = useSyncExternalStore(J, Z, k);
        const te = ee ?? B;
        let ne;
        if (y[31] !== initialTopBottomMargin || y[32] !== b || y[33] !== isInfiniteScrollUp || y[34] !== readAheadMarginMax || y[35] !== z || y[36] !== H) {
            ne = function(t) {
                if (!(!b || H != null)) {
                    const e = t();
                    const n = e > GRef.current;
                    GRef.current = e;
                    W(function(e) {
                        const t = o("cometVirtualizationMarginStep").computeNextMargin(e, n, z.weightedSpeed, o("cometVirtualizationMarginBounds").computeMarginBounds(initialTopBottomMargin, window.innerHeight, isInfiniteScrollUp, readAheadMarginMax));
                        if (t === e) {
                            return e;
                        }
                        qRef.current = true;
                        return t;
                    });
                }
            };
            y[31] = initialTopBottomMargin;
            y[32] = b;
            y[33] = isInfiniteScrollUp;
            y[34] = readAheadMarginMax;
            y[35] = z;
            y[36] = H;
            y[37] = ne;
        } else {
            ne = y[37];
        }
        const re = ne;
        let oe;
        if (y[38] === Symbol.for("react.memo_cache_sentinel")) {
            oe = {
                wait
            };
            y[38] = oe;
        } else {
            oe = y[38];
        }
        const ae = r("useDebouncedComet")(re, oe);
        let ie;
        if (y[39] !== ae || y[40] !== b || y[41] !== L || y[42] !== H || y[43] !== j?.rootElementRef) {
            ie = function() {
                if (!(!b || H != null)) {
                    const t = typeof L === "function" ? L() : j?.rootElementRef.current;
                    const n = !t;
                    const o = n ? window : t;
                    if (!(!(e || (e = r("ExecutionEnvironment"))).canUseDOM || typeof window === "undefined")) {
                        const a = function() {
                            const e = n ? window.scrollY : t?.scrollTop;
                            return e ?? 0;
                        };
                        const i = function() {
                            ae(a);
                        };
                        o?.addEventListener("scroll", i, {
                            passive: true
                        });
                        return function() {
                            o?.removeEventListener("scroll", i);
                        };
                    }
                }
            };
            y[39] = ae;
            y[40] = b;
            y[41] = L;
            y[42] = H;
            y[43] = j?.rootElementRef;
            y[44] = ie;
        } else {
            ie = y[44];
        }
        const le = j?.rootElementRef;
        let se;
        if (y[45] !== ae || y[46] !== b || y[47] !== L || y[48] !== H || y[49] !== le) {
            se = [
                L,
                le,
                ae,
                b,
                H
            ];
            y[45] = ae;
            y[46] = b;
            y[47] = L;
            y[48] = H;
            y[49] = le;
            y[50] = se;
        } else {
            se = y[50];
        }
        useEffect(ie, se);
        let ue;
        let ce;
        if (y[51] !== w || y[52] !== initialLeftRightMargin || y[53] !== initialTopBottomMargin || y[54] !== isInfiniteScrollUp || y[55] !== P || y[56] !== readAheadMarginMax || y[57] !== A) {
            ue = function() {
                if (!(!A || w == null)) {
                    const e = w;
                    const t = ()=>{
                        if (!qRef.current) {
                            const t = R(true, P, initialLeftRightMargin, initialTopBottomMargin, isInfiniteScrollUp, e, readAheadMarginMax);
                            W(function(e) {
                                if (o("cometVirtualizationMarginStep").areMarginsEqual(e, t)) {
                                    return e;
                                }
                                return t;
                            });
                        }
                    };
                    e.initPersistedMargins();
                    if (e.hasLoadedPersistedMargins()) {
                        t();
                        return;
                    }
                    let r = E;
                    r = e.subscribeToPersistedMargins(function() {
                        r();
                        t();
                    });
                    return function() {
                        return r();
                    };
                }
            };
            ce = [
                w,
                A,
                P,
                initialLeftRightMargin,
                initialTopBottomMargin,
                isInfiniteScrollUp,
                readAheadMarginMax
            ];
            y[51] = w;
            y[52] = initialLeftRightMargin;
            y[53] = initialTopBottomMargin;
            y[54] = isInfiniteScrollUp;
            y[55] = P;
            y[56] = readAheadMarginMax;
            y[57] = A;
            y[58] = ue;
            y[59] = ce;
        } else {
            ue = y[58];
            ce = y[59];
        }
        useEffect(ue, ce);
        let de;
        let me;
        if (y[60] !== w || y[61] !== B || y[62] !== P || y[63] !== A) {
            de = function() {
                if (!(!A || P == null || w == null || !qRef.current || !(e || (e = r("ExecutionEnvironment"))).canUseDOM)) {
                    const t = window.innerHeight;
                    if (!(!Number.isFinite(t) || t <= 0)) {
                        w.recordObservedMargin(P, o("cometVirtualizationMarginRecord").getScreenBucket(t), {
                            bottomMargin: B.bottom,
                            topMargin: B.top
                        });
                    }
                }
            };
            me = [
                w,
                A,
                P,
                B
            ];
            y[60] = w;
            y[61] = B;
            y[62] = P;
            y[63] = A;
            y[64] = de;
            y[65] = me;
        } else {
            de = y[64];
            me = y[65];
        }
        useEffect(de, me);
        return te;
    }
    function E() {}
    function k() {
        return null;
    }
    function I() {}
    l.default = useL;
}, 98);