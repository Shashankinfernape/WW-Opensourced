__d("WAWebFormatCreateNotification", [
    "fbt",
    "WAWebSystemMessagesUtils",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ author, authorClickable, chat, groupSubject, groupSubjectAsString }) {
        const l = groupSubjectAsString ? groupSubject : u.jsx(o("WAWebSystemMessagesUtils").FormattedText, {
            text: groupSubject
        });
        if (o("WAWebSystemMessagesUtils").isMe(author)) {
            if (groupSubject) {
                return s._("You created group \"{group_subject}\"", [
                    s._param("group_subject", l)
                ]);
            }
            return s._("You created this group");
        }
        if (groupSubject) {
            if (authorClickable != null) {
                return s._("{user_name} created group \"{group_subject}\"", [
                    s._param("user_name", authorClickable),
                    s._param("group_subject", l)
                ]);
            }
            return s._("An admin created group \"{group_subject}\"", [
                s._param("group_subject", l)
            ]);
        }
        if (authorClickable != null) {
            const c = chat ? chat.title() : "";
            if (c.trim() === "") {
                return s._("{user_name} created this group", [
                    s._param("user_name", authorClickable)
                ]);
            }
            return s._("{user_name} created group \"{group_subject}\"", [
                s._param("user_name", authorClickable),
                s._param("group_subject", c)
            ]);
        }
        return s._("An admin created this group");
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.formatCreateNotification = c;
}, 226);