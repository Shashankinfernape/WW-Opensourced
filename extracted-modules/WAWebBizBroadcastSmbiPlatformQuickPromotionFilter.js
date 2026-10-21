__d("WAWebBizBroadcastSmbiPlatformQuickPromotionFilter", [
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:bizBroadcastSmbiPlatform: primary device is not SMBI"
    };
    const s = {
        name: "whatsapp_smb_biz_broadcast_smbi_platform",
        filter: function(n, r, a) {
            if (o("WAWebMobilePlatforms").getMobilePlatform() !== o("WAWebMobilePlatforms").PLATFORMS.SMBI) {
                return e;
            }
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
    };
    l.bizBroadcastSmbiPlatformFilter = s;
}, 98);