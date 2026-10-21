__d("WAWebCastToEventCreationMsg", [
    "invariant",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) {
            s(0, 77213);
        }
        return e;
    }
    l.default = e;
}, 98);