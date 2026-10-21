__d("WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "parent");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "default_membership_approval_mode", "request_required");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                defaultMembershipApprovalMode: n.value
            });
        }
        return n;
    }
    l.parseParentGroupDefaultMembershipApprovalModeMixin = e;
}, 98);