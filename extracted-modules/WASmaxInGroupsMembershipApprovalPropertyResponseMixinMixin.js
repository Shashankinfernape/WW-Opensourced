__d("WASmaxInGroupsMembershipApprovalPropertyResponseMixinMixin", [
    "WAResultOrError",
    "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup",
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
        const r = o("WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup").parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup(n.value);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                groupJoinGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup: r.value
            });
        }
        return r;
    }
    l.parseMembershipApprovalPropertyResponseMixinMixin = e;
}, 98);