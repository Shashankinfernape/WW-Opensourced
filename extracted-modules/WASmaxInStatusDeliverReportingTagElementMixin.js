__d("WASmaxInStatusDeliverReportingTagElementMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting_tag");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(t.value, 9, 128);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                reportingTagElementValue: n.value
            });
        }
        return n;
    }
    l.parseReportingTagElementMixin = e;
}, 98);