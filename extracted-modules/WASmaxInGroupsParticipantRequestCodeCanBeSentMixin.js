__d("WASmaxInGroupsParticipantRequestCodeCanBeSentMixin", [
    "WAResultOrError",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "add_request");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "error", "403");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "code");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, n.value, "expiration", 0, undefined);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInGroupsParticipantNotAddressableMixin").parseParticipantNotAddressableMixin(e);
        return o("WAResultOrError").makeResult({
            error: r.value,
            addRequestCode: a.value,
            addRequestExpiration: i.value,
            participantNotAddressableMixin: l.success ? l.value : null
        });
    }
    l.parseParticipantRequestCodeCanBeSentMixin = e;
}, 98);