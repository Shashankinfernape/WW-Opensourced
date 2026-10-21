__d("WASmaxInGroupsPromoteDemoteResponseSuccessDemote", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
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
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "error", o("WASmaxInGroupsEnums").ENUM_404_406);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        const i = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            error: r.value,
            phoneNumberMixin: a.success ? a.value : null,
            usernameAttMixin: i.success ? i.value : null
        });
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "demote");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(t);
        const s = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "participant", 0, 1024, e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, i.value, {
                groupAddressingModeMixin: l.success ? l.value : null,
                demoteParticipant: s.value
            }));
        }
        return s;
    }
    l.parsePromoteDemoteResponseSuccessDemoteDemoteParticipant = e;
    l.parsePromoteDemoteResponseSuccessDemote = s;
}, 98);