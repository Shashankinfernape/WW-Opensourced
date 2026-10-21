__d("WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin", [
    "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "group_join");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin").parseGroupJoinMembershipApprovalModeEnabledMixin(n.value);
        r.success;
        return r;
    }
    l.parseMembershipApprovalGroupJoinModeEnabledMixin = e;
}, 98);