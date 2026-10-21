__d("WAWebGetInteractiveActions", [
    "fbt",
    "WALogger",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebBrAddPixKeySavedMarker",
    "WAWebBrOptionsToPayActions",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrSavePartnerPixKeyFeature",
    "WAWebBrSenderPixKeyAttribution",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebChatGroupUtils",
    "WAWebFbtAppName",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveCtaActions",
    "WAWebGetMessageWithLinkAction",
    "WAWebGetQuickPayAction",
    "WAWebGetShopStorefrontInteractiveAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLimitSharingGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderExpansionAction",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionCountries",
    "WAWebPaymentDetailsBubbleActions",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentsGatingUtils",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebUserPrefsMeUser",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = [
        "interactivePayload",
        "interactiveType",
        "sender",
        "t",
        "type"
    ];
    let d;
    const m = d || (d = o("react"));
    function p({ canCompose, msgKey, orderPaymentStatus = null, uimContext, values }) {
        const { interactivePayload, interactiveType, sender, t: t_1, type } = values;
        const C = babelHelpers.objectWithoutPropertiesLoose(values, c);
        const { chat, isSentByMe, nativeFlowName } = C;
        if (!interactivePayload) {
            return null;
        }
        if (interactiveType == null) {
            return [];
        }
        const T = {
            interactivePayload,
            interactiveType,
            nativeFlowName,
            type
        };
        const D = babelHelpers.extends({}, T, {
            nativeFlowButtons: null
        });
        const x = [];
        switch(interactiveType){
            case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
                {
                    x.push(r("WAWebGetShopStorefrontInteractiveAction")(interactivePayload));
                    break;
                }
            case r("WAWebInteractiveMessageType").NATIVE_FLOW:
                if (_(msgKey, values, canCompose)) {
                    if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
                        const $ = o("WAWebOrderDetails").getOrderInfoFor(D);
                        if (!$) {
                            return null;
                        }
                        x.push(...k(msgKey, values, $));
                    } else if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
                        const P = o("WAWebOrderDetails").getOrderInfoFor(D);
                        if (!P) {
                            return null;
                        }
                        const orderStatus = o("WAWebOrderStatus").findOrderStatus(chat, P.referenceId);
                        const M = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction({
                            chat,
                            msgKey,
                            orderInfo: P,
                            orderStatus,
                            uimContext,
                            values: {
                                interactivePayload,
                                interactiveType,
                                isSentByMe,
                                nativeFlowName,
                                type
                            }
                        });
                        if (M) {
                            x.push(M);
                        }
                        const w = orderStatus === o("WAWebOrderStatus").OrderStatus.Pending;
                        const A = orderPaymentStatus == null;
                        if (L(chat)) {
                            const F = A ? y(P, msgKey, chat) : [
                                v(msgKey, values, uimContext, true)
                            ];
                            if (F.length === 0) {
                                x.push(v(msgKey, values, uimContext, !w));
                            } else {
                                x.push(...F);
                            }
                        } else if (o("WAWebOrderStatus").isPaymentRequest(chat, P)) {
                            x.push(...E(msgKey, values, P));
                        } else {
                            let O = null;
                            if (o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(chat) && o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(P)) {
                                O = o("WAWebGetBrazilnteractiveActions").getCopyPixStaticCodeInteractiveAction(msgKey, P);
                            }
                            x.push(O ?? v(msgKey, values, uimContext, !w));
                        }
                        const B = S(msgKey, values, P, w);
                        if (B) {
                            x.push(B);
                        }
                    } else if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK) {
                        const W = o("WAWebGetMessageWithLinkAction").getOpenMessageWithLinkActionFor(T);
                        if (W) {
                            x.push(W);
                        }
                    } else if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT) {
                        const q = g(msgKey, {
                            interactivePayload,
                            interactiveType,
                            type
                        });
                        if (q) {
                            x.push(q);
                        }
                    }
                    if (nativeFlowName != null && o("WAWebBizTemplateAndInteractiveMessagesUtils").supportedNativeFlowButtonNamesForInteractiveMsg.includes(nativeFlowName)) {
                        const U = o("WAWebGetInteractiveCtaActions").getNativeFlowCtasFor({
                            interactivePayload,
                            interactiveType,
                            nativeFlowName,
                            t: t_1,
                            type
                        });
                        if (U != null) {
                            x.push(...h(U, msgKey, C));
                        }
                    }
                }
                break;
            case r("WAWebInteractiveMessageType").CAROUSEL:
                break;
        }
        return x;
    }
    function _(msgKey, values, canCompose) {
        if (typeof canCompose !== "boolean") {
            return false;
        }
        if (canCompose || values.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL) {
            return true;
        }
        return f(msgKey, values);
    }
    function f(msgKey, { chat, nativeFlowName }) {
        if (!msgKey.fromMe || nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION) {
            return false;
        }
        return chat != null && o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() && o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(chat) && !chat.isSuspendedOrTerminated() && !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(chat) && o("WAWebChatGroupUtils").canSendIgnoringAiAgentBlock(chat);
    }
    function g(msgKey, n) {
        if (msgKey.fromMe || !o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) {
            return null;
        }
        const r = o("WAWebBrAddPixKeyMessageOffer").getAddPixKeyMessageOfferFor(n);
        if (r == null) {
            return null;
        }
        if (o("WAWebBrAddPixKeyMessageOffer").isAddPixKeyMessageOfferSavedFor({
            interactivePayload: n.interactivePayload,
            type: n.type
        })) {
            return {
                label: s._("View Pix key"),
                onClick: function() {
                    if (o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled()) {
                        o("WAWebBrSavePartnerPixKeyFeature").openSavedPixKeyFromMessage();
                    }
                },
                testid: "br_view_pix_key_message_action"
            };
        }
        return {
            label: s._("Add Pix key"),
            onClick: function() {
                if (o("WAWebBrAddPixKeyMessageGating").isAddPixKeyMessageEnabled()) {
                    const n = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                    if (n == null) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[add-pix-key] offer click skipped, message left the collection"
                        ])));
                        return;
                    }
                    o("WAWebBrSavePartnerPixKeyFeature").openAddPixKeyMessageScreen(r, o("WAWebBrSenderPixKeyAttribution").resolveSenderPixKeyAttribution(n.senderObj), o("WAWebBrAddPixKeyPartnerDirectory").addPixKeyPartnerCatalogIdForSender([
                        o("WAWebMsgGetters").getSender(n)
                    ]), function(e) {
                        o("WAWebBrAddPixKeySavedMarker").markAddPixKeyMessageSaved(msgKey, e);
                    });
                }
            },
            testid: "br_add_pix_key_message_action"
        };
    }
    function h(e, msgKey, n) {
        return o("WAWebBrOptionsToPayActions").getPaymentRequestOptionsToPayActions(e, msgKey, n) ?? r("WAWebGetInteractiveActionsFromButtons")(e, msgKey, n);
    }
    function y(e, msgKey, chat) {
        return o("WAWebBrOptionsToPayActions").getOrderDetailsOptionsToPayActions(e, msgKey, chat) ?? C(e, msgKey, chat);
    }
    function C(e, msgKey, chat) {
        const r = [];
        const a = 2;
        if (o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(e)) {
            r.push(o("WAWebGetBrazilnteractiveActions").getCopyPixCodeInteractiveAction({
                msgKey,
                orderInfo: e
            }));
        }
        if (o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(chat) && o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(e)) {
            r.push(o("WAWebGetBrazilnteractiveActions").getOpenPaymentLinkInteractiveAction({
                msgKey,
                orderInfo: e
            }));
        }
        if (r.length < a && o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(chat) && o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(e)) {
            r.push(o("WAWebGetBrazilnteractiveActions").getCopyBoletoCodeInteractiveAction({
                msgKey,
                orderInfo: e
            }));
        }
        if (r.length < a && o("WAWebBrPaymentSettingsUtils").hasValidCard(e)) {
            r.push(b());
        }
        return r;
    }
    function b() {
        return {
            label: s._("Pay with card"),
            onClick: function() {
                const Component = o("WAWebFbtAppName").WAWebAppShortName;
                r("WAWebShowMessageActionFallbackErrorAction")({
                    title: s._("Charges can't be paid with cards on {=m1}", [
                        s._implicitParam("=m1", <Component>{s._("")}</Component>)
                    ]),
                    body: s._("Use WhatsApp on your phone to pay for this charge with a card.")
                });
            }
        };
    }
    function v(msgKey, { isSentByMe, sender }, uimContext, a) {
        const c = ()=>{
            if (isSentByMe || a) {
                return s._("View details");
            }
            if (o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(sender) && o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(o("WAWebUserPrefsMeUser").getMaybeMePnUser())) {
                return s._("Review and pay");
            }
            return s._("View details");
        };
        return {
            label: c(),
            onClick: function() {
                if (isSentByMe || o("WAWebOrdersExpansionCountries").getConsumerOrdersExpansionAllowedCountries()) {
                    const a = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
                    if (a == null || a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[interactive-actions] order details skipped, message left the collection"
                        ])));
                        return;
                    }
                    o("WAWebBizOrderDetailAction").openOrderDetailDrawer(a, uimContext, r("WAWebBizEntryPoint").FROM_CHAT);
                } else {
                    const Component = o("WAWebFbtAppName").WAWebAppShortName;
                    r("WAWebShowMessageActionFallbackErrorAction")({
                        title: s._("Orders can't be viewed on {=m1}", [
                            s._implicitParam("=m1", <Component>{s._("")}</Component>)
                        ]),
                        body: s._("Use WhatsApp on your phone to view this order.")
                    });
                }
            }
        };
    }
    function S(msgKey, values, n, r) {
        if (values.isSentByMe || R(msgKey, values, n)) {
            return null;
        }
        return o("WAWebGetQuickPayAction").getQuickPayAction(n.type, !r);
    }
    function R(msgKey, values, n) {
        return !L(values.chat) && o("WAWebOrderStatus").isPaymentRequest(values.chat, n) && I(msgKey, values);
    }
    function L(chat) {
        return (chat.contact.isEnterprise || chat.contact?.isHosted === true) && o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(chat);
    }
    function E(msgKey, values, n) {
        const r = o("WAWebGetBrazilnteractiveActions").getCopyPixStaticCodeInteractiveAction(msgKey, n);
        if (I(msgKey, values)) {
            return o("WAWebPaymentDetailsBubbleActions").getPaymentDetailsBubbleActions({
                interactivePayload: values.interactivePayload,
                msgKey
            }, r);
        }
        if (values.isSentByMe || r == null) {
            return [];
        }
        return [
            r
        ];
    }
    function k(msgKey, values, n) {
        const r = o("WAWebGetBrazilnteractiveActions").getPaymentInfoOrderDetailsInteractiveAction(n, msgKey);
        if (I(msgKey, values)) {
            return o("WAWebPaymentDetailsBubbleActions").getPaymentDetailsBubbleActions({
                interactivePayload: values.interactivePayload,
                msgKey
            }, r);
        }
        return [
            r
        ];
    }
    function I(e, { interactivePayload, interactiveType, nativeFlowName, type }) {
        return o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
            interactivePayload,
            interactiveType,
            msgKey: e,
            nativeFlowName,
            type
        });
    }
    l.default = p;
}, 226);