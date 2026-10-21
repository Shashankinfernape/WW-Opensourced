__d("WAWebMentionPickerActionLoggingUtils", [
    "WAWebChatThreadLogging",
    "WAWebMentionPickerActionWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, mentionType, isAGroup = e.groupMetadata != null) {
            const r = yield o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid());
            new (o("WAWebMentionPickerActionWamEvent")).MentionPickerActionWamEvent({
                isAGroup,
                mentionType,
                threadId: r ?? ""
            }).commit();
        });
        return s.apply(this, arguments);
    }
    l.logMentionPickerAction = e;
}, 98);