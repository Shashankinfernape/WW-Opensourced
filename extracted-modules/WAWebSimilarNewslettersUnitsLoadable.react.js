__d("WAWebSimilarNewslettersUnitsLoadable.react", [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebSimilarNewslettersUnits.react").__setRef("WAWebSimilarNewslettersUnitsLoadable.react").load();
        return e.SimilarNewslettersConversationBanner;
    }), "SimilarNewslettersConversationBanner");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLazyLoadLoading.react"), {
                error: !!t.error
            });
        }
    });
    l.SimilarNewslettersConversationBannerLoadable = c;
}, 98);