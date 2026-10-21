__d("WAWebSharableEventInviteFutureproofMsgText", [
    "fbt",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = o("WAWebMsgGetters").getIsSentByMe(msg);
        if (n) {
            return u();
        }
        return s._("Someone invited you to an event, but this version of WhatsApp doesn't support it.");
    }
    function u() {
        return s._("You sent an event invite from your phone, but this version of WhatsApp doesn't support it.");
    }
    l.default = e;
}, 226);