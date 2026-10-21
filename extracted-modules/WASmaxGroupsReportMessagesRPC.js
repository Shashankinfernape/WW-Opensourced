__d("WASmaxGroupsReportMessagesRPC", [
    "WAComms",
    "WASmaxInGroupsReportMessagesResponseClientError",
    "WASmaxInGroupsReportMessagesResponseServerError",
    "WASmaxInGroupsReportMessagesResponseSuccess",
    "WASmaxOutGroupsReportMessagesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsReportMessagesRequest").makeReportMessagesRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsReportMessagesResponseSuccess").parseReportMessagesResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "ReportMessagesResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsReportMessagesResponseClientError").parseReportMessagesResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "ReportMessagesResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsReportMessagesResponseServerError").parseReportMessagesResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "ReportMessagesResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ReportMessages", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendReportMessagesRPC = e;
}, 98);