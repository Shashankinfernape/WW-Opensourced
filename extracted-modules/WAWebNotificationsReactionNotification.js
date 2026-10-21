__d("WAWebNotificationsReactionNotification", [
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsBaseReactionNotification",
    "WAWebReactionNotificationUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(n) {
            const t = e.prototype.shouldMute.call(this, n);
            if (t != null) {
                return t;
            }
            const a = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
            if (o("WAWebMuteGetters").getIsMuted(a.mute)) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            if (o("WAWebReactionNotificationUtils").isArchivedChat(a)) {
                return r("WAWebNotificationMuteReason").ArchivedChat;
            }
            return null;
        };
        t_prototype.shouldPlaySound = function() {
            if (!e.prototype.shouldPlaySound.call(this)) {
                return false;
            }
            const t = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular(t);
        };
        t_prototype.shouldShowBanner = function() {
            if (e.prototype.shouldShowBanner.call(this)) {
                return o("WAWebReactionNotificationUtils").shouldEnableReactionsNotificationGranular(this.parentMsg);
            }
            return false;
        };
        t_prototype.shouldSquelch = function() {
            if (e.prototype.shouldSquelch.call(this) == null) {
                return null;
            }
            const t = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
            if (o("WAWebNotificationHelpers").shouldSquelch(t, false)) {
                return r("WAWebNotificationMuteReason").GroupFlood;
            }
            if (o("WAWebReactionNotificationUtils").shouldSquelchReactionMessage(t, this.parentMsg)) {
                return r("WAWebNotificationMuteReason").ReactionFlood;
            }
            return null;
        };
        t_prototype.matchesChat = function(t) {
            return o("WAWebFrontendMsgGetters").getChat(this.parentMsg).equals(t);
        };
        t_prototype.getChatKind = function() {
            return o("WAWebFrontendChatGetters").getKind(o("WAWebFrontendMsgGetters").getChat(this.parentMsg));
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebFrontendMsgGetters").getChat(this.parentMsg);
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const parentMsg = this.parentMsg;
            const t = o("WAWebFrontendMsgGetters").getChat(parentMsg);
            const n = o("WAWebReactionNotificationUtils").getNotificationPartsForChatReaction(parentMsg, this.reactionMsg);
            const { action, author, body } = n;
            const s = o("WAWebGetNotificationStrings").getNotificationBody({
                action,
                author,
                body,
                msgDir: o("WAWebFrontendMsgGetters").getDir(parentMsg)
            });
            return {
                wid: t.id,
                msgId: parentMsg.id.toString(),
                onClick: r("WAWebNoop"),
                tag: parentMsg.id.toString(),
                doNotOpenChat: false,
                title: o("WAWebNotificationHelpers").getNotificationTitle(t),
                body: s
            };
        };
        return t;
    })(o("WAWebNotificationsBaseReactionNotification").WABaseReactionNotification);
    l.WAReactionNotification = e;
}, 98);