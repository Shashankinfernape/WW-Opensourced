__d("WAWebBizBroadcastNewBroadcastFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebBizBroadcastNewBroadcastFlow.react").__setRef("WAWebBizBroadcastNewBroadcastFlowLoadable").load();
        return e;
    }), "BizBroadcastNewBroadcastFlow");
    function c() {
        r("JSResourceForInteraction")("WAWebBizBroadcastNewBroadcastFlow.react").__setRef("WAWebBizBroadcastNewBroadcastFlowLoadable").load();
    }
    const d = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    l.prefetchNewBroadcastFlow = c;
    l.WAWebBizBroadcastNewBroadcastFlowLoadable = d;
}, 98);