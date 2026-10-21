__d("WAWebScheduledMsgBridgeApi", [
    "WAWebCmd"
], function(t, n, r, o, a, i, l) {
    const e = {
        triggerScheduledMsgRevealedFromBridge: function({ msgId }) {
            o("WAWebCmd").Cmd.onScheduledMsgRevealedFromBridge(msgId);
        },
        triggerScheduledMsgChangedFromBridge: function({ chatId }) {
            o("WAWebCmd").Cmd.onScheduledMsgChangedFromBridge(chatId);
        }
    };
    l.ScheduledMsgBridgeApi = e;
}, 98);