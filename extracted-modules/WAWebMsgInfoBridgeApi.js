__d("WAWebMsgInfoBridgeApi", [
    "WAWebMsgCollection",
    "WAWebMsgInfoAction",
    "WAWebMsgInfoCollection"
], function(t, n, r, o, a, i, l) {
    const e = {
        updateMsgInfo: function({ updates }) {
            for (const n of updates){
                const { ack, msgKey, participant, ts } = n;
                const u = o("WAWebMsgCollection").MsgCollection.get(msgKey) ?? o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(msgKey);
                if (u != null) {
                    const msgInfoParam = o("WAWebMsgInfoCollection").MsgInfoCollection.get(u.id);
                    if (msgInfoParam != null) {
                        o("WAWebMsgInfoAction").updateMsgInfo({
                            ack,
                            msgInfoParam,
                            participant,
                            ts
                        });
                    }
                }
            }
        }
    };
    l.MsgInfoBridgeApi = e;
}, 98);