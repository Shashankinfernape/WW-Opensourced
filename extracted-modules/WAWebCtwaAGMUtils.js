__d("WAWebCtwaAGMUtils", [
    "WALogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        URL: "url",
        CALL: "call",
        CATALOG: "catalog",
        FLOW: "flow"
    };
    const u = {
        FACEBOOK: "facebook",
        INSTAGRAM: "instagram",
        WHATSAPP: "whatsapp"
    };
    function c(t) {
        if (t.ctaPayload == null) {
            return null;
        }
        try {
            const a = JSON.parse(t.ctaPayload);
            return {
                ctaType: a.cta_type,
                ctaText: a.cta_text,
                ctaPayload: a.cta_payload ?? null
            };
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: cannot parse CtWA CTA payload: ",
                ""
            ])), r("getErrorSafe")(error).stack);
            return null;
        }
    }
    function d(e) {
        return e !== u.WHATSAPP;
    }
    l.AGM_CTA_TYPE = s;
    l.AGM_SOURCE_APP = u;
    l.extractAGMPayload = c;
    l.isWamoAGMIntegrationEnabled = d;
}, 98);