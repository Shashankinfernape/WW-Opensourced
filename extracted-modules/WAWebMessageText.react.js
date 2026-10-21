__d("WAWebMessageText.react", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebBizCatalogPreviewContainer.react",
    "WAWebBizCtwaContext.react",
    "WAWebBizSuspiciousLabel.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WAWebClock",
    "WAWebCommonNewsletterStrings",
    "WAWebConfirmPopup.react",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmoji",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFormatHeaderFooter",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupJoinModalUtilsGetGroupInviteActionText",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebJoinCallLinkAriaLabel",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebLinkPreviewEligibility",
    "WAWebLogChannelPostInteraction",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMessageAnimatedEmoji.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageStaticSingleEmoji.react",
    "WAWebMessageTextBody.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgSelectors",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebPaymentLinkComponents.react",
    "WAWebPaymentLinkPreviewWithTrustSignalsFeature",
    "WAWebPaymentLinkTrustSignalFooter.react",
    "WAWebPaymentLinkWamLogger",
    "WAWebPreCallUserJourneyLogger",
    "WAWebQuotedMsgModelUtils",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebSpoilerGating",
    "WAWebStickerPackCollectionMd",
    "WAWebStickerPackUtils",
    "WAWebStickerStoreFlowLoadable",
    "WAWebUseBotCommands",
    "WAWebUseBotMessageWithAnimation",
    "WAWebUtilsShouldShowVideoPreview",
    "WAWebVideoLinkPreviewContainer.react",
    "WAWebWamEnumChannelPostInteractionType",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumTsSurface",
    "cr:17104",
    "cr:9382",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
    "useWAWebChatPreferenceValues",
    "useWAWebMsgValues",
    "useWAWebSendViewCount"
], function(t, n, r, o, a, i, l, s) {
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const d_useContext = d.useContext;
    const _ = {
        horizontalLinkPreviewLayout: {
            maxWidth: "x65f84u",
            $$css: true
        },
        callLinkContrastLink: {
            color: "xk4n5i7 x17f7hit",
            $$css: true
        }
    };
    const f = n("cr:17104") ?? {};
    const f_handleClickCallLink = f.handleClickCallLink;
    function h({ contact, displayAuthor, displayType, msg, position, quotedMsg, stickerLikeBubbleContainerRef, theme, trusted }) {
        const v = o("WAWebMsgSelectors").showForwarded(msg);
        const S = o("WAWebBizSuspiciousLabel.react").useSuspiciousLabel({
            msgKey: msg.id,
            displayType
        });
        const { ctwaContext, text } = S;
        const E = displayAuthor || v || text != null;
        const k = {
            0: "x1198e8h x1lxpwgx xzueoph xw01apr",
            2: "x1lxpwgx xzueoph xw01apr x1ok221b",
            1: "x1lxpwgx xzueoph xw01apr x1198e8h",
            3: "x1lxpwgx xzueoph xw01apr x1198e8h"
        }[!!E << 1 | (quotedMsg != null) << 0];
        let I;
        let T;
        let D;
        let isCallLink = false;
        let horizontalLayout = false;
        let P = null;
        const N = d_useContext(r("WAWebChatThemeModeContext"));
        const N_isVibrant = N.isVibrant;
        const w = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebFrontendMsgGetters").getIsAnimatedEmoji
        ]);
        const A = w[0];
        const F = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebFrontendMsgGetters").getIsSingleEmoji
        ]);
        const O = F[0];
        const B = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebFrontendMsgGetters").getJSONAssetForAnimatedEmoji
        ]);
        const asset = B[0];
        const q = o("useWAWebChatPreferenceValues").useChatPreferenceValues(r("WAWebChatPreferenceCollection").getDefault().id, [
            o("WAWebChatPreferenceGetters").getAutoplayAnimatedImages
        ]);
        const U = q[0];
        const V = o("useWAWebSendViewCount").useSendViewCount(msg.id, {
            displayType
        });
        const H = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebFrontendMsgGetters").getAsUrl
        ]);
        const G = H[0];
        const z = y(msg, displayType);
        if (msg.ctwaContext) {
            I = m.jsx(r("WAWebBizCtwaContext.react"), {
                msgKey: msg.id,
                wrapperClass: k
            });
        } else if (trusted === true && z) {
            const j = r("WAWebUtilsShouldShowVideoPreview")(msg);
            if (j) {
                const Component = r("WAWebVideoLinkPreviewContainer.react");
                I = <div className={k}><Component msg={msg.unsafe()} onExternalLinkOpen={function() {
                    o("WAWebLogChannelPostInteraction").logChannelPostInteraction({
                        interactionType: o("WAWebWamEnumChannelPostInteractionType").CHANNEL_POST_INTERACTION_TYPE.EXTERNAL_LINK_OPEN_TAP,
                        msg: msg.unsafe(),
                        rawUrl: msg.matchedText
                    });
                }}/></div>;
            } else {
                const K = o("WAWebApiParse").parseAPICmd(msg.matchedText, o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD);
                if (K.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
                    I = <div className={k}>{m.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
                        msgKey: msg.id,
                        displayType,
                        isInvite: true
                    })}</div>;
                    if (displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
                        const X = o("WAWebGroupJoinModalUtilsGetGroupInviteActionText").getGroupInviteActionText({
                            inGroup: o("WAWebMsgGetters").getIsSentByMe(msg),
                            groupType: msg.inviteGrpType ?? o("WAWebGroupType").GroupType.DEFAULT
                        });
                        const Y = function(t) {
                            const msg_matchedText = msg.matchedText;
                            o("WAWebExternalLink.react").openExternalLink(msg_matchedText);
                        };
                        T = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                            items: [
                                {
                                    label: X,
                                    onClick: Y,
                                    testid: "group-invite-link-action"
                                }
                            ]
                        });
                    }
                } else if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && K.resultType === o("WAWebApi").APICmd.NEWSLETTER) {
                    const J = K.data.type === "view" && K.data.serverId !== undefined;
                    if (J) {
                        const Z = o("WAWebMediaLinkPreviewUtils").getLinkPreviewThemes(G, displayType);
                        const { bubbleTheme, linkPreviewTheme } = Z;
                        D = bubbleTheme;
                        I = <div className={k}>{m.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
                            msgKey: msg.id,
                            displayType,
                            theme: linkPreviewTheme
                        })}</div>;
                    } else {
                        I = <div className={k}>{m.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
                            msgKey: msg.id,
                            displayType,
                            isInvite: true
                        })}</div>;
                    }
                    if (displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
                        const ne = K.data;
                        const { serverId, type } = ne;
                        const ae = o("WAWebCommonNewsletterStrings").getNewsletterLinkActionLabel(type, serverId);
                        const testid = type === "view" ? "newsletter-invite-link-action" : "newsletter-create-action";
                        const le = function(t) {
                            o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd(K.data);
                        };
                        T = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                            items: [
                                {
                                    label: ae,
                                    onClick: le,
                                    testid
                                }
                            ]
                        });
                    }
                } else if (K.resultType === o("WAWebApi").APICmd.CATALOG) {
                    I = <div className={k}>{m.jsx(r("WAWebBizCatalogPreviewContainer.react"), {
                        msg: msg.unsafe()
                    })}</div>;
                    if (displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
                        const se = function(t) {
                            const msg_matchedText = msg.matchedText;
                            o("WAWebExternalLink.react").openExternalLink(msg_matchedText);
                        };
                        const ue = s._("View catalogue");
                        T = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                            items: [
                                {
                                    label: ue,
                                    onClick: se
                                }
                            ]
                        });
                    }
                } else {
                    K.resultType;
                    if (G) {
                        const ce = o("WAWebMediaLinkPreviewUtils").getLinkPreviewThemes(G, displayType);
                        const { bubbleTheme, linkPreviewTheme } = ce;
                        D = bubbleTheme;
                        P = K.resultType === o("WAWebApi").APICmd.PAYMENT_LINK ? K.data.psp : null;
                        const pe = function() {
                            o("WAWebLogChannelPostInteraction").logChannelPostInteraction({
                                interactionType: o("WAWebWamEnumChannelPostInteractionType").CHANNEL_POST_INTERACTION_TYPE.EXTERNAL_LINK_OPEN_TAP,
                                msg: msg.unsafe(),
                                rawUrl: msg.matchedText
                            });
                            if (o("WAWebPaymentLinkWamLogger").shouldLogReceiverEvent(msg)) {
                                o("WAWebPaymentLinkWamLogger").genLogClickEvent({
                                    interaction_component: o("WAWebPaymentLinkWamLogger").ClickInteractionComponent.LINK_PREVIEW,
                                    msg
                                }, P).catch((e)=>{
                                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                        "error logging payment link message click"
                                    ]))).catching(r("getErrorSafe")(e));
                                });
                            }
                        };
                        const EComponent = (t)=>{
                            const Component = r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable;
                            o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component stickerPackId={t} onSticker={r("WAWebSendStickerToActiveChatStickersAction")} msg={msg.unsafe()}/>, {
                                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                            });
                        };
                        const fe = function() {
                            const e = o("WAWebStickerPackUtils").extractStickerPackIdFromUrl(msg.body);
                            if (e != null) {
                                o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchStickerPack(e).then(()=>{
                                    EComponent(e);
                                }).catch(r("WAWebNoop"));
                            }
                        };
                        if (o("WAWebABProps").getABPropConfigValue("wa_web_horizontal_link_previews")) {
                            horizontalLayout = true;
                        }
                        const Component = o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer;
                        I = <div className={k}><Component msgKey={msg.id} displayType={displayType} theme={linkPreviewTheme} onClick={pe} horizontalLayout={horizontalLayout}/></div>;
                        const ge = s._("View sticker pack");
                        if (o("WAWebApiParse").isStickerPackURL(msg.body)) {
                            T = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                                theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.STICKER_PACK,
                                items: [
                                    {
                                        label: ge,
                                        title: ge,
                                        onClick: fe,
                                        disabled: false,
                                        testid: "view-sticker-pack"
                                    }
                                ]
                            });
                        } else if (K.resultType === o("WAWebApi").APICmd.PAYMENT_LINK) {
                            T = m.jsx(r("WAWebPaymentLinkComponents.react"), {
                                msg,
                                psp: K.data.psp
                            });
                        } else if (K.resultType === o("WAWebApi").APICmd.CALL_LINK) {
                            const he = function() {
                                new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger().clickCallLinkFromChat();
                                const e = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
                                const t = o("WAWebChatGetters").getIsGroup(e);
                                const r = t ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_GROUP_CHAT : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_INDIVIDUAL_CHAT;
                                let a = f_handleClickCallLink;
                                if (a == null && n("cr:9382") != null) {
                                    a = n("cr:9382").handleClickCallLink;
                                }
                                a?.(K, r);
                            };
                            isCallLink = true;
                            const ye = s._("Join call");
                            T = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                                items: [
                                    {
                                        label: ye,
                                        title: ye,
                                        ariaLabel: o("WAWebJoinCallLinkAriaLabel").getJoinCallLinkAriaLabel(K.data.callType, o("WAWebClock").Clock.timestampStr(msg.t)),
                                        onClick: he,
                                        disabled: false,
                                        testid: "join-call-link"
                                    }
                                ]
                            });
                        }
                    }
                }
            }
        }
        const Ce = !!(quotedMsg && !msg.id.fromMe && o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminParentGroupJid(msg.unsafe()));
        const be = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminGroupJid(msg.unsafe());
        if (Ce && be) {
            const ve = o("WAWebChatCollection").ChatCollection.get(be);
            const Se = r("WAWebGroupMetadataCollection").get(be) || {};
            const { participants, subject } = Se;
            const Ee = s._("Add to group");
            const KeComponent = function() {
                let e = null;
                const t = o("WAWebMsgGetters").getSender(msg.unsafe());
                if (participants != null && participants.iAmAdmin()) {
                    if (t != null && participants != null && participants.get(t)) {
                        e = s._("{requester-name} is already added to the group \"{subgroup-name}\".", [
                            s._param("requester-name", m.jsx(o("WAWebEmojiText.react").EmojiText, {
                                text: o("WAWebFrontendContactGetters").getDisplayName(msg.senderObj)
                            })),
                            s._param("subgroup-name", m.jsx(o("WAWebEmojiText.react").EmojiText, {
                                text: subject
                            }))
                        ]);
                    }
                } else {
                    e = s._("You're no longer a group admin. Only group admins can add members to the group.");
                }
                if (e) {
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager} tsNavigationData={{
                        surface: "unknown",
                        viewName: "message-text"
                    }}>{e}</Component>);
                    return;
                }
                if (ve) {
                    o("WAWebModifyParticipantsGroupAction").addParticipants(ve, [
                        msg.senderObj
                    ]).catch(r("WAWebNoop"));
                }
            };
            T = m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: Ee,
                        onClick: KeComponent
                    }
                ]
            });
        }
        const Ie = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(msg.body);
        const botCommands = o("WAWebUseBotCommands").useBotCommands(msg);
        const botMsgTextToRender = o("WAWebUseBotMessageWithAnimation").useBotMessageWithAnimation(msg);
        const handleLinkClick = function(rawUrl) {
            if (o("WAWebPaymentLinkWamLogger").shouldLogReceiverEvent(msg)) {
                o("WAWebPaymentLinkWamLogger").genLogClickEvent({
                    interaction_component: o("WAWebPaymentLinkWamLogger").ClickInteractionComponent.LINK,
                    msg
                }, P).catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "error logging payment link message click"
                    ]))).catching(r("getErrorSafe")(e));
                });
            }
            o("WAWebLogChannelPostInteraction").logChannelPostInteraction({
                interactionType: o("WAWebWamEnumChannelPostInteractionType").CHANNEL_POST_INTERACTION_TYPE.EXTERNAL_LINK_OPEN_TAP,
                msg: msg.unsafe(),
                rawUrl
            });
        };
        const $e = m.jsx(r("WAWebMessageTextBody.react"), {
            msgKey: msg.id,
            displayType,
            handleLinkClick,
            trusted,
            botCommands,
            botMsgTextToRender,
            linkXstyle: o("WAWebChatThemeGatingUtils").shouldApplyCallLinkContrastOverride({
                isCallLink,
                isSentByMe: msg.id.fromMe,
                isVibrant: N_isVibrant
            }) ? _.callLinkContrastLink : undefined
        });
        let Pe;
        let Ne;
        if (o("WAWebMsgGetters").getSupportsMessageFooter(msg)) {
            const Me = msg.isDynamicReplyButtonsMsg ? o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(o("WAWebMsgLinks").getHeaderLinks(msg.unsafe()), trusted === true) : {};
            const { formatters, selectable } = Me;
            Pe = r("isStringNullOrEmpty")(msg.title) ? null : <div {...babelHelpers.extends({}, {
                0: {
                    className: "xs9asl8 x6prxxf xk50ysn x17fgdl5 x14ug900"
                },
                1: {
                    className: "xs9asl8 x6prxxf xk50ysn x17fgdl5 x14ug900 x1nn3v0j"
                }
            }[!!displayAuthor << 0], {
                children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: msg.title,
                    dirMismatch: o("WAWebFrontendMsgGetters").getRtl(msg) !== r("WAWebL10N").isRTL(),
                    direction: o("WAWebFrontendMsgGetters").getDir(msg),
                    selectable,
                    formatters
                })
            })}/>;
            Ne = m.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                dir: o("WAWebFrontendMsgGetters").getDir(msg),
                footer: msg.footer,
                isShown: o("WAWebMsgGetters").getSupportsMessageFooter(msg),
                msgKey: msg.id,
                rtl: o("WAWebFrontendMsgGetters").getRtl(msg),
                trusted,
                type: msg.type
            });
        } else {
            if (o("WAWebPaymentLinkPreviewWithTrustSignalsFeature").shouldShowPaymentLinkTrustSignals(msg)) {
                Ne = m.jsx(r("WAWebPaymentLinkTrustSignalFooter.react"), {
                    dir: o("WAWebFrontendMsgGetters").getDir(msg),
                    msg: msg.unsafe(),
                    rtl: o("WAWebFrontendMsgGetters").getRtl(msg),
                    type: msg.type
                });
            }
        }
        const Fe = displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && !o("WAWebMsgGetters").getIsPSA(msg) && !Ie && !o("WAWebMsgGetters").getActiveBotMsgStreamingInProgress(msg);
        let Oe;
        if (quotedMsg) {
            Oe = <div {...babelHelpers.extends({}, {
                0: {
                    className: "x1198e8h x1lxpwgx xzueoph xw01apr"
                },
                1: {
                    className: "x1lxpwgx xzueoph xw01apr x1ok221b"
                }
            }[!!E << 0], {
                children: quotedMsg
            })}/>;
        }
        const Be = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebFrontendMsgGetters").getHasTemplateButtons
        ]);
        const We = Be[0];
        const qe = T != null || !!We || !!msg.isDynamicReplyButtonsMsg || o("WAWebMsgGetters").getIsBotPluginCarouselMsg(msg) || o("WAWebMsgGetters").getIsBotSearchResponse(msg);
        let Ue;
        if (o("WAWebMsgGetters").getIsBotSearchResponse(msg)) {
            Ue = <div className="x1n2onr6 x1anpbxc x1q5jw98">{m.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey: msg.id
            })}</div>;
        } else if (qe) {
            Ue = <div className="x10l6tqk xtijo5x x48lskh">{m.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey: msg.id
            })}</div>;
        }
        if (U && Ie && A && asset != null && o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled()) {
            return m.jsx(r("WAWebMessageAnimatedEmoji.react"), {
                msgKey: msg.id,
                asset,
                quotedMsg,
                displayAuthor,
                displayType,
                stickerLikeBubbleContainerRef,
                position
            });
        }
        const Ve = !(o("WAWebMsgGetters").getForwardedNewsletterMessageInfo(msg) != null && o("WAWebNewsletterGatingUtils").isNewsletterForwardBottomButtonEnabled());
        if (Ie && O != null) {
            return m.jsx(r("WAWebMessageStaticSingleEmoji.react"), {
                emoji: O,
                msgKey: msg.id,
                quotedMsg,
                displayAuthor,
                displayType,
                stickerLikeBubbleContainerRef,
                position
            });
        }
        const Component = r("WAWebMessageSpacerText.react");
        const Component_1 = r("WAWebMessageBubbleHiddenText.react");
        const Component_2 = r("WAWebMessageTextBubble.react");
        const He = <Component_2 msgKey={msg.id} displayType={displayType} displayAuthor={displayAuthor} hideMeta={qe} theme={D} xstyle={horizontalLayout && D === "portrait" && _.horizontalLinkPreviewLayout} useFixedWidth={msg.isDynamicReplyButtonsMsg}><Component_1 contact={msg.senderObj} msgKey={msg.id}>{Oe}{!msg.ctwaContext && text != null && m.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabelView, {
            ctwaContext,
            isLink: false,
            text
        })}{I}<Component msgKey={msg.id} overflowVisible={qe} spacer={msg.isFromTemplate || msg.isDynamicReplyButtonsMsg ? Fe && !msg.footer : Fe} data-id={msg.id}>{Pe}{$e}{Ne}{Ue}</Component>{Ve && T}</Component_1></Component_2>;
        return <div ref={V}>{He}</div>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y(msg, displayType) {
        const n = msg.unsafe();
        if (!o("WAWebMsgGetters").getLinkPreview(n)) {
            return false;
        }
        if (displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY_LINKS || !o("WAWebMsgGetters").getIsSpoiler(n) || !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) {
            return true;
        }
        const n_matchedText = n.matchedText;
        const a = o("WAWebFrontendMsgGetters").getText(n);
        return o("WAWebLinkPreviewEligibility").isLinkPreviewEligible({
            matchedText: n_matchedText,
            text: a
        });
    }
    l.default = h;
}, 226);