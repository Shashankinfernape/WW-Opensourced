__d("WAWebChatContextMenuItemMarkUnread.react", [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebMarkUnreadMenuItem.react",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_chat = e.chat;
        let a;
        if (t[0] !== e_chat) {
            a = function(t) {
                const e = o("WAWebStateUtils").unproxy(e_chat);
                o("WAWebCmd").Cmd.markChatUnread(e, t);
                if (!t) {
                    e.unreadMentionMetadata.reset();
                }
            };
            t[0] = e_chat;
            t[1] = a;
        } else {
            a = t[1];
        }
        const onMarkUnread = a;
        if (o("WAWebChatGetters").getCanUnread(e_chat)) {
            let l;
            if (t[2] !== e_chat) {
                l = o("WAWebStateUtils").unproxy(e_chat);
                t[2] = e_chat;
                t[3] = l;
            } else {
                l = t[3];
            }
            let u;
            if (t[4] !== onMarkUnread || t[5] !== l) {
                const Component = r("WAWebMarkUnreadMenuItem.react");
                u = <Component key="mark_unread" onMarkUnread={onMarkUnread} chat={l}/>;
                t[4] = onMarkUnread;
                t[5] = l;
                t[6] = u;
            } else {
                u = t[6];
            }
            return u;
        }
    }
    l.default = u;
}, 98);