__d("useWAWebPinsToResend", [
    "WAWebPinInChatCollection",
    "compactMap",
    "react-compiler-runtime",
    "useWAWebAggregatedView"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = o("useWAWebAggregatedView").useAggregatedView(o("WAWebPinInChatCollection").PinInChatCollection.byIsFailedByMe, true);
        let a;
        if (t[0] !== n) {
            a = function(t) {
                return n.get(o("WAWebPinInChatCollection").getPinInChatId(t));
            };
            t[0] = n;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== e || t[3] !== a) {
            i = r("compactMap")(e, a);
            t[2] = e;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    l.default = e;
}, 98);