__d("useWAWebDebouncedCallback", [
    "WAWebDebounce",
    "react",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useMemo: c } = s;
    function d(e, t, n) {
        const o = r("useWAWebStableCallback")(e);
        const a = n ?? {};
        const { leading: i, maxWait: l, trailing: s } = a;
        const d = c(function() {
            return r("WAWebDebounce")(o, t ?? 0, {
                leading: i,
                maxWait: l,
                trailing: s ?? true
            });
        }, [
            t,
            i,
            l,
            s,
            o
        ]);
        u(function() {
            return d.cancel;
        }, [
            d
        ]);
        return d;
    }
    l.default = d;
}, 98);