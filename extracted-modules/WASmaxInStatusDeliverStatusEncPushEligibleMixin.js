__d("WASmaxInStatusDeliverStatusEncPushEligibleMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, n.value, "push_eligible", "true");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaPushEligible: r.value
            });
        }
        return r;
    }
    l.parseStatusEncPushEligibleMixin = e;
}, 98);