__d("WAWebUprCurrencyIconLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSIconIcPayments.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebUprCurrencyIcon.react").__setRef("WAWebUprCurrencyIconLoadable").load();
        return e;
    }), "WAWebUprCurrencyIcon");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return s.jsx(r("WDSIconIcPayments.react"), {});
        }
    });
    l.WAWebUprCurrencyIconLoadable = c;
}, 98);