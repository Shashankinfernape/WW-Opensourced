__d("WAWebBizBroadcastCampaignGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createBizBroadcastCampaignCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("adGroupId");
    const m = field("adId");
    const p = field("broadcastJid");
    const _ = field("campaignName");
    const f = field("createdTimestamp");
    const g = field("deviceId");
    const h = field("msgId");
    const y = field("pendingBroadcastMessageId");
    const C = field("reservedQuota");
    const b = field("scheduledTimestamp");
    const v = field("status");
    l.clearBizBroadcastCampaignGetterCacheFor = c;
    l.getAdGroupId = d;
    l.getAdId = m;
    l.getBroadcastJid = p;
    l.getCampaignName = _;
    l.getCreatedTimestamp = f;
    l.getDeviceId = g;
    l.getMsgId = h;
    l.getPendingBroadcastMessageId = y;
    l.getReservedQuota = C;
    l.getScheduledTimestamp = b;
    l.getStatus = v;
}, 98);