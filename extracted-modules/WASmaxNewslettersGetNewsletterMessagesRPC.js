__d("WASmaxNewslettersGetNewsletterMessagesRPC", [
    "WAComms",
    "WASmaxInNewslettersGetNewsletterMessagesResponseClientError",
    "WASmaxInNewslettersGetNewsletterMessagesResponseServerError",
    "WASmaxInNewslettersGetNewsletterMessagesResponseSuccess",
    "WASmaxOutNewslettersGetNewsletterMessagesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutNewslettersGetNewsletterMessagesRequest").makeGetNewsletterMessagesRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInNewslettersGetNewsletterMessagesResponseSuccess").parseGetNewsletterMessagesResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetNewsletterMessagesResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInNewslettersGetNewsletterMessagesResponseClientError").parseGetNewsletterMessagesResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "GetNewsletterMessagesResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInNewslettersGetNewsletterMessagesResponseServerError").parseGetNewsletterMessagesResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "GetNewsletterMessagesResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetNewsletterMessages", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetNewsletterMessagesRPC = e;
}, 98);