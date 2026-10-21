__d("WAWebMessageComponent.react", [
    "fbt",
    "WALogger",
    "WAMemoizeOne",
    "WAWebABProps",
    "WAWebAlbumMessageComponent.react",
    "WAWebAutomatedGreetingMessageText.react",
    "WAWebBizProduct",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBrPaymentRequest",
    "WAWebBroadcastNotification.react",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDisplayType",
    "WAWebEventsMessageComponent.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGroupsV4InviteMsg.react",
    "WAWebInteractiveMessage",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveResponseMessage",
    "WAWebMediaDocument.react",
    "WAWebMediaStickerPack.react",
    "WAWebMediaVideo.react",
    "WAWebMessageBizContentPlaceholder",
    "WAWebMessageBizOrder",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebMessageCiphertext.react",
    "WAWebMessageDebugPlaceholder.react",
    "WAWebMessageGif.react",
    "WAWebMessageGroupNotification.react",
    "WAWebMessageHistoryBundleMessage.react",
    "WAWebMessageHistoryNoticeMessage.react",
    "WAWebMessageList",
    "WAWebMessageLiveLocation.react",
    "WAWebMessageLoadingMedia.react",
    "WAWebMessageLocation.react",
    "WAWebMessageMultiVcard.react",
    "WAWebMessageNewsletterNotification.react",
    "WAWebMessageNotification.react",
    "WAWebMessagePicture.react",
    "WAWebMessagePluginRenderMsg",
    "WAWebMessageQuarantined.react",
    "WAWebMessageRevoked",
    "WAWebMessageStickerBubble.react",
    "WAWebMessageText.react",
    "WAWebMessageVcard.react",
    "WAWebMessageVcardDocument.react",
    "WAWebMessageViewOnce.react",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgType",
    "WAWebMusicMessage.react",
    "WAWebNativeFlowMessage",
    "WAWebNewsletterAdminInviteMessageComponent.react",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterFollowerInviteMessageComponent.react",
    "WAWebOversizedMessage.react",
    "WAWebPaymentMessage.react",
    "WAWebPollsMessageComponent",
    "WAWebPttAudioMessageComponent.react",
    "WAWebPttMessageComponent.react",
    "WAWebPtvMessageComponent",
    "WAWebQuestionReplyQuotedMessage.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebQuotedMsg.react",
    "WAWebQuotedMsgAdminGroupName.react",
    "WAWebQuotedMsgModelUtils",
    "WAWebQuotedMsgUtils",
    "WAWebRequestPhoneNumberMessage.react",
    "WAWebRichResponseMessage.react",
    "WAWebSharableEventInviteMessageComponent.react",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebUnsupportedMessage",
    "WAWebUprMessage.react",
    "WAWebUprMessageDispatch",
    "WAWebVcardParsingUtils",
    "WDSIconIcPhotoLibrary.react",
    "WDSIconMusicNoteSlash.react",
    "cr:10210",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebMsgValues",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useImperativeHandle, useRef } = m;
    function g(e) {
        const t = o("react-compiler-runtime").c(25);
        const { chat, displayType, isFollowUpReply, isMsgVisible, msg, t: t_1 } = e;
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || displayType === o("WAWebDisplayType").DISPLAY_TYPE.ALL_REPLIES) {
            return null;
        }
        if (msg.quotedType === o("WAWebQuotedMsgUtils").QuotedType.AUTO && isFollowUpReply === true && o("WAWebABProps").getABPropConfigValue("hide_auto_quotes_on_web")) {
            const c = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(msg);
            if (c != null && o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(c) >= 2) {
                return null;
            }
        }
        let m;
        if (t[0] !== chat || t[1] !== displayType || t[2] !== isMsgVisible || t[3] !== msg || t[4] !== t_1) {
            m = Symbol.for("react.early_return_sentinel");
            e: {
                const p = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(msg);
                if (p) {
                    const _ = displayType === o("WAWebDisplayType").DISPLAY_TYPE.EDITING;
                    const f = p.id.toString();
                    let g;
                    if (t[6] !== msg) {
                        g = o("WAWebStateUtils").unproxy(msg.safe());
                        t[6] = msg;
                        t[7] = g;
                    } else {
                        g = t[7];
                    }
                    let h;
                    if (t[8] !== chat) {
                        h = o("WAWebStateUtils").unproxy(chat);
                        t[8] = chat;
                        t[9] = h;
                    } else {
                        h = t[9];
                    }
                    const Component = r("WAWebQuotedMsg.react");
                    m = <Component key={f} msg={p} rootMsg={g} displayType={displayType} theme={_ ? "editing" : "conversation"} chat={h} t={t_1} isMsgVisible={isMsgVisible} onClick={_ ? undefined : function() {
                        o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageBubbleTapped(chat.id, p.unsafe());
                    }} shouldHideQuotedMsgAuthor={msg.shouldHideQuotedMsgAuthor}/>;
                    break e;
                }
            }
            t[0] = chat;
            t[1] = displayType;
            t[2] = isMsgVisible;
            t[3] = msg;
            t[4] = t_1;
            t[5] = m;
        } else {
            m = t[5];
        }
        if (m !== Symbol.for("react.early_return_sentinel")) {
            return m;
        }
        let y;
        if (t[10] !== msg) {
            y = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminGroupJid(msg);
            t[10] = msg;
            t[11] = y;
        } else {
            y = t[11];
        }
        const quotedGroupJid = y;
        if (quotedGroupJid) {
            let b;
            if (t[12] !== msg) {
                b = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminGroupSubject(msg);
                t[12] = msg;
                t[13] = b;
            } else {
                b = t[13];
            }
            const quotedGroupSubject = b;
            let S;
            if (t[14] !== msg) {
                S = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminParentGroupJid(msg);
                t[14] = msg;
                t[15] = S;
            } else {
                S = t[15];
            }
            const quotedParentGroupJid = S;
            let L;
            if (t[16] !== quotedGroupJid || t[17] !== quotedGroupSubject || t[18] !== quotedParentGroupJid) {
                L = d.jsx(o("WAWebQuotedMsgAdminGroupName.react").QuotedMsgAdminGroupName, {
                    quotedGroupJid,
                    quotedGroupSubject,
                    quotedParentGroupJid
                });
                t[16] = quotedGroupJid;
                t[17] = quotedGroupSubject;
                t[18] = quotedParentGroupJid;
                t[19] = L;
            } else {
                L = t[19];
            }
            return L;
        }
        let E;
        if (t[20] !== msg) {
            E = o("WAWebMsgGetters").getQuestionReplyQuotedMessage(msg);
            t[20] = msg;
            t[21] = E;
        } else {
            E = t[21];
        }
        const questionReplyQuotedMessage = E;
        if (questionReplyQuotedMessage) {
            let I;
            if (t[22] !== msg || t[23] !== questionReplyQuotedMessage) {
                I = d.jsx(r("WAWebQuestionReplyQuotedMessage.react"), {
                    questionReplyQuotedMessage,
                    replyMsg: msg
                });
                t[22] = msg;
                t[23] = questionReplyQuotedMessage;
                t[24] = I;
            } else {
                I = t[24];
            }
            return I;
        }
        return null;
    }
    function h(t) {
        let n;
        let a;
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const { associatedMessages, displayAuthor, displayType, isFollowUpReply, isMsgVisible, msg } = l;
        const SRef = useRef(null);
        const R = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
            (n = o("WAWebMsgGetters")).getBody,
            n.getCaption,
            (a = o("WAWebFrontendMsgGetters")).getRtl,
            a.getDir,
            n.getIsSentByMe,
            n.getIsPSA,
            n.getIsViewOnce,
            n.getCtwaContext,
            n.getInitialPageSize,
            a.getHasTemplateButtons,
            n.getThumbnail,
            n.getOrderTitle,
            n.getIsGif,
            n.getIsLive
        ]);
        const L = R[0];
        const E = R[1];
        const k = R[2];
        const I = R[3];
        const T = R[4];
        const D = R[5];
        const x = R[6];
        const $ = R[7];
        const P = R[8];
        const N = R[9];
        const M = R[10];
        const w = R[11];
        const A = R[12];
        const F = R[13];
        const O = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
            n.getIsVcardOverMmsDocument,
            a.getMediaData,
            n.getNativeFlowName,
            n.getNativeFlowButtons,
            a.getSenderObj,
            n.getSubtype,
            n.getType,
            n.getT,
            n.getId,
            n.getTitle,
            n.getIsFromTemplate,
            n.getVcard,
            n.getVcardList,
            n.getInviteGrpType,
            n.getFutureproofType,
            n.getFutureproofSubtype
        ]);
        const B = O[0];
        const W = O[1];
        const q = O[2];
        const U = O[3];
        const V = O[4];
        const H = O[5];
        const G = O[6];
        const z = O[7];
        const j = O[8];
        const K = O[9];
        const Q = O[10];
        const vcard = O[11];
        const vcardList = O[12];
        const J = O[13];
        const Z = O[14];
        const ee = O[15];
        const te = o("useWAWebChatValues").useChatValues(l.chat.id, [
            o("WAWebFrontendChatGetters").getTrusted,
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getNewsletterMetadata
        ]);
        const ne = te[0];
        const re = te[1];
        const oe = te[2];
        const l_chat = l.chat;
        const getRef = r("useWAWebStableCallback")(function() {
            return SRef.current;
        });
        const le = useCallback(r("WAMemoizeOne")(function({ vcardList }) {
            if (vcardList) {
                return vcardList.map((e)=>babelHelpers.extends({}, e, {
                        parsedVcard: o("WAWebVcardParsingUtils").parseVcard(e.vcard)
                    }));
            }
            return [];
        }), []);
        useImperativeHandle(t_ref, function() {
            return {
                getRef
            };
        }, [
            getRef
        ]);
        const se = msg.safe();
        const ue = a.getAsViewOnce(msg);
        const ce = g({
            displayType,
            msg,
            chat: l_chat,
            t: z,
            isMsgVisible,
            isFollowUpReply
        });
        if (ue != null) {
            const Component = r("WAWebMessageViewOnce.react");
            return <Component displayType={displayType} displayAuthor={displayAuthor} msgKey={ue.id} quotedMsg={ce} ref={SRef} trusted={o("WAWebMsgModelPropUtils").isTrusted(msg)}/>;
        }
        const de = o("WAWebMessagePluginRenderMsg").renderMsg({
            chat: l_chat,
            msg,
            displayAuthor
        });
        if (de != null) {
            return de;
        }
        const Component = o("WAWebMessagePicture.react").ImageMessage;
        const Component_1 = r("WAWebBizProduct");
        const Component_2 = r("WAWebMessageGroupNotification.react");
        const Component_3 = r("WAWebMessageNotification.react");
        const Component_4 = o("WAWebPttAudioMessageComponent.react").Audio;
        const Component_5 = r("WAWebMediaVideo.react");
        const Component_6 = r("WAWebMessageVcard.react");
        const Component_7 = r("WAWebMediaDocument.react");
        const Component_8 = r("WAWebMessageNotification.react");
        const Component_9 = r("WAWebMessageNotification.react");
        switch(se.type){
            case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
                return d.jsx(r("WAWebNativeFlowMessage"), {
                    msgKey: se.id,
                    displayAuthor,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.CHAT:
            case o("WAWebMsgType").MSG_TYPE.LIST_RESPONSE:
            case o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE:
                if (H === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
                    return d.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                        isBotMsgStreaming: false
                    });
                }
                return d.jsx(r("WAWebMessageText.react"), {
                    msg: o("WAWebStateUtils").unproxy(se),
                    contact: se.senderObj,
                    quotedMsg: ce,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    displayType,
                    displayAuthor,
                    stickerLikeBubbleContainerRef: l.stickerLikeBubbleContainerRef,
                    position: l.position
                });
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                return <Component msgKey={se.id} displayType={displayType} mediaData={se.mediaData} ref={SRef} quotedMsg={ce} maxWidth={l.maxWidth} isMsgVisible={isMsgVisible} trusted={o("WAWebMsgModelPropUtils").isTrusted(se.unsafe())} displayAuthor={displayAuthor} preventDownload={!o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(se.unsafe(), l_chat)}/>;
            case o("WAWebMsgType").MSG_TYPE.PRODUCT:
                return <Component_1 msgKey={se.id} displayType={displayType} displayAuthor={displayAuthor} trusted={o("WAWebMsgModelPropUtils").isTrusted(se.unsafe())} onProductClick={l.onProductClick} quotedMsg={ce} isCarouselCard={false}/>;
            case o("WAWebMsgType").MSG_TYPE.GP2:
                return <Component_2 msg={se} ref={SRef} clickable/>;
            case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION:
                if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                    return d.jsx(r("WAWebMessageNewsletterNotification.react"), {
                        msgKey: se.id
                    });
                }
                return null;
            case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
                return d.jsx(r("WAWebBroadcastNotification.react"), {
                    msgKey: se.id,
                    clickable: true,
                    isLastMsg: false
                });
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
            case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
                return <Component_3 contact={o("WAWebStateUtils").unproxy(l_chat).contact} msg={se} ref={SRef} displayAuthor={displayAuthor}/>;
            case o("WAWebMsgType").MSG_TYPE.DEBUG:
                return null;
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
                return <Component_4 msgKey={se.id} mediaData={se.mediaData} quotedMsg={ce} displayAuthor={displayAuthor} displayType={displayType} ref={SRef} enableKbSeekSpeedChange/>;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                if (se.isGif === true) {
                    const Component = o("WAWebMessageGif.react").WrappedGif;
                    return <Component displayAuthor={displayAuthor} displayType={displayType} isMsgVisible={isMsgVisible} maxWidth={l.maxWidth} mediaData={se.mediaData} msgKey={se.id} quotedMsg={ce} ref={SRef} trusted={o("WAWebMsgModelPropUtils").isTrusted(se.unsafe())}/>;
                }
                return <Component_5 displayAuthor={displayAuthor} displayType={displayType} hover={l.hover} msgKey={se.id} quotedMsg={ce} ref={SRef} trusted={o("WAWebMsgModelPropUtils").isTrusted(se.unsafe())}/>;
            case o("WAWebMsgType").MSG_TYPE.PTV:
                return d.jsx(r("WAWebPtvMessageComponent"), {
                    msgKey: se.id,
                    quotedMsg: ce,
                    mediaData: se.mediaData,
                    displayAuthor,
                    displayType,
                    position: l.position
                });
            case o("WAWebMsgType").MSG_TYPE.VCARD:
                return <Component_6 msgKey={se.id} vcard={vcard} quotedMsg={ce} displayType={displayType} displayAuthor={displayAuthor} onMessageClick={l.onMessageClick}/>;
            case o("WAWebMsgType").MSG_TYPE.MULTI_VCARD:
                return d.jsx(r("WAWebMessageMultiVcard.react"), {
                    msgKey: se.id,
                    vcardList: le({
                        vcardList
                    }),
                    quotedMsg: ce,
                    displayType,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE:
                return d.jsx(r("WAWebGroupsV4InviteMsg.react"), {
                    msgKey: se.id,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE:
                return d.jsx(r("WAWebNewsletterAdminInviteMessageComponent.react"), {
                    msgKey: se.id,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE:
                return d.jsx(r("WAWebNewsletterFollowerInviteMessageComponent.react"), {
                    msgKey: se.id,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.LOCATION:
                if (se.isLive === true) {
                    return d.jsx(o("WAWebMessageLiveLocation.react").LiveLocation, {
                        msgKey: se.id,
                        quotedMsg: ce,
                        trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                        displayAuthor,
                        displayType
                    });
                }
                return d.jsx(o("WAWebMessageLocation.react").Location, {
                    msgKey: msg.id,
                    quotedMsg: ce,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    displayAuthor,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.PAYMENT:
                return d.jsx(r("WAWebPaymentMessage.react"), {
                    msgKey: se.id,
                    quotedMsg: ce,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return d.jsx(o("WAWebPttMessageComponent.react").Ptt, {
                    msgKey: se.id,
                    mediaData: se.mediaData,
                    quotedMsg: ce,
                    displayAuthor,
                    displayType,
                    enableKbSeekSpeedChange: true
                });
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
                return d.jsx(o("WAWebPollsMessageComponent").Poll, {
                    associatedMessages,
                    msgKey: se.id,
                    displayAuthor,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    quotedMsg: ce,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
                return d.jsx(o("WAWebPollsMessageComponent").PollResultSnapshot, {
                    associatedMessages,
                    msgKey: se.id,
                    displayAuthor,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    quotedMsg: ce,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.EVENT_CREATION:
                return d.jsx(o("WAWebEventsMessageComponent.react").Event, {
                    msgKey: se.id,
                    chat: l_chat,
                    displayAuthor,
                    quotedMsg: ce,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE:
                return d.jsx(o("WAWebSharableEventInviteMessageComponent.react").SharableEventInvite, {
                    msgKey: se.id,
                    chat: l_chat,
                    displayAuthor,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    quotedMsg: ce,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.MUSIC:
                return d.jsx(r("WAWebMusicMessage.react"), {
                    displayAuthor,
                    displayType,
                    msgKey: se.id,
                    position: l.position,
                    quotedMsg: ce,
                    stickerLikeBubbleContainerRef: l.stickerLikeBubbleContainerRef
                });
            case o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER:
                return d.jsx(r("WAWebRequestPhoneNumberMessage.react"), {
                    msgKey: se.id
                });
            case o("WAWebMsgType").MSG_TYPE.STICKER:
                return d.jsx(r("WAWebMessageStickerBubble.react"), {
                    msgKey: se.id,
                    stickerLikeBubbleContainerRef: l.stickerLikeBubbleContainerRef,
                    mediaData: se.mediaData,
                    quotedMsg: ce,
                    displayAuthor,
                    position: l.position,
                    forwardRef: l.forwardStickerRef,
                    displayType,
                    animateOnView: true
                });
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                if (B) {
                    const Component = r("WAWebMessageVcardDocument.react");
                    return <Component msgKey={se.id} mediaData={W} displayAuthor={displayAuthor} displayType={displayType} getQuotedMsg={function() {
                        return ce;
                    }} onMessageClick={l.onMessageClick}/>;
                }
                return <Component_7 ref={SRef} msgKey={se.id} displayType={displayType} quotedMsg={ce} trusted={o("WAWebMsgModelPropUtils").isTrusted(se.unsafe())} displayAuthor={displayAuthor}/>;
            case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
                return d.jsx(r("WAWebMediaStickerPack.react"), {
                    msgKey: se.id,
                    displayType,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.ALBUM:
                return d.jsx(r("WAWebAlbumMessageComponent.react"), {
                    msgKey: se.id,
                    associatedMessages,
                    quotedMsg: ce,
                    displayType,
                    displayAuthor,
                    chat: o("WAWebStateUtils").unproxy(l_chat),
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    isMsgVisible
                });
            case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
                return d.jsx(r("WAWebRichResponseMessage.react"), {
                    msgKey: se.id,
                    displayAuthor,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA:
                return d.jsx(r("WAWebMessageLoadingMedia.react"), {
                    msgKey: se.id
                });
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
                {
                    let me;
                    const pe = [
                        (me = o("WAWebMsgType")).MSG_TYPE.EVENT_CREATION,
                        me.MSG_TYPE.EVENT_RESPONSE,
                        me.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
                        me.MSG_TYPE.ALBUM,
                        me.MSG_TYPE.MUSIC,
                        me.MSG_TYPE.SHARABLE_EVENT_INVITE,
                        me.MSG_TYPE.RICH_RESPONSE
                    ];
                    if (Z != null && pe.includes(Z)) {
                        return d.jsx(r("WAWebUnsupportedMessage"), {
                            msg: se,
                            displayAuthor,
                            hideUpdateButton: true,
                            customPlaceholderIconProps: y(Z)
                        });
                    }
                    const _e = [
                        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Acp2SystemMessage,
                        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.StatusMentionMessage,
                        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.StatusGroupMentionMessage,
                        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MemberLabel,
                        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryBundle,
                        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryNotice
                    ];
                    if (Z === o("WAWebMsgType").MSG_TYPE.PROTOCOL && _e.includes(ee)) {
                        return d.jsx(r("WAWebUnsupportedMessage"), {
                            msg: se,
                            displayAuthor,
                            hideUpdateButton: true
                        });
                    }
                    let customUpdateButtonFbt = null;
                    if (Z === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) {
                        customUpdateButtonFbt = s._("To see it, get the latest version of WhatsApp.");
                    } else if (Z === o("WAWebMsgType").MSG_TYPE.PROTOCOL && ee === "message_edit") {
                        customUpdateButtonFbt = s._("Update WhatsApp");
                    }
                    if (customUpdateButtonFbt != null) {
                        return d.jsx(r("WAWebUnsupportedMessage"), {
                            msg: se,
                            displayAuthor,
                            customUpdateButtonFbt,
                            hideUpdateButton: true
                        });
                    }
                    return d.jsx(r("WAWebUnsupportedMessage"), {
                        msg: o("WAWebStateUtils").unproxy(se),
                        displayAuthor,
                        hideUpdateButton: se.subtype === "phone_only_feature"
                    });
                }
            case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
                return d.jsx(r("WAWebMessageCiphertext.react"), {
                    msgKey: se.id,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER:
                return d.jsx(r("WAWebMessageDebugPlaceholder.react"), {
                    msgKey: se.id
                });
            case o("WAWebMsgType").MSG_TYPE.QUARANTINED:
                return d.jsx(r("WAWebMessageQuarantined.react"), {
                    msgKey: se.id,
                    displayAuthor,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.REVOKED:
                SRef.current = null;
                return d.jsx(r("WAWebMessageRevoked"), {
                    msgKey: se.id,
                    displayType,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
                return d.jsx(r("WAWebOversizedMessage.react"), {
                    msgKey: se.id,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.HSM:
                return d.jsx(r("WAWebMessageText.react"), {
                    msg: o("WAWebStateUtils").unproxy(se),
                    contact: se.senderObj,
                    quotedMsg: ce,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    displayType,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY:
                return d.jsx(r("WAWebMessageText.react"), {
                    msg: o("WAWebStateUtils").unproxy(se),
                    contact: se.senderObj,
                    quotedMsg: ce,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(se.unsafe()),
                    displayType,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
                if (H === "ephemeral_setting" || H === "share_phone_number" || H === "event_edit_decrypted" || H === "limit_sharing_system_message") {
                    const Component = r("WAWebMessageNotification.react");
                    return <Component contact={o("WAWebStateUtils").unproxy(l_chat).contact} msg={se} ref={SRef}/>;
                }
                return d.jsx(r("WAWebUnsupportedMessage"), {
                    msg: o("WAWebStateUtils").unproxy(se),
                    displayAuthor,
                    hideUpdateButton: true
                });
            case o("WAWebMsgType").MSG_TYPE.ORDER:
                return d.jsx(r("WAWebMessageBizOrder"), {
                    displayAuthor,
                    msgKey: se.id
                });
            case o("WAWebMsgType").MSG_TYPE.LIST:
                return d.jsx(r("WAWebMessageList"), {
                    msg: o("WAWebStateUtils").unproxy(se),
                    displayAuthor,
                    quotedMsg: ce
                });
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
                if (o("WAWebGetBrazilnteractiveActions").hasOrderOffsiteCardPay(se) || o("WAWebBrPaymentRequest").hasPaymentRequestOffsiteCardPay(se)) {
                    return d.jsx(r("WAWebUnsupportedMessage"), {
                        msg: o("WAWebGalaxyFlowsUtils").getInvalidatedFlowMessageFromHistorySync(se),
                        displayAuthor,
                        hideUpdateButton: true
                    });
                }
                if (se.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW && !o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(o("WAWebStateUtils").unproxy(se))) {
                    return d.jsx(r("WAWebUnsupportedMessage"), {
                        msg: o("WAWebGalaxyFlowsUtils").getInvalidatedFlowMessageFromHistorySync(se),
                        displayAuthor,
                        hideUpdateButton: true
                    });
                }
                if (o("WAWebUprMessageDispatch").isUprPayload(se)) {
                    return d.jsx(r("WAWebUprMessage.react"), {
                        msg: o("WAWebStateUtils").unproxy(se),
                        displayAuthor,
                        displayType
                    });
                }
                return d.jsx(r("WAWebInteractiveMessage"), {
                    msgKey: se.id,
                    quotedMsg: ce,
                    displayAuthor,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
                if (se.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW && !o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(o("WAWebStateUtils").unproxy(se))) {
                    return d.jsx(r("WAWebUnsupportedMessage"), {
                        msg: o("WAWebGalaxyFlowsUtils").getInvalidatedFlowMessageFromHistorySync(se),
                        displayAuthor,
                        hideUpdateButton: true
                    });
                }
                return d.jsx(r("WAWebInteractiveResponseMessage"), {
                    msgKey: se.id,
                    quotedMsg: ce,
                    displayAuthor,
                    displayType
                });
            case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
                return d.jsx(r("WAWebUnsupportedMessage"), {
                    msg: se,
                    displayAuthor,
                    customUpdateButtonFbt: s._("To see it, get the latest version of WhatsApp."),
                    hideUpdateButton: true
                });
            case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE:
                return <Component_8 contact={o("WAWebStateUtils").unproxy(l_chat).contact} msg={se} ref={SRef}/>;
            case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED:
                return <Component_9 contact={o("WAWebStateUtils").unproxy(l_chat).contact} msg={se} ref={SRef}/>;
            case o("WAWebMsgType").MSG_TYPE.COMMENT:
                return d.jsx(r("WAWebUnsupportedMessage"), {
                    msg: se,
                    displayAuthor,
                    hideUpdateButton: true
                });
            case o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER:
                return d.jsx(r("WAWebMessageBizContentPlaceholder"), {
                    msg: se,
                    displayAuthor
                });
            case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
                return d.jsx(r("WAWebAutomatedGreetingMessageText.react"), {
                    msg: se,
                    displayType,
                    displayAuthor,
                    chat: l_chat
                });
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
                return d.jsx(r("WAWebMessageHistoryBundleMessage.react"), {
                    msgKey: se.id
                });
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
                return d.jsx(r("WAWebMessageHistoryNoticeMessage.react"), {
                    msgKey: se.id
                });
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "messageList:render Unknown message type: ",
            ""
        ])), G);
        return d.jsx(r("WAWebUnsupportedMessage"), {
            msg: o("WAWebStateUtils").unproxy(se),
            displayAuthor,
            hideUpdateButton: true
        });
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y(e) {
        if (e === o("WAWebMsgType").MSG_TYPE.ALBUM) {
            return {
                icon: d.jsx(r("WDSIconIcPhotoLibrary.react"), {
                    height: 20,
                    testid: "album_futureproof_bubble_icon",
                    width: 20
                }),
                theme: "small-icon"
            };
        }
        if (e === o("WAWebMsgType").MSG_TYPE.MUSIC) {
            return {
                icon: d.jsx(r("WDSIconMusicNoteSlash.react"), {
                    testid: "music_futureproof_bubble_icon"
                })
            };
        }
    }
    l.default = h;
}, 226);