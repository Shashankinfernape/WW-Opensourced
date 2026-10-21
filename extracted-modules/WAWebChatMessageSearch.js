__d("WAWebChatMessageSearch", [
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatAssignmentUtils",
    "WAWebChatConstants",
    "WAWebChatGetters",
    "WAWebChatLoadMessages",
    "WAWebChatMsgsCollection",
    "WAWebChatSearchFilters",
    "WAWebCollectionConstants",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLeadStage",
    "WAWebLeadStageStore",
    "WAWebMessageAssociation.flow",
    "WAWebMsgCollection",
    "WAWebMsgCountReporter",
    "WAWebNewsletterMetadataGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebStateUtils",
    "WAWebThreadModelResolver",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumWebcQueryTriggerType",
    "isEmptyObject",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ chat, msgKey, rootMsg, threadId }) {
        const c = o("WAWebStateUtils").unproxy(chat);
        let d = o("WAWebMsgCollection").MsgCollection.get(msgKey);
        let m = msgKey;
        let p = rootMsg;
        const _ = d?.parentMsgKey;
        if (_ && d?.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM && !o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, d?.viewMode)) {
            d = o("WAWebMsgCollection").MsgCollection.get(_);
            m = _;
            p = d;
        }
        const f = o("WAWebThreadModelResolver").resolveThreadOrChat(c, threadId);
        const g = f !== c;
        const h = g ? threadId : undefined;
        let y = d?.getMsgChunk(h);
        const C = Math.trunc(o("WAWebCollectionConstants").PAGE_SIZE / 3 * 2);
        if (!y || !y.msgLoadState.contextLoaded) {
            if (!y) {
                y = new (o("WAWebChatMsgsCollection")).ChatMsgsCollection;
                if (h != null) {
                    y.threadId = h;
                }
                f.msgChunks.push(y);
                if (d) {
                    y.add(d);
                }
            }
            const v = {
                anchor: d != null ? d.id : m,
                count: C,
                serverId: d?.serverId,
                threadId: h
            };
            const S = function() {
                if (d) {
                    return d.getMsgChunk(h);
                }
                if (m != null) {
                    const t = o("WAWebMsgCollection").MsgCollection.get(m);
                    return t?.getMsgChunk(h) ?? y;
                }
                return y;
            };
            const R = o("WAWebMsgCountReporter").newMessageQueryEvent(o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE.SEARCH_RESULT_CLICK);
            o("WAWebChatLoadMessages").loadMsgsPromiseLoop(c, d, y, function() {
                return o("WAWebMsgCollection").MsgCollection.getContext(v, S);
            }, "around", R, p == null).then((e)=>{
                const t = S();
                if (t && y && t !== y) {
                    f.notifyMsgCollectionMerge({
                        cmc1: t,
                        cmc2: y,
                        cmcResult: t
                    });
                }
                const n = e[0];
                const a = m ? o("WAWebMsgCollection").MsgCollection.get(m) : d;
                if (a && Array.isArray(n) && n.length < C) {
                    const i = a.getMsgChunk(h);
                    r("nullthrows")(i).msgLoadState.noEarlierMsgs = c.endOfHistoryTransferType !== o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
                    if (y && i !== y) {
                        y.msgLoadState.noEarlierMsgs = c.endOfHistoryTransferType !== o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
                    }
                }
            }).catch(()=>{
                if (p) {
                    p.isQuotedMsgAvailable = false;
                }
            });
        }
        return {
            collection: y,
            msg: d,
            key: m,
            highlightMsg: true
        };
    }
    function u({ chat, count, page = 1, searchTerm }) {
        const l = o("WAWebStateUtils").unproxy(chat);
        if (page === 1) {
            const s = l.ftsCache[searchTerm];
            if (s) {
                return s;
            }
            const u = o("WAWebMsgCollection").MsgCollection.search(searchTerm, page, count, l.id);
            l.ftsCache[searchTerm] = u;
            const c = function() {
                l.ftsCache[searchTerm] = null;
            };
            self.setTimeout(c, o("WAWebChatConstants").FTS_TTL);
            u.catch(c);
            return u;
        }
        return o("WAWebMsgCollection").MsgCollection.search(searchTerm, page, count, l.id);
    }
    function c(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        t.ftsCache = {};
    }
    function d(e) {
        return !!o("WAWebChatGetters").getHasUnread(e) && !o("WAWebChatGetters").getIsBroadcast(e) || o("WAWebChatAssignmentUtils").canAssignChats() && e.isAssignedToMe && e.unopenedByAssignedAgent;
    }
    function m(e) {
        return o("WAWebFrontendContactGetters").getIsMyContact(e.contact) && !o("WAWebContactGetters").getIsGroup(e.contact) && !o("WAWebChatGetters").getIsBroadcast(e);
    }
    function p(e) {
        return !o("WAWebFrontendContactGetters").getIsMyContact(e.contact) && !o("WAWebContactGetters").getIsGroup(e.contact) && !o("WAWebChatGetters").getIsBroadcast(e);
    }
    function _(e) {
        const t = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata);
        return o("WAWebContactGetters").getIsGroup(e.contact) && (t === o("WAWebGroupType").GroupType.COMMUNITY || t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || t === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP);
    }
    function f(e) {
        return e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED && o("WAWebBizAiAgentStatusUtils").shouldShowAiChipsForChat(e);
    }
    const g = new Map([
        [
            (e = o("WAWebChatSearchFilters")).SearchFilters.UNREAD,
            d
        ],
        [
            e.SearchFilters.FAVORITES,
            function(e) {
                return e.isFavorite;
            }
        ],
        [
            e.SearchFilters.CHANNELS,
            function(e) {
                const e_newsletterMetadata = e.newsletterMetadata;
                return e_newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsSubscribedOrOwned(e_newsletterMetadata) && !e.archive;
            }
        ],
        [
            e.SearchFilters.CONTACT,
            m
        ],
        [
            e.SearchFilters.NON_CONTACT,
            p
        ],
        [
            e.SearchFilters.ASSIGNED_TO_YOU,
            function(e) {
                return o("WAWebChatAssignmentUtils").canAssignChats() && e.isAssignedToMe;
            }
        ],
        [
            e.SearchFilters.COMMUNITY,
            _
        ],
        [
            e.SearchFilters.AI_RESPONDING,
            function(e) {
                return e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN && o("WAWebBizAiAgentStatusUtils").shouldShowAiChipsForChat(e);
            }
        ],
        [
            e.SearchFilters.AI_HANDOFF,
            f
        ],
        [
            e.SearchFilters.TO_YOU,
            function(e) {
                return e.hasUnreadMention && !e.archive;
            }
        ]
    ]);
    function h(e, t = {}) {
        const n = o("WAWebStateUtils").unproxy(e);
        if (r("isEmptyObject")(t)) {
            return true;
        }
        if (t.label != null && t.label !== "") {
            if (n.labels == null || !n.labels.includes(t.label)) {
                return false;
            }
            return y(n, t);
        }
        const a = t.kind != null ? g.get(t.kind) : null;
        if (a != null) {
            return a(n);
        }
        const i = o("WAWebFrontendChatGetters").getKind(n);
        return i != null && t.kind === o("WAWebChatSearchFilters").SearchFilters.cast(i);
    }
    function y(e, t) {
        if (t.leadStage == null) {
            return true;
        }
        return (o("WAWebLeadStageStore").getLeadStageFromStore(e.id.toString()) ?? o("WAWebLeadStage").LeadStage.LEAD) === t.leadStage;
    }
    l.getSearchContext = s;
    l.fts = u;
    l.clearFtsCache = c;
    l.matchFilter = h;
    l.leadStageMatches = y;
}, 98);