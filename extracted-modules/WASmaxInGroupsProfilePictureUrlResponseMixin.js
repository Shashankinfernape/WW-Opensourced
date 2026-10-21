__d("WASmaxInGroupsProfilePictureUrlResponseMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "url");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "direct_path");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                url: n.value,
                directPath: r.value
            });
        }
        return r;
    }
    l.parseProfilePictureUrlResponseMixin = e;
}, 98);