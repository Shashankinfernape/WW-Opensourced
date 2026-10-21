__d("WAWebHatchSpaceCardCatalogPreviewLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebHatchSpaceCardCatalogPreview.react").__setRef("WAWebHatchSpaceCardCatalogPreviewLoadable").load();
    }, "WAWebHatchSpaceCardCatalogPreviewLoadable");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return <></>;
        }
    });
    l.default = c;
}, 98);