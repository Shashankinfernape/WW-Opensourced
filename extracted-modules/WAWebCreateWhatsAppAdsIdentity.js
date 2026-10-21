__d("WAWebCreateWhatsAppAdsIdentity", [
    "WAWebCreateWhatsAppAdsIdentityMutation.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, sensitive_string_value) {
            const s = e !== undefined ? e : e = n("WAWebCreateWhatsAppAdsIdentityMutation.graphql");
            const u = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
            const c = yield o("WAWebRelayClient").commitMutation(s, {
                code: {
                    sensitive_string_value
                },
                phone_number: {
                    sensitive_string_value: u?.user ?? ""
                }
            }, {
                accessToken: t.token,
                environmentType: "facebook"
            });
            return r("nullthrows")(c?.create_or_update_whatsapp_ads_identity?.id);
        });
        return u.apply(this, arguments);
    }
    l.default = s;
}, 98);