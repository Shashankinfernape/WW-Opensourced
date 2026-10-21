__d("WAWebVoipAppInBgWhenCallStartsStore", [
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s(t, n) {
        if (d(t, n)) {
            e = document.visibilityState !== "visible";
        }
    }
    function u() {
        return e;
    }
    function c() {
        e = null;
    }
    function d(e, t) {
        if (t === o("WAWebVoipWaCallEnums").CallState.Calling) {
            return e === o("WAWebVoipWaCallEnums").CallState.None;
        }
        if (t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall) {
            return e !== o("WAWebVoipWaCallEnums").CallState.ReceivedCall && e !== o("WAWebVoipWaCallEnums").CallState.Rejoining;
        }
        return false;
    }
    l.maybeRecordAppInBgWhenCallStarts = s;
    l.getAppInBgWhenCallStarts = u;
    l.resetAppInBgWhenCallStarts = c;
}, 98);