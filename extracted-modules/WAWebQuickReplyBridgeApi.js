__d("WAWebQuickReplyBridgeApi", [
    "Promise",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyGatingUtils",
    "WAWebSchemaQuickReply"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        removeQuickReplyFromCollection: function({ id }) {
            o("WAWebQuickReplyCollection").QuickReplyCollection.remove(id);
        },
        updateQuickReplyCollection: function({ count, id, keywords, message, shortcut }) {
            o("WAWebQuickReplyCollection").QuickReplyCollection.add({
                id,
                shortcut,
                message,
                keywords,
                count
            }, {
                merge: true
            });
        },
        restoreQuickReplies: function() {
            if (o("WAWebQuickReplyGatingUtils").canSendQuickReply()) {
                return o("WAWebSchemaQuickReply").getQuickReplyTable().all().then((e)=>{
                    o("WAWebQuickReplyCollection").QuickReplyCollection.initializeFromCache(e);
                });
            }
            return (e || (e = n("Promise"))).resolve();
        }
    };
    l.QuickReplyBridgeApi = s;
}, 98);