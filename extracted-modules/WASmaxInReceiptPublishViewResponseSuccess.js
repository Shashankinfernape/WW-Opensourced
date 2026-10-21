__d("WASmaxInReceiptPublishViewResponseSuccess", [
    "WASmaxInReceiptPublishSuccessMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(e, t);
        r.success;
        return r;
    }
    l.parsePublishViewResponseSuccess = e;
}, 98);