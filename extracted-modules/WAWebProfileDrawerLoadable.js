__d("WAWebProfileDrawerLoadable", [
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebProfileDrawerLoadableRequireBundle",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLoadable")({
        loader: o("WAWebProfileDrawerLoadableRequireBundle").requireBundle,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    l.default = u;
}, 98);