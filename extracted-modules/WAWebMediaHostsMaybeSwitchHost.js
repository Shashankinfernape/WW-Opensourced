__d("WAWebMediaHostsMaybeSwitchHost", [], function(t, n, r, o, a, i) {
    const e = 52428800;
    function l(e, t, n) {
        return e.equals(t) && n != null && t != null && !t.equals(n);
    }
    function s(t, { fallbackHost: a, selectedHost: i }, r, o) {
        const { fallbackHost: s, selectedHost: u } = r;
        if (o < e) {
            return {
                changed: false,
                host: t
            };
        }
        if (t.type === "primary" && !t.equals(u)) {
            return {
                changed: true,
                host: u
            };
        }
        if (t.type === "fallback" && !i.equals(u)) {
            return {
                changed: true,
                host: u
            };
        }
        if (t.type === "fallback" && (l(t, a, s) || l(t, i.fallback, u.fallback))) {
            return {
                changed: true,
                host: i
            };
        }
        if (t.type === "primary" || t.type === "fallback" || t.type === null || t.type === void 0) {
            return {
                changed: false,
                host: t
            };
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.type}`);
        })();
    }
    i.THRESHOLD = e;
    i.maybeSwitchHost = s;
}, 66);