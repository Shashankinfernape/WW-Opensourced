__d("useWAWebPinnedMessages", [
    "WAWebMsgCollection",
    "WAWebPinInChatCollection",
    "WAWebWidFactory",
    "react-compiler-runtime",
    "useWAWebAggregatedView"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e.id) {
            n = o("WAWebWidFactory").asChatWid(e.id);
            t[0] = e.id;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = o("useWAWebAggregatedView").useAggregatedView(o("WAWebPinInChatCollection").PinInChatCollection.byChatId, n);
        let a;
        if (t[2] !== r) {
            a = r.filter(o("WAWebPinInChatCollection").isPinValid).sort(s);
            t[2] = r;
            t[3] = a;
        } else {
            a = t[3];
        }
        return a;
    }
    function s(e, t) {
        const n = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey);
        const r = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgKey);
        if (n == null || r == null) {
            return -1;
        }
        return n.t - r.t;
    }
    l.default = e;
}, 98);