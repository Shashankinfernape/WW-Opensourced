__d("WASmaxOutBlocklistsUpdateBlockListBlockItemMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup"
], function(t, n, r, o, a, i, l) {
    function e({ updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs }) {
        const n = o("WASmaxOutBlocklistsUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup").mergeUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup(o("WASmaxJsx").smax("item", {
            action: "block"
        }), updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListBlockItemMixin = s;
}, 98);