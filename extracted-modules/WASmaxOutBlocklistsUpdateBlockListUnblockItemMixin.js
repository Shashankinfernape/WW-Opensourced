__d("WASmaxOutBlocklistsUpdateBlockListUnblockItemMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ itemJid }) {
        const n = o("WASmaxJsx").smax("item", {
            action: "unblock",
            jid: o("WAWap").USER_JID(itemJid)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListUnblockItemMixin = s;
}, 98);