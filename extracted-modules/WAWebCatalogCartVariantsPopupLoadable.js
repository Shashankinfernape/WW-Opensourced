__d("WAWebCatalogCartVariantsPopupLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebCatalogCartVariantsPopup.react").__setRef("WAWebCatalogCartVariantsPopupLoadable").load();
        return e;
    }), "WAWebCatalogCartVariantsPopup");
    const C4 = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    function d({ collectionId, onAddToCart, product }) {
        o("WAWebModalManager").ModalManager.open(<C4 product={product} collectionId={collectionId} onAddToCart={onAddToCart}/>);
    }
    l.openCatalogCartVariantsPopup = d;
}, 98);