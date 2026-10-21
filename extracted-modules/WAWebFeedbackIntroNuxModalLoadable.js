__d("WAWebFeedbackIntroNuxModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebFeedbackIntroNuxModal.react").__setRef("WAWebFeedbackIntroNuxModalLoadable").load();
        return e;
    }), "FeedbackIntroNuxModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            if (t.error) {
                return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                    error: true
                });
            }
            return <></>;
        }
    });
    l.FeedbackIntroNuxModalLoadable = c;
}, 98);