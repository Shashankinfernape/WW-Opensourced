__d("WAWebBrOptionsToPayActions", [
    "fbt",
    "WAWebBrOptionsToPayResolver",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "filterNulls"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
        if (o("WAWebBrPaymentSettingsUtils").hasValidCard(e)) {
            return null;
        }
        const r = o("WAWebBrOptionsToPayResolver").resolveOptionsToPay({
            candidates: d(e, t, n),
            hasUnusableServerOrdering: e.hasUnusableServerPaymentMethodOrdering === true,
            isSettled: false,
            orderedMethods: e.orderedPaymentMethods,
            serverRankSource: e.paymentMethodRankSource
        });
        if (r == null) {
            return null;
        }
        return [
            r.inline.action,
            c(r.sheet)
        ];
    }
    function u(e, t, n) {
        if (n.isFromTemplate !== true || !e.every((e)=>e.name === "payment_request")) {
            return null;
        }
        const a = o("WAWebBrOptionsToPayResolver").resolveOptionsToPay({
            candidates: r("filterNulls")(e.map((e)=>m(e, t, n))),
            isSettled: false
        });
        if (a == null) {
            return null;
        }
        return [
            a.inline.action,
            c(a.sheet)
        ];
    }
    function c(sheet) {
        return {
            label: s._("Options to pay"),
            menu: {
                title: s._("Options to pay"),
                items: sheet.map((e)=>e.row)
            },
            testid: "br-options-to-pay-button"
        };
    }
    function d(e, t, n) {
        return r("filterNulls")([
            o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(e) ? p(o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(o("WAWebBrPaymentMethodKey").getPixFlowType(e.paymentSettings)), "pix", (n)=>o("WAWebGetBrazilnteractiveActions").getCopyPixCodeInteractiveAction({
                    msgKey: t,
                    orderInfo: e,
                    surface: n
                })) : null,
            o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(n) && o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(e) ? p(o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK, "payment_link", (n)=>o("WAWebGetBrazilnteractiveActions").getOpenPaymentLinkInteractiveAction({
                    msgKey: t,
                    orderInfo: e,
                    surface: n
                })) : null,
            o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(n) && o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(e) ? p(o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO, "boleto", (n)=>o("WAWebGetBrazilnteractiveActions").getCopyBoletoCodeInteractiveAction({
                    msgKey: t,
                    orderInfo: e,
                    surface: n
                })) : null
        ]);
    }
    function m(e, t, n) {
        const a = function(a) {
            return r("WAWebGetInteractiveActionsFromButtons")([
                e
            ], t, n, a).at(0);
        };
        const paymentRequestInfo = e.data.paymentRequestInfo;
        if (paymentRequestInfo == null) {
            return null;
        }
        if (paymentRequestInfo.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE) {
            return p(o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(paymentRequestInfo.pixFlowType), "pix", a);
        }
        if (paymentRequestInfo.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK) {
            return p(o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK, "payment_link", a);
        }
        if (paymentRequestInfo.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO) {
            return p(o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO, "boleto", a);
        }
        if (paymentRequestInfo.paymentType === o("WAWebBrPaymentRequest").PaymentRequestCtaType.OFFSITE_CARD_PAY) {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${paymentRequestInfo.paymentType}`);
        })();
    }
    function p(methodKey, t, n) {
        const r = n(o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA);
        if (r == null) {
            return null;
        }
        return {
            methodKey,
            value: {
                action: r,
                row: {
                    key: t,
                    label: _(t),
                    onSelect: function() {
                        let e;
                        if ((e = n(o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.OPTIONS_SHEET)) == null || e.onClick == null) {
                            return undefined;
                        }
                        return e.onClick();
                    },
                    testid: f(t)
                }
            }
        };
    }
    function _(e) {
        switch(e){
            case "pix":
                return s._("Pix code");
            case "payment_link":
                return s._("Payment link");
            case "boleto":
                return s._("Boleto code");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function f(e) {
        switch(e){
            case "pix":
                return "br-options-to-pay-row-pix";
            case "payment_link":
                return "br-options-to-pay-row-payment-link";
            case "boleto":
                return "br-options-to-pay-row-boleto";
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    l.getOrderDetailsOptionsToPayActions = e;
    l.getPaymentRequestOptionsToPayActions = u;
}, 226);