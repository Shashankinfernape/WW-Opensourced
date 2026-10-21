__d("WAWebFetchWassBotProfileGQL", [
    "WALogger",
    "WAWebFetchWassBotProfileGQLQuery.graphql",
    "WAWebFetchWassBotProfileGQLWithoutGroupQuery.graphql",
    "WAWebFetchWassBotProfileGQL_profile.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebWassBotProfileMapper",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = e !== undefined ? e : e = n("WAWebFetchWassBotProfileGQLQuery.graphql");
    const _ = s !== undefined ? s : s = n("WAWebFetchWassBotProfileGQLWithoutGroupQuery.graphql");
    const f = u !== undefined ? u : u = n("WAWebFetchWassBotProfileGQL_profile.graphql");
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(botFbid, groupJid = null) {
            yield r("WAWebNetworkStatus").waitIfOffline();
            try {
                let a;
                const getInlineDataReader = function(t) {
                    a = t;
                };
                const l = groupJid == null ? yield o("WAWebRelayClient").fetchQuery(_, {
                    botFbid
                }, {
                    environmentType: "whatsapp_web",
                    getInlineDataReader
                }) : yield o("WAWebRelayClient").fetchQuery(p, {
                    botFbid,
                    groupJid
                }, {
                    environmentType: "whatsapp_web",
                    getInlineDataReader
                });
                const s = l?.get_wass_account_profile;
                const u = a;
                if (s != null && u == null) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[fetchWassBotProfileGQL] inline data reader unavailable"
                    ]))).sendLogs("sbp-fetch-wass-bot-profile-no-reader");
                    return {
                        type: "error"
                    };
                }
                const g = s == null || u == null ? null : u(f, s);
                return o("WAWebWassBotProfileMapper").toWassBotProfileResult(g == null ? null : {
                    creator_lid: g.creator_lid,
                    hca_entrypoint_id: g.hca_entrypoint_id,
                    is_deprecated: g.is_deprecated,
                    name: g.name,
                    product: g.product,
                    profile_pic_thumb_url: g.profile_pic_thumb_url,
                    profile_pic_full_url: g.profile_pic_full_url,
                    tos: g.tos == null ? null : {
                        group: (g.tos.group ?? []).map(({ blocking, id })=>({
                                blocking,
                                id
                            }))
                    }
                });
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[fetchWassBotProfileGQL] GraphQL error fetching WASS bot profile"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("sbp-fetch-wass-bot-profile-graphql-error");
                    return {
                        type: "graphql-error",
                        error
                    };
                }
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchWassBotProfileGQL] failed to fetch WASS bot profile"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("sbp-fetch-wass-bot-profile-error");
                return {
                    type: "error"
                };
            }
        });
        return h.apply(this, arguments);
    }
    l.fetchWassBotProfileGQL = g;
}, 98);