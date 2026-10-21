__d("WAWebStatusNotification", [
    "fbt",
    "WAWebABProps",
    "WAWebBaseNotification",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebStatusCollection",
    "WAWebStatusNotificationUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t) {
            let n;
            const t_msg = t.msg;
            n = e.call(this) || this;
            n.msg = t_msg;
            n.status = o("WAWebStatusCollection").StatusCollection.getStatusModel(r("nullthrows")(o("WAWebMsgGetters").getSender(n.msg), "[WAStatusNotification]: status poster cannot be null"), false);
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(t) {
            if (o("WAWebNotificationHelpers").appIsActive()) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            if (this.status?.contact && o("WAWebContactGetters").getCalculatedStatusMute(this.status?.contact)) {
                return r("WAWebNotificationMuteReason").MutedStatus;
            }
            if (o("WAWebNotificationHelpers").isOfflineResumeInProgress()) {
                return r("WAWebNotificationMuteReason").OfflineResumeInProgress;
            }
            return null;
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
                return o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationsEnabled();
            }
            return e.prototype.shouldShowBanner.call(this);
        };
        t_prototype.getBannerOptions = function() {
            const e = this;
            const t = s._("Mentioned you privately in a status").toString();
            const n = this.status ? o("WAWebFrontendContactGetters").getFormattedName(this.status.contact) : o("WAWebFrontendContactGetters").getFormattedName(r("nullthrows")(o("WAWebContactCollection").ContactCollection.get(this.msg.author)));
            const a = o("WAWebGetNotificationStrings").getNotificationBody({
                body: t,
                msgDir: o("WAWebFrontendMsgGetters").getDir(this.msg)
            });
            const i = function() {
                o("WAWebStatusNotificationUtils").openStatusViewer(e.msg);
            };
            return {
                wid: this.msg.author,
                title: r("nullthrows")(n),
                body: a,
                onClick: i
            };
        };
        t_prototype.buildKey = function() {
            return `status-msg:${this.msg.id.toString()}`;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(r("nullthrows")(o("WAWebMsgGetters").getSender(this.msg)), this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.STATUS_MENTION,
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
    l.WAStatusNotification = e;
}, 226);