__d("WASmaxInGroupsUnknownLinkModeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "member_link_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentString(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    l.parseUnknownLinkModeMixin = e;
}, 98);