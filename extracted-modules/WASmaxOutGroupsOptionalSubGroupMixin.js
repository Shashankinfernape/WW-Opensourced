__d("WASmaxOutGroupsOptionalSubGroupMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anySubGroupJid }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            sub_group_jid: o("WAWap").GROUP_JID(anySubGroupJid)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeOptionalSubGroupMixin = s;
}, 98);