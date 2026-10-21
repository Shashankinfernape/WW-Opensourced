__d("WAWebUprSenderWamLogger", [
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "chat";
    const s = "upr_attachment_tray";
    const u = "upr_send";
    const flow_type = "pux";
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ country, eventParams, queryParams }) {
            new (o("WAWebPaymentsUserActionWamEvent")).PaymentsUserActionWamEvent(babelHelpers.extends({}, eventParams, {
                paymentsCountryCode: country.toUpperCase(),
                paymentsEventId: yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId(),
                queryParams: JSON.stringify(babelHelpers.extends({}, queryParams, {
                    platform: "upr"
                }))
            })).commit();
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield d({
                country: t,
                eventParams: {
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
                    referral: e,
                    screen: s
                }
            });
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield d({
                country: t,
                eventParams: {
                    actionTarget: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PAYMENT_KEY_BUTTON,
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
                    referral: e,
                    screen: s
                }
            });
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield d({
                country: t,
                eventParams: {
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
                    referral: e,
                    screen: u
                },
                queryParams: {
                    flow_type
                }
            });
        });
        return y.apply(this, arguments);
    }
    function C(e, t, n, r) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r, a) {
            const i = n === 1;
            const queryParams = {
                flow_type
            };
            if (i) {
                if (r != null) {
                    queryParams.account_type = r;
                }
                if (a != null) {
                    queryParams.identifier_type = a;
                }
            } else {
                queryParams.account_count = n;
            }
            yield d({
                country: t,
                eventParams: {
                    actionTarget: i ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.SUMMARY_CARD_SINGLE : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.SUMMARY_CARD_MULTI,
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
                    referral: e,
                    screen: u
                },
                queryParams
            });
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            yield d({
                country: t,
                eventParams: {
                    actionTarget: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.SEND_BUTTON,
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
                    referral: e,
                    screen: u
                },
                queryParams: babelHelpers.extends({
                    flow_type
                }, n == null ? {} : {
                    order_amount: String(n)
                })
            });
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield d({
                country: t,
                eventParams: {
                    actionTarget: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.CLOSE_BUTTON,
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
                    referral: e,
                    screen: u
                },
                queryParams: {
                    flow_type
                }
            });
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            yield d({
                country: t,
                eventParams: {
                    actionTarget: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.SEND_BUTTON,
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.API,
                    referral: e,
                    screen: u
                },
                queryParams: {
                    flow_type,
                    result: n
                }
            });
        });
        return k.apply(this, arguments);
    }
    l.logUprAttachmentTrayView = p;
    l.logUprAttachmentTrayClick = f;
    l.logUprSendSheetView = h;
    l.logUprSendSummaryCardView = C;
    l.logUprSendButtonClick = v;
    l.logUprSendSheetDismiss = R;
    l.logUprSendResult = E;
}, 98);