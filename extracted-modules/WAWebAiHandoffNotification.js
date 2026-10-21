__d("WAWebAiHandoffNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebBizAiHandoffNotificationLogEvents",
    "WAWebBizAiStrings",
    "WAWebFrontendContactGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumHandoffNotifActionType",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "cr:3133"
], function(t, n, r, o, a, i, l, s) {
    const u = n("cr:3133") ?? {};
    const u_canShowMessageNotificationBanner = u.canShowMessageNotificationBanner;
    const d = ((e)=>{
        function t(t) {
            let n;
            const t_chat = t.chat;
            n = e.call(this) || this;
            n.$AiHandoffNotification$p_1 = false;
            n.$AiHandoffNotification$p_2 = r("WAWebPonyfillsCryptoRandomUUID")();
            n.$AiHandoffNotification$p_3 = Math.floor(n.creationAt / 1000);
            n.chat = t_chat;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldPlaySound = function() {
            if (e.prototype.shouldPlaySound.call(this)) {
                return o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat);
            }
            return false;
        };
        t_prototype.shouldShowBanner = function() {
            if (e.prototype.shouldShowBanner.call(this)) {
                return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(this.chat);
            }
            return false;
        };
        t_prototype.shouldMute = function(t) {
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            if (o("WAWebMuteGetters").getIsMuted(this.chat.mute)) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            if (this.chat.archive) {
                return r("WAWebNotificationMuteReason").ArchivedChat;
            }
            if (o("WAWebNotificationHelpers").isOfflineResumeInProgress()) {
                return r("WAWebNotificationMuteReason").OfflineResumeInProgress;
            }
            return null;
        };
        t_prototype.buildKey = function() {
            return `handoff:${this.$AiHandoffNotification$p_2}|${this.$AiHandoffNotification$p_3}|${this.chat.id.toString()}`;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(this.chat, this.abortController.signal);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const e = this;
            return {
                wid: this.chat.id,
                title: m(),
                body: o("WAWebGetNotificationStrings").getNotificationBody(babelHelpers.extends({}, p(this.chat))),
                onClick: function() {
                    o("WAWebBizAiHandoffNotificationLogEvents").logAiHandoffNotificationAction(e.chat, o("WAWebWamEnumHandoffNotifActionType").HANDOFF_NOTIF_ACTION_TYPE.NOTIF_CLICKED_BODY, e.$AiHandoffNotification$p_2, e.$AiHandoffNotification$p_3);
                }
            };
        };
        t_prototype.logDelivered = function() {
            o("WAWebBizAiHandoffNotificationLogEvents").logAiHandoffNotificationAction(this.chat, o("WAWebWamEnumHandoffNotifActionType").HANDOFF_NOTIF_ACTION_TYPE.NOTIF_DELIVERED, this.$AiHandoffNotification$p_2, this.$AiHandoffNotification$p_3);
        };
        t_prototype.performLogging = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                let n;
                yield e.prototype.performLogging.call(this, t);
                if (!t && ((n = u_canShowMessageNotificationBanner?.()) == null || n) && !this.$AiHandoffNotification$p_1) {
                    this.$AiHandoffNotification$p_1 = true;
                    o("WAWebBizAiHandoffNotificationLogEvents").logAiHandoffNotificationAction(this.chat, o("WAWebWamEnumHandoffNotifActionType").HANDOFF_NOTIF_ACTION_TYPE.NOTIF_SHOWN, this.$AiHandoffNotification$p_2, this.$AiHandoffNotification$p_3);
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.OTHER
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function m() {
        return o("WAWebBizAiStrings").getBizAiHubTitle().toString();
    }
    function p(e) {
        const t = o("WAWebFrontendContactGetters").getFormattedName(e.contact);
        const n = s._("{name}'s conversation needs your attention", [
            s._param("name", t)
        ]);
        return {
            body: n.toString()
        };
    }
    l.AiHandoffNotification = d;
    l.getNotificationTitle = m;
    l.getNotificationParts = p;
}, 226);