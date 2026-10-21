__d("WAWebFormatRemoveNotification", [
    "fbt",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebLidMigrationUtils",
    "WAWebSystemMessagesUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, authorClickable, participantsClickable, subject, subjectClickable }) {
        if (author) {
            if (r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(author, subject))) {
                return s._("You were removed");
            }
            if (o("WAWebSystemMessagesUtils").isMe(author)) {
                return s._("You removed {names}", [
                    s._param("names", participantsClickable)
                ]);
            }
            if (o("WAWebSystemMessagesUtils").isMe(subject)) {
                if (authorClickable != null) {
                    return s._("{user_name} removed you", [
                        s._param("user_name", authorClickable)
                    ]);
                }
                return s._("A member removed you");
            }
            if (authorClickable != null) {
                return s._("{user_name} removed {names}", [
                    s._param("user_name", authorClickable),
                    s._param("names", participantsClickable)
                ]);
            }
            return s._("A member removed {names}", [
                s._param("names", participantsClickable)
            ]);
        }
        if (o("WAWebSystemMessagesUtils").isMe(subject)) {
            return s._("You were removed");
        }
        if (subject != null && o("WAWebBotUtils").isWidGroupAgentFbidWid(subject) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return s._("{agent_name} left", [
                s._param("agent_name", subjectClickable)
            ]);
        }
        return s._("{user_name} was removed", [
            s._param("user_name", subjectClickable)
        ]);
    }
    l.formatRemoveNotification = e;
}, 226);