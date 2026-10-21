__d("WAWebThreadBridgeApi", [
    "WAWebAiThreadCollection",
    "WAWebAiThreadTypeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebMaybeClearChatAiThreads",
    "WAWebMsgKey",
    "WAWebViewRepliesCollection",
    "WAWebViewRepliesModel",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        updateChatAiThreads: function({ aiThreads }) {
            aiThreads.forEach(({ aiThreadInfo, botModeOverride, botModeSelection, chatId, creationTimestamp, lastMessageTimestamp, lastMsgKey, lastReceivedKey, pinThreadTimestamp, threadId, unreadEditTimestampMs })=>{
                const g = o("WAWebChatCollection").ChatCollection.get(chatId);
                if (g) {
                    const h = g.aiThreads ?? new (o("WAWebAiThreadCollection")).AiThreadCollection;
                    if (!g.aiThreads) {
                        g.aiThreads = h;
                    }
                    const y = h.get(threadId);
                    const creationTimestamp_1 = y?.creationTimestamp != null && creationTimestamp > y.creationTimestamp ? undefined : creationTimestamp;
                    h.add({
                        id: threadId,
                        title: aiThreadInfo?.title,
                        aiThreadType: aiThreadInfo?.aiThreadType ?? o("WAWebAiThreadTypeUtils").AiThreadType.Default,
                        creationTimestamp: creationTimestamp_1,
                        lastMessageTimestamp,
                        botModeSelection,
                        botModeOverride,
                        lastReceivedKey: lastReceivedKey != null ? r("WAWebMsgKey").fromString(lastReceivedKey) : null,
                        lastMsgKey: lastMsgKey != null ? r("WAWebMsgKey").fromString(lastMsgKey) : null,
                        unreadEditTimestampMs,
                        pinThreadTimestamp,
                        isPending: false
                    }, {
                        merge: true
                    });
                }
            });
        },
        updateChatViewRepliesThreads: function({ viewRepliesThreads }) {
            viewRepliesThreads.forEach(({ chatId, creationTimestamp, lastMessageTimestamp, threadId })=>{
                const l = o("WAWebChatCollection").ChatCollection.get(chatId);
                if (l) {
                    let s = l.viewRepliesThreads;
                    if (!s) {
                        s = new (o("WAWebViewRepliesCollection")).ViewRepliesCollection(chatId);
                        l.viewRepliesThreads = s;
                    }
                    const u = new (r("WAWebViewRepliesModel"))({
                        id: threadId,
                        creationTimestamp,
                        lastMessageTimestamp
                    });
                    s.add(u);
                }
            });
        },
        deleteChatAiThreads: function({ chatId, msgIds, threadIds }) {
            const a = o("WAWebChatCollection").ChatCollection.get(chatId);
            a?.deleteMessages(msgIds);
            const i = a?.aiThreads;
            if (i) {
                i.removeThreads(threadIds);
            }
        },
        deleteAiThreadsForChat: function({ chatId }) {
            const n = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(chatId));
            if (n) {
                o("WAWebMaybeClearChatAiThreads").maybeClearAiThreadsForChat(n);
            }
        },
        resetAiThreadUnreadCounts: function({ chatId, threadIds }) {
            const r = o("WAWebChatCollection").ChatCollection.get(chatId);
            const a = r?.aiThreads;
            if (a) {
                threadIds.forEach((e)=>{
                    const t = a.get(e);
                    if (t) {
                        t.set("unreadCount", 0);
                    }
                });
            }
        },
        updateAiThreadUnreadCounts: function({ chatId, unreadCounts }) {
            const a = o("WAWebChatCollection").ChatCollection.get(chatId);
            const i = a?.aiThreads;
            if (i) {
                unreadCounts.forEach(({ lastReceivedKey, threadId, unreadCount })=>{
                    const a = i.get(threadId);
                    if (a) {
                        a.set({
                            lastReceivedKey: lastReceivedKey != null ? r("WAWebMsgKey").fromString(lastReceivedKey) : null,
                            unreadCount
                        });
                    }
                });
            }
        },
        initializeMetaAiBotAiThreads: function() {
            const e = [
                o("WAWebBotUtils").META_BOT_PN_WID,
                o("WAWebBotUtils").META_BOT_FBID_WID
            ];
            for (const t of e){
                const n = o("WAWebChatCollection").ChatCollection.get(t);
                if (n != null && n.aiThreads == null) {
                    n.aiThreads = new (o("WAWebAiThreadCollection")).AiThreadCollection;
                }
            }
        }
    };
    l.ThreadBridgeApi = e;
}, 98);