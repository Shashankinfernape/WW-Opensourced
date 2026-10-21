__d("WAWebPremiumMessageHydrateMessageAction", [
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebMsgType",
    "WAWebProtobufSyncAction.pb"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebContactCollection").ContactCollection.get(e.id.remote);
        if (n != null) {
            if (t.type === o("WAWebProtobufSyncAction.pb").SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType.PERSONALIZED) {
                const r = s(t, n);
                if (e.mediaData == null) {
                    e.set("body", r);
                } else {
                    e.set("caption", r);
                }
            } else {
                e.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN;
            }
        }
    }
    function s(e, t) {
        return u(e, t);
    }
    function u(e, t) {
        const n = o("WAWebContactGetters").getPremiumMessageName(t);
        if (n === "") {
            return e.message.replaceAll(/ ?<<customer_name>>/g, "");
        }
        return e.message.replace(/<<customer_name>>/g, n);
    }
    l.hydratePremiumMessage = e;
}, 98);