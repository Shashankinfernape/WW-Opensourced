__d("WAWebGroupAppealRejectedModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupAppealRejectedModal.react").__setRef("WAWebGroupAppealRejectedModalLoadable").load();
        return e;
    }), "GroupAppealRejectedModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.GroupAppealRejectedModalLoadable = c;
}, 98);