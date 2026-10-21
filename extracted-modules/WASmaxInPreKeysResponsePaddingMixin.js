__d("WASmaxInPreKeysResponsePaddingMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "padding");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytesRange(n.value, 0, 524288);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                paddingElementValue: r.value
            });
        }
        return r;
    }
    l.parseResponsePaddingMixin = e;
}, 98);