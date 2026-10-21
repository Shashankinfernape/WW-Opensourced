__d("WASmaxInGroupsParticipantWithLidMixin", [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrLidUserJid(e, "lid");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                lid: n.value
            });
        }
        return n;
    }
    l.parseParticipantWithLidMixin = e;
}, 98);