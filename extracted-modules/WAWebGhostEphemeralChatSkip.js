__d("WAWebGhostEphemeralChatSkip", [
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    const e = "ephemeral_setting";
    function s(t) {
        return t.id.fromMe !== true && t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && t.subtype === e;
    }
    l.isSkippableIncomingEphemeralSettingMsg = s;
}, 98);