__d("WAWebNewsletterHydratePinnedMessagesAction", [
    "Promise",
    "WALogger",
    "WAWebMsgModelFromData",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ attempted, chat, serverIds, signal }) {
            const i = new Set(attempted);
            if (signal.aborted || chat.msgs.msgLoadState.isLoadingEarlierMsgs) {
                return i;
            }
            const l = serverIds.filter((e)=>!i.has(e));
            if (l.length === 0) {
                return i;
            }
            const s = yield d(chat, l, signal);
            for (const u of s){
                i.add(u);
            }
            if (signal.aborted) {
                return i;
            }
            const c = l.filter((e)=>!s.has(e));
            for (const m of c){
                if (signal.aborted) {
                    return i;
                }
                if (!(i.has(m) || chat.msgs.msgLoadState.isLoadingEarlierMsgs)) {
                    i.add(m);
                    try {
                        yield o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(chat, {
                            messageCount: 1,
                            cursor: {
                                before: m + 1
                            },
                            signal
                        });
                    } catch (e) {
                        if (signal.aborted) {
                            i.delete(m);
                        }
                    }
                }
            }
            return i;
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            let l;
            try {
                l = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(Array.from(a), t.id.toJid());
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[hydrateNewsletterPinnedMessages] pinned-message DB read failed"
                ]))).catching(r("getErrorSafe")(error)).tags("NEWSLETTER", "PIN").sendLogs("newsletter-pin-db-read");
                return new Set;
            }
            if (i.aborted || l.size === 0) {
                return new Set;
            }
            const u = [];
            for (const c of l.values()){
                u.push(o("WAWebMsgModelFromData").msgModelFromMsgData(c));
            }
            yield t.addQueue.enqueue((s || (s = n("Promise"))).resolve().then(()=>{
                t.msgs.add(u, {
                    at: 0
                });
            })).then(r("WAWebNoop"), r("WAWebNoop"));
            return new Set(l.keys());
        });
        return m.apply(this, arguments);
    }
    l.hydrateNewsletterPinnedMessages = u;
}, 98);