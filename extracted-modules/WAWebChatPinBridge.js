__d("WAWebChatPinBridge", [
    "WAWebAuraGating",
    "WAWebPinChatLimits",
    "WAWebPinChatSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ _lastPinTime, chatId, newPinTime, timestamp }) {
            const i = newPinTime !== 0;
            const l = yield o("WAWebPinChatSync").PinChatSync.getMutationsForPin(timestamp, i, chatId);
            if (!i) {
                o("WAWebSyncdWamAppState").addUnsetActionCount(1);
            }
            return o("WAWebSyncdCoreApi").lockForSync([
                "chat"
            ], l, function([t]) {
                return t.merge(chatId.toString(), {
                    pin: newPinTime
                });
            }).then(()=>({
                    status: 200
                }));
        });
        return s.apply(this, arguments);
    }
    function u() {
        return o("WAWebPinChatSync").PinChatSync.getLocalChatPins().then((e)=>e.length);
    }
    function c() {
        return o("WAWebPinChatSync").PinChatSync.getLocalNewsletterPins().then((e)=>e.length);
    }
    function d(e) {
        if (e.isNewsletter()) {
            return c();
        }
        return u();
    }
    function m(e) {
        if (e.isNewsletter()) {
            return o("WAWebPinChatLimits").MAX_PINNED_NEWSLETTERS;
        }
        return r("WAWebAuraGating").getPinnedChatsBenefitLimit() ?? o("WAWebPinChatLimits").MAX_PINNED_CHATS;
    }
    function p(e) {
        if (e.isNewsletter()) {
            return o("WAWebPinChatSync").PinChatSync.unpinAllNewsletters();
        }
        return o("WAWebPinChatSync").PinChatSync.unpinAllChats();
    }
    l.setPin = e;
    l.getNumNewslettersPinned = c;
    l.getNumConversationsPinned = d;
    l.getPinLimit = m;
    l.unpinAllConversations = p;
}, 98);