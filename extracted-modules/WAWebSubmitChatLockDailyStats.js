__d("WAWebSubmitChatLockDailyStats", [
    "WAWebChatLockDailyWamEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ chatLockFolderChatsCount, chatLockFolderOpenCount, chatLockLockFolderHidden, chatLockNewAddChatCount, chatLockNewRemoveChatCount, chatLockSecretCodeActive }) {
        if (!(chatLockFolderChatsCount === 0 || chatLockFolderOpenCount === 0 || chatLockNewAddChatCount === 0 || chatLockNewRemoveChatCount === 0)) {
            const s = new (o("WAWebChatLockDailyWamEvent")).ChatLockDailyWamEvent({
                folderChatsCount: chatLockFolderChatsCount,
                folderOpenCount: chatLockFolderOpenCount,
                newAddChatCount: chatLockNewAddChatCount,
                newRemoveChatCount: chatLockNewRemoveChatCount
            });
            if (chatLockLockFolderHidden != null) {
                s.set({
                    lockFolderHidden: chatLockLockFolderHidden
                });
            }
            if (chatLockSecretCodeActive != null) {
                s.set({
                    secretCodeActive: chatLockSecretCodeActive
                });
            }
            s.commit();
        }
    }
    l.submitChatLockDailyStats = e;
}, 98);