__d("WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsGroupJoinMembershipApprovalModeDisabledMixin",
    "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin").parseGroupJoinMembershipApprovalModeEnabledMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupJoinMembershipApprovalModeEnabled",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsGroupJoinMembershipApprovalModeDisabledMixin").parseGroupJoinMembershipApprovalModeDisabledMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupJoinMembershipApprovalModeDisabled",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "GroupJoinMembershipApprovalModeEnabled",
            "GroupJoinMembershipApprovalModeDisabled"
        ], [
            t,
            n
        ]);
    }
    l.parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup = e;
}, 98);