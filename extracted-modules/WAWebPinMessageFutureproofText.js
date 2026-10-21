__d("WAWebPinMessageFutureproofText", [
    "fbt",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = o("WAWebMsgGetters").getIsSentByMe(msg);
        if (n) {
            return s._("Your pinned message couldn't load. Open the message on your phone to view it.");
        }
        return s._("This pinned message couldn't load. Open the message on your phone to view it.");
    }
    l.default = e;
}, 226);