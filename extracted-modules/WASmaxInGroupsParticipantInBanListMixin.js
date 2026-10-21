__d("WASmaxInGroupsParticipantInBanListMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "error", "402");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                error: n.value
            });
        }
        return n;
    }
    l.parseParticipantInBanListMixin = e;
}, 98);