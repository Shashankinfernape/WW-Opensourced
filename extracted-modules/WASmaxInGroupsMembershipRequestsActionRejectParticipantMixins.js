__d("WASmaxInGroupsMembershipRequestsActionRejectParticipantMixins", [
    "WAResultOrError",
    "WASmaxInGroupsMembershipRequestsActionParticipantRequestNotFoundMixin",
    "WASmaxInGroupsParticipantConflictMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsMembershipRequestsActionParticipantRequestNotFoundMixin").parseMembershipRequestsActionParticipantRequestNotFoundMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "MembershipRequestsActionParticipantRequestNotFound",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsParticipantConflictMixin").parseParticipantConflictMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantConflict",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParticipantRequestNotFound",
            "ParticipantConflict"
        ], [
            t,
            n
        ]);
    }
    l.parseMembershipRequestsActionRejectParticipantMixins = e;
}, 98);