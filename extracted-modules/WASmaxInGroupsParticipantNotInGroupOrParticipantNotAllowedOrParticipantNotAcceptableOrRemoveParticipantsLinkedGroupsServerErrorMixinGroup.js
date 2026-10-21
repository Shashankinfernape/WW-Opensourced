__d("WASmaxInGroupsParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsParticipantNotAllowedMixin",
    "WASmaxInGroupsParticipantNotInGroupMixin",
    "WASmaxInGroupsRemoveParticipantsLinkedGroupsServerErrorMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsParticipantNotInGroupMixin").parseParticipantNotInGroupMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantNotInGroup",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsParticipantNotAllowedMixin").parseParticipantNotAllowedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantNotAllowed",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsParticipantNotAcceptableMixin").parseParticipantNotAcceptableMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantNotAcceptable",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsRemoveParticipantsLinkedGroupsServerErrorMixin").parseRemoveParticipantsLinkedGroupsServerErrorMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "RemoveParticipantsLinkedGroupsServerError",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParticipantNotInGroup",
            "ParticipantNotAllowed",
            "ParticipantNotAcceptable",
            "RemoveParticipantsLinkedGroupsServerError"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parseParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup = e;
}, 98);