__d("WAWebMaybeClearChatAiThreads", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e.id.isBot()) {
            e.aiThreads?.clear();
        }
    }
    i.maybeClearAiThreadsForChat = e;
}, 66);