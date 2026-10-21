__d("WASmaxGroupsAcknowledgeGroupRPC", [
    "WAComms",
    "WASmaxInGroupsAcknowledgeGroupResponseClientError",
    "WASmaxInGroupsAcknowledgeGroupResponseServerError",
    "WASmaxInGroupsAcknowledgeGroupResponseSuccess",
    "WASmaxOutGroupsAcknowledgeGroupRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsAcknowledgeGroupRequest").makeAcknowledgeGroupRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsAcknowledgeGroupResponseSuccess").parseAcknowledgeGroupResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "AcknowledgeGroupResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsAcknowledgeGroupResponseClientError").parseAcknowledgeGroupResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "AcknowledgeGroupResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsAcknowledgeGroupResponseServerError").parseAcknowledgeGroupResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "AcknowledgeGroupResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("AcknowledgeGroup", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendAcknowledgeGroupRPC = e;
}, 98);