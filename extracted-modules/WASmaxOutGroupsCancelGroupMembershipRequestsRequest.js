__d("WASmaxOutGroupsCancelGroupMembershipRequestsRequest", [
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
    function s(t) {
        const t_participantArgs = t.participantArgs;
        const r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("cancel_membership_requests", null, o("WASmaxChildren").REPEATED_CHILD(e, t_participantArgs, 1, 19999))), t);
        return r;
    }
    l.makeCancelGroupMembershipRequestsRequestCancelMembershipRequestsParticipant = e;
    l.makeCancelGroupMembershipRequestsRequest = s;
}, 98);