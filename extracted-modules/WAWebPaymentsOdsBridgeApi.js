__d("WAWebPaymentsOdsBridgeApi", [
    "WAWebODS"
], function(t, n, r, o, a, i, l) {
    const e = {
        logPaymentsDehydratedOdsCounter: function({ type }) {
            e: {
                if (type === "pay") {
                    r("WAWebODS").incr("web.payments.dehydrated_pay");
                    break e;
                }
                if (type === "transaction") {
                    r("WAWebODS").incr("web.payments.dehydrated_transaction");
                    break e;
                }
                if (type === "transaction_notification") {
                    r("WAWebODS").incr("web.payments.dehydrated_transaction_notification");
                    break e;
                }
                {
                    r("WAWebODS").incr("web.payments.dehydrated_unknown");
                    break e;
                }
            }
        }
    };
    l.PaymentsOdsBridgeApi = e;
}, 98);