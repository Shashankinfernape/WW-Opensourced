__d("WASmaxBizCtwaAdAccountNonceNotificationRPC", [
    "WASmaxInBizCtwaAdAccountNonceNotificationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInBizCtwaAdAccountNonceNotificationRequest").parseNonceNotificationRequest(e);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("NonceNotification", {
                Request: t
            }));
        }
        return {
            parsedRequest: t.value
        };
    }
    l.receiveNonceNotificationRPC = e;
}, 98);