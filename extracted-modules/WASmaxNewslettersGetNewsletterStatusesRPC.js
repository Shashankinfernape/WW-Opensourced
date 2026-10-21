__d("WASmaxNewslettersGetNewsletterStatusesRPC", [
    "WAComms",
    "WASmaxInNewslettersGetNewsletterStatusesResponseClientError",
    "WASmaxInNewslettersGetNewsletterStatusesResponseServerError",
    "WASmaxInNewslettersGetNewsletterStatusesResponseSuccess",
    "WASmaxOutNewslettersGetNewsletterStatusesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutNewslettersGetNewsletterStatusesRequest").makeGetNewsletterStatusesRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInNewslettersGetNewsletterStatusesResponseSuccess").parseGetNewsletterStatusesResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetNewsletterStatusesResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInNewslettersGetNewsletterStatusesResponseClientError").parseGetNewsletterStatusesResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "GetNewsletterStatusesResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInNewslettersGetNewsletterStatusesResponseServerError").parseGetNewsletterStatusesResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "GetNewsletterStatusesResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetNewsletterStatuses", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetNewsletterStatusesRPC = e;
}, 98);