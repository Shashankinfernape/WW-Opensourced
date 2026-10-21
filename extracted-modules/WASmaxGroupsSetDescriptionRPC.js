__d("WASmaxGroupsSetDescriptionRPC", [
    "WAComms",
    "WASmaxInGroupsSetDescriptionResponseClientError",
    "WASmaxInGroupsSetDescriptionResponseServerError",
    "WASmaxInGroupsSetDescriptionResponseSuccess",
    "WASmaxOutGroupsSetDescriptionRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsSetDescriptionRequest").makeSetDescriptionRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsSetDescriptionResponseSuccess").parseSetDescriptionResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "SetDescriptionResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsSetDescriptionResponseClientError").parseSetDescriptionResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "SetDescriptionResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsSetDescriptionResponseServerError").parseSetDescriptionResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "SetDescriptionResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("SetDescription", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendSetDescriptionRPC = e;
}, 98);