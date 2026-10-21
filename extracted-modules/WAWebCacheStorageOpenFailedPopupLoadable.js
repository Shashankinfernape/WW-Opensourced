__d("WAWebCacheStorageOpenFailedPopupLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebCacheStorageOpenFailedPopup.react").__setRef("WAWebCacheStorageOpenFailedPopupLoadable").load();
        return e;
    }), "CacheStorageOpenFailedPopup");
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
    l.CacheStorageOpenFailedPopupLoadable = c;
}, 98);