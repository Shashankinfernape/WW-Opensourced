__d("WASmaxGroupsSetPropertyRPC", [
    "WAComms",
    "WASmaxInGroupsSetPropertyResponseClientError",
    "WASmaxInGroupsSetPropertyResponseServerError",
    "WASmaxInGroupsSetPropertyResponseSuccess",
    "WASmaxOutGroupsSetPropertyRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsSetPropertyRequest").makeSetPropertyRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsSetPropertyResponseSuccess").parseSetPropertyResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "SetPropertyResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsSetPropertyResponseClientError").parseSetPropertyResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "SetPropertyResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsSetPropertyResponseServerError").parseSetPropertyResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "SetPropertyResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("SetProperty", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendSetPropertyRPC = e;
}, 98);