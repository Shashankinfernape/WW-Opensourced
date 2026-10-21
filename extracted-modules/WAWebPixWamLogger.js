__d("WAWebPixWamLogger", [
    "WALogger",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMessageChatType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "BR";
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ actionTarget, chat, extraAttributes = {}, paymentActionType, pixData, previousScreenName, referral, screen }) {
            const paymentsEventId = yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId();
            extraAttributes.payment_method = "pix";
            if (chat) {
                extraAttributes.chat_type = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(chat.id)].toLowerCase();
            }
            if (pixData) {
                extraAttributes.key_type = String(pixData.key_type);
            }
            const _ = {
                actionTarget,
                paymentActionType,
                paymentsCountryCode: s,
                previousScreenName,
                queryParams: JSON.stringify(extraAttributes),
                referral,
                screen,
                paymentsEventId
            };
            p(_);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ actionTarget, paymentActionType, previousScreenName, queryParams, referral, screen }) {
            p({
                actionTarget,
                paymentActionType,
                paymentsCountryCode: s,
                paymentsEventId: yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId(),
                previousScreenName,
                queryParams: queryParams != null ? JSON.stringify(queryParams) : undefined,
                referral,
                screen
            });
        });
        return m.apply(this, arguments);
    }
    function p(t) {
        const n = new (o("WAWebPaymentsUserActionWamEvent")).PaymentsUserActionWamEvent(t);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "ConsumerPaymentsHome Log"
        ])));
        n.commit();
    }
    l.logPixSenderEvent = u;
    l.logPixSessionEvent = d;
}, 98);