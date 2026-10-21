__d("WAWebBrPaymentMethodKey", [
    "$InternalEnum",
    "WAWebBizOrderDetailsParams"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "PIX",
        "PIX_APPSWITCH",
        "PIX_COPYPASTE",
        "PIX_REDIRECT",
        "PIX_DIRECT",
        "BOLETO",
        "PAYMENT_LINK",
        "OFFSITE_CARD_PAY"
    ]);
    function s(e) {
        return e.toUpperCase();
    }
    function u(t) {
        const n = t == null ? e.PIX_REDIRECT : m(t);
        return n;
    }
    function c(e) {
        return d(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE, "flow_type") ?? d(e, o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE, "flow_type");
    }
    function d(e, t, n) {
        const o = e?.find(function(e) {
            return e.type === t;
        });
        const a = o?.[t];
        return a?.[n] ?? null;
    }
    function m(t) {
        return ((t)=>{
            switch(t){
                case "APPSWITCH":
                    return e.PIX_APPSWITCH;
                case "COPYPASTE":
                    return e.PIX_COPYPASTE;
                case "REDIRECT":
                    return e.PIX_REDIRECT;
                case "DIRECT":
                    return e.PIX_DIRECT;
                default:
                    return e.PIX;
            }
        })(t.toUpperCase());
    }
    l.BrPaymentMethodKey = e;
    l.normalizeServerMethodKey = s;
    l.getPixMethodKeyForServerOrdering = u;
    l.getPixFlowType = c;
}, 98);