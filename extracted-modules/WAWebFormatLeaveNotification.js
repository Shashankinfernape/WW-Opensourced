__d("WAWebFormatLeaveNotification", [
    "fbt",
    "WAWebGroupType",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ body, participantsClickable, subject }) {
        if (subject) {
            if (o("WAWebSystemMessagesUtils").isMe(subject)) {
                return s._("You left");
            }
            return s._("{user_name} left", [
                s._param("user_name", participantsClickable)
            ]);
        }
        if (body === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT) {
            return s._("This community is no longer available");
        }
        return s._("This group has ended");
    }
    l.formatLeaveNotification = e;
}, 226);