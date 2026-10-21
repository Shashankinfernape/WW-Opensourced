__d("WAWebPreloadChatMessagesJob", [
    "WAWebChatLoadMessages",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(e.hasPreloaded || e.pendingInitialLoading)) {
                o("WAWebChatLoadMessages").loadEarlierMsgs({
                    chat: e,
                    msgCollection: e.msgs
                }).then(()=>{
                    e.trigger("msgs:preloaded");
                });
                e.hasPreloaded = true;
            }
        });
        return s.apply(this, arguments);
    }
    l.preloadChatMessages = e;
}, 98);