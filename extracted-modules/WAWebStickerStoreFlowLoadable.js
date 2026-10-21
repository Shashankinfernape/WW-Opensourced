__d("WAWebStickerStoreFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebStickerStoreFlow").__setRef("WAWebStickerStoreFlowLoadable").load();
        return e;
    }), "StickerStoreFlow");
    const StickerStoreFlowLoadable = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    const d = {
        StickerStoreFlowLoadable,
        requireBundle: u
    };
    l.default = d;
}, 98);