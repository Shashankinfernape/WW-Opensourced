__d("WAWebMaibaWASSMigration", [
    "WAWebBizAiAgentGating",
    "WAWebBotUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.isLid() && e.user === o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID.user;
    }
    function s(e) {
        if (o("WAWebBotUtils").isMaibaAiHubFbid(e)) {
            return o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID;
        }
        return null;
    }
    function u(t) {
        if (o("WAWebBizAiAgentGating").isMaibaWASSSendingEnabled() && e(t)) {
            return o("WAWebBotUtils").MAIBA_AI_HUB_FBID_WID;
        }
        return null;
    }
    function c(e) {
        const t = e.data.to;
        const n = u(t);
        if (n != null) {
            if (e.type === "message") {
                e.data.to = n;
            } else if (e.type === "addon") {
                e.data = babelHelpers.extends({}, e.data, {
                    to: n
                });
            }
        }
    }
    function d(e) {
        if (o("WAWebBotUtils").isMaibaAiHubFbid(e)) {
            return o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID;
        }
        return e;
    }
    function m(e) {
        const t = u(e);
        return t ?? e;
    }
    l.isMaibaAiHubLid = e;
    l.getMaibaAiHubLidForFbidThread = s;
    l.getMaibaAiHubFbidForLidChat = u;
    l.maybeReplaceMaibaAiHubLidWithFbidForSend = c;
    l.resolveMaibaAiHubFbidToLidOrChatId = d;
    l.maybeReplaceMaibaAiHubWidWithFbid = m;
}, 98);