__d("WASmaxInGroupsParticipantWithJidIdentityAndDisplayNameMixin", [
    "WAResultOrError",
    "WASmaxInGroupsDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidAndIdentityMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsParticipantWithJidAndIdentityMixin").parseParticipantWithJidAndIdentityMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsDisplayNameMixin").parseDisplayNameMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, r.value));
        }
        return r;
    }
    l.parseParticipantWithJidIdentityAndDisplayNameMixin = e;
}, 98);