__d("WAWebBizBroadcastDeviceCapabilityQuickPromotionFilter", [
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastMarketingMessagesEligibilityModel",
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:bizBroadcastDeviceCapability: not an SMB account"
    };
    const s = {
        reason: "filtersRuleValidator:bizBroadcastDeviceCapability: primary device does not support business broadcast"
    };
    const u = {
        reason: "filtersRuleValidator:bizBroadcastDeviceCapability: marketing messages not eligible"
    };
    const c = {
        name: "whatsapp_smb_biz_broadcast_device_capability",
        filter: function(n, r, a) {
            if (o("WAWebMobilePlatforms").isSMB()) {
                if (o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcast()) {
                    if (o("WAWebBizBroadcastMarketingMessagesEligibilityModel").isMarketingMessagesEligible()) {
                        return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
                    }
                    return u;
                }
                return s;
            }
            return e;
        }
    };
    l.bizBroadcastDeviceCapabilityFilter = c;
}, 98);