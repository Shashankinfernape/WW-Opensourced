__d("WASmaxOutNewslettersAfterMixinMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messagesAfter }) {
        const n = o("WASmaxJsx").smax("messages", {
            after: o("WAWap").INT(messagesAfter)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAfterMixinMixin = s;
}, 98);