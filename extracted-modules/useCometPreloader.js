__d("useCometPreloader", [
    "Bootloader",
    "CometMouseActivity",
    "ServerJsRuntimeEnvironment",
    "emptyFunction",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useCometPreloaderBase"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useMemo, useRef } = s;
    function m(e) {
        return e.pointerType === "mouse";
    }
    function p(e, t, n, a, i) {
        const l = o("react-compiler-runtime").c(1);
        let s;
        if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
            let u;
            s = {
                onFocusInPreloader: u = r("emptyFunction"),
                onFocusOutPreloader: u,
                onHighIntentPreloader: u,
                onHoverInPreloader: u,
                onHoverMovePreloader: u,
                onHoverOutPreloader: u,
                onPressInPreloader: u
            };
            l[0] = s;
        } else {
            s = l[0];
        }
        return s;
    }
    function _(e, t, n, a, i) {
        const l = o("react-compiler-runtime").c(23);
        let s;
        if (l[0] !== i) {
            s = function(t) {
                r("Bootloader").forceFlush();
                if (!(i == null || i.lowSignalPreloaderCallback == null)) {
                    i.lowSignalPreloaderCallback(t);
                }
            };
            l[0] = i;
            l[1] = s;
        } else {
            s = l[1];
        }
        const lowSignalPreloaderCallback = s;
        let c;
        if (l[2] !== i) {
            c = function(t) {
                r("Bootloader").forceFlush();
                if (!(i == null || i.highSignalPreloaderCallback == null)) {
                    i.highSignalPreloaderCallback(t);
                }
            };
            l[2] = i;
            l[3] = c;
        } else {
            c = l[3];
        }
        const highSignalPreloaderCallback = c;
        let _;
        if (l[4] !== highSignalPreloaderCallback || l[5] !== lowSignalPreloaderCallback) {
            _ = {
                highSignalPreloaderCallback,
                lowSignalPreloaderCallback
            };
            l[4] = highSignalPreloaderCallback;
            l[5] = lowSignalPreloaderCallback;
            l[6] = _;
        } else {
            _ = l[6];
        }
        const f = _;
        const gRef = useRef();
        const h = e === "button_aggressive" ? "button" : e;
        let y;
        if (l[7] !== a) {
            y = function() {
                gRef.current?.();
                gRef.current = null;
                a?.();
            };
            l[7] = a;
            l[8] = y;
        } else {
            y = l[8];
        }
        const b = r("useCometPreloaderBase")(h, t, n, y, f);
        const { onFocusInPreloader, onFocusOutPreloader, onHighIntentPreloader, onHoverInPreloader, onHoverOutPreloader, onPressInPreloader } = b;
        let I;
        if (l[9] !== onPressInPreloader) {
            I = function(t) {
                if (m(t)) {
                    onPressInPreloader(t);
                }
            };
            l[9] = onPressInPreloader;
            l[10] = I;
        } else {
            I = l[10];
        }
        const T = I;
        let D;
        if (l[11] !== f || l[12] !== n || l[13] !== onHoverInPreloader || l[14] !== e) {
            D = function(o) {
                onHoverInPreloader(o);
                if (e === "button_aggressive") {
                    const t = function() {
                        n?.();
                        f.highSignalPreloaderCallback?.("onhoverin");
                    };
                    if (gRef.current != null) {
                        gRef.current();
                        gRef.current = null;
                    }
                    gRef.current = r("CometMouseActivity").addOnMouseStopCallbackOnce(t);
                }
            };
            l[11] = f;
            l[12] = n;
            l[13] = onHoverInPreloader;
            l[14] = e;
            l[15] = D;
        } else {
            D = l[15];
        }
        const x = D;
        const $ = r("gkx")("4225") ? onFocusInPreloader : r("emptyFunction");
        const P = r("gkx")("4225") ? onFocusOutPreloader : r("emptyFunction");
        let N;
        if (l[16] !== onHighIntentPreloader || l[17] !== x || l[18] !== onHoverOutPreloader || l[19] !== T || l[20] !== $ || l[21] !== P) {
            N = {
                onFocusInPreloader: $,
                onFocusOutPreloader: P,
                onHighIntentPreloader,
                onHoverInPreloader: x,
                onHoverMovePreloader: r("emptyFunction"),
                onHoverOutPreloader,
                onPressInPreloader: T
            };
            l[16] = onHighIntentPreloader;
            l[17] = x;
            l[18] = onHoverOutPreloader;
            l[19] = T;
            l[20] = $;
            l[21] = P;
            l[22] = N;
        } else {
            N = l[22];
        }
        return N;
    }
    const f = o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() ? p : _;
    l.default = f;
}, 98);