__d("WAWebPaymentLinkPreviewWithAmountFeature", [
    "WALogger",
    "WAWebABProps",
    "WAWebCurrencyUtils",
    "WAWebMobilePlatforms",
    "WAWebPaymentLinkPreviewWithTrustSignalsFeature"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = /^[1-9][0-9]*$/;
    const u = /^10*$/;
    const c = 1;
    function d(e, t, n) {
        if (e == null || t == null || n == null) {
            return null;
        }
        const r = parseInt(e, 10);
        const o = parseInt(t, 10);
        if (Number.isNaN(r) || Number.isNaN(o) || r < c || o < c) {
            return null;
        }
        return {
            amount1000: r * (1000 / o),
            currency: n
        };
    }
    function m(e, t, n) {
        return !(n == null || !o("WAWebCurrencyUtils").isSupportedCurrency(n) || e == null || !s.test(e) || t == null || !u.test(t));
    }
    function p(e, t) {
        if (!o("WAWebMobilePlatforms").isSMB() || t?.length !== 1) {
            return false;
        }
        const n = e?.previewMetadata;
        const r = e?.psp;
        if (!m(n?.amount, n?.offset, n?.currency) || r == null || !o("WAWebPaymentLinkPreviewWithTrustSignalsFeature").isPSPInTrustSignalsFeatureAllowlist(r)) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("payment_links_trust_signals_other_metatags_enabled");
    }
    function _(e) {
        if (o("WAWebABProps").getABPropConfigValue("payment_links_trust_signals_other_metatag_kill_switch_enabled")) {
            return null;
        }
        return d(e?.amount, e?.offset, e?.currency);
    }
    function f(t, n, r) {
        if (!p(t, r)) {
            return n;
        }
        const i = n?.provider?.paramsJson;
        const l = t?.previewMetadata;
        try {
            const s = i == null ? null : JSON.parse(i);
            const u = babelHelpers.extends({}, s, {
                meta_tags: babelHelpers.extends({}, s?.meta_tags, {
                    amount: l?.amount,
                    offset: l?.offset,
                    currency: l?.currency
                })
            });
            return babelHelpers.extends({}, n, {
                provider: babelHelpers.extends({}, n?.provider, {
                    paramsJson: JSON.stringify(u)
                })
            });
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH AMOUNT] error while parsing paramsJson from payment link metadata: ",
                ""
            ])), t);
            return n;
        }
    }
    l.computeAmount1000 = d;
    l.validateAmountFields = m;
    l.isPaymentLinkPreviewWithAmountEnabled = p;
    l.getPaymentLinkOrderHeaderComponentDisplayParamsForAmountFeature = _;
    l.setAmountMetadata = f;
}, 98);