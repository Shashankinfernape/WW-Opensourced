__d("WAWebNewsletterStatusViewReceiptUtils", [
    "WASmaxReceiptPublishViewRPC",
    "WAStanzaUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, itemServerId) {
            yield o("WASmaxReceiptPublishViewRPC").sendPublishViewRPC({
                receiptTo: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e.toString()),
                receiptId: o("WAStanzaUtils").toStanzaId(t.id),
                itemArgs: [
                    {
                        itemServerId
                    }
                ],
                hasStatusClass: true
            });
            yield o("WAWebNewsletterDBUtils").updateMsgViewReceipt([
                t.toString()
            ]);
        });
        return s.apply(this, arguments);
    }
    l.sendNewsletterStatusViewReceipt = e;
}, 98);