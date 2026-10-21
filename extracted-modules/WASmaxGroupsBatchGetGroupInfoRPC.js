__d("WASmaxGroupsBatchGetGroupInfoRPC", [
    "WAComms",
    "WASmaxInGroupsBatchGetGroupInfoResponseClientError",
    "WASmaxInGroupsBatchGetGroupInfoResponseServerError",
    "WASmaxInGroupsBatchGetGroupInfoResponseSuccess",
    "WASmaxOutGroupsBatchGetGroupInfoRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsBatchGetGroupInfoRequest").makeBatchGetGroupInfoRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsBatchGetGroupInfoResponseSuccess").parseBatchGetGroupInfoResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "BatchGetGroupInfoResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsBatchGetGroupInfoResponseClientError").parseBatchGetGroupInfoResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "BatchGetGroupInfoResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsBatchGetGroupInfoResponseServerError").parseBatchGetGroupInfoResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "BatchGetGroupInfoResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("BatchGetGroupInfo", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendBatchGetGroupInfoRPC = e;
}, 98);