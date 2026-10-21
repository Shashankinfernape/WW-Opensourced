__d("useCometPreloaderBase", [
    "CometEagerPreloadThreshold",
    "JSScheduler",
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useRef } = u;
    const p = "onfocusin";
    const _ = "onhoverin";
    const f = "onpressin";
    const g = "onhighintent";
    const h = 50;
    function useY(t, n, a, i, l) {
        const s = o("react-compiler-runtime").c(51);
        const u = (t === "tooltip" || t === "button_eager") && o("CometEagerPreloadThreshold").EAGER_PRELOAD_THRESHOLD_MS != null ? o("CometEagerPreloadThreshold").EAGER_PRELOAD_THRESHOLD_MS : h;
        const cRef = useRef(null);
        const yRef = useRef(null);
        const CRef = useRef(null);
        const bRef = useRef(null);
        const vRef = useRef(null);
        let S;
        if (s[0] !== u) {
            S = function(n) {
                yRef.current = o("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE((e || (e = r("JSScheduler"))).priorities.unstable_UserBlocking, n, u);
            };
            s[0] = u;
            s[1] = S;
        } else {
            S = s[1];
        }
        const R = S;
        let L;
        if (s[2] !== u) {
            L = function(n) {
                cRef.current = o("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE((e || (e = r("JSScheduler"))).priorities.unstable_UserBlocking, n, u);
            };
            s[2] = u;
            s[3] = L;
        } else {
            L = s[3];
        }
        const E = L;
        let k;
        if (s[4] !== u) {
            k = function(t) {
                CRef.current = r("setTimeout")(t, u);
            };
            s[4] = u;
            s[5] = k;
        } else {
            k = s[5];
        }
        const I = k;
        let T;
        if (s[6] !== l) {
            T = l ?? {};
            s[6] = l;
            s[7] = T;
        } else {
            T = s[7];
        }
        const D = T;
        const { highSignalPreloaderCallback, lowSignalPreloaderCallback } = D;
        let P;
        if (s[8] !== a || s[9] !== highSignalPreloaderCallback || s[10] !== n || s[11] !== lowSignalPreloaderCallback || s[12] !== R || s[13] !== I || s[14] !== t) {
            P = function(r) {
                if (t === "tooltip" || t === "mount_DANGEROUS_I_KNOW_WHAT_IM_DOING" || (t === "button" || t === "button_aggressive" || t === "button_eager") && n != null) {
                    const e = function() {
                        if (t === "tooltip") {
                            if (a != null) {
                                a();
                            }
                            if (highSignalPreloaderCallback != null) {
                                highSignalPreloaderCallback(_);
                            }
                            if (n != null) {
                                n();
                            }
                        } else if (t === "button" || t === "button_aggressive" || t === "button_eager") {
                            if (n != null) {
                                n();
                            }
                        }
                        lowSignalPreloaderCallback?.(_);
                    };
                    R(e);
                }
                if (t === "button_aggressive") {
                    const o = function() {
                        a?.();
                        highSignalPreloaderCallback?.(_);
                    };
                    I(o);
                }
            };
            s[8] = a;
            s[9] = highSignalPreloaderCallback;
            s[10] = n;
            s[11] = lowSignalPreloaderCallback;
            s[12] = R;
            s[13] = I;
            s[14] = t;
            s[15] = P;
        } else {
            P = s[15];
        }
        const N = P;
        let M;
        if (s[16] !== i) {
            M = function() {
                r("clearTimeout")(yRef.current);
                r("clearTimeout")(CRef.current);
                yRef.current = null;
                CRef.current = null;
                if (i) {
                    i();
                }
                if (bRef.current != null) {
                    bRef.current();
                }
                if (vRef.current != null) {
                    vRef.current();
                }
            };
            s[16] = i;
            s[17] = M;
        } else {
            M = s[17];
        }
        const onHoverOutPreloader = M;
        let A;
        if (s[18] !== a || s[19] !== highSignalPreloaderCallback || s[20] !== n || s[21] !== lowSignalPreloaderCallback || s[22] !== E || s[23] !== t) {
            A = function(r) {
                if (t === "tooltip" || (t === "button" || t === "button_aggressive" || t === "button_eager") && n != null) {
                    const e = function() {
                        if (t === "tooltip" || t === "button_aggressive") {
                            if (a != null) {
                                a();
                            }
                            if (highSignalPreloaderCallback != null) {
                                highSignalPreloaderCallback(p);
                            }
                            if (n != null) {
                                n();
                            }
                        } else if (t === "button" || t === "button_eager") {
                            if (n != null) {
                                n();
                            }
                        }
                        lowSignalPreloaderCallback?.(p);
                    };
                    E(e);
                }
            };
            s[18] = a;
            s[19] = highSignalPreloaderCallback;
            s[20] = n;
            s[21] = lowSignalPreloaderCallback;
            s[22] = E;
            s[23] = t;
            s[24] = A;
        } else {
            A = s[24];
        }
        const F = A;
        let O;
        if (s[25] !== i) {
            O = function() {
                r("clearTimeout")(cRef.current);
                cRef.current = null;
                if (bRef.current != null) {
                    bRef.current();
                }
                if (vRef.current != null) {
                    vRef.current();
                }
                if (i) {
                    i();
                }
            };
            s[25] = i;
            s[26] = O;
        } else {
            O = s[26];
        }
        const B = O;
        let W;
        if (s[27] !== a || s[28] !== highSignalPreloaderCallback || s[29] !== t) {
            W = function() {
                if (t === "button" || t === "button_aggressive" || t === "button_eager") {
                    if (a != null) {
                        a();
                    }
                    if (highSignalPreloaderCallback != null) {
                        highSignalPreloaderCallback(f);
                    }
                }
            };
            s[27] = a;
            s[28] = highSignalPreloaderCallback;
            s[29] = t;
            s[30] = W;
        } else {
            W = s[30];
        }
        const q = W;
        let U;
        if (s[31] !== a || s[32] !== highSignalPreloaderCallback || s[33] !== n || s[34] !== lowSignalPreloaderCallback) {
            U = function(o) {
                (e || (e = r("JSScheduler"))).scheduleSpeculativeCallback(function() {
                    if (o === true) {
                        if (a != null) {
                            a();
                        }
                        if (n != null) {
                            n();
                        }
                        if (lowSignalPreloaderCallback != null) {
                            lowSignalPreloaderCallback(g);
                        }
                        if (highSignalPreloaderCallback != null) {
                            highSignalPreloaderCallback(g);
                        }
                    }
                });
            };
            s[31] = a;
            s[32] = highSignalPreloaderCallback;
            s[33] = n;
            s[34] = lowSignalPreloaderCallback;
            s[35] = U;
        } else {
            U = s[35];
        }
        const onHighIntentPreloader = U;
        let H;
        if (s[36] !== a || s[37] !== highSignalPreloaderCallback || s[38] !== I || s[39] !== t) {
            H = function() {
                if (t === "button_aggressive") {
                    const e = function() {
                        a?.();
                        highSignalPreloaderCallback?.(_);
                    };
                    r("clearTimeout")(CRef.current);
                    I(e);
                }
            };
            s[36] = a;
            s[37] = highSignalPreloaderCallback;
            s[38] = I;
            s[39] = t;
            s[40] = H;
        } else {
            H = s[40];
        }
        const onHoverMovePreloader = H;
        let z;
        let j;
        if (s[41] === Symbol.for("react.memo_cache_sentinel")) {
            z = function() {
                return function() {
                    if (bRef.current != null) {
                        bRef.current();
                    }
                    if (vRef.current != null) {
                        vRef.current();
                    }
                    r("clearTimeout")(yRef.current);
                    r("clearTimeout")(cRef.current);
                    r("clearTimeout")(CRef.current);
                    yRef.current = null;
                    CRef.current = null;
                    cRef.current = null;
                };
            };
            j = [];
            s[41] = z;
            s[42] = j;
        } else {
            z = s[41];
            j = s[42];
        }
        useEffect(z, j);
        let K;
        if (s[43] !== F || s[44] !== B || s[45] !== onHighIntentPreloader || s[46] !== N || s[47] !== onHoverMovePreloader || s[48] !== onHoverOutPreloader || s[49] !== q) {
            K = {
                onFocusInPreloader: F,
                onFocusOutPreloader: B,
                onHighIntentPreloader,
                onHoverInPreloader: N,
                onHoverMovePreloader,
                onHoverOutPreloader,
                onPressInPreloader: q
            };
            s[43] = F;
            s[44] = B;
            s[45] = onHighIntentPreloader;
            s[46] = N;
            s[47] = onHoverMovePreloader;
            s[48] = onHoverOutPreloader;
            s[49] = q;
            s[50] = K;
        } else {
            K = s[50];
        }
        return K;
    }
    l.default = useY;
}, 98);