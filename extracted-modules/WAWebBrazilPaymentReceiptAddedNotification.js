__d("WAWebBrazilPaymentReceiptAddedNotification", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebFrontendContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentDetailsStrings",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebOpenPaymentDetails").__setRef("WAWebBrazilPaymentReceiptAddedNotification").load();
    }, "WAWebOpenPaymentDetails");
    function MComponent(t, n) {
        const a = _(n);
        if (a == null) {
            return {
                text: o("WAWebPaymentDetailsStrings").getPlainReceiptAddedNotice(),
                inlineCtaText: null,
                handleClick: null
            };
        }
        return {
            text: p(t),
            inlineCtaText: <>{o("WAWebPaymentDetailsStrings").getViewDetailsLabel()}</>,
            handleClick: function() {
                f(a).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[br-payment-state] could not open the payment details"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("br-payment-details-notice-open-failed");
                });
            }
        };
    }
    function p(e) {
        return o("WAWebPaymentDetailsStrings").getReceiptAddedNotice(o("WAWebFrontendContactGetters").getFormattedName(e.contact) || o("WAWebWidFormat").widToFormattedUser(e.id));
    }
    function _([t]) {
        if (typeof t !== "string") {
            return null;
        }
        const n = h(t);
        if (n != null && o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForReceiptNotice(n.fromMe)) {
            return n;
        }
        return null;
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = y(e);
            const r = n.map((e)=>o("WAWebMsgCollection").MsgCollection.get(e)).find(Boolean) ?? (yield o("WAWebMsgCollection").MsgCollection.getMessagesById(n)).messages[0];
            if (r == null || !o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForMsg(r)) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] receipt notice has no payment details to open"
                ]))).sendLogs("br-payment-details-notice-payment-missing");
                return;
            }
            const a = yield d();
            const a_openPaymentDetails = a.openPaymentDetails;
            a_openPaymentDetails(r);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        try {
            return r("WAWebMsgKey").fromString(e);
        } catch (e) {
            return null;
        }
    }
    function y(e) {
        const t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
        if (t == null) {
            return [
                e.toString()
            ];
        }
        return [
            e.toString(),
            t.toString()
        ];
    }
    l.getBrazilPaymentReceiptAddedNotification = MComponent;
    l.getBrazilPaymentReceiptAddedPreview = p;
}, 98);