__d("WASmaxWaffleWFPingRPC", [
    "WAComms",
    "WASmaxInWaffleWFPingResponseError",
    "WASmaxInWaffleWFPingResponseSuccess",
    "WASmaxOutWaffleWFPingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutWaffleWFPingRequest").makeWFPingRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInWaffleWFPingResponseSuccess").parseWFPingResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "WFPingResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInWaffleWFPingResponseError").parseWFPingResponseError(r, n);
            if (i.success) {
                return {
                    name: "WFPingResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("WFPing", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendWFPingRPC = e;
}, 98);