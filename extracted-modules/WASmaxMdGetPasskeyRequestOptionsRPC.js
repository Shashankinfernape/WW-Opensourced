__d("WASmaxMdGetPasskeyRequestOptionsRPC", [
    "WAComms",
    "WASmaxInMdGetPasskeyRequestOptionsResponseError",
    "WASmaxInMdGetPasskeyRequestOptionsResponseSuccess",
    "WASmaxOutMdGetPasskeyRequestOptionsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WASmaxOutMdGetPasskeyRequestOptionsRequest").makeGetPasskeyRequestOptionsRequest();
            const n = yield o("WAComms").sendSmaxStanza(t, e);
            const r = o("WASmaxInMdGetPasskeyRequestOptionsResponseSuccess").parseGetPasskeyRequestOptionsResponseSuccess(n, t);
            if (r.success) {
                return {
                    name: "GetPasskeyRequestOptionsResponseSuccess",
                    value: r.value
                };
            }
            const a = o("WASmaxInMdGetPasskeyRequestOptionsResponseError").parseGetPasskeyRequestOptionsResponseError(n, t);
            if (a.success) {
                return {
                    name: "GetPasskeyRequestOptionsResponseError",
                    value: a.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetPasskeyRequestOptions", {
                Success: r,
                Error: a
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetPasskeyRequestOptionsRPC = e;
}, 98);