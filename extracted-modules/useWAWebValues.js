__d("useWAWebValues", [
    "WAArraysShallowEqual",
    "WAWebABProps",
    "WAWebNoop",
    "WAWebUseValuesUtils",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useMemo: c, useRef: d, useState: m } = s;
    const p = function(t) {
        return r("WAWebNoop");
    };
    function _(e, t, n) {
        const a = o("react-compiler-runtime").c(2);
        const i = f(e, t, n);
        let l;
        if (a[0] !== i) {
            l = r("nullthrows")(i);
            a[0] = i;
            a[1] = l;
        } else {
            l = a[1];
        }
        return l;
    }
    function f(e, t, n) {
        const i = c(function() {
            return o("WAWebUseValuesUtils").computedForComponent(t);
        }, t);
        const l = m(function() {
            if (e == null) {
                return null;
            }
            return i(e);
        });
        const s = l[0];
        const _ = l[1];
        const f = d(s);
        const h = r("useWAWebStableCallback")(function() {
            if (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_2")) {
                const t = e == null ? null : i(e);
                if (g(f.current, t)) {
                    return;
                }
                f.current = t;
                _(t);
                return;
            }
            _(function(t) {
                const n = e == null ? null : i(e);
                if (g(t, n)) {
                    return t;
                }
                return n;
            });
        });
        u(function() {
            f.current = s;
        }, [
            s
        ]);
        const y = d(e);
        const C = y.current;
        if (e !== C) {
            y.current = e;
            h();
        }
        const b = n?.subscribe ?? p;
        u(function() {
            return b(function() {
                h();
            });
        }, [
            b,
            h
        ]);
        return s;
    }
    function g(e, t) {
        if (e == t) {
            return true;
        }
        if (e == null || t == null) {
            return false;
        }
        return r("WAArraysShallowEqual")(e, t, function(e, t) {
            return !!(e === t || Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0);
        });
    }
    l.useValues = _;
    l.useOptionalValues = f;
}, 98);