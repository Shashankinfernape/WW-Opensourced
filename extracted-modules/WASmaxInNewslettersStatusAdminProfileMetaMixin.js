__d("WASmaxInNewslettersStatusAdminProfileMetaMixin", [
    "WASmaxInNewslettersStatusAdminProfileMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "admin_profile");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersStatusAdminProfileMixin").parseStatusAdminProfileMixin(r.value);
        a.success;
        return a;
    }
    l.parseStatusAdminProfileMetaMixin = e;
}, 98);