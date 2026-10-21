__d("WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin", [
    "WAResultOrError",
    "WASmaxInGroupsMemberShareGroupHistoryModes",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "member_share_group_history_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsMemberShareGroupHistoryModes").parseMemberShareGroupHistoryModes(t.value);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                memberShareGroupHistoryModeMemberShareGroupHistoryModes: n.value
            });
        }
        return n;
    }
    l.parseGroupMemberShareGroupHistoryModeMixin = e;
}, 98);