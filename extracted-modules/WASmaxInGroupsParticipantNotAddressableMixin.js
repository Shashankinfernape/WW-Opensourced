__d("WASmaxInGroupsParticipantNotAddressableMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "addressable", "false");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                addressable: n.value
            });
        }
        return n;
    }
    l.parseParticipantNotAddressableMixin = e;
}, 98);