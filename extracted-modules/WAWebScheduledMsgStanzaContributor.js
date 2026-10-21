__d("WAWebScheduledMsgStanzaContributor", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const keyNode = e.kind === "schedule" ? o("WAWap").wap("key", {
            rkid: o("WAWap").CUSTOM_STRING(e.revealKeyId)
        }, e.revealKey) : o("WAWap").wap("key", {
            rkid: o("WAWap").CUSTOM_STRING(e.revealKeyId)
        });
        return {
            keyNode,
            scheduledTimestampS: e.kind === "schedule" ? e.scheduledTimestampS : null
        };
    }
    l.genScheduledMsgMetaContribution = e;
}, 98);