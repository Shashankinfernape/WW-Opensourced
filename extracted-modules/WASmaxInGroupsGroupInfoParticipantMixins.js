__d("WASmaxInGroupsGroupInfoParticipantMixins", [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoParticipantAdminMixin",
    "WASmaxInGroupsGroupInfoParticipantNonAdminMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsGroupInfoParticipantAdminMixin").parseGroupInfoParticipantAdminMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupInfoParticipantAdmin",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsGroupInfoParticipantNonAdminMixin").parseGroupInfoParticipantNonAdminMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupInfoParticipantNonAdmin",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "GroupInfoParticipantAdmin",
            "GroupInfoParticipantNonAdmin"
        ], [
            t,
            n
        ]);
    }
    l.parseGroupInfoParticipantMixins = e;
}, 98);