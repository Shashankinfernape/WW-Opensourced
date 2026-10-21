__d("WAWebChatMuteBridge", [
    "WAWebMuteChatSync",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ _expirationNew, chatId, expiration, mentionAllMuteExpiration }) {
            const l = yield r("WAWebMuteChatSync").generateMuteMutation(chatId, expiration, mentionAllMuteExpiration);
            const s = {
                muteExpiration: expiration
            };
            if (mentionAllMuteExpiration != null) {
                s.mentionAllMuteExpiration = mentionAllMuteExpiration;
            }
            const u = o("WAWebSyncdCoreApi").lockForSync([
                "chat"
            ], [
                l
            ], function([t]) {
                return t.merge(chatId.toString(), s);
            }).then(()=>({
                    status: 200
                }));
            return u;
        });
        return s.apply(this, arguments);
    }
    l.sendConversationMute = e;
}, 98);