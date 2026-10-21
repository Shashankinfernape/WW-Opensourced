__d("WAWebBaseNotification", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebNotificationBanner",
    "WAWebNotificationConstants",
    "WAWebNotificationDeliveryWamEvent",
    "WAWebNotificationHelpers",
    "WAWebNotificationMuteReason",
    "WAWebNotificationTone",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumNotificationActionType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = (()=>{
        function t() {
            const t = this;
            this.creationAt = Date.now();
            this.$1 = null;
            this.$2 = r("WAWebPonyfillsCryptoRandomUUID")();
            this.closeBanner = function() {
                if (t.notificationBanner != null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WABaseNotification:_closeNotification()"
                    ])));
                    t.notificationBanner.close();
                }
            };
        }
        const t_prototype = t.prototype;
        t_prototype.shouldPlaySound = function() {
            if (r("WAWebEnvironment").isWindows && Number(o("WAWebBuildConstants").WINDOWS_BUILD) >= 257300) {
                return false;
            }
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular();
        };
        t_prototype.playsSoundBeforeBanner = function() {
            return false;
        };
        t_prototype.shouldMute = function(t) {
            return null;
        };
        t_prototype.shouldShowBanner = function() {
            return o("WAWebNotificationHelpers").shouldEnableNotificationGranular();
        };
        t_prototype.shouldSquelch = function() {
            return null;
        };
        t_prototype.shouldSuppressBanner = function(t) {
            return t === r("WAWebNotificationMuteReason").GroupFlood || t === r("WAWebNotificationMuteReason").OfflineResumeInProgress;
        };
        t_prototype.buildKey = function() {
            throw r("err")("WABaseNotification: must implement `buildKey` method");
        };
        t_prototype.getBannerOptions = function() {
            throw r("err")("WABaseNotification: must implement `getBannerOptions` method");
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw r("err")("WABaseNotification: must implement `getIcon` method");
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.matchesChat = function(t) {
            return false;
        };
        t_prototype.beforeBannerShown = function() {
            return (c || (c = n("Promise"))).resolve();
        };
        t_prototype.afterBannerShown = function(t) {};
        t_prototype.getChatKind = function() {
            throw r("err")("WABaseNotification: must implement `getChatKind` method");
        };
        t_prototype.getNotificationDeliveryWamEventData = function() {
            return null;
        };
        t_prototype.performLogging = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.getNotificationDeliveryWamEventData();
                this.$1 = t;
                if (t != null) {
                    new (o("WAWebNotificationDeliveryWamEvent")).NotificationDeliveryWamEvent({
                        uiNotificationType: t.uiNotificationType,
                        notificationId: this.$2,
                        notificationAction: o("WAWebWamEnumNotificationActionType").NOTIFICATION_ACTION_TYPE.SHOW,
                        isSilenced: e,
                        triggeredByOfflineMessage: t.triggeredByOfflineMessage
                    }).commit();
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.performClickLogging = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = this.$1 ?? (yield this.getNotificationDeliveryWamEventData());
                if (n != null) {
                    new (o("WAWebNotificationDeliveryWamEvent")).NotificationDeliveryWamEvent({
                        uiNotificationType: n.uiNotificationType,
                        notificationId: this.$2,
                        notificationAction: o("WAWebWamEnumNotificationActionType").NOTIFICATION_ACTION_TYPE.CLICK,
                        isSilenced: e,
                        triggeredByOfflineMessage: n.triggeredByOfflineMessage
                    }).commit();
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.isReplyable = function() {
            return false;
        };
        t_prototype.triggerNotification = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let t = yield this.shouldMute(e);
                if (!t) {
                    t = yield this.shouldSquelch();
                }
                if (t) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WABaseNotification:triggerNotification muteReason ",
                        ""
                    ])), t);
                }
                let n = false;
                if (t) {
                    if (this.shouldSuppressBanner(t)) {
                        n = true;
                    } else {
                        throw new (o("WAAbortError")).AbortError(`Notification mute/squelched ${t}`);
                    }
                }
                const a = !t && this.playsSoundBeforeBanner() && (yield this.shouldPlaySound());
                if (a) {
                    this.playSound();
                }
                let i;
                if (yield this.shouldShowBanner()) {
                    if (r("WAWebEnvironment").isWindows || !n) {
                        yield this.beforeBannerShown();
                        i = yield this.showBanner(n);
                        this.afterBannerShown(i);
                    }
                    yield this.performLogging(n);
                }
                if (!t && !a && (yield this.shouldPlaySound())) {
                    this.playSound();
                }
                return i;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.showBanner = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(suppressBanner = false) {
                const t = this;
                this.abortController = new AbortController;
                const n = this.getBannerOptions();
                const icon = yield this.getIcon();
                if (this.abortController.signal.aborted) {
                    throw new (o("WAAbortError")).AbortError("Aborted through abortController");
                }
                if (!r("WAWebEnvironment").isWindows && window.Notification.permission !== o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
                    throw new (o("WAAbortError")).AbortError("Permission Denied");
                }
                const i = new (r("WAWebNotificationBanner"))(babelHelpers.extends({}, n, {
                    onClick: function() {
                        try {
                            n.onClick?.();
                        } finally{
                            t.performClickLogging(suppressBanner).catch((e)=>{
                                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "Notification click logging failed"
                                ]))).catching(r("getErrorSafe")(e)).sendLogs("notification-click-log-fail");
                            });
                        }
                    },
                    icon,
                    key: this.buildKey(),
                    isReplyable: this.isReplyable(),
                    suppressBanner
                }));
                this.notificationBanner = i;
                return i;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.playSound = function() {
            o("WAWebNotificationTone").playNotification();
        };
        return t;
    })();
    l.WABaseNotification = d;
}, 98);