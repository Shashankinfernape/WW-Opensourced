__d("WAWebWassBotProfileMapper", [
    "WAWebBotProduct"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e == null || e === "") {
            return null;
        }
        if (e === "THIRD_PARTY") {
            return o("WAWebBotProduct").BotProduct.THIRD_PARTY.valueOf();
        }
        if (e === "META_AI_THREAD") {
            return o("WAWebBotProduct").BotProduct.META_AI_THREAD.valueOf();
        }
        if (e === "MANUS") {
            return o("WAWebBotProduct").BotProduct.MANUS.valueOf();
        }
        if (e === "MUSE") {
            return o("WAWebBotProduct").BotProduct.MUSE.valueOf();
        }
        return e;
    }
    function s(t) {
        if (t == null) {
            return {
                type: "deleted"
            };
        }
        return {
            type: "exists",
            value: {
                creatorLid: u(t.creator_lid),
                hcaEntrypointId: u(t.hca_entrypoint_id),
                groupTosRequirements: t.tos == null ? null : t.tos.group ?? [],
                isDeprecated: t.is_deprecated ?? null,
                name: u(t.name),
                product: e(t.product),
                profilePicThumbUrl: u(t.profile_pic_thumb_url),
                profilePicFullUrl: u(t.profile_pic_full_url)
            }
        };
    }
    function u(e) {
        if (e != null && e !== "") {
            return e;
        }
        return null;
    }
    l.mapWassProductToBotProduct = e;
    l.toWassBotProfileResult = s;
    l.emptyToNull = u;
}, 98);