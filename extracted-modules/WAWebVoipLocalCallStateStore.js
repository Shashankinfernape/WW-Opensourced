__d("WAWebVoipLocalCallStateStore", [
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let None = o("WAWebVoipWaCallEnums").CallState.None;
    function s(t) {
        None = t;
    }
    function u() {
        return None;
    }
    l.setLocalCallState = s;
    l.getLocalCallState = u;
}, 98);