__d("WASmaxInGroupsGroupJoinMembershipApprovalModeDisabledMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "group_join");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "state", "off");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                state: n.value
            });
        }
        return n;
    }
    l.parseGroupJoinMembershipApprovalModeDisabledMixin = e;
}, 98);