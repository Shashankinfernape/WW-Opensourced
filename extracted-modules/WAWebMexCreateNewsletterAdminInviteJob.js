__d("WAWebMexCreateNewsletterAdminInviteJob", [
    "WATimeUtils",
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexCreateNewsletterAdminInviteJobMutation.graphql",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexCreateNewsletterAdminInviteJobMutation.graphql");
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
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebLidMigrationUtils").toUserLidOrThrow(t);
            const a = yield o("WAWebMexClient").fetchQuery(s, {
                newsletter_id: e,
                user_id: n.toString()
            });
            const a_xwa2_newsletter_admin_invite_create = a.xwa2_newsletter_admin_invite_create;
            const l = r("nullthrows")(a_xwa2_newsletter_admin_invite_create?.invite_expiration_time);
            return {
                inviteExpiration: o("WATimeUtils").castToUnixTime(Number.parseInt(l, 10))
            };
        });
        return m.apply(this, arguments);
    }
    l.createNewsletterAdminInvite = u;
}, 98);