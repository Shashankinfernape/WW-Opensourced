__d("WAWebGetBrazilnteractiveActions", [
    "fbt",
    "WALogger",
    "WAWebBizOrderDetailsParams",
    "WAWebBrLastUsedPaymentMethodStoreLazy",
    "WAWebBrPaymentInteractionLogger",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebCopyTextWithToast",
    "WAWebExternalLink.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebPixCodeUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsTypes",
    "WDSIconIcContentCopy.react",
    "WDSIconIcOpenInNew.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    function p(e, t) {
        return {
            label: s._("Copy Pix key"),
            onClick: function() {
                const n = o("WAWebBrPaymentSettingsUtils").getFirstPixStaticKey(e);
                const r = o("WAWebUserPrefsTypes").PixKeyType.cast(o("WAWebBrPaymentSettingsUtils").getFirstPixStaticKeyType(e));
                v({
                    code: n == null ? null : o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(n, r),
                    failureMsg: s._("Couldn't copy Pix key"),
                    onCopy: function() {
                        _(t);
                    },
                    successMsg: s._("Pix key copied")
                });
            },
            Icon: r("WDSIconIcContentCopy.react")
        };
    }
    function _(t) {
        const r = o("WAWebMsgCollection").MsgCollection.get(t)?.safe();
        if (r == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payments] copy Pix key log skipped, message left the collection"
            ])));
            return;
        }
        if (r.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payments] copy Pix key log skipped, unexpected message type ",
                ""
            ])), r.type);
            return;
        }
        o("WAWebBrPaymentInteractionLogger").logPaymentInfoOrderDetailsInteractiveActionForRecepient(r);
    }
    function f(e) {
        const n = o("WAWebMsgCollection").MsgCollection.get(e)?.safe();
        if (n != null && n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return n;
        }
        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[br-payments] payment action log skipped, message left the collection"
        ])));
        return null;
    }
    function g({ msgKey, orderInfo, surface = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA }) {
        return {
            label: s._("Open payment link"),
            onClick: function() {
                const e = o("WAWebBrPaymentSettingsUtils").getPaymentLinkUri(orderInfo);
                if (e == null) {
                    b(s._("Couldn't open payment link"));
                    return;
                }
                o("WAWebExternalLink.react").openExternalLink(e);
                const a = f(msgKey);
                if (a != null) {
                    o("WAWebBrPaymentInteractionLogger").logAPIMerchantPaymentMethodClickEvent({
                        msg: a,
                        orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PAYMENT_LINK,
                        orderInfo,
                        surface
                    }).catch(r("WAWebNoop"));
                    o("WAWebBrLastUsedPaymentMethodStoreLazy").recordLastUsedBrPaymentMethodLazy(a, o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK);
                }
            },
            Icon: r("WDSIconIcOpenInNew.react")
        };
    }
    function h({ msgKey, orderInfo, surface = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA }) {
        return {
            label: s._("Copy boleto code"),
            onClick: function() {
                v({
                    code: o("WAWebBrPaymentSettingsUtils").getBoletoCode(orderInfo),
                    failureMsg: s._("Couldn't copy boleto code"),
                    onCopy: function() {
                        const e = f(msgKey);
                        if (e != null) {
                            o("WAWebBrPaymentInteractionLogger").logAPIMerchantPaymentMethodClickEvent({
                                msg: e,
                                orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO,
                                orderInfo,
                                surface
                            }).catch(r("WAWebNoop"));
                            o("WAWebBrLastUsedPaymentMethodStoreLazy").recordLastUsedBrPaymentMethodLazy(e, o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO);
                        }
                    },
                    successMsg: s._("Boleto code copied")
                });
            },
            Icon: r("WDSIconIcContentCopy.react")
        };
    }
    function y(e, t) {
        const n = o("WAWebBrPaymentSettingsUtils").getPixStaticCodeSetting(t);
        if (n == null) {
            return null;
        }
        const key = n[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE].key;
        const merchant_name = n[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE].merchant_name;
        const { totalAmount, referenceId } = t;
        if (key == null || merchant_name == null || totalAmount == null) {
            return null;
        }
        const code = o("WAWebPixCodeUtils").getPixStaticCode({
            merchantName: merchant_name,
            pixKey: key,
            referenceId,
            transactionAmount: totalAmount.toFixed(2)
        });
        const successMsg = s._("Pix code copied");
        const failureMsg = s._("Could not copy Pix code");
        return {
            label: s._("Copy Pix code"),
            onClick: function() {
                v({
                    code,
                    failureMsg,
                    onCopy: function() {
                        const n = f(e);
                        if (n != null) {
                            o("WAWebBrPaymentInteractionLogger").logPaymentRequestInteractiveAction(n, t);
                        }
                    },
                    successMsg
                });
            },
            Icon: r("WDSIconIcContentCopy.react")
        };
    }
    function C({ msgKey, orderInfo, surface = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA }) {
        return {
            label: s._("Copy Pix code"),
            onClick: function() {
                const e = o("WAWebBrPaymentSettingsUtils").getDynamicPixCode(orderInfo);
                v({
                    code: e == null ? null : o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(e),
                    failureMsg: s._("Couldn't copy Pix Code"),
                    onCopy: function() {
                        const e = f(msgKey);
                        if (e != null) {
                            o("WAWebBrPaymentInteractionLogger").logAPIMerchantPaymentMethodClickEvent({
                                msg: e,
                                orderAcceptedPaymentMethod: o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX,
                                orderInfo,
                                surface
                            }).catch(r("WAWebNoop"));
                            o("WAWebBrLastUsedPaymentMethodStoreLazy").recordLastUsedBrPaymentMethodLazy(e, o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(o("WAWebBrPaymentMethodKey").getPixFlowType(orderInfo.paymentSettings)));
                        }
                    },
                    successMsg: s._("Pix Code copied")
                });
            },
            Icon: r("WDSIconIcContentCopy.react")
        };
    }
    function b(e) {
        o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
            msg: e
        }));
    }
    function v({ code, failureMsg, onCopy, successMsg }) {
        if (code == null) {
            b(failureMsg);
            return;
        }
        o("WAWebCopyTextWithToast").copyTextWithToast({
            failureMsg,
            onSuccess: onCopy,
            successMsg,
            text: code
        });
    }
    function S(e) {
        const r = o("WAWebOrderDetails").getOrderInfo(e);
        if (r == null || r.paymentSettings == null) {
            return false;
        }
        const a = r.paymentSettings?.some(function(e) {
            return e[o("WAWebBizOrderDetailsParams").PaymentSettingType.OFFSITE_CARD_PAY];
        }) ?? false;
        return a;
    }
    function R(e) {
        if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD && e.interactivePayload?.buttons?.[0]?.buttonParamsJson != null) {
            const a = JSON.parse(e.interactivePayload?.buttons?.[0]?.buttonParamsJson);
            if (a.payment_method === o("WAWebBizOrderDetailsParams").PaymentSettingType.OFFSITE_CARD_PAY) {
                return true;
            }
        }
        return false;
    }
    function L(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && R(e) && o("WAWebMsgGetters").getIsSentByMe(e.unsafe());
    }
    l.getPaymentInfoOrderDetailsInteractiveAction = p;
    l.getOpenPaymentLinkInteractiveAction = g;
    l.getCopyBoletoCodeInteractiveAction = h;
    l.getCopyPixStaticCodeInteractiveAction = y;
    l.getCopyPixCodeInteractiveAction = C;
    l.hasOrderOffsiteCardPay = S;
    l.shouldHideOffsiteCardPayConfirmation = L;
}, 226);