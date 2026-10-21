__d("WAWebCanonicalUserValidQuery", [
    "WAWebCanonicalUserValidQuery.graphql",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e !== undefined ? e : e = n("WAWebCanonicalUserValidQuery.graphql");
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebRelayClient").fetchQuery(s, {}, {
                    environmentType: "whatsapp_web"
                });
                if (t?.xwa_canonical_user_valid?.success === true) {
                    return "valid";
                }
                return "invalid";
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    const n = error.source.errors.some((e)=>e.code === o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE);
                    if (n) {
                        return "invalid";
                    }
                }
                return "error";
            }
        });
        return c.apply(this, arguments);
    }
    l.fetchCanonicalUserValid = u;
}, 98);