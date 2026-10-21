__d("WAWebNewsletterOpenAtAction", [
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterGetMessagesJob",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatEntryPoint, newsletterJid, onMessageDeleted, onMessageNotFound, serverId }) {
            const u = r("WAWebNewsletterCollection").get(newsletterJid);
            if (u == null) {
                return false;
            }
            const c = p(u, serverId);
            if (c != null) {
                return d({
                    chat: u,
                    msg: c,
                    chatEntryPoint,
                    onMessageDeleted
                });
            }
            let m = yield o("WAWebNewsletterDBUtils").getMessageByServerId(serverId, newsletterJid);
            if (m == null) {
                const _ = yield o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(newsletterJid, 1, {
                    after: serverId - 1
                });
                m = _.msgs[0];
            }
            if (m == null) {
                const f = yield o("WAWebCmd").Cmd.openChatBottom({
                    chat: u,
                    chatEntryPoint
                });
                if (onMessageNotFound == null) {
                    o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterMessageNotFoundPopup, {
                        chat: u
                    }));
                } else {
                    onMessageNotFound();
                }
                return f;
            }
            const g = o("WAWebMsgCollection").MsgCollection.gadd(m);
            return d({
                chat: u,
                msg: g,
                chatEntryPoint,
                onMessageDeleted
            });
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, chatEntryPoint, msg, onMessageDeleted }) {
            if (msg.type === o("WAWebMsgType").MSG_TYPE.REVOKED && onMessageDeleted != null) {
                const i = yield o("WAWebCmd").Cmd.openChatBottom({
                    chat,
                    chatEntryPoint
                });
                onMessageDeleted();
                return i;
            }
            return o("WAWebCmd").Cmd.openChatAt({
                chat,
                msgContext: o("WAWebChatMessageSearch").getSearchContext({
                    chat,
                    msgKey: msg.id
                }),
                chatEntryPoint
            });
        });
        return m.apply(this, arguments);
    }
    function p(e, serverId) {
        const n = e.getAllMsgs();
        return n.find((e)=>e.serverId === serverId);
    }
    l.openNewsletterAt = u;
}, 98);