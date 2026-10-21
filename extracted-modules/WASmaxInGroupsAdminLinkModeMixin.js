__d("WASmaxInGroupsAdminLinkModeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "member_link_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literalContent(o("WASmaxParseUtils").contentString, e, "admin_link");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    l.parseAdminLinkModeMixin = e;
}, 98);