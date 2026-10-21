__d("WAWebOrderStatusUpdateFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebBizOrderStatusUpdateFlow.react").__setRef("WAWebOrderStatusUpdateFlowLoadable").load();
        return e;
    }), "OrderStatusUpdateFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Update order status"),
                error: !!t.error
            });
        }
    });
    l.OrderStatusUpdateFlowLoadable = d;
}, 226);