__d("WAWebFormatAnnounceNotification", [
    "fbt",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, authorClickable, body }) {
        if (body === "on") {
            if (o("WAWebSystemMessagesUtils").isMe(author)) {
                return s._("You allowed only admins to send messages to this group");
            }
            return s._("{user_name} changed this group's settings to allow only admins to send messages to this group", [
                s._param("user_name", authorClickable)
            ]);
        }
        if (o("WAWebSystemMessagesUtils").isMe(author)) {
            return s._("You changed this group's settings to allow all members to send messages to this group");
        }
        return s._("{user_name} changed this group's settings to allow all members to send messages to this group", [
            s._param("user_name", authorClickable)
        ]);
    }
    l.formatAnnounceNotification = e;
}, 226);