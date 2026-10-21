__d("WASmaxInGroupsGetMembershipApprovalRequestsRequestorFetchMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "requestor_fetch", "true");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                requestorFetch: t.value
            });
        }
        return t;
    }
    l.parseGetMembershipApprovalRequestsRequestorFetchMixin = e;
}, 98);