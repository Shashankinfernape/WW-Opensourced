__d("WAWebGetPlainTextFromBotMsg", [
    "WAWebRichResponseCopyText",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
            const n = r("getPlainTextFromUnifiedResponse")(e.unifiedResponse);
            if (n !== "") {
                return n;
            }
        }
        if (e.richResponse != null) {
            const a = o("WAWebRichResponseCopyText").getRichResponseCopyText(e.richResponse);
            if (a != null) {
                return a;
            }
        }
        if (t?.includeBodyFallback === false) {
            return null;
        }
        return e.body;
    }
    l.getPlainTextFromBotMsg = e;
}, 98);