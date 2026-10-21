__d("WASmaxPreKeysFetchMissingPreKeysRPC", [
    "WAComms",
    "WASmaxInPreKeysFetchMissingPreKeysResponseRequestError",
    "WASmaxInPreKeysFetchMissingPreKeysResponseServerError",
    "WASmaxInPreKeysFetchMissingPreKeysResponseSuccess",
    "WASmaxOutPreKeysFetchMissingPreKeysRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutPreKeysFetchMissingPreKeysRequest").makeFetchMissingPreKeysRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInPreKeysFetchMissingPreKeysResponseSuccess").parseFetchMissingPreKeysResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "FetchMissingPreKeysResponseSuccess",
                    value: a.value
                };
            }
            const RequestError = o("WASmaxInPreKeysFetchMissingPreKeysResponseRequestError").parseFetchMissingPreKeysResponseRequestError(r, n);
            if (RequestError.success) {
                return {
                    name: "FetchMissingPreKeysResponseRequestError",
                    value: RequestError.value
                };
            }
            const l = o("WASmaxInPreKeysFetchMissingPreKeysResponseServerError").parseFetchMissingPreKeysResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "FetchMissingPreKeysResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("FetchMissingPreKeys", {
                Success: a,
                RequestError,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendFetchMissingPreKeysRPC = e;
}, 98);