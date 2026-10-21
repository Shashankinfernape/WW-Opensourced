__d("WAWebFormatCommunityOwnerUpdateNotification", [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebFormatParticipantNames",
    "WAWebSystemMessagesUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, clickable, templateParams }) {
        const a = author ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable,
            jid: author
        }) : null;
        const i = o("WAWebChatCommunityUtils").getNewCommunityOwnerFromTemplateParams(templateParams);
        const l = i != null ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable,
            jid: i
        }) : null;
        if (author != null) {
            if (o("WAWebSystemMessagesUtils").isMe(author)) {
                return s._("You assigned {user_name} as the new owner.", [
                    s._param("user_name", l)
                ]);
            }
            if (o("WAWebSystemMessagesUtils").isMe(i)) {
                return s._("{user_name} assigned you as the new owner. Learn more", [
                    s._param("user_name", a)
                ]);
            }
            return s._("{author_name} assigned {user_name} as the new owner.", [
                s._param("author_name", a),
                s._param("user_name", l)
            ]);
        }
        if (o("WAWebSystemMessagesUtils").isMe(i)) {
            return s._("You are the new owner. Learn more");
        }
        return s._("{user_name} is the new owner.", [
            s._param("user_name", l)
        ]);
    }
    l.formatCommunityOwnerUpdateNotification = e;
}, 226);