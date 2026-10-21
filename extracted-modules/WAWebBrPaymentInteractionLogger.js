__d("WAWebBrPaymentInteractionLogger", [
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebBuyerEventLogger",
    "WAWebCloudApiSignalLogger",
    "WAWebContactUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebOrderDetailsCloudApiSignalResolver",
    "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
    "WAWebOrderPaymentStatus",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCloudApiSignalTemplateType",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "api_receiver_event_log_key";
    const u = "receiver_event_log_key";
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebMsgGetters").getIsSentByMe(t.unsafe())) {
                const r = yield C(t, u);
                const a = t.senderObj?.id.toJid();
                const i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a);
                const l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
                const s = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
                const c = y(s);
                const d = new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
                    bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i,
                    businessOwnerJid: a,
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                    messageClassAttributes: JSON.stringify(l ? g(c, r) : {
                        cta: "copy_pix_key",
                        is_cta_available: true,
                        payment_method_choice: "pix",
                        p2m_flow: "PIX_KEY",
                        currency: "BRL",
                        is_template: false,
                        accepted_payment_method: [
                            "pix"
                        ],
                        message_type: "payment_info",
                        order_funnel_id: r,
                        chat_type: c
                    }),
                    messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
                    messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
                });
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "CopyPixKey Log"
                ])));
                d.commit();
                o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                    isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixKeyBuyerLoggingEnabled(a),
                    psFunnelId: r,
                    attributes: l ? h(c) : {
                        cta: "copy_pix_key",
                        isCtaAvailable: true,
                        paymentMethodChoice: "pix",
                        p2pFlow: "PIX_KEY",
                        currency: "BRL",
                        isTemplate: false,
                        acceptedPaymentMethod: [
                            "pix"
                        ],
                        messageType: "payment_info",
                        chatType: c
                    },
                    interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
                    bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i
                });
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebMsgGetters").getIsSentByMe(e.unsafe())) {
                const r = yield C(e, u);
                const a = e.senderObj?.id.toJid();
                const i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a);
                const l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
                const s = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
                const chatType = y(s);
                const d = {
                    bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i,
                    businessOwnerJid: a,
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                    messageClassAttributes: JSON.stringify(l ? g(chatType, r) : {
                        cta: "order_details",
                        p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                        is_cta_available: true,
                        payment_method_choice: "pix",
                        p2m_flow: "PIX_PAYMENT_REQUEST",
                        currency: "BRL",
                        is_template: false,
                        accepted_payment_method: [
                            "pix"
                        ],
                        order_amount: t.totalAmount,
                        message_type: "checkout",
                        has_product_variants: false,
                        has_attachment: false,
                        order_funnel_id: r
                    }),
                    messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
                };
                new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent(babelHelpers.extends({}, d, {
                    messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW
                })).commit();
                new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent(babelHelpers.extends({}, d, {
                    messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE
                })).commit();
                const attributes = l ? h(chatType) : {
                    cta: "order_details",
                    p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                    isCtaAvailable: true,
                    paymentMethodChoice: "pix",
                    p2mFlow: "PIX_PAYMENT_REQUEST",
                    currency: "BRL",
                    isTemplate: false,
                    acceptedPaymentMethod: [
                        "pix"
                    ],
                    messageType: "checkout",
                    hasProductVariants: false,
                    hasAttachment: false,
                    chatType
                };
                o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                    isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixCodeBuyerLoggingEnabled(a),
                    psFunnelId: r,
                    attributes,
                    interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
                    bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i
                });
                o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                    isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixCodeBuyerLoggingEnabled(a),
                    psFunnelId: r,
                    attributes,
                    interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE,
                    bizPlatform: l ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : i
                });
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msg, orderAcceptedPaymentMethod, orderInfo, surface }) {
            if (!o("WAWebMsgGetters").getIsSentByMe(msg.unsafe())) {
                const c = [];
                if (o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(orderInfo)) {
                    c.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX);
                }
                const d = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
                if (o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(d) && o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(orderInfo)) {
                    c.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO);
                }
                if (o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(d) && o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(orderInfo)) {
                    c.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PAYMENT_LINK);
                }
                if (o("WAWebBrPaymentSettingsUtils").hasValidCard(orderInfo)) {
                    c.push(o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.NATIVE);
                }
                const accepted_pay_methods = JSON.stringify(c);
                const p = yield C(msg, s);
                const _ = new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
                    bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
                    businessOwnerJid: msg.senderObj?.id.toJid(),
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                    messageClassAttributes: JSON.stringify({
                        order_funnel_id: p,
                        wa_pay_registered: false,
                        is_template: false,
                        is_cta_available: true,
                        p2m_flow: o("WAWebOrderDetailsCreationActionWamEventUtilP2MFlow").P2MFlow.ORDER,
                        cta: r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
                        accepted_pay_methods,
                        p2m_type: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                        payment_method_choice: orderAcceptedPaymentMethod,
                        is_simplified_order: orderInfo.isOrderNodeOmitted,
                        payment_method_surface: surface
                    }),
                    messageInteraction: orderAcceptedPaymentMethod === o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
                    messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
                });
                _.commit();
                v({
                    msg,
                    orderAcceptedPaymentMethod,
                    orderInfo
                });
                o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                    isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixCodeBuyerLoggingEnabled(msg.senderObj?.id.toJid()),
                    psFunnelId: p,
                    attributes: {
                        cta: r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
                        isCtaAvailable: true,
                        paymentMethodChoice: orderAcceptedPaymentMethod,
                        p2mFlow: o("WAWebOrderDetailsCreationActionWamEventUtilP2MFlow").P2MFlow.ORDER,
                        currency: "BRL",
                        isTemplate: false,
                        acceptedPaymentMethod: c.map((e)=>e),
                        p2mType: o("WAWebOrderPaymentStatus").OrderP2MType.P2M_PRO,
                        chatType: y(d),
                        isSimplifiedOrder: orderInfo.isOrderNodeOmitted
                    },
                    interaction: orderAcceptedPaymentMethod === o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
                    bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
                });
            }
        });
        return f.apply(this, arguments);
    }
    function g(chat_type, order_funnel_id) {
        return {
            cta: "p2p_pix",
            flow: "P2P",
            chat_type,
            is_cta_available: true,
            accepted_payment_method: [
                "pix"
            ],
            payment_method_choice: "pix",
            order_funnel_id,
            referral: "chat_attachment"
        };
    }
    function h(chatType) {
        return {
            cta: "p2p_pix",
            flow: "P2P",
            chatType,
            isCtaAvailable: true,
            acceptedPaymentMethod: [
                "pix"
            ],
            paymentMethodChoice: "pix",
            referral: "chat_attachment"
        };
    }
    function y(e) {
        return Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id)].toLowerCase();
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(t, e.id.id + e.to.toJid());
            const r = yield n.genFunnelInfo();
            return r.funnel_id;
        });
        return b.apply(this, arguments);
    }
    function v({ msg, orderAcceptedPaymentMethod, orderInfo }) {
        const a = o("WAWebOrderDetailsCloudApiSignalResolver").resolveOrderDetailsCloudApiSignal(orderInfo, orderAcceptedPaymentMethod);
        if (a != null) {
            const i = msg.unsafe();
            o("WAWebCloudApiSignalLogger").logCloudApiPaymentTemplateClick({
                chat: o("WAWebFrontendMsgGetters").getChat(i),
                ctaAction: a.ctaAction,
                ctaButtonIndex: a.ctaButtonIndex,
                msg: i,
                templateType: o("WAWebWamEnumCloudApiSignalTemplateType").CLOUD_API_SIGNAL_TEMPLATE_TYPE.ORDER_DETAILS
            });
        }
    }
    l.logPaymentInfoOrderDetailsInteractiveActionForRecepient = c;
    l.logPaymentRequestInteractiveAction = m;
    l.logAPIMerchantPaymentMethodClickEvent = _;
}, 98);