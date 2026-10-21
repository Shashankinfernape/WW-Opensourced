__d("WAWebPaymentLinkUrlMetaData", [
    "WAWebABProps",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = JSON.parse(o("WAWebABProps").getABPropConfigValue("smb_payment_links_url_regex_list"));
        for(const n in t){
            if (e.match(n)) {
                return {
                    psp: t[n],
                    shouldDetectInComposer: o("WAWebMobilePlatforms").isSMB()
                };
            }
        }
        return null;
    }
    l.getPaymentLinkUrlMetaData = e;
}, 98);