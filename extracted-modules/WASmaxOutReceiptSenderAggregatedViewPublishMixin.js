__d("WASmaxOutReceiptSenderAggregatedViewPublishMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ itemServerId }) {
        const n = o("WASmaxJsx").smax("item", {
            server_id: o("WAWap").INT(itemServerId)
        });
        return n;
    }
    function s({ itemArgs, receiptId }) {
        const a = o("WASmaxJsx").smax("receipt", {
            id: o("WAWap").STANZA_ID(receiptId)
        }, o("WASmaxJsx").smax("list", null, o("WASmaxChildren").REPEATED_CHILD(e, itemArgs, 0, 255)));
        return a;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeSenderAggregatedViewPublishListItem = e;
    l.mergeSenderAggregatedViewPublishMixin = u;
}, 98);