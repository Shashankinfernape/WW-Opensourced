__d("WAWebConsumerPaymentsHomeLogger", [
    "WALogger",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = "BR";
    function d() {
        g("settings", o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PAYMENTS_ROW);
    }
    function m() {
        f("payment_home", o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PASSKEY_BLOCKED_EDIT_DELETE_PIX);
    }
    const p = {
        [(u = o("WAWebWamEnumMessageChatType")).MESSAGE_CHAT_TYPE.OTHER]: "other",
        [u.MESSAGE_CHAT_TYPE.INDIVIDUAL]: "individual",
        [u.MESSAGE_CHAT_TYPE.GROUP]: "group",
        [u.MESSAGE_CHAT_TYPE.STATUS]: "status",
        [u.MESSAGE_CHAT_TYPE.BROADCAST]: "broadcast",
        [u.MESSAGE_CHAT_TYPE.CHANNEL]: "channel"
    };
    function _(e) {
        return p[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e)] ?? "other";
    }
    function f(e, PASSKEY_BLOCKED_EDIT_DELETE_PIX, n) {
        y({
            actionTarget: PASSKEY_BLOCKED_EDIT_DELETE_PIX ?? undefined,
            paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
            paymentsCountryCode: c,
            queryParams: h(n),
            screen: e
        });
    }
    function g(e, PAYMENTS_ROW) {
        y({
            actionTarget: PAYMENTS_ROW ?? undefined,
            paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
            paymentsCountryCode: c,
            screen: e
        });
    }
    function h(e) {
        if (e != null) {
            return JSON.stringify(e);
        }
    }
    function y(e) {
        const t = new (o("WAWebPaymentsUserActionWamEvent")).PaymentsUserActionWamEvent(e);
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "ConsumerPaymentsHome Log"
        ])));
        t.commit();
    }
    l.logPaymentsRowClick = d;
    l.logPasskeyBlockedEditDeletePixView = m;
    l.getChatTypeForLogging = _;
}, 98);