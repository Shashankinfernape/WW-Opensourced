__d("WASmaxMdGetCountryCodeRPC", [
    "WAComms",
    "WASmaxInMdGetCountryCodeResponseError",
    "WASmaxInMdGetCountryCodeResponseGetCountryCodeResponse",
    "WASmaxOutMdGetCountryCodeRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WASmaxOutMdGetCountryCodeRequest").makeGetCountryCodeRequest();
            const n = yield o("WAComms").sendSmaxStanza(t, e);
            const r = o("WASmaxInMdGetCountryCodeResponseGetCountryCodeResponse").parseGetCountryCodeResponseGetCountryCodeResponse(n, t);
            if (r.success) {
                return {
                    name: "GetCountryCodeResponseGetCountryCodeResponse",
                    value: r.value
                };
            }
            const a = o("WASmaxInMdGetCountryCodeResponseError").parseGetCountryCodeResponseError(n, t);
            if (a.success) {
                return {
                    name: "GetCountryCodeResponseError",
                    value: a.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetCountryCode", {
                GetCountryCodeResponse: r,
                Error: a
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetCountryCodeRPC = e;
}, 98);