__d("WAWebSchemaBizBroadcastCampaign", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "business-broadcast-campaigns";
    function s() {
        const t = o("WAWebModelStorageUtils").getStorage();
        const n = o("WAWebStorageMutationBuilder").columnBuilder(t.config);
        const { addColumn: r, addCompositePrimaryKey: a, addIndex: i } = n;
        t.add(e).version(o("WAWebModelStorageVersions").bizBroadcastCampaignCreateTable(), [
            a([
                "campaignId",
                "broadcastJid"
            ]),
            r("msgId"),
            r("adGroupId"),
            r("createdTimestamp"),
            r("campaignName"),
            i("adGroupId"),
            i("createdTimestamp")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    l.addTable = s;
    l.getBizBroadcastCampaignTable = u;
}, 98);