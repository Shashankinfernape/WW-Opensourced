__d("WASmaxInGroupsParticipantPNMixin", [
    "WAResultOrError",
    "WASmaxParseJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseJid").attrUserJid(e, "participant_pn");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                participantPn: t.value
            });
        }
        return t;
    }
    l.parseParticipantPNMixin = e;
}, 98);