__d("WAWebResolveBotProfile", [
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebMuseBotIdentity"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebMuseBotIdentity").isMuseBotProfileProduct(e, o("WAWebBotProfileCollection").BotProfileCollection.get(e)?.product);
    }
    function s(e) {
        const t = o("WAWebBotStaticProfiles").getStaticBotSupportInput(e);
        if (t != null) {
            return t;
        }
        const n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
        if (n == null || n.product == null && n.isDeprecated == null && n.hcaEntrypointId == null && n.isDeleted == null) {
            return null;
        }
        return {
            product: n.product,
            isDeprecated: n.isDeprecated,
            hcaEntrypointId: n.hcaEntrypointId,
            isDeleted: n.isDeleted,
            isSynced: true
        };
    }
    l.shouldHideMuseBotFromCachedProfile = e;
    l.resolveBotSupportInput = s;
}, 98);