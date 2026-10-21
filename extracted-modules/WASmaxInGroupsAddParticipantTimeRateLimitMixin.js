__d("WASmaxInGroupsAddParticipantTimeRateLimitMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "rate_limit");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "backoff", 0, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(e, "type", o("WASmaxInGroupsEnums").ENUM_GROUP_USER);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                backoff: n.value,
                type: r.value
            });
        }
        return r;
    }
    l.parseAddParticipantTimeRateLimitMixin = e;
}, 98);