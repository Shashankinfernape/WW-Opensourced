__d("WAWebContactUsModalLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebContactUsModal.react").__setRef("WAWebContactUsModalLoadable").load();
        return e;
    }), "ContactUsModal");
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
    l.ContactUsModalLoadable = d;
}, 226);