__d("WASmaxWaffleForceDeleteStateRPC", [
    "WAComms",
    "WASmaxInWaffleForceDeleteStateResponseError",
    "WASmaxInWaffleForceDeleteStateResponseSuccess",
    "WASmaxOutWaffleForceDeleteStateRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutWaffleForceDeleteStateRequest").makeForceDeleteStateRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInWaffleForceDeleteStateResponseSuccess").parseForceDeleteStateResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "ForceDeleteStateResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInWaffleForceDeleteStateResponseError").parseForceDeleteStateResponseError(r, n);
            if (i.success) {
                return {
                    name: "ForceDeleteStateResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ForceDeleteState", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendForceDeleteStateRPC = e;
}, 98);