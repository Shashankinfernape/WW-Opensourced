__d("WAWebStatusCollection", [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebContactStatusBridge",
    "WAWebCrosspostingMsgHydration",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaOpaqueData",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebStatusGetters",
    "WAWebStatusModel",
    "WAWebUserPrefsMeUser",
    "WAWebWebcStatusSessionWamEvent",
    "WAWebWebcStatusSyncWamEvent",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "sumOfArray"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 86400;
    function d(e, t, n) {
        const r = e.isUnreadMessage(t) && (n == null || e.isUnreadMessage(n));
        if (r) {
            e.set({
                unreadCount: Math.max(0, e.unreadCount - 1)
            });
        }
        const o = [];
        if (t != null) {
            o.push(t);
        }
        if (n != null) {
            o.push(n);
        }
        e.revokeMsgs(o);
    }
    const m = ((t)=>{
        function a(...a) {
            let e;
            e = t.call(this, ...a) || this;
            e.findImpl = function(e) {
                return (u || (u = n("Promise"))).resolve({
                    id: e
                });
            };
            e.findQueryImpl = function() {
                return o("WAWebContactStatusBridge").queryStatusAll();
            };
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.findQuery = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, r) {
                const o = this;
                const a = yield t.prototype.findQuery.call(this, e, r);
                const i = a || [];
                yield (u || (u = n("Promise"))).all(i.map((e)=>{
                    if (e) {
                        let t = 0;
                        e.msgs.forEach((n)=>{
                            if (t < e.statusMsgs.length && e.statusMsgs[t].id.toString() === n.id.toString()) {
                                ++t;
                            } else {
                                n.delete();
                            }
                        });
                        if (e.statusMsgs.length > 0) {
                            return o.addStatusMessages(e.id, e.statusMsgs);
                        }
                        return (u || (u = n("Promise"))).resolve();
                    }
                }));
                return i;
            });
            function r(t, n) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.set = function(n, r) {
            if (r?.remove !== false) {
                const e = this.getSyntheticStatusesToPreserve(n);
                if (e.length > 0) {
                    return t.prototype.set.call(this, [].concat(n, e), r);
                }
            }
            return t.prototype.set.call(this, n, r);
        };
        a_prototype.getSyntheticStatusesToPreserve = function(t) {
            const e = this;
            const n = new Set;
            t.forEach((e)=>{
                if (e.id != null) {
                    n.add(e.id.toString());
                }
            });
            return this.filter((t)=>{
                if (t.isSyntheticFromMetadata !== true) {
                    return false;
                }
                if (n.has(t.id.toString())) {
                    t.isSyntheticFromMetadata = false;
                    return false;
                }
                return e.hasActiveNewsletterStatusMetadata(t.id);
            });
        };
        a_prototype.hasActiveNewsletterStatusMetadata = function(t) {
            const n = r("WAWebNewsletterMetadataCollection") == null ? undefined : r("WAWebNewsletterMetadataCollection").get(t);
            const a = n?.statusMetadata?.lastStatusSentTime;
            return a != null && o("WATimeUtils").unixTime() - a <= c;
        };
        a_prototype.sync = function() {
            const t = this;
            const n = window.performance.now();
            return this.findQuery({}, {
                set: this.hasSynced()
            }).finally(()=>{
                t.trigger("sync");
            }).then((r)=>{
                const a = window.performance.now();
                const syncTime = Math.round(a - n);
                t.logMetrics({
                    type: "sync",
                    syncTime
                });
                const l = t.filter((e)=>e.msgs.length > e.totalCount);
                if (l.length > 0) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " statuses have msgs.length > totalCount => ",
                        ""
                    ])), l.length, l.slice(0, 3).map((e)=>({
                            totalCount: e.totalCount,
                            msgsLength: e.msgs.length
                        })));
                }
                return r;
            });
        };
        a_prototype.logMetrics = function(t) {
            let e;
            if (t.type === "sync") {
                e = new (o("WAWebWebcStatusSyncWamEvent")).WebcStatusSyncWamEvent({
                    webcStatusSyncT: t.syncTime
                });
            } else {
                e = new (o("WAWebWebcStatusSessionWamEvent")).WebcStatusSessionWamEvent({
                    webcStatusSessionId: t.sessionId
                });
            }
            const n = this.filter((e)=>!o("WAWebContactGetters").getIsMe(e.contact));
            const a = n.filter((e)=>!o("WAWebContactGetters").getCalculatedStatusMute(e.contact));
            const i = a.filter((e)=>o("WAWebStatusGetters").getHasUnread(e));
            const l = a.filter((e)=>!o("WAWebStatusGetters").getHasUnread(e));
            const s = n.filter((e)=>o("WAWebContactGetters").getCalculatedStatusMute(e.contact));
            const u = r("sumOfArray")(a.map((e)=>e.unreadCount));
            const c = r("sumOfArray")(a.map((e)=>o("WAWebStatusGetters").getReadCount(e)));
            const d = r("sumOfArray")(s.map((e)=>e.totalCount));
            e.webcStatusRecentItemCount = u;
            e.webcStatusRecentRowCount = i.length;
            e.webcStatusViewedItemCount = c;
            e.webcStatusViewedRowCount = l.length;
            e.webcStatusMutedItemCount = d;
            e.webcStatusMutedRowCount = s.length;
            e.commit();
        };
        a_prototype.hasSynced = function() {
            return true;
        };
        a_prototype.getStatusModel = function(t, n) {
            let e = this.get(t);
            const r = t.isUser();
            if (e == null && n && r) {
                const a = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
                e = a != null ? this.get(a) : null;
            }
            return e;
        };
        a_prototype.handleUpdate = function(t, n) {
            let a = o("WAWebMsgGetters").getSender(t) ?? t.from;
            if (t.id.remote.isStatus()) {
                a = t.id.fromMe ? o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebUserPrefsMeUser").getMeUserOrThrow()) : t.author;
            }
            if (this.hasSynced()) {
                if (n) {
                    return true;
                }
                const i = t.subtype === "sender_revoke" || t.subtype === "admin_revoke";
                const l = a ? this.getStatusModel(a, i) : null;
                if (l) {
                    if (!i && l.isSyntheticFromMetadata === true) {
                        l.set({
                            totalCount: 0,
                            unreadCount: 0
                        });
                        l.isSyntheticFromMetadata = false;
                    }
                    const u = l.totalCount === l.msgs.length;
                    if (i) {
                        const c = t.protocolMessageKey;
                        const m = c != null ? o("WAWebLidMigrationUtils").getAlternateMsgKey(c) : null;
                        let p = false;
                        if (c != null) {
                            p = l.containsMessage(c) || l.containsMessage(m);
                        }
                        if (p !== true) {
                            return true;
                        }
                        const _ = c?.toString();
                        const f = m?.toString();
                        if (l.id.isNewsletter()) {
                            d(l, _, f);
                        } else {
                            const g = {
                                totalCount: l.totalCount - 1
                            };
                            if (l?.isUnreadMessage(_) && (f == null || l != null && l.isUnreadMessage(f))) {
                                g.unreadCount = l.unreadCount - 1;
                            }
                            l.set(g);
                        }
                    } else {
                        if (l.containsMessage(t.id)) {
                            return u;
                        }
                        const h = {
                            totalCount: l.totalCount + 1,
                            t: t.t
                        };
                        if (t.invis !== true) {
                            h.unreadCount = l.unreadCount + 1;
                        }
                        l.set(h);
                    }
                    if (!u && !r("isStringNullOrEmpty")(t.body)) {
                        r("WAWebMediaOpaqueData").createFromBase64Jpeg(t.body).then((e)=>{
                            l.pic = e;
                        }).catch(()=>{
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[StatusCollection] failed to create from base64 jpeg"
                            ]))).sendLogs("failed-to-create-from-base64-jpeg");
                        });
                    }
                    return u;
                }
                if (i) {
                    return true;
                }
                if (a) {
                    const y = {
                        id: a,
                        t: t.t,
                        unreadCount: t.invis === true ? 0 : 1,
                        totalCount: 1
                    };
                    this.add(y);
                }
                return true;
            }
            return false;
        };
        a_prototype.addStatusMessages = function(t, r) {
            return (u || (u = n("Promise"))).all([
                this.$StatusCollectionImpl$p_1(o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID), r.filter((e)=>e.id.remote.isStatus())),
                this.$StatusCollectionImpl$p_1(t, r.filter((e)=>!e.id.remote.isStatus() && o("WAWebMsgGetters").getIsStatus(e)))
            ]).then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                    yield o("WAWebCrosspostingMsgHydration").hydrateCrosspostingInfoBulk(t);
                    return t.concat(n);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        };
        a_prototype.$StatusCollectionImpl$p_1 = function(t, r) {
            if (r.length === 0) {
                return (u || (u = n("Promise"))).resolve([]);
            }
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(t, r, {
                add: "after",
                isHistory: true
            }, "addStatusMessages");
        };
        a_prototype.getValidStatus = function() {
            return this.filter((e)=>{
                if (e.isSyntheticFromMetadata === true || e.totalCount <= 0 || e.isExpired() || o("WAWebContactGetters").getIsMe(e.contact)) {
                    return false;
                }
                if (o("WAWebFrontendContactGetters").getIsMyContact(e.contact)) {
                    return true;
                }
                if (o("WAWebContactGetters").getIsPSA(e.contact)) {
                    return false;
                }
                const t = o("WAWebChatCollection").ChatCollection.get(e.contact.id);
                if (t?.archive === true || t?.isLocked === true) {
                    return false;
                }
                if (o("WAWebContactGetters").getIsGroup(e.contact)) {
                    const a = r("WAWebGroupMetadataCollection") == null ? undefined : r("WAWebGroupMetadataCollection").get(e.contact.id);
                    if (a?.suspended === true) {
                        return false;
                    }
                    if (a?.participants?.iAmMember() === true) {
                        return true;
                    }
                }
                if (o("WAWebChatGetters").getIsNewsletter(e.contact)) {
                    const i = r("WAWebNewsletterMetadataCollection") == null ? undefined : r("WAWebNewsletterMetadataCollection").get(e.contact.id);
                    if (i?.suspended === true) {
                        return false;
                    }
                    if (i != null && o("WAWebNewsletterMetadataGetters").getIsSubscribedOrOwned(i)) {
                        return true;
                    }
                }
                return false;
            });
        };
        a_prototype.getUnexpired = function({ containsAnyUnreadStatus }) {
            const n = this.getValidStatus();
            if (containsAnyUnreadStatus) {
                return n.filter((e)=>e.unreadCount > 0);
            }
            return n.filter((e)=>e.unreadCount === 0);
        };
        a_prototype.getMyStatus = function() {
            const e = this.filter((e)=>o("WAWebContactGetters").getIsMe(e.contact));
            if (e.length !== 0 && !(o("WATimeUtils").unixTime() - e[0].t > c)) {
                return e[0];
            }
        };
        a_prototype.getPSAStatus = function() {
            const e = this.filter((e)=>o("WAWebContactGetters").getIsPSA(e.contact));
            if (e.length !== 0) {
                return e[0];
            }
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    m.model = r("WAWebStatusModel");
    m.comparator = function(e, t) {
        return t.t - e.t;
    };
    const p = new m;
    l.StatusCollection = p;
}, 98);