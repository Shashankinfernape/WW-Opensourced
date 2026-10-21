__d("WASmaxOutGroupsGetMembershipApprovalRequestsRequestorFetchMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("smax$any", {
            requestor_fetch: "true"
        });
        return e;
    }
    function s(t) {
        const n = e();
        return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeGetMembershipApprovalRequestsRequestorFetchMixin = s;
}, 98);