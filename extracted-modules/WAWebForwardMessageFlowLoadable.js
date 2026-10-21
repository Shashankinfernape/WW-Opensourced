__d("WAWebForwardMessageFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebForwardMessageFlow.react").__setRef("WAWebForwardMessageFlowLoadable").load();
        return e;
    }), "ForwardMessageFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("_j{\"*\":\"Forward messages to\",\"_1\":\"Forward message to\"}", [
                    s._plural(1)
                ]),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.ForwardMessageFlowLoadable = d;
}, 226);