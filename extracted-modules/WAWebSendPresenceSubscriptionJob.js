__d("WAWebSendPresenceSubscriptionJob", [
    "WASmaxPresenceSubscribeRPC",
    "WAWebGetChatRecordByAccountLid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(e);
            const r = n[0]?.tcToken;
            let tCTokenMixinArgs;
            if (r != null) {
                tCTokenMixinArgs = {
                    privacyTokenContentsMixinArgs: {
                        anyElementValue: new Uint8Array(r)
                    }
                };
            }
            o("WASmaxPresenceSubscribeRPC").sendSubscribeRPC({
                presenceTo: o("WAWebWidToJid").userLidtoLidUserJid(e),
                tCTokenMixinArgs
            });
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        o("WASmaxPresenceSubscribeRPC").sendSubscribeRPC({
            presenceTo: o("WAWebWidToJid").widToChatJid(e)
        });
    }
    l.sendUserPresenceSubscription = e;
    l.sendGroupPresenceSubscription = u;
}, 98);