__d("WAWebVoipCallsTabDrawerFlowLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVoipCallsTabDrawerFlow.react").__setRef("WAWebVoipCallsTabDrawerFlowLoadable").load();
        return e;
    }), "VoipCallsTabDrawerFlow");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error
            });
        }
    });
    l.VoipCallsTabDrawerFlowLoadable = c;
}, 98);