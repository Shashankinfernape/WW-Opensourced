__d("WAWebChatLockUpdateDailyStats", [
    "WAWebDailyAggregatedStatsCollection"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e = {}) {
        const t = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        if (e.totalFolderChatsCount != null) {
            t.chatLockFolderChatsCount = e.totalFolderChatsCount;
        }
        if (e.incFolderOpenCount != null) {
            t.chatLockFolderOpenCount += e.incFolderOpenCount;
        }
        if (e.lockFolderHidden != null) {
            t.chatLockLockFolderHidden = e.lockFolderHidden;
        }
        if (e.incNewAddChatCount != null) {
            t.chatLockNewAddChatCount += e.incNewAddChatCount;
        }
        if (e.incNewRemoveChatCount != null) {
            t.chatLockNewRemoveChatCount += e.incNewRemoveChatCount;
        }
        if (e.secretCodeActive != null) {
            t.chatLockSecretCodeActive = e.secretCodeActive;
        }
    }
    l.updateChatLockDailyStats = e;
}, 98);