__d("WASmaxInGroupsPromoteDemoteResponseSuccessPromote", [
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
        const r = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "type", "admin");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "error", o("WASmaxInGroupsEnums").ENUM_404_419);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        const l = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            type: r.value,
            error: a.value,
            phoneNumberMixin: i.success ? i.value : null,
            usernameAttMixin: l.success ? l.value : null
        });
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "promote");
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
                promoteParticipant: s.value
            }));
        }
        return s;
    }
    l.parsePromoteDemoteResponseSuccessPromotePromoteParticipant = e;
    l.parsePromoteDemoteResponseSuccessPromote = s;
}, 98);