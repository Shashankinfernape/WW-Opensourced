__d("WASmaxPreKeysSetRPC", [
    "WAComms",
    "WASmaxInPreKeysSetResponsePreKeySuccessVnameFailure",
    "WASmaxInPreKeysSetResponseRequestError",
    "WASmaxInPreKeysSetResponseServerError",
    "WASmaxInPreKeysSetResponseSuccess",
    "WASmaxOutPreKeysSetRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutPreKeysSetRequest").makeSetRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInPreKeysSetResponseSuccess").parseSetResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "SetResponseSuccess",
                    value: a.value
                };
            }
            const PreKeySuccessVnameFailure = o("WASmaxInPreKeysSetResponsePreKeySuccessVnameFailure").parseSetResponsePreKeySuccessVnameFailure(r, n);
            if (PreKeySuccessVnameFailure.success) {
                return {
                    name: "SetResponsePreKeySuccessVnameFailure",
                    value: PreKeySuccessVnameFailure.value
                };
            }
            const l = o("WASmaxInPreKeysSetResponseRequestError").parseSetResponseRequestError(r, n);
            if (l.success) {
                return {
                    name: "SetResponseRequestError",
                    value: l.value
                };
            }
            const s = o("WASmaxInPreKeysSetResponseServerError").parseSetResponseServerError(r, n);
            if (s.success) {
                return {
                    name: "SetResponseServerError",
                    value: s.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
                Success: a,
                PreKeySuccessVnameFailure,
                RequestError: l,
                ServerError: s
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendSetRPC = e;
}, 98);