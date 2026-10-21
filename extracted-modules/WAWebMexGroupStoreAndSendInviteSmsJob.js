__d("WAWebMexGroupStoreAndSendInviteSmsJob", [
    "WAWebMexClient",
    "WAWebMexGroupStoreAndSendInviteSmsJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, participant, a) {
            const s = e !== undefined ? e : e = n("WAWebMexGroupStoreAndSendInviteSmsJobMutation.graphql");
            const u = {
                input: {
                    entry_point: a,
                    group_jid: t,
                    participants: [
                        {
                            participant,
                            server_sent_sms: true
                        }
                    ]
                }
            };
            const c = yield o("WAWebMexClient").fetchQuery(s, u);
            const d = c.xwa2_group_store_and_send_invites_sms?.participant_responses?.[0];
            const m = d?.error_code ?? null;
            const serverSent = d != null && m == null && d.server_sent === true;
            return {
                errorCode: serverSent ? null : m,
                serverSent
            };
        });
        return u.apply(this, arguments);
    }
    l.mexGroupStoreAndSendInviteSms = s;
}, 98);