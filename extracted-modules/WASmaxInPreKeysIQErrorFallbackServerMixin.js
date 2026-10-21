__d("WASmaxInPreKeysIQErrorFallbackServerMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "text");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "code", 500, 599);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    l.parseIQErrorFallbackServerMixin = e;
}, 98);