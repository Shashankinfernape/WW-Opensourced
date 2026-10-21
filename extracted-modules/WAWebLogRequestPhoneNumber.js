__d("WAWebLogRequestPhoneNumber", [
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebPnhRequestRevealActionWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action, chatParty, chatType, entryPoint }) {
            const i = o("WAWebChatCollection").ChatCollection.getActive();
            if (i) {
                new (o("WAWebPnhRequestRevealActionWamEvent")).PnhRequestRevealActionWamEvent({
                    pnhChatType: chatType,
                    pnhChatParty: chatParty,
                    threadId: yield o("WAWebChatThreadLogging").getChatThreadID(i.id.toJid()),
                    pnhAction: action,
                    pnhEntryPoint: entryPoint
                }).commit();
            }
        });
        return s.apply(this, arguments);
    }
    l.logPnhRequestRevealActionHelper = e;
}, 98);