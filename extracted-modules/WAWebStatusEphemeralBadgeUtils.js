__d("WAWebStatusEphemeralBadgeUtils", [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebLidMigrationUtils",
    "useWAWebChatValues",
    "useWAWebGroupMetadataValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        let s = o("WAWebChatCollection").ChatCollection.get(e);
        if (s == null && e.isRegularUser != null && e.isRegularUser()) {
            try {
                const u = e.isLid != null && e.isLid() ? o("WAWebLidMigrationUtils").toPn(e) : o("WAWebLidMigrationUtils").toLid(e);
                if (u != null) {
                    s = o("WAWebChatCollection").ChatCollection.get(u);
                }
            } catch (e) {}
        }
        const c = o("useWAWebChatValues").useOptionalChatValues(s?.id ?? e, [
            o("WAWebFrontendChatGetters").getEphemeralDuration
        ]) ?? [];
        const d = c[0];
        const m = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(s?.groupMetadata?.id, [
            o("WAWebGroupMetadataGetters").getEphemeralDuration
        ]) ?? [];
        const p = m[0];
        const _ = s != null && o("WAWebChatGetters").getIsGroup(s) ? p : d;
        const f = t && _ != null && _ > 0;
        if (f) {
            return {
                type: "discreet",
                testid: "disappearing-messages-refreshed"
            };
        }
    }
    l.useStatusRingEphemeralBadge = e;
}, 98);