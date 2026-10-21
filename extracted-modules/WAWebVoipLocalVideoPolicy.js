__d("WAWebVoipLocalVideoPolicy", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 670020;
    let l = false;
    function s() {
        l = true;
    }
    function u() {
        return !l;
    }
    i.LOCAL_VIDEO_BLOCKED_STATUS = e;
    i.disableLocalVideo = s;
    i.isLocalVideoAllowed = u;
}, 66);