__d("WAWebDBThreadMetadataBulkHelper", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length === 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[persistNewMessagesThreadMetadataInBulk] no msgs"
                ])));
                return;
            }
            const r = t.flatMap(o("WAWebThreadCommonModelUtils").getThreadDetailUpdatesFromMessage);
            if (r.length === 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[persistNewMessagesThreadMetadataInBulk] no updates"
                ])));
                return;
            }
            yield o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata(r);
            const aiThreads = r.filter((e)=>e.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread);
            if (aiThreads.length > 0) {
                yield o("WAWebBackendApi").frontendSendAndReceive("updateChatAiThreads", {
                    aiThreads
                });
            }
            const viewRepliesThreads = r.filter((e)=>e.threadId.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies);
            if (viewRepliesThreads.length > 0) {
                yield o("WAWebBackendApi").frontendSendAndReceive("updateChatViewRepliesThreads", {
                    viewRepliesThreads
                });
            }
            const l = _(t);
            if (l.length > 0) {
                const m = yield o("WAWebThreadMetadataBulkJob").bulkIncrementThreadUnreadCount(l);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[persistNewMessagesThreadMetadataInBulk] unread++ ",
                    ""
                ])), l.length);
                const p = f(m, r);
                yield (d || (d = n("Promise"))).all(Array.from(p.values()).map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, unreadCounts }) {
                        return yield o("WAWebBackendApi").frontendSendAndReceive("updateAiThreadUnreadCounts", {
                            chatId,
                            unreadCounts
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[persistNewMessagesThreadMetadataInBulk] done ",
                " msgs"
            ])), t.length);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = new Map;
        for (const n of e){
            const a = r("WAWebMsgKey").from(n.id);
            const i = n.threadIds;
            if (!a.fromMe && o("WAWebMsgGetters").getIsUnreadType(n) && i != null) {
                for (const l of i){
                    if (l.type === o("WAWebThreadUtils").ThreadType.AiThread) {
                        const u = l.toString();
                        const c = t.get(u);
                        const d = c?.delta ?? 0;
                        t.set(u, {
                            delta: d + 1,
                            lastReceivedKey: a.toString()
                        });
                    }
                }
            }
        }
        return Array.from(t.entries(), function([t, n]) {
            return {
                threadId: r("WAWebThreadId").from(t),
                delta: n.delta,
                lastReceivedKey: n.lastReceivedKey
            };
        });
    }
    function f(e, t) {
        const n = new Map;
        for (const r of t){
            if (r.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread) {
                n.set(r.threadId.toString(), r.chatId);
            }
        }
        const a = new Map;
        for (const i of e){
            const { lastReceivedKey, threadId, unreadCount } = i;
            const c = n.get(threadId.toString());
            if (c != null) {
                const d = c.toString();
                let m = a.get(d);
                if (m == null) {
                    m = {
                        chatId: c,
                        unreadCounts: []
                    };
                    a.set(d, m);
                }
                m.unreadCounts.push({
                    threadId,
                    unreadCount,
                    lastReceivedKey
                });
            }
        }
        return a;
    }
    l.persistNewMessagesThreadMetadataInBulk = m;
}, 98);