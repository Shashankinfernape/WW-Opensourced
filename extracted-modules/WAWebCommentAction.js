__d("WAWebCommentAction", [
    "WAAbortError",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCommentCollection",
    "WAWebMsgType",
    "WAWebNotificationBackend"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return !e.read && e.parentMsgKey.fromMe && !e.id.fromMe;
    }
    function u(e, t) {
        const n = [];
        const r = t ? [].concat(t) : [];
        for (const a of e){
            switch(a.type){
                case o("WAWebMsgType").MSG_TYPE.REVOKED:
                    n.push(o("WAWebCommentCollection").createCommentModelFromRevoke(a));
                    if (a.protocolMessageKey != null) {
                        r.push(a.protocolMessageKey);
                    }
                    break;
                case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
                    n.push(o("WAWebCommentCollection").createCommentModelFromPlaceholder(a));
                    break;
                case o("WAWebMsgType").MSG_TYPE.COMMENT:
                    n.push(o("WAWebCommentCollection").createCommentModel(a));
            }
        }
        o("WAWebCommentCollection").CommentCollection.remove(r);
        o("WAWebCommentCollection").CommentCollection.set(n, {
            remove: false
        });
    }
    function c(e) {
        for (const t of e){
            const { id, t: t_1 } = t;
            if (id != null) {
                const a = o("WAWebChatCollection").ChatCollection.get(id);
                if (a != null) {
                    a.t = t_1;
                    a.unreadCount = t.unreadCount ?? a.unreadCount;
                }
            }
        }
    }
    function d(t, n) {
        for (const r of t){
            if (s(r)) {
                o("WAWebNotificationBackend").showCommentNotification(r).catch(o("WAAbortError").catchAbort(function(t) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Comments] Aborted notification ",
                        ""
                    ])), t);
                }));
            }
        }
        for (const a of n){
            o("WAWebNotificationBackend").removeCommentNotification(a);
        }
    }
    l.upsertCommentModelCollection = u;
    l.updateChatToLatest = c;
    l.handleCommentNotification = d;
}, 98);