__d("WAWebSchemaBusinessBroadcastInsights", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "biz-broadcast-insights";
    function s() {
        const t = o("WAWebModelStorageUtils").getStorage();
        const n = o("WAWebStorageMutationBuilder").columnBuilder(t.config);
        const { addColumn: r, addUserDefinedPrimaryKey: a } = n;
        t.add(e).version(o("WAWebModelStorageVersions").businessBroadcastInsightsCreateTable(), [
            a("campaignId"),
            r("deliveredCount"),
            r("lastUpdatedTimestampMs"),
            r("quickReplyCount"),
            r("readCount"),
            r("recipientCount"),
            r("repliedCount")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    l.addTable = s;
    l.getBusinessBroadcastInsightsTable = u;
}, 98);