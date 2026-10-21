__d("WASmaxBlocklistsUpdateBlockListRPC", [
    "WAComms",
    "WASmaxInBlocklistsUpdateBlockListResponseCAPISuccessWithMismatch",
    "WASmaxInBlocklistsUpdateBlockListResponseInvalidRequest",
    "WASmaxInBlocklistsUpdateBlockListResponseMigratedSuccessWithMismatch",
    "WASmaxInBlocklistsUpdateBlockListResponseServerError",
    "WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMatch",
    "WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMismatch",
    "WASmaxOutBlocklistsUpdateBlockListRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutBlocklistsUpdateBlockListRequest").makeUpdateBlockListRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessWithMatch = o("WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMatch").parseUpdateBlockListResponseSuccessWithMatch(r, n);
            if (SuccessWithMatch.success) {
                return {
                    name: "UpdateBlockListResponseSuccessWithMatch",
                    value: SuccessWithMatch.value
                };
            }
            const SuccessWithMismatch = o("WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMismatch").parseUpdateBlockListResponseSuccessWithMismatch(r, n);
            if (SuccessWithMismatch.success) {
                return {
                    name: "UpdateBlockListResponseSuccessWithMismatch",
                    value: SuccessWithMismatch.value
                };
            }
            const MigratedSuccessWithMismatch = o("WASmaxInBlocklistsUpdateBlockListResponseMigratedSuccessWithMismatch").parseUpdateBlockListResponseMigratedSuccessWithMismatch(r, n);
            if (MigratedSuccessWithMismatch.success) {
                return {
                    name: "UpdateBlockListResponseMigratedSuccessWithMismatch",
                    value: MigratedSuccessWithMismatch.value
                };
            }
            const CAPISuccessWithMismatch = o("WASmaxInBlocklistsUpdateBlockListResponseCAPISuccessWithMismatch").parseUpdateBlockListResponseCAPISuccessWithMismatch(r, n);
            if (CAPISuccessWithMismatch.success) {
                return {
                    name: "UpdateBlockListResponseCAPISuccessWithMismatch",
                    value: CAPISuccessWithMismatch.value
                };
            }
            const InvalidRequest = o("WASmaxInBlocklistsUpdateBlockListResponseInvalidRequest").parseUpdateBlockListResponseInvalidRequest(r, n);
            if (InvalidRequest.success) {
                return {
                    name: "UpdateBlockListResponseInvalidRequest",
                    value: InvalidRequest.value
                };
            }
            const c = o("WASmaxInBlocklistsUpdateBlockListResponseServerError").parseUpdateBlockListResponseServerError(r, n);
            if (c.success) {
                return {
                    name: "UpdateBlockListResponseServerError",
                    value: c.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("UpdateBlockList", {
                SuccessWithMatch,
                SuccessWithMismatch,
                MigratedSuccessWithMismatch,
                CAPISuccessWithMismatch,
                InvalidRequest,
                ServerError: c
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendUpdateBlockListRPC = e;
}, 98);