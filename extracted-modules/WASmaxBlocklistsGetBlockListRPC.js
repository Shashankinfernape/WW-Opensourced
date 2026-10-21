__d("WASmaxBlocklistsGetBlockListRPC", [
    "WAComms",
    "WASmaxInBlocklistsGetBlockListResponseCAPISuccessWithMismatch",
    "WASmaxInBlocklistsGetBlockListResponseForceMigratedSuccessWithMismatch",
    "WASmaxInBlocklistsGetBlockListResponseInternalServerError",
    "WASmaxInBlocklistsGetBlockListResponseInvalidRequest",
    "WASmaxInBlocklistsGetBlockListResponseMigratedSuccessWithMismatch",
    "WASmaxInBlocklistsGetBlockListResponseSuccessWithMatch",
    "WASmaxInBlocklistsGetBlockListResponseSuccessWithMismatch",
    "WASmaxOutBlocklistsGetBlockListRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutBlocklistsGetBlockListRequest").makeGetBlockListRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessWithMismatch = o("WASmaxInBlocklistsGetBlockListResponseSuccessWithMismatch").parseGetBlockListResponseSuccessWithMismatch(r, n);
            if (SuccessWithMismatch.success) {
                return {
                    name: "GetBlockListResponseSuccessWithMismatch",
                    value: SuccessWithMismatch.value
                };
            }
            const MigratedSuccessWithMismatch = o("WASmaxInBlocklistsGetBlockListResponseMigratedSuccessWithMismatch").parseGetBlockListResponseMigratedSuccessWithMismatch(r, n);
            if (MigratedSuccessWithMismatch.success) {
                return {
                    name: "GetBlockListResponseMigratedSuccessWithMismatch",
                    value: MigratedSuccessWithMismatch.value
                };
            }
            const ForceMigratedSuccessWithMismatch = o("WASmaxInBlocklistsGetBlockListResponseForceMigratedSuccessWithMismatch").parseGetBlockListResponseForceMigratedSuccessWithMismatch(r, n);
            if (ForceMigratedSuccessWithMismatch.success) {
                return {
                    name: "GetBlockListResponseForceMigratedSuccessWithMismatch",
                    value: ForceMigratedSuccessWithMismatch.value
                };
            }
            const CAPISuccessWithMismatch = o("WASmaxInBlocklistsGetBlockListResponseCAPISuccessWithMismatch").parseGetBlockListResponseCAPISuccessWithMismatch(r, n);
            if (CAPISuccessWithMismatch.success) {
                return {
                    name: "GetBlockListResponseCAPISuccessWithMismatch",
                    value: CAPISuccessWithMismatch.value
                };
            }
            const SuccessWithMatch = o("WASmaxInBlocklistsGetBlockListResponseSuccessWithMatch").parseGetBlockListResponseSuccessWithMatch(r, n);
            if (SuccessWithMatch.success) {
                return {
                    name: "GetBlockListResponseSuccessWithMatch",
                    value: SuccessWithMatch.value
                };
            }
            const InvalidRequest = o("WASmaxInBlocklistsGetBlockListResponseInvalidRequest").parseGetBlockListResponseInvalidRequest(r, n);
            if (InvalidRequest.success) {
                return {
                    name: "GetBlockListResponseInvalidRequest",
                    value: InvalidRequest.value
                };
            }
            const InternalServerError = o("WASmaxInBlocklistsGetBlockListResponseInternalServerError").parseGetBlockListResponseInternalServerError(r, n);
            if (InternalServerError.success) {
                return {
                    name: "GetBlockListResponseInternalServerError",
                    value: InternalServerError.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetBlockList", {
                SuccessWithMismatch,
                MigratedSuccessWithMismatch,
                ForceMigratedSuccessWithMismatch,
                CAPISuccessWithMismatch,
                SuccessWithMatch,
                InvalidRequest,
                InternalServerError
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetBlockListRPC = e;
}, 98);