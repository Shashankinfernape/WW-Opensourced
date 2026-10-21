__d("WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsMembershipApprovalModes"
], function(t, n, r, o, a, i, l) {
    function e({ membershipApprovalModesArgs }) {
        const n = o("WASmaxJsx").smax("membership_approval_mode", null, o("WASmaxOutGroupsMembershipApprovalModes").mergeMembershipApprovalModes(o("WASmaxJsx").smax("group_join", null), membershipApprovalModesArgs));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMembershipApprovalGroupJoinModeMixin = s;
}, 98);