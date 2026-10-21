__d("WASmaxPreKeysDeleteRPC", [
    "WAComms",
    "WASmaxInPreKeysDeleteResponseRequestError",
    "WASmaxInPreKeysDeleteResponseServerError",
    "WASmaxInPreKeysDeleteResponseSuccess",
    "WASmaxOutPreKeysDeleteRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutPreKeysDeleteRequest").makeDeleteRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInPreKeysDeleteResponseSuccess").parseDeleteResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "DeleteResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInPreKeysDeleteResponseRequestError").parseDeleteResponseRequestError(r, n);
            if (i.success) {
                return {
                    name: "DeleteResponseRequestError",
                    value: i.value
                };
            }
            const l = o("WASmaxInPreKeysDeleteResponseServerError").parseDeleteResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "DeleteResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Delete", {
                Success: a,
                RequestError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendDeleteRPC = e;
}, 98);