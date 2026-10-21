__d("WASmaxInGroupsPictureNotFoundMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "status", "204");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                status: n.value
            });
        }
        return n;
    }
    l.parsePictureNotFoundMixin = e;
}, 98);