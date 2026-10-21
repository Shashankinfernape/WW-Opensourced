__d("WAWebSupportAIStartChatNuxLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "WAWebSupportChatStrings",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebSupportAIStartChatNux.react").__setRef("WAWebSupportAIStartChatNuxLoadable").load();
        return e;
    }), "SupportAIStartChatNux");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                okText: o("WAWebSupportChatStrings").SupportChatStartButtonText(),
                error: !!t.error
            });
        }
    });
    l.SupportAIStartChatNuxLoadable = c;
}, 98);