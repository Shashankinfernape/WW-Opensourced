__d("WAWebHatchTextStatusBridge", [
    "WATimeUtils",
    "WAWebContactCollection"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const textStatusEphemeralDuration = 86400;
    function s(t, textStatusString) {
        const r = o("WAWebContactCollection").ContactCollection.get(t);
        if (r != null) {
            const textStatusLastUpdateTime = o("WATimeUtils").unixTime();
            r.set({
                textStatusString,
                textStatusEmoji: null,
                textStatusLastUpdateTime,
                textStatusExpiryTs: textStatusLastUpdateTime + textStatusEphemeralDuration,
                textStatusEphemeralDuration
            });
        }
    }
    function u(e) {
        const t = o("WAWebContactCollection").ContactCollection.get(e);
        if (t != null) {
            t.set({
                textStatusString: null,
                textStatusEmoji: null,
                textStatusLastUpdateTime: 0,
                textStatusExpiryTs: 0,
                textStatusEphemeralDuration: null
            });
        }
    }
    l.setHatchTextStatus = s;
    l.clearHatchTextStatus = u;
}, 98);