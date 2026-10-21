__d("WASmaxBrPaymentGetPixBankListRPC", [
    "WAComms",
    "WASmaxInBrPaymentGetPixBankListResponseError",
    "WASmaxInBrPaymentGetPixBankListResponseSuccess",
    "WASmaxOutBrPaymentGetPixBankListRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WASmaxOutBrPaymentGetPixBankListRequest").makeGetPixBankListRequest();
            const n = yield o("WAComms").sendSmaxStanza(t, e);
            const Success = o("WASmaxInBrPaymentGetPixBankListResponseSuccess").parseGetPixBankListResponseSuccess(n, t);
            if (Success.success) {
                return {
                    name: "GetPixBankListResponseSuccess",
                    value: Success.value
                };
            }
            const Error = o("WASmaxInBrPaymentGetPixBankListResponseError").parseGetPixBankListResponseError(n, t);
            if (Error.success) {
                return {
                    name: "GetPixBankListResponseError",
                    value: Error.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetPixBankList", {
                Success,
                Error
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetPixBankListRPC = e;
}, 98);