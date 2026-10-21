__d("WAWebSubgroupJoinModalLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebSubgroupJoinModal.react").__setRef("WAWebSubgroupJoinModalLoadable").load();
        return e;
    }), "SubgroupJoinModal");
    const d = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("Join group"),
                error: !!t.error
            });
        }
    });
    l.SubgroupJoinModalLoadable = d;
}, 226);