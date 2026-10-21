__d("WAWebTextStatusEditModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebAboutEditModal.react").__setRef("WAWebTextStatusEditModalLoadable").load();
        return e;
    }), "AboutEditModal");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                error: !!t.error
            });
        }
    });
    l.TextStatusEditModalLoadable = c;
}, 98);