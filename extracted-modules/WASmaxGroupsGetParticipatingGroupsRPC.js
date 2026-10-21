__d("WASmaxGroupsGetParticipatingGroupsRPC", [
    "WAComms",
    "WASmaxInGroupsGetParticipatingGroupsResponseClientError",
    "WASmaxInGroupsGetParticipatingGroupsResponseServerError",
    "WASmaxInGroupsGetParticipatingGroupsResponseSuccess",
    "WASmaxOutGroupsGetParticipatingGroupsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsGetParticipatingGroupsRequest").makeGetParticipatingGroupsRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsGetParticipatingGroupsResponseSuccess").parseGetParticipatingGroupsResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetParticipatingGroupsResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsGetParticipatingGroupsResponseClientError").parseGetParticipatingGroupsResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "GetParticipatingGroupsResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsGetParticipatingGroupsResponseServerError").parseGetParticipatingGroupsResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "GetParticipatingGroupsResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetParticipatingGroups", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetParticipatingGroupsRPC = e;
}, 98);