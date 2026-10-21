__d("WAWebChatAssignmentUtils", [
    "WAWebChatAssignmentGatingUtils",
    "WAWebFeatureFlagName",
    "WAWebProtobufsE2E.pb",
    "WAWebSubscriptionFeatureFlagActions"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() && o("WAWebSubscriptionFeatureFlagActions").isSubscriptionFeatureFlagEnabled(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT);
    }
    function s(e) {
        if (e == null) {
            return false;
        }
        return e.every((e)=>u(e));
    }
    function u(t) {
        if (t == null) {
            return false;
        }
        return e() && t.capiThreadControl !== o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
    }
    function c(t) {
        return t !== true && o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() && e();
    }
    l.canAssignChats = e;
    l.canAssignAllChats = s;
    l.canAssignChat = u;
    l.shouldUseChatAssignmentCTA = c;
}, 98);