__d("WAWebVerificationDrawerLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVerificationDrawer.react").__setRef("WAWebVerificationDrawerLoadable").load();
        return e;
    }), "VerificationDrawer");
    const VerificationDrawerLoadable = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Verify security code"),
                error: !!t.error
            });
        }
    });
    const m = {
        requireBundle: c,
        VerificationDrawerLoadable
    };
    l.default = m;
}, 226);