__d("WAWebBizBroadcastRecipientLimitCommon", [
    "WAWebABProps",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = 256;
    const s = -1;
    const u = 10000;
    const c = 2;
    function d() {
        return o("WAWebABProps").getABPropConfigValue("smb_business_broadcast_pro_min_audience_recipients");
    }
    function m() {
        if (o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()) {
            return u;
        }
        const t = o("WAWebBizBroadcastDeviceCapabilityCommon").getBizBroadcastPrimaryRecipientLimit();
        if (t != null) {
            return t;
        }
        const n = o("WAWebMobilePlatforms").getMobilePlatform();
        if (n === o("WAWebMobilePlatforms").PLATFORMS.SMBI) {
            return o("WAWebABProps").getABPropConfigValue("smbi_premium_broadcast_max_recipient_limit");
        }
        const r = o("WAWebABProps").getABPropConfigValue("smba_business_broadcast_recipient_limit");
        if (r === s) {
            return e;
        }
        return r;
    }
    l.BB_PRO_RECIPIENTS_LIMIT = u;
    l.MIN_RECIPIENTS = c;
    l.getBizBroadcastProMinAudienceRecipients = d;
    l.getRecipientLimit = m;
}, 98);