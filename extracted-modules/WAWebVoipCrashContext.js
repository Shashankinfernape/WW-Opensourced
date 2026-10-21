__d("WAWebVoipCrashContext", [
    "WAWebCallCollection",
    "WAWebCrashlog",
    "WAWebVoipActivityTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    function s() {
        if (!e) {
            e = true;
            o("WAWebCrashlog").registerCrashlogVoipContextCallback(u);
        }
    }
    function u() {
        const t = r("WAWebCallCollection").activeCall?.id;
        if (t == null) {
            return null;
        }
        const n = o("WAWebVoipActivityTracker").peekVoipActivitySnapshot();
        return {
            callId: t,
            voipActivity: n?.lastVoipActivity,
            voipActivityTimestampSec: n?.lastVoipActivityTimestampSec,
            voipUiActivity: n?.lastVoipUiActivity,
            voipUiActivityTimestampSec: n?.lastVoipUiActivityTimestampSec
        };
    }
    l.ensureVoipCrashContextRegistered = s;
}, 98);