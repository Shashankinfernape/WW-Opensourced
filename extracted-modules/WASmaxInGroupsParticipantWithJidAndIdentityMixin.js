__d("WASmaxInGroupsParticipantWithJidAndIdentityMixin", [
    "WAResultOrError",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxInGroupsParticipantWithJidMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsParticipantWithJidMixin").parseParticipantWithJidMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, r.value));
        }
        return r;
    }
    l.parseParticipantWithJidAndIdentityMixin = e;
}, 98);