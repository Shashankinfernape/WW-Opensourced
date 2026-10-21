__d("WAWebPaymentLinkTraceIdLoggingFeature", [
    "WALogger",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebPonyfillsCryptoRandomUUID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        if (!o("WAWebMobilePlatforms").isSMB() || !o("WAWebABProps").getABPropConfigValue("payment_link_trace_id_logging_enabled")) {
            return t;
        }
        const a = t?.provider?.paramsJson;
        try {
            if (a == null) {
                return t;
            }
            let i = JSON.parse(a);
            i = babelHelpers.extends({}, i, {
                payment_link_trace_id: r("WAWebPonyfillsCryptoRandomUUID")().toLowerCase()
            });
            return babelHelpers.extends({}, t, {
                provider: {
                    paramsJson: JSON.stringify(i)
                }
            });
        } catch (n) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK TRACE ID LOGGING] error while parsing paramsJson from payment link metadata: ",
                ""
            ])), n).sendLogs("[PAYMENT LINK TRACE ID LOGGING] error while parsing paramsJson from payment link metadata");
            return t;
        }
    }
    l.setTraceId = s;
}, 98);