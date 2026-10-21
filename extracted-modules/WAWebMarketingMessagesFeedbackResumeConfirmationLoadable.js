__d("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMarketingMessagesFeedbackResumeConfirmation.react").__setRef("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable").load();
        return e;
    }), "WAWebMarketingMessagesFeedbackResumeConfirmation");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLazyLoadLoading.react"), {
                error: !!t.error
            });
        }
    });
    l.WAWebMarketingMessagesFeedbackResumeConfirmationLoadable = c;
}, 98);