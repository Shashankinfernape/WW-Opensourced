__d("WAWebPollsVoteNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebPollsPollVoteCollection",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t) {
            let n;
            const t_creationMsg = t.creationMsg;
            n = e.call(this) || this;
            n.$PollVoteNotification$p_3 = function() {
                if (n.$PollVoteNotification$p_2.getUnreadCount() === 0) {
                    n.closeBanner();
                }
            };
            n.$PollVoteNotification$p_1 = t_creationMsg;
            n.$PollVoteNotification$p_2 = o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
                t_creationMsg.id
            ])[0];
            n.bodyText = u({
                unreadCount: n.$PollVoteNotification$p_2.getUnreadCount(),
                pollName: n.$PollVoteNotification$p_1.pollName
            });
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldPlaySound = function() {
            if (!e.prototype.shouldPlaySound.call(this)) {
                return false;
            }
            const t = o("WAWebFrontendMsgGetters").getChat(this.$PollVoteNotification$p_1.unsafe());
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular(t) && !o("WAWebNotificationHelpers").shouldSquelch(t, false);
        };
        t_prototype.shouldShowBanner = function() {
            if (!e.prototype.shouldShowBanner.call(this)) {
                return false;
            }
            const t = o("WAWebFrontendMsgGetters").getChat(this.$PollVoteNotification$p_1.unsafe());
            return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(t);
        };
        t_prototype.shouldMute = function(t) {
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            if (o("WAWebNotificationHelpers").isMutedAndNotMentioned(this.$PollVoteNotification$p_1.unsafe())) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            if (o("WAWebNotificationHelpers").isArchivedAndNotMentioned(this.$PollVoteNotification$p_1.unsafe())) {
                return r("WAWebNotificationMuteReason").ArchivedChat;
            }
            if (!r("gkx")("26258") && o("WAWebNotificationHelpers").shouldIgnoreGroupMsg(this.$PollVoteNotification$p_1.unsafe())) {
                return r("WAWebNotificationMuteReason").IgnoreGroupMsg;
            }
            if (o("WAWebNotificationHelpers").isOfflineResumeInProgress()) {
                return r("WAWebNotificationMuteReason").OfflineResumeInProgress;
            }
            return null;
        };
        t_prototype.shouldSquelch = function() {
            if (o("WAWebNotificationController").WANotificationController.notificationExists(this.buildKey())) {
                return null;
            }
            const e = o("WAWebFrontendMsgGetters").getChat(this.$PollVoteNotification$p_1.unsafe());
            if (o("WAWebNotificationHelpers").shouldSquelch(e, false)) {
                return r("WAWebNotificationMuteReason").GroupFlood;
            }
            return null;
        };
        t_prototype.afterBannerShown = function(t) {
            const e = this;
            this.$PollVoteNotification$p_2.on("change", this.$PollVoteNotification$p_3);
            this.$PollVoteNotification$p_2.on("add", this.$PollVoteNotification$p_3);
            this.$PollVoteNotification$p_2.on("remove", this.$PollVoteNotification$p_3);
            this.$PollVoteNotification$p_2.on("reset", this.$PollVoteNotification$p_3);
            t.waitForClose().then(()=>{
                e.$PollVoteNotification$p_2.off("change", e.$PollVoteNotification$p_3);
                e.$PollVoteNotification$p_2.off("add", e.$PollVoteNotification$p_3);
                e.$PollVoteNotification$p_2.off("remove", e.$PollVoteNotification$p_3);
                e.$PollVoteNotification$p_2.off("reset", e.$PollVoteNotification$p_3);
            });
        };
        t_prototype.buildKey = function() {
            return `vote:${this.$PollVoteNotification$p_1.id.toString()}`;
        };
        t_prototype.matchesChat = function(t) {
            return o("WAWebFrontendMsgGetters").getChat(this.$PollVoteNotification$p_1.unsafe()).equals(t);
        };
        t_prototype.getChatKind = function() {
            return o("WAWebFrontendChatGetters").getKind(o("WAWebFrontendMsgGetters").getChat(this.$PollVoteNotification$p_1.unsafe()));
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebFrontendMsgGetters").getChat(this.$PollVoteNotification$p_1.unsafe());
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const $PollVoteNotification$p_1 = this.$PollVoteNotification$p_1;
            const t = o("WAWebFrontendMsgGetters").getChat($PollVoteNotification$p_1.unsafe());
            return {
                wid: t.id,
                msgId: $PollVoteNotification$p_1.id.toString(),
                tag: this.buildKey(),
                title: o("WAWebNotificationHelpers").getNotificationTitle(t),
                body: o("WAWebGetNotificationStrings").getNotificationBody(babelHelpers.extends({}, this.$PollVoteNotification$p_4(), {
                    msgDir: o("WAWebFrontendMsgGetters").getDir($PollVoteNotification$p_1)
                }))
            };
        };
        t_prototype.$PollVoteNotification$p_4 = function() {
            return {
                body: this.bodyText
            };
        };
        t_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.POLL_MESSAGE
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function u({ pollName, unreadCount }) {
        return s._("_j{\"*\":\"{number_of_votes} new votes: \\ud83d\\udcca {pollName}\",\"_1\":\"1 new vote: \\ud83d\\udcca {pollName}\"}", [
            s._plural(unreadCount, "number_of_votes"),
            s._param("pollName", pollName)
        ]).toString();
    }
    l.PollVoteNotification = e;
}, 226);