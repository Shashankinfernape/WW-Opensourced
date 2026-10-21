__d("WAWebLoggingPaymentLinkWithoutPreviewFeature", [
    "WAWebPaymentLink"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return o("WAWebPaymentLink").shouldDetectInComposer();
    }
    function s(t, n, r) {
        if (!e()) {
            return n;
        }
        let a = t?.psp;
        if (a == null && t == null) {
            const i = r[0];
            a = i != null ? o("WAWebPaymentLink").getPSP(i.url) : null;
        }
        if (a == null) {
            return n;
        }
        return babelHelpers.extends({}, n, {
            provider: {
                paramsJson: JSON.stringify({
                    name: a
                })
            }
        });
    }
    l.getMetadata = s;
}, 98);