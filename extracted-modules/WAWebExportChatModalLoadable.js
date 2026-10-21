__d("WAWebExportChatModalLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebExportChatModal.react").__setRef("WAWebExportChatModalLoadable").load();
        return e;
    }), "ExportChatModal");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("Export chat"),
                error: !!t.error,
                theme: o("WAWebModal.react").ModalTheme.ExportChat
            });
        }
    });
    l.ExportChatModalLoadable = d;
}, 226);