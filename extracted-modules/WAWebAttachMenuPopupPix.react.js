__d("WAWebAttachMenuPopupPix.react", [
    "WAWebBizOrderDetailsParams",
    "WAWebBusinessAddPixModalLoadable",
    "WAWebConsumerAddPixKeyFlow.react",
    "WAWebConsumerPaymentsHomeLogger",
    "WAWebConsumerSharePixPaymentRequestModalLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebPaymentsGatingUtils",
    "WAWebPixLogoIcon.react",
    "WAWebPixPaymentRequestFeature",
    "WAWebPixWamLogger",
    "WAWebSendPaymentRequestFlowLoadable",
    "WAWebSendPixConfirmModalLoadable",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        iconBackground: {
            opacity: "xg01cxk",
            $$css: true
        },
        iconPrimary: {
            fill: "xfifr3o",
            $$css: true
        },
        iconSize: {
            transform: "x1omdec3",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                background: u.iconBackground,
                primary: u.iconPrimary
            };
            t[0] = n;
        } else {
            n = t[0];
        }
        let r;
        if (t[1] !== e) {
            r = s.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, babelHelpers.extends({}, e, {
                innerStyles: n
            }));
            t[1] = e;
            t[2] = r;
        } else {
            r = t[2];
        }
        return r;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const { chat, dismissMenu, onAlternateSendFlowStart } = e;
        let l;
        if (t[0] !== chat) {
            l = function() {
                const pixData = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
                const t = pixData != null;
                if (o("WAWebPixPaymentRequestFeature").shouldOpenPaymentRequestFlow(chat)) {
                    o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebSendPaymentRequestFlowLoadable").SendPaymentRequestFlowLoadable, {
                        chat,
                        previousScreen: "chat",
                        referral: "chat_attachment"
                    }), {
                        transition: "modal-flow"
                    });
                } else if (t && pixData) {
                    if (!o("WAWebMobilePlatforms").isSMB()) {
                        o("WAWebPixWamLogger").logPixSessionEvent({
                            actionTarget: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_ICON_ATTACHMENT_TRAY,
                            paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
                            queryParams: {
                                payment_method: "pix",
                                key_type: String(pixData.key_type),
                                chat_type: o("WAWebConsumerPaymentsHomeLogger").getChatTypeForLogging(chat.id)
                            },
                            referral: "chat_attachment",
                            screen: "chat"
                        });
                    }
                    if (o("WAWebPaymentsGatingUtils").consumerSharePixEnabled()) {
                        o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebConsumerSharePixPaymentRequestModalLoadable").WAWebConsumerSharePixPaymentRequestModalLoadable, {
                            chat,
                            headerButton: {
                                type: "cancel",
                                onClick: o("WAWebModalManager").closeModalManager
                            },
                            orderReferral: o("WAWebBizOrderDetailsParams").OrderReferral.CHAT_ATTACHMENT,
                            pixData,
                            previousScreenName: "chat",
                            referral: "chat_attachment"
                        }));
                    } else {
                        o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebSendPixConfirmModalLoadable").WAWebSendPixConfirmModalLoadable, {
                            chat,
                            pixData,
                            previousScreenName: "chat",
                            referral: "chat_attachment",
                            orderReferral: o("WAWebBizOrderDetailsParams").OrderReferral.CHAT_ATTACHMENT
                        }));
                    }
                } else if (o("WAWebMobilePlatforms").isSMB()) {
                    o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBusinessAddPixModalLoadable").WAWebBizPaymentsBrazilAddPixModalLoadable, {
                        previousScreen: "chat",
                        referral: "chat_attachment"
                    }));
                } else {
                    o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal({
                        previousScreen: "chat",
                        referral: "chat_attachment"
                    });
                }
            };
            t[0] = chat;
            t[1] = l;
        } else {
            l = t[1];
        }
        const d = l;
        let m;
        if (t[2] !== dismissMenu || t[3] !== d || t[4] !== onAlternateSendFlowStart) {
            const p = function() {
                onAlternateSendFlowStart();
                d();
                dismissMenu();
            };
            const Component = r("WDSMenuItem.react");
            m = <Component testid="mi-attach-pix" onPress={p} Icon={c} iconXstyle={u.iconSize} title="Pix"/>;
            t[2] = dismissMenu;
            t[3] = d;
            t[4] = onAlternateSendFlowStart;
            t[5] = m;
        } else {
            m = t[5];
        }
        return m;
    }
    l.default = d;
}, 98);