__d("WAWebNotificationsStatusReactionNotification", [
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteCollection",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsBaseReactionNotification",
    "WAWebReactionNotificationUtils",
    "WAWebStatusNotificationUtils",
    "asyncToGeneratorRuntime",
    "cr:7293",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const s = n("cr:7293") ?? {};
    const s_getStatusReactionsSetting = s.getStatusReactionsSetting;
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(n) {
            const t = e.prototype.shouldMute.call(this, n);
            return t ?? (s_getStatusReactionsSetting?.() === false ? r("WAWebNotificationMuteReason").MutedStatusReaction : null);
        };
        t_prototype.shouldPlaySound = function() {
            if (!e.prototype.shouldPlaySound.call(this)) {
                return false;
            }
            const t = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
            if (t) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalStatusSoundsEnabled();
            }
            return e.prototype.shouldPlaySound.call(this);
        };
        t_prototype.shouldShowBanner = function() {
            if (!e.prototype.shouldShowBanner.call(this)) {
                return false;
            }
            const t = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
            if (t) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationReactionsEnabled();
            }
            return e.prototype.shouldShowBanner.call(this);
        };
        t_prototype.matchesChat = function(t) {
            return t.id.isStatus();
        };
        t_prototype.getChatKind = function() {
            return null;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(o("WAWebReactionNotificationUtils").getReactionSenderJid(this.reactionMsg), this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const parentMsg = this.parentMsg;
            const t = o("WAWebReactionNotificationUtils").getNotificationPartsForStatusReaction(parentMsg, this.reactionMsg);
            const { action, author, body } = t;
            const l = o("WAWebGetNotificationStrings").getNotificationBody({
                action,
                body,
                msgDir: o("WAWebFrontendMsgGetters").getDir(parentMsg)
            });
            const s = function() {
                o("WAWebStatusNotificationUtils").openStatusViewer(parentMsg);
            };
            return {
                wid: parentMsg.id.remote,
                msgId: parentMsg.id.toString(),
                onClick: s,
                tag: parentMsg.id.toString(),
                doNotOpenChat: true,
                title: r("nullthrows")(author),
                body: l
            };
        };
        t_prototype.shouldMuteDueToAppState = function(n) {
            if (r("WAWebEnvironment").isWindows) {
                return false;
            }
            return e.prototype.shouldMuteDueToAppState.call(this, n);
        };
        return t;
    })(o("WAWebNotificationsBaseReactionNotification").WABaseReactionNotification);
    l.WAStatusReactionNotification = c;
}, 98);