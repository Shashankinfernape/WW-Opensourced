__d("useWAWebThrottledCallback", [
    "WAThrottle",
    "react",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo } = s;
    function d(e, t = 0, n) {
        const a = r("useWAWebStableCallback")(e);
        const i = n ?? {};
        const { leading, trailing } = i;
        const d = useMemo(function() {
            return o("WAThrottle").throttle(a, t, n);
        }, [
            t,
            leading,
            trailing,
            a
        ]);
        useEffect(function() {
            return d.cancel;
        }, [
            d
        ]);
        return d;
    }
    l.default = d;
}, 98);