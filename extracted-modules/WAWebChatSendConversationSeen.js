__d("WAWebChatSendConversationSeen", [
    "WATimeUtils",
    "WAWebApiAddActiveMessageRange",
    "WAWebApiChat",
    "WAWebMarkChatAsReadSync",
    "WAWebMessageRangeUtils",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, key, threadId, unreadDelta }) {
            const l = o("WATimeUtils").unixTimeMs();
            if (unreadDelta === -1) {
                const s = yield r("WAWebMarkChatAsReadSync").getMarkChatAsReadMutation(l, true, chat.id);
                const u = chat.id.toString();
                yield o("WAWebMessageRangeUtils").lockForMessageRangeSync([], [
                    s
                ], function() {
                    return o("WAWebApiAddActiveMessageRange").addActiveMessageRange(chat.id.toString(), "markChatAsRead", s.binarySyncAction);
                });
                yield o("WAWebApiChat").updateChatForMarkAsReadSync(u);
                return {
                    fullyReadThreadIds: []
                };
            }
            return yield o("WAWebSendReadReceiptJob").markChatRead(chat, key, threadId);
        });
        return s.apply(this, arguments);
    }
    l.sendConversationSeen = e;
}, 98);