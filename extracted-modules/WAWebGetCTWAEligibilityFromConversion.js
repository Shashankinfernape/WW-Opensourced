__d("WAWebGetCTWAEligibilityFromConversion", [
    "WAArrayBufferUtils",
    "WAWebCTWAGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = "FB_Ads";
    const s = "3pdag";
    const u = "none";
    function c({ conversionData: n, conversionSource: r, ctwaSignals: a }) {
        if (r !== e) {
            return null;
        }
        if (o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
            const l = (a == null ? void 0 : a.split(",").map((e)=>e.trim().toLowerCase())) ?? [];
            const c = l.includes(s) && !l.includes(u);
            if (c) {
                return {
                    data: null,
                    source: e,
                    is3pdag: true
                };
            }
            return null;
        }
        if (n == null) {
            return null;
        }
        try {
            const d = o("WAArrayBufferUtils").arrayBufferToString(n);
            return {
                data: d,
                source: e,
                is3pdag: false
            };
        } catch (e) {
            return null;
        }
    }
    l.SMB_DATA_SHARING_ALLOWED_SOURCE = e;
    l.getCTWAEligibilityFromConversion = c;
}, 98);