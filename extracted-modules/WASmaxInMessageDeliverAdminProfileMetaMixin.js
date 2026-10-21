__d("WASmaxInMessageDeliverAdminProfileMetaMixin", [
    "WASmaxInMessageDeliverAdminProfileMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
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
        const a = o("WASmaxInMessageDeliverAdminProfileMixin").parseAdminProfileMixin(r.value);
        a.success;
        return a;
    }
    l.parseAdminProfileMetaMixin = e;
}, 98);