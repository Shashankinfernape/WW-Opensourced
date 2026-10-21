__d("WAWebMessageHistoryBundleFutureproofMsgText", [
    "fbt",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        if (o("WAWebMsgGetters").getIsSentByMe(msg)) {
            return s._("You sent message history to a new group member. Open WhatsApp on your phone and visit this group to see more information about the history sent.");
        }
        return s._("Someone sent you message history for this group. Open WhatsApp on your phone and visit this group to see it.");
    }
    l.default = e;
}, 226);