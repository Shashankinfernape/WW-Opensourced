__d("WAWebToastManagerImplLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebToastManagerImpl").__setRef("WAWebToastManagerImplLoadable").load();
        return e;
    }), "ToastManagerImpl");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <div/>;
        }
    });
    l.ToastManagerImplLoadable = c;
}, 98);