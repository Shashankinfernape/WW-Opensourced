__d("WAWebEphemeralGenerateSystemMessage", [
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebContactSystemMsg").genDisappearingModeUpdateSystemMsg(e.id, t, n);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: r.from,
                newMsg: r,
                handleSingleMsgOrigin: "ephemeralSystemMsg",
                preserveOrder: false
            });
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebContactSystemMsg").genDisappearingModeUnsupportedSystemMsg(e.id);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: t.from,
                newMsg: t,
                handleSingleMsgOrigin: "ephemeralUnsupportedSystemMsg",
                preserveOrder: false
            });
        });
        return c.apply(this, arguments);
    }
    l.generateEphemeralNotificationTemplateSystemMessage = e;
    l.generateEphemeralUnsupportedNotificationTemplateSystemMessage = u;
}, 98);