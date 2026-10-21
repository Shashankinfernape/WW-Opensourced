__d("WASmaxOutGroupsPromoteDemoteRequest", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ participantJid }) {
        const n = o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").USER_JID(participantJid)
        });
        return n;
    }
    function s({ participantArgs }) {
        const r = o("WASmaxJsx").smax("promote", null, o("WASmaxChildren").REPEATED_CHILD(e, participantArgs, 0, 1024));
        return r;
    }
    function u({ participantJid }) {
        const n = o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").USER_JID(participantJid)
        });
        return n;
    }
    function c({ participantArgs }) {
        const n = o("WASmaxJsx").smax("demote", null, o("WASmaxChildren").REPEATED_CHILD(u, participantArgs, 0, 1024));
        return n;
    }
    function d(e) {
        const { promoteArgs, demoteArgs } = e;
        const r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxChildren").OPTIONAL_CHILD(s, promoteArgs), o("WASmaxChildren").OPTIONAL_CHILD(c, demoteArgs)), e);
        return r;
    }
    l.makePromoteDemoteRequestPromoteParticipant = e;
    l.makePromoteDemoteRequestPromote = s;
    l.makePromoteDemoteRequestDemoteParticipant = u;
    l.makePromoteDemoteRequestDemote = c;
    l.makePromoteDemoteRequest = d;
}, 98);