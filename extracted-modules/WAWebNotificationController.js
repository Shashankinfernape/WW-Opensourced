__d("WAWebNotificationController", [
    "WAAbortError",
    "WALogger",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebMsgNotification",
    "WAWebNotificationsMsgNotification",
    "asyncToGeneratorRuntime",
    "cr:4692",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = n("cr:4692") ?? null;
    const f = (()=>{
        function e() {
            const e = this;
            this.map = new Map;
            this.lastMsgNotifByChat = new Map;
            this.$1 = null;
            this.$2 = null;
            if (_) {
                this.$1 = new _(this);
            }
            if (r("WAWebEnvironment").isWindows) {
                o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WANotificationController: show lastest unread msg due to offline delivery end"
                    ])));
                    e.$3();
                }));
            }
        }
        const e_prototype = e.prototype;
        e_prototype.notificationExists = function(t) {
            return this.map.has(t);
        };
        e_prototype.getNotification = function(t) {
            return this.map.get(t);
        };
        e_prototype.closeOrCancelNotification = function(t) {
            const e = this.getNotification(t);
            if (e) {
                if (e.notificationBanner) {
                    e.notificationBanner.close();
                } else if (e.abortController) {
                    e.abortController.abort();
                }
                this.$4(t);
            }
        };
        e_prototype.closeOrCancelAllNotifications = function() {
            const e = this;
            this.map.forEach((t, n)=>{
                e.closeOrCancelNotification(n);
            });
        };
        e_prototype.closeOrCancelNotificationsForChat = function(t) {
            const e = this;
            this.map.forEach((n, r)=>{
                if (n.matchesChat(t)) {
                    e.closeOrCancelNotification(r);
                }
            });
        };
        e_prototype.triggerNotification = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = e.buildKey();
                this.$5(n, e);
                try {
                    const i = yield e.triggerNotification(this.$2?.());
                    if (i != null) {
                        if (o("WAWebNotificationsMsgNotification").shouldReplaceMsgNotificationManually() && e instanceof o("WAWebMsgNotification").WAMsgNotification) {
                            const l = o("WAWebFrontendMsgGetters").getChat(e.msg).id.toString();
                            const s = this.lastMsgNotifByChat.get(l);
                            if (s) {
                                self.setTimeout(function() {
                                    return s.close();
                                }, 2000);
                            }
                            this.lastMsgNotifByChat.set(l, i);
                            i.waitForClose().then(()=>{
                                if (t.lastMsgNotifByChat.get(l) === i) {
                                    t.lastMsgNotifByChat.delete(l);
                                }
                            });
                        }
                        i.waitForClose().then(()=>{
                            if (e.notificationBanner === i) {
                                t.$4(n, e);
                            }
                        });
                    } else {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "WANotificationController: notification not invoked:"
                        ])));
                        this.$4(n, e);
                    }
                } catch (error) {
                    o("WAAbortError").catchAbort(function(r) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "WANotificationController: notification aborted: ",
                            ""
                        ])), r);
                        t.$4(n, e);
                    })(r("getErrorSafe")(error));
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.setAppContext = function(t) {
            this.$2 = t;
        };
        e_prototype.$3 = function() {
            let e = null;
            this.map.forEach((t, n)=>{
                if (e == null || t.creationAt > e.creationAt) {
                    e = t;
                }
            });
            if (e) {
                this.triggerNotification(e);
            } else {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController: showLastestUnreadMsgNotification: no unread msg notification found"
                ])));
            }
        };
        e_prototype.$5 = function(t, n) {
            this.map.set(t, n);
        };
        e_prototype.$4 = function(t, n) {
            const e = this.getNotification(t);
            if (e == null) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController:_removeNotificationFromMap cannot find notification in map with key: ",
                    ""
                ])), t);
                return;
            }
            if (n != null && e !== n) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController:_removeNotificationFromMap not removing due to strict equality"
                ])));
                return;
            }
            this.map.delete(t);
        };
        return e;
    })();
    const g = new f;
    l.WANotificationController = g;
}, 98);