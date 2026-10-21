__d("WAWebFormatPaymentMsg", [
    "fbt",
    "WAWebWidToFormattedNameOrNumber"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const t = r("WAWebWidToFormattedNameOrNumber")(e.remote);
        if (e.fromMe) {
            return s._("You invited {otherUser} to use payments", [
                s._param("otherUser", t)
            ]);
        }
        return s._("{otherUser} invited you to use payments", [
            s._param("otherUser", t)
        ]);
    }
    function u(e) {
        switch(e){
            case "send":
                return s._("Sent to you");
            case "request":
                return s._("Requested from you");
            default:
                return null;
        }
    }
    function c(e, t) {
        if (t == null || t === "") {
            return null;
        }
        if (e === "send") {
            return s._("Sent to {receiverName}", [
                s._param("receiverName", t)
            ]);
        }
        if (e === "request") {
            return s._("Requested from {receiverName}", [
                s._param("receiverName", t)
            ]);
        }
        return null;
    }
    l.formatPaymentInviteMessageText = e;
    l.getPaymentTypeTextForSelf = u;
    l.getPaymentTypeText = c;
}, 226);