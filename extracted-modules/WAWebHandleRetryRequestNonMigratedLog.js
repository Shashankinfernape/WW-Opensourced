__d("WAWebHandleRetryRequestNonMigratedLog", [
    "WAWebCheckChatExistsOrCreate",
    "WAWebHandleRetryRequest",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = "na";
            if (e.from.isRegularUser()) {
                t = e.from.isLid() ? "lid" : "pn";
            }
            const n = u(e);
            const r = o("WAWebHandleRetryRequest").getTargetChat(e);
            let a = "na";
            let i = false;
            if (r && r.isRegularUser()) {
                a = r.isLid() ? "lid" : "pn";
                i = (yield o("WAWebCheckChatExistsOrCreate").doesChatExist(r)) !== false;
            }
            const l = e.offline ? "-offline" : "";
            return `handle-message-retry-request-no-chat-info-${n}-from-${t}-target-${a}-${e.type}-target-exists-${i.toString()}${l}`;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (e.from.isGroup()) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(e.participant)) {
                return "did_not_find_group_message_from_self";
            }
            return "did_not_find_group_message_from_remote";
        }
        if (e.from.isUser()) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(e.from)) {
                if (e.from.device === 0 || e.from.device == null) {
                    return "did_not_find_1on1_message_from_self_primary";
                }
                return "did_not_find_1on1_message_from_self_companion";
            }
            return "did_not_find_1on1_message_from_remote";
        }
        return "did_not_find_message_other";
    }
    l.buildNoChatInfoSendLogsArg = e;
    l.selectRetryErrorType = u;
}, 98);