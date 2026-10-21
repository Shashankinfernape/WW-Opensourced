__d("WAWebPaymentLinkPreviewWithTrustSignalsFeature", [
    "WALogger",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e) {
        return o("WAWebMsgGetters").getHasPaymentLinkTrustSignals(e);
    }
    function c(e, t, n, r) {
        if (e == null && t == null) {
            return false;
        }
        if (t == null || t.length === 0 || e !== true) {
            return true;
        }
        const a = n?.psp;
        if (a == null || !d(a) || r.length !== 1 || o("WAWebABProps").getABPropConfigValue("payment_br_holdout")) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("payment_links_trust_signals_metatag_enabled");
    }
    function d(t) {
        try {
            const n = JSON.parse(o("WAWebABProps").getABPropConfigValue("payment_links_trust_signals_metatag_psp_list"));
            const r = n?.psp;
            if (Array.isArray(r)) {
                return r.includes(t);
            }
            return false;
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH TRUST SIGNALS] error while parsing json for ab prop payment_links_trust_signals_metatag_psp_list: ",
                ""
            ])), t);
            return false;
        }
    }
    function m({ linkPreviewData: r, links: a, paymentLinkMetadata: i }) {
        if (!o("WAWebMobilePlatforms").isSMB()) {
            return i;
        }
        const l = r?.previewMetadata;
        if (l == null) {
            return i;
        }
        const u = l.isBusinessVerified;
        const d = l.providerName?.trim();
        if (!c(u, d, r, a)) {
            return i;
        }
        const m = i?.provider?.paramsJson;
        try {
            let p = m == null ? null : JSON.parse(m);
            if (u != null) {
                p = babelHelpers.extends({}, p, {
                    meta_tags: babelHelpers.extends({}, p?.meta_tags, {
                        is_business_verified: u
                    })
                });
            }
            if (d != null && d.length > 0) {
                p = babelHelpers.extends({}, p, {
                    meta_tags: babelHelpers.extends({}, p?.meta_tags, {
                        provider_name: d
                    })
                });
            }
            if (p == null) {
                return i;
            }
            return babelHelpers.extends({}, i, {
                provider: {
                    paramsJson: JSON.stringify(p)
                }
            });
        } catch (e) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH TRUST SIGNALS] error while parsing paramsJson from payment link metadata: ",
                ""
            ])), e);
            return i;
        }
    }
    l.shouldShowPaymentLinkTrustSignals = u;
    l.isPSPInTrustSignalsFeatureAllowlist = d;
    l.setMetadata = m;
}, 98);