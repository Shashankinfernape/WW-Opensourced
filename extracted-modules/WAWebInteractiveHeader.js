__d("WAWebInteractiveHeader", [
    "WAWebBizBroadcastProRemoteMediaHeaderLoadable",
    "WAWebBizProduct",
    "WAWebBookingConfirmationHeader.react",
    "WAWebBrPaymentRequest",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveHeaderAction",
    "WAWebInAppSignupConfirmationHeader.react",
    "WAWebInAppSignupPrompt",
    "WAWebInAppSignupPromptHeader.react",
    "WAWebInteractiveImageHeader",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveNativeFlowOrderHeader",
    "WAWebInteractiveTitleHeader",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentPreview",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPaymentReminderHeader.react",
    "WAWebPaymentRequestHeader.react",
    "WAWebVideoPreview.react",
    "react",
    "stylex",
    "useWAWebConversationPanelCanCompose",
    "useWAWebIsBizBroadcastProChat",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebIsMsgTrusted",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        headerSpacing: {
            marginTop: "x1198e8h",
            marginInlineEnd: "x1lxpwgx",
            marginBottom: "xzueoph",
            marginInlineStart: "xw01apr",
            $$css: true
        },
        paymentRequestHeaderSpacing: {
            marginTop: "x1198e8h",
            marginInlineEnd: "x1lxpwgx",
            marginBottom: "x16pr9af",
            marginInlineStart: "xw01apr",
            $$css: true
        },
        paymentRequestCtaHeaderSpacing: {
            marginTop: "xdj266r",
            marginInlineEnd: "x18faa90",
            marginBottom: "xzueoph",
            marginInlineStart: "x137kccz",
            $$css: true
        },
        signupPromptHeaderSpacing: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        }
    };
    function d({ displayType, headerRef, isMsgVisible, minTextHeight, msgKey, quotedMsg }) {
        let a;
        const f = r("useWAWebUIM")();
        const g = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (a = o("WAWebMsgGetters")).getType,
            a.getNativeFlowName,
            a.getInteractiveType,
            a.getInteractivePayload,
            a.getNativeFlowButtons,
            a.getInteractiveHeader,
            a.getIsFromTemplate,
            o("WAWebFrontendMsgGetters").getMediaData,
            a.getLocal,
            a.getPmCampaignId,
            a.getIsNewsletterMsg
        ]);
        const h = g[0];
        const y = g[1];
        const C = g[2];
        const b = g[3];
        const v = g[4];
        const S = g[5];
        const R = g[6];
        const L = g[7];
        const isLocal = g[8];
        const campaignId = g[9];
        const I = g[10];
        const T = o("WAWebFrontendMsgGetters").getChatByMsgKey(msgKey, I);
        const isBizBroadcastProChat = r("useWAWebIsBizBroadcastProChat")(T);
        const x = r("useWAWebConversationPanelCanCompose")(T);
        const $ = x[0];
        const P = r("useWAWebIsMsgTrusted")(msgKey);
        const N = o("WAWebOrderDetails").getOrderInfoFor({
            interactivePayload: b,
            interactiveType: C,
            nativeFlowButtons: v,
            nativeFlowName: y,
            type: h
        });
        const M = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(T, N?.referenceId, o("WAWebOrderStatus").isSimplifiedOrder(N));
        const w = o("useWAWebMediaDataValues").useOptionalMediaDataValues(L, [
            o("WAWebMediaDataGetters").getFilehash
        ]) ?? [
            null
        ];
        const A = w[0];
        const hasLocalMediaBlob = r("useWAWebIsBlobInMemoryCache")(A);
        if (h !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        const O = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfoFor({
            interactivePayload: b,
            interactiveType: C,
            nativeFlowName: y,
            type: h
        });
        let B;
        let W;
        let q = false;
        let U = false;
        let V = false;
        if (o("WAWebOrderStatusButton").getOrderStatusButtonFor({
            interactivePayload: b,
            type: h
        }) == null && S != null && S.mediaType) {
            W = m({
                campaignId,
                displayType,
                hasLocalMediaBlob,
                headerRef,
                isBizBroadcastProChat,
                isLocal,
                isMsgVisible,
                mediaData: L,
                mediaType: S.mediaType,
                msgKey,
                trusted: P
            });
        }
        if (y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO || y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS || y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS || y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD) {
            B = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                msgKey,
                quotedMsg,
                displayType
            });
            q = y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS && o("WAWebOrderStatus").isPaymentRequest(T, N);
        } else if (y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER) {
            B = u.jsx(r("WAWebPaymentReminderHeader.react"), {
                msgKey
            });
        } else if (y === r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION) {
            B = u.jsx(r("WAWebBookingConfirmationHeader.react"), {
                msgKey
            });
        } else if (y === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP) {
            B = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                msgKey
            });
        } else if (y === r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP && O != null) {
            B = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                info: O,
                msgKey
            });
            V = true;
        } else if (y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST) {
            if (o("WAWebBrPaymentRequest").shouldShowPaymentRequestPayWithHeader(R)) {
                B = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                    msgKey
                });
                U = true;
            }
        } else if (S && (S.title != null || S.subtitle != null)) {
            B = W ? u.jsx(r("WAWebInteractiveTitleHeader"), {
                msgKey
            }) : <div className="x1k70j0n">{u.jsx(r("WAWebInteractiveTitleHeader"), {
                msgKey
            })}</div>;
        }
        const H = S?.mediaType;
        if (W != null && y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS && N != null && (H === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT || H === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE && o("WAWebOrderStatus").isSimplifiedOrder(N))) {
            W = null;
        }
        if (B) {
            const G = r("WAWebGetInteractiveHeaderAction")({
                canCompose: $,
                interactivePayload: b,
                interactiveType: C,
                msgKey,
                nativeFlowName: y,
                orderInfo: N,
                type: h,
                uimContext: f
            });
            if (G) {
                const z = M == null;
                const j = z && o("WAWebOrderStatus").isSimplifiedOrder(N);
                B = <div role="button" onClick={j ? null : G.onClick}>{B}</div>;
            }
        }
        if (B == null && W == null) {
            return null;
        }
        let K;
        if (q) {
            K = c.paymentRequestHeaderSpacing;
        } else if (U) {
            K = c.paymentRequestCtaHeaderSpacing;
        } else if (V) {
            K = c.signupPromptHeaderSpacing;
        } else {
            K = c.headerSpacing;
        }
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(K), {
            children: [
                B && W ? <div className="xzueoph">{W}</div> : W,
                B
            ]
        })}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m({ campaignId, displayType, hasLocalMediaBlob, headerRef, isBizBroadcastProChat, isLocal, isMsgVisible, mediaData, mediaType, msgKey, trusted }) {
        if (isBizBroadcastProChat && !hasLocalMediaBlob && isLocal && campaignId != null && (mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE || mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO)) {
            return <div data-testid="bb_pro_remote_media_frame" className="x1bu39yj xnjobev x19iali1 x6ikm8r x10wlt62 xh8yej3">{u.jsx(o("WAWebBizBroadcastProRemoteMediaHeaderLoadable").WAWebBizBroadcastProRemoteMediaHeaderLoadable, {
                campaignId,
                mediaType,
                msgKey
            })}</div>;
        }
        if (mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE) {
            return u.jsx(r("WAWebInteractiveImageHeader"), {
                msgKey,
                displayType: displayType ?? undefined,
                isMsgVisible,
                pictureRef: headerRef ?? r("WAWebNoop")
            });
        }
        if (mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT) {
            return u.jsx(r("WAWebMediaDocumentPreview"), {
                msgKey
            });
        }
        if (mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO) {
            if (mediaData == null) {
                return null;
            }
            return u.jsx(r("WAWebVideoPreview.react"), {
                msgKey,
                mediaData,
                displayType: displayType ?? undefined
            });
        }
        if (mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.PRODUCT) {
            return u.jsx(r("WAWebBizProduct"), {
                displayAuthor: false,
                msgKey,
                displayType: displayType ?? undefined,
                trusted,
                isCarouselCard: true
            });
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${mediaType}`);
        })();
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = d;
}, 98);