__d("WAWebSuspendedGroupRedesignModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebSuspendedGroupRedesignModal.react").__setRef("WAWebSuspendedGroupRedesignModalLoadable").load();
        return e;
    }), "SuspendedGroupRedesignModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.SuspendedGroupRedesignModalLoadable = c;
}, 98);