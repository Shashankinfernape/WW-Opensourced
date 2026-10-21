__d("WASmaxInGroupsGetMembershipApprovalRequestsResponseSuccess", [
    "WAResultOrError",
    "WASmaxInGroupsGetMembershipApprovalRequestsMembershipApprovalRequestMixin",
    "WASmaxInGroupsGetMembershipApprovalRequestsRequestorFetchMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "membership_approval_request");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsGetMembershipApprovalRequestsMembershipApprovalRequestMixin").parseGetMembershipApprovalRequestsMembershipApprovalRequestMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
            identityMixin: r.success ? r.value : null
        }));
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "membership_approval_requests");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsGetMembershipApprovalRequestsRequestorFetchMixin").parseGetMembershipApprovalRequestsRequestorFetchMixin(a.value);
        const l = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(t);
        const u = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "membership_approval_request", 0, 19999, e);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                membershipApprovalRequestsGetMembershipApprovalRequestsRequestorFetchMixin: i.success ? i.value : null
            }, l.value, {
                groupAddressingModeMixin: s.success ? s.value : null,
                membershipApprovalRequestsMembershipApprovalRequest: u.value
            }));
        }
        return u;
    }
    l.parseGetMembershipApprovalRequestsResponseSuccessMembershipApprovalRequestsMembershipApprovalRequest = e;
    l.parseGetMembershipApprovalRequestsResponseSuccess = s;
}, 98);