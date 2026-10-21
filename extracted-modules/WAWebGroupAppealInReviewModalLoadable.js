__d("WAWebGroupAppealInReviewModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupAppealInReviewModal.react").__setRef("WAWebGroupAppealInReviewModalLoadable").load();
        return e;
    }), "GroupAppealInReviewModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.GroupAppealInReviewModalLoadable = c;
}, 98);