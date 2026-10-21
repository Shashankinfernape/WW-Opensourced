__d("WAWebGenerateRequestPaymentMessageProto", [
    "WAWebPaymentsProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const noteMessage = o("WAWebPaymentsProtoUtils").generatePaymentsNoteMessage(json);
        return {
            requestPaymentMessage: {
                amount1000: json.amount1000,
                expiryTimestamp: json._paymentExpiryTimestamp,
                requestFrom: json._paymentRequestFrom,
                currencyCodeIso4217: json._currencyCodeIso4217,
                noteMessage
            }
        };
    }
    l.default = e;
}, 98);