__d("WASmaxOutSpamMessageParticipantMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageParticipant, messageParticipantType, messageMemberTag, messageMemberTagTsS }) {
        let t;
        const l = o("WASmaxJsx").smax("message", {
            participant: (t = o("WAWap")).USER_JID(messageParticipant),
            participant_type: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, messageParticipantType),
            member_tag: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, messageMemberTag),
            member_tag_ts_s: o("WASmaxAttrs").OPTIONAL(t.INT, messageMemberTagTsS)
        });
        return l;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageParticipantMixin = s;
}, 98);