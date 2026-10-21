__d("WAWebBrLastUsedPaymentMethodStoreLazy", [
    "JSResourceForInteraction",
    "WALogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        r("JSResourceForInteraction")("WAWebBrLastUsedPaymentMethodStore").__setRef("WAWebBrLastUsedPaymentMethodStoreLazy").load().then(({ recordLastUsedBrPaymentMethod })=>recordLastUsedBrPaymentMethod(t, n)).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BR_LAST_USED_PAYMENT_METHOD] store load failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("br-last-used-payment-method-load-failed");
        });
    }
    l.recordLastUsedBrPaymentMethodLazy = s;
}, 98);