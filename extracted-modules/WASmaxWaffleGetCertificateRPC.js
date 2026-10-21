__d("WASmaxWaffleGetCertificateRPC", [
    "WAComms",
    "WASmaxInWaffleGetCertificateResponseError",
    "WASmaxInWaffleGetCertificateResponseSuccess",
    "WASmaxOutWaffleGetCertificateRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutWaffleGetCertificateRequest").makeGetCertificateRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInWaffleGetCertificateResponseSuccess").parseGetCertificateResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetCertificateResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInWaffleGetCertificateResponseError").parseGetCertificateResponseError(r, n);
            if (i.success) {
                return {
                    name: "GetCertificateResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetCertificate", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetCertificateRPC = e;
}, 98);