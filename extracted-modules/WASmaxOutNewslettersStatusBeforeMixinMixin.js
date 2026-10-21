__d("WASmaxOutNewslettersStatusBeforeMixinMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ statusesBefore }) {
        const n = o("WASmaxJsx").smax("statuses", {
            before: o("WAWap").INT(statusesBefore)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusBeforeMixinMixin = s;
}, 98);