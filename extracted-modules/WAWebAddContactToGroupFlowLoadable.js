__d("WAWebAddContactToGroupFlowLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebAddContactToGroupFlow.react").__setRef("WAWebAddContactToGroupFlowLoadable").load();
        return e;
    }), "AddContactToGroupFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("Groups"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.AddContactToGroupFlowLoadable = d;
}, 226);