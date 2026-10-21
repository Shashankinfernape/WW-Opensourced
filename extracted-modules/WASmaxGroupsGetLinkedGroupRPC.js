__d("WASmaxGroupsGetLinkedGroupRPC", [
    "WAComms",
    "WASmaxInGroupsGetLinkedGroupResponseClientError",
    "WASmaxInGroupsGetLinkedGroupResponseServerError",
    "WASmaxInGroupsGetLinkedGroupResponseSuccess",
    "WASmaxOutGroupsGetLinkedGroupRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsGetLinkedGroupRequest").makeGetLinkedGroupRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsGetLinkedGroupResponseSuccess").parseGetLinkedGroupResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetLinkedGroupResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsGetLinkedGroupResponseClientError").parseGetLinkedGroupResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "GetLinkedGroupResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsGetLinkedGroupResponseServerError").parseGetLinkedGroupResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "GetLinkedGroupResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetLinkedGroup", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetLinkedGroupRPC = e;
}, 98);