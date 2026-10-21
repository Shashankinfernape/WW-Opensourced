__d("WAWebWrapperMessageDropdownMenu.react", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAuraGating",
    "WAWebBotBaseGating",
    "WAWebBotForwardCapability",
    "WAWebBotGating",
    "WAWebBotSourcesDrawerLoadable",
    "WAWebBotTos",
    "WAWebBotUtils",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebChatCommunityUtils",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebCopyUtils",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebDropdownItemSeparator.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFavoriteStickerAction",
    "WAWebFileSaver",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebForwardCreateBroadcastButton.react",
    "WAWebFrontendMsgGetters",
    "WAWebGoogleCalendarLink",
    "WAWebGroupAgentParticipant",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebInMemoryLottieStickerCache",
    "WAWebIsInThreadsViewContext",
    "WAWebKeepInChatMsgUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "WAWebMessageContextMenuActionsWamEvent",
    "WAWebMetaAiRingAssetResolver",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCanDownloadMsg",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgInfoUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgReply",
    "WAWebMsgType",
    "WAWebNewsletterPinMessageFlow",
    "WAWebNotesLogEvents",
    "WAWebNotesUtils",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebReactionGatingUtils",
    "WAWebReactionsUtils",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventInviteCoerceTimestampSeconds",
    "WAWebSoundStickerUtils",
    "WAWebStickerPremiumStatus",
    "WAWebStickerUtils",
    "WAWebUnifiedResponseUtils",
    "WAWebViewRepliesMenuItem.react",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageContextMenuActionType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WAWebWamEnumMessageLevelAction",
    "WDSIconIc123.react",
    "WDSIconIcAdd.react",
    "WDSIconIcBookmark.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCampaignMegaphone.react",
    "WDSIconIcCheckBox.react",
    "WDSIconIcCode.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcDownload.react",
    "WDSIconIcEdit.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcFavoriteFilled.react",
    "WDSIconIcGrade.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLanguage.react",
    "WDSIconIcLink.react",
    "WDSIconIcMessageReport.react",
    "WDSIconIcMood.react",
    "WDSIconIcOpenInNew.react",
    "WDSIconIcPersonReply.react",
    "WDSIconIcPushPin.react",
    "WDSIconIcReply.react",
    "WDSIconIcShareWindows.react",
    "WDSIconIcThumbDown.react",
    "WDSIconIcThumbUp.react",
    "WDSIconWdsIcAiContent.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSIconWdsIcSticker.react",
    "WDSMenuItem.react",
    "cr:23046",
    "cr:40048",
    "cr:7237",
    "cr:7565",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastEntrypointEnabled",
    "useWAWebIsNewsletterMsgPinned",
    "useWAWebIsPinnedMsg"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useContext = u.useContext;
    function m(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "megaphone-refreshed";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = c.jsx(r("WDSIconIcCampaignMegaphone.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    function p(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "reply_privately_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = c.jsx(r("WDSIconIcPersonReply.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    function _(msg, t) {
        new (o("WAWebMessageContextMenuActionsWamEvent")).MessageContextMenuActionsWamEvent({
            isAGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(msg)),
            isMultiAction: false,
            isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(msg),
            messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType").MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
            messageContextMenuOption: t
        }).commit();
    }
    function f(msg) {
        new (o("WAWebMessageContextMenuActionsWamEvent")).MessageContextMenuActionsWamEvent({
            isAGroup: o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(msg)),
            isMultiAction: false,
            isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(msg),
            messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType").MESSAGE_CONTEXT_MENU_ACTION_TYPE.OPEN
        }).commit();
    }
    function g({ isFileInCache, mediaData, msg }) {
        return mediaData != null && !msg.isViewOnce && (mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED || mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT && isFileInCache);
    }
    function h({ associatedMessages, displayType, isEmbeddedChat = false, isFileInCache = false, msg, onAddAiContentLabelClick, onAddPaidPartnershipLabelClick, onAddToNoteClick, onAskMetaAiClick, onBotNegativeFeedbackClick, onBotPositiveFeedbackClick, onCopyFavoriteStickerClick, onCopyLottieStickerClick, onEditClick, onFavoriteStickerClick, onForwardClick, onKeepClick, onMessageDeleteClick, onMessageDocumentCopyClick, onMessageDownloadClick, onMessageSaveAsClick, onMessageSelectClick, onMsgInfoClick, onNewsletterEmbedClick, onNewsletterMessageLinkCopyClick, onOpenContactChatClick, onOpenStickerPackClick, onPinClick, onPrivateReplyClick, onReactionClick, onReplyClick, onReportClick, onRTAClick, onShareClick, onStarClick, onSupportBotNegativeFeedbackClick, onSupportBotPositiveFeedbackClick, onUndoKeepClick, onUnfavoriteStickerClick, onUnpinClick, onUnstarClick, rightClickedLinkHref }) {
        const ce = o("useWAWebBizBroadcastEntrypointEnabled").useWAWebBizBroadcastEntrypointEnabled();
        f(msg);
        const de = o("WAWebFrontendMsgGetters").getChat(msg);
        const me = r("useWAWebIsPinnedMsg")(msg.id);
        const pe = r("useWAWebIsNewsletterMsgPinned")(msg.id);
        const _e = me || pe;
        const fe = u_useContext(r("WAWebIsInThreadsViewContext"));
        const ge = o("WAWebViewRepliesMenuItem.react").useViewRepliesMenuItems(msg, de);
        const he = [];
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) {
            return he;
        }
        if (displayType !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && !isEmbeddedChat && o("WAWebMsgInfoUtils").canOpenInfoDrawer(msg.unsafe())) {
            const ye = s._("Message info");
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="info" Icon={r("WDSIconIcInfo.react")} title={ye} onPress={function() {
                onMsgInfoClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.MESSAGE_INFO);
            }} testid="mi-msg-info"/>);
        }
        const Ce = s._("Reply");
        if (o("WAWebMsgReply").canReplyMsg(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="reply" Icon={r("WDSIconIcReply.react")} iconDirectional title={Ce} onPress={function() {
                onReplyClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY);
            }} testid="mi-msg-reply"/>);
        }
        if (!isEmbeddedChat && (o("WAWebMsgReply").canPrivateReply(msg) || o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(msg))) {
            const be = s._("Reply privately");
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="private_reply" Icon={p} title={be} onPress={function() {
                onPrivateReplyClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY_PRIVATELY);
            }} testid="mi-msg-reply"/>);
        }
        const ve = !(de.isSuspendedOrTerminated() && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) && !o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(msg) && !(msg.author?.isLid() && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(de.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) && !o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(de, o("WAWebFrontendMsgGetters").getSenderObj(msg)) && !o("WAWebGroupAgentParticipant").isBotAuthorDirectMessagingBlocked(msg.author, de);
        if (!isEmbeddedChat && o("WAWebMsgGetters").getIsGroupMsg(msg) && msg.author && !o("WAWebMsgGetters").getIsSentByMe(msg) && ve) {
            const Se = s._("Message {author}", [
                s._param("author", o("WAWebMsgModelUtils").getMsgDisplayName(msg))
            ]);
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="author" Icon={r("WDSIconWdsIcChat.react")} title={Se} onPress={function() {
                onOpenContactChatClick(o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage);
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.MESSAGE_CONTACT);
            }} testid="mi-msg-author" truncateText/>);
        }
        const msg_mediaData = msg.mediaData;
        const Le = window.getSelection()?.toString() ?? "";
        const Ee = s._("Copy");
        const ke = s._("Copy selected");
        if (Le.length > 0) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="copy-selected-text" Icon={r("WDSIconIcContentCopy.react")} title={ke} onPress={function() {
                o("WAWebCopyToClipboard").copyTextToClipboard(Le);
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY);
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.COPY,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
            }} testid="copy-selected-text-label"/>);
        } else if (r("WAWebEnvironment").isWindows && n("cr:7565") != null && n("cr:7565").supportsMediaFileCopy() && g({
            isFileInCache,
            mediaData: msg_mediaData,
            msg
        })) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="copy" Icon={r("WDSIconIcContentCopy.react")} title={Ee} onPress={function() {
                onMessageDocumentCopyClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY);
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.COPY,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
            }} testid="copy-label"/>);
        } else if (Le.length === 0 && o("WAWebCopyUtils").canCopyMessage(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="copy" Icon={r("WDSIconIcContentCopy.react")} title={Ee} onPress={function() {
                o("WAWebCopyUtils").copyMessageToClipboard(msg);
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY);
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.COPY,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
            }} testid="copy-label"/>);
        }
        if (rightClickedLinkHref != null && o("WAWebABProps").getABPropConfigValue("wa_web_copy_link_url_enabled")) {
            const Ie = s._("Copy link URL");
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="copy-link-url" Icon={r("WDSIconIcLink.react")} title={Ie} onPress={function() {
                o("WAWebCopyToClipboard").copyTextToClipboard(rightClickedLinkHref);
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_LINK_URL);
            }} testid="mi-msg-copy-link-url"/>);
        }
        if (!o("WAWebReactionGatingUtils").isHoverBarEnabled() && !o("WAWebReactionsUtils").isContextMenuReactiondEnabled() && o("WAWebReactionsUtils").canReactToMessage(msg) && (displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER)) {
            const Te = s._("React");
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="react-to-message" Icon={r("WDSIconIcMood.react")} title={Te} onPress={function() {
                onReactionClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REACT);
            }} testid="react-to-message"/>);
        }
        const De = s._("Download");
        if (!r("WAWebEnvironment").isWindows && o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(msg, true)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="download" Icon={r("WDSIconIcDownload.react")} title={De} onPress={function() {
                onMessageDownloadClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD);
            }} testid="mi-msg-download"/>);
        }
        const xe = s._("Forward");
        if (!fe && o("WAWebMsgActionCapability").canForwardMsg(msg)) {
            o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.contextMenuShownWithForward(de.id, msg);
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="forward" Icon={r("WDSIconIcFastForward.react")} iconDirectional title={xe} onPress={function() {
                onForwardClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD);
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.FORWARD,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
                o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.forwardTappedInContextMenu();
            }} testid="mi-msg-forward"/>);
        } else if (!fe) {
            o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.contextMenuShownWithoutForward(de.id, msg);
        }
        if (!fe && o("WAWebMsgActionCapability").canForwardMsg(msg) && y(msg) && ce && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastContextualEntrypointsEnabled()) {
            he.push(c.jsx(r("WAWebForwardCreateBroadcastButton.react"), {
                msg,
                variant: "menu-item"
            }, "send-as-business-broadcast"));
        }
        he.push(...ge);
        const $e = s._("Unpin");
        const Pe = pe && (de.newsletterMetadata?.iAmAdminOrOwner() ?? false);
        if (me || Pe) {
            const Ne = function() {
                if (o("WAWebMsgGetters").getIsNewsletterMsg(msg)) {
                    o("WAWebNewsletterPinMessageFlow").runUnpinNewsletterMessageFlow(de, msg);
                } else {
                    onUnpinClick();
                }
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.UNPIN_MESSAGE,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.PIN_OR_UNPIN);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="unpin" Icon={r("WDSIconWdsIcPushPinSlash.react")} title={$e} onPress={Ne} testid="mi-msg-unpin"/>);
        }
        const Me = s._("Add to calendar");
        const we = o("WAWebFrontendMsgGetters").getAsSharableEventInvite(msg);
        if (we != null && o("WAWebSharableEventGatingUtils").isSharableEventInviteDatetimeEnabled() && we.sharableEventInviteIsCanceled !== true && o("WAWebSharableEventGatingUtils").isSharableEventAddToCalendarEnabled(o("WAWebSharableEventGatingUtils").SharableEventAddToCalendarEntryPoint.MessageContextMenu)) {
            const Ae = r("WAWebSharableEventInviteCoerceTimestampSeconds")(we.sharableEventInviteStartTime);
            const Fe = r("WAWebSharableEventInviteCoerceTimestampSeconds")(we.sharableEventInviteEndTime);
            if (Ae != null && !o("WAWebSharableEventGatingUtils").isAddToCalendarHiddenByEventTime(Ae, Fe)) {
                const Oe = function() {
                    o("WAWebExternalLink.react").openExternalLink(r("WAWebGoogleCalendarLink")({
                        title: we.sharableEventInviteTitle,
                        description: we.sharableEventInviteCaption,
                        startTimeUnixSeconds: Ae,
                        endTimeUnixSeconds: Fe
                    }));
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.ADD_TO_CALENDAR);
                };
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="add-to-calendar" Icon={r("WDSIconIcCalendarMonth.react")} title={Me} onPress={Oe} testid="mi-msg-add-to-calendar"/>);
            }
        }
        const Be = s._("Pin");
        if (!_e && o("WAWebMsgActionCapability").canPinMsg(msg)) {
            const We = function() {
                if (o("WAWebMsgGetters").getIsNewsletterMsg(msg)) {
                    o("WAWebNewsletterPinMessageFlow").runPinNewsletterMessageFlow(de, msg);
                } else {
                    onPinClick();
                }
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.PIN_OR_UNPIN);
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.PIN_MESSAGE,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="pin" Icon={r("WDSIconIcPushPin.react")} title={Be} onPress={We} testid="mi-msg-pin"/>);
        }
        const qe = s._("Unkeep");
        if (o("WAWebMsgGetters").getIsKept(msg) && o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="unkeep" Icon={r("WDSIconWdsIcBookmarkSlash.react")} title={qe} onPress={function() {
                onUndoKeepClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.KEEP_OR_UNKEEP);
            }} testid="mi-msg-unkeep"/>);
        }
        const Ue = s._("Keep");
        if (!o("WAWebMsgGetters").getIsKept(msg) && o("WAWebKeepInChatMsgUtils").canShowKeepOption(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="keep" Icon={r("WDSIconIcBookmark.react")} title={Ue} onPress={function() {
                onKeepClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.KEEP_OR_UNKEEP);
            }} testid="mi-msg-keep"/>);
        }
        if (!isEmbeddedChat && !o("WAWebBotUtils").isMetaAiBot(de.id) && o("WAWebBotForwardCapability").canForwardMsgToMetaAi([
            msg
        ]) && !(o("WAWebMsgGetters").getIsGroupMsg(msg) && o("WAWebGroupAgentParticipant").isStandardBotProfileGroupAgent(msg.author)) && o("WAWebBotGating").isMetaAIChatInteractionEnabled()) {
            const Ve = s._("Ask Meta AI");
            const He = function() {
                onAskMetaAiClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.ASK_META_AI);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="ask-meta-ai" Icon={o("WAWebMetaAiRingAssetResolver").getMetaAiRingIcon()} title={Ve} onPress={He} testid="mi-msg-ask-meta-ai"/>);
        }
        const Ge = s._("Star");
        const ze = s._("Unstar");
        const Component = r("WDSMenuItem.react");
        const Component_1 = r("WDSMenuItem.react");
        if (o("WAWebMsgActionCapability").canStarMsg(msg)) {
            if (msg.star) {
                he.push(<Component key="star" Icon={r("WDSIconWdsIcGradeSlash.react")} title={ze} onPress={function() {
                    onUnstarClick();
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
                    o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                        msg,
                        chat: o("WAWebFrontendMsgGetters").getChat(msg),
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.UNSTAR,
                        messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                    });
                }} testid="mi-msg-unstar"/>);
            } else if (!o("WAWebMsgGetters").getIsKept(msg)) {
                he.push(<Component_1 key="star" Icon={r("WDSIconIcGrade.react")} title={Ge} onPress={function() {
                    onStarClick();
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
                    o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                        msg,
                        chat: o("WAWebFrontendMsgGetters").getChat(msg),
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.STAR,
                        messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                    });
                }} testid="mi-msg-star"/>);
            }
        }
        const je = s._("Good response");
        const Ke = s._("Bad response");
        if (o("WAWebMsgGetters").getIsCAPISupport(msg) && (o("WAWebMsgGetters").getIsBizBot1pResponse(msg) || o("WAWebMsgGetters").getIsSupportAIMessage(msg)) && o("WAWebABPropsSaga").getSagaFeedbackEnabled()) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="saga-positive-feedback" Icon={r("WDSIconIcThumbUp.react")} title={je} onPress={function() {
                onSupportBotPositiveFeedbackClick();
            }} testid="saga-positive-feedback"/>);
            const Component_1 = r("WDSMenuItem.react");
            he.push(<Component_1 key="saga-negative-feedback" Icon={r("WDSIconIcThumbDown.react")} title={Ke} onPress={onSupportBotNegativeFeedbackClick} testid="saga-negative-feedback"/>);
        }
        const Qe = s._("Good response");
        const Xe = s._("Bad response");
        if ((o("WAWebBotBaseGating").isBotEnabled() && o("WAWebBotTos").hasSeenBotTos() && !o("WAWebFrontendMsgGetters").getAsRevoked(msg) && o("WAWebMsgGetters").getIsMetaBotResponse(msg) || o("WAWebABProps").getABPropConfigValue("wabai_message_feedback_enabled") && o("WAWebMsgGetters").getIsBizBot1pResponse(msg)) && !o("WAWebMsgGetters").getIsCAPISupport(msg) && !o("WAWebChatGetters").getIsHatchBot(de) && !(o("WAWebMsgGetters").getIsGroupMsg(msg) && o("WAWebGroupAgentParticipant").isStandardBotProfileGroupAgent(msg.author))) {
            const Ye = function() {
                onBotPositiveFeedbackClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.BOT_FEEDBACK);
            };
            const Je = function() {
                onBotNegativeFeedbackClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.BOT_FEEDBACK);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="bot-positive-feedback" Icon={r("WDSIconIcThumbUp.react")} title={Qe} onPress={Ye} testid="mi-bot-positive-feedback"/>);
            const Component_1 = r("WDSMenuItem.react");
            he.push(<Component_1 key="bot-negative-feedback" Icon={r("WDSIconIcThumbDown.react")} title={Xe} onPress={Je} testid="mi-bot-negative-feedback"/>);
        }
        const sources = o("WAWebBotBaseGating").isBotEnabled() && !o("WAWebFrontendMsgGetters").getAsRevoked(msg) && o("WAWebMsgGetters").getIsMetaBotResponse(msg) ? o("WAWebUnifiedResponseUtils").getMetaAiEmbeddedSources(o("WAWebMsgGetters").getUnifiedResponse(msg)) : [];
        if (sources.length > 0) {
            const et = s._("Sources");
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="view-sources" Icon={r("WDSIconIcLanguage.react")} title={et} onPress={function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebBotSourcesDrawerLoadable").WAWebBotSourcesDrawerLoadable, {
                    sources
                }));
            }} testid="mi-msg-view-sources"/>);
        }
        const tt = s._("Send for admin review");
        if (displayType !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG && o("WAWebMsgActionCapability").canReportToAdmin(msg)) {
            const nt = function() {
                onRTAClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPORT_TO_ADMIN);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="rta" Icon={r("WDSIconIcMessageReport.react")} title={tt} onPress={nt} testid="mi-msg-rta"/>);
        }
        const rt = s._("Edit");
        if (o("WAWebMsgActionCapability").canShowMsgEditAction(msg, displayType, de)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="edit-message" Icon={r("WDSIconIcEdit.react")} title={rt} onPress={function() {
                onEditClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.EDIT);
            }} testid="mi-msg-edit"/>);
        }
        const ot = s._("Copy link");
        if (o("WAWebMsgActionCapability").canCopyNewsletterMessageLink(msg)) {
            const at = function() {
                onNewsletterMessageLinkCopyClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_NEWSLETTER_LINK);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="copy-newsletter-message-link" Icon={r("WDSIconIcLink.react")} title={ot} onPress={at} testid="mi-msg-copy-link"/>);
        }
        const it = s._("Embed");
        if (o("WAWebMsgActionCapability").canEmbedNewsletterMessage(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="embed-newsletter-message" Icon={r("WDSIconIcCode.react")} title={it} onPress={onNewsletterEmbedClick} testid="mi-msg-embed"/>);
        }
        const lt = s._("Add paid partnership");
        if (o("WAWebMsgActionCapability").canAddPaidPartnershipLabelToMsg(msg)) {
            const st = function() {
                onAddPaidPartnershipLabelClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.PAID_PARTNERSHIP);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="paid-partnership" Icon={m} iconDirectional title={lt} onPress={st} testid="mi-msg-paid-partnership"/>);
        }
        const ut = s._("Add AI content label");
        if (o("WAWebMsgActionCapability").canAddAiContentLabelToMsg(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="ai-content-label" Icon={r("WDSIconWdsIcAiContent.react")} title={ut} onPress={onAddAiContentLabelClick} testid="mi-msg-ai-content-label"/>);
        }
        const ct = s._("Remove from Favourites");
        const dt = s._("Add to Favourites");
        if (msg.type === o("WAWebMsgType").MSG_TYPE.STICKER && o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
            if (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(msg.filehash)) {
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="remove-favorite-sticker" Icon={r("WDSIconIcFavoriteFilled.react")} title={ct} onPress={function() {
                    onUnfavoriteStickerClick();
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FAVORITE_OR_UNFAVORITE_STICKER);
                }} testid="mi-remove-favorite-sticker"/>);
            } else if (o("WAWebSoundStickerUtils").canFavoriteStickerMsg(msg) && r("WAWebAuraGating").canUsePremiumSticker(msg.stickerPremiumStatus) && r("WAWebAuraGating").canUsePremiumSticker(msg.mediaData?.stickerPremiumStatus)) {
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="favorite-sticker" Icon={r("WDSIconIcFavorite.react")} title={dt} onPress={function() {
                    onFavoriteStickerClick();
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FAVORITE_OR_UNFAVORITE_STICKER);
                }} testid="mi-favorite-sticker"/>);
            }
        }
        const pt = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(msg.filehash);
        const _t = s._("Copy sticker image");
        if (msg.type === o("WAWebMsgType").MSG_TYPE.STICKER && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && o("WAWebStickerUtils").getStickerFileType(msg.mediaData.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE && o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(msg, de)) {
            const ft = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(msg.filehash);
            if (ft != null) {
                const gt = function() {
                    o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(ft);
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_STICKER);
                };
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="copy-favorite-sticker" Icon={r("WDSIconIcContentCopy.react")} title={_t} onPress={gt} testid="mi-copy-favorite-sticker"/>);
            }
        } else {
            if (msg.type === o("WAWebMsgType").MSG_TYPE.STICKER && pt != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(msg, de)) {
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="copy-favorite-sticker" Icon={r("WDSIconIcContentCopy.react")} title={_t} onPress={function() {
                    onCopyFavoriteStickerClick(pt);
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY_STICKER);
                }} testid="mi-copy-favorite-sticker"/>);
            }
        }
        const ht = s._("View pack");
        if (msg.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
            const vt = msg.mediaData;
            const { isFirstParty, stickerPackId } = vt;
            const Lt = msg.isAvatar;
            const Et = o("WAWebMsgGetters").getIsNewsletterMsg(msg) ? de.newsletterMetadata?.iAmAdminOrOwner() ?? false : true;
            const kt = msg.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM && msg.mediaData?.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
            if ((!kt || r("WAWebAuraGating").isStickersEnabled()) && stickerPackId != null && Lt !== true && isFirstParty === true && Et) {
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="open-sticker-pack" Icon={r("WDSIconWdsIcSticker.react")} title={ht} onPress={function() {
                    onOpenStickerPackClick(stickerPackId);
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.VIEW_STICKER_PACK);
                }} testid="mi-open-sticker-pack"/>);
            }
        }
        const It = s._("Download all");
        const Tt = s._("Save all");
        const Dt = s._("Star all");
        if (o("WAWebFrontendMsgGetters").getAsAlbum(msg) && associatedMessages != null && associatedMessages.length) {
            const $t = associatedMessages.reduce((acc, associatedMessage)=>{
                acc.canDownloadAll = acc.canDownloadAll && o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(associatedMessage.unsafe());
                acc.canStarAll = acc.canStarAll && o("WAWebMsgActionCapability").canStarMsg(associatedMessage.unsafe());
                return acc;
            }, {
                canDownloadAll: true,
                canStarAll: true
            });
            const { canDownloadAll, canStarAll } = $t;
            const Mt = ((n("cr:7565") == null ? undefined : n("cr:7565").supportsBulkMediaSaving()) ?? false) && r("WAWebEnvironment").isWindows;
            if (canDownloadAll && !Mt) {
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="download-all" Icon={r("WDSIconIcDownload.react")} title={It} onPress={function() {
                    o("WAWebFileSaver").FileSaver.initDownload(associatedMessages.map((e)=>e.unsafe()));
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD_ALL);
                }} testid="mi-msg-download-all"/>);
            }
            if (canDownloadAll && Mt) {
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="download-all" Icon={r("WDSIconIcDownload.react")} title={Tt} onPress={function() {
                    if (n("cr:7565") != null) {
                        n("cr:7565").selectFolderAndSaveFiles(associatedMessages.map((e)=>e.unsafe())).catch((t)=>{
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to save files: ",
                                ""
                            ])), t);
                        });
                    }
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD_ALL);
                }} testid="mi-msg-download-all"/>);
            }
            if (canStarAll) {
                const Component = r("WDSMenuItem.react");
                he.push(<Component key="star-all" Icon={r("WDSIconIcGrade.react")} title={Dt} onPress={function() {
                    o("WAWebCmd").Cmd.sendStarMsgs(de, associatedMessages);
                    _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
                }} testid="mi-msg-star-all"/>);
            }
        }
        const wt = s._("Verify security code");
        if (msg.author?.isLid() && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(de.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            const At = {
                wid: msg.author
            };
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                At.lid = de.accountLid;
            }
            const Ft = function() {
                o("WAWebCmd").Cmd.verificationDrawer(At);
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.VERIFY_SECURITY_CODE);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="verify-security-code" Icon={r("WDSIconIc123.react")} title={wt} onPress={Ft} testid="mi-msg-verify-security-node"/>);
        }
        const Ot = s._("Add text to note");
        if (o("WAWebNotesUtils").shouldEnableNotesForMsg(msg)) {
            o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemShown(de.contact);
            const Bt = function() {
                onAddToNoteClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.ADD_TO_NOTE);
            };
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="add-to-note" Icon={r("WDSIconIcAdd.react")} title={Ot} onPress={Bt} testid="mi-msg-add-to-note"/>);
        }
        const Wt = s._("Select");
        if (r("WAWebEnvironment").isWindows) {
            he.push(c.jsx(r("WAWebDropdownItemSeparator.react"), {}, "item-separator"));
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="selectMessage" Icon={r("WDSIconIcCheckBox.react")} title={Wt} onPress={function() {
                onMessageSelectClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.SELECT);
                o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInContextMenu();
            }} testid="mi-msg-select-message"/>);
            const qt = s._("Save as");
            const Ut = s._("Share");
            const Vt = s._("Download");
            if (msg_mediaData != null) {
                if (g({
                    isFileInCache,
                    mediaData: msg_mediaData,
                    msg
                })) {
                    const Component = r("WDSMenuItem.react");
                    he.push(<Component key="save-as" Icon={r("WDSIconIcDownload.react")} title={qt} onPress={function() {
                        onMessageSaveAsClick();
                        _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.SAVE_AS);
                    }} testid="mi-msg-save-as"/>);
                    const Gt = (n("cr:23046") == null || n("cr:23046").isWindowsShareSheetEnabled == null ? undefined : n("cr:23046").isWindowsShareSheetEnabled()) ?? false;
                    if (Gt) {
                        const Component = r("WDSMenuItem.react");
                        he.push(<Component key="share" Icon={r("WDSIconIcShareWindows.react")} title={Ut} onPress={function() {
                            onShareClick();
                            _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.SHARE);
                            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                                msg,
                                chat: o("WAWebFrontendMsgGetters").getChat(msg),
                                messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.SHARE,
                                messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                            });
                        }} testid="mi-msg-share"/>);
                    }
                    if (n("cr:7565") != null && !o("WAWebMsgGetters").getIsStickerMsg(msg)) {
                        const zt = s._("Open with");
                        const Component = r("WDSMenuItem.react");
                        he.push(<Component key="open-with" Icon={r("WDSIconIcOpenInNew.react")} title={zt} onPress={function() {
                            if (n("cr:40048") != null) {
                                n("cr:40048").handleOpenAnotherAppButtonClick(null, msg);
                            }
                        }} testid="mi-msg-open-with"/>);
                    }
                } else {
                    if (msg_mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT || msg_mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE || msg_mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED) {
                        const Component = r("WDSMenuItem.react");
                        he.push(<Component key="pre-download" Icon={r("WDSIconIcDownload.react")} title={Vt} onPress={function() {
                            onMessageDownloadClick();
                            _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DOWNLOAD);
                        }} testid="mi-msg-pre-download"/>);
                    }
                }
            }
        }
        if (msg.ctwaContext == null) {
            he.push(c.jsx(r("WAWebDropdownItemSeparator.react"), {}, "item-separator-3"));
        }
        const jt = s._("Report");
        if (o("WAWebMsgActionCapability").canReportMsg(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="report-message" Icon={r("WDSIconIcThumbDown.react")} title={jt} onPress={function() {
                onReportClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPORT);
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.REPORT,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
            }} testid="mi-msg-report" destructive/>);
        }
        const Kt = s._("Delete");
        if (!fe && o("WAWebMsgActionCapability").canDeleteMsg(msg)) {
            const Component = r("WDSMenuItem.react");
            he.push(<Component key="delete" Icon={r("WDSIconIcDelete.react")} title={Kt} onPress={function() {
                onMessageDeleteClick();
                _(msg, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE);
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                    msg,
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.DELETE,
                    messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                });
            }} testid="mi-msg-delete" destructive/>);
        }
        if (n("cr:7237") != null) {
            he.push(c.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            }));
            he.push(...n("cr:7237").getWAWebMessageDebugMenuItems(msg));
        }
        return he;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y(msg) {
        return msg.type === o("WAWebMsgType").MSG_TYPE.CHAT || msg.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || msg.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT || msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE || msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
    }
    l.default = h;
}, 226);