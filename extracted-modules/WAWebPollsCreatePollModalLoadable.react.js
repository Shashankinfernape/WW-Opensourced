__d("WAWebPollsCreatePollModalLoadable.react", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebPollsCreatePollModal").__setRef("WAWebPollsCreatePollModalLoadable.react").load();
        return e.CreatePollModal;
    }), "CreatePollModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingModal.react"), {
                error: !!t.error
            });
        }
    });
    l.CreatePollModalLoadable = c;
}, 98);