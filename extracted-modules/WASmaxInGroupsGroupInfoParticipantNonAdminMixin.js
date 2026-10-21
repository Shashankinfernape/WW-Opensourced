__d("WASmaxInGroupsGroupInfoParticipantNonAdminMixin", [
    "WASmaxInGroupsParticipantMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);
        n.success;
        return n;
    }
    l.parseGroupInfoParticipantNonAdminMixin = e;
}, 98);