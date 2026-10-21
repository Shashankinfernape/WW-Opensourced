__d("WAWebMsgNotification", [
    "Promise",
    "WAWebBaseNotification",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatThreadLogging",
    "WAWebEnvironment",
    "WAWebFMXGatingUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebGroupSafetyCheckUtils",
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNotificationController",
    "WAWebNotificationEngagementWamEvent",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsMsgNotification",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "cr:3133",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = n("cr:3133") ?? {};
    const { getContextMenuItems, isReplyable, shouldIgnoreSquelchForGroupMention } = u;
    const p = ((e)=>{
        function t(t) {
            let n;
            const t_msg = t.msg;
            n = e.call(this) || this;
            n.msg = t_msg;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldPlaySound = function() {
            if (!e.prototype.shouldPlaySound.call(this)) {
                return false;
            }
            const t = o("WAWebFrontendMsgGetters").getChat(this.msg);
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular(t) && !o("WAWebMsgGetters").getIsEdited(this.msg);
        };
        t_prototype.shouldShowBanner = function() {
            if (!e.prototype.shouldShowBanner.call(this)) {
                return false;
            }
            const t = o("WAWebFrontendMsgGetters").getChat(this.msg);
            return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(t);
        };
        t_prototype.shouldMute = function(t) {
            if (r("WAWebEnvironment").isWindows && this.msg.viewed) {
                return r("WAWebNotificationMuteReason").IgnoreViewedMsgs;
            }
            if (this.msg.read === true) {
                return r("WAWebNotificationMuteReason").ReadByPeer;
            }
            const e = o("WAWebFrontendMsgGetters").getChat(this.msg);
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            if (o("WAWebGroupSafetyCheckUtils").shouldMuteMentionWhileGroupSafetyChecked(this.msg)) {
                return r("WAWebNotificationMuteReason").GroupSafetyCheck;
            }
            if (o("WAWebNotificationHelpers").isMutedAndNotMentioned(this.msg)) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            if (o("WAWebNotificationHelpers").isMentionAllMutedForMsg(this.msg)) {
                return r("WAWebNotificationMuteReason").MentionAllMuted;
            }
            if (o("WAWebNotificationHelpers").isArchivedAndNotMentioned(this.msg)) {
                return r("WAWebNotificationMuteReason").ArchivedChat;
            }
            if (o("WAWebNotificationHelpers").isCommunityHomeAdd(this.msg)) {
                return r("WAWebNotificationMuteReason").IgnoreAddedToCommunityHome;
            }
            if (this.msg.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE) {
                return r("WAWebNotificationMuteReason").IgnoreGroupHistoryNotice;
            }
            if (!r("gkx")("26258") && o("WAWebNotificationHelpers").shouldIgnoreGroupMsg(this.msg)) {
                return r("WAWebNotificationMuteReason").IgnoreGroupMsg;
            }
            if (o("WAWebMsgGetters").getIsFutureproof(this.msg)) {
                return r("WAWebNotificationMuteReason").IgnoreFutureProof;
            }
            if (o("WAWebNotificationHelpers").isOfflineResumeInProgress()) {
                return r("WAWebNotificationMuteReason").OfflineResumeInProgress;
            }
            if (o("WAWebMsgGetters").getIsBizContentPlaceholder(this.msg)) {
                return r("WAWebNotificationMuteReason").IgnoreBizContentPlaceholder;
            }
            if (o("WAWebMsgGetters").getIsCallSilenced(this.msg) || o("WAWebVoipGatingUtils").isCallingEnabled() && this.msg.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG && this.msg.subtype == null && !o("WAWebMsgGetters").getIsMissedCall(this.msg)) {
                return r("WAWebNotificationMuteReason").IgnoreCallMsgs;
            }
            if (o("WAWebBotUtils").isHiddenBotWid(e.id)) {
                return r("WAWebNotificationMuteReason").IgnoreBotMsgs;
            }
            if (e.id.isBot()) {
                if (!o("WAWebBotBaseGating").isBotEnabled() && !e.id.isSupportAgentBot() || this.msg.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE) {
                    return r("WAWebNotificationMuteReason").IgnoreBotMsgs;
                }
                if (this.msg.activeBotMsgStreamingInProgress === true) {
                    return r("WAWebNotificationMuteReason").BotResponseStreaming;
                }
            }
            if (f(this.msg)) {
                return r("WAWebNotificationMuteReason").IgnoreInternalSilentTag;
            }
            if (o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.NOTIFICATION, this.msg.viewMode)) {
                if (o("WAWebBizAiAgentStatusUtils").shouldMuteNotification(e)) {
                    return r("WAWebNotificationMuteReason").AIRepliesOn;
                }
                return null;
            }
            return r("WAWebNotificationMuteReason").IgnoreHiddenViewModeMsgs;
        };
        t_prototype.shouldSquelch = function() {
            const e = o("WAWebNotificationController").WANotificationController.notificationExists(this.buildKey());
            if (e && (o("WAWebMsgGetters").getIsEdited(this.msg) || o("WAWebNotificationsMsgNotification").eligibleMessagesForNotificationRetriggering.has(this.msg.type)) || shouldIgnoreSquelchForGroupMention != null && shouldIgnoreSquelchForGroupMention(this.msg)) {
                return null;
            }
            if (o("WAWebNotificationHelpers").shouldSquelch(o("WAWebFrontendMsgGetters").getChat(this.msg))) {
                return r("WAWebNotificationMuteReason").GroupFlood;
            }
            return null;
        };
        t_prototype.buildKey = function() {
            return `msg:${this.msg.latestEditMsgKey?.toString() ?? this.msg.id.toString()}`;
        };
        t_prototype.matchesChat = function(t) {
            return t.equals(o("WAWebFrontendMsgGetters").getMaybeChat(this.msg));
        };
        t_prototype.getChatKind = function() {
            return o("WAWebFrontendChatGetters").getKind(o("WAWebFrontendMsgGetters").getChat(this.msg));
        };
        t_prototype.getDefaultIcon = function() {
            if (o("WAWebMsgGetters").getIsProductListMessage(this.msg)) {
                return o("WAWebMediaUtils").convertToDataURI(o("WAWebMsgGetters").getProductListHeaderImage(this.msg));
            }
            return o("WAWebNotificationIconUtils").getDefaultChatNotificationIcon(o("WAWebFrontendMsgGetters").getChat(this.msg));
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebFrontendMsgGetters").getChat(this.msg);
                if (e.isSenderSuspicious === true && o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled()) {
                    return o("WAWebNotificationIconUtils").getDefaultChatNotificationIcon(e);
                }
                if (!e.trusted && e.promises.integritySignals != null && o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled()) {
                    const t = yield (s || (s = n("Promise"))).all([
                        o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal, this.getDefaultIcon()),
                        e.promises.integritySignals
                    ]);
                    const r = t[0];
                    e.promises.integritySignals = null;
                    if (e.isSenderSuspicious === true) {
                        return o("WAWebNotificationIconUtils").getDefaultChatNotificationIcon(e);
                    }
                    return r;
                }
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal, this.getDefaultIcon());
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const msg = this.msg;
            const t = o("WAWebNotificationsMsgNotification").getNotificationParts(msg);
            const a = o("WAWebGetNotificationStrings").getNotificationBody(babelHelpers.extends({}, t, {
                msgDir: o("WAWebFrontendMsgGetters").getDir(msg)
            }));
            const i = o("WAWebFrontendMsgGetters").getChat(this.msg);
            const l = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield o("WAWebChatThreadLogging").getChatThreadID(i.id.toJid());
                    new (o("WAWebNotificationEngagementWamEvent")).NotificationEngagementWamEvent({
                        threadId: e
                    }).commit();
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            return {
                wid: i.id,
                msgId: this.msg.id.toString(),
                tag: o("WAWebNotificationsMsgNotification").shouldReplaceMsgNotificationManually() ? this.msg.id.toString() : i.id.toString(),
                title: o("WAWebNotificationHelpers").getNotificationTitle(i),
                body: a,
                onClick: function() {
                    if (!r("gkx")("26258")) {
                        l();
                    }
                },
                renotify: !o("WAWebMsgGetters").getIsEdited(this.msg),
                footer: t.footer,
                contextMenuItems: this.getContextMenuItems()
            };
        };
        t_prototype.isReplyable = function() {
            return isReplyable?.(this.msg) ?? false;
        };
        t_prototype.getContextMenuItems = function() {
            return getContextMenuItems?.(this.msg) ?? [];
        };
        t_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: _(this.msg),
                    triggeredByOfflineMessage: this.msg.isOffline === true
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function _(msg) {
        switch(msg.type){
            case o("WAWebMsgType").MSG_TYPE.CHAT:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.TEXT_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.PHOTO_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.VIDEO_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.PTT:
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.VOICE_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.FILE_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.STICKER:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.STICKER_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.LOCATION:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.LOCATION_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.VCARD:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.CONTACT_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.POLL_MESSAGE;
            case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
                if (msg.subtype === "miss" || msg.subtype === "miss_group") {
                    return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.MISSED_VOICE_CALL;
                }
                if (msg.subtype === "miss_video" || msg.subtype === "miss_group_video") {
                    return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.MISSED_VIDEO_CALL;
                }
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.OTHER;
            default:
                return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.OTHER;
        }
    }
    function f(msg) {
        return !r("gkx")("26258") && msg.body?.toLowerCase()?.includes("@silent") === true;
    }
    l.WAMsgNotification = p;
}, 98);