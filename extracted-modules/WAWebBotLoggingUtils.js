__d("WAWebBotLoggingUtils", [
    "WALogger",
    "WAWebBotJourneyLogger",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebProtobufsAICommon.pb",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumThreadActionTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let d;
    function m(t) {
        e: {
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_LIST) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.CHATLIST;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_CHAT_SHORTCUT) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_WEB_INTRO_PANEL) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.WEB_INTRO_PANEL;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_NULL_STATE) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.AISEARCH_NULL_STATE_SUGGESTION;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_SEARCH_CHATS_LIST) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.AISEARCH_TYPE_AHEAD_SUGGESTION;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_WEB_NAVIGATION_BAR) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.WEB_NAVIGATION_BAR;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.FORWARD) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.META_AI_FORWARD;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.ASK_META_AI_CONTEXT_MENU) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.ASK_META_AI_CONTEXT_MENU;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.DEEPLINK_USER_SHARED) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.DEEPLINK;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.NOTIFICATION) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.NOTIFICATION;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.PROFILE_MESSAGE_BUTTON;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.INVOKE_META_AI_1ON1;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.INVOKE_META_AI_GROUP;
            }
            if (t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.FAB) {
                return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON;
            }
            {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected bot entry point: ",
                    ""
                ])), t).tags("bot-logging").sendLogs("Unexpected bot entry point in bot metrics logging");
                return;
            }
        }
    }
    function p(e) {
        e: return e === o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist || e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiHandoffFilter || e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiRespondingFilter || e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.CHATLIST : e === o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON : e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.WEB_INTRO_PANEL : e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.AISEARCH_TYPE_AHEAD_PAPER_PLANE : e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.WEB_NAVIGATION_BAR : e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward || e === o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage || e === o("WAWebChatEntryPoint").ChatEntryPoint.Forward ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.META_AI_FORWARD : e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.ASK_META_AI_CONTEXT_MENU : e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1 ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.ASK_META_AI_CONTEXT_MENU_1ON1 : e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.ASK_META_AI_CONTEXT_MENU_GROUP : e === o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON : e === o("WAWebChatEntryPoint").ChatEntryPoint.Mention ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.INVOKE_META_AI_1ON1 : e === o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.PROFILE_MESSAGE_BUTTON : e === o("WAWebChatEntryPoint").ChatEntryPoint.PrivateReply ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.INVOKE_META_AI_GROUP : e === o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.DEEPLINK : e === o("WAWebChatEntryPoint").ChatEntryPoint.Notification ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.NOTIFICATION : void 0;
    }
    function _(e) {
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON) {
            return "favicon";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.CHATLIST) {
            return "chat_list";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.AISEARCH_NULL_STATE_SUGGESTION) {
            return "nullstate_suggestion";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.AISEARCH_TYPE_AHEAD_SUGGESTION) {
            return "typeahead_suggestion";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.DEEPLINK) {
            return "deeplink";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.NOTIFICATION) {
            return "notification";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.AI_TAB) {
            return "ai_tab";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.ASK_META_AI_CONTEXT_MENU) {
            return "ask_meta_ai_context_menu";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.ASK_META_AI_CONTEXT_MENU_1ON1) {
            return "ask_meta_ai_context_menu_1on1";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.ASK_META_AI_CONTEXT_MENU_GROUP) {
            return "ask_meta_ai_context_menu_group";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.META_AI_FORWARD) {
            return "meta_ai_forward";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.WEB_INTRO_PANEL) {
            return "web_intro_panel";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.WEB_NAVIGATION_BAR) {
            return "web_navigation_bar";
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.PROFILE_MESSAGE_BUTTON) {
            return "profile_message_button";
        }
        return null;
    }
    function f(e) {
        e: {
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist || e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiHandoffFilter || e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiRespondingFilter) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_LIST;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_CHAT_SHORTCUT;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_WEB_INTRO_PANEL;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_SEARCH_CHATS_LIST;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_WEB_NAVIGATION_BAR;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward || e === o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage || e === o("WAWebChatEntryPoint").ChatEntryPoint.Forward) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.FORWARD;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI || e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1 || e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.ASK_META_AI_CONTEXT_MENU;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Mention) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.FAB;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.PrivateReply) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.DEEPLINK_USER_SHARED;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Notification) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.NOTIFICATION;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab) {
                return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_LIST;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation || e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[threading] ",
                    " - use original entry point"
                ])), e).tags("bot-logging").sendLogs("Unexpected entry point in bot chat logging");
                return;
            }
            if (e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterIntegrity || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectory || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectorySearch || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectoryCategory || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectoryCategorySearch || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsLetterRecommendation || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTab || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTabSearch || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCreationFlow || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterAdminInviteAcceptModal || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCardButton || e === o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedNewsletterMessage || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCTAOnStatus || e === o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters || e === o("WAWebChatEntryPoint").ChatEntryPoint.Link || e === o("WAWebChatEntryPoint").ChatEntryPoint.GroupInvite || e === o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoin || e === o("WAWebChatEntryPoint").ChatEntryPoint.Vcard || e === o("WAWebChatEntryPoint").ChatEntryPoint.AgentsSettingsList || e === o("WAWebChatEntryPoint").ChatEntryPoint.SupportAgent || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab || e === o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab || e === o("WAWebChatEntryPoint").ChatEntryPoint.CommunitySubgroupSwitcher || e === o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewGroupCreation || e === o("WAWebChatEntryPoint").ChatEntryPoint.BizOrder || e === o("WAWebChatEntryPoint").ChatEntryPoint.BizPayment || e === o("WAWebChatEntryPoint").ChatEntryPoint.DeprecatedLidChatBanner || e === o("WAWebChatEntryPoint").ChatEntryPoint.AddContactToGroup || e === o("WAWebChatEntryPoint").ChatEntryPoint.DialerPad || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewChat || e === o("WAWebChatEntryPoint").ChatEntryPoint.NewBroadcastCreation || e === o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer || e === o("WAWebChatEntryPoint").ChatEntryPoint.ExistingGroupRedirect || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpToBottom || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatLoadAroundFallback || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpBackToContext || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpToMention || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatMsgDrawer || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatMessageEditComplete || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatPollNotification || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatScrollBoundary || e === o("WAWebChatEntryPoint").ChatEntryPoint.InChatReactionMediaThumb || e === o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage || e === o("WAWebChatEntryPoint").ChatEntryPoint.MediaViewer || e === o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub || e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatSearch || e === o("WAWebChatEntryPoint").ChatEntryPoint.EventInfo || e === o("WAWebChatEntryPoint").ChatEntryPoint.MessageHistoryBundle || e === o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage || e === o("WAWebChatEntryPoint").ChatEntryPoint.PttOocPlayer || e === o("WAWebChatEntryPoint").ChatEntryPoint.MessageGallery || e === o("WAWebChatEntryPoint").ChatEntryPoint.BizProduct || e === o("WAWebChatEntryPoint").ChatEntryPoint.EventCreation || e === o("WAWebChatEntryPoint").ChatEntryPoint.IntroPanel || e === o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage || e === o("WAWebChatEntryPoint").ChatEntryPoint.Debug || e === o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop || e === o("WAWebChatEntryPoint").ChatEntryPoint.MessageReply || e === o("WAWebChatEntryPoint").ChatEntryPoint.Status || e === o("WAWebChatEntryPoint").ChatEntryPoint.SystemMessage || e === o("WAWebChatEntryPoint").ChatEntryPoint.MessageAdmin || e === o("WAWebChatEntryPoint").ChatEntryPoint.GroupParticipant || e === o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoinRequest || e === o("WAWebChatEntryPoint").ChatEntryPoint.CommunityMember || e === o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab || e === o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit || e === o("WAWebChatEntryPoint").ChatEntryPoint.NumberChangeNotificationBanner || e === o("WAWebChatEntryPoint").ChatEntryPoint.VoipWindow || e === o("WAWebChatEntryPoint").ChatEntryPoint.RefreshRestore || e === o("WAWebChatEntryPoint").ChatEntryPoint.Initialization) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected entry point: ",
                    ""
                ])), e).tags("bot-logging").sendLogs("Unexpected entry point in bot chat logging");
                return;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function g({ to: t }) {
        if (!(t == null || !o("WAWebBotUtils").isMetaAiBot(t))) {
            const n = o("WAWebBotJourneyLogger").BotJourneyLogger.getDestinationId();
            if (n != null) {
                let r = o("WAWebBotJourneyLogger").BotJourneyLogger.getBotMetricsEntryPoint();
                if (r == null) {
                    const a = o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint();
                    if (a != null) {
                        r = m(a);
                    }
                }
                if (r != null) {
                    return {
                        destinationId: n,
                        destinationEntryPoint: r
                    };
                }
            }
        }
    }
    function h(e) {
        if (e == null) {
            return "undefined";
        }
        if (e === o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.THREE_DOT_MENU) {
            return "THREE_DOT_MENU";
        }
        if (e === o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.THREAD_LIST_VIEW) {
            return "THREAD_LIST_VIEW";
        }
        if (e === o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.TOP_NAV) {
            return "TOP_NAV";
        }
        if (e === o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.CHAT_LIST) {
            return "CHAT_LIST";
        }
        if (e === o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.NAVIGATION_BAR_BUTTON) {
            return "NAVIGATION_BAR_BUTTON";
        }
        if (e === o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.CONTINUE_CHAT_MODULE) {
            return "CONTINUE_CHAT_MODULE";
        }
        if (e === o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.THREAD_INFO_PAGE) {
            return "THREAD_INFO_PAGE";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    const y = {
        [(d = o("WAWebWamEnumBotEntryPointType")).BOT_ENTRY_POINT_TYPE.WA_CHAT]: "WA_CHAT",
        [d.BOT_ENTRY_POINT_TYPE.STATUS]: "STATUS",
        [d.BOT_ENTRY_POINT_TYPE.NEW_CHAT]: "NEW_CHAT",
        [d.BOT_ENTRY_POINT_TYPE.INVOKE]: "INVOKE",
        [d.BOT_ENTRY_POINT_TYPE.SHARED_AI]: "SHARED_AI",
        [d.BOT_ENTRY_POINT_TYPE.NOTIFICATION]: "NOTIFICATION",
        [d.BOT_ENTRY_POINT_TYPE.BANNER]: "BANNER",
        [d.BOT_ENTRY_POINT_TYPE.AI_CHATS_LIST_BUTTON]: "AI_CHATS_LIST_BUTTON",
        [d.BOT_ENTRY_POINT_TYPE.AI_CONTACT_ON_WA]: "AI_CONTACT_ON_WA",
        [d.BOT_ENTRY_POINT_TYPE.DEEPLINK_USER_SHARED]: "DEEPLINK_USER_SHARED",
        [d.BOT_ENTRY_POINT_TYPE.DEEPLINK_QP]: "DEEPLINK_QP",
        [d.BOT_ENTRY_POINT_TYPE.AI_SEARCH_CHATS_LIST]: "AI_SEARCH_CHATS_LIST",
        [d.BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE]: "CHAT_INFO_PAGE",
        [d.BOT_ENTRY_POINT_TYPE.AI_VOICE]: "AI_VOICE",
        [d.BOT_ENTRY_POINT_TYPE.AI_CHAT_SHORTCUT]: "AI_CHAT_SHORTCUT",
        [d.BOT_ENTRY_POINT_TYPE.AI_IMAGINE_BOTTOM_SHEET]: "AI_IMAGINE_BOTTOM_SHEET",
        [d.BOT_ENTRY_POINT_TYPE.AI_HOME_PREVIEW]: "AI_HOME_PREVIEW",
        [d.BOT_ENTRY_POINT_TYPE.AI_SEARCH_CHATS_LIST_VOICE]: "AI_SEARCH_CHATS_LIST_VOICE",
        [d.BOT_ENTRY_POINT_TYPE.AI_CHAT_THREAD_VOICE]: "AI_CHAT_THREAD_VOICE",
        [d.BOT_ENTRY_POINT_TYPE.AI_FAB_VOICE]: "AI_FAB_VOICE",
        [d.BOT_ENTRY_POINT_TYPE.CHAT_INFO_SETTINGS]: "CHAT_INFO_SETTINGS",
        [d.BOT_ENTRY_POINT_TYPE.CHAT_THREAD]: "CHAT_THREAD",
        [d.BOT_ENTRY_POINT_TYPE.AI_MEMORY_BOTTOM_SHEET]: "AI_MEMORY_BOTTOM_SHEET",
        [d.BOT_ENTRY_POINT_TYPE.FORWARD]: "FORWARD",
        [d.BOT_ENTRY_POINT_TYPE.AI_MEMORY_SYSTEM_MESSAGE]: "AI_MEMORY_SYSTEM_MESSAGE",
        [d.BOT_ENTRY_POINT_TYPE.AI_WIDGET]: "AI_WIDGET",
        [d.BOT_ENTRY_POINT_TYPE.SHARE]: "SHARE",
        [d.BOT_ENTRY_POINT_TYPE.AI_NEW_FAB_VOICE]: "AI_NEW_FAB_VOICE",
        [d.BOT_ENTRY_POINT_TYPE.AI_TAB_DISCOVERY]: "AI_TAB_DISCOVERY",
        [d.BOT_ENTRY_POINT_TYPE.CHAT_LIST]: "CHAT_LIST",
        [d.BOT_ENTRY_POINT_TYPE.AI_TAB]: "AI_TAB",
        [d.BOT_ENTRY_POINT_TYPE.AI_HOME_IN_TAB]: "AI_HOME_IN_TAB",
        [d.BOT_ENTRY_POINT_TYPE.AI_NULL_STATE]: "AI_NULL_STATE",
        [d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_CREATION]: "AI_STUDIO_CREATION",
        [d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_PROFILE_EDIT]: "AI_STUDIO_PROFILE_EDIT",
        [d.BOT_ENTRY_POINT_TYPE.BOT_SETTINGS]: "BOT_SETTINGS",
        [d.BOT_ENTRY_POINT_TYPE.META_AI_LONG_PRESS_CONTEXT_MENU]: "META_AI_LONG_PRESS_CONTEXT_MENU",
        [d.BOT_ENTRY_POINT_TYPE.FAB]: "FAB",
        [d.BOT_ENTRY_POINT_TYPE.AI_NEW_FAB_VOICE_CALL_HISTORY]: "AI_NEW_FAB_VOICE_CALL_HISTORY",
        [d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_CREATION_FAB]: "AI_STUDIO_CREATION_FAB",
        [d.BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1]: "INVOKE_META_AI_1ON1",
        [d.BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP]: "INVOKE_META_AI_GROUP",
        [d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_YOUR_AI]: "AI_STUDIO_YOUR_AI",
        [d.BOT_ENTRY_POINT_TYPE.ASK_META_AI_CONTEXT_MENU]: "ASK_META_AI_CONTEXT_MENU",
        [d.BOT_ENTRY_POINT_TYPE.META_AI_SETTINGS]: "META_AI_SETTINGS",
        [d.BOT_ENTRY_POINT_TYPE.AI_STICKERS_BOTTOM_SHEET]: "AI_STICKERS_BOTTOM_SHEET",
        [d.BOT_ENTRY_POINT_TYPE.AI_WEB_NAVIGATION_BAR]: "AI_WEB_NAVIGATION_BAR",
        [d.BOT_ENTRY_POINT_TYPE.AI_WEB_INTRO_PANEL]: "AI_WEB_INTRO_PANEL"
    };
    function C(e) {
        if (e == null) {
            return "undefined";
        }
        return y[e] ?? "undefined";
    }
    function b(e) {
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.PIN) {
            return "PIN";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.UNPIN) {
            return "UNPIN";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.DELETE) {
            return "DELETE";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.RENAME) {
            return "RENAME";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CLICK_NEW_CHAT) {
            return "CLICK_NEW_CHAT";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CLICK_CHAT_HISTORY) {
            return "CLICK_CHAT_HISTORY";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CLICK_CONVERSATION_THREAD) {
            return "CLICK_CONVERSATION_THREAD";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREAD_ENTER) {
            return "THREAD_ENTER";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREAD_EXIT) {
            return "THREAD_EXIT";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREAD_LIST_IMPRESSION) {
            return "THREAD_LIST_IMPRESSION";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREE_DOT_MENU) {
            return "THREE_DOT_MENU";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.FIRST_PROMPT_SENT) {
            return "FIRST_PROMPT_SENT";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.SEARCH_RESULT_CLICK) {
            return "SEARCH_RESULT_CLICK";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.SEARCH_RESULT_SHOWN) {
            return "SEARCH_RESULT_SHOWN";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.AI_HOME_IMPRESSION) {
            return "AI_HOME_IMPRESSION";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CLICK_CONTINUE_CHAT_MODULE) {
            return "CLICK_CONTINUE_CHAT_MODULE";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CREATION_SHEET_SHOWN) {
            return "CREATION_SHEET_SHOWN";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREAD_PHOTO_CHANGED) {
            return "THREAD_PHOTO_CHANGED";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREAD_CREATE_REQUEST) {
            return "THREAD_CREATE_REQUEST";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.THREAD_CREATE_RESPONSE) {
            return "THREAD_CREATE_RESPONSE";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.GREETING_RECEIVED) {
            return "GREETING_RECEIVED";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CLICK_CHAT_INFO) {
            return "CLICK_CHAT_INFO";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CREATION_SHEET_DISMISSED) {
            return "CREATION_SHEET_DISMISSED";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.TOP_NAV) {
            return "TOP_NAV";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.MUTE) {
            return "MUTE";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.UNMUTE) {
            return "UNMUTE";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.CLEAR) {
            return "CLEAR";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.SHARE) {
            return "SHARE";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.ARCHIVE) {
            return "ARCHIVE";
        }
        if (e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.UNARCHIVE) {
            return "UNARCHIVE";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    let v = null;
    function S(e) {
        if (e == null) {
            return "undefined";
        }
        if (v == null) {
            const n = new Map;
            for (const [a, i] of Object.entries(o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES)){
                if (typeof i === "number") {
                    n.set(i, a);
                }
            }
            v = n;
        }
        return v.get(e) ?? String(e);
    }
    l.getBotMetricsEntryPointFromBotEntryPoint = m;
    l.getBotMetricsEntryPointFromChatEntryPoint = p;
    l.getBotOriginFromBotMetricsEntryPoint = _;
    l.getBotEntryPoint = f;
    l.maybeGetBotMetricsMetadata = g;
    l.getMetaAiActionEntryPointName = h;
    l.getBotEntryPointTypeName = C;
    l.getThreadActionTypeName = b;
    l.getChatFilterActionTypeName = S;
}, 98);