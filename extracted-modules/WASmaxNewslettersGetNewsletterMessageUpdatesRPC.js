__d("WASmaxNewslettersGetNewsletterMessageUpdatesRPC", [
    "WAComms",
    "WASmaxInNewslettersGetNewsletterMessageUpdatesResponseClientError",
    "WASmaxInNewslettersGetNewsletterMessageUpdatesResponseServerError",
    "WASmaxInNewslettersGetNewsletterMessageUpdatesResponseSuccess",
    "WASmaxOutNewslettersGetNewsletterMessageUpdatesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutNewslettersGetNewsletterMessageUpdatesRequest").makeGetNewsletterMessageUpdatesRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInNewslettersGetNewsletterMessageUpdatesResponseSuccess").parseGetNewsletterMessageUpdatesResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetNewsletterMessageUpdatesResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInNewslettersGetNewsletterMessageUpdatesResponseClientError").parseGetNewsletterMessageUpdatesResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "GetNewsletterMessageUpdatesResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInNewslettersGetNewsletterMessageUpdatesResponseServerError").parseGetNewsletterMessageUpdatesResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "GetNewsletterMessageUpdatesResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetNewsletterMessageUpdates", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetNewsletterMessageUpdatesRPC = e;
}, 98);