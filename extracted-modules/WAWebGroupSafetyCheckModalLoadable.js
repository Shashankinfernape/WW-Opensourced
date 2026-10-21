__d("WAWebGroupSafetyCheckModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupSafetyCheckModal.react").__setRef("WAWebGroupSafetyCheckModalLoadable").load();
        return e;
    }), "GroupSafetyCheckModal");
    const c = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                error: !!t.error
            });
        }
    });
    l.GroupSafetyCheckModalLoadable = c;
}, 98);