__d("WAWebVoipCallLogTimestamp", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (!Number.isFinite(e) || e <= 0) {
            return o("WATimeUtils").unixTime();
        }
        return o("WATimeUtils").castMillisTimeToUnixTime(o("WATimeUtils").castToMillisTime(e)) ?? o("WATimeUtils").unixTime();
    }
    l.resolveCallLogTimestampFromOfferTime = e;
}, 98);