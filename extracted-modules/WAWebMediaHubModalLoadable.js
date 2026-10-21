__d("WAWebMediaHubModalLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebMediaHubModal.react").__setRef("WAWebMediaHubModalLoadable").load();
        return e;
    }), "WAWebMediaHubModal");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                theme: o("WAWebModal.react").ModalTheme.MediaHub,
                title: s._("Media"),
                error: !!t.error
            });
        }
    });
    l.MediaHubModalLoadable = d;
}, 226);