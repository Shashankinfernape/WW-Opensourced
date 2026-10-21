__d("WASmaxMessagePublishNewsletterRPC", [
    "WAComms",
    "WASmaxInMessagePublishNewsletterResponseNegative",
    "WASmaxInMessagePublishNewsletterResponseSuccess",
    "WASmaxOutMessagePublishNewsletterRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutMessagePublishNewsletterRequest").makeNewsletterRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const Negative = o("WASmaxInMessagePublishNewsletterResponseNegative").parseNewsletterResponseNegative(r, n);
            if (Negative.success) {
                return {
                    name: "NewsletterResponseNegative",
                    value: Negative.value
                };
            }
            const i = o("WASmaxInMessagePublishNewsletterResponseSuccess").parseNewsletterResponseSuccess(r, n);
            if (i.success) {
                return {
                    name: "NewsletterResponseSuccess",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Newsletter", {
                Negative,
                Success: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendNewsletterRPC = e;
}, 98);