__d("WAWebSignupMetadataQuery", [
    "WAWebGraphQLConstants",
    "WAWebRelayClient",
    "WAWebSignupMetadataQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e !== undefined ? e : e = n("WAWebSignupMetadataQuery.graphql");
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(signup_id, phone_number) {
            const n = yield o("WAWebRelayClient").fetchQuery(s, {
                signup_id,
                phone_number
            }, {
                environmentType: "whatsapp_www",
                accessToken: o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN
            });
            const r = n?.wa_signup_metadata;
            if (r == null) {
                return null;
            }
            return {
                id: r.id,
                signup_message: r.signup_message,
                privacy_policy_url: r.privacy_policy_url
            };
        });
        return c.apply(this, arguments);
    }
    l.fetchSignupMetadataGraphQL = u;
}, 98);