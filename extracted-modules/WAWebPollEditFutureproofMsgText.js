__d("WAWebPollEditFutureproofMsgText", [
    "fbt",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = o("WAWebMsgGetters").getIsSentByMe(msg);
        if (n) {
            return s._("You edited a poll from your phone, but this version of WhatsApp doesn't support it.");
        }
        return s._("Someone edited a poll, but this version of WhatsApp doesn't support it.");
    }
    l.default = e;
}, 226);