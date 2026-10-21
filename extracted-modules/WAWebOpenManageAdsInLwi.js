__d("WAWebOpenManageAdsInLwi", [
    "WAWebBizNativeAdsEntryTapLogger",
    "WAWebBusinessAdCreationUtils",
    "WAWebExternalLink.react",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumWebFlowType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        const a = r("WAWebPonyfillsCryptoRandomUUID")();
        o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
            lwiEntryPoint: n,
            lwiFlowId: a,
            webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.EXTERNAL_WEB
        });
        const i = o("WAWebBusinessAdCreationUtils").getWhatsappManageAdsUrl(e, t);
        o("WAWebExternalLink.react").openExternalLink(i);
    }
    l.openManageAdsInLwi = e;
}, 98);