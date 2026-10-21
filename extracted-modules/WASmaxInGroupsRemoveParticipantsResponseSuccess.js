__d("WASmaxInGroupsRemoveParticipantsResponseSuccess", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrJidEnum(e, "jid", o("WASmaxInGroupsEnums").USERJID_USERJID);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        const a = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
        const i = o("WASmaxInGroupsParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup").parseParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            phoneNumberMixin: r.success ? r.value : null,
            usernameAttMixin: a.success ? a.value : null,
            participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup: i.success ? i.value : null
        });
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "remove");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(n, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "type", "result");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseReference").attrStringFromReference(n, [
            "id"
        ]);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "id", u.value);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, a.value, "linked_groups", "true");
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(t);
        const p = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "participant", 1, 1024, e);
        if (p.success) {
            return o("WAResultOrError").makeResult({
                type: s.value,
                removeLinkedGroups: d.value,
                groupAddressingModeMixin: m.success ? m.value : null,
                removeParticipant: p.value
            });
        }
        return p;
    }
    l.parseRemoveParticipantsResponseSuccessRemoveParticipant = e;
    l.parseRemoveParticipantsResponseSuccess = s;
}, 98);