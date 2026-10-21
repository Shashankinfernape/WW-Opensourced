__d("WAWebMutedChatDimming", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e({ isMuted, isNewsletter, unreadCount }) {
        if (!isMuted || isNewsletter || unreadCount === 0) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("inbox_dim_muted_chats");
    }
    l.shouldDimMutedChat = e;
}, 98);