__d("WAWebFormatDeleteNotification", [
    "fbt",
    "WAWebChatGroupUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ chat }) {
        if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat)) {
            return s._("This community is no longer available");
        }
        if (o("WAWebChatGroupUtils").isSupportGroup(chat)) {
            return s._("This chat has been closed");
        }
        return s._("This group has ended");
    }
    l.formatDeleteNotification = e;
}, 226);