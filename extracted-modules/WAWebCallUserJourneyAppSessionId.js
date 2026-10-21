__d("WAWebCallUserJourneyAppSessionId", [
    "WAWebCallUserJourneyGating",
    "WAWebGetSharedSessionId"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            return o("WAWebGetSharedSessionId").getSharedSessionId();
        }
        return e;
    }
    l.callUserJourneyAppSessionId = e;
}, 98);