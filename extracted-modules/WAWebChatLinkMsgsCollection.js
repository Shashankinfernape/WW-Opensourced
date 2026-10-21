__d("WAWebChatLinkMsgsCollection", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseLoop",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebMsgCollection",
    "WAWebMsgLinks",
    "WAWebMsgModel",
    "WAWebMsgQueryUtils",
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
        function a(...l_1) {
            let a;
            a = t.call(this, ...l_1) || this;
            a.hasLinkBefore = true;
            a.$ChatLinkMsgsCollection$p_1 = null;
            a.$ChatLinkMsgsCollection$p_2 = 0;
            a.$ChatLinkMsgsCollection$p_3 = false;
            a.$ChatLinkMsgsCollection$p_4 = null;
            a.$ChatLinkMsgsCollection$p_5 = null;
            a.$ChatLinkMsgsCollection$p_6 = 0;
            a.count = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                    if (!a.$ChatLinkMsgsCollection$p_3) {
                        a.$ChatLinkMsgsCollection$p_3 = true;
                        a.refreshCountAfterBackfill(t);
                    }
                    if (n && !n.equals(a.$ChatLinkMsgsCollection$p_4)) {
                        a.$ChatLinkMsgsCollection$p_1 = null;
                        a.$ChatLinkMsgsCollection$p_4 = n;
                    } else if (a.$ChatLinkMsgsCollection$p_1 != null) {
                        return a.$ChatLinkMsgsCollection$p_1;
                    }
                    const l = n != null ? t.msgs.filter((e)=>o("WAWebMsgLinks").hasLinkGalleryLinks(e) && o("WAWebThreadMsgUtils").isMsgInThread(e, n)) : t.msgs.filter((e)=>o("WAWebMsgLinks").hasLinkGalleryLinks(e));
                    const s = l[0] ?? t.msgs.head();
                    if (s == null) {
                        return 0;
                    }
                    const a_$ChatLinkMsgsCollection$p_2 = a.$ChatLinkMsgsCollection$p_2;
                    try {
                        const c = yield o("WAWebMsgQueryUtils").queryMedia(s.id.remote, Infinity, "before", s.id, "url");
                        const d = c.filter(o("WAWebMsgLinks").shouldListLinkIndexMsg);
                        const m = n != null ? d.filter((e)=>o("WAWebThreadMsgUtils").isMsgInThread(e, n)) : d;
                        if (a_$ChatLinkMsgsCollection$p_2 !== a.$ChatLinkMsgsCollection$p_2) {
                            return a.count(t, n);
                        }
                        const p = l.length > 0 && m.some((e)=>e.id.equals(s.id)) ? 1 : 0;
                        a.$ChatLinkMsgsCollection$p_1 = m.length + l.length - p;
                        return a.$ChatLinkMsgsCollection$p_1;
                    } catch (error) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to count medias for chat ",
                            ""
                        ])), t.id).verbose().sendLogs(`md-failed-medias-count: ${r("getErrorSafe")(error).message}`);
                        return null;
                    }
                });
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.stopListening();
            this.reset();
            this.hasLinkBefore = true;
            this.queryLinkBefore = null;
            this.$ChatLinkMsgsCollection$p_5 = null;
            this.$ChatLinkMsgsCollection$p_6++;
            this.$ChatLinkMsgsCollection$p_1 = null;
            this.$ChatLinkMsgsCollection$p_2++;
        };
        a_prototype.add = function(n, r) {
            this.$ChatLinkMsgsCollection$p_1 = null;
            return t.prototype.add.call(this, n, r);
        };
        a_prototype.remove = function(n, r) {
            this.$ChatLinkMsgsCollection$p_1 = null;
            return t.prototype.remove.call(this, n, r);
        };
        a_prototype.queryLinks = function(t, a) {
            const e = this;
            if (a) {
                if (this.queryLinkBefore) {
                    return this.queryLinkBefore;
                }
                const i = this.$ChatLinkMsgsCollection$p_5 != null && this.$ChatLinkMsgsCollection$p_5.t < a.t ? this.$ChatLinkMsgsCollection$p_5 : a;
                const l = this.$ChatLinkMsgsCollection$p_6;
                var s = this.queryLinkBefore = o("WAWebMsgQueryUtils").queryMedia(i.id.remote, o("WAWebMsgCollection").MEDIA_QUERY_LIMIT, "before", i.id, "url").then((t)=>{
                    if (l === e.$ChatLinkMsgsCollection$p_6) {
                        if (!t || t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
                            e.hasLinkBefore = false;
                        }
                        if (t != null && t.length > 0) {
                            e.$ChatLinkMsgsCollection$p_5 = t.reduce((acc, item)=>{
                                if (acc.t <= item.t) {
                                    return acc;
                                }
                                return item;
                            });
                        }
                        e.add(t.filter(o("WAWebMsgLinks").shouldListLinkIndexMsg), {
                            at: 0
                        });
                        e.createLinksAndAddMsgs(t);
                    }
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, r("WAWebNoop"))).finally(()=>{
                    if (e.queryLinkBefore === s) {
                        e.queryLinkBefore = null;
                    }
                    e.trigger("query_link_before");
                });
                this.trigger("query_link_before");
                return s;
            }
            const u = t.msgs.getModelsArray();
            if (this.length === 0) {
                if (!u || u.length === 0) {
                    this.hasLinkBefore = false;
                    return (c || (c = n("Promise"))).resolve();
                }
                this.add(u.filter((e)=>o("WAWebMsgLinks").hasLinkGalleryLinks(e)), {
                    at: 0
                });
                this.createLinksAndAddMsgs(u);
                this.addBackfilledLinks(t);
            }
            if (t.msgs.msgLoadState.noEarlierMsgs) {
                this.hasLinkBefore = false;
                return (c || (c = n("Promise"))).resolve();
            }
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
                const d = this.length === 0 ? t.msgs.head() : this.head();
                return this.queryLinks(t, d);
            }
            return (c || (c = n("Promise"))).resolve();
        };
        a_prototype.addBackfilledLinks = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                try {
                    const n = yield o("WAWebMsgQueryUtils").backfillGroupAgentRichResponseLinks(e.id);
                    yield this.queryLinkBefore;
                    const a = n.filter((n)=>o("WAWebMsgLinks").hasLinkGalleryLinks(n) && !t.$ChatLinkMsgsCollection$p_7(e, n));
                    if (a.length > 0) {
                        this.add(a);
                        this.trigger("query_link_before");
                    }
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to backfill links for chat ",
                        ""
                    ])), e.id).catching(r("getErrorSafe")(error)).sendLogs("link-index-backfill-failed");
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ChatLinkMsgsCollection$p_7 = function(t, n) {
            const r = this.head() ?? t.msgs.head();
            return this.hasLinkBefore && r != null && n.t < r.t;
        };
        a_prototype.refreshCountAfterBackfill = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    const t = yield o("WAWebMsgQueryUtils").backfillGroupAgentRichResponseLinks(e.id);
                    if (t.some((e)=>o("WAWebMsgLinks").hasLinkGalleryLinks(e))) {
                        this.$ChatLinkMsgsCollection$p_1 = null;
                        this.$ChatLinkMsgsCollection$p_2++;
                        this.trigger("link_index_backfill");
                    }
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to backfill links for count in chat ",
                        ""
                    ])), e.id).catching(r("getErrorSafe")(error)).sendLogs("link-index-backfill-count-failed");
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.createLinksAndAddMsgs = function(t) {
            const e = this;
            const n = [];
            o("WAPromiseLoop").promiseLoop(function(e, r, a) {
                if (t.length === a) {
                    e();
                    return;
                }
                const i = t[a];
                if (i != null && o("WAWebMsgLinks").hasLinkGalleryLinks(i)) {
                    n.push(i);
                }
            }).then(()=>{
                e.add(n);
                e.trigger("query_link_before");
            });
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    d.model = o("WAWebMsgModel").Msg;
    d.comparator = function(e, t) {
        return e.t - t.t;
    };
    l.default = d;
}, 98);