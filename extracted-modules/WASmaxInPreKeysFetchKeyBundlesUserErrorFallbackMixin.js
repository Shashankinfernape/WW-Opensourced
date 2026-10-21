__d("WASmaxInPreKeysFetchKeyBundlesUserErrorFallbackMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "user");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(n.value, "text");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrIntRange(n.value, "code", 500, 599);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                errorText: r.value,
                errorCode: a.value
            });
        }
        return a;
    }
    l.parseFetchKeyBundlesUserErrorFallbackMixin = e;
}, 98);