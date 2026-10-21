__d("WAWebBizQuickReplyBridge", [
    "Promise",
    "WAWebSchemaQuickReply"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        let r = (e || (e = n("Promise"))).resolve();
        const { count, id, keywords, message, shortcut } = t;
        const c = {
            id,
            shortcut,
            count,
            message,
            keywords
        };
        r = o("WAWebSchemaQuickReply").getQuickReplyTable().createOrReplace(c);
        return r;
    }
    l.updateQuickReply = s;
}, 98);