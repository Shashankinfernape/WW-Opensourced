__d("WAWebNotificationBanner", [
    "WAWebBaseNotificationBanner",
    "WAWebEmoji",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t({ actions, alwaysHighlightMsg, body, contextMenuItems, data, doNotOpenChat, footer, icon, isReplyable, key, msgId, onClick, renotify, requireInteraction, showViaServiceWorker, suppressBanner, tag, title, wid }) {
            return e.call(this, {
                key,
                msgId,
                options: {
                    actions,
                    alwaysHighlightMsg,
                    body: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(body),
                    contextMenuItems,
                    data,
                    doNotOpenChat,
                    footer,
                    icon: r("WAWebURLUtils").relToAbs(icon),
                    isReplyable,
                    notification: window.Notification,
                    onClick,
                    renotify,
                    requireInteraction,
                    showViaServiceWorker,
                    suppressBanner,
                    title: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(title)
                },
                tag,
                wid
            }) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebBaseNotificationBanner"));
    l.default = e;
}, 98);