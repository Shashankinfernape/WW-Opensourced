__d("WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin", [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rate_limit");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "rate-overlimit");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 429);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup").parseAddParticipantTimeOrCountRateLimitMixinGroup(n.value);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                text: r.value,
                code: a.value,
                rateLimitAddParticipantTimeOrCountRateLimitMixinGroup: i.value
            });
        }
        return i;
    }
    l.parseCreateOrAddGroupRateLimitErrorMixin = e;
}, 98);