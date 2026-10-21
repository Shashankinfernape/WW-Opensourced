__d("WASmaxInGroupsRemoveParticipantsLinkedGroupsServerErrorMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "error", "500");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                error: n.value
            });
        }
        return n;
    }
    l.parseRemoveParticipantsLinkedGroupsServerErrorMixin = e;
}, 98);