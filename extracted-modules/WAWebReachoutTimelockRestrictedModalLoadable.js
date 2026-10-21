__d("WAWebReachoutTimelockRestrictedModalLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebReachoutTimelockRestrictedModal.react").__setRef("WAWebReachoutTimelockRestrictedModalLoadable").load();
        return e.ReachoutTimelockRestrictedModal;
    }), "ReachoutTimelockRestrictedModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingModal.react"), {
                error: !!t.error
            });
        }
    });
    l.ReachoutTimelockRestrictedModalLoadable = c;
}, 98);