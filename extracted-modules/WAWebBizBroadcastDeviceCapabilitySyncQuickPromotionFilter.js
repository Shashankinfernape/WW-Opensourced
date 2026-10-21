__d("WAWebBizBroadcastDeviceCapabilitySyncQuickPromotionFilter", [
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:bizBroadcastDeviceCapabilitySync: not an SMB account"
    };
    const s = {
        reason: "filtersRuleValidator:bizBroadcastDeviceCapabilitySync: primary device does not support business broadcast"
    };
    const u = {
        name: "whatsapp_smb_biz_broadcast_device_capability_sync",
        filter: function(n, r, a) {
            if (o("WAWebMobilePlatforms").isSMB()) {
                if (o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcast()) {
                    return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
                }
                return s;
            }
            return e;
        }
    };
    l.bizBroadcastDeviceCapabilitySyncFilter = u;
}, 98);