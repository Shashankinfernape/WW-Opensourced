__d("WAWebInteractiveNativeFlowOrderHeader", [
    "WAWebABProps",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebCurrencyUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveOrderQuotedMessage.react",
    "WAWebInteractiveOrderStatusHeader.react",
    "WAWebMastercardLogoIcon.react",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentPreview",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNativeFlowOrderDetailsHeader",
    "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
    "WAWebOrderDetailProductLabel",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionCountries",
    "WAWebPaymentBoletoLogoIcon.react",
    "WAWebPaymentDetailsBubbleHeaderLoadable",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentDetailsPixCodeBubbleHeader.react",
    "WAWebPaymentLogoPixIcon.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebPaymentsGatingUtils",
    "WAWebSimplifiedPaymentHeader.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        paywithIcon: {
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            verticalAlign: "xxymvpz",
            width: "x1xp8n7a",
            height: "xlup9mm",
            $$css: true
        },
        iconDarkBackground: {
            backgroundColor: "xb1i3fl",
            $$css: true
        },
        marginStart4: {
            marginInlineStart: "x1wbi8v6",
            $$css: true
        },
        paddingAll4: {
            paddingTop: "x1tiyuxx",
            paddingInlineEnd: "x1uc92m",
            paddingBottom: "x1nbhmlj",
            paddingInlineStart: "x181vq82",
            $$css: true
        }
    };
    function c({ interactiveHeader, preview, type }) {
        if (type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && interactiveHeader?.thumbnail != null) {
            return `data:image/jpeg;base64,${interactiveHeader.thumbnail}`;
        }
        if (preview instanceof r("WAWebMediaOpaqueData")) {
            return preview.url();
        }
    }
    function d(e) {
        const n = o("react-compiler-runtime").c(19);
        let a = null;
        const e_msgKey = e.msgKey;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let u;
            l = [
                (u = o("WAWebMsgGetters")).getType,
                u.getNativeFlowName,
                u.getInteractiveType,
                u.getInteractivePayload,
                u.getNativeFlowButtons,
                u.getInteractiveHeader,
                o("WAWebFrontendMsgGetters").getMediaData,
                u.getIsSentByMe,
                u.getIsNewsletterMsg
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(e_msgKey, l);
        const _ = d[0];
        const g = d[1];
        const h = d[2];
        const y = d[3];
        const C = d[4];
        const interactiveHeader = d[5];
        const v = d[6];
        const S = d[7];
        const R = d[8];
        const L = o("useWAWebMediaDataValues").useOptionalMediaDataValues(v, [
            o("WAWebMediaDataGetters").getPreview
        ]) ?? [
            null
        ];
        const preview = L[0];
        const k = o("WAWebOrderDetails").getOrderInfoFor({
            interactivePayload: y,
            interactiveType: h,
            nativeFlowButtons: C,
            nativeFlowName: g,
            type: _
        });
        let I;
        if (n[1] !== R || n[2] !== e_msgKey) {
            I = o("WAWebFrontendMsgGetters").getChatByMsgKey(e_msgKey, R);
            n[1] = R;
            n[2] = e_msgKey;
            n[3] = I;
        } else {
            I = n[3];
        }
        const T = I;
        let orderPaymentStatus = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(T, k?.referenceId, o("WAWebOrderStatus").isSimplifiedOrder(k));
        if (_ !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE && _ !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
            return null;
        }
        if (g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
            if (k) {
                a = f(e_msgKey, o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
                    interactivePayload: y,
                    interactiveType: h,
                    msgKey: e_msgKey,
                    nativeFlowName: g,
                    type: _
                }), k, S);
            }
        } else if (g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
            if (k) {
                const x = _ === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && interactiveHeader?.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT;
                if (o("WAWebOrderStatus").isSimplifiedOrder(k) && !x) {
                    a = p({
                        chat: T,
                        displayType: e.displayType,
                        info: k,
                        isPaymentDetailsEnabled: o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
                            interactivePayload: y,
                            interactiveType: h,
                            msgKey: e_msgKey,
                            nativeFlowName: g,
                            type: _
                        }),
                        isSentByMe: S,
                        msgKey: e_msgKey,
                        orderPaymentStatus
                    });
                } else {
                    if ((o("WAWebOrdersExpansionCountries").getOrdersExpansionAllowedCountries()?.length ?? 0) === 0) {
                        orderPaymentStatus = null;
                    }
                    let N;
                    if (n[4] !== x || n[5] !== e_msgKey) {
                        N = x ? s.jsx(r("WAWebMediaDocumentPreview"), {
                            embedded: true,
                            msgKey: e_msgKey
                        }) : undefined;
                        n[4] = x;
                        n[5] = e_msgKey;
                        n[6] = N;
                    } else {
                        N = n[6];
                    }
                    const documentPreview = N;
                    let w;
                    if (n[7] !== interactiveHeader || n[8] !== preview || n[9] !== _) {
                        w = c({
                            interactiveHeader,
                            preview,
                            type: _
                        }) ?? undefined;
                        n[7] = interactiveHeader;
                        n[8] = preview;
                        n[9] = _;
                        n[10] = w;
                    } else {
                        w = n[10];
                    }
                    a = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
                        amount: o("WAWebCurrencyUtils").formatAmount({
                            amount: k.totalAmount,
                            currency: k.currency
                        }),
                        documentPreview,
                        quantity: k.quantity,
                        orderId: k.referenceId,
                        text: o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(k.items),
                        numberOfItems: k.items.length,
                        isSentByMe: S,
                        thumbnail: w,
                        payIcons: m(T, k),
                        orderPaymentStatus
                    });
                }
            }
        } else if (g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
            let F;
            if (n[11] !== e_msgKey || n[12] !== e.displayType || n[13] !== e.quotedMsg) {
                F = s.jsx(o("WAWebInteractiveOrderStatusHeader.react").InteractiveOrderStatusHeader, {
                    displayType: e.displayType,
                    msgKey: e_msgKey,
                    quotedMsg: e.quotedMsg
                });
                n[11] = e_msgKey;
                n[12] = e.displayType;
                n[13] = e.quotedMsg;
                n[14] = F;
            } else {
                F = n[14];
            }
            a = F;
        } else if (g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS || g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD) {
            let O;
            if (n[15] !== e_msgKey || n[16] !== e.displayType || n[17] !== e.quotedMsg) {
                O = s.jsx(r("WAWebInteractiveOrderQuotedMessage.react"), {
                    displayType: e.displayType,
                    msgKey: e_msgKey,
                    quotedMsg: e.quotedMsg
                });
                n[15] = e_msgKey;
                n[16] = e.displayType;
                n[17] = e.quotedMsg;
                n[18] = O;
            } else {
                O = n[18];
            }
            a = O;
        }
        return a;
    }
    function m(e, t) {
        if (t == null || !o("WAWebABProps").getABPropConfigValue("br_enable_payment_logos_on_bubble") || !o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)) {
            return [];
        }
        const n = [];
        if (e.contact.isEnterprise) {
            const r = o("WAWebThemeContext").isDarkTheme();
            const a = [
                u.paywithIcon,
                u.paddingAll4,
                u.marginStart4,
                r && u.iconDarkBackground
            ];
            if (o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(t)) {
                n.push(s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
                    iconXstyle: a
                }));
            }
            if (o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(e) && o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(t) && n.push(s.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
                iconXstyle: a
            }))) {
                n.push(s.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
                    iconXstyle: a
                }));
            }
            if (o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(e) && o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(t)) {
                n.push(s.jsx(o("WAWebPaymentBoletoLogoIcon.react").PaymentBoletoLogoIcon, {
                    iconXstyle: a
                }));
            }
        } else {
            const i = [
                u.paywithIcon,
                u.paddingAll4,
                u.marginStart4,
                u.iconDarkBackground
            ];
            if (o("WAWebOrderStatus").isSimplifiedOrder(t) && o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(t)) {
                n.push(s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
                    iconXstyle: i
                }));
            }
        }
        return n;
    }
    function p({ chat, displayType, info, isPaymentDetailsEnabled, isSentByMe, msgKey, orderPaymentStatus }) {
        if (o("WAWebOrderStatus").isPaymentRequest(chat, info) && !_(chat) && isPaymentDetailsEnabled) {
            return s.jsx(r("WAWebPaymentDetailsPixCodeBubbleHeader.react"), {
                displayType,
                msgKey
            });
        }
        return s.jsx(r("WAWebSimplifiedPaymentHeader.react"), {
            amount1000: info.totalAmount * 1000,
            currency: info.currency,
            isSentByMe,
            payIcons: m(chat, info),
            orderPaymentStatus,
            chat,
            isPaymentRequest: o("WAWebOrderStatus").isPaymentRequest(chat, info),
            msgKey,
            paymentSettings: info.paymentSettings,
            displayType
        });
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(chat) {
        return (chat.contact.isEnterprise || chat.contact?.isHosted === true) && o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(chat);
    }
    function f(e, t, orderInfo, a) {
        if (t) {
            return s.jsx(o("WAWebPaymentDetailsBubbleHeaderLoadable").WAWebPaymentDetailsBubbleHeaderLoadable, {
                msgKey: e
            });
        }
        return s.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
            isSentByMe: a,
            orderInfo
        });
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = d;
}, 98);