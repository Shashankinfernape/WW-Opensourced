__d("WASmaxInChatstateInternalTestMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "test");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, t.value, "config");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                testConfig: n.value
            });
        }
        return n;
    }
    l.parseInternalTestMixin = e;
}, 98);