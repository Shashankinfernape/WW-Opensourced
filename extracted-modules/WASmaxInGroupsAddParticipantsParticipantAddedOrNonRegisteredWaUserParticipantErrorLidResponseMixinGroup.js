__d("WASmaxInGroupsAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantsParticipantAddedResponseMixin",
    "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsAddParticipantsParticipantAddedResponseMixin").parseAddParticipantsParticipantAddedResponseMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "AddParticipantsParticipantAddedResponse",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin").parseNonRegisteredWaUserParticipantErrorLidResponseMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "NonRegisteredWaUserParticipantErrorLidResponse",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParticipantAddedResponse",
            "NonRegisteredWaUserParticipantErrorLidResponse"
        ], [
            t,
            n
        ]);
    }
    l.parseAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup = e;
}, 98);