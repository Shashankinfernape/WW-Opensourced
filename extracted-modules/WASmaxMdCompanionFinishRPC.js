__d("WASmaxMdCompanionFinishRPC", [
    "WAComms",
    "WASmaxInMdCompanionFinishResponseError",
    "WASmaxInMdCompanionFinishResponseSuccess",
    "WASmaxOutMdCompanionFinishRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutMdCompanionFinishRequest").makeCompanionFinishRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInMdCompanionFinishResponseSuccess").parseCompanionFinishResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "CompanionFinishResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInMdCompanionFinishResponseError").parseCompanionFinishResponseError(r, n);
            if (i.success) {
                return {
                    name: "CompanionFinishResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionFinish", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendCompanionFinishRPC = e;
}, 98);