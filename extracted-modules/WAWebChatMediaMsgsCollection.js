__d("WAWebChatMediaMsgsCollection", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebCarouselMsgUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgQueryUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
        o("WAWebMsgType").MSG_TYPE.AUDIO
    ]);
    const d = {
        before: "before",
        after: "after"
    };
    function m(e) {
        return o("WAWebMsgGetters").getIsMedia(e) && !e.isViewOnce && o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage(e) && e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN && e.viewMode !== o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE;
    }
    const p = ((t)=>{
        function a(...l_1) {
            let a;
            a = t.call(this, ...l_1) || this;
            a.hasMediaBefore = true;
            a.hasMediaAfter = true;
            a.$ChatMediaMsgsCollection$p_1 = null;
            a.$ChatMediaMsgsCollection$p_2 = null;
            a.count = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                    if (n && !n.equals(a.$ChatMediaMsgsCollection$p_2)) {
                        a.$ChatMediaMsgsCollection$p_1 = null;
                        a.$ChatMediaMsgsCollection$p_2 = n;
                    } else if (a.$ChatMediaMsgsCollection$p_1 != null) {
                        return a.$ChatMediaMsgsCollection$p_1;
                    }
                    const l = n ? t.msgs.filter((e)=>m(e) && o("WAWebThreadMsgUtils").isMsgInThread(e, n)) : t.msgs.filter(m);
                    const s = l[0] ?? t.msgs.head();
                    if (s == null) {
                        return 0;
                    }
                    try {
                        const u = yield o("WAWebMsgQueryUtils").queryMedia(s.id.remote, Infinity, "before", s.id);
                        const c = n ? r("countWhere")(u.messages, function(e) {
                            return o("WAWebThreadMsgUtils").isMsgInThread(e, n);
                        }) : _(u.mediaCount, u.messages);
                        const d = c > 0 && l.length > 0 ? 1 : 0;
                        a.$ChatMediaMsgsCollection$p_1 = c + l.length - d;
                        return a.$ChatMediaMsgsCollection$p_1;
                    } catch (error) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to count medias for chat ",
                            " with error ",
                            ""
                        ])), t.id, error).verbose().sendLogs("md-failed-medias-count");
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
        };
        a_prototype.add = function(n, r) {
            this.$ChatMediaMsgsCollection$p_1 = null;
            return t.prototype.add.call(this, n, r);
        };
        a_prototype.remove = function(n, r) {
            this.$ChatMediaMsgsCollection$p_1 = null;
            return t.prototype.remove.call(this, n, r);
        };
        a_prototype.getAfter = function(t) {
            const e = this.indexOf(t);
            if (e < 0 || e === this.length - 1) {
                return null;
            }
            return this.at(e + 1);
        };
        a_prototype.getBefore = function(t) {
            const e = this.indexOf(t);
            if (e <= 0) {
                return null;
            }
            return this.at(e - 1);
        };
        a_prototype.loadEarlierMedias = function() {
            let e = this.head();
            if (e) {
                if (e.isCarouselCard) {
                    e = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e) ?? e;
                }
                this.queryMedia({
                    msg: e
                });
            }
        };
        a_prototype.loadRecentMedias = function() {
            let e = this.last();
            if (e) {
                if (e.isCarouselCard) {
                    e = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e) ?? e;
                }
                this.queryMedia({
                    msg: e,
                    direction: d.after
                });
            }
        };
        a_prototype.loadMoreAroundIfNeeded = function(t) {
            if (!(!t || t.isViewOnce)) {
                const e = this.indexOf(t);
                if (e < 20 && this.hasMediaBefore) {
                    this.loadEarlierMedias();
                }
                if (this.length - e < 20 && this.hasMediaAfter) {
                    this.loadRecentMedias();
                }
            }
        };
        a_prototype.queryMedia = function(t) {
            const a = this;
            const { chat, msg } = t;
            const s = t.direction ?? d.before;
            if (!msg && chat) {
                const c = chat.msgs;
                if (!c || c.length === 0) {
                    this.hasMediaBefore = false;
                    return new (u || (u = n("Promise")))(function(e) {
                        e({
                            eof: true
                        });
                    });
                }
                this.add(c.filter(m), {
                    at: 0
                });
                const p = this.toArray();
                if (chat.msgs.msgLoadState.noEarlierMsgs) {
                    this.hasMediaBefore = false;
                    return new (u || (u = n("Promise")))(function(e) {
                        e({
                            eof: true
                        });
                    });
                }
                if (p.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
                    const _ = p.length === 0 ? c.head() : p[0];
                    return this.queryMedia({
                        chat,
                        msg: _
                    });
                }
                return new (u || (u = n("Promise")))(function(e) {
                    e({
                        eof: false
                    });
                });
            }
            if (msg && s === d.before) {
                if (this.queryMediaBefore) {
                    return this.queryMediaBefore;
                }
                let g = 0;
                this.queryMediaBefore = o("WAWebMsgQueryUtils").queryMedia(msg.id.remote, o("WAWebMsgCollection").MEDIA_QUERY_LIMIT, s, o("WAWebMsgGetters").getIsMedia(msg) ? msg.id : undefined).then(({ messages })=>{
                    if (!messages || messages.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
                        a.hasMediaBefore = false;
                    }
                    let n = [];
                    if (messages && messages.length > 0) {
                        n = f(messages);
                    }
                    a.add(n, {
                        at: 0
                    });
                    g = n.length;
                    return {
                        length: g
                    };
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, r("WAWebNoop"))).finally(()=>{
                    a.queryMediaBefore = null;
                    a.trigger("query_media_before", g);
                });
                this.trigger("query_media_before", 0);
                return this.queryMediaBefore;
            } else if (msg && s === d.after) {
                if (this.queryMediaAfter) {
                    return this.queryMediaAfter;
                }
                return this.queryMediaAfter = o("WAWebMsgQueryUtils").queryMedia(msg.id.remote, o("WAWebMsgCollection").MEDIA_QUERY_LIMIT, s, msg.id).then(({ messages })=>{
                    if (!messages || messages.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
                        a.hasMediaAfter = false;
                    }
                    let n = [];
                    if (messages && messages.length > 0) {
                        n = f(messages);
                    }
                    a.add(n);
                    return {
                        length: n.length
                    };
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, r("WAWebNoop"))).finally(()=>{
                    a.queryMediaAfter = null;
                    a.trigger("query_media_after");
                });
            }
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    p.model = o("WAWebMsgModel").Msg;
    p.comparator = function(e, t) {
        return e.t - t.t;
    };
    function _(mediaCount, messages) {
        const n = r("countWhere")(messages, function(e) {
            return e.viewMode === o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE && c.has(e.type);
        });
        const a = (mediaCount ?? 0) - n;
        if (a < 0) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[media-count] scheduled media exceeds the DB media count, dbMediaCount: ",
                ", scheduledMediaCount: ",
                ""
            ])), mediaCount ?? 0, n).sendLogs("chat-media-count-negative");
            return 0;
        }
        return a;
    }
    function f(messages) {
        return o("WAWebCarouselMsgUtils").flattenMsgs(messages).filter(m);
    }
    l.default = p;
}, 98);