__d("WAWebStatusModel", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAlarm",
    "WAWebAppTracker",
    "WAWebBaseModel",
    "WAWebCollectionConstants",
    "WAWebCommonMsgUtils",
    "WAWebContactCollection",
    "WAWebContactStatusBridge",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendStatusGetters",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebNoop",
    "WAWebNotificationBackend",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusGetters",
    "WAWebStatusPSAUtils",
    "WAWebSuperChatMsgs",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "gkx",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        o("WAWebCommonMsgUtils").EventType.DEFAULT,
        o("WAWebCommonMsgUtils").EventType.AMBIENT
    ];
    const d = 3600 * 24;
    const m = 1000;
    const p = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.t = o("WAWebBaseModel").prop();
            e.unreadCount = o("WAWebBaseModel").prop(0);
            e.totalCount = o("WAWebBaseModel").prop(0);
            e.pic = o("WAWebBaseModel").prop();
            e.statusMsgs = o("WAWebBaseModel").prop(function() {
                return [];
            });
            e.isLoading = o("WAWebBaseModel").session(false);
            e.isSyntheticFromMetadata = o("WAWebBaseModel").session(false);
            e.readKeys = o("WAWebBaseModel").session(function() {
                return {};
            });
            e.contact = o("WAWebBaseModel").session();
            e.expireTimer = o("WAWebBaseModel").session();
            e.expireTs = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            this.addChild("contact", o("WAWebContactCollection").ContactCollection.gadd(this.id));
            const n = function() {
                self.setTimeout(function() {
                    e.setupStatusExpiration();
                });
            };
            this.listenTo(this.msgs, "add", n);
            this.listenTo(this.msgs, "bulk_add", n);
            this.listenTo(this, "change:msgsChanged", function() {
                const t = o("WAWebFrontendStatusGetters").getLastStatus(e);
                if (t) {
                    e.t = t.t;
                }
            });
            this.listenTo(this.msgs, "remove", function(t) {
                if (t.isGroupStatus === true) {
                    e.totalCount = Math.max(0, e.totalCount - 1);
                    if (t.ack && t.ack < o("WAWebAck").ACK.READ) {
                        e.unreadCount = Math.max(0, e.unreadCount - 1);
                    }
                    if (e.totalCount === 0) {
                        e.onEmptyMRM();
                    }
                }
            });
            this.listenTo(this.msgs, "add", function(e) {
                if (o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() && !o("WAWebMsgGetters").getIsSentByMe(e) && o("WAWebMsgGetters").getStatusMentioned(e) && c.includes(o("WAWebFrontendMsgGetters").getEventType(e))) {
                    o("WAWebNotificationBackend").showStatusNotification(e);
                }
            });
        };
        a_prototype.isExpired = function() {
            if (this.id.isPSA()) {
                return o("WAWebStatusPSAUtils").isExpiredStatusPSA(this.msgs.toArray(), d);
            }
            return o("WATimeUtils").unixTime() - this.t > d;
        };
        a_prototype.setupStatusExpiration = function() {
            const e = this;
            const t = this.msgs.at(0);
            if (t && !(typeof this.expireTs === "number" && this.expireTs <= t.t)) {
                const n = 1;
                const a = t.t + d + n;
                if (a < o("WATimeUtils").unixTime()) {
                    self.setTimeout(function() {
                        e.expireMsg();
                    });
                } else {
                    this.expireTimer = r("WAWebAlarm").setGlobalTimeout(this.expireMsg.bind(this), a * m, this.expireTimer);
                    this.expireTs = t.t;
                }
            }
        };
        a_prototype.$Status$p_1 = function(t) {
            const msgs = this.msgs;
            if (this.unreadCount > this.totalCount - 1) {
                this.unreadCount--;
            }
            this.totalCount--;
            msgs.remove(t);
            t.delete();
        };
        a_prototype.expireMsg = function() {
            if (this.id.isPSA()) {
                this.expirePSAMsg();
                return;
            }
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PurgeStatuses);
            for(const e = this.msgs; e.length > 0;){
                const t = e.at(0);
                if (!t) {
                    break;
                }
                const n = t.t + d > o("WATimeUtils").unixTime();
                if (n) {
                    break;
                }
                this.$Status$p_1(t);
            }
            r("gkx")("26258");
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PurgeStatuses);
            this.expireTs = undefined;
            this.expireTimer = undefined;
            if (this.totalCount !== 0) {
                this.setupStatusExpiration();
            }
        };
        a_prototype.expirePSAMsg = function() {
            const e = this;
            const t = o("WAWebStatusPSAUtils").getPSACampaigns(this.msgs.toArray());
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PurgeStatuses);
            this.msgs.forEach((n)=>{
                const n_campaignId = n.campaignId;
                if (n_campaignId != null) {
                    const a = o("WAWebStatusPSAUtils").isCampaignExpired(t[n_campaignId], d);
                    if (a) {
                        e.$Status$p_1(n);
                    }
                }
            });
            r("gkx")("26258");
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PurgeStatuses);
            this.expireTs = undefined;
            this.expireTimer = undefined;
            if (this.totalCount !== 0) {
                this.setupStatusExpiration();
            }
        };
        a_prototype.isUnreadMessage = function(t) {
            if (t == null) {
                return false;
            }
            const e = o("WAWebMsgModelUtils").getReadMsgKeys(this.msgs.toArray());
            const n = e.find((e)=>e === t) == null;
            return n && this.readKeys[t] !== true;
        };
        a_prototype.revokeMsgs = function(t) {
            const e = this;
            const n = new Set(t);
            const r = this.msgs.filter((e)=>n.has(e.id.toString()));
            r.forEach((t)=>e.$Status$p_1(t));
            if (this.totalCount === 0) {
                this.expireTs = undefined;
                this.expireTimer = undefined;
            }
        };
        a_prototype.delete = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Status deleted with total count: ",
                ""
            ])), this.totalCount);
            t.prototype.delete.call(this);
            if (!r("isStringNullOrEmpty")(this.expireTimer)) {
                r("WAWebAlarm").clearTimeout(this.expireTimer);
            }
            if (this.expireTs != null) {
                this.expireTs = undefined;
            }
            this.getCollection().remove(this.id);
            o("WAWebStatusGetters").clearStatusGetterCacheFor(this);
            o("WAWebFrontendStatusGetters").clearFrontendStatusGetterCacheFor(this);
        };
        a_prototype.onEmptyMRM = function() {
            const e = this;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Status onEmptyMRM with total count: ",
                ", noEarlierMsgs: ",
                ""
            ])), this.totalCount, this.msgs.msgLoadState.noEarlierMsgs ? "true" : "false");
            if (this.msgs.msgLoadState.noEarlierMsgs && this.totalCount === 0) {
                this.delete();
                return;
            }
            if (this.totalCount > 0) {
                this.loadMore().catch(r("WAWebNoop")).finally(()=>{
                    if (!e.msgs.length) {
                        e.delete();
                    }
                });
            }
        };
        a_prototype.loadMore = function(t = o("WAWebCollectionConstants").PAGE_SIZE) {
            if (this.msgs.msgLoadState.noEarlierMsgs) {
                return (u || (u = n("Promise"))).resolve();
            }
            if (this.msgs.msgLoadState.isLoadingEarlierMsgs) {
                return this.msgs.loadEarlierPromise;
            }
            this.msgs.msgLoadState.noEarlierMsgs = true;
            return (u || (u = n("Promise"))).resolve();
        };
        a_prototype.handleReadStatus = function(t) {
            const e = t.toString();
            if (!this.readKeys[e]) {
                this.readKeys[e] = true;
                if (this.unreadCount > 0) {
                    this.unreadCount--;
                }
            }
        };
        a_prototype.sendReadStatus = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const r = yield o("WAWebContactStatusBridge").sendReadStatus(e, t, n);
                if (r) {
                    this.handleReadStatus(e.id);
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getCollection = function() {
            return o("WAWebStatusCollection").StatusCollection;
        };
        a_prototype.containsMessage = function(t) {
            if (t == null) {
                return false;
            }
            return this.msgs.toArray().some((e)=>e.id.toString() === t.toString());
        };
        return a;
    })(r("WAWebSuperChatMsgs"));
    p.Proxy = "status";
    p.idClass = r("WAWebWid");
    const _ = o("WAWebBaseModel").defineModel(p);
    l.default = _;
}, 98);