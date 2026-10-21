__d("WASmaxInGroupsParticipantMixins", [
    "WAResultOrError",
    "WASmaxInGroupsParticipantWithJidAndDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidAndIdentityMixin",
    "WASmaxInGroupsParticipantWithJidAndLidMixin",
    "WASmaxInGroupsParticipantWithJidIdentityAndDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidLidAndDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsParticipantWithJidLidAndDisplayNameMixin").parseParticipantWithJidLidAndDisplayNameMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantWithJidLidAndDisplayName",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsParticipantWithJidIdentityAndDisplayNameMixin").parseParticipantWithJidIdentityAndDisplayNameMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantWithJidIdentityAndDisplayName",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsParticipantWithJidAndLidMixin").parseParticipantWithJidAndLidMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantWithJidAndLid",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsParticipantWithJidAndIdentityMixin").parseParticipantWithJidAndIdentityMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantWithJidAndIdentity",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsParticipantWithJidAndDisplayNameMixin").parseParticipantWithJidAndDisplayNameMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantWithJidAndDisplayName",
                value: i.value
            });
        }
        const l = o("WASmaxInGroupsParticipantWithJidMixin").parseParticipantWithJidMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "ParticipantWithJid",
                value: l.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ParticipantWithJidLidAndDisplayName",
            "ParticipantWithJidIdentityAndDisplayName",
            "ParticipantWithJidAndLid",
            "ParticipantWithJidAndIdentity",
            "ParticipantWithJidAndDisplayName",
            "ParticipantWithJid"
        ], [
            t,
            n,
            r,
            a,
            i,
            l
        ]);
    }
    l.parseParticipantMixins = e;
}, 98);