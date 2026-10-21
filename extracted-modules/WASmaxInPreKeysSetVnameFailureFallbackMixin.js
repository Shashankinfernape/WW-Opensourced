__d("WASmaxInPreKeysSetVnameFailureFallbackMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "text");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                text: n.value
            });
        }
        return n;
    }
    l.parseSetVnameFailureFallbackMixin = e;
}, 98);