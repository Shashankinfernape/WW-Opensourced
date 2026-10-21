__d("WAWebNativeFlowValidation", [
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBookingConfirmation",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrPaymentRequest",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInAppSignupConfirmation",
    "WAWebInAppSignupPrompt",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMsgType",
    "WAWebMultiStepFormButton",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebPaymentsGatingUtils",
    "WAWebSignupGating",
    "WAWebVoipGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, bizSource: n, fromMe: a, msg: i }) {
        if (i.nativeFlowName == null) {
            return false;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT) {
            return o("WAWebBrAddPixKeyMessageOffer").getAddPixKeyMessageOffer(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO || i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
            return o("WAWebOrderDetails").getOrderInfo(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE) {
            return o("WAWebBrazilPaymentStateUpdatePayload").getBrazilPaymentStateUpdate(i) != null && o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported();
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
            return o("WAWebOrderStatus").getOrderStatusInfo(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS || i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD) {
            return o("WAWebOrderPaymentStatus").getOrderPaymentStatusInfoFromNativeFlow(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER) {
            return false;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION) {
            return o("WAWebBookingConfirmation").getBookingConfirmationInfo(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK) {
            return s(i) !== false;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK_STATUS) {
            return o("WAWebPaymentsGatingUtils").isMessageWithLinkNfmEnabled();
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL) {
            return o("WAWebBizTemplateAndInteractiveMessagesUtils").isInteractiveCtaMessageEnabled(r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL, a, n) && u(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL) {
            return o("WAWebBizTemplateAndInteractiveMessagesUtils").isInteractiveCtaMessageEnabled(r("WAWebInteractiveMessagesNativeFlowName").CTA_URL, a, n) && u(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY) {
            return o("WAWebBizTemplateAndInteractiveMessagesUtils").isInteractiveCtaMessageEnabled(r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY, a, n) && u(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG) {
            return o("WAWebBizTemplateAndInteractiveMessagesUtils").isInteractiveCtaMessageEnabled(r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG, a, n) && u(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE) {
            return o("WAWebBizTemplateAndInteractiveMessagesUtils").isInteractiveCtaMessageEnabled(r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE, a, n) && u(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE) {
            return o("WAWebBizTemplateAndInteractiveMessagesUtils").isInteractiveCtaMessageEnabled(r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE, a, n) && u(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").MIXED) {
            return true;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_APP) {
            return u(i) != null && o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingAppCtaEnabled();
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) {
            return o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(i, null, t);
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST) {
            return o("WAWebVoipGatingUtils").isCoexCallingPermissionsEnabled();
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST) {
            return o("WAWebBrPaymentRequest").getPaymentRequestInfo(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP) {
            return o("WAWebInAppSignupPrompt").getInAppSignupPromptInfo(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP) {
            return o("WAWebSignupGating").isSignupAGMEnabled() && o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE) {
            return o("WAWebMultiStepFormButton").getMultiStepFormInfo(i) != null;
        }
        if (i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS || i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").A2UI_REPLY_ACTION) {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i.nativeFlowName}`);
        })();
    }
    function s(e) {
        if (o("WAWebPaymentsGatingUtils").isMessageWithLinkNfmEnabled()) {
            if (e.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK || e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW || e.interactivePayload == null) {
                return false;
            }
            const t = e.interactivePayload;
            if (t?.buttons && t.buttons.length > 0) {
                const n = t.buttons[0];
                const { buttonParamsJson: a, name: i } = n;
                if (i === "open_webview" && a != null) {
                    return true;
                }
            }
        }
        return false;
    }
    function u(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName != null && o("WAWebBizTemplateAndInteractiveMessagesUtils").supportedNativeFlowButtonNamesForInteractiveMsg.includes(e.nativeFlowName) && e.interactivePayload?.buttons != null) {
            return e.interactivePayload.buttons.some((e)=>c(e));
        }
        return false;
    }
    function c(e) {
        const t = o("WAWebBizTemplateAndInteractiveMessagesUtils").getNativeFlowNameByButtonName(e.name);
        return t != null && o("WAWebBizTemplateAndInteractiveMessagesUtils").supportedNativeFlowButtonNamesForInteractiveMsg.includes(t);
    }
    l.isValidNativeFlowMessage = e;
}, 98);