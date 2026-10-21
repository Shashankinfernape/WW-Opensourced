__d("WAWebVideoPlayerXLoadable.react", [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVideoPlayerX.react").__setRef("WAWebVideoPlayerXLoadable.react").load();
        return e;
    }), "WAWebVideoPlayerX");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLazyLoadLoading.react"), {
                error: !!t.error
            });
        }
    });
    l.WAWebVideoPlayerXLoadable = c;
}, 98);