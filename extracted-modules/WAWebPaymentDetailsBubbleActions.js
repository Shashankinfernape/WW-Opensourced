__d("WAWebPaymentDetailsBubbleActions", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrazilPaymentState",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebMsgCollection",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
    "WAWebPaymentDetailsStrings",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconIcAdd.react",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebPaymentDetailsDialogs.react").__setRef("WAWebPaymentDetailsBubbleActions").load();
    }, "WAWebPaymentDetailsDialogs");
    function m({ interactivePayload, msgKey }, t) {
        const i = o("WAWebPaymentDetailsModels").getPaymentDetailsPov(msgKey.fromMe);
        const l = o("WAWebBrazilPaymentState").getBrazilPaymentState(interactivePayload);
        const s = o("WAWebBrazilPaymentState").getPaymentDetailsStatus(l);
        const u = [];
        if (o("WAWebPaymentDetailsStatusPolicy").canMarkAsPaid(i, s)) {
            u.push({
                label: o("WAWebPaymentDetailsStrings").getMarkAsPaidLabel(),
                onClick: function() {
                    p(msgKey, ({ confirmMarkAsPaid }, t, n)=>confirmMarkAsPaid(t, n), o("WAWebPaymentDetailsStrings").getMarkAsPaidFailedToast);
                },
                testid: "payment-details-bubble-mark-as-paid"
            });
        }
        if (t != null && o("WAWebPaymentDetailsStatusPolicy").showsCopyCta(i, s)) {
            u.push(t);
        }
        if (o("WAWebPaymentDetailsStatusPolicy").canAttachReceipt(i, l.receiptMsgId)) {
            u.push({
                label: o("WAWebPaymentDetailsStrings").getAddReceiptLabel(),
                Icon: r("WDSIconIcAdd.react"),
                onClick: function() {
                    p(msgKey, ({ openAddReceiptDialog }, t, n)=>openAddReceiptDialog(t, n), o("WAWebPaymentDetailsStrings").getAddReceiptFailedToast);
                },
                testid: "payment-details-bubble-add-receipt"
            });
        }
        return u;
    }
    function p(msgKey, n, a) {
        const i = o("WAWebMsgCollection").MsgCollection.get(msgKey);
        if (i == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-details] payment message left the collection before its dialog opened"
            ])));
            return;
        }
        const l = o("WAWebFrontendContactGetters").getFormattedName(o("WAWebFrontendMsgGetters").getChat(i).contact);
        d().then((e)=>n(e, i, l)).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-details] could not open a payment details dialog"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("payment-details-dialogs-load-failed");
            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                msg: a()
            }));
        });
    }
    l.getPaymentDetailsBubbleActions = m;
}, 98);