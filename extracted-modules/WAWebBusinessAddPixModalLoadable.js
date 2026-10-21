__d("WAWebBusinessAddPixModalLoadable", [
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
        const e = yield r("JSResourceForInteraction")("WAWebBizPaymentsBrazilAddPixModal.react").__setRef("WAWebBusinessAddPixModalLoadable").load();
        return e.WAWebBizPaymentsBrazilAddPixModal;
    }), "WAWebBizPaymentsBrazilAddPixModal");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingModal.react"), {
                error: !!t.error
            });
        }
    });
    l.WAWebBizPaymentsBrazilAddPixModalLoadable = c;
}, 98);