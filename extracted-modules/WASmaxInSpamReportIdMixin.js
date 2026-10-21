__d("WASmaxInSpamReportIdMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "report");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(n.value, "id");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                reportId: r.value
            });
        }
        return r;
    }
    l.parseReportIdMixin = e;
}, 98);