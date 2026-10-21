__d("WAWebSendProductModalLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebBizSendProductModal.react").__setRef("WAWebSendProductModalLoadable").load();
        return e;
    }), "SendProductModal");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("Send message to"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.SendProductModalLoadable = d;
}, 226);