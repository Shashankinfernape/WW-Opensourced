__d("WAWebCatalogLoadErrorLoadable", [
    "$InternalEnum",
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
        const e = yield r("JSResourceForInteraction")("WAWebCatalogLoadError.react").__setRef("WAWebCatalogLoadErrorLoadable").load();
        return e.CatalogLoadError;
    }), "CatalogLoadError");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    const d = n("$InternalEnum").Mirrored([
        "LINK",
        "BUTTON",
        "NONE"
    ]);
    l.CatalogLoadErrorLoadable = c;
    l.CTADisplayType = d;
}, 98);