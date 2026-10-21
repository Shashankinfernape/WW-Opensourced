__d("WAWebOrderDetailsCloudApiSignalResolver", [
    "WALogger",
    "WAWebBizOrderDetailsParams",
    "WAWebOrderPaymentStatus",
    "WAWebWamEnumCloudApiSignalCtaAction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n) {
        const r = u(n);
        if (r == null) {
            return null;
        }
        const ctaButtonIndex = c(t, r.paymentSettingType);
        if (ctaButtonIndex == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "resolveOrderDetailsCloudApiSignal: ",
                " does not map to exactly one delivered payment_settings entry"
            ])), n.valueOf()).sendLogs("cloud-api-signal-payment-setting-not-unique");
            return null;
        }
        return {
            ctaAction: r.ctaAction,
            ctaButtonIndex
        };
    }
    function u(e) {
        switch(e){
            case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX:
                return {
                    ctaAction: o("WAWebWamEnumCloudApiSignalCtaAction").CLOUD_API_SIGNAL_CTA_ACTION.COPY_PIX_CODE,
                    paymentSettingType: o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE
                };
            case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO:
                return {
                    ctaAction: o("WAWebWamEnumCloudApiSignalCtaAction").CLOUD_API_SIGNAL_CTA_ACTION.COPY_BOLETO_CODE,
                    paymentSettingType: o("WAWebBizOrderDetailsParams").PaymentSettingType.BOLETO
                };
            case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PAYMENT_LINK:
                return {
                    ctaAction: o("WAWebWamEnumCloudApiSignalCtaAction").CLOUD_API_SIGNAL_CTA_ACTION.OPEN_PAYMENT_LINK,
                    paymentSettingType: o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK
                };
            case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.CPI:
            case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.NATIVE:
                return null;
        }
    }
    function c(e, paymentSettingType) {
        const r = [];
        (e.paymentSettings ?? []).forEach((e, n)=>{
            if (e[paymentSettingType] != null) {
                r.push(n);
            }
        });
        if (r.length === 1) {
            return r[0];
        }
        return null;
    }
    l.resolveOrderDetailsCloudApiSignal = s;
}, 98);