__d("WASmaxInGroupsAddParticipantsParticipantAddedResponseMixin", [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantsParticipantMixins",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "join_time", 0, undefined);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        const i = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
        const l = o("WASmaxInGroupsAddParticipantsParticipantMixins").parseAddParticipantsParticipantMixins(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            joinTime: r.value,
            phoneNumberMixin: a.success ? a.value : null,
            usernameAttMixin: i.success ? i.value : null,
            addParticipantsParticipantMixins: l.success ? l.value : null
        });
    }
    l.parseAddParticipantsParticipantAddedResponseMixin = e;
}, 98);