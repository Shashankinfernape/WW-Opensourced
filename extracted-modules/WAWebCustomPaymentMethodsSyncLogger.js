__d("WAWebCustomPaymentMethodsSyncLogger", [
    "$InternalEnum",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebWamEnumCustomPaymentMethodsSyncStatus",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "custom_payment_methods_sync";
    const u = "BR";
    const c = Object.freeze({
        APPLY_REMOVE: (e = o("WAWebWamEnumPaymentActionTargets")).PAYMENT_ACTION_TARGETS.SYNCD_APPLY_REMOVE,
        APPLY_STORE: e.PAYMENT_ACTION_TARGETS.SYNCD_APPLY_STORE,
        SEND_REMOVE: e.PAYMENT_ACTION_TARGETS.SYNCD_SEND_REMOVE,
        SEND_STORE: e.PAYMENT_ACTION_TARGETS.SYNCD_SEND_STORE
    });
    const d = n("$InternalEnum")({
        FRONTEND_DISPATCH_FAILED: "frontend_dispatch_failed",
        MALFORMED_MUTATION: "malformed_mutation",
        TRANSPORT_FLUSH_FAILED: "transport_flush_failed",
        UNSUPPORTED_OPERATION: "unsupported_operation"
    });
    function m({ actionTarget, attribution, errorCode, status }) {
        const i = {
            actionTarget,
            customPaymentMethodsSyncStatus: status,
            paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.API,
            paymentsCountryCode: u,
            screen: s
        };
        if (errorCode != null) {
            i.paymentsErrorCode = errorCode;
        }
        if (attribution?.referral != null) {
            i.referral = attribution.referral;
        }
        if (attribution?.referralContext != null) {
            i.referralContext = attribution.referralContext;
        }
        new (o("WAWebPaymentsUserActionWamEvent")).PaymentsUserActionWamEvent(i).commit();
    }
    l.SYNC_ACTION_TARGETS = c;
    l.SYNC_STATUS = o("WAWebWamEnumCustomPaymentMethodsSyncStatus").CUSTOM_PAYMENT_METHODS_SYNC_STATUS;
    l.SyncErrorCode = d;
    l.logCustomPaymentMethodsSyncEvent = m;
}, 98);