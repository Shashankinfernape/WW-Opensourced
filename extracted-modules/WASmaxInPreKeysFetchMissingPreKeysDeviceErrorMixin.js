__d("WASmaxInPreKeysFetchMissingPreKeysDeviceErrorMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(t.value, "text");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(t.value, "code", 500, 599);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                errorText: n.value,
                errorCode: r.value
            });
        }
        return r;
    }
    l.parseFetchMissingPreKeysDeviceErrorMixin = e;
}, 98);