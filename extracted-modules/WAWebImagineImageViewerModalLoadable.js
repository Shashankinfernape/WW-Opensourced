__d("WAWebImagineImageViewerModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingMediaViewer.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebImagineImageViewerModal.react").__setRef("WAWebImagineImageViewerModalLoadable").load();
        return e;
    }), "ImagineImageViewerModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingMediaViewer.react"), {
                error: !!t.error
            });
        }
    });
    l.WAWebImagineImageViewerModalLoadable = c;
}, 98);