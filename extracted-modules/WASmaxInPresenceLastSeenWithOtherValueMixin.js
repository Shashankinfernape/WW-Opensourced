__d("WASmaxInPresenceLastSeenWithOtherValueMixin", [
    "WAResultOrError",
    "WASmaxInPresenceEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "presence");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrLidUserJid(e, "from");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "unavailable");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "last", o("WASmaxInPresenceEnums").ENUM_DENY_ERROR_NONE);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                from: n.value,
                type: r.value,
                last: a.value
            });
        }
        return a;
    }
    l.parseLastSeenWithOtherValueMixin = e;
}, 98);