__d("WAWebMexDeleteNewsletterJob", [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexDeleteNewsletterJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
                return c(e);
            });
            if (t.xwa2_newsletter_delete_v2 != null) {
                return true;
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "xwa2_newsletter_delete_v2 is null");
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = e !== undefined ? e : e = n("WAWebMexDeleteNewsletterJobMutation.graphql");
            const a = {
                newsletter_id: t
            };
            const i = yield o("WAWebMexClient").fetchQuery(r, a);
            return i;
        });
        return d.apply(this, arguments);
    }
    l.mexDeleteNewsletter = s;
}, 98);