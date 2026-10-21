__d("WAWebMemberLabelFutureproofMsgText", [
    "fbt",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = o("WAWebMsgGetters").getIsSentByMe(msg);
        if (n) {
            return s._("Your member tag edit couldn't load. Open your member tag on your phone to view it.");
        }
        return s._("This member tag edit couldn't load. Open your member tag on your phone to view it.");
    }
    l.default = e;
}, 226);