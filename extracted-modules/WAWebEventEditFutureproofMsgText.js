__d("WAWebEventEditFutureproofMsgText", [
    "fbt",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = o("WAWebMsgGetters").getIsSentByMe(msg);
        if (n) {
            return s._("Your event edit couldn't load. Open the event on your phone to view it.");
        }
        return s._("This event edit couldn't load. Open the event on your phone to view it.");
    }
    l.default = e;
}, 226);