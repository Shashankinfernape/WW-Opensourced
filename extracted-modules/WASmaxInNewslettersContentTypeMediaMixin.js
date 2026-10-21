__d("WASmaxInNewslettersContentTypeMediaMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "media");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                type: n.value
            });
        }
        return n;
    }
    l.parseContentTypeMediaMixin = e;
}, 98);