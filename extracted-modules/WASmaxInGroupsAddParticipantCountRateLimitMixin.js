__d("WASmaxInGroupsAddParticipantCountRateLimitMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "rate_limit");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "participant_limit", 1, 19999);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                participantLimit: n.value
            });
        }
        return n;
    }
    l.parseAddParticipantCountRateLimitMixin = e;
}, 98);