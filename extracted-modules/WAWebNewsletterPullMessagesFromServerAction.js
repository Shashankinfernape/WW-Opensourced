__d("WAWebNewsletterPullMessagesFromServerAction", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebApiChat",
    "WAWebChatGetters",
    "WAWebChatSeenBridge",
    "WAWebMsgModelFromData",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterErrors",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebStateUtils",
    "WAWebUpdateUnreadChatAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t, a) {
        const i = o("WAWebStateUtils").unproxy(t);
        if (o("WAWebChatGetters").getIsNewsletter(i)) {
            if (a.messageCount < 0) {
                return (u || (u = n("Promise"))).resolve([]);
            }
            return r("WARaceSignal")([
                a.signal,
                i.getDeleteSignal()
            ].filter(Boolean), function(e) {
                return f(i, babelHelpers.extends({}, a, {
                    signal: e
                }));
            });
        }
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[pullNewsletterMessagesFromServer] not a newsletter"
        ])));
        return (u || (u = n("Promise"))).reject(new (o("WAWebNewsletterErrors")).UnexpectedNonNewsletterChatError);
    }
    function d(e, t, n) {
        switch(t){
            case "before":
                {
                    e.msgs.msgLoadState.isLoadingEarlierMsgs = n;
                    break;
                }
            case "after":
                {
                    e.msgs.msgLoadState.isLoadingRecentMsgs = n;
                    break;
                }
        }
    }
    function m(e, t, r) {
        if (t.length === 0) {
            return (u || (u = n("Promise"))).resolve();
        }
        return e.addQueue.enqueue((u || (u = n("Promise"))).resolve().then(()=>{
            e.msgs.add(t, r === "before" ? {
                at: 0
            } : undefined);
            if (r === "after") {
                const o = Math.max.apply(null, t.map((e)=>e.t));
                e.t = Math.max(e.t ?? 0, o);
            }
        }));
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebApiChat").getChatMeta(e.id);
            const n_unreadCount = n.unreadCount;
            const a = Math.max(n_unreadCount - t, 0);
            yield o("WAWebChatSeenBridge").markConversationSeen(e.id, a);
            yield o("WAWebUpdateUnreadChatAction").updateUnreadCountMD(e, 0, false);
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.signal.aborted) {
                throw new (o("WAAbortError")).AbortError;
            }
            const { cursor, messageCount, shouldUpdateMsg } = t;
            const l = cursor == null || cursor.after != null ? "after" : "before";
            const c = `[pullNewsletterMessagesFromServer][${e.id.toJid()}][${l}]`;
            const msgLoadState = e.msgs.msgLoadState;
            const { isLoadingEarlierMsgs, isLoadingRecentMsgs } = msgLoadState;
            if (l === "before" && isLoadingEarlierMsgs) {
                return e.msgs.loadEarlierPromise;
            }
            if (l === "after" && isLoadingRecentMsgs) {
                return e.msgs.loadRecentPromise;
            }
            d(e, l, true);
            try {
                if (t.signal.aborted) {
                    throw new (o("WAAbortError")).AbortError;
                }
                const y = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e.id.toJid());
                const C = (u || (u = n("Promise"))).resolve().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const s = yield o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(y, messageCount, cursor);
                    const c = shouldUpdateMsg != null ? s.msgs.filter(shouldUpdateMsg) : s.msgs;
                    const _ = c.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
                    if (t.signal.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    if (_.length > 0) {
                        yield (u || (u = n("Promise"))).all([
                            o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(c),
                            h(s),
                            m(e, _, l)
                        ]);
                        if (t.resetUnreadCount === true) {
                            yield p(e, _.length);
                        }
                    }
                    d(e, l, false);
                    return s.msgs.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
                }));
                if (l === "before") {
                    e.msgs.loadEarlierPromise = C;
                } else if (l === "after") {
                    e.msgs.loadRecentPromise = C;
                }
                return yield C;
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[pullNewsletterMessagesFromServer] pull msgs failed"
                ]))).tags("newsletter");
                throw error;
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { pollVotes, reactions, timestamp } = e;
            yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(e);
            const a = reactions.map((e)=>e.parentMsgKey);
            return o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateNewsletterMessages({
                reactions,
                ids: a,
                timestamp,
                pollVotes
            });
        });
        return y.apply(this, arguments);
    }
    l.pullNewsletterMessagesFromServer = c;
}, 98);