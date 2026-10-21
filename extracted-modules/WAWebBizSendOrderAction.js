__d("WAWebBizSendOrderAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailsParams",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebCatalogCollection",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLidAwareContactsDB",
    "WAWebMediaOpaqueData",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrderCollection",
    "WAWebOrderDetailMathDefaultOffset",
    "WAWebOrderStatus",
    "WAWebPaymentsGatingUtils",
    "WAWebPaymentsPixBannerUtils",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUprPaymentRequestParams",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPaymentInfo",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(sellerJid, t) {
        let a;
        if (t == null) {
            return "";
        }
        const i = o("WAWebCatalogCollection").CatalogCollection.get(o("WAWebWidFactory").createWid(sellerJid));
        const l = i == null ? undefined : i.productCollection.get(t);
        const s = l?.getProductImageCollectionHead()?.mediaData.preview;
        if (s instanceof r("WAWebMediaOpaqueData") && (a = s.getBase64()) != null) {
            return a;
        }
        return "";
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ buttonName, buttonParamsJson, caption, chat, contextInfo, errorMessage, nativeFlowName, nfmInteractiveMsg, thumbnail }) {
            const _ = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const interactiveHeader = thumbnail ? {
                title: undefined,
                subtitle: undefined,
                mediaType: undefined,
                hasMediaAttachment: false,
                thumbnail
            } : undefined;
            const g = babelHelpers.extends({
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                ack: o("WAWebAck").ACK.CLOCK,
                from: _,
                id: new (r("WAWebMsgKey"))({
                    from: _,
                    to: chat.id,
                    id: yield r("WAWebMsgKey").newId(),
                    participant: undefined,
                    selfDir: "out"
                }),
                local: true,
                isNewMsg: true,
                t: o("WATimeUtils").unixTime(),
                to: chat.id,
                caption,
                nativeFlowName,
                interactiveHeader,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                nativeFlowInteractiveMsg: nfmInteractiveMsg,
                interactivePayload: {
                    buttons: [
                        {
                            name: buttonName,
                            buttonParamsJson
                        }
                    ],
                    messageVersion: 1
                }
            }, contextInfo);
            if (o("WAWebUserPrefsMeUser").isMeAccount(chat.id)) {
                try {
                    yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, g)[0];
                    return;
                } catch (error) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": ",
                        ""
                    ])), errorMessage, error);
                    throw error;
                }
            }
            try {
                const h = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, g)[1];
                if (!h || h.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                    throw r("err")("Order message SendMsgResult failure status");
                }
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": ",
                    ""
                ])), errorMessage, error);
                throw error;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n, r) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            const l = o("WAWebPaymentsGatingUtils").isReceiptAndStateP2mEligibleChat(e) && (yield v(e)) && o("WAWebPaymentsGatingUtils").isPixCodeReceiptAndStateP2mEnabled();
            const s = o("WAWebOrderCollection").OrderCollection.addOrder();
            const u = {
                reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
                type: "physical-goods",
                payment_configuration: "merchant_categorization_code",
                payment_settings: [
                    {
                        type: o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE,
                        [o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]: {
                            merchant_name: t.display_name,
                            key: t.key,
                            key_type: t.key_type
                        }
                    }
                ],
                currency: "BRL",
                total_amount: {
                    value: n,
                    offset: a
                },
                order_request_id: s.id,
                br_receipt_and_state_enabled: o("WAWebPaymentsGatingUtils").isPixCodeReceiptAndStateAssignedOnSend(e) || l ? true : undefined
            };
            yield d({
                caption: null,
                chat: e,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
                buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(u),
                errorMessage: "Pix payment request send to chat failure",
                thumbnail: "",
                buttonName: "review_and_pay",
                nfmInteractiveMsg: true
            });
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n, r, o) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, paymentKeys, n, amount, i) {
            if (paymentKeys.length === 0) {
                throw r("err")("UPR payment request attempted with no payment keys");
            }
            const l = o("WAWebOrderCollection").OrderCollection.addOrder();
            const s = babelHelpers.extends({}, o("WAWebUprPaymentRequestParams").buildUprPaymentRequestParams({
                currency: n,
                paymentKeys,
                amount,
                offset: i,
                referenceId: r("WAWebBizOrderGetFriendlyRandomIdAction")()
            }), {
                order_request_id: l.id
            });
            yield d({
                caption: null,
                chat: e,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
                buttonParamsJson: JSON.stringify(s),
                errorMessage: "UPR payment request send to chat failure",
                thumbnail: "",
                buttonName: "review_and_pay",
                nfmInteractiveMsg: true
            });
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = null) {
            yield C(e, t);
            if (o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled()) {
                o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo();
            }
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = null) {
            const a = o("WAWebOrderCollection").OrderCollection.addOrder();
            const i = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
            if (!i) {
                throw r("err")("pix key not found");
            }
            const l = o("WAWebPaymentsGatingUtils").isReceiptAndStateP2mEligibleChat(e) && (yield v(e)) && o("WAWebPaymentsGatingUtils").isPixKeyReceiptAndStateP2mEnabled();
            const s = babelHelpers.extends({
                reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
                type: "physical-goods",
                payment_configuration: "merchant_categorization_code",
                payment_settings: [
                    {
                        type: o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE,
                        [o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]: {
                            merchant_name: i.display_name,
                            key: i.key,
                            key_type: i.key_type
                        }
                    }
                ],
                currency: a.currency,
                total_amount: {
                    value: 0,
                    offset: o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET
                },
                order_request_id: a.id,
                order: {
                    status: o("WAWebOrderStatus").getDefaultOrderStatus(),
                    items: [
                        {
                            quantity: 0,
                            retailer_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
                            amount: {
                                offset: o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
                                value: 0
                            },
                            name: "",
                            product_id: "",
                            isCustomItem: false,
                            isQuantitySet: false
                        }
                    ],
                    subtotal: {
                        value: 0,
                        offset: o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET
                    },
                    tax: null,
                    shipping: null,
                    discount: null
                }
            }, t != null && {
                referral: t
            }, {
                br_receipt_and_state_enabled: o("WAWebPaymentsGatingUtils").isPixKeyReceiptAndStateAssignedOnSend(e) || l ? true : undefined
            });
            yield d({
                caption: null,
                chat: e,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
                buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(s),
                errorMessage: "Pix Order message send to chat failure",
                thumbnail: "",
                buttonName: "payment_info",
                nfmInteractiveMsg: true
            });
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.contact.isContactSyncCompleted === 1) {
                return !e.contact.isBusiness;
            }
            try {
                const t = yield r("WAWebLidAwareContactsDB").get(e.contact.id.toJid());
                return t?.isContactSyncCompleted === 1 && !t.isBusiness;
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not read the contact sync state"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("br-payment-state-contact-sync-read-failed");
                return false;
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, discount, offset, order, orderNote, shipping, tax, total }) {
            const _ = order.orderItemCollection.head()?.id;
            const f = c(order.sellerJid, _);
            const g = order.orderItemCollection.map((e)=>({
                    retailer_id: e.id,
                    name: e.name,
                    amount: {
                        value: e.price,
                        offset
                    },
                    quantity: e.quantity,
                    isCustomItem: e.isCustomItem,
                    isQuantitySet: e.isQuantitySet,
                    variant_info_list: e.properties?.map(function(e) {
                        return {
                            name: e[0],
                            value: e[1]
                        };
                    })
                }));
            let h = {
                reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
                type: "physical-goods",
                payment_configuration: "merchant_categorization_code",
                currency: order.currency,
                total_amount: {
                    value: total,
                    offset
                },
                order_request_id: order.id,
                order: {
                    status: o("WAWebOrderStatus").getDefaultOrderStatus(),
                    items: g,
                    subtotal: {
                        value: Number(order.subtotal),
                        offset
                    },
                    tax: tax == null ? undefined : {
                        value: tax,
                        offset
                    },
                    shipping: shipping == null ? undefined : {
                        value: shipping,
                        offset
                    },
                    discount: discount == null ? undefined : {
                        value: discount,
                        offset
                    }
                }
            };
            if (o("WAWebBizFrontendGatingUtils").isOrderDetailsPaymentInstructionsSyncEnabled() && o("WAWebUserPrefsPaymentInfo").isCPIInfoValid()) {
                const y = o("WAWebUserPrefsPaymentInfo").getCPIInfo();
                h = babelHelpers.extends({}, h, {
                    external_payment_configurations: [
                        {
                            type: "payment_instruction",
                            payment_instruction: r("nullthrows")(y)
                        }
                    ]
                });
            }
            if (o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled()) {
                const C = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
                if (C != null) {
                    h = babelHelpers.extends({}, h, {
                        payment_settings: [
                            {
                                type: o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE,
                                [o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]: {
                                    merchant_name: C.display_name,
                                    key: C.key,
                                    key_type: C.key_type
                                }
                            }
                        ].concat(o("WAWebBizFrontendGatingUtils").isForceCopyPixCTAEnabled() ? [
                            {
                                type: o("WAWebBizOrderDetailsParams").PaymentSettingType.CARDS,
                                [o("WAWebBizOrderDetailsParams").PaymentSettingType.CARDS]: {
                                    enabled: false
                                }
                            }
                        ] : [])
                    });
                }
            }
            yield d({
                caption: orderNote,
                chat,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
                buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(h),
                errorMessage: "Order message send to chat failure",
                thumbnail: f,
                buttonName: "review_and_pay",
                nfmInteractiveMsg: false
            });
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, offset, orderInfo, orderNote, orderStatus, paymentMethod, paymentStatus, sellerJid }) {
            const { items, referenceId } = orderInfo;
            const f = items[0].id;
            const g = c(sellerJid, f);
            const h = I(orderInfo, orderStatus, referenceId, offset, paymentStatus, paymentMethod);
            const y = o("WAWebOrderStatus").findOrderDetailsMessage(chat, referenceId);
            const C = y?.msgContextInfo(chat.id);
            yield d({
                caption: orderNote,
                chat,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
                buttonParamsJson: o("WAWebBizOrderDetailsParams").stringifyPaymentStatus(h),
                errorMessage: "Order message sent to chat failure",
                thumbnail: g,
                buttonName: "review_order",
                contextInfo: C,
                nfmInteractiveMsg: false
            });
        });
        return k.apply(this, arguments);
    }
    function I(orderInfo, orderStatus, reference_id, offset, payment_status, payment_method) {
        const l = orderInfo.items.map((e)=>({
                retailer_id: e.id,
                name: e.name,
                amount: {
                    value: e.amount ?? 0,
                    offset
                },
                quantity: e.quantity,
                isCustomItem: e.isCustomItem,
                isQuantitySet: e.isQuantitySet
            }));
        let s = {
            reference_id,
            payment_timestamp: o("WATimeUtils").unixTime(),
            currency: orderInfo.currency,
            payment_status,
            total_amount: {
                value: orderInfo.totalAmount,
                offset
            },
            order: {
                status: orderStatus,
                items: l,
                subtotal: {
                    value: Number(orderInfo.subtotal),
                    offset
                },
                tax: orderInfo.tax == null ? undefined : {
                    value: orderInfo.tax,
                    offset
                },
                shipping: orderInfo.shipping == null ? undefined : {
                    value: orderInfo.shipping,
                    offset
                },
                discount: orderInfo.discount == null ? undefined : {
                    value: orderInfo.discount,
                    offset
                }
            }
        };
        if (payment_method != null) {
            s = babelHelpers.extends({}, s, {
                payment_method
            });
        }
        return s;
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, offset, orderInfo, orderNote, orderStatus, paymentMethod, paymentStatus, sellerJid }) {
            const orderInfo_referenceId = orderInfo.referenceId;
            const f = orderInfo.items.at(0)?.id;
            const g = c(sellerJid, f);
            const h = I(orderInfo, orderStatus, orderInfo_referenceId, offset, paymentStatus, paymentMethod);
            const y = o("WAWebOrderStatus").findOrderDetailsMessage(chat, orderInfo_referenceId);
            const C = y?.msgContextInfo(chat.id);
            yield d({
                caption: orderNote,
                chat,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS,
                buttonParamsJson: o("WAWebBizOrderDetailsParams").stringifyPaymentStatus(h),
                errorMessage: "Order message send to chat failure",
                thumbnail: g,
                buttonName: "payment_status",
                contextInfo: C,
                nfmInteractiveMsg: false
            });
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, offset, orderInfo, orderStatus, paymentMethod, paymentStatus, sellerJid }) {
            const orderInfo_referenceId = orderInfo.referenceId;
            const _ = orderInfo.items.at(0)?.id;
            const f = c(sellerJid, _);
            const g = I(orderInfo, orderStatus, orderInfo_referenceId, offset, paymentStatus, paymentMethod);
            const h = o("WAWebOrderStatus").findOrderDetailsMessage(chat, orderInfo_referenceId);
            const y = h?.msgContextInfo(chat.id);
            yield d({
                chat,
                caption: null,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD,
                buttonParamsJson: o("WAWebBizOrderDetailsParams").stringifyPaymentStatus(g),
                errorMessage: "Order message send to chat failure",
                thumbnail: f,
                buttonName: "payment_method",
                contextInfo: y,
                nfmInteractiveMsg: false
            });
        });
        return $.apply(this, arguments);
    }
    l.sendPixPaymentRequestMessage = p;
    l.sendUprPaymentRequestMessage = f;
    l.sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner = h;
    l.sendPixKeyPaymentInfoMessage = C;
    l.sendOrderDetailsMessageAsMerchant = R;
    l.sendOrderStatusMessageAsMerchant = E;
    l.sendOrderPaymentStatusMessageAsMerchant = T;
    l.sendOrderPaymentMethodUpdate = x;
}, 98);