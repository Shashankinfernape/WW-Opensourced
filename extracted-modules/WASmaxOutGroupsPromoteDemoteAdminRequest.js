__d("WASmaxOutGroupsPromoteDemoteAdminRequest", [
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
        const r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("admin", null, o("WASmaxChildren").OPTIONAL_CHILD(s, promoteArgs), o("WASmaxChildren").OPTIONAL_CHILD(c, demoteArgs))), e);
        return r;
    }
    l.makePromoteDemoteAdminRequestAdminPromoteParticipant = e;
    l.makePromoteDemoteAdminRequestAdminPromote = s;
    l.makePromoteDemoteAdminRequestAdminDemoteParticipant = u;
    l.makePromoteDemoteAdminRequestAdminDemote = c;
    l.makePromoteDemoteAdminRequest = d;
}, 98);