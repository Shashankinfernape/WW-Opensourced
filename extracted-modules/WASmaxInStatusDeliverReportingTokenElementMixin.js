__d("WASmaxInStatusDeliverReportingTokenElementMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting_token");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrInt, t.value, "v");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytesRange(t.value, 16, 16);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                reportingTokenV: n.value,
                reportingTokenElementValue: r.value
            });
        }
        return r;
    }
    l.parseReportingTokenElementMixin = e;
}, 98);