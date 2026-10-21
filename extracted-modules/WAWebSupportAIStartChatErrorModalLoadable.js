__d("WAWebSupportAIStartChatErrorModalLoadable", [
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
    const loader = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebSupportAIStartChatErrorModal.react").__setRef("WAWebSupportAIStartChatErrorModalLoadable").load();
        return e;
    }), "StartAISupportChatErrorModal");
    const d = r("react-loadable")({
        loader,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
                okText: s._("Contact via email"),
                error: !!t.error
            });
        }
    });
    l.SupportAIStartChatErrorModalLoadable = d;
}, 226);