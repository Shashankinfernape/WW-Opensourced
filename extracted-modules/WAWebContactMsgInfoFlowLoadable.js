__d("WAWebContactMsgInfoFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebContactMsgInfoFlow.react").__setRef("WAWebContactMsgInfoFlowLoadable").load();
        return e;
    }), "ContactMsgInfoFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Message info"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.ContactMsgInfoFlowLoadable = d;
}, 226);