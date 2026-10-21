__d("WAWebFetchDynamicAIModes", [
    "WAWebFetchDynamicAIModesQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebFetchDynamicAIModesQuery.graphql");
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield r("WAWebNetworkStatus").waitIfOffline();
            try {
                const n = yield o("WAWebRelayClient").fetchQuery(s, {}, {
                    environmentType: "whatsapp_web"
                });
                return {
                    type: "success",
                    value: n?.xfb_meta_ai_modes?.map(function(e) {
                        return {
                            mode_id: e.mode_id,
                            type: e.type,
                            is_experimental: e.is_experimental,
                            title: e.title,
                            subtitle: e.subtitle
                        };
                    }) ?? []
                };
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    return {
                        type: "graphql-error",
                        error
                    };
                }
                return {
                    type: "error"
                };
            }
        });
        return c.apply(this, arguments);
    }
    l.fetchDynamicAIModes = u;
}, 98);