__d("WAWebFormatPttMsgText", [
    "fbt",
    "WAWebClock",
    "WAWebMsgType",
    "WAWebViewOnceState"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = msg.safe();
        const r = s._("Voice message");
        const a = o("WAWebClock").Clock.durationStr(msg.duration);
        if (n.type === o("WAWebMsgType").MSG_TYPE.PTT && n.isViewOnce) {
            if (o("WAWebViewOnceState").isViewed(n)) {
                return s._("Opened");
            }
            return r;
        }
        return a || r;
    }
    l.default = e;
}, 226);