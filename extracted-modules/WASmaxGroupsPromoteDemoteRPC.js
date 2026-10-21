__d("WASmaxGroupsPromoteDemoteRPC", [
    "WAComms",
    "WASmaxInGroupsPromoteDemoteResponseClientError",
    "WASmaxInGroupsPromoteDemoteResponseServerError",
    "WASmaxInGroupsPromoteDemoteResponseSuccessDemote",
    "WASmaxInGroupsPromoteDemoteResponseSuccessPromote",
    "WASmaxOutGroupsPromoteDemoteRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsPromoteDemoteRequest").makePromoteDemoteRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessPromote = o("WASmaxInGroupsPromoteDemoteResponseSuccessPromote").parsePromoteDemoteResponseSuccessPromote(r, n);
            if (SuccessPromote.success) {
                return {
                    name: "PromoteDemoteResponseSuccessPromote",
                    value: SuccessPromote.value
                };
            }
            const SuccessDemote = o("WASmaxInGroupsPromoteDemoteResponseSuccessDemote").parsePromoteDemoteResponseSuccessDemote(r, n);
            if (SuccessDemote.success) {
                return {
                    name: "PromoteDemoteResponseSuccessDemote",
                    value: SuccessDemote.value
                };
            }
            const l = o("WASmaxInGroupsPromoteDemoteResponseClientError").parsePromoteDemoteResponseClientError(r, n);
            if (l.success) {
                return {
                    name: "PromoteDemoteResponseClientError",
                    value: l.value
                };
            }
            const s = o("WASmaxInGroupsPromoteDemoteResponseServerError").parsePromoteDemoteResponseServerError(r, n);
            if (s.success) {
                return {
                    name: "PromoteDemoteResponseServerError",
                    value: s.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteDemote", {
                SuccessPromote,
                SuccessDemote,
                ClientError: l,
                ServerError: s
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendPromoteDemoteRPC = e;
}, 98);