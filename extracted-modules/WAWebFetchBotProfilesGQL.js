__d("WAWebFetchBotProfilesGQL", [
    "WAWebCanonicalUtils",
    "WAWebFetchBotProfilesGQLQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebFetchBotProfilesGQLQuery.graphql");
    function u(e) {
        const e_latest_published_version_for_viewer = e.latest_published_version_for_viewer;
        return {
            personaId: e.id ?? "",
            jid: e.jid,
            name: e_latest_published_version_for_viewer?.name ?? "",
            description: e_latest_published_version_for_viewer?.description ?? "",
            isMetaCreated: e.is_meta_created,
            creatorName: e.creator?.name,
            creatorProfileUrl: e.creator?.profile_uri,
            prompts: e_latest_published_version_for_viewer?.icebreaker_prompt_list ?? [],
            posingAsProfessional: e_latest_published_version_for_viewer?.posing_as_professional != null ? String(e_latest_published_version_for_viewer.posing_as_professional) : null
        };
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return {
                    type: "success",
                    value: []
                };
            }
            yield r("WAWebNetworkStatus").waitIfOffline();
            if (!o("WAWebCanonicalUtils").isCanonicalPresent()) {
                return {
                    type: "canonical-unavailable"
                };
            }
            try {
                const n = yield o("WAWebRelayClient").fetchQuery(s, {
                    ids: e
                }, {
                    environmentType: "whatsapp_web"
                });
                const a = n?.xfb_fetch_genai_personas ?? [];
                return {
                    type: "success",
                    value: a.filter(Boolean).map(u)
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
        return d.apply(this, arguments);
    }
    l.fetchBotProfilesGQL = c;
}, 98);