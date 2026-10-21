__d("WASmaxOutNewslettersBeforeMixinMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messagesBefore }) {
        const n = o("WASmaxJsx").smax("messages", {
            before: o("WAWap").INT(messagesBefore)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBeforeMixinMixin = s;
}, 98);