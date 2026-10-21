__d("WASmaxWaffleStateExistsRPC", [
    "WAComms",
    "WASmaxInWaffleStateExistsResponseError",
    "WASmaxInWaffleStateExistsResponseSuccess",
    "WASmaxOutWaffleStateExistsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutWaffleStateExistsRequest").makeStateExistsRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInWaffleStateExistsResponseSuccess").parseStateExistsResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "StateExistsResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInWaffleStateExistsResponseError").parseStateExistsResponseError(r, n);
            if (i.success) {
                return {
                    name: "StateExistsResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("StateExists", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendStateExistsRPC = e;
}, 98);