__d("WASmaxInGroupsCancelGroupMembershipRequestsResponseSuccess", [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsMembershipRequestsCancellationParticipantMixins",
    "WASmaxInGroupsPhoneNumberMixin",
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
        const r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        const a = o("WASmaxInGroupsMembershipRequestsCancellationParticipantMixins").parseMembershipRequestsCancellationParticipantMixins(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            phoneNumberMixin: r.success ? r.value : null,
            membershipRequestsCancellationParticipantMixins: a.success ? a.value : null
        });
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "cancel_membership_requests");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(t);
        const s = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "participant", 1, 19999, e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, i.value, {
                groupAddressingModeMixin: l.success ? l.value : null,
                cancelMembershipRequestsParticipant: s.value
            }));
        }
        return s;
    }
    l.parseCancelGroupMembershipRequestsResponseSuccessCancelMembershipRequestsParticipant = e;
    l.parseCancelGroupMembershipRequestsResponseSuccess = s;
}, 98);