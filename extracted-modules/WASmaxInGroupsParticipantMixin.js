__d("WASmaxInGroupsParticipantMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsParticipantMixins",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "participant_label");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "participant_label_mtime", 0, void 0);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "join_time", 0, void 0);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "group_history_sent", o("WASmaxInGroupsEnums").ENUM_FALSE_TRUE);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInGroupsParticipantMixins").parseParticipantMixins(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                participantLabel: n.value,
                participantLabelMtime: r.value,
                joinTime: a.value,
                groupHistorySent: i.value,
                participantMixins: l.value
            });
        }
        return l;
    }
    l.parseParticipantMixin = e;
}, 98);