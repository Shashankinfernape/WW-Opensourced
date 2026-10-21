__d("WAWebQuestionsInputModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebQuestionsInputModal.react").__setRef("WAWebQuestionsInputModalLoadable").load();
        return e.QuestionsInputModal;
    }), "QuestionsInputModal");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingModal.react"), {
                theme: o("WAWebModal.react").ModalTheme.Questions,
                error: !!t.error
            });
        }
    });
    l.QuestionsInputModalLoadable = c;
}, 98);