__d("WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersMessageDirections",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messagesCount, messageDirectionsArgs }) {
        const r = o("WASmaxMixins").optionalMerge(o("WASmaxOutNewslettersMessageDirections").mergeMessageDirections, o("WASmaxJsx").smax("messages", {
            count: o("WAWap").INT(messagesCount)
        }), messageDirectionsArgs);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMessageRequestPayloadMixin = s;
}, 98);