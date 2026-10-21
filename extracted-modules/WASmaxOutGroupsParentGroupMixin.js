__d("WASmaxOutGroupsParentGroupMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyParentGroupJid }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            parent_group_jid: o("WAWap").GROUP_JID(anyParentGroupJid)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeParentGroupMixin = s;
}, 98);