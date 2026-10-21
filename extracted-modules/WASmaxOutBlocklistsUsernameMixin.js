__d("WASmaxOutBlocklistsUsernameMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyUsername }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            username: o("WAWap").CUSTOM_STRING(anyUsername)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUsernameMixin = s;
}, 98);