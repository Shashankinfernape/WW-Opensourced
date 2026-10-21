__d("WASmaxOutGroupsSubGroupHintMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyLinkedGroupsMembershipHint }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            linked_groups_membership_hint: o("WAWap").GROUP_JID(anyLinkedGroupsMembershipHint)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSubGroupHintMixin = s;
}, 98);