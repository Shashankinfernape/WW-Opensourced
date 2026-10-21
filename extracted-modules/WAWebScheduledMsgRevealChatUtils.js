__d("WAWebScheduledMsgRevealChatUtils", [
    "WAWebFindChat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isGroup()) {
                return e;
            }
            const t = yield o("WAWebFindChat").findOrCreateLatestChat(e, "scheduledMsgReveal");
            const t_chat = t.chat;
            return t_chat.id;
        });
        return s.apply(this, arguments);
    }
    l.resolveScheduledRevealChat = e;
}, 98);