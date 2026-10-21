__d("WAWebGroupsMembershipApprovalRequestsApi", [
    "WAWebDBGroupMembeshipApprovalRequest"
], function(t, n, r, o, a, i, l) {
    function e({ group: t, isOffline: n, requests: r }) {
        return o("WAWebDBGroupMembeshipApprovalRequest").removeMembershipApprovalRequests(t, r, n);
    }
    l.removeMembershipApprovalRequests = e;
}, 98);