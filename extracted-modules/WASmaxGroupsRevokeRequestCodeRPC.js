__d("WASmaxGroupsRevokeRequestCodeRPC", [
    "WAComms",
    "WASmaxInGroupsRevokeRequestCodeResponseClientError",
    "WASmaxInGroupsRevokeRequestCodeResponseServerError",
    "WASmaxInGroupsRevokeRequestCodeResponseSuccess",
    "WASmaxOutGroupsRevokeRequestCodeRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsRevokeRequestCodeRequest").makeRevokeRequestCodeRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsRevokeRequestCodeResponseSuccess").parseRevokeRequestCodeResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "RevokeRequestCodeResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsRevokeRequestCodeResponseClientError").parseRevokeRequestCodeResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "RevokeRequestCodeResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsRevokeRequestCodeResponseServerError").parseRevokeRequestCodeResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "RevokeRequestCodeResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("RevokeRequestCode", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendRevokeRequestCodeRPC = e;
}, 98);