__d("WASmaxInGroupsParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsParticipantHasInvalidPNMixin",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
    "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsParticipantRequestCodeCanBeSentMixin").parseParticipantRequestCodeCanBeSentMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantRequestCodeCanBeSent",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin").parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsParticipantHasInvalidPNMixin").parseParticipantHasInvalidPNMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantHasInvalidPN",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParticipantRequestCodeCanBeSent",
            "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
            "ParticipantHasInvalidPN"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup = e;
}, 98);