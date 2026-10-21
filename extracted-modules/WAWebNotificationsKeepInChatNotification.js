__d("WAWebNotificationsKeepInChatNotification", [
    "fbt",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgGetters",
    "WAWebMsgNotificationPreview",
    "WAWebMsgType",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsDailyUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = ((t)=>{
        function a({ keepInChatMessage, kicSender, onClick, parentMessage }) {
            let a;
            a = t.call(this) || this;
            a.$WAKeepInChatNotification$p_3 = function(t, n, r) {
                if (!o("WAWebEphemeralKeepInChatUtils").isKept(n)) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WAKeepInChatNotification: kicState changed, removing"
                    ])));
                    a.closeBanner();
                }
            };
            a.$WAKeepInChatNotification$p_2 = function() {
                o("WAWebNotificationsDailyUtils").incrementNotificationDailyCount(o("WAWebNotificationsDailyUtils").NotificationDailyCountKind.KIC_NOTIFICATION_TAP, r("nullthrows")(a.getChatKind()));
                a.$WAKeepInChatNotification$p_1?.();
            };
            a.keepInChatMessage = keepInChatMessage;
            a.kicSender = kicSender;
            a.parentMessage = parentMessage;
            a.$WAKeepInChatNotification$p_1 = onClick;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAKeepInChatNotification: constructor"
            ])));
            return a;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.shouldPlaySound = function() {
            if (!t.prototype.shouldPlaySound.call(this)) {
                return false;
            }
            const e = o("WAWebFrontendMsgGetters").getChat(this.keepInChatMessage);
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular(e);
        };
        a_prototype.shouldShowBanner = function() {
            if (!t.prototype.shouldShowBanner.call(this)) {
                return false;
            }
            const e = o("WAWebFrontendMsgGetters").getChat(this.keepInChatMessage);
            return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(e);
        };
        a_prototype.shouldMute = function(t) {
            let e;
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            if (this.parentMessage.kicNotified) {
                return r("WAWebNotificationMuteReason").AlreadyNotifiedKic;
            }
            if (o("WAWebMsgGetters").getIsEphemeral(this.parentMessage)) {
                if (o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebMsgGetters").getSender(this.parentMessage))) {
                    if (o("WAWebUserPrefsMeUser").isMeAccount(this.kicSender)) {
                        return r("WAWebNotificationMuteReason").KicByMe;
                    }
                    if (o("WAWebMuteGetters").getIsMuted(o("WAWebFrontendMsgGetters").getChat(this.parentMessage).mute)) {
                        return r("WAWebNotificationMuteReason").MutedChat;
                    }
                    if (o("WAWebFrontendMsgGetters").getChat(this.parentMessage).archive) {
                        return r("WAWebNotificationMuteReason").ArchivedChat;
                    }
                    if (o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(this.parentMessage)) && !((e = o("WAWebFrontendMsgGetters").getChat(this.parentMessage).groupMetadata) != null && e.hasJoined())) {
                        return r("WAWebNotificationMuteReason").UserLeftGroupKic;
                    }
                    if (o("WAWebNotificationHelpers").isOfflineResumeInProgress()) {
                        return r("WAWebNotificationMuteReason").OfflineResumeInProgress;
                    }
                    return null;
                }
                return r("WAWebNotificationMuteReason").KicOnNonOriginalMsg;
            }
            return r("WAWebNotificationMuteReason").KicOnNonEphemeralChat;
        };
        a_prototype.buildKey = function() {
            return `kic:${this.parentMessage.id.toString()}`;
        };
        a_prototype.matchesChat = function(t) {
            return o("WAWebFrontendMsgGetters").getChat(this.parentMessage).equals(t);
        };
        a_prototype.getChatKind = function() {
            return o("WAWebFrontendChatGetters").getKind(o("WAWebFrontendMsgGetters").getChat(this.parentMessage));
        };
        a_prototype.performLogging = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield t.prototype.performLogging.call(this, e);
                o("WAWebNotificationsDailyUtils").incrementNotificationDailyCount(o("WAWebNotificationsDailyUtils").NotificationDailyCountKind.KIC_NOTIFICATION, r("nullthrows")(this.getChatKind()));
            });
            function a(t) {
                return e.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.KEEP_IN_CHAT,
                    triggeredByOfflineMessage: this.keepInChatMessage.isOffline === true
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebFrontendMsgGetters").getChat(this.parentMessage);
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getBannerOptions = function() {
            const e = o("WAWebFrontendMsgGetters").getChat(this.parentMessage);
            const body = o("WAWebGetNotificationStrings").getNotificationBody(babelHelpers.extends({}, m(this.parentMessage, this.kicSender), {
                msgDir: o("WAWebFrontendMsgGetters").getDir(this.parentMessage)
            }));
            return {
                wid: e.id,
                msgId: this.parentMessage.id.toString(),
                title: o("WAWebNotificationHelpers").getNotificationTitle(e),
                body,
                onClick: this.$WAKeepInChatNotification$p_2
            };
        };
        a_prototype.afterBannerShown = function(t) {
            const e = this;
            this.parentMessage.set("kicNotified", true);
            this.parentMessage.on("change:kicState", this.$WAKeepInChatNotification$p_3);
            t.waitForClose().then(()=>{
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "WAKeepInChatNotification: cleaning up kic notification"
                ])));
                e.parentMessage.off("change:kicState", e.$WAKeepInChatNotification$p_3);
            });
        };
        return a;
    })(o("WAWebBaseNotification").WABaseNotification);
    function m(parentMessage, kicSender) {
        let n;
        let author;
        let a;
        const i = o("WAWebFrontendMsgGetters").getChat(parentMessage);
        if (o("WAWebMsgGetters").getIsGroupMsg(parentMessage)) {
            const u = o("WAWebContactCollection").ContactCollection.gadd(kicSender);
            author = u.name ?? o("WAWebWidFormat").widToFormattedUser(u.id);
        }
        if (i.isLocked) {
            return {
                body: o("WAWebGetNotificationStrings").getPluralMessageNotificationBody(i.unreadCount).toString()
            };
        }
        if (parentMessage.type === o("WAWebMsgType").MSG_TYPE.CHAT && !o("WAWebMsgNotificationPreview").shouldShowMsgNotificationPreview(parentMessage)) {
            n = s._("Kept your message from disappearing");
        } else {
            n = o("WAWebGetNotificationStrings").getNotificationMessageBody(parentMessage);
            n = s._("\"{originalMessageBody}\"", [
                s._param("originalMessageBody", n)
            ]);
            a = s._("Kept your message from disappearing:").toString();
        }
        return {
            body: n.toString(),
            author,
            action: a
        };
    }
    l.WAKeepInChatNotification = d;
}, 226);