__d("WASmaxOutNewslettersMessageUpdatesBeforeMixinMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageUpdatesBefore }) {
        const n = o("WASmaxJsx").smax("message_updates", {
            before: o("WAWap").INT(messageUpdatesBefore)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageUpdatesBeforeMixinMixin = s;
}, 98);