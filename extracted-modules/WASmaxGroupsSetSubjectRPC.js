__d("WASmaxGroupsSetSubjectRPC", [
    "WAComms",
    "WASmaxInGroupsSetSubjectResponseClientError",
    "WASmaxInGroupsSetSubjectResponseServerError",
    "WASmaxInGroupsSetSubjectResponseSuccess",
    "WASmaxOutGroupsSetSubjectRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsSetSubjectRequest").makeSetSubjectRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsSetSubjectResponseSuccess").parseSetSubjectResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "SetSubjectResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsSetSubjectResponseClientError").parseSetSubjectResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "SetSubjectResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsSetSubjectResponseServerError").parseSetSubjectResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "SetSubjectResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("SetSubject", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendSetSubjectRPC = e;
}, 98);