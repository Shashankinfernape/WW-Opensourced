__d("WASmaxInMessageDeliverMediaMetaMixin", [
    "WAResultOrError",
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
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "contenttype");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaContenttype: r.value
            });
        }
        return r;
    }
    l.parseMediaMetaMixin = e;
}, 98);