__d("WASmaxOutBlocklistsUpdateBlockListNonMigratedBlockItemMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ itemJid }) {
        const n = o("WASmaxJsx").smax("item", {
            jid: o("WAWap").USER_JID(itemJid)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListNonMigratedBlockItemMixin = s;
}, 98);