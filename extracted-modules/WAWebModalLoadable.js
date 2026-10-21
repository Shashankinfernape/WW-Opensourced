__d("WAWebModalLoadable", [
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        return s.jsx(r("WAWebLazyLoadLoading.react"), {
            error: !!e.error
        });
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    function c(e, t, n) {
        const o = typeof e === "function" ? e : function() {
            return e.load();
        };
        const a = r("WAWebLazyLoadedRetriable")(o, t);
        return r("WAWebLoadable")({
            loader: a,
            loading: n ?? u
        });
    }
    l.default = c;
}, 98);