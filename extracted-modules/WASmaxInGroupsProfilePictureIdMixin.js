__d("WASmaxInGroupsProfilePictureIdMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "id");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                id: n.value
            });
        }
        return n;
    }
    l.parseProfilePictureIdMixin = e;
}, 98);