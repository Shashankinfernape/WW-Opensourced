__d("WAWebUprMessageDispatch", [
    "WAWebUprGating",
    "WAWebUprPaymentRequest"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebUprPaymentRequest").parseUprPaymentInfo(e) != null;
    }
    function s(t, n) {
        if (o("WAWebUprGating").isUprBubbleEnabledForSender(n)) {
            return e(t);
        }
        return false;
    }
    l.isUprPayload = e;
    l.isUprMessage = s;
}, 98);