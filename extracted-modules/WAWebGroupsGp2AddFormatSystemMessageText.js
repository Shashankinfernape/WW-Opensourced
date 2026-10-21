__d("WAWebGroupsGp2AddFormatSystemMessageText", [
    "WAWebContactCollection",
    "WAWebFormatAddNotification",
    "WAWebFormatParticipantNames",
    "WAWebFrontendContactGetters",
    "WAWebGroupAgentAddAttribution",
    "WAWebMsgModelUtils",
    "WAWebWidFormat"
], function(t, n, r, o, a, i, l) {
    function e({ msg }) {
        const authorClickable = o("WAWebMsgModelUtils").getMsgDisplayName(msg);
        const author = msg.get("author");
        const recipients = msg.recipients || [];
        const participantsClickable = o("WAWebFormatParticipantNames").getFormattedNames(recipients, false);
        const subject = recipients[0];
        const s = subject ? o("WAWebContactCollection").ContactCollection.get(subject) : undefined;
        let subjectClickable;
        if (s) {
            subjectClickable = o("WAWebFrontendContactGetters").getFormattedName(s);
        } else if (subject) {
            subjectClickable = o("WAWebWidFormat").widToFormattedUser(subject);
        } else {
            subjectClickable = "";
        }
        return o("WAWebFormatAddNotification").formatAddNotification({
            author,
            authorClickable,
            museAgentAddAttribution: o("WAWebGroupAgentAddAttribution").groupAgentAddAttributionFromBody(msg.get("body")),
            subject,
            subjectClickable,
            participantsClickable,
            recipients
        });
    }
    l.default = e;
}, 98);