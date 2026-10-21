__d("WAWebPaymentLinkWithCTAFeature", [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebPaymentLink",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = n("$InternalEnum")({
        LINK_PREVIEW_HEADER_WITH_CTA: 0,
        ORDER_HEADER_WITH_CTA: 1,
        DEFAULT: 2
    });
    function u() {
        return o("WAWebABProps").getABPropConfigValue("smb_payment_links_cta_button_kill_switch");
    }
    function c(t) {
        if (u()) {
            return s.DEFAULT;
        }
        try {
            const r = JSON.parse(o("WAWebABProps").getABPropConfigValue("smb_payment_links_cta_psp_list"));
            const a = r?.psp;
            if (!Array.isArray(a) || a?.includes(t) === false) {
                return s.DEFAULT;
            }
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH CTA] error while parsing json for ab prop smb_payment_links_cta_psp_list: ",
                ""
            ])), t);
            return s.DEFAULT;
        }
        if (o("WAWebABProps").getABPropConfigValue("payment_br_holdout")) {
            return s.DEFAULT;
        }
        return s.cast(o("WAWebABProps").getABPropConfigValue("smb_payment_links_cta_variant")) ?? s.DEFAULT;
    }
    function d(e, t) {
        const n = e?.psp;
        if (n == null) {
            return t;
        }
        const r = c(n);
        if (r === s.LINK_PREVIEW_HEADER_WITH_CTA) {
            return babelHelpers.extends({}, t, {
                button: {
                    displayText: o("WAWebPaymentLink").CTA_TEXT
                },
                header: {
                    headerType: o("WAWebProtobufsE2E.pb").Message$PaymentLinkMetadata$PaymentLinkHeader$PaymentLinkHeaderType.LINK_PREVIEW
                }
            });
        }
        if (r === s.ORDER_HEADER_WITH_CTA) {
            return babelHelpers.extends({}, t, {
                button: {
                    displayText: o("WAWebPaymentLink").CTA_TEXT
                },
                header: {
                    headerType: o("WAWebProtobufsE2E.pb").Message$PaymentLinkMetadata$PaymentLinkHeader$PaymentLinkHeaderType.ORDER
                }
            });
        }
        if (r === s.DEFAULT) {
            return t;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
        })();
    }
    l.PaymentLinkVariant = s;
    l.isKillSwitchEnabled = u;
    l.getMetadata = d;
}, 98);