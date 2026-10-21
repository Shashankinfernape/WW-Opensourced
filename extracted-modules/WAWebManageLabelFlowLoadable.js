__d("WAWebManageLabelFlowLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebBizManageLabelFlow.react").__setRef("WAWebManageLabelFlowLoadable").load();
        return e;
    }), "ManageLabelFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("Label items"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.ManageLabelFlowLoadable = d;
}, 226);