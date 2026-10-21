__d("WASmaxOutGroupsRemoveParticipantsRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ participantJid }) {
        const n = o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(participantJid)
        });
        return n;
    }
    function s(t) {
        const { participantArgs, hasRemoveLinkedGroupsTrue } = t;
        const a = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("remove", {
            linked_groups: o("WASmaxAttrs").OPTIONAL_LITERAL("true", hasRemoveLinkedGroupsTrue)
        }, o("WASmaxChildren").REPEATED_CHILD(e, participantArgs, 1, 1024))), t);
        return a;
    }
    l.makeRemoveParticipantsRequestRemoveParticipant = e;
    l.makeRemoveParticipantsRequest = s;
}, 98);