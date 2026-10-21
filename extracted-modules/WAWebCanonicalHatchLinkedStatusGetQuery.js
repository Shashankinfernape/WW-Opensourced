__d("WAWebCanonicalHatchLinkedStatusGetQuery", [
    "WAPromiseTimeout",
    "WAWebCanonicalHatchLinkedStatusGetQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 32000;
    const u = e !== void 0 ? e : e = n("WAWebCanonicalHatchLinkedStatusGetQuery.graphql");
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const i = yield o("WAPromiseTimeout").promiseTimeout(o("WAWebRelayClient").fetchQuery(u, {}, {
                environmentType: "whatsapp_web"
            }), s, "hatch linked status query timed out").catch(m);
            const l = i?.wa_genai_hatch_channel_metadata?.linked_status;
            if (l == null) {
                return null;
            }
            return {
                hasChannel: l.has_channel ?? false,
                isPaired: l.is_paired ?? false,
                status: l.status ?? null,
                channelFbid: l.channel_fbid ?? null
            };
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError ? r("err")(`hatch linked status query failed: ${o("WAWebGraphQLServerError").formatGraphQLServerError(e)}`) : e;
    }
    l.fetchHatchLinkedStatus = c;
}, 98);