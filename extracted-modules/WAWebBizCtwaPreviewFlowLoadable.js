__d("WAWebBizCtwaPreviewFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebBizCtwaAdPreviewFlow.react").__setRef("WAWebBizCtwaPreviewFlowLoadable").load();
        return e;
    }), "CtwaAdPreviewFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Ad preview"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.CtWAAdPreviewFlowLoadable = d;
}, 226);