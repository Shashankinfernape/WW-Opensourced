__d("WASmaxOutBlocklistsDisplayNameMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyDisplayName }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            display_name: o("WAWap").CUSTOM_STRING(anyDisplayName)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeDisplayNameMixin = s;
}, 98);