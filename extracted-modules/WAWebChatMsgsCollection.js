__d("WAWebChatMsgsCollection", [
    "invariant",
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebBizSystemMsgSubtypes",
    "WAWebChatMsgsCollectionComparator",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebViewModeUtils"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.noEarlierMsgs = o("WAWebBaseModel").prop();
            t.isLoadingEarlierMsgs = o("WAWebBaseModel").prop();
            t.isLoadingRecentMsgs = o("WAWebBaseModel").prop();
            t.isLoadingAroundMsgs = o("WAWebBaseModel").prop();
            t.isRepairingMsgHistory = o("WAWebBaseModel").prop();
            t.contextLoaded = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "msgLoad";
    const u = o("WAWebBaseModel").defineModel(e);
    const c = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.threadId = null;
            t.triggerChangeLast = function(e, n, r) {
                const o = t.last();
                if (t.$ChatMsgsCollection$p_1 !== o) {
                    t.$ChatMsgsCollection$p_1 = o;
                    let a = false;
                    const i = !!r.add;
                    const l = !!r.remove;
                    if (e != null && n.includes(e) && i && !l) {
                        a = true;
                    }
                    t.trigger("change:last", o, a);
                }
            };
            t.msgLoadState = new u({
                noEarlierMsgs: false,
                isLoadingEarlierMsgs: false,
                isLoadingRecentMsgs: false,
                isLoadingAroundMsgs: false,
                contextLoaded: false,
                isRepairingMsgHistory: false
            });
            t.listenTo(t, "add remove", t.triggerChangeLast);
            t.listenTo(t, "sort reset", function(e, n) {
                t.triggerChangeLast(null, e, n ?? {});
            });
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            this.stopListening();
            e.prototype.delete.call(this);
            this.msgLoadState.delete();
        };
        t_prototype.last = function() {
            return e.prototype.getModelsArray.call(this).findLast((e)=>o("WAWebViewModeUtils").isMessageExistingInChat(e));
        };
        t_prototype.add = function(n, r) {
            const t = this;
            let a;
            if (Array.isArray(n)) {
                if (n.length === 1) {
                    a = n[0];
                }
            } else {
                a = n;
            }
            let i = [];
            if (a != null && (o("WAWebMsgGetters").getIsInitialE2ENotification(a) || o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(a))) {
                const l = this.some((e)=>o("WAWebMsgGetters").getIsInitialE2ENotification(e));
                if (o("WAWebMsgGetters").getIsInitialE2ENotification(a)) {
                    if (!l) {
                        i = e.prototype.add.call(this, n, babelHelpers.extends({}, r, {
                            at: 0
                        }));
                    }
                }
                if (o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(a)) {
                    const s = this.some((e)=>o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(e));
                    if (!s) {
                        const at = l ? 1 : 0;
                        i = e.prototype.add.call(this, n, babelHelpers.extends({}, r, {
                            at
                        }));
                    }
                }
                if (i) {
                    this.trigger("insert_msgs", i, r);
                }
            } else {
                const d = a != null ? o("WAWebMsgGetters").getSubtype(a) : null;
                const m = d != null && o("WAWebBizSystemMsgSubtypes").COEX_MSG_SUBTYPES.includes(d) && this.last()?.subtype === d;
                if (!m) {
                    i = e.prototype.add.call(this, n, r);
                }
            }
            if (i.length > 0) {
                const p = o("WAWebMsgCollection").MsgCollection.add(i.filter(Boolean), r);
                p.forEach((e)=>{
                    if (e && t.isModel(e)) {
                        e.setMsgChunk(t, t.threadId);
                    }
                });
                this.trigger("bulk_add", i, r);
            }
            return i;
        };
        t_prototype.remove = function(n, r = {}, o = false) {
            const t = e.prototype.remove.call(this, n, r);
            const a = r ? r.silent : false;
            const i = t.filter((e)=>!!e);
            if (i.length && a !== true) {
                this.trigger("remove_msgs", i, r);
                if (!o) {
                    this.trigger("update_sort_time");
                }
            }
            return t;
        };
        t_prototype.replace = function(t) {
            const e = this;
            this.msgLoadState = t.msgLoadState;
            this.loadRecentPromise = t.loadRecentPromise;
            this.loadEarlierPromise = t.loadEarlierPromise;
            this.loadAroundPromise = t.loadAroundPromise;
            const n = t.getModelsArray();
            this.set(n, {
                silent: true,
                merge: false
            });
            n.forEach((t)=>{
                if (e.isModel(t)) {
                    t.setMsgChunk(e, e.threadId);
                }
            });
            this.trigger("bulk_add", n);
        };
        t_prototype.onMsgLoadStateChange = function(t) {
            const e = this;
            let n;
            const r = function() {
                t();
            };
            const o = function() {
                if (n == null) {
                    s(0, 56282);
                }
                n.off("change", r);
                const e_msgLoadState = e.msgLoadState;
                e_msgLoadState.on("change", r);
                n = e_msgLoadState;
                t();
            };
            n = this.msgLoadState;
            n.on("change", r);
            this.on("bulk_add", o);
            let a = function() {
                if (n == null) {
                    s(0, 56281);
                }
                e.off("bulk_add", o);
                n.off("change", r);
            };
            return function() {
                const e = a;
                if (e) {
                    a = null;
                    e();
                }
            };
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebMsgModel").Msg;
    c.comparator = o("WAWebChatMsgsCollectionComparator").msgComparator;
    l.ChatMsgsCollection = c;
}, 98);