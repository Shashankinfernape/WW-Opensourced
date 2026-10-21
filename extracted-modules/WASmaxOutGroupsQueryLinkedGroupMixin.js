__d("WASmaxOutGroupsQueryLinkedGroupMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsOptionalSubGroupMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ queryLinkedType, queryLinkedJid, optionalSubGroupMixinArgs }) {
        const a = o("WASmaxJsx").smax("smax$any", null, o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsOptionalSubGroupMixin").mergeOptionalSubGroupMixin, o("WASmaxJsx").smax("query_linked", {
            type: o("WAWap").CUSTOM_STRING(queryLinkedType),
            jid: o("WAWap").GROUP_JID(queryLinkedJid)
        }), optionalSubGroupMixinArgs));
        return a;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeQueryLinkedGroupMixin = s;
}, 98);