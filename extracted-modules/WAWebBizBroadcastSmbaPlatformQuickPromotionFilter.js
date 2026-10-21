__d("WAWebBizBroadcastSmbaPlatformQuickPromotionFilter", [
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:bizBroadcastSmbaPlatform: primary device is not SMBA"
    };
    const s = {
        name: "whatsapp_smb_biz_broadcast_smba_platform",
        filter: function(n, r, a) {
            if (o("WAWebMobilePlatforms").getMobilePlatform() !== o("WAWebMobilePlatforms").PLATFORMS.SMBA) {
                return e;
            }
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
    };
    l.bizBroadcastSmbaPlatformFilter = s;
}, 98);