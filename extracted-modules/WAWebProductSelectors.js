__d("WAWebProductSelectors", [
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.salePriceAmount1000 != null && (e.salePriceStartDate == null || e.salePriceStartDate <= Date.now()) && (e.salePriceEndDate == null || e.salePriceEndDate > Date.now());
    }
    function s(t) {
        if (e(t)) {
            return t.salePriceAmount1000;
        }
        return t.priceAmount1000;
    }
    function u(t) {
        if (e(t)) {
            return Math.max(0, (t.priceAmount1000 ?? 0) - (t.salePriceAmount1000 ?? 0));
        }
        return 0;
    }
    function c(e) {
        const { currency, priceAmount1000 } = e;
        const o = s(e);
        return r("isStringNullOrEmpty")(currency) || priceAmount1000 == null || o == null;
    }
    l.isSalePriceActive = e;
    l.getActivePrice = s;
    l.getSavings = u;
    l.isEmptyPrice = c;
}, 98);