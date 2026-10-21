__d("WASmaxInStatusDeliverServerReportingTokenMixin", [
    "WASmaxInStatusDeliverReportingTagElementMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInStatusDeliverReportingTagElementMixin").parseReportingTagElementMixin(t.value);
        n.success;
        return n;
    }
    l.parseServerReportingTokenMixin = e;
}, 98);