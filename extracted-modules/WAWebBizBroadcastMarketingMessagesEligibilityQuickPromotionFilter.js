__d("WAWebBizBroadcastMarketingMessagesEligibilityQuickPromotionFilter", [
    "WAWebBizBroadcastMarketingMessagesEligibilityModel",
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:bizBroadcastMarketingMessagesEligibility: not an SMB account"
    };
    const s = {
        reason: "filtersRuleValidator:bizBroadcastMarketingMessagesEligibility: marketing messages not eligible"
    };
    const u = {
        name: "whatsapp_smb_biz_broadcast_marketing_messages_eligibility",
        filter: function(n, r, a) {
            if (o("WAWebMobilePlatforms").isSMB()) {
                if (o("WAWebBizBroadcastMarketingMessagesEligibilityModel").isMarketingMessagesEligible()) {
                    return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
                }
                return s;
            }
            return e;
        }
    };
    l.bizBroadcastMarketingMessagesEligibilityFilter = u;
}, 98);