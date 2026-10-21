__d("WAWebBaseNotificationBanner", [
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWebBannerContextMenuActions",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebMuteExpirations",
    "WAWebNewsletterCollection",
    "WAWebNoop",
    "WAWebOpenLastActiveChatAction",
    "WAWebSendTextMsgChatAction",
    "WAWebSwNotificationBannerRegistry",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "cr:3133",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = [
        "actions",
        "contextMenuItems",
        "footer",
        "isReplyable",
        "notification",
        "renotify",
        "showViaServiceWorker",
        "suppressBanner",
        "title"
    ];
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = n("cr:3133") ?? {};
    const { closeMessageNotification, showMessageNotification } = y;
    const v = (()=>{
        function t(e) {
            const t = this;
            const { key, msgId, options, tag, wid } = e;
            this.isReplyable = false;
            this.$2 = null;
            this.$3 = null;
            this.close = function() {
                t.$5().then(()=>{
                    if (t.notification && o("WATypeUtils").isFunction(t.notification.close)) {
                        t.notification.close();
                    }
                    if (t.$2 != null) {
                        t.$6();
                        t.$7();
                    }
                    closeMessageNotification?.(t.key, t.tag);
                }).catch(r("WAWebNoop"));
            };
            this.$7 = function() {
                t.waitingPromise.resolver();
                window.removeEventListener("beforeunload", t.close);
                o("WAWebSwNotificationBannerRegistry").unregisterSwNotificationBanner(t.$2);
                t.$2 = null;
                const t_notification = t.notification;
                if (t_notification) {
                    t_notification.removeEventListener("click", t.$8);
                    t_notification.removeEventListener("close", t.$7);
                }
                if (t.msg) {
                    t.msg.off("change:type", t.$9);
                }
            };
            this.$8 = function() {
                t.$1?.();
                window.focus();
                const { chat, msg } = t;
                const a = t.doNotOpenChat ?? false;
                if (chat) {
                    if (!a) {
                        const l = msg && (t.alwaysHighlightMsg || msg !== chat.msgs.last()) ? o("WAWebChatMessageSearch").getSearchContext({
                            chat,
                            msgKey: msg.id
                        }) : undefined;
                        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && chat.groupMetadata?.parentGroup && msg != null && (msg.subtype === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE || msg.subtype === o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE)) {
                            o("WAWebCmd").Cmd.openCommunityHome(chat.groupMetadata?.parentGroup);
                        } else {
                            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                            o("WAWebOpenLastActiveChatAction").cancelPendingLastActiveChatRestore();
                            const u = !r("WAWebEnvironment").isWindows || t.alwaysHighlightMsg ? o("WAWebCmd").Cmd.openChatAt({
                                chat,
                                msgContext: l,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Notification
                            }) : o("WAWebCmd").Cmd.openChatFromUnread({
                                chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Notification
                            });
                            u.then((t)=>{
                                if (t) {
                                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                                }
                            });
                        }
                    }
                    o("WAWebModalManager").ModalManager.closeMedia();
                    t.increaseNotificationEngagement({
                        isClick: true
                    });
                    t.close();
                }
            };
            this.$9 = function() {
                if (!(!t.msg || t.msg.type !== o("WAWebMsgType").MSG_TYPE.REVOKED)) {
                    t.close();
                }
            };
            this.msg = msgId != null ? o("WAWebMsgCollection").MsgCollection.get(msgId) : null;
            this.chat = o("WAWebChatCollection").ChatCollection.get(wid) ?? r("WAWebNewsletterCollection").get(wid);
            this.tag = tag;
            this.key = key;
            this.$1 = options.onClick;
            this.alwaysHighlightMsg = options.alwaysHighlightMsg === true;
            this.canBlock = options.canBlock;
            this.doNotOpenChat = options.doNotOpenChat;
            this.isReplyable = options.isReplyable;
            const m = new (h || (h = n("Promise")))(function(resolver) {
                t.waitingPromise = {
                    resolver
                };
            });
            this.waitingPromise.promise = m;
            try {
                this.$4(key, tag, options);
            } catch (error) {
                const p = r("getErrorSafe")(error);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to create notification"
                ]))).catching(p);
                this.waitingPromise.resolver();
            }
        }
        const t_prototype = t.prototype;
        t_prototype.$5 = function() {
            return (h || (h = n("Promise"))).resolve();
        };
        t_prototype.waitForClose = function() {
            return this.waitingPromise.promise;
        };
        t_prototype.detach = function() {
            this.$7();
        };
        t_prototype.click = function() {
            this.$8();
        };
        t_prototype.quickReply = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const chat = this.chat;
                if (chat && chat.isReadOnly !== true && this.isReplyable) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "quickReply inside WAWebBaseNotificationBanner"
                    ])));
                    yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(chat, e);
                }
                this.$7();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$4 = function(n, o, a) {
            const { actions, contextMenuItems, footer, isReplyable, notification, renotify, showViaServiceWorker, suppressBanner, title } = a;
            const _ = babelHelpers.objectWithoutPropertiesLoose(a, e);
            if (_.body && _.body.charCodeAt(0) >= 128) {
                _.body = ` ${_.body}`;
            }
            const f = babelHelpers.extends({
                tag: o,
                renotify: renotify ?? !!o,
                dir: "auto",
                lang: r("WAWebL10N").getNormalizedLocale(),
                silent: true
            }, _);
            if (showMessageNotification) {
                showMessageNotification({
                    key: n,
                    tag: o,
                    title,
                    body: f.body,
                    icon: f.icon,
                    footer,
                    contextMenuItems,
                    isReplyable,
                    suppressBanner,
                    chat: this.chat
                });
            } else if (showViaServiceWorker === true) {
                this.$10(babelHelpers.extends({}, f, {
                    actions
                }), title);
            } else {
                this.$11(notification, title, f);
            }
            if (this.msg) {
                this.msg.on("change:type", this.$9);
            }
            window.addEventListener("beforeunload", this.close);
            this.increaseNotificationEngagement({
                isShow: true
            });
        };
        t_prototype.$11 = function(t, n, r) {
            this.notification = new t(n, r);
            this.notification?.addEventListener("error", function(e) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "native notification error"
                ])));
            });
            this.notification?.addEventListener("close", function(e) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "native notification close"
                ])));
            });
            this.notification?.addEventListener("click", this.$8);
            this.notification?.addEventListener("close", this.$7);
        };
        t_prototype.$10 = function(t, n) {
            const e = this;
            const a = o("WAWebSwNotificationBannerRegistry").registerSwNotificationBanner({
                onClick: this.$8,
                onClose: this.$7
            });
            this.$2 = a;
            const i = this.$12(a, t, n);
            this.$3 = i;
            i.catch((t)=>{
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "service worker notification failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("sw-show-notification-failed");
                e.$7();
            });
        };
        t_prototype.$12 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(notificationBannerKey, t, n) {
                const a = yield navigator.serviceWorker?.ready;
                if (a?.showNotification == null) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "no service worker available to show notification"
                    ])));
                    this.$7();
                    return;
                }
                yield a.showNotification(n, babelHelpers.extends({}, t, {
                    data: babelHelpers.extends({}, t.data, {
                        notificationBannerKey
                    })
                }));
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$6 = function() {
            const e = this.$2;
            const tag = this.tag;
            (h || (h = n("Promise"))).resolve(this.$3).catch(r("WAWebNoop")).then(()=>navigator.serviceWorker?.ready).then((e)=>{
                if (e == null || e.getNotifications == null) {
                    return undefined;
                }
                return e.getNotifications(tag != null ? {
                    tag
                } : undefined);
            }).then((t)=>{
                if (t != null) {
                    t.filter((t)=>t.data?.notificationBannerKey === e).forEach((e)=>e.close());
                }
            }).catch((e)=>{
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "sw close notification failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("sw-close-notification-failed");
            });
        };
        t_prototype.contextMenuClick = function(t) {
            const chat = this.chat;
            if (chat) {
                switch(t){
                    case r("WAWebBannerContextMenuActions").MuteChatForEightHours:
                        this.$13(chat, o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[0].duration);
                        break;
                    case r("WAWebBannerContextMenuActions").MuteChatForOneWeek:
                        this.$13(chat, o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[1].duration);
                        break;
                    case r("WAWebBannerContextMenuActions").MuteChat:
                        this.$13(chat, o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[2].duration);
                        break;
                    case r("WAWebBannerContextMenuActions").DisableNotifications:
                        o("WAWebMuteCollection").MuteCollection.setAllNotificationsAndReactions(false);
                        break;
                    case r("WAWebBannerContextMenuActions").None:
                        break;
                }
                this.$7();
            }
        };
        t_prototype.$13 = function(t, n) {
            t.mute.mute({
                expiration: o("WAWebMuteExpirations").calculateMuteExpiration(n),
                sendDevice: true
            }).catch((e)=>{
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "mute failed"
                ]))).catching(r("getErrorSafe")(e));
            });
        };
        t_prototype.increaseNotificationEngagement = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isClick = false, isShow = false } = {}) {
                yield o("WAWebUserPrefsGeneral").addToNotificationEngagement({
                    totalNotifShown: isShow ? 1 : 0,
                    totalNotifTapToOpen: isClick ? 1 : 0
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    l.default = v;
}, 98);