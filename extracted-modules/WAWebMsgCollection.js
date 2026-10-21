__d("WAWebMsgCollection", [
    "Promise",
    "WALogger",
    "WAPromiseProps",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebAck",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebBizBotProfileUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotSupportGating",
    "WAWebChatCollection",
    "WAWebCollectionConstants",
    "WAWebCollectionUtils",
    "WAWebCoreActionsODS",
    "WAWebDBMessageFindLocal",
    "WAWebDBMsgUtils",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendMsgGetters",
    "WAWebFtsConstants",
    "WAWebKeepInChatMsgUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgOpaqueData",
    "WAWebMsgType",
    "WAWebMsgVcardUtils",
    "WAWebNewsletterMsgHistoryUtils",
    "WAWebNewsletterViewModeUIUtils",
    "WAWebNoop",
    "WAWebProcessMultipleMsgsAction",
    "WAWebProductMessageListCollection",
    "WAWebProtobufsE2E.pb",
    "WAWebResolveBotProfile",
    "WAWebSyncButtonState",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = 50;
    const h = ((t)=>{
        function a() {
            let a;
            a = t.call(this) || this;
            a.pendingAdd = {};
            a.ftsCache = {};
            a.productListMessagesPrefetchChain = (f || (f = n("Promise"))).resolve([]);
            a._editKeyByParentKey = new Map;
            a._parentKeyByEditKey = new Map;
            a._encryptedData = null;
            a.loadMessagesQuery = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const i = a;
                    const t_anchor = t.anchor;
                    const l_remote = t_anchor.remote;
                    let c;
                    switch(t.direction){
                        case "before":
                        case "after":
                            c = t.direction;
                            break;
                        default:
                            c = "before";
                            break;
                    }
                    const d = {
                        add: c,
                        isHistory: true
                    };
                    const m = yield o("WAWebDBMessageFindLocal").msgFindByDirection({
                        direction: c,
                        anchor: t_anchor,
                        count: t.count,
                        threadId: t.threadId
                    });
                    if (m.status >= 400) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "model:Msg:findQuery error ",
                            ""
                        ])), m.status);
                        return (f || (f = n("Promise"))).reject(m.status);
                    }
                    let m_messages = m.messages;
                    const _ = i.get(t_anchor);
                    if (r("WAWebWid").isNewsletter(l_remote) && _ != null) {
                        m_messages = yield o("WAWebNewsletterMsgHistoryUtils").fillMsgHistoryGaps({
                            jid: l_remote,
                            msgs: c === "before" ? m_messages.concat(o("WAWebMsgDataFromModel").msgDataFromMsgModel(_)) : [
                                o("WAWebMsgDataFromModel").msgDataFromMsgModel(_)
                            ].concat(m_messages),
                            serverIdsToSkip: o("WAWebNewsletterViewModeUIUtils").getHiddenMessageServerIdsForChat(l_remote)
                        });
                    }
                    const t_threadId = t.threadId;
                    const h = function() {
                        const e = i.get(t_anchor);
                        if (e != null) {
                            if (t_threadId != null) {
                                return e.getMsgChunk(t_threadId);
                            }
                            return e.getMsgChunk();
                        }
                        const t = o("WAWebChatCollection").ChatCollection.get(l_remote);
                        if (t != null) {
                            return o("WAWebThreadModelResolver").resolveThreadOrChat(t, t_threadId).msgs;
                        }
                    };
                    m_messages.forEach((e)=>{
                        e.invis = true;
                    });
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "model:Msg:findQuery:got:",
                        ":",
                        ""
                    ])), m_messages.length, t.direction);
                    return i.processMultipleMessages(l_remote, m_messages, d, "msgCollectionFindQuery", h);
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })();
            a.findQueryImpl = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = {
                        anchor: e,
                        count: e.count,
                        serverId: e.serverId
                    };
                    return a.loadMessagesQuery(t);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            a.byParentMessage = o("WAWebCollectionUtils").aggregated(function({ parentMsgKey, type }) {
                if (type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
                    return "UNCATEGORIZED";
                }
                return parentMsgKey;
            }, {
                subscribeToKey: "parentMsgKey"
            });
            a.byChat = o("WAWebCollectionUtils").aggregated(function({ id }) {
                return id.remote;
            });
            a.byThreadId = o("WAWebCollectionUtils").aggregated(function({ threadIds }) {
                return threadIds;
            });
            a.listenTo(a, "remove", a.removeFromCollection);
            return a;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.removeFromCollection = function(t) {
            const e = o("WAWebFrontendMsgGetters").getMaybeChat(t);
            e?.removeFromCollection(t);
        };
        a_prototype.add = function(n, a) {
            const e = Array.isArray(n) ? n : [
                n
            ];
            const i = e.filter((e)=>{
                const t = e.ephemeralDuration != null && e.ephemeralDuration !== 0;
                const n = e.afterReadDuration != null && e.afterReadDuration !== 0;
                if (!t && !n) {
                    return true;
                }
                const r = new (o("WAWebMsgModel")).Msg(e);
                return !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(r);
            });
            const l = t.prototype.add.call(this, i, a);
            o("WAWebMessageAssociationUIUtils").makeParentMessagesVisibleInChat(l);
            r("WAWebSyncButtonState")(l);
            this._prefetchProductListMessages(l);
            o("WAWebMsgVcardUtils").processVCardMessagesForLidMappings(l);
            this.processEditedMessages(l);
            return l;
        };
        a_prototype._prefetchProductListMessages = function(t) {
            this.productListMessagesPrefetchChain = t.filter((e)=>e != null && e.isNewMsg && e.type === o("WAWebMsgType").MSG_TYPE.LIST && e.list?.listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST && e.list?.productListInfo != null).reduce((acc, item)=>{
                if (item == null) {
                    return acc;
                }
                const t_requiresDirectConnection = item.requiresDirectConnection;
                const i = item.isForwarded ? item.businessOwnerJid : item.from.toString({
                    legacy: true
                });
                const productList = item.list?.productListInfo;
                if (i == null || productList == null) {
                    return acc;
                }
                const s = o("WAWebProductMessageListCollection").ProductMessageListCollection.getOrAdd({
                    catalogOwnerJid: i,
                    id: item.id,
                    productList,
                    requiresDirectConnection: t_requiresDirectConnection,
                    title: item.list?.title
                });
                if (s != null && s.productCollection.getModelsArray().length === 0 && !s.isFetching()) {
                    return acc.then(()=>o("WAWebProductMessageListCollection").ProductMessageListCollection.update(s.id));
                }
                return acc;
            }, this.productListMessagesPrefetchChain);
        };
        a_prototype.getMessagesById = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(e);
                return o("WAPromiseProps").promiseProps({
                    messages: this.processMultipleMessages(undefined, t, {
                        add: "search"
                    }, "msgCollectionGetMessagesById"),
                    eof: true,
                    canceled: false
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.hydrateOrGetMessages = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = e.filter((e)=>!t.get(e));
                if (n.length > 0) {
                    const a = yield this.getMessagesById(n);
                    const i = a.messages;
                    if (i.length !== n.length) {
                        throw new (o("WAWebBaseCollection")).CollectionSilentQueryError("No message found for one or more ids");
                    }
                }
                return e.map((e)=>r("nullthrows")(t.get(e)));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.incrementalStarredUpdate = function(t) {
            return this.processMultipleMessages(undefined, t, {
                add: "search"
            }, "msgCollectionIncrementalStarredUpdate");
        };
        a_prototype.search = function(searchTerm, page = 1, r, a, i = {}) {
            const l = this;
            const s = `${searchTerm}__${i.label ?? i.kind ?? ""}`;
            if (page === 1 && !a) {
                const u = this.ftsCache[s];
                if (u) {
                    return u;
                }
                const c = this._search({
                    count: r,
                    jid: a,
                    kind: i.kind,
                    label: i.label,
                    page,
                    searchTerm
                });
                this.ftsCache[s] = c;
                const d = function() {
                    l.ftsCache[s] = null;
                };
                self.setTimeout(d, o("WAWebFtsConstants").FTS_TTL);
                c.catch(d);
                return c;
            }
            return this._search({
                count: r,
                jid: a,
                kind: i.kind,
                label: i.label,
                page,
                searchTerm
            });
        };
        a_prototype._search = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count, jid, kind, label, page, searchTerm }) {
                const c = {
                    searchTerm,
                    page: o("WATypeUtils").isNumber(page) && page !== 0 ? page : 1,
                    count: o("WATypeUtils").isNumber(count) && count !== 0 ? count : o("WAWebCollectionConstants").PAGE_SIZE,
                    remote: jid,
                    tagToCancel: jid ? this.pendingSearchTag : undefined,
                    label,
                    kind
                };
                const d = {
                    add: "search"
                };
                let m;
                try {
                    m = yield o("WAWebDBMessageFindLocal").msgFindSearch(c);
                } catch (error) {
                    o("WAWebCoreActionsODS").logGlobalSearchError();
                    throw error;
                }
                if (c.tagToCancel === this.pendingSearchTag) {
                    this.pendingSearchTag = undefined;
                }
                if (m.status === 499) {
                    return o("WAPromiseProps").promiseProps({
                        messages: (f || (f = n("Promise"))).resolve([]),
                        eof: false,
                        canceled: true
                    });
                }
                if (m.status === 404) {
                    o("WAWebCoreActionsODS").logGlobalSearchError();
                    return (f || (f = n("Promise"))).reject(new (o("WAWebBackendErrors")).E404);
                }
                if (m.status >= 400) {
                    o("WAWebCoreActionsODS").logGlobalSearchError();
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "model:Msg:search error ",
                        ""
                    ])), m.status);
                    return (f || (f = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(m.status, "failed to find a msg during fts"));
                }
                const p = Array.isArray(m) ? m : m.messages;
                const eof = Array.isArray(m) ? true : m.eof;
                const g = p.filter((e)=>e?.isGroupStatus !== true);
                return o("WAPromiseProps").promiseProps({
                    messages: this.processMultipleMessages(undefined, g, d, "msgCollectionSearch"),
                    eof,
                    canceled: false
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getContext = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                const e_anchor = e.anchor;
                const i_remote = e_anchor.remote;
                const s = this.get(e_anchor);
                const u = r("WAWebWid").isNewsletter(i_remote);
                if (s != null && !s.fromQuotedMsg) {
                    return (f || (f = n("Promise"))).all([
                        o("WAWebDBMessageFindLocal").msgFindBefore({
                            anchor: e_anchor,
                            count: e.count,
                            threadId: e.threadId
                        }),
                        o("WAWebDBMessageFindLocal").msgFindAfter({
                            anchor: e_anchor,
                            count: e.count,
                            threadId: e.threadId
                        })
                    ]).then((()=>{
                        const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i, d]) {
                            if ((i.status >= 400 || d.status >= 400) && !u) {
                                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "model:msg:getContext fetch error"
                                ])));
                                if (i.status >= 400) {
                                    throw i.status;
                                }
                                if (d.status >= 400) {
                                    throw d.status;
                                }
                            }
                            const i_messages = i.messages;
                            const d_messages = d.messages;
                            const s_serverId = s.serverId;
                            s.search = false;
                            return (f || (f = n("Promise"))).all([
                                a.processMultipleMessages(i_remote, !u || s_serverId == null ? i_messages : yield o("WAWebNewsletterMsgHistoryUtils").fillMsgHistoryGaps({
                                    jid: i_remote,
                                    msgs: i_messages.concat(o("WAWebMsgDataFromModel").msgDataFromMsgModel(s)),
                                    range: {
                                        start: s_serverId - e.count,
                                        end: s_serverId
                                    },
                                    serverIdsToSkip: o("WAWebNewsletterViewModeUIUtils").getHiddenMessageServerIdsForChat(i_remote)
                                }), {
                                    add: "before",
                                    isHistory: true
                                }, "msgCollectionGetContext", t),
                                a.processMultipleMessages(i_remote, !u || s_serverId == null ? d_messages : yield o("WAWebNewsletterMsgHistoryUtils").fillMsgHistoryGaps({
                                    jid: i_remote,
                                    msgs: [
                                        o("WAWebMsgDataFromModel").msgDataFromMsgModel(s)
                                    ].concat(d_messages),
                                    range: {
                                        start: s_serverId,
                                        end: s_serverId + e.count
                                    },
                                    serverIdsToSkip: o("WAWebNewsletterViewModeUIUtils").getHiddenMessageServerIdsForChat(i_remote)
                                }), {
                                    add: "after",
                                    isHistory: true
                                }, "msgCollectionGetContext", t)
                            ]);
                        });
                        return function(e) {
                            return r.apply(this, arguments);
                        };
                    })());
                }
                const _ = {
                    add: "after",
                    isHistory: true
                };
                if (!(e_anchor instanceof r("WAWebMsgKey"))) {
                    return [
                        [],
                        []
                    ];
                }
                const g = yield o("WAWebDBMessageFindLocal").msgFindAfter({
                    anchor: e_anchor,
                    count: e.count,
                    threadId: e.threadId
                });
                if (g.status >= 400) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "model:msg:getContext:after fetch error"
                    ])));
                    throw g.status;
                }
                return (f || (f = n("Promise"))).resolve(g.messages).then((()=>{
                    const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                        if (r("WAWebWid").isStatus(n[0].id.remote)) {
                            throw r("err")("status, stop querying before the msg");
                        }
                        const e_serverId = e.serverId;
                        return a.processMultipleMessages(i_remote, !u || e_serverId == null ? n : yield o("WAWebNewsletterMsgHistoryUtils").fillMsgHistoryGaps({
                            jid: i_remote,
                            msgs: n,
                            range: {
                                start: e_serverId,
                                end: e_serverId + e.count
                            },
                            serverIdsToSkip: o("WAWebNewsletterViewModeUIUtils").getHiddenMessageServerIdsForChat(i_remote)
                        }), _, "msgCollectionFindQuery", t);
                    });
                    return function(e) {
                        return i.apply(this, arguments);
                    };
                })()).then((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        const s = r("nullthrows")(t[0]);
                        const c = s.id;
                        const d = e.count + 1;
                        const _ = {
                            add: "before",
                            isHistory: true
                        };
                        const g = yield o("WAWebDBMessageFindLocal").msgFindBefore({
                            anchor: c,
                            count: d,
                            threadId: e.threadId
                        });
                        if (g.status >= 400) {
                            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "model:msg:getContext:before fetch error"
                            ])));
                            throw g.status;
                        }
                        const g_messages = g.messages;
                        const y = g_messages[g_messages.length - 1];
                        y.fromQuotedMsg = false;
                        const C = y.id;
                        if (!(e_anchor instanceof r("WAWebMsgKey")) || !C.equals(e_anchor)) {
                            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "model:msg:getContext:before ctx message mismatch"
                            ])));
                            throw 405;
                        }
                        const b = function() {
                            return s.getMsgChunk();
                        };
                        const s_serverId = s.serverId;
                        return (f || (f = n("Promise"))).all([
                            a.processMultipleMessages(i_remote, !u || s_serverId == null ? g_messages : yield o("WAWebNewsletterMsgHistoryUtils").fillMsgHistoryGaps({
                                jid: i_remote,
                                msgs: g_messages,
                                range: {
                                    start: s_serverId,
                                    end: s_serverId - e.count
                                },
                                serverIdsToSkip: o("WAWebNewsletterViewModeUIUtils").getHiddenMessageServerIdsForChat(i_remote)
                            }), _, "msgCollectionFindQuery", b),
                            f.resolve(t)
                        ]);
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.hasSynced = function() {
            return r("WAWebEventsWaitForBbEvent")(this, o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED);
        };
        a_prototype.processMultipleMessages = function(t, msgObjs, a, processMessageOrigin, chatMsgsCollection, s = true) {
            const e = this;
            if (t != null && t.isRegularUser()) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "processMultipleMessages. processMessageOrigin: ",
                    ""
                ])), processMessageOrigin).tags("missing-lid");
            }
            const u = function() {
                return o("WAWebProcessMultipleMsgsAction")._processMultipleMessages({
                    chatId: t,
                    chatMsgsCollection,
                    meta: a,
                    msgObjs,
                    processMessageOrigin
                });
            };
            if (t) {
                let c;
                const d = this.pendingAdd[t];
                if (d && s) {
                    c = d.then(u);
                } else {
                    c = u();
                }
                c.finally(()=>{
                    if (t && e.pendingAdd[t] === c) {
                        e.pendingAdd[t] = null;
                    }
                }).catch(r("WAWebNoop"));
                return this.pendingAdd[t] = c;
            }
            return u();
        };
        a_prototype.hasUnsentMessages = function() {
            return this.some((e)=>e.ack === o("WAWebAck").ACK.CLOCK && e.local && o("WAWebMsgGetters").getIsSentByMe(e));
        };
        a_prototype.getByEditMsgKey = function(t) {
            const e = this._parentKeyByEditKey.get(t.toString());
            return e && this.get(e);
        };
        a_prototype.processEditedMessages = function(t) {
            const e = this;
            t.forEach((t)=>{
                if (!(!t || !o("WAWebMsgGetters").getIsEdited(t))) {
                    const n = e._editKeyByParentKey.get(t.id.toString());
                    if (n != null) {
                        e._parentKeyByEditKey.delete(n);
                    }
                    const r = t.latestEditMsgKey;
                    if (r) {
                        e._editKeyByParentKey.set(t.id.toString(), r.toString());
                        e._parentKeyByEditKey.set(r.toString(), t.id);
                    }
                }
            });
        };
        a_prototype.addInitialBotTypingIndicatorToChat = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("WAWebChatCollection").ChatCollection.get(e);
                if (!(!n || !(n != null && n.id.isBot()) && !o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(n.contact.businessProfile) || o("WAWebBotSupportGating").isSupportedThirdPartyBot(o("WAWebResolveBotProfile").resolveBotSupportInput(e), o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures()))) {
                    if (n.botInitialTypingIndicatorMsgId != null) {
                        const r = this.get(n.botInitialTypingIndicatorMsgId);
                        if (r == null) {
                            return;
                        }
                        r?.delete({
                            skipUpdatingSortTime: true
                        });
                    }
                    n.set({
                        botInitialTypingIndicatorMsgId: t
                    }, {
                        silent: true
                    });
                    const a = {
                        id: t,
                        t: o("WATimeUtils").unixTime(),
                        from: e,
                        to: o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                        type: "chat",
                        subtype: o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE,
                        body: ""
                    };
                    this.processMultipleMessages(e, [
                        babelHelpers.extends({}, a, {
                            recvFresh: true,
                            isNewMsg: true
                        })
                    ], {
                        add: "after",
                        isHistory: false
                    }, "createChatOnNewMsg", null, true);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.encryptAndClearModels = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this._models.map((e)=>o("WAWebMsgOpaqueData").encryptDataInMsgModel(e));
                yield (f || (f = n("Promise"))).all(e);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.decryptAndSetModels = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this._models.map((t)=>o("WAWebMsgOpaqueData").decryptDataInMsgModel(t, e));
                yield (f || (f = n("Promise"))).all(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    h.model = o("WAWebMsgModel").Msg;
    const y = new h;
    l.MEDIA_QUERY_LIMIT = g;
    l.MsgCollection = y;
}, 98);