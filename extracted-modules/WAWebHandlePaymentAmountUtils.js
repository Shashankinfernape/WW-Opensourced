__d("WAWebHandlePaymentAmountUtils", [
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1000;
    const u = 2;
    function c(e) {
        e.assertTag("money");
        const t = parseFloat(e.attrString("value"));
        const currency = e.attrString("currency");
        const r = e.maybeAttrInt("offset");
        const o = r != null && r !== 0 ? r : s;
        const amount1000 = t * s / o;
        return {
            currency,
            amount1000
        };
    }
    function d(t) {
        if (t.hasChild("amount")) {
            const n = t.child("amount");
            return c(n.child("money"));
        } else if (t.hasAttr("amount")) {
            const a = parseFloat(t.attrString("amount"));
            return {
                amount1000: a * s,
                currency: t.attrString("currency")
            };
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Amount missing in pay or transaction node"
        ])));
        throw r("err")("Amount missing in pay or transaction node");
    }
    function m(e) {
        return d(e);
    }
    function p(e) {
        return e.hasChild("amount") || e.hasAttr("amount");
    }
    function _(e) {
        return e.maybeAttrInt("version") === u && !p(e);
    }
    l.getAmount1000AndCurrency = m;
    l.isDehydratedPaymentNode = _;
}, 98);