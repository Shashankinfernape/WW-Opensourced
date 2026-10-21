__d("WAWebGroupSuspensionAppealMutation", [
    "WAWebGroupSuspensionAppealMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(group_jid, appeal_reason, debug_info) {
            const i = yield o("WAWebRelayClient").commitMutation(e !== undefined ? e : e = n("WAWebGroupSuspensionAppealMutation.graphql"), {
                input: {
                    group_jid,
                    appeal_reason,
                    debug_info
                }
            }, {
                environmentType: "whatsapp_web"
            });
            const l = i?.wa_create_group_suspension_appeal;
            const s = l?.response_code;
            const success = s === "SUCCESS" || s === "APPEAL_ALREADY_EXISTS";
            return {
                success,
                appealCreationTime: l?.appeal_creation_time,
                errorMessage: success ? null : l?.error_message
            };
        });
        return u.apply(this, arguments);
    }
    l.submitGroupSuspensionAppeal = s;
}, 98);