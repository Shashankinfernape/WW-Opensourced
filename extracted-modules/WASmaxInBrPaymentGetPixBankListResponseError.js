__d("WASmaxInBrPaymentGetPixBankListResponseError", [
    "WASmaxInBrPaymentIQErrorGenericResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInBrPaymentIQErrorGenericResponseMixin").parseIQErrorGenericResponseMixin(e, t);
        r.success;
        return r;
    }
    l.parseGetPixBankListResponseError = e;
}, 98);