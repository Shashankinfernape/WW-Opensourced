__d("WAWebChatUnreadMentions", [
    "WAWebGroupUnreadMessageType",
    "WAWebUnreadMentionModel"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.unreadMentionsOfMe) {
            const t = new Map(e.unreadMentionsOfMe.map((e)=>[
                    String(e.id),
                    e
                ]));
            e.listenTo(e.msgs, "bulk_add", function(n) {
                for (const a of n){
                    const i = a.id.toString();
                    const l = t.get(i);
                    if (!(!l || !e.isUnreadMsg(a))) {
                        e.unreadMentionMetadata.addUnreadMentions([
                            new (r("WAWebUnreadMentionModel"))(l)
                        ], o("WAWebGroupUnreadMessageType").UnreadMessageType.PERSISTANCE_LOAD);
                    }
                }
            });
        }
        if (e.unreadMentionCount != null) {
            e.unreadMentionMetadata.pendingUnreadMentionCount = e.unreadMentionCount;
        }
        s(e);
    }
    function s(e) {
        e.hasUnreadMention = e.unreadMentionMetadata.getUnreadMentionCount() > 0;
    }
    l.initializeUnreadMentions = e;
    l.handleUnreadMention = s;
}, 98);