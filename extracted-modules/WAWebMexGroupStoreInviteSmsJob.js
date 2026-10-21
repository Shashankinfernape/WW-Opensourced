__d("WAWebMexGroupStoreInviteSmsJob", [
    "WAWebMexClient",
    "WAWebMexGroupStoreInviteSmsJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, partcipants, a) {
            const s = e !== undefined ? e : e = n("WAWebMexGroupStoreInviteSmsJobMutation.graphql");
            const u = {
                input: {
                    partcipants,
                    group_jid: t
                }
            };
            const c = yield o("WAWebMexClient").fetchQuery(s, u);
            return c.xwa2_group_store_invites_sms?.participant_responses?.map(function(e) {
                return e?.error_code;
            }) ?? [];
        });
        return u.apply(this, arguments);
    }
    l.mexGroupStoreInviteSms = s;
}, 98);