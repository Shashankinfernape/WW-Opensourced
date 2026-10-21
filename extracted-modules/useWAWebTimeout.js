__d("useWAWebTimeout", [
    "WATimeUtils",
    "WAWebAlarm",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback: u, useEffect: c, useRef: d } = s;
    function m(e, t, n) {
        const r = o("react-compiler-runtime").c(12);
        const a = t === void 0 ? 0 : t;
        let i;
        if (r[0] !== n) {
            i = n ?? {};
            r[0] = n;
            r[1] = i;
        } else {
            i = r[1];
        }
        const s = i.immediate;
        const u = s === void 0 ? false : s;
        const d = p(e);
        const m = d[0];
        const _ = d[1];
        let f;
        if (r[2] !== a || r[3] !== m) {
            f = function() {
                return m(a);
            };
            r[2] = a;
            r[3] = m;
            r[4] = f;
        } else {
            f = r[4];
        }
        const g = f;
        let h;
        let y;
        if (r[5] !== u || r[6] !== g) {
            h = function() {
                if (u) {
                    g();
                }
            };
            y = [
                u,
                g
            ];
            r[5] = u;
            r[6] = g;
            r[7] = h;
            r[8] = y;
        } else {
            h = r[7];
            y = r[8];
        }
        c(h, y);
        let C;
        if (r[9] !== _ || r[10] !== g) {
            C = [
                g,
                _
            ];
            r[9] = _;
            r[10] = g;
            r[11] = C;
        } else {
            C = r[11];
        }
        return C;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(7);
        const n = r("useWAWebStableCallback")(e);
        const a = d();
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                if (a.current != null && a.current !== 0) {
                    self.clearTimeout(a.current);
                }
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = i;
        let s;
        if (t[1] !== n) {
            s = function(t) {
                l();
                a.current = self.setTimeout(n, t);
            };
            t[1] = n;
            t[2] = s;
        } else {
            s = t[2];
        }
        const u = s;
        let m;
        let p;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = function() {
                return l;
            };
            p = [
                l
            ];
            t[3] = m;
            t[4] = p;
        } else {
            m = t[3];
            p = t[4];
        }
        c(m, p);
        let _;
        if (t[5] !== u) {
            _ = [
                u,
                l
            ];
            t[5] = u;
            t[6] = _;
        } else {
            _ = t[6];
        }
        return _;
    }
    function _(e, t, n) {
        const r = o("react-compiler-runtime").c(13);
        let a;
        if (r[0] !== n) {
            a = n ?? {};
            r[0] = n;
            r[1] = a;
        } else {
            a = r[1];
        }
        const i = a;
        const { immediate: l, isGlobal: s } = i;
        const u = l === void 0 ? false : l;
        const d = s === void 0 ? false : s;
        const m = f(e);
        const p = m[0];
        const _ = m[1];
        let g;
        if (r[2] !== t || r[3] !== d || r[4] !== p) {
            g = function() {
                return p(t, d);
            };
            r[2] = t;
            r[3] = d;
            r[4] = p;
            r[5] = g;
        } else {
            g = r[5];
        }
        const h = g;
        let y;
        let C;
        if (r[6] !== u || r[7] !== h) {
            y = function() {
                if (u) {
                    h();
                }
            };
            C = [
                u,
                h
            ];
            r[6] = u;
            r[7] = h;
            r[8] = y;
            r[9] = C;
        } else {
            y = r[8];
            C = r[9];
        }
        c(y, C);
        let b;
        if (r[10] !== _ || r[11] !== h) {
            b = [
                h,
                _
            ];
            r[10] = _;
            r[11] = h;
            r[12] = b;
        } else {
            b = r[12];
        }
        return b;
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(7);
        const n = r("useWAWebStableCallback")(e);
        const a = d();
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                if (a.current != null) {
                    r("WAWebAlarm").clearTimeout(a.current);
                }
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = i;
        let s;
        if (t[1] !== n) {
            s = function(t, i) {
                if (i) {
                    a.current = r("WAWebAlarm").setGlobalTimeout(n, o("WATimeUtils").castUnixTimeToMillisTime(t), a.current);
                } else {
                    a.current = r("WAWebAlarm").setLocalTimeout(n, o("WATimeUtils").castUnixTimeToMillisTime(t), a.current);
                }
            };
            t[1] = n;
            t[2] = s;
        } else {
            s = t[2];
        }
        const u = s;
        let m;
        let p;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = function() {
                return l;
            };
            p = [
                l
            ];
            t[3] = m;
            t[4] = p;
        } else {
            m = t[3];
            p = t[4];
        }
        c(m, p);
        let _;
        if (t[5] !== u) {
            _ = [
                u,
                l
            ];
            t[5] = u;
            t[6] = _;
        } else {
            _ = t[6];
        }
        return _;
    }
    l.useTimeout = m;
    l.useManualTimeout = p;
    l.useAlarm = _;
}, 98);