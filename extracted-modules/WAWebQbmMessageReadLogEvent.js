__d("WAWebQbmMessageReadLogEvent", [
    "Promise",
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebInAppSignupInfoStore",
    "WAWebPrivacySettings",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageReadWamEvent",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, msg, readSource }) {
            if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
                yield o("WAWebInAppSignupInfoStore").ensureInAppSignupInfoHydrated();
            }
            new (o("WAWebQBMLoggerBuilder")).QBMLoggerBuilder(msg, chat).addCommonFields().addAttributionFields().addIasFields().log((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    let s;
                    const chat_contact = chat.contact;
                    const d = !!(chat_contact.id?.isUser() && ((s = chat_contact.name) != null && s.length || chat_contact.isUsernameContact));
                    const m = o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts !== o("WAWebPrivacySettings").ALL_NONE.none;
                    const p = chat.muteExpiration != null && chat.muteExpiration > 0;
                    const _ = yield (e || (e = n("Promise"))).all([
                        o("WAWebChatThreadLogging").getMessageIDHMAC(msg.id.toString()),
                        o("WAWebChatThreadLogging").getChatThreadIDHMAC(chat.id.toString())
                    ]);
                    const f = _[0];
                    const g = _[1];
                    new (o("WAWebQbmMessageReadWamEvent")).QbmMessageReadWamEvent(babelHelpers.extends({}, t, {
                        isInsubContact: d,
                        isMuted: p,
                        messageHasButton: t.buttonValueJsonArray != null && t.buttonValueJsonArray !== "[]",
                        messageHasUrl: (t.urlUniqueCountInt ?? 0) > 0,
                        messageIdHmac: f ?? undefined,
                        readReceiptsEnabled: m,
                        readSource,
                        threadIdHmac: g ?? ""
                    })).commit();
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return u.apply(this, arguments);
    }
    l.logQbmMessageRead = s;
}, 98);