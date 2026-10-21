__d("WAWebGroupMembershipApprovalRequestCollection", [
    "WAWebCollection",
    "WAWebGroupMembershipApprovalRequestModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebCollection"));
    e.model = r("WAWebGroupMembershipApprovalRequestModel");
    e.comparator = function(e, t) {
        return t.t - e.t;
    };
    l.default = e;
}, 98);