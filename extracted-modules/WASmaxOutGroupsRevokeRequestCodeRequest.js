__d("WASmaxOutGroupsRevokeRequestCodeRequest", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ participantJid: t }) {
        const n = o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").USER_JID(t)
        });
        return n;
    }
    function s(t) {
        const n = t.participantArgs;
        const r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("revoke", null, o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1000))), t);
        return r;
    }
    l.makeRevokeRequestCodeRequestRevokeParticipant = e;
    l.makeRevokeRequestCodeRequest = s;
}, 98);