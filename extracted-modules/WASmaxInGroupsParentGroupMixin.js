__d("WASmaxInGroupsParentGroupMixin", [
    "WAResultOrError",
    "WASmaxParseJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseJid").attrGroupJid(e, "parent_group_jid");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                parentGroupJid: t.value
            });
        }
        return t;
    }
    l.parseParentGroupMixin = e;
}, 98);