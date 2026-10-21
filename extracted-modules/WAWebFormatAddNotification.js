__d("WAWebFormatAddNotification", [
    "fbt",
    "WAWebFormatMuseAgentAddText",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, authorClickable, museAgentAddAttribution, participantsClickable, recipients, subject, subjectClickable }) {
        const c = recipients != null ? o("WAWebFormatMuseAgentAddText").formatMuseAgentAddText({
            author,
            authorClickable,
            agentClickable: participantsClickable,
            attribution: museAgentAddAttribution,
            recipients
        }) : null;
        return c ?? (author ? o("WAWebSystemMessagesUtils").isMe(author) ? s._("You added {names}", [
            s._param("names", participantsClickable)
        ]) : o("WAWebSystemMessagesUtils").isMe(subject) ? authorClickable != null ? s._("{user_name} added you", [
            s._param("user_name", authorClickable)
        ]) : s._("A member added you") : authorClickable != null ? s._("{user_name} added {names}", [
            s._param("user_name", authorClickable),
            s._param("names", participantsClickable)
        ]) : s._("A member added {names}", [
            s._param("names", participantsClickable)
        ]) : o("WAWebSystemMessagesUtils").isMe(subject) ? s._("You were added") : s._("{user_name} was added", [
            s._param("user_name", subjectClickable)
        ]));
    }
    l.formatAddNotification = e;
}, 226);