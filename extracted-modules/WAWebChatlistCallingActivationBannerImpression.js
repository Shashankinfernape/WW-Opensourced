__d("WAWebChatlistCallingActivationBannerImpression", [
    "WAWebBannerEventWamEvent",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    function s() {
        if (!e) {
            e = true;
            new (o("WAWebBannerEventWamEvent")).BannerEventWamEvent({
                bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN,
                bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES.WEB_CALLING_ACTIVATION_BANNER
            }).commit();
        }
    }
    function u() {
        e = false;
    }
    l.logChatlistCallingActivationBannerShownOnce = s;
    l.resetChatlistCallingActivationBannerImpressionForTests = u;
}, 98);