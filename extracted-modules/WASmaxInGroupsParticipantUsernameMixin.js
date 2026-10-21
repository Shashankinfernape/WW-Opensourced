__d("WASmaxInGroupsParticipantUsernameMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "participant_username");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                participantUsername: t.value
            });
        }
        return t;
    }
    l.parseParticipantUsernameMixin = e;
}, 98);