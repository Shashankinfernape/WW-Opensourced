__d("WAWebMidDrawerEmptyStateLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMidDrawerEmptyState.react").__setRef("WAWebMidDrawerEmptyStateLoadable").load();
        return e.MidDrawerEmptyState;
    }), "MidDrawerEmptyState");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error,
                cancellable: false
            });
        }
    });
    l.MidDrawerEmptyStateLoadable = c;
}, 98);