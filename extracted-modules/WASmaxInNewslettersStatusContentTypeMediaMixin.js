__d("WASmaxInNewslettersStatusContentTypeMediaMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
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
    l.parseStatusContentTypeMediaMixin = e;
}, 98);