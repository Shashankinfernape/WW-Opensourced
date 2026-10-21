__d("WAWebUpdateReplyApi", [
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            for (const [n, a] of e.entries()){
                const i = o("WAWebMsgCollection").MsgCollection.get(r("WAWebMsgKey").fromString(n));
                if (i != null) {
                    i.replyCount = i.replyCount != null ? i.replyCount + a : a;
                }
            }
        });
        return s.apply(this, arguments);
    }
    l.updateReplyCount = e;
}, 98);