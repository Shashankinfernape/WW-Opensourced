__d("WAWebOpenScheduledMsgsDeleteReview", [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebScheduledMessagesListLoadable",
    "WAWebScheduledMsgActionLogger",
    "WAWebShowScheduledMsgsBulkDeleteToast",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnscheduleMsgAction",
    "WAWebWamEnumScheduledMessageEntrypoint",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(t, handler) {
        const i = o("WAJids").unsafeCoerceToChatJid(t.id.toJid());
        const Component = o("WAWebScheduledMessagesListLoadable").WAWebScheduledMessagesListLoadable;
        const l = <Component chatId={i} onBack={o("WAWebDrawerManager").closeDrawerRight} initialSelectionMode onDeleteSelected={function(t) {
            o("WAWebShowScheduledMsgsBulkDeleteToast").showScheduledMsgsBulkDeleteToast(i, t, {
                text: s._("Delete chat"),
                handler
            });
        }} onDeleteMessage={(()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    yield o("WAWebUnscheduleMsgAction").unscheduleMsgAction(i, t);
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][delete-review] unschedule failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("scheduled-msg-delete-review-unschedule-fail");
                    o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                        id: o("WAWebToast.react").genId(),
                        msg: s._("Couldn't delete message")
                    }));
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })()}/>;
        o("WAWebCmd").Cmd.openChatFromUnread({
            chat: t,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab
        }).then((e)=>{
            if (e) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(l);
                o("WAWebScheduledMsgActionLogger").logScheduledMsgViewListForChat(t, o("WAWebWamEnumScheduledMessageEntrypoint").SCHEDULED_MESSAGE_ENTRYPOINT.CHAT_DELETE_DIALOG);
            }
        }).catch((e)=>o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][delete-review] chat open failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-delete-review-open-chat-fail"));
    }
    l.openScheduledMsgsDeleteReview = m;
}, 226);