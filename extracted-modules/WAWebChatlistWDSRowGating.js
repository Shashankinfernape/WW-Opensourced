__d("WAWebChatlistWDSRowGating", [
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatAssignmentUtils",
    "WAWebFeatureFlagCollection",
    "WAWebFeatureFlagName",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(e) || e.archive === true || o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e) || o("WAWebChatAssignmentUtils").canAssignChat(e) && t;
    }
    function s(t) {
        const n = [
            e(t.chat, t.chatAssignmentVisibleToUser),
            t.hasTertiary,
            t.isSelectable,
            t.showChatAssignmentIcon
        ];
        if (n.some(Boolean)) {
            return false;
        }
        return r("gkx")("22829");
    }
    function u() {
        return o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT)?.enabled === true;
    }
    l.chatFallsBackToLegacyCell = e;
    l.shouldUseWDSPreviewRow = s;
    l.isChatAssignmentVisibleToUser = u;
}, 98);