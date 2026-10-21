__d("WASmaxMdGetRefRPC", [
    "WAComms",
    "WASmaxInMdGetRefResponseSuccess",
    "WASmaxOutMdGetRefRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WASmaxOutMdGetRefRequest").makeGetRefRequest();
            const n = yield o("WAComms").sendSmaxStanza(t, e);
            const r = o("WASmaxInMdGetRefResponseSuccess").parseGetRefResponseSuccess(n, t);
            if (r.success) {
                return {
                    name: "GetRefResponseSuccess",
                    value: r.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetRef", {
                Success: r
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetRefRPC = e;
}, 98);