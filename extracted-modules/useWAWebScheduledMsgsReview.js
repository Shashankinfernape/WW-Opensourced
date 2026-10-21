__d("useWAWebScheduledMsgsReview", [
    "WAWebIsScheduledMessagesAvailableForChat",
    "react-compiler-runtime",
    "useWAWebScheduledMsgCount"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("react-compiler-runtime").c(6);
        const n = r("useWAWebScheduledMsgCount")(e.id);
        let a;
        if (t[0] !== e || t[1] !== n) {
            a = n > 0 && e.id.isUser() && o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMessagesAvailableForChat(e);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            a = t[2];
        }
        const shouldShow = a;
        let l;
        if (t[3] !== n || t[4] !== shouldShow) {
            l = {
                count: n,
                shouldShow
            };
            t[3] = n;
            t[4] = shouldShow;
            t[5] = l;
        } else {
            l = t[5];
        }
        return l;
    }
    l.default = e;
}, 98);