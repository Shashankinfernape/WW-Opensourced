__d("WAWebCustomPaymentMethods", [
    "WAWebEventEmitter",
    "WAWebPaymentMethodTypeRegistry",
    "WAWebQuickReplySmartDefaults",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsTypes"
], function(t, n, r, o, a, i, l) {
    const e = "custom_payment_methods_change";
    const s = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            o("WAWebPaymentMethodTypeRegistry").registerPaymentMethodSmartDefault(o("WAWebUserPrefsTypes").WACustomPaymentMethodType.PIX_KEY, o("WAWebQuickReplySmartDefaults").getOrUpdatePixKeySmartDefault);
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.setCustomPaymentMethods = function(n) {
            o("WAWebUserPrefsCustomPaymentMethods").setCustomPaymentMethods(n);
            o("WAWebPaymentMethodTypeRegistry").runAllPaymentMethodSmartDefaults();
            this.trigger(e);
        };
        return n;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.CUSTOM_PAYMENT_METHODS_CHANGE_EVENT = e;
    l.CustomPaymentMethods = u;
}, 98);