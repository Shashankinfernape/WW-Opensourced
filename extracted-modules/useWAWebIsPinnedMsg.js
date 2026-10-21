__d("useWAWebIsPinnedMsg", [
    "WAWebPinInChatCollection",
    "WAWebPinMsgConstants",
    "WAWebWidFactory",
    "react-compiler-runtime",
    "useWAWebAggregatedView"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.remote) {
            n = o("WAWebWidFactory").asChatWid(e.remote);
            t[0] = e.remote;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = o("useWAWebAggregatedView").useAggregatedView(o("WAWebPinInChatCollection").PinInChatCollection.byChatId, n);
        let a;
        if (t[2] !== e || t[3] !== r) {
            a = r.get(o("WAWebPinInChatCollection").getPinInChatId(e))?.pinType;
            t[2] = e;
            t[3] = r;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a === o("WAWebPinMsgConstants").PIN_STATE.PIN;
    }
    l.default = e;
}, 98);