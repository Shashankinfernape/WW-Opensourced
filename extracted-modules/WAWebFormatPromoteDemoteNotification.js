__d("WAWebFormatPromoteDemoteNotification", [
    "fbt",
    "WALogger",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u({ participantsClickable, participantsCount, subject, subjectClickable, subtype }) {
        switch(subtype){
            case "promote":
                if (participantsCount === 1 && o("WAWebSystemMessagesUtils").isMe(subject)) {
                    return s._("You're now an admin");
                }
                return s._("_j{\"*\":\"{participant_names} are now admins\",\"_1\":\"{participant_names} is now an admin\"}", [
                    s._plural(participantsCount),
                    s._param("participant_names", participantsClickable)
                ]);
            case "demote":
                if (participantsCount === 1 && o("WAWebSystemMessagesUtils").isMe(subject)) {
                    return s._("You're no longer an admin");
                }
                return s._("_j{\"*\":\"{participant_names} are no longer admins\",\"_1\":\"{participant_names} is no longer an admin\"}", [
                    s._plural(participantsCount),
                    s._param("participant_names", participantsClickable)
                ]);
            case "linked_group_promote":
                if (o("WAWebSystemMessagesUtils").isMe(subject)) {
                    return s._("You're now a community admin");
                }
                return s._("{name} is now a community admin", [
                    s._param("name", subjectClickable)
                ]);
            case "linked_group_demote":
                if (o("WAWebSystemMessagesUtils").isMe(subject)) {
                    return s._("You're no longer a community admin");
                }
                return s._("{name} is no longer a community admin", [
                    s._param("name", subjectClickable)
                ]);
            default:
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:formatPromoteDemoteNotification:unknown message subtype: ",
                    ""
                ])), subtype);
                return "";
        }
    }
    l.formatPromoteDemoteNotification = u;
}, 226);