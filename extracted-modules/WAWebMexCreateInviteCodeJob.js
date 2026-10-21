__d("WAWebMexCreateInviteCodeJob", [
    "WAWebMexClient",
    "WAWebMexCreateInviteCodeJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, server_send_sms) {
            const i = e !== undefined ? e : e = n("WAWebMexCreateInviteCodeJobMutation.graphql");
            const l = {
                input: {
                    receiver: t,
                    entry_point: r,
                    server_send_sms
                }
            };
            const s = yield o("WAWebMexClient").fetchQuery(i, l);
            const s_xwa2_growth_create_invite_code = s.xwa2_growth_create_invite_code;
            if (s_xwa2_growth_create_invite_code == null) {
                return null;
            }
            return {
                code: s_xwa2_growth_create_invite_code.code,
                errorReason: s_xwa2_growth_create_invite_code.error_reason
            };
        });
        return u.apply(this, arguments);
    }
    l.mexCreateInviteCode = s;
}, 98);