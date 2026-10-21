__d("WAWebUseIdleSessionRotation", [
    "WAWebUnifiedSession",
    "WAWebUseUnifiedSession",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useRef } = s;
    const m = 60000;
    const p = 7200000;
    const _ = 1800000;
    function f() {
        const e = r("justknobx")._("3017");
        const t = !Number.isFinite(e) || e <= 0 ? _ : e;
        return Math.max(m, Math.min(p, t));
    }
    function g() {
        return r("justknobx")._("3246");
    }
    function useH(e) {
        const t = o("react-compiler-runtime").c(10);
        const n = o("WAWebUseUnifiedSession").useUnifiedSession(e);
        const rRef = useRef(false);
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                if (g()) {
                    rRef.current = true;
                }
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebTimeout").useManualTimeout(a);
        const l = i[0];
        const s = i[1];
        let u;
        if (t[1] !== s || t[2] !== n || t[3] !== l) {
            u = function() {
                if (!g()) {
                    s();
                    rRef.current = false;
                    return;
                }
                if (rRef.current && document.hasFocus()) {
                    rRef.current = false;
                    n(o("WAWebUnifiedSession").UnifiedSessionGenReason.IdleTimeout);
                }
                l(f());
            };
            t[1] = s;
            t[2] = n;
            t[3] = l;
            t[4] = u;
        } else {
            u = t[4];
        }
        const m = u;
        let p;
        let _;
        if (t[5] !== m) {
            p = function() {
                m();
            };
            _ = [
                m
            ];
            t[5] = m;
            t[6] = p;
            t[7] = _;
        } else {
            p = t[6];
            _ = t[7];
        }
        useEffect(p, _);
        let h;
        if (t[8] !== m) {
            h = function() {
                rRef.current = false;
                m();
            };
            t[8] = m;
            t[9] = h;
        } else {
            h = t[9];
        }
        o("useWAWebListener").useListener(window, "focus", h);
        o("useWAWebListener").useListener(window, "mousedown", m);
        o("useWAWebListener").useListener(window, "keydown", m);
    }
    l.useIdleSessionRotation = useH;
}, 98);