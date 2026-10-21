__d("WAWebFormatPictureNotification", [
    "fbt",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, authorClickable, body }) {
        if (body === "remove") {
            if (o("WAWebSystemMessagesUtils").isMe(author)) {
                return s._("You deleted this group's icon");
            }
            if (authorClickable != null) {
                return s._("{user_name} deleted this group's icon", [
                    s._param("user_name", authorClickable)
                ]);
            }
            return s._("A member deleted this group's icon");
        }
        if (o("WAWebSystemMessagesUtils").isMe(author)) {
            return s._("You changed this group's icon");
        }
        if (authorClickable != null) {
            return s._("{user_name} changed this group's icon", [
                s._param("user_name", authorClickable)
            ]);
        }
        return s._("A member changed this group's icon");
    }
    l.formatPictureNotification = e;
}, 226);