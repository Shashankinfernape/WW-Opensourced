__d("WAWebGroupHoverCardLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupHoverCard.react").__setRef("WAWebGroupHoverCardLoadable").load();
        return e;
    }), "GroupHoverCard");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.GroupHoverCardLoadable = c;
}, 98);