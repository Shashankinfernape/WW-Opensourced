__d("WAWebBizOrderStatusDrawerLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebBizOrderStatusDrawer.react").__setRef("WAWebBizOrderStatusDrawerLoadable").load();
        return e;
    }), "WAWebBizOrderStatusDrawer");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Order details"),
                error: !!t.error
            });
        }
    });
    l.OrderStatusDrawerLoadable = d;
}, 226);