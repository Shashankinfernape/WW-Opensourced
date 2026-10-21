__d("WASmaxOutBlocklistsGuestNameMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyGuestName }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            guest_name: o("WAWap").CUSTOM_STRING(anyGuestName)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGuestNameMixin = s;
}, 98);