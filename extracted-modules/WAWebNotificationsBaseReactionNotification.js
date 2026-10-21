__d("WAWebNotificationsBaseReactionNotification", [
    "WALogger",
    "WAWebBaseNotification",
    "WAWebChatSquelchConstants",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationMuteReason",
    "WAWebReactionNotificationUtils",
    "WAWebReactionsCollection",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
        function a(n) {
            let a;
            const n_reactionMsg = n.reactionMsg;
            a = t.call(this) || this;
            a.$WABaseReactionNotification$p_1 = function() {
                if (o("WAWebFrontendMsgGetters").getChat(a.parentMsg) != null && a.parentMsg != null && o("WAWebFrontendMsgGetters").getChat(a.parentMsg).reactionSquelch === o("WAWebChatSquelchConstants").SQUELCH_RESET_VALUE) {
                    a.parentMsg.squelch = o("WAWebChatSquelchConstants").SQUELCH_RESET_VALUE;
                }
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAReactionNotification: constructor"
            ])));
            a.reactionMsg = n_reactionMsg;
            const l = r("nullthrows")(a.reactionMsg.reactionParentKey);
            let u = o("WAWebMsgCollection").MsgCollection.get(l.toString());
            if (u == null) {
                const c = o("WAWebLidMigrationUtils").getAlternateMsgKey(l);
                if (c != null) {
                    u = o("WAWebMsgCollection").MsgCollection.get(c.toString());
                }
            }
            if (u == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAReactionNotification: parentMsg missing, needs hydration"
                ])));
                return babelHelpers.assertThisInitialized(a);
            }
            a.parentMsg = u;
            return a;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.beforeBannerShown = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.parentMsg != null) {
                    const e = yield o("WAWebReactionsCollection").ReactionsCollection.findAddressingModeInsensitive(this.parentMsg.id.toString());
                    if (e) {
                        const t = o("WAWebReactionsCollection").ReactionsCollection.getAggregateEmojiAndSender(e, o("WAWebReactionNotificationUtils").getReactionSenderJid(this.reactionMsg).toString());
                        const n = t.reactionSenderModel;
                        this.reactionSender = n;
                    } else {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "WAReactionNotification: Reaction model not found"
                        ])));
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.afterBannerShown = function(t) {
            const e = this;
            if (this.reactionSender != null) {
                const n = this.reactionSender;
                const r = o("WAWebFrontendMsgGetters").getMaybeChat(this.parentMsg);
                n.on("revoked", this.closeBanner);
                n.on("change:read", this.closeBanner);
                r?.on("change:reactionSquelch", this.$WABaseReactionNotification$p_1);
                t.waitForClose().then(()=>{
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "WAReactionNotification: cleaning up reaction notification"
                    ])));
                    n.off("revoked", e.closeBanner);
                    n.off("change:read", e.closeBanner);
                    r?.off("change:reactionSquelch", e.$WABaseReactionNotification$p_1);
                }).catch((e)=>{
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "WAReactionNotification: failed to clean up reaction notification"
                    ])));
                });
            }
        };
        a_prototype.shouldMute = function(t) {
            if (r("WAWebEnvironment").isWindows && this.reactionMsg.viewed === true) {
                return r("WAWebNotificationMuteReason").IgnoreViewedMsgs;
            }
            if (o("WAWebReactionNotificationUtils").nonHydratedShouldMuteReactionNotification(this.reactionMsg)) {
                return r("WAWebNotificationMuteReason").NonHydratedReaction;
            }
            if (this.parentMsg == null) {
                return r("WAWebNotificationMuteReason").ParentMsgMissing;
            }
            if (this.shouldMuteDueToAppState(t)) {
                return r("WAWebNotificationMuteReason").AppState;
            }
        };
        a_prototype.shouldSquelch = function() {
            const e = o("WAWebNotificationController").WANotificationController.notificationExists(this.buildKey());
            if (e) {
                return null;
            }
        };
        a_prototype.buildKey = function() {
            return `reaction:${this.parentMsg.id.toString()}-${o("WAWebReactionNotificationUtils").getReactionSenderJid(this.reactionMsg).toString()}`;
        };
        a_prototype.shouldMuteDueToAppState = function(t) {
            return o("WAWebNotificationHelpers").shouldMuteDueToAppState(t);
        };
        a_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.REACTION_MESSAGE,
                    triggeredByOfflineMessage: this.reactionMsg.isOffline === true
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WABaseReactionNotification = m;
}, 98);