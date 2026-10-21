__d("WAWebMexNewsletterUnpinMessagesJob", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexNewsletterParseUtils",
    "WAWebMexNewsletterUnpinMessagesJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const i = e !== undefined ? e : e = n("WAWebMexNewsletterUnpinMessagesJobMutation.graphql");
            const l = {
                newsletter_id: t,
                input: {
                    message_ids: r
                }
            };
            const u = yield o("WAWebMexClient").fetchQuery(i, l);
            const c = u?.xwa2_newsletter_unpin_messages?.thread_metadata?.pinned_messages;
            if (c == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] unpin messages returned no snapshot"
                ]))).sendLogs("mex-newsletter-unpin-failed").tags("GQL", "MEX", "NEWSLETTER", "PIN");
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "unexpected-null-mex-unpin-response");
            }
            return o("WAWebMexNewsletterParseUtils").toPinnedMessagesMixin(c);
        });
        return c.apply(this, arguments);
    }
    l.mexNewsletterUnpinMessages = u;
}, 98);