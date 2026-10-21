__d("WASmaxGroupsGetReportedMessagesRPC", [
    "WAComms",
    "WASmaxInGroupsGetReportedMessagesResponseClientError",
    "WASmaxInGroupsGetReportedMessagesResponseServerError",
    "WASmaxInGroupsGetReportedMessagesResponseSuccess",
    "WASmaxOutGroupsGetReportedMessagesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsGetReportedMessagesRequest").makeGetReportedMessagesRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsGetReportedMessagesResponseSuccess").parseGetReportedMessagesResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetReportedMessagesResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsGetReportedMessagesResponseClientError").parseGetReportedMessagesResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "GetReportedMessagesResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsGetReportedMessagesResponseServerError").parseGetReportedMessagesResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "GetReportedMessagesResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetReportedMessages", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetReportedMessagesRPC = e;
}, 98);