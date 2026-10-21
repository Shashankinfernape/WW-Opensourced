__d("WAWebFormatUprAmount", [
    "WAWebCurrencyUtils",
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    function e() {
        let e;
        return [
            (e = r("WAWebL10N")).getFullLocale(),
            e.normalizeLocaleToBcp47Compliant(e.getNormalizedLocale()),
            e.normalizeLocaleToBcp47Compliant(e.getLocale()),
            "es-MX"
        ].filter(Boolean);
    }
    function s(t) {
        const n = new Intl.NumberFormat(e(), {
            style: "currency",
            currency: "MXN",
            currencyDisplay: "narrowSymbol"
        }).format(t);
        return `${n} MXN`;
    }
    const u = new Map([
        [
            "MXN",
            s
        ]
    ]);
    function c(currency, amount) {
        const n = u.get(currency);
        if (n != null) {
            return n(amount);
        }
        return o("WAWebCurrencyUtils").formatAmount({
            amount,
            currency
        });
    }
    function d(e, t) {
        return c(e, t / 1000);
    }
    l.formatUprAmount = c;
    l.formatUprAmount1000 = d;
}, 98);