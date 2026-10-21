__d("WASmaxInGroupsAddParticipantsParticipantMixins", [
    "WAResultOrError",
    "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
    "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
    "WASmaxInGroupsParticipantConflictMixin",
    "WASmaxInGroupsParticipantGroupJoinRequestMixin",
    "WASmaxInGroupsParticipantHasInvalidPNMixin",
    "WASmaxInGroupsParticipantInBanListMixin",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
    "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
    "WASmaxInGroupsParticipantResourceConstraintMixin",
    "WASmaxInGroupsParticipantResourceLimitMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsParticipantGroupJoinRequestMixin").parseParticipantGroupJoinRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantGroupJoinRequest",
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
        const r = o("WASmaxInGroupsParticipantInBanListMixin").parseParticipantInBanListMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantInBanList",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsParticipantRequestCodeCanBeSentMixin").parseParticipantRequestCodeCanBeSentMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantRequestCodeCanBeSent",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin").parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
                value: i.value
            });
        }
        const l = o("WASmaxInGroupsParticipantHasInvalidPNMixin").parseParticipantHasInvalidPNMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantHasInvalidPN",
                value: l.value
            });
        }
        const s = o("WASmaxInGroupsParticipantTemporarilyBlockedMixin").parseParticipantTemporarilyBlockedMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantTemporarilyBlocked",
                value: s.value
            });
        }
        const u = o("WASmaxInGroupsParticipantConflictMixin").parseParticipantConflictMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantConflict",
                value: u.value
            });
        }
        const c = o("WASmaxInGroupsParticipantResourceLimitMixin").parseParticipantResourceLimitMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantResourceLimit",
                value: c.value
            });
        }
        const d = o("WASmaxInGroupsParticipantResourceConstraintMixin").parseParticipantResourceConstraintMixin(e);
        if (d.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantResourceConstraint",
                value: d.value
            });
        }
        const m = o("WASmaxInGroupsParticipantNotAcceptableMixin").parseParticipantNotAcceptableMixin(e);
        if (m.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantNotAcceptable",
                value: m.value
            });
        }
        const p = o("WASmaxInGroupsParticipantNotAddressableMixin").parseParticipantNotAddressableMixin(e);
        if (p.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantNotAddressable",
                value: p.value
            });
        }
        const _ = o("WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin").parseParticipantTemporarilyBlockedFromDefaultSubGroupMixin(e);
        if (_.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantTemporarilyBlockedFromDefaultSubGroup",
                value: _.value
            });
        }
        const f = o("WASmaxInGroupsParticipantBotIncompatibleVersionMixin").parseParticipantBotIncompatibleVersionMixin(e);
        if (f.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantBotIncompatibleVersion",
                value: f.value
            });
        }
        const g = o("WASmaxInGroupsParticipantBotAlreadyExistsMixin").parseParticipantBotAlreadyExistsMixin(e);
        if (g.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantBotAlreadyExists",
                value: g.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParticipantGroupJoinRequest",
            "ParticipantNotAuthorized",
            "ParticipantInBanList",
            "ParticipantRequestCodeCanBeSent",
            "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
            "ParticipantHasInvalidPN",
            "ParticipantTemporarilyBlocked",
            "ParticipantConflict",
            "ParticipantResourceLimit",
            "ParticipantResourceConstraint",
            "ParticipantNotAcceptable",
            "ParticipantNotAddressable",
            "ParticipantTemporarilyBlockedFromDefaultSubGroup",
            "ParticipantBotIncompatibleVersion",
            "ParticipantBotAlreadyExists"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g
        ]);
    }
    l.parseAddParticipantsParticipantMixins = e;
}, 98);