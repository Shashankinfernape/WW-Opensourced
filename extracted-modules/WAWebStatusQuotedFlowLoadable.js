__d("WAWebStatusQuotedFlowLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebStatusLoadingQuoted.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebStatusQuotedFlow.react").__setRef("WAWebStatusQuotedFlowLoadable").load();
        return e;
    }), "StatusQuotedFlow");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebStatusLoadingQuoted.react"), {
                error: !!t.error
            });
        }
    });
    l.requireBundle = u;
    l.StatusQuotedFlowLoadable = c;
}, 98);