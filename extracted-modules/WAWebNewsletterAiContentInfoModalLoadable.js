__d("WAWebNewsletterAiContentInfoModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebNewsletterAiContentInfoModal.react").__setRef("WAWebNewsletterAiContentInfoModalLoadable").load();
        return e;
    }), "WAWebNewsletterAiContentInfoModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingModal.react"), {
                error: !!t.error
            });
        }
    });
    l.NewsletterAiContentInfoModalLoadable = c;
}, 98);