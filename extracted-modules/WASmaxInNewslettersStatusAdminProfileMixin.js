__d("WASmaxInNewslettersStatusAdminProfileMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "admin_profile");
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
    l.parseStatusAdminProfileMixin = e;
}, 98);