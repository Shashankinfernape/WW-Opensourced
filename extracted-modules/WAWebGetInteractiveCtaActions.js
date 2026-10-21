__d("WAWebGetInteractiveCtaActions", [
    "fbt",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBookingConfirmation",
    "WAWebBrPaymentRequest",
    "WAWebCatalogShortLinkUtils",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebInAppSignupConfirmation",
    "WAWebInAppSignupPrompt",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebMuseCtaLinkOverride",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPaymentReminder",
    "WAWebSignupCTAExperiment"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return u({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            t: e.t,
            type: e.type
        });
    }
    function u({ interactivePayload, interactiveType, nativeFlowName, t: t_1, type }) {
        if (type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && nativeFlowName != null && o("WAWebBizTemplateAndInteractiveMessagesUtils").supportedNativeFlowButtonNamesForInteractiveMsg.includes(nativeFlowName) && interactivePayload?.buttons != null) {
            const u = [];
            interactivePayload.buttons.forEach((button, t)=>{
                const n = c({
                    button,
                    index: t,
                    messageNativeFlowName: nativeFlowName,
                    timestamp: t_1
                });
                if (n != null) {
                    u.push(n);
                }
            });
            if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP && interactivePayload.buttons.length > 0) {
                const m = interactivePayload.buttons[0]?.buttonParamsJson;
                const p = o("WAWebInAppSignupConfirmation").parseInAppSignupWebsiteUrl(m);
                if (p != null) {
                    u.push({
                        name: "cta_url",
                        index: u.length,
                        data: {
                            label: s._("Visit website").toString(),
                            url: p,
                            merchantUrl: p
                        }
                    });
                }
            }
            if (u.length > 0) {
                return u;
            }
        }
        return null;
    }
    function c({ button, index, messageNativeFlowName, timestamp }) {
        const p = o("WAWebBizTemplateAndInteractiveMessagesUtils").getNativeFlowNameByButtonName(button.name);
        if (p == null || p === r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP && messageNativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP) {
            return null;
        }
        const buttonParamsJson = button.buttonParamsJson ?? "";
        let f;
        try {
            f = JSON.parse(buttonParamsJson);
        } catch (e) {
            return null;
        }
        const g = f.catalog_product_id != null ? s._("View product") : s._("View catalogue");
        const catalogUrl = f.catalog_product_id != null ? o("WAWebCatalogShortLinkUtils").createProductLink(f.business_phone_number, f.catalog_product_id) : o("WAWebCatalogShortLinkUtils").createCatalogLink(f.business_phone_number);
        switch(p){
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
                return {
                    name: "cta_url",
                    index,
                    data: {
                        label: f.display_text ?? f.title,
                        url: o("WAWebMuseCtaLinkOverride").overrideCtaUrlIfNeeded(f.url),
                        merchantUrl: f.merchant_url
                    }
                };
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
                return {
                    name: "cta_call",
                    index,
                    data: {
                        label: f.display_text,
                        selectionId: f.id
                    }
                };
            case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
                return {
                    name: "quick_reply",
                    index,
                    data: {
                        label: f.display_text ?? f.title,
                        selectionId: f.id,
                        disabled: f.disabled,
                        buttonParamsJson
                    }
                };
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
            case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
                return {
                    name: "cta_catalog",
                    index,
                    data: {
                        label: g.toString(),
                        catalogUrl,
                        businessPhoneNumber: f.business_phone_number,
                        catalogProductId: f.catalog_product_id
                    }
                };
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
                return {
                    name: "cta_copy",
                    index,
                    data: {
                        label: f.display_text,
                        copyCode: f.copy_code
                    }
                };
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
                return {
                    name: "cta_app",
                    index,
                    data: {
                        label: f.display_text,
                        url: f.url,
                        buttonParamsJson
                    }
                };
            case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
                return o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowCtaButton(buttonParamsJson, index, timestamp);
            case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS:
                {
                    const orderStatusButton = o("WAWebOrderStatusButton").parseOrderStatusButton(button);
                    if (orderStatusButton == null) {
                        return null;
                    }
                    return {
                        name: "order_status",
                        index,
                        data: {
                            label: m(orderStatusButton).toString(),
                            orderStatusButton
                        }
                    };
                }
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER:
                {
                    const paymentReminderInfo = o("WAWebPaymentReminder").parsePaymentReminderButton(button);
                    if (paymentReminderInfo == null) {
                        return null;
                    }
                    return {
                        name: "payment_reminder",
                        index,
                        data: {
                            label: s._("Pay now").toString(),
                            paymentReminderInfo
                        }
                    };
                }
            case r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION:
                {
                    const bookingInfo = o("WAWebBookingConfirmation").parseBookingConfirmationButton(button);
                    if (bookingInfo == null) {
                        return null;
                    }
                    return {
                        name: "booking_confirmation",
                        index,
                        data: {
                            label: s._("View details").toString(),
                            bookingInfo
                        }
                    };
                }
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST:
                {
                    const paymentRequestInfo = o("WAWebBrPaymentRequest").parsePaymentRequestButton(button);
                    if (paymentRequestInfo == null) {
                        return null;
                    }
                    return {
                        name: "payment_request",
                        index,
                        data: {
                            label: f.display_text ?? "",
                            paymentRequestInfo
                        }
                    };
                }
            case r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP:
                {
                    const R = o("WAWebInAppSignupPrompt").parseInAppSignupPromptButtonParams(buttonParamsJson);
                    if (R == null) {
                        break;
                    }
                    const L = d().toString();
                    return {
                        name: "api_signup",
                        index,
                        data: {
                            label: L,
                            signupId: R.signupId
                        }
                    };
                }
            case r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT:
            case r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE:
            case r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD:
            case r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK:
            case r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK_STATUS:
            case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO:
            case r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE:
            case r("WAWebInteractiveMessagesNativeFlowName").MIXED:
            case r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST:
            case r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS:
            case r("WAWebInteractiveMessagesNativeFlowName").A2UI_REPLY_ACTION:
                break;
            case r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP:
                {
                    const copyCode = o("WAWebInAppSignupConfirmation").parseInAppSignupPromoCode(button.buttonParamsJson);
                    if (copyCode != null) {
                        return {
                            name: "cta_copy",
                            index,
                            data: {
                                label: s._("Copy code").toString(),
                                copyCode
                            }
                        };
                    }
                    break;
                }
        }
    }
    function d() {
        if (o("WAWebSignupCTAExperiment").getSignupCTAExperiment() === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers) {
            return s._("Get offers");
        }
        return s._("Sign up");
    }
    function m(orderStatusButton) {
        if (o("WAWebOrderStatus").shouldShowTrackingInfo(orderStatusButton)) {
            if (orderStatusButton.order.status === o("WAWebOrderStatus").OrderStatus.Complete || orderStatusButton.order.status === o("WAWebOrderStatus").OrderStatus.Delivered) {
                return s._("Delivery info");
            }
            return s._("Track parcel");
        }
        return s._("View order");
    }
    l.getNativeFlowCtasFromInteractiveMsg = e;
    l.getNativeFlowCtasFor = u;
    l.nativeFlowButtonToCtaButton = c;
}, 226);