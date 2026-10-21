__d("WAWebGetAccountNonce", [
    "WAWebGetAccountNonceMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const i = e !== undefined ? e : e = n("WAWebGetAccountNonceMutation.graphql");
            const l = yield o("WAWebRelayClient").commitMutation(i, {
                input: {
                    identifier: {
                        scope: "REQUEST"
                    }
                }
            }, {
                accessToken: t.token,
                environmentType: "facebook"
            });
            return r("nullthrows")(l?.xfb_wa_biz_account_nonce?.detail?.nonce);
        });
        return u.apply(this, arguments);
    }
    l.default = s;
}, 98);