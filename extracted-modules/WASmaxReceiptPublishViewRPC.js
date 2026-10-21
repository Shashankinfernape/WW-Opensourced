__d("WASmaxReceiptPublishViewRPC", [
    "WAComms",
    "WASmaxInReceiptPublishViewResponseSuccess",
    "WASmaxOutReceiptPublishViewRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutReceiptPublishViewRequest").makePublishViewRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInReceiptPublishViewResponseSuccess").parsePublishViewResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "PublishViewResponseSuccess",
                    value: a.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PublishView", {
                Success: a
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendPublishViewRPC = e;
}, 98);