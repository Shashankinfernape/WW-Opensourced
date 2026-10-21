__d("WAWebCommentNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgCollection",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t) {
            let n;
            const t_commentMsg = t.commentMsg;
            n = e.call(this) || this;
            n.commentMsg = t_commentMsg;
            const a = o("WAWebMsgCollection").MsgCollection.get(n.commentMsg.parentMsgKey);
            if (a != null) {
                n.parentMsg = a;
            }
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(t) {
            if (this.parentMsg == null) {
                return r("WAWebNotificationMuteReason").ParentMsgMissing;
            }
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            if (o("WAWebNotificationHelpers").isMutedAndNotMentioned(this.parentMsg)) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            if (o("WAWebNotificationHelpers").isArchivedAndNotMentioned(this.parentMsg)) {
                return r("WAWebNotificationMuteReason").ArchivedChat;
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
            const t = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular(t) && !o("WAWebNotificationHelpers").shouldSquelch(t, false);
        };
        t_prototype.shouldShowBanner = function() {
            if (!e.prototype.shouldShowBanner.call(this)) {
                return false;
            }
            const t = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
            return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(t);
        };
        t_prototype.getBannerOptions = function() {
            const e = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
            return {
                wid: e.id,
                title: o("WAWebNotificationHelpers").getNotificationTitle(e),
                body: o("WAWebGetNotificationStrings").getNotificationBody(babelHelpers.extends({}, u(this.commentMsg)))
            };
        };
        t_prototype.buildKey = function() {
            return `comment:${this.commentMsg.id.toString()}`;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebFrontendMsgGetters").getChat(this.commentMsg);
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.OTHER,
                    triggeredByOfflineMessage: this.commentMsg.isOffline === true
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function u(commentMsg) {
        const t = o("WAWebContactCollection").ContactCollection.get(r("nullthrows")(commentMsg.author, "comment author cannot be null"));
        const n = t ? o("WAWebFrontendContactGetters").getFormattedUser(t) : "";
        const a = s._("{name} replied to your announcement message", [
            s._param("name", n)
        ]);
        return {
            body: a.toString()
        };
    }
    l.WACommentNotification = e;
}, 226);