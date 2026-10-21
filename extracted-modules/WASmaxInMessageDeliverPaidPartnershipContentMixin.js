__d("WASmaxInMessageDeliverPaidPartnershipContentMixin", [
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "paid_partnership");
        if (r.success) {
            return o("WASmaxParseUtils").voidSuccess;
        }
        return r;
    }
    l.parsePaidPartnershipContentMixin = e;
}, 98);