__d("WAWebBizBroadcastWebSendEnabledNoExposureQuickPromotionFilter", [
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebCommonQPSurfacesTypes"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:bizBroadcastWebSendEnabledNoExposure: not enabled"
    };
    const s = {
        name: "whatsapp_smb_biz_broadcast_web_send_enabled_no_exposure",
        filter: function(n, r, a) {
            if (o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabledNoExposure()) {
                return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
            }
            return e;
        }
    };
    l.bizBroadcastWebSendEnabledNoExposureFilter = s;
}, 98);