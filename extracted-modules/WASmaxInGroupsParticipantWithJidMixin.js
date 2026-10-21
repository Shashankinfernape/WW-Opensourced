__d("WASmaxInGroupsParticipantWithJidMixin", [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value
            });
        }
        return n;
    }
    l.parseParticipantWithJidMixin = e;
}, 98);