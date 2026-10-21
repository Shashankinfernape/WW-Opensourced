__d("WASmaxInPreKeysKeyTypeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "type");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(t.value, 1, 1);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                typeElementValue: n.value
            });
        }
        return n;
    }
    l.parseKeyTypeMixin = e;
}, 98);