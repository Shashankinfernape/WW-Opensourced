__d("WAWebUnreadMentionMetadataBridgeApi", [
    "WAWebChatCollection",
    "WAWebGroupUnreadMessageType",
    "WAWebUnreadMentionModel"
], function(t, n, r, o, a, i, l) {
    const e = {
        getPendingUnreadMentionCounts: function({ chatIds }) {
            const n = new Map;
            chatIds.forEach((e)=>{
                const r = o("WAWebChatCollection").ChatCollection.get(e);
                n.set(e, r?.unreadMentionMetadata.pendingUnreadMentionCount ?? 0);
            });
            return n;
        },
        getChatIdsNeedToBeDeletedFromUnreadMentionInfo: function({ pendingUnreadMentionsMap, unreadMentionsToAdd }) {
            const a = [];
            unreadMentionsToAdd.forEach((t, n)=>{
                const l = o("WAWebChatCollection").ChatCollection.get(n);
                const s = pendingUnreadMentionsMap.get(n) ?? 0;
                const u = l?.unreadMentionMetadata;
                if (u?.pendingUnreadMentionCount === 0 || l != null && l.hasChatBeenOpened) {
                    a.push(n);
                    return;
                }
                if (u && u.pendingUnreadMentionCount > 0) {
                    u.pendingUnreadMentionCount = s;
                    const c = t.map((e)=>new (r("WAWebUnreadMentionModel"))({
                            id: e.id.toString(),
                            timestamp: e.timestamp
                        }));
                    u.addUnreadMentions(c, o("WAWebGroupUnreadMessageType").UnreadMessageType.HISTORYC_SYNC_CHUNK);
                }
            });
            return a;
        },
        updateUnreadMentionMetadataByAdding: function({ chatId, newUnreadMentions, pendingUnreadMentionCount }) {
            const i = o("WAWebChatCollection").ChatCollection.get(chatId);
            const l = i?.unreadMentionMetadata;
            const s = newUnreadMentions.map((e)=>new (r("WAWebUnreadMentionModel"))({
                    id: e.id.toString(),
                    timestamp: e.timestamp
                }));
            if (l && l.pendingUnreadMentionCount > 0) {
                l.pendingUnreadMentionCount = pendingUnreadMentionCount;
                l.addUnreadMentions(s, o("WAWebGroupUnreadMessageType").UnreadMessageType.HISTORYC_SYNC_CHUNK);
            }
        },
        updateUnreadMentionsFromInitialHistorySync: function({ pendingUnreadMentionsMap, unreadMentionsToAdd }) {
            unreadMentionsToAdd.forEach((t, n)=>{
                const i = o("WAWebChatCollection").ChatCollection.get(n);
                const l = i?.unreadMentionMetadata;
                const s = pendingUnreadMentionsMap.get(n) ?? 0;
                if (l && l.pendingUnreadMentionCount > 0) {
                    l.pendingUnreadMentionCount = s;
                    const u = t.map(({ id, timestamp })=>new (r("WAWebUnreadMentionModel"))({
                            id,
                            timestamp
                        }));
                    l.addUnreadMentions(u, o("WAWebGroupUnreadMessageType").UnreadMessageType.HISTORYC_SYNC_CHUNK);
                }
            });
        }
    };
    l.UnreadMentionMetadataBridgeApi = e;
}, 98);