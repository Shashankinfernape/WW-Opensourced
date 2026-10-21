__d("WASmaxInGroupsBadServerProfilePictureErrorMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "status", "500");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                status: n.value
            });
        }
        return n;
    }
    l.parseBadServerProfilePictureErrorMixin = e;
}, 98);