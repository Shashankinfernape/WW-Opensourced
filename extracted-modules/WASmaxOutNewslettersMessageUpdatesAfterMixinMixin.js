__d("WASmaxOutNewslettersMessageUpdatesAfterMixinMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageUpdatesAfter }) {
        const n = o("WASmaxJsx").smax("message_updates", {
            after: o("WAWap").INT(messageUpdatesAfter)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageUpdatesAfterMixinMixin = s;
}, 98);