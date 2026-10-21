__d("WASmaxNewslettersMyAddOnsRPC", [
    "WAComms",
    "WASmaxInNewslettersMyAddOnsResponseClientError",
    "WASmaxInNewslettersMyAddOnsResponseServerError",
    "WASmaxInNewslettersMyAddOnsResponseSuccess",
    "WASmaxOutNewslettersMyAddOnsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutNewslettersMyAddOnsRequest").makeMyAddOnsRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInNewslettersMyAddOnsResponseSuccess").parseMyAddOnsResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "MyAddOnsResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInNewslettersMyAddOnsResponseClientError").parseMyAddOnsResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "MyAddOnsResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInNewslettersMyAddOnsResponseServerError").parseMyAddOnsResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "MyAddOnsResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("MyAddOns", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendMyAddOnsRPC = e;
}, 98);