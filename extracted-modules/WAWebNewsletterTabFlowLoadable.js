__d("WAWebNewsletterTabFlowLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebNewsletterTabFlow.react").__setRef("WAWebNewsletterTabFlowLoadable").load();
        return e.NewsletterTabFlow;
    }), "NewsletterTabFlow");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingDrawer.react"), {
                error: !!t.error,
                description: "NewsletterTabFlowLoadable",
                cancellable: false
            });
        }
    });
    l.NewsletterTabFlowLoadable = c;
}, 98);