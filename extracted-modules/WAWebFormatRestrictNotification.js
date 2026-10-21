__d("WAWebFormatRestrictNotification", [
    "fbt",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    const e = 256;
    function u({ author, authorClickable, templateParams }) {
        const i = templateParams[0];
        if (i === "on") {
            if (templateParams[1] != null) {
                const l = parseInt(templateParams[1], 10) || e;
                return s._("_j{\"*\":\"This group has over {threshold} members so now only admins can edit the group settings\",\"_1\":\"This group has over 1 member so now only admins can edit the group settings\"}", [
                    s._plural(l, "threshold")
                ]);
            }
            if (o("WAWebSystemMessagesUtils").isMe(author)) {
                return s._("You changed the settings so only admins can edit the group settings");
            }
            if (authorClickable != null) {
                return s._("{user_name} changed the settings so only admins can edit the group settings", [
                    s._param("user_name", authorClickable)
                ]);
            }
            return s._("A member changed the settings so only admins can edit the group settings");
        } else if (o("WAWebSystemMessagesUtils").isMe(author)) {
            return s._("You changed the settings so all members can edit the group settings");
        }
        if (authorClickable != null) {
            return s._("{user_name} changed the settings so all members can edit the group settings", [
                s._param("user_name", authorClickable)
            ]);
        }
        return s._("A member changed the settings so all members can edit the group settings");
    }
    l.formatRestrictNotification = u;
}, 226);