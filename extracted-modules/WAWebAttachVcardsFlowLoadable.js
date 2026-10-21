__d("WAWebAttachVcardsFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebAttachVcardsFlow.react").__setRef("WAWebAttachVcardsFlowLoadable").load();
        return e;
    }), "AttachVcardsFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("Send contacts"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.AttachVcardsFlowLoadable = d;
}, 226);