__d("WAWebPaymentDetailsModels", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum")({
        NOT_CONFIRMED: "not_confirmed",
        MARKED_AS_PAID: "marked_as_paid"
    });
    const l = n("$InternalEnum")({
        PAYER: "payer",
        REQUESTER: "requester"
    });
    const s = n("$InternalEnum")({
        PAYER: "payer",
        REQUESTER: "requester"
    });
    const u = {
        status: null,
        actor: null,
        statusUpdatedAtMs: 0,
        receiptMsgId: null,
        receiptAddedAtMs: 0
    };
    function c(e) {
        if (e) {
            return s.REQUESTER;
        }
        return s.PAYER;
    }
    i.PaymentDetailsStatus = e;
    i.PaymentDetailsActor = l;
    i.PaymentDetailsPov = s;
    i.EMPTY_BRAZIL_PAYMENT_STATE = u;
    i.getPaymentDetailsPov = c;
}, 66);