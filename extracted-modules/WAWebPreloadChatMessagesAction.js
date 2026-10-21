__d("WAWebPreloadChatMessagesAction", [
    "WAWebABProps",
    "WAWebCmd",
    "WAWebPreloadChatMessagesJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(!o("WAWebABProps").getABPropConfigValue("web_preload_chat_messages") || !o("WAWebCmd").Cmd.isOfflineDeliveryEnd)) {
                yield o("WAWebPreloadChatMessagesJob").preloadChatMessages(e);
            }
        });
        return s.apply(this, arguments);
    }
    l.preloadChatMessagesAction = e;
}, 98);