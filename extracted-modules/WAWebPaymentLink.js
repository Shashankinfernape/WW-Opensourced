__d("WAWebPaymentLink", [
    "WAWebABProps",
    "WAWebLinkify",
    "WAWebLoggingPaymentLinkWithoutPreviewFeature",
    "WAWebMobilePlatforms",
    "WAWebPaymentLinkPreviewWithAmountFeature",
    "WAWebPaymentLinkPreviewWithTrustSignalsFeature",
    "WAWebPaymentLinkTraceIdLoggingFeature",
    "WAWebPaymentLinkWithCTAFeature",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "Open payment link";
    function s(e) {
        return o("WAWebPaymentLinkPreviewWithAmountFeature").getPaymentLinkOrderHeaderComponentDisplayParamsForAmountFeature(e);
    }
    function u(e) {
        const t = JSON.parse(o("WAWebABProps").getABPropConfigValue("smb_payment_links_url_regex_list"));
        for(const n in t){
            if (e.match(n)) {
                return t[n];
            }
        }
        return null;
    }
    function c() {
        return o("WAWebMobilePlatforms").isSMB();
    }
    function d(e, t) {
        let n = null;
        n = o("WAWebPaymentLinkWithCTAFeature").getMetadata(e, n);
        const r = o("WAWebLinkify").findLinks(t, false, o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE());
        n = o("WAWebLoggingPaymentLinkWithoutPreviewFeature").getMetadata(e, n, r);
        n = o("WAWebPaymentLinkPreviewWithTrustSignalsFeature").setMetadata({
            linkPreviewData: e,
            links: r,
            paymentLinkMetadata: n
        });
        n = o("WAWebPaymentLinkPreviewWithAmountFeature").setAmountMetadata(e, n, r);
        n = o("WAWebPaymentLinkTraceIdLoggingFeature").setTraceId(n);
        return n;
    }
    l.CTA_TEXT = e;
    l.getPaymentLinkOrderHeaderComponentDisplayParams = s;
    l.getPSP = u;
    l.shouldDetectInComposer = c;
    l.getPaymentLinkMessageMetadata = d;
}, 98);