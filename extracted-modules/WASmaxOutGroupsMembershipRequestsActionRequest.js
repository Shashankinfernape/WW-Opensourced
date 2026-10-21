__d("WASmaxOutGroupsMembershipRequestsActionRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ participantJid, participantPhoneNumber, participantUsername }) {
        const a = o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(participantJid),
            phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, participantPhoneNumber),
            username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, participantUsername)
        });
        return a;
    }
    function s({ participantArgs }) {
        const r = o("WASmaxJsx").smax("approve", null, o("WASmaxChildren").REPEATED_CHILD(e, participantArgs, 1, 19999));
        return r;
    }
    function u({ participantJid, participantPhoneNumber, participantUsername }) {
        const a = o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(participantJid),
            phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, participantPhoneNumber),
            username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, participantUsername)
        });
        return a;
    }
    function c({ participantArgs }) {
        const n = o("WASmaxJsx").smax("reject", null, o("WASmaxChildren").REPEATED_CHILD(u, participantArgs, 1, 19999));
        return n;
    }
    function d(e) {
        const { approveArgs, rejectArgs } = e;
        const r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("membership_requests_action", null, o("WASmaxChildren").OPTIONAL_CHILD(s, approveArgs), o("WASmaxChildren").OPTIONAL_CHILD(c, rejectArgs))), e);
        return r;
    }
    l.makeMembershipRequestsActionRequestMembershipRequestsActionApproveParticipant = e;
    l.makeMembershipRequestsActionRequestMembershipRequestsActionApprove = s;
    l.makeMembershipRequestsActionRequestMembershipRequestsActionRejectParticipant = u;
    l.makeMembershipRequestsActionRequestMembershipRequestsActionReject = c;
    l.makeMembershipRequestsActionRequest = d;
}, 98);