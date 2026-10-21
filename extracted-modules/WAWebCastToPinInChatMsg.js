__d("WAWebCastToPinInChatMsg", [
    "invariant",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) {
            return e;
        }
        return null;
    }
    function u(t) {
        const n = e(t);
        if (n == null) {
            s(0, 76405);
        }
        return n;
    }
    l.assertPinInChatMsgData = u;
}, 98);