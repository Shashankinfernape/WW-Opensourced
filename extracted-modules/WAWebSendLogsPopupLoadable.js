__d("WAWebSendLogsPopupLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebSendLogsPopup.react").__setRef("WAWebSendLogsPopupLoadable").load();
        return e;
    }), "SendLogsPopup");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
                title: s._("Contact us"),
                okText: s._("Send"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.SendLogsPopupLoadable = d;
}, 226);