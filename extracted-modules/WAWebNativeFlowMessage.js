__d("WAWebNativeFlowMessage", [
    "fbt",
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebBuyerEventLogger",
    "WAWebContactUtils",
    "WAWebCopyToClipboard",
    "WAWebEmojiText.react",
    "WAWebFbtAppName",
    "WAWebFrontendMsgGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebGetQuickPayAction",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveNativeFlowOrderHeader",
    "WAWebL10N",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumStructuredMessageClass",
    "WDSIconIcContentCopy.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = [
        "menu"
    ];
    let d;
    const m = d || (d = o("react"));
    const p = {
        marginBottom6: {
            marginBottom: "xzueoph",
            $$css: true
        }
    };
    const _ = {
        headerTitle: {
            fontSize: "x6prxxf",
            fontWeight: "xk50ysn",
            $$css: true
        }
    };
    function f(e) {
        const t = o("react-compiler-runtime").c(49);
        const { displayAuthor, displayType, msgKey } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let u;
            l = [
                (u = o("WAWebMsgGetters")).getType,
                u.getNativeFlowName,
                u.getNativeFlowButtons,
                u.getInteractiveType,
                u.getInteractivePayload,
                u.getTitle,
                u.getIsSentByMe,
                u.getIsNewsletterMsg,
                o("WAWebFrontendMsgGetters").getRtl,
                o("WAWebFrontendMsgGetters").getDir
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const f = d[0];
        const h = d[1];
        const b = d[2];
        const v = d[3];
        const S = d[4];
        const R = d[5];
        const L = d[6];
        const E = d[7];
        const k = d[8];
        const I = d[9];
        const T = r("useWAWebIsMsgTrusted")(msgKey);
        let D;
        let x;
        if (t[1] !== I || t[2] !== displayType || t[3] !== S || t[4] !== v || t[5] !== E || t[6] !== L || t[7] !== msgKey || t[8] !== b || t[9] !== h || t[10] !== k || t[11] !== R || t[12] !== T || t[13] !== f) {
            const $ = o("WAWebOrderDetails").getOrderInfoFor({
                interactivePayload: S,
                interactiveType: v,
                nativeFlowButtons: b,
                nativeFlowName: h,
                type: f
            });
            if (h === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
                if ($) {
                    x = m.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
                        isSentByMe: L,
                        orderInfo: $
                    });
                    let P;
                    if (t[16] !== msgKey || t[17] !== $) {
                        P = C($, msgKey);
                        t[16] = msgKey;
                        t[17] = $;
                        t[18] = P;
                    } else {
                        P = t[18];
                    }
                    let N;
                    if (t[19] !== P) {
                        N = [
                            P
                        ];
                        t[19] = P;
                        t[20] = N;
                    } else {
                        N = t[20];
                    }
                    D = N;
                }
            } else if (h === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
                const M = $?.referenceId;
                const w = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, E);
                const A = M != null && w != null && o("WAWebOrderStatus").findOrderStatus(w, M) === o("WAWebOrderStatus").OrderStatus.Pending;
                let F;
                if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
                    F = {
                        className: "x1198e8h x1lxpwgx xzueoph xw01apr"
                    };
                    t[21] = F;
                } else {
                    F = t[21];
                }
                let O;
                if (t[22] !== displayType || t[23] !== msgKey) {
                    O = <div {...babelHelpers.extends({}, F, {
                        children: m.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                            msgKey,
                            displayType
                        })
                    })}/>;
                    t[22] = displayType;
                    t[23] = msgKey;
                    t[24] = O;
                } else {
                    O = t[24];
                }
                x = O;
                let B;
                if (t[25] !== A) {
                    B = A ? s._("Review and pay") : s._("View details");
                    t[25] = A;
                    t[26] = B;
                } else {
                    B = t[26];
                }
                let W;
                if (t[27] !== B) {
                    W = {
                        label: B,
                        onClick: y
                    };
                    t[27] = B;
                    t[28] = W;
                } else {
                    W = t[28];
                }
                D = [
                    W
                ];
                const q = $?.type;
                if (!L) {
                    const U = o("WAWebGetQuickPayAction").getQuickPayAction(q, !A);
                    if (U != null) {
                        let V;
                        if (t[29] !== U) {
                            const H = U.menu;
                            const G = babelHelpers.objectWithoutPropertiesLoose(U, c);
                            V = G;
                            t[29] = U;
                            t[30] = V;
                        } else {
                            V = t[30];
                        }
                        D.push(V);
                    }
                }
            } else if (h === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
                let z;
                if (t[31] === Symbol.for("react.memo_cache_sentinel")) {
                    z = {
                        className: "x1198e8h x1lxpwgx xzueoph xw01apr"
                    };
                    t[31] = z;
                } else {
                    z = t[31];
                }
                let j;
                if (t[32] !== displayType || t[33] !== msgKey) {
                    j = <div {...babelHelpers.extends({}, z, {
                        children: m.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                            msgKey,
                            displayType
                        })
                    })}/>;
                    t[32] = displayType;
                    t[33] = msgKey;
                    t[34] = j;
                } else {
                    j = t[34];
                }
                x = j;
            } else {
                let K;
                if (t[35] !== I || t[36] !== k || t[37] !== R || t[38] !== T) {
                    K = r("isStringNullOrEmpty")(R) ? null : m.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: R,
                        selectable: T,
                        direction: I,
                        dirMismatch: k !== r("WAWebL10N").isRTL(),
                        inferLinesDirection: true,
                        xstyle: [
                            p.marginBottom6,
                            _.headerTitle
                        ]
                    });
                    t[35] = I;
                    t[36] = k;
                    t[37] = R;
                    t[38] = T;
                    t[39] = K;
                } else {
                    K = t[39];
                }
                x = K;
                let Q;
                if (t[40] !== b) {
                    Q = b?.map(g);
                    t[40] = b;
                    t[41] = Q;
                } else {
                    Q = t[41];
                }
                D = Q;
            }
            t[1] = I;
            t[2] = displayType;
            t[3] = S;
            t[4] = v;
            t[5] = E;
            t[6] = L;
            t[7] = msgKey;
            t[8] = b;
            t[9] = h;
            t[10] = k;
            t[11] = R;
            t[12] = T;
            t[13] = f;
            t[14] = D;
            t[15] = x;
        } else {
            D = t[14];
            x = t[15];
        }
        const displayFooter = h !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
        let Y;
        if (t[42] !== D || t[43] !== displayAuthor || t[44] !== displayType || t[45] !== x || t[46] !== msgKey || t[47] !== displayFooter) {
            Y = m.jsx(r("WAWebInteractiveBubble.react"), {
                msgKey,
                displayAuthor,
                displayFooter,
                header: x,
                displayType,
                actions: D
            });
            t[42] = D;
            t[43] = displayAuthor;
            t[44] = displayType;
            t[45] = x;
            t[46] = msgKey;
            t[47] = displayFooter;
            t[48] = Y;
        } else {
            Y = t[48];
        }
        return Y;
    }
    function g(e) {
        return {
            label: e.buttonText?.displayText ?? "",
            onClick: h
        };
    }
    function h() {
        return r("WAWebShowMessageActionFallbackErrorAction")();
    }
    function y() {
        const Component = o("WAWebFbtAppName").WAWebAppShortName;
        return r("WAWebShowMessageActionFallbackErrorAction")({
            title: s._("Orders can't be viewed on {=m1}", [
                s._implicitParam("=m1", <Component>{s._("")}</Component>)
            ]),
            body: s._("Use WhatsApp on your phone to view this order.")
        });
    }
    function C({ paymentSettings }, msgKey) {
        return {
            label: s._("Copy Pix key"),
            onClick: function() {
                const a = paymentSettings?.at(0)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]?.key;
                const i = o("WAWebUserPrefsTypes").PixKeyType.cast(paymentSettings?.at(0)?.[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]?.keyType);
                if (a == null || !o("WAWebCopyToClipboard").copyTextToClipboard(o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(a, i))) {
                    o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Couldn't copy Pix key")
                    }));
                    return;
                }
                o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Pix key copied")
                }));
                b(msgKey);
            },
            Icon: r("WDSIconIcContentCopy.react")
        };
    }
    function b(msgKey) {
        const a = o("WAWebMsgCollection").MsgCollection.get(msgKey);
        if (a == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[native-flow] copy Pix key log skipped, message left the collection"
            ])));
            return;
        }
        if (!o("WAWebMsgGetters").getIsSentByMe(a)) {
            const i = r("WAWebPonyfillsCryptoRandomUUID")();
            const l = a.senderObj?.id.toJid();
            const s = o("WAWebContactUtils").getMaybeBizPlatformForLogging(l);
            const c = s === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
            const d = o("WAWebFrontendMsgGetters").getChat(a);
            const m = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(d.id)].toLowerCase();
            const p = new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
                bizPlatform: c ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : s,
                businessOwnerJid: l,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify(c ? {
                    cta: "p2p_pix",
                    flow: "P2P",
                    chat_type: m,
                    is_cta_available: true,
                    accepted_payment_method: [
                        "pix"
                    ],
                    payment_method_choice: "pix",
                    order_funnel_id: i,
                    referral: "chat_attachment"
                } : {
                    order_funnel_id: i
                }),
                messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "CopyPixKey Log"
            ])));
            p.commit();
            o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                isLoggingEnabled: o("WAWebBizFrontendGatingUtils").isCopyPixKeyBuyerLoggingEnabled(l),
                psFunnelId: i,
                attributes: c ? {
                    cta: "p2p_pix",
                    flow: "P2P",
                    chatType: m,
                    isCtaAvailable: true,
                    acceptedPaymentMethod: [
                        "pix"
                    ],
                    paymentMethodChoice: "pix",
                    referral: "chat_attachment"
                } : {
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
                    chatType: m
                },
                interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_KEY,
                bizPlatform: c ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN : s
            });
        }
    }
    l.default = f;
}, 226);