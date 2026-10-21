__d("WAWebCurrencyUtils", [
    "WAWebCurrencyData",
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    const e = {
        IDR: "in-ID",
        MXN: "es-MX",
        INR: "en-IN"
    };
    const s = new Set([
        "DZD",
        "ARS",
        "AUD",
        "BDT",
        "BOB",
        "BRL",
        "GBP",
        "CAD",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CZK",
        "DKK",
        "EGP",
        "EUR",
        "GTQ",
        "HNL",
        "HKD",
        "HUF",
        "ISK",
        "INR",
        "IDR",
        "ILS",
        "JPY",
        "KES",
        "KRW",
        "MOP",
        "MYR",
        "MXN",
        "NZD",
        "NIO",
        "NGN",
        "NOK",
        "PKR",
        "PYG",
        "PEN",
        "PHP",
        "PLN",
        "QAR",
        "RON",
        "RUB",
        "SAR",
        "SGD",
        "ZAR",
        "SEK",
        "CHF",
        "TWD",
        "THB",
        "TRY",
        "AED",
        "USD",
        "UYU",
        "VEF",
        "VND"
    ]);
    const u = [
        "es-ES",
        "pt-BR"
    ];
    const c = {
        "pt-BR": "BRL"
    };
    function d() {
        let e;
        return [
            (e = r("WAWebL10N")).getFullLocale(),
            e.normalizeLocaleToBcp47Compliant(e.getNormalizedLocale()),
            e.normalizeLocaleToBcp47Compliant(e.getLocale())
        ].filter(Boolean);
    }
    function m({ amount: t, currency: n, localeOverride: o = d(), options: a }) {
        const i = Array.isArray(o) ? o[0] : o;
        let l = "symbol";
        if (u.includes(i) && c[i] !== n) {
            l = "code";
        }
        return new Intl.NumberFormat(o, babelHelpers.extends({
            style: "currency",
            currency: n,
            currencyDisplay: l
        }, a)).format(t);
    }
    function p({ amount: t, currency: n, localeOverride: r, options: o }) {
        return m({
            amount: t / 1000,
            currency: n,
            localeOverride: r,
            options: o
        });
    }
    function _(e) {
        return new Intl.NumberFormat(e).format(1.1).substring(1, 2);
    }
    function f(e) {
        return new Intl.NumberFormat(e).format(10000).substring(2, 3);
    }
    function g(e, t) {
        const n = p({
            amount: 0,
            currency: t,
            localeOverride: e,
            options: {}
        });
        return n.replace(/\d+([,.]\d+)?/g, "").trim();
    }
    function h(e, t) {
        const n = d();
        const r = _(n);
        const o = g(n, e);
        const a = p({
            amount: t,
            currency: e
        });
        const i = a.replace(o, "").trim();
        const l = i.indexOf(r);
        const s = l === -1 ? i : i.substring(0, l);
        const u = l === -1 ? "" : i.substring(l);
        return {
            symbol: o,
            integer: s,
            decimal: u
        };
    }
    function y(t) {
        return g(e[t], t);
    }
    function C(e, t) {
        const n = d();
        const r = g(n, e);
        const o = f(n);
        const a = _(n);
        return b(t, r, a, o);
    }
    function b(e, t, n, r) {
        const o = e.replace(t, "").trim();
        const a = o.split(r).join("");
        const i = parseFloat(a.replace(n, ".") || "0");
        return Math.round(i * 1000);
    }
    function v(e, t) {
        if (t == null || t.trim().length === 0) {
            return false;
        }
        const n = d();
        const r = f(n);
        const o = _(n);
        if (t.match(`/[^0-9${r}${o}]/`)) {
            return false;
        }
        const a = g(n, e);
        const i = C(e, t);
        const l = p({
            amount: i,
            currency: e
        });
        const s = l.replace(a, "").trim();
        let u = s.indexOf(o);
        const c = u === -1 ? s : s.substring(0, u);
        const m = s.split(r).join("");
        u = m.indexOf(o);
        const h = u === -1 ? m : m.substring(0, u);
        return t === s || t === c || t === m || t === h;
    }
    function S(e, t, n, r) {
        const a = d();
        const i = o("WAWebCurrencyData").CURRENCY_DIGITS[e] !== void 0 ? o("WAWebCurrencyData").CURRENCY_DIGITS[e] : o("WAWebCurrencyData").DEFAULT_DIGITS;
        const l = C(e, t);
        if (n != null && l < n || r != null && l > r) {
            return false;
        }
        const s = t.replace(/\D+$/g, "");
        const u = _(a);
        const c = f(a);
        const m = g(a, e);
        const p = t.replace(m, "").trim().replace(/^[-+]/, "").split(c).join("").replace(u, "");
        return !(Number.isNaN(l) || s !== t || /\D/.test(p) || (t.split(u)[1] || "").length > i);
    }
    function R(e) {
        const t = o("WAWebCurrencyData").REGION_TO_CURRENCY[e.toUpperCase()];
        if (t?.length > 0) {
            return t[0];
        }
        return o("WAWebCurrencyData").DEFAULT_CURRENCY;
    }
    function L(e) {
        return s.has(e);
    }
    l.formatAmount = m;
    l.formatAmount1000 = p;
    l.formatAmount1000ToParts = h;
    l.formatLocalSymbol = y;
    l.valueFromString = C;
    l.parseValueFromString = b;
    l.validateAmountString = v;
    l.validatePriceString = S;
    l.currencyForCountryShortcode = R;
    l.isSupportedCurrency = L;
}, 98);