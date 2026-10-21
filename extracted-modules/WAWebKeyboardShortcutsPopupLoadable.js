__d("WAWebKeyboardShortcutsPopupLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebKeyboardShortcutsPopup.react").__setRef("WAWebKeyboardShortcutsPopupLoadable").load();
        return e;
    }), "KeyboardShortcutsPopup");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            if (t.error) {
                return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                    error: true
                });
            }
            return <></>;
        }
    });
    l.KeyboardShortcutsPopupLoadable = c;
}, 98);