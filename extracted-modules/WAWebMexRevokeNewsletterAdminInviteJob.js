__d("WAWebMexRevokeNewsletterAdminInviteJob", [
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql");
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
                return d(e, t);
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(newsletter_id, t) {
            const n = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
            yield o("WAWebMexClient").fetchQuery(s, {
                newsletter_id,
                user_id: n.toString()
            });
        });
        return m.apply(this, arguments);
    }
    l.revokeNewsletterAdminInvite = u;
}, 98);