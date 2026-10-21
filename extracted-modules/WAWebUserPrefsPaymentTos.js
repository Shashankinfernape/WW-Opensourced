__d("WAWebUserPrefsPaymentTos", [
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return e != null && typeof e?.accepted === "boolean" && o("WAWebUserPrefsTypes").PaymentNotice.cast(e.paymentNotice) != null;
    }
    function u() {
        const e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.PAYMENT_TOS);
        if (s(e) && e) {
            return e;
        }
        return null;
    }
    function c(t) {
        let paymentNotice;
        e: {
            if (t.paymentNotice === o("WAWebProtobufSyncAction.pb").SyncActionValue$PaymentTosAction$PaymentNotice.BR_PAY_PRIVACY_POLICY) {
                paymentNotice = o("WAWebUserPrefsTypes").PaymentNotice.BR_PAY_PRIVACY_POLICY;
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.paymentNotice}`);
        }
        const t_accepted = t.accepted;
        if (paymentNotice == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "payment tos notice is null"
            ]))).sendLogs("payment tos notice is null");
            return;
        }
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").KEYS.PAYMENT_TOS, {
            paymentNotice,
            accepted: t_accepted
        });
    }
    l.isPaymentTosValid = s;
    l.getPaymentTos = u;
    l.setPaymentTos = c;
}, 98);