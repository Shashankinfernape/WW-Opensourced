__d("WAWebOpenChatWithContactAction", [
    "WALogger",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ chatEntryPoint, findChatOrigin, opts, targetId }) {
        return o("WAWebFindChatAction").findOrCreateLatestChat(targetId, findChatOrigin).then(({ chat })=>o("WAWebCmd").Cmd.openChatFromUnread({
                chat,
                chatEntryPoint
            }).then((e)=>{
                if (e) {
                    if (opts?.skipComposeBoxFocus !== true) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                    }
                    if (!(opts == null || opts.onOpened == null)) {
                        opts.onOpened(chat);
                    }
                }
            })).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[open-chat-with-contact] failed to find or open chat"
            ]))).catching(r("getErrorSafe")(t)).sendLogs(`open-chat-with-contact-failed-${chatEntryPoint}`);
        });
    }
    l.openChatWithContact = s;
}, 98);