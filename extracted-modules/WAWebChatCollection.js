__d("WAWebChatCollection", [
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatLockUpdateDailyStats",
    "WAWebChatModel",
    "WAWebDebounce",
    "WAWebIdleTaskRunner",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebSocketConstants",
    "WAWebSocketModel"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1800000;
    const u = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            e.notSpam = {};
            e.promises = {
                sendUnstarAll: null
            };
            e.$ChatCollectionImpl$p_1 = false;
            e.$ChatCollectionImpl$p_2 = false;
            e.$ChatCollectionImpl$p_4 = new Set;
            e.setIndexes = function() {
                e.forEach((e, t)=>{
                    e.initialIndex = t;
                });
            };
            o("WAWebBizBroadcastProOnboardingStatus").bizBroadcastProNuxStateEmitter.on("change", function() {
                e.forEach(d);
            });
            e.on("add", d);
            e.enableSortListener();
            e.listenTo(o("WAWebSocketModel").Socket, "change:stream", function() {
                if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.RESUMING) {
                    e.forEach((e)=>{
                        e.pendingMsgs = false;
                    });
                }
            });
            e.listenToOnce(e, "sort", r("WAWebDebounce")(e.setIndexes, 100));
            e.$ChatCollectionImpl$p_5();
            e.listenTo(e, "change:isLocked", r("WAWebDebounce")(function() {
                o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
                    totalFolderChatsCount: e.countWhere(function(e) {
                        return e.isLocked;
                    })
                });
            }, 500));
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.$ChatCollectionImpl$p_5 = function() {
            const e = this;
            self.clearTimeout(this.$ChatCollectionImpl$p_3);
            this.$ChatCollectionImpl$p_3 = self.setTimeout(function() {
                o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function() {
                    e.$ChatCollectionImpl$p_6();
                    e.$ChatCollectionImpl$p_5();
                });
            }, s);
        };
        n_prototype.$ChatCollectionImpl$p_6 = function() {
            const e = this;
            this.forEach(({ id })=>{
                if (!e.$ChatCollectionImpl$p_4.has(id)) {
                    o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function() {
                        e.$ChatCollectionImpl$p_4.delete(id);
                        const t = e.get(id);
                        if (t?.active === false) {
                            t.deregisterExpiredViewOnceBulkMessages(t.msgs);
                        }
                    });
                    e.$ChatCollectionImpl$p_4.add(id);
                }
            });
        };
        n_prototype.getUnreadCount = function() {
            return this.countWhere(function(e) {
                return e.showUnreadInTitle;
            });
        };
        n_prototype.add = function(n, a) {
            const e = this;
            const i = t.prototype.add.call(this, n, a);
            if (!this.$ChatCollectionImpl$p_1 && o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3")) {
                this.$ChatCollectionImpl$p_1 = true;
                this.listenTo(r("WAWebL10N"), "locale_change", function() {
                    e.forEach((e)=>{
                        o("WAWebChatGroupUtils").updateTitle(e);
                    });
                });
            }
            return i;
        };
        n_prototype.enableSortListener = function(t) {
            if (!this.$ChatCollectionImpl$p_2) {
                for (const e of [
                    "change:t",
                    "change:pin",
                    "change:id",
                    "change:isLocked",
                    "change:endOfHistoryTransferType",
                    "change:isParentGroup",
                    "change:msgs",
                    "change:createdLocally",
                    "change:chatViewMode",
                    "change:msgsLength",
                    "change:bbProEntrypointEnabled"
                ]){
                    this.listenTo(this, e, this.sort);
                }
                if (t === true) {
                    this.sort();
                }
                this.$ChatCollectionImpl$p_2 = true;
            }
        };
        n_prototype.disableSortListener = function() {
            if (this.$ChatCollectionImpl$p_2) {
                this.stopListening(null, null, this.sort);
                this.$ChatCollectionImpl$p_2 = false;
            }
        };
        n_prototype.getActive = function() {
            const t = this.filter((e)=>e.active);
            if (t.length > 1) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ChatCollection:getActive more than one active chat"
                ]))).sendLogs("more-than-one-active-chat-in-chat-collection");
            }
            return t[0];
        };
        n_prototype.getChatByAccountLid = function(t) {
            const e = this.get(t);
            if (e) {
                return e;
            }
            const n = o("WAWebLidMigrationUtils").toPn(t);
            const r = n ? this.get(n) : null;
            if (t.equals(r?.accountLid)) {
                return r;
            }
            return null;
        };
        n_prototype.getLatestChatForWid = function(t) {
            const e = o("WAWebLidMigrationUtils").shouldHaveAccountLid(t) ? o("WAWebLidMigrationUtils").toLid(t) : null;
            if (e != null) {
                return c.getChatByAccountLid(e);
            }
            return c.get(t);
        };
        n_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.listenToOnce(this, "sort", r("WAWebDebounce")(this.setIndexes, 100));
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebChatModel").Chat;
    u.comparator = r("WAWebChatComparator");
    var c = new u;
    function d(e) {
        if (o("WAWebChatGetters").getIsBroadcast(e)) {
            const t = o("WAWebBizBroadcastProOnboardingStatus").getBizBroadcastProNuxOnboardingStatus();
            const n = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastProEntrypointEnabledForStatus(t);
            if (e.bbProEntrypointEnabled !== n) {
                e.bbProEntrypointEnabled = n;
            }
        }
    }
    l.ChatCollectionImpl = u;
    l.ChatCollection = c;
}, 98);