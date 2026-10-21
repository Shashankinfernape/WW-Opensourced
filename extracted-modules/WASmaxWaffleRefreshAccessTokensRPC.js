__d("WASmaxWaffleRefreshAccessTokensRPC", [
    "WAComms",
    "WASmaxInWaffleRefreshAccessTokensResponseError",
    "WASmaxInWaffleRefreshAccessTokensResponseSuccess",
    "WASmaxOutWaffleRefreshAccessTokensRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutWaffleRefreshAccessTokensRequest").makeRefreshAccessTokensRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInWaffleRefreshAccessTokensResponseSuccess").parseRefreshAccessTokensResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "RefreshAccessTokensResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInWaffleRefreshAccessTokensResponseError").parseRefreshAccessTokensResponseError(r, n);
            if (i.success) {
                return {
                    name: "RefreshAccessTokensResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("RefreshAccessTokens", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendRefreshAccessTokensRPC = e;
}, 98);