__d("WAWebFetchWassBotListProfilesGQL", [
    "WALogger",
    "WAWebFetchWassBotListProfilesGQLQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebWassBotProfileMapper",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebFetchWassBotListProfilesGQLQuery.graphql");
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield r("WAWebNetworkStatus").waitIfOffline();
            try {
                const e = yield o("WAWebRelayClient").fetchQuery(u, {}, {
                    environmentType: "whatsapp_web"
                });
                const profiles = [];
                for (const n of e?.wass_account_list_profiles ?? []){
                    const botFbid = n.bot_fbid;
                    if (!(botFbid == null || botFbid === "")) {
                        profiles.push({
                            botFbid,
                            creatorLid: o("WAWebWassBotProfileMapper").emptyToNull(n.creator_lid),
                            hcaEntrypointId: o("WAWebWassBotProfileMapper").emptyToNull(n.hca_entrypoint_id),
                            name: o("WAWebWassBotProfileMapper").emptyToNull(n.name),
                            profilePicThumbUrl: o("WAWebWassBotProfileMapper").emptyToNull(n.profile_pic_thumb_url),
                            profilePicFullUrl: o("WAWebWassBotProfileMapper").emptyToNull(n.profile_pic_full_url),
                            isDeprecated: n.is_deprecated,
                            product: o("WAWebWassBotProfileMapper").mapWassProductToBotProduct(n.product)
                        });
                    }
                }
                return {
                    type: "success",
                    profiles
                };
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchWassBotListProfilesGQL] failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("sbp-list-fetch-error");
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    return {
                        type: "graphql-error"
                    };
                }
                return {
                    type: "error"
                };
            }
        });
        return d.apply(this, arguments);
    }
    l.fetchWassBotListProfilesGQL = c;
}, 98);