__d("WASmaxInMessagePublishServerFrankingTagMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "franking");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "reporting_tag");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytesRange(n.value, 9, 128);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                frankingReportingTagElementValue: r.value
            });
        }
        return r;
    }
    l.parseServerFrankingTagMixin = e;
}, 98);