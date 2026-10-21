__d("WAWebP2XFunnelIdGenerator", [
    "WABase64",
    "WACryptoHmac",
    "WAEncodeString",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e(e, t) {
            this.$1 = e;
            this.$2 = t;
        }
        const t = e.prototype;
        t.genFunnelInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebUserPrefsMultiDevice").getChatThreadLoggingSecretB64();
                if (e == null || e.trim().length === 0) {
                    return {
                        funnel_id: "",
                        is_logging_secret_available: false
                    };
                }
                return {
                    funnel_id: o("WABase64").encodeB64((yield o("WACryptoHmac").hmacSha256(o("WAEncodeString").toUtf8(e + this.$1), o("WAEncodeString").toUtf8(this.$2)))),
                    is_logging_secret_available: true
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.P2XFunnelIdGenerator = e;
}, 98);