__d("WASmaxMdCompanionHelloRPC", [
    "WAComms",
    "WASmaxInMdCompanionHelloResponseError",
    "WASmaxInMdCompanionHelloResponseNotifyCompanion",
    "WASmaxOutMdCompanionHelloRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutMdCompanionHelloRequest").makeCompanionHelloRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInMdCompanionHelloResponseNotifyCompanion").parseCompanionHelloResponseNotifyCompanion(r, n);
            if (a.success) {
                return {
                    name: "CompanionHelloResponseNotifyCompanion",
                    value: a.value
                };
            }
            const i = o("WASmaxInMdCompanionHelloResponseError").parseCompanionHelloResponseError(r, n);
            if (i.success) {
                return {
                    name: "CompanionHelloResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionHello", {
                NotifyCompanion: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendCompanionHelloRPC = e;
}, 98);