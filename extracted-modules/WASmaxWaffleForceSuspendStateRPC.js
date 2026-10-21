__d("WASmaxWaffleForceSuspendStateRPC", [
    "WAComms",
    "WASmaxInWaffleForceSuspendStateResponseError",
    "WASmaxInWaffleForceSuspendStateResponseSuccess",
    "WASmaxOutWaffleForceSuspendStateRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutWaffleForceSuspendStateRequest").makeForceSuspendStateRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInWaffleForceSuspendStateResponseSuccess").parseForceSuspendStateResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "ForceSuspendStateResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInWaffleForceSuspendStateResponseError").parseForceSuspendStateResponseError(r, n);
            if (i.success) {
                return {
                    name: "ForceSuspendStateResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ForceSuspendState", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendForceSuspendStateRPC = e;
}, 98);