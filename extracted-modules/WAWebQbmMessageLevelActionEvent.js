__d("WAWebQbmMessageLevelActionEvent", [
    "Promise",
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebInAppSignupInfoStore",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageLevelActionWamEvent",
    "WAWebWamEnumContactType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "chatsFolderType",
        "deltaTime",
        "hsmTagStr",
        "messageTypeStr",
        "qbmFlag"
    ];
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, messageActionEntryPoint, messageLevelAction, msg }) {
            if (o("WAWebABProps").getABPropConfigValue("web_biz_quality_telemetry_message_level_actions_enabled")) {
                if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
                    yield o("WAWebInAppSignupInfoStore").ensureInAppSignupInfoHydrated();
                }
                new (o("WAWebQBMLoggerBuilder")).QBMLoggerBuilder(msg, chat).addCommonFields().addAttributionFields().addIasFields().log((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        const d = o("WAWebFrontendContactGetters").getIsMyContact(chat.contact);
                        const m = yield (s || (s = n("Promise"))).all([
                            o("WAWebChatThreadLogging").getMessageIDHMAC(msg.id.toString()),
                            o("WAWebChatThreadLogging").getChatThreadIDHMAC(chat.id.toString())
                        ]);
                        const p = m[0];
                        const _ = m[1];
                        const { chatsFolderType, deltaTime, hsmTagStr, messageTypeStr, qbmFlag } = t;
                        const b = babelHelpers.objectWithoutPropertiesLoose(t, e);
                        new (o("WAWebQbmMessageLevelActionWamEvent")).QbmMessageLevelActionWamEvent(babelHelpers.extends({}, b, {
                            contactType: b.contactType ?? o("WAWebWamEnumContactType").CONTACT_TYPE.CONSUMER,
                            messageActionEntryPoint,
                            messageLevelAction,
                            messageHasUrl: (t.urlUniqueCountInt ?? 0) > 0,
                            isInsubContact: d,
                            messageIdHmac: p ?? undefined,
                            threadIdHmac: _ ?? ""
                        })).commit();
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
            }
        });
        return c.apply(this, arguments);
    }
    l.logQbmMessageLevelAction = u;
}, 98);