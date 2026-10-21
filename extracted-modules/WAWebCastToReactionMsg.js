__d("WAWebCastToReactionMsg", [
    "invariant",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.REACTION) {
            return e;
        }
        return null;
    }
    function u(t) {
        const n = e(t);
        if (n == null) {
            s(0, 73785);
        }
        return n;
    }
    l.castToReactionMsgData = e;
    l.assertReactionMsgData = u;
}, 98);