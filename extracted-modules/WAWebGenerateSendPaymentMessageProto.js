__d("WAWebGenerateSendPaymentMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebPaymentsProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const requestMessageKey = json.paymentRequestMessageKey ? {
            fromMe: json.paymentRequestMessageKey.fromMe,
            remoteJid: o("WAWebE2EProtoUtils").encodeJid(json.paymentRequestMessageKey.remote),
            id: json.paymentRequestMessageKey.id,
            participant: o("WAWebE2EProtoUtils").encodeJid(json.paymentRequestMessageKey.participant)
        } : undefined;
        return {
            sendPaymentMessage: {
                requestMessageKey,
                noteMessage: o("WAWebPaymentsProtoUtils").generatePaymentsNoteMessage(json)
            }
        };
    }
    l.default = e;
}, 98);