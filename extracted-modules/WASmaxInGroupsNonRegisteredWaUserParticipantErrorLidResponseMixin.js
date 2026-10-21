__d("WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin", [
    "WAResultOrError",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup").parseParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
                participantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup: r.value
            }));
        }
        return r;
    }
    l.parseNonRegisteredWaUserParticipantErrorLidResponseMixin = e;
}, 98);