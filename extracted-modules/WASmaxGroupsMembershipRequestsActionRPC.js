__d("WASmaxGroupsMembershipRequestsActionRPC", [
    "WAComms",
    "WASmaxInGroupsMembershipRequestsActionResponseClientError",
    "WASmaxInGroupsMembershipRequestsActionResponseServerError",
    "WASmaxInGroupsMembershipRequestsActionResponseSuccess",
    "WASmaxOutGroupsMembershipRequestsActionRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsMembershipRequestsActionRequest").makeMembershipRequestsActionRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsMembershipRequestsActionResponseSuccess").parseMembershipRequestsActionResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "MembershipRequestsActionResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsMembershipRequestsActionResponseClientError").parseMembershipRequestsActionResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "MembershipRequestsActionResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsMembershipRequestsActionResponseServerError").parseMembershipRequestsActionResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "MembershipRequestsActionResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("MembershipRequestsAction", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendMembershipRequestsActionRPC = e;
}, 98);