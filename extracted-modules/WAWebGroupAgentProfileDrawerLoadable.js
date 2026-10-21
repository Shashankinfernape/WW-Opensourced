__d("WAWebGroupAgentProfileDrawerLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupAgentProfileDrawer.react").__setRef("WAWebGroupAgentProfileDrawerLoadable").load();
        return e;
    }), "GroupAgentProfileDrawer");
    const d = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Contact info"),
                error: !!t.error
            });
        }
    });
    l.GroupAgentProfileDrawerLoadable = d;
}, 226);