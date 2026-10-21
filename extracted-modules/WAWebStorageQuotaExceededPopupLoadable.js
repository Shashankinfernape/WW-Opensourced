__d("WAWebStorageQuotaExceededPopupLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebStorageQuotaExceededPopup.react").__setRef("WAWebStorageQuotaExceededPopupLoadable").load();
        return e;
    }), "StorageQuotaExceededPopup");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            if (t.error) {
                return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                    error: true
                });
            }
            return <></>;
        }
    });
    l.StorageQuotaExceededPopupLoadable = c;
}, 98);