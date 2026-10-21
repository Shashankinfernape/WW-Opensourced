__d("WAWebThreadCommonModelUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebMsgKey",
    "WAWebThreadUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        const t_threadIds = t.threadIds;
        if (t_threadIds == null) {
            return [];
        }
        const a = t.t;
        if (a == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getThreadDetailUpdatesFromMessage: message has no timestamp"
            ])));
            return [];
        }
        const i = r("WAWebMsgKey").from(t.id);
        const i_remote = i.remote;
        const s = o("WATimeUtils").castToUnixTime(a);
        return t_threadIds.map((e)=>({
                threadId: e,
                chatId: i_remote,
                lastMessageTimestamp: s,
                creationTimestamp: s,
                aiThreadInfo: t.aiThreadInfo,
                botModeSelection: t.botModeSelection,
                botModeOverride: t.botModeOverride,
                lastMsgKey: i.toString()
            }));
    }
    function u(e) {
        const t = new Map;
        for (const n of e){
            const r = s(n);
            for (const o of r){
                const a = o.threadId.toString();
                const i = t.get(a);
                if (i == null) {
                    t.set(a, o);
                } else {
                    const l = o.lastMessageTimestamp >= i.lastMessageTimestamp ? [
                        i,
                        o
                    ] : [
                        o,
                        i
                    ];
                    const u = l[0];
                    const d = l[1];
                    const m = c(u, d);
                    t.set(a, m);
                }
            }
        }
        return Array.from(t.values());
    }
    function c(e, t) {
        const a = {
            threadId: t.threadId,
            chatId: t.chatId,
            creationTimestamp: e.creationTimestamp,
            lastMessageTimestamp: t.lastMessageTimestamp
        };
        if (t.aiThreadInfo != null) {
            const s = t.aiThreadInfo.title ?? e.aiThreadInfo?.title;
            a.aiThreadInfo = babelHelpers.extends({}, t.aiThreadInfo, {
                title: s
            });
        } else {
            a.aiThreadInfo = e.aiThreadInfo;
        }
        a.botModeOverride = t.botModeOverride ?? e.botModeOverride;
        a.botModeSelection = t.botModeSelection ?? e.botModeSelection;
        a.lastMsgKey = t.lastMsgKey ?? e.lastMsgKey;
        return a;
    }
    function d({ threadId }) {
        if (threadId.type !== o("WAWebThreadUtils").ThreadType.AiThread) {
            return false;
        }
        const n = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId();
        return !threadId.equals(n);
    }
    l.getThreadDetailUpdatesFromMessage = s;
    l.getAggregatedThreadDetailUpdatesFromMessages = u;
    l.isAiThreadNonHistoricalMetaAiThread = d;
}, 98);