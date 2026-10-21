__d("WASmaxInGroupsSubGroupMixin", [
    "WAResultOrError",
    "WASmaxParseJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseJid").attrGroupJid(e, "sub_group_jid");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                subGroupJid: t.value
            });
        }
        return t;
    }
    l.parseSubGroupMixin = e;
}, 98);