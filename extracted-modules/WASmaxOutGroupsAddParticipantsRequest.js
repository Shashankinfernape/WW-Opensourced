__d("WASmaxOutGroupsAddParticipantsRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsPermissionTokenMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ participantJid, participantPhoneNumber, participantUsername, permissionTokenMixinArgs }) {
        const i = o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsPermissionTokenMixin").mergePermissionTokenMixin, o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(participantJid),
            phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, participantPhoneNumber),
            username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, participantUsername)
        }), permissionTokenMixinArgs);
        return i;
    }
    function s(t) {
        const t_participantArgs = t.participantArgs;
        const r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("add", null, o("WASmaxChildren").REPEATED_CHILD(e, t_participantArgs, 1, 1024))), t);
        return r;
    }
    l.makeAddParticipantsRequestAddParticipant = e;
    l.makeAddParticipantsRequest = s;
}, 98);