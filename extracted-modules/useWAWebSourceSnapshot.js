__d("useWAWebSourceSnapshot", [
    "WAWebUIListener",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useMemo, useSyncExternalStore } = s;
    function d(e, t, n, a) {
        const i = o("react-compiler-runtime").c(5);
        const l = r("useWAWebStableCallback")(n);
        const s = r("useWAWebStableCallback")(a ?? p);
        let u;
        if (i[0] !== s || i[1] !== t || i[2] !== l || i[3] !== e) {
            u = m(e, t, l, s);
            i[0] = s;
            i[1] = t;
            i[2] = l;
            i[3] = e;
            i[4] = u;
        } else {
            u = i[4];
        }
        const d = u;
        return useSyncExternalStore(d.subscribe, d.getSnapshot);
    }
    function m(e, t, n, r) {
        let a = n(e);
        return {
            getSnapshot: function() {
                return a;
            },
            subscribe: function(l) {
                const i = function() {
                    a = n(e);
                    l();
                };
                const s = (o("WAWebUIListener").isEventsType(e) ? [
                    t
                ] : t.split(/\s+/).filter(Boolean)).map((t)=>new (o("WAWebUIListener")).Listener(e, t, i));
                s.forEach((e)=>e.engage());
                const u = n(e);
                if (!r(u, a)) {
                    a = u;
                    l();
                }
                return function() {
                    return s.forEach((e)=>e.disengage());
                };
            }
        };
    }
    function p(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
            return e.length === t.length && e.every((e, n)=>Object.is(e, t[n]));
        }
        return Object.is(e, t);
    }
    l.default = d;
}, 98);