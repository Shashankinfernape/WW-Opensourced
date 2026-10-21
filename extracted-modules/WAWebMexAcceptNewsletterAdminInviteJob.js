__d("WAWebMexAcceptNewsletterAdminInviteJob", [
    "WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql",
    "WAWebMexClient",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
                return d(e);
            });
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebMexClient").fetchQuery(s, {
                newsletter_id: e
            });
        });
        return m.apply(this, arguments);
    }
    l.acceptNewsletterAdminInvite = u;
}, 98);