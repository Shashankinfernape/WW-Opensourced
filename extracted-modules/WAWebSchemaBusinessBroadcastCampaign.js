__d("WAWebSchemaBusinessBroadcastCampaign", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebProtobufSyncAction.pb",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "biz-broadcast-campaigns";
    function s() {
        const t = o("WAWebModelStorageUtils").getStorage();
        const n = o("WAWebStorageMutationBuilder").columnBuilder(t.config);
        const { addColumn: r, addIndex: a, addUserDefinedPrimaryKey: i } = n;
        t.add(e).version(o("WAWebModelStorageVersions").businessBroadcastCampaignsCreateTable(), [
            i("campaignId"),
            r("adGroupId"),
            r("adId"),
            r("broadcastJid"),
            r("campaignName"),
            r("createdTimestamp"),
            r("deviceId"),
            r("isDuplicate"),
            r("msgId"),
            r("pendingBroadcastMessageId"),
            r("reservedQuota"),
            r("scheduledTimestamp"),
            r("sourceCampaignId"),
            r("status"),
            a("adGroupId"),
            a("broadcastJid"),
            a("createdTimestamp"),
            a("deviceId"),
            a("status"),
            a("msgId")
        ]).version(o("WAWebModelStorageVersions").customerDataCreateTable(), []).version(o("WAWebModelStorageVersions").businessBroadcastCampaignsAddAdIdIndex(), [
            a("adId")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    function c() {
        return o("WAWebModelStorageUtils").getStorage().doesLocalSchemaIncludeVersion(o("WAWebModelStorageVersions").businessBroadcastCampaignsAddAdIdIndex());
    }
    l.BusinessBroadcastCampaignStatus = o("WAWebProtobufSyncAction.pb").SyncActionValue$BusinessBroadcastCampaignStatus;
    l.addTable = s;
    l.getBusinessBroadcastCampaignTable = u;
    l.canUseAdIdIndex = c;
}, 98);