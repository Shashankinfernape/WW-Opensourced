__d("WASmaxInGroupsRevokeRequestCodeResponseSuccess", [
    "WAResultOrError",
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
        const r = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "error", "404");
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
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "revoke");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(t);
        const s = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "participant", 1, 1000, e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, i.value, {
                groupAddressingModeMixin: l.success ? l.value : null,
                revokeParticipant: s.value
            }));
        }
        return s;
    }
    l.parseRevokeRequestCodeResponseSuccessRevokeParticipant = e;
    l.parseRevokeRequestCodeResponseSuccess = s;
}, 98);