__d("WASmaxOutSpamMessageRecipientMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageTo }) {
        const n = o("WASmaxJsx").smax("message", {
            to: o("WAWap").JID(messageTo)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageRecipientMixin = s;
}, 98);