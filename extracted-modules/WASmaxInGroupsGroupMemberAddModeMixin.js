__d("WASmaxInGroupsGroupMemberAddModeMixin", [
    "WAResultOrError",
    "WASmaxInGroupsMemberAddModes",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "member_add_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsMemberAddModes").parseMemberAddModes(t.value);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                memberAddModeMemberAddModes: n.value
            });
        }
        return n;
    }
    l.parseGroupMemberAddModeMixin = e;
}, 98);