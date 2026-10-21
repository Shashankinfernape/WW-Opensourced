__d("WAWebExistingGroupPermissionsDrawerLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebExistingGroupPermissionsDrawer.react").__setRef("WAWebExistingGroupPermissionsDrawerLoadable").load();
        return e;
    }), "ExistingGroupPermissionsDrawer");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error,
                cancellable: false
            });
        }
    });
    l.ExistingGroupPermissionsDrawerLoadable = c;
}, 98);