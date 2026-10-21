__d("WAWebBrPaymentSettingsUtils", [
    "WAWebBizOrderDetailsParams"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE) != null;
    }
    function s(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE) != null;
    }
    function u(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.BOLETO) != null;
    }
    function c(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK) != null;
    }
    function d(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.CARDS) != null || y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_GATEWAY) != null || e.payment_configuration != null && e.payment_configuration.trim() !== "";
    }
    function m(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.BOLETO)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.BOLETO]?.digitable_line;
    }
    function p(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK]?.uri;
    }
    function _(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE]?.code;
    }
    function f(e) {
        return y(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE);
    }
    function g(e) {
        return e.paymentSettings?.at(0)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]?.key;
    }
    function h(e) {
        return e.paymentSettings?.at(0)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]?.key_type;
    }
    function y(e, t) {
        return e.paymentSettings?.find(function(e) {
            return e[t];
        });
    }
    l.hasValidDynamicPix = e;
    l.hasValidStaticPix = s;
    l.hasValidBoletoCode = u;
    l.hasValidPaymentLink = c;
    l.hasValidCard = d;
    l.getBoletoCode = m;
    l.getPaymentLinkUri = p;
    l.getDynamicPixCode = _;
    l.getPixStaticCodeSetting = f;
    l.getFirstPixStaticKey = g;
    l.getFirstPixStaticKeyType = h;
    l.findPaymentSetting = y;
}, 98);