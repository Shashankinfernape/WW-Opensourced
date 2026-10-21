__d("WASmaxGroupsPromoteDemoteAdminRPC", [
    "WAComms",
    "WASmaxInGroupsPromoteDemoteAdminResponseClientError",
    "WASmaxInGroupsPromoteDemoteAdminResponseServerError",
    "WASmaxInGroupsPromoteDemoteAdminResponseSuccessMultiAdmin",
    "WASmaxOutGroupsPromoteDemoteAdminRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsPromoteDemoteAdminRequest").makePromoteDemoteAdminRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessMultiAdmin = o("WASmaxInGroupsPromoteDemoteAdminResponseSuccessMultiAdmin").parsePromoteDemoteAdminResponseSuccessMultiAdmin(r, n);
            if (SuccessMultiAdmin.success) {
                return {
                    name: "PromoteDemoteAdminResponseSuccessMultiAdmin",
                    value: SuccessMultiAdmin.value
                };
            }
            const i = o("WASmaxInGroupsPromoteDemoteAdminResponseClientError").parsePromoteDemoteAdminResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "PromoteDemoteAdminResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsPromoteDemoteAdminResponseServerError").parsePromoteDemoteAdminResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "PromoteDemoteAdminResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteDemoteAdmin", {
                SuccessMultiAdmin,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendPromoteDemoteAdminRPC = e;
}, 98);