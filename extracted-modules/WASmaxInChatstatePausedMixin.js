__d("WASmaxInChatstatePausedMixin", [
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "chatstate");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "paused");
        if (n.success) {
            return o("WASmaxParseUtils").voidSuccess;
        }
        return n;
    }
    l.parsePausedMixin = e;
}, 98);