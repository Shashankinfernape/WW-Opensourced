__d("WAWebMexNewsletterPinMessagesJob", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexNewsletterParseUtils",
    "WAWebMexNewsletterPinMessagesJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const i = e !== undefined ? e : e = n("WAWebMexNewsletterPinMessagesJobMutation.graphql");
            const l = {
                newsletter_id: t,
                input: {
                    message_ids: r
                }
            };
            const u = yield o("WAWebMexClient").fetchQuery(i, l);
            const c = u?.xwa2_newsletter_pin_messages?.thread_metadata?.pinned_messages;
            if (c == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] pin messages returned no snapshot"
                ]))).sendLogs("mex-newsletter-pin-failed").tags("GQL", "MEX", "NEWSLETTER", "PIN");
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "unexpected-null-mex-pin-response");
            }
            return o("WAWebMexNewsletterParseUtils").toPinnedMessagesMixin(c);
        });
        return c.apply(this, arguments);
    }
    l.mexNewsletterPinMessages = u;
}, 98);