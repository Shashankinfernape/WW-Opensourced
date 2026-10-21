__d("WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsBlocklistIdentifierMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_itemJid = e.itemJid;
        const n = o("WASmaxOutBlocklistsBlocklistIdentifierMixin").mergeBlocklistIdentifierMixin(o("WASmaxJsx").smax("item", {
            jid: o("WAWap").JID(e_itemJid)
        }), e);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListMigratedBlockItemMixin = s;
}, 98);