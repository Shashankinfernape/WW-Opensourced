__d("WASmaxInGroupsParticipantGroupJoinRequestMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "membership_approval_request");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "error", "421");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, n.value, "error", o("WASmaxInGroupsEnums").ENUM_304_419);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                error: r.value,
                membershipApprovalRequestError: a.value
            });
        }
        return a;
    }
    l.parseParticipantGroupJoinRequestMixin = e;
}, 98);