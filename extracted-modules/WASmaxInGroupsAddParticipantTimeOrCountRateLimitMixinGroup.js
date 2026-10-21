__d("WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantCountRateLimitMixin",
    "WASmaxInGroupsAddParticipantTimeRateLimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsAddParticipantTimeRateLimitMixin").parseAddParticipantTimeRateLimitMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "AddParticipantTimeRateLimit",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsAddParticipantCountRateLimitMixin").parseAddParticipantCountRateLimitMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "AddParticipantCountRateLimit",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "AddParticipantTimeRateLimit",
            "AddParticipantCountRateLimit"
        ], [
            t,
            n
        ]);
    }
    l.parseAddParticipantTimeOrCountRateLimitMixinGroup = e;
}, 98);