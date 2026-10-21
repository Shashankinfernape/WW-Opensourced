__d("WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "error", "451");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                error: n.value
            });
        }
        return n;
    }
    l.parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin = e;
}, 98);