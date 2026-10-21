__d("WASmaxInGroupsMembershipRequestsCancellationParticipantMixins", [
    "WAResultOrError",
    "WASmaxInGroupsCancelGroupMembershipRequestsParticipantRequestNotFoundMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsCancelGroupMembershipRequestsParticipantRequestNotFoundMixin").parseCancelGroupMembershipRequestsParticipantRequestNotFoundMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "CancelGroupMembershipRequestsParticipantRequestNotFound",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsParticipantNotAuthorizedMixin").parseParticipantNotAuthorizedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantNotAuthorized",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParticipantRequestNotFound",
            "ParticipantNotAuthorized"
        ], [
            t,
            n
        ]);
    }
    l.parseMembershipRequestsCancellationParticipantMixins = e;
}, 98);