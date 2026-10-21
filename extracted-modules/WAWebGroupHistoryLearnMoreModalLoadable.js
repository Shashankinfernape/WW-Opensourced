__d("WAWebGroupHistoryLearnMoreModalLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupHistoryLearnMoreModal.react").__setRef("WAWebGroupHistoryLearnMoreModalLoadable").load();
        return e;
    }), "GroupHistoryLearnMoreModal");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
                title: s._("Group message history"),
                error: !!t.error
            });
        }
    });
    l.GroupHistoryLearnMoreModalLoadable = d;
}, 226);