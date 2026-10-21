__d("WASmaxInGroupsGroupInfoParticipantMixin", [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoParticipantMixins",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsGroupInfoParticipantMixins").parseGroupInfoParticipantMixins(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                groupInfoParticipantMixins: n.value
            });
        }
        return n;
    }
    l.parseGroupInfoParticipantMixin = e;
}, 98);