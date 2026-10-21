__d("WASmaxOutNewslettersStatusAfterMixinMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ statusesAfter }) {
        const n = o("WASmaxJsx").smax("statuses", {
            after: o("WAWap").INT(statusesAfter)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusAfterMixinMixin = s;
}, 98);