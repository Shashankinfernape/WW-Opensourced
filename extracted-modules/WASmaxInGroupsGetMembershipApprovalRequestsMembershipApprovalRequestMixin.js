__d("WASmaxInGroupsGetMembershipApprovalRequestsMembershipApprovalRequestMixin", [
    "WAResultOrError",
    "WASmaxInGroupsMembershipRequestMethodAttributeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "membership_approval_request");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "requestor");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "requestor_pn");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "requestor_username");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrGroupJid, e, "parent_group_jid");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").attrIntRange(e, "request_time", 0, void 0);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxInGroupsMembershipRequestMethodAttributeMixin").parseMembershipRequestMethodAttributeMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                jid: n.value,
                requestor: r.value,
                requestorPn: a.value,
                requestorUsername: i.value,
                parentGroupJid: l.value,
                requestTime: s.value
            }, u.value));
        }
        return u;
    }
    l.parseGetMembershipApprovalRequestsMembershipApprovalRequestMixin = e;
}, 98);