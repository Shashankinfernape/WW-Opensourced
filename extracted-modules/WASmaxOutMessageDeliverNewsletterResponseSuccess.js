__d("WASmaxOutMessageDeliverNewsletterResponseSuccess", [
    "WASmaxJsx",
    "WASmaxOutMessageDeliverCommonAckMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxOutMessageDeliverCommonAckMixin").mergeCommonAckMixin(o("WASmaxJsx").smax("ack", null), e);
        return t;
    }
    l.makeNewsletterResponseSuccess = e;
}, 98);