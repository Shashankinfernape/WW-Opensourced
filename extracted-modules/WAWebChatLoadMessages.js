__d("WAWebChatLoadMessages", [
    "Promise",
    "WAAbortError",
    "WABackoffUtils",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WARaceSignal",
    "WAStorageEstimator",
    "WAWebBackendErrors",
    "WAWebChatConstants",
    "WAWebChatGetters",
    "WAWebCollectionConstants",
    "WAWebEventsWaitForBbEvent",
    "WAWebGetNewsletterCursor",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgCountReporter",
    "WAWebNetworkType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGetMessageUpdatesAction",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterSystemMessagesAction",
    "WAWebStateUtils",
    "WAWebSyncGatingUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "WAWebWamEnumWebcMessageQueryDirection",
    "WAWebWamEnumWebcQueryTriggerType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
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
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, msgCollection, signal, threadId }) {
            const l = o("WAWebStateUtils").unproxy(chat);
            let s = msgCollection;
            if (!s) {
                s = l.msgs;
            }
            if (v(l, s)) {
                return (f || (f = n("Promise"))).resolve();
            }
            if (s.msgLoadState.isLoadingRecentMsgs) {
                return s.loadRecentPromise;
            }
            const u = yield S({
                chat: l,
                dir: "after",
                msgCollection: s,
                signal,
                threadId,
                trigger: o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE.USER_SCROLL
            });
            const u_msgs = u.msgs;
            return u_msgs;
        });
        return h.apply(this, arguments);
    }
    function y({ anchorMsg, msgCollection, threadId }) {
        if (threadId != null && threadId.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies && anchorMsg != null && o("WAWebThreadMsgUtils").isMsgRootOfThread(anchorMsg, threadId)) {
            return msgCollection.at(1) ?? null;
        }
        return anchorMsg;
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, msgCollection, signal, threadId, trigger }) {
            const p = o("WAWebStateUtils").unproxy(chat);
            yield k(p);
            let _ = msgCollection;
            const trigger_1 = trigger ?? o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE.USER_SCROLL;
            const h = threadId;
            if (!_) {
                _ = p.msgs;
            }
            if (r("gkx")("26259")) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[loadEarlierMsgs] id=",
                    " noEarlier=",
                    " loading=",
                    " len=",
                    " histType=",
                    ""
                ])), p.id, _.msgLoadState.noEarlierMsgs, _.msgLoadState.isLoadingEarlierMsgs, _.length, p.endOfHistoryTransferType);
            }
            if (_.msgLoadState.noEarlierMsgs) {
                if (r("gkx")("26259")) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[loadEarlierMsgs] returning early: noEarlierMsgs=true"
                    ])));
                }
                return (f || (f = n("Promise"))).resolve();
            }
            if (_.msgLoadState.isLoadingEarlierMsgs) {
                return _.loadEarlierPromise;
            }
            const anchorMsg = _ ? _.head() : null;
            const anchorOverride = y({
                anchorMsg,
                msgCollection: _,
                threadId: h
            });
            if (anchorOverride == null && anchorMsg != null) {
                _.msgLoadState.noEarlierMsgs = true;
                return [];
            }
            if (o("WAWebChatGetters").getIsNewsletter(p) && anchorOverride != null && o("WAWebNewsletterSystemMessages").isEarliestNewsletterSystemMsg(anchorOverride)) {
                _.msgLoadState.noEarlierMsgs = true;
                return [];
            }
            const v = ()=>{
                if (anchorOverride) {
                    return anchorOverride.getMsgChunk(h);
                }
                return _;
            };
            const R = yield S({
                anchorOverride,
                chat: p,
                dir: "before",
                msgCollection: _,
                signal,
                threadId: h,
                trigger: trigger_1
            });
            const { hasMoreMsgs, msgs } = R;
            const I = v();
            if (r("gkx")("26259")) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[loadEarlierMsgs] cnt=",
                    " more=",
                    " anchor=",
                    " cmc=",
                    " hist=",
                    " onDemand=",
                    ""
                ])), msgs.length, hasMoreMsgs, anchorOverride?.id, I != null, p.endOfHistoryTransferType, o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled());
            }
            if (I && !hasMoreMsgs) {
                I.msgLoadState.noEarlierMsgs = p.endOfHistoryTransferType !== o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
                if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()) {
                    I.msgLoadState.noEarlierMsgs = I.msgLoadState.noEarlierMsgs && p.endOfHistoryTransferType !== o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY;
                }
                if (r("gkx")("26259")) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[loadEarlierMsgs] noEarlier=",
                        " (more=false, histType=",
                        ")"
                    ])), I.msgLoadState.noEarlierMsgs, p.endOfHistoryTransferType);
                }
            }
            return msgs;
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return e.msgs === t;
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ anchorOverride, chat, dir, msgCollection, signal, threadId, trigger }) {
            const c = anchorOverride ?? (dir === "after" ? msgCollection.last() : msgCollection.head());
            const PAGE_SIZE = o("WAWebCollectionConstants").PAGE_SIZE;
            const f = {
                anchor: c != null ? c.id : {
                    remote: chat.id
                },
                count: PAGE_SIZE,
                direction: dir,
                threadId: threadId ?? null
            };
            if (r("gkx")("26259")) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[_loadMsgs] id=",
                    " dir=",
                    " anchor=",
                    " limit=",
                    " len=",
                    ""
                ])), chat.id, dir, c?.id, PAGE_SIZE, msgCollection.length);
            }
            const g = o("WAWebMsgCountReporter").newMessageQueryEvent(trigger);
            const h = yield L(chat, c, msgCollection, ()=>o("WAWebMsgCollection").MsgCollection.loadMessagesQuery(f), dir, g, true, signal);
            if (r("gkx")("26259")) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[_loadMsgs] chatId=",
                    ", dir=",
                    ", msgsFromDbCount=",
                    ", msgsLoadLimit=",
                    ""
                ])), chat.id, dir, h.length, PAGE_SIZE);
            }
            if (o("WAWebChatGetters").getIsNewsletter(chat) && o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()) {
                yield o("WAWebNewsletterGetMessageUpdatesAction").maybeUpdateMsgsAddOns(h, chat);
            }
            const y = h.length >= PAGE_SIZE;
            if (r("gkx")("26259")) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[_loadMsgs] id=",
                    " dir=",
                    " more=",
                    " (dbCnt=",
                    " >= limit=",
                    ") newsletter=",
                    ""
                ])), chat.id, dir, y, h.length, PAGE_SIZE, o("WAWebChatGetters").getIsNewsletter(chat));
            }
            if (y || !o("WAWebChatGetters").getIsNewsletter(chat) || !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                return {
                    msgs: h,
                    hasMoreMsgs: y
                };
            }
            try {
                const C = h[0];
                if (dir === "before" && C != null && o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(C)) {
                    return {
                        msgs: h,
                        hasMoreMsgs: false
                    };
                }
                const b = h.length > PAGE_SIZE;
                const v = b ? [] : yield o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(chat, {
                    messageCount: PAGE_SIZE - h.length,
                    cursor: o("WAWebGetNewsletterCursor").getNewsletterCursor(msgCollection, dir, h),
                    resetUnreadCount: true
                });
                const S = dir === "before" ? v.concat(h) : h.concat(v);
                const R = S.length >= PAGE_SIZE;
                const E = S[0];
                if (dir === "before" && !R && (E == null || !o("WAWebNewsletterSystemMessages").isNewsletterSystemMsg(E))) {
                    const k = yield o("WAWebNewsletterSystemMessagesAction").addSystemMessagesToChat(chat);
                    S.unshift(...k);
                }
                return {
                    msgs: S,
                    hasMoreMsgs: R
                };
            } catch (e) {
                return {
                    msgs: h,
                    hasMoreMsgs: true
                };
            }
        });
        return R.apply(this, arguments);
    }
    function L(t, a, i, l, s, u, c = true, d) {
        const m = o("WAWebStateUtils").unproxy(t);
        const p = self.performance.now();
        switch(s){
            case "after":
                i.msgLoadState.isLoadingRecentMsgs = true;
                u.webcMessageQueryType = o("WAWebWamEnumWebcMessageQueryDirection").WEBC_MESSAGE_QUERY_DIRECTION.LOAD_NEXT;
                break;
            case "before":
                i.msgLoadState.isLoadingEarlierMsgs = true;
                u.webcMessageQueryType = o("WAWebWamEnumWebcMessageQueryDirection").WEBC_MESSAGE_QUERY_DIRECTION.LOAD_PREV;
                break;
            default:
                if (s === "around") {
                    i.msgLoadState.isLoadingAroundMsgs = true;
                    u.webcMessageQueryType = o("WAWebWamEnumWebcMessageQueryDirection").WEBC_MESSAGE_QUERY_DIRECTION.LOAD_AROUND;
                }
        }
        const _ = o("WAWebNetworkType").getEffectiveNetworkType();
        if (_ != null) {
            u.webcBrowserNetworkType = _;
        }
        u.webcChatType = m.getWebcChatType();
        if (typeof m.initialIndex === "number") {
            u.webcChatPosition = m.initialIndex;
        }
        const g = r("WARaceSignal")([
            d,
            m.getDeleteSignal()
        ].filter(Boolean), function(t) {
            return o("WAPromiseLoop").promiseLoop((()=>{
                const c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(c, d, _) {
                    if (t.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    const g = o("WAPromiseDelays").delayMs(o("WABackoffUtils").expBackoff(_, 120000, 1000, 0.1));
                    const h = (f || (f = n("Promise"))).resolve();
                    try {
                        yield h;
                        const y = yield l();
                        if (t.aborted) {
                            throw new (o("WAAbortError")).AbortError;
                        }
                        u.webcQueryT = Math.ceil(self.performance.now() - p);
                        let C;
                        if (Array.isArray(y[0])) {
                            C = y[0][0];
                            y.forEach((e)=>o("WAWebMsgCountReporter").logMessageCounts(u, e));
                        } else {
                            C = y[0];
                            o("WAWebMsgCountReporter").logMessageCounts(u, y);
                        }
                        if (C) {
                            u.webcEarliestMessageT = C.t;
                            if (C.getMsgChunk() === m.msgs) {
                                u.webcEarliestMessageIndex = m.msgs.length - 1;
                            }
                        }
                        o("WAStorageEstimator").estimateStorage().then((e)=>{
                            if (e.success) {
                                const t = e.value;
                                const { quota, usage } = t;
                                u.webcBrowserStorageQuotaBytes = quota;
                                u.webcBrowserStorageQuotaUsedBytes = usage;
                            }
                        }).finally(()=>u.commit());
                        E(a, i, s);
                        c(y);
                    } catch (error) {
                        const b = r("getErrorSafe")(error);
                        if (b.name === o("WAAbortError").ABORT_ERROR) {
                            throw b;
                        }
                        if (_ > 3 || error === 404) {
                            E(a, i, s);
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "chat:loadMsgs:error ",
                                ""
                            ])), String(error));
                            if (error === 404) {
                                return (f || (f = n("Promise"))).reject(new (o("WAWebBackendErrors")).E404);
                            }
                            return (f || (f = n("Promise"))).reject(new (o("WAWebMiscErrors")).GaveUpRetry(`Gave up msg fetch after ${_} tries`));
                        }
                        return g;
                    }
                });
                return function(e, t, n) {
                    return c.apply(this, arguments);
                };
            })(), 0);
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").GaveUpRetry, function() {
            return [];
        })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, function(e) {
            if (c) {
                return [];
            }
            throw e;
        }));
        switch(s){
            case "after":
                i.loadRecentPromise = g;
                break;
            case "before":
                i.loadEarlierPromise = g;
                break;
            default:
                if (s === "around") {
                    i.loadAroundPromise = g;
                }
        }
        return g;
    }
    function E(e, t, n) {
        const o = e?.getMsgChunk();
        const a = o && o !== t;
        t.msgLoadState.contextLoaded = true;
        if (e && a === true) {
            r("nullthrows")(o).msgLoadState.contextLoaded = true;
        }
        switch(n){
            case "after":
                t.msgLoadState.isLoadingRecentMsgs = false;
                break;
            case "before":
                t.msgLoadState.isLoadingEarlierMsgs = false;
                break;
            default:
                if (n === "around") {
                    t.msgLoadState.isLoadingAroundMsgs = false;
                }
        }
    }
    function k(e) {
        let t = (f || (f = n("Promise"))).resolve();
        if (e.pendingInitialLoading) {
            t = r("WAWebEventsWaitForBbEvent")(e, "change:pendingInitialLoading", function() {
                return !e.pendingInitialLoading;
            });
        }
        return t;
    }
    l.loadRecentMsgs = g;
    l.loadEarlierMsgs = C;
    l.loadMsgsPromiseLoop = L;
}, 98);