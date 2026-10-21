__d("WAStartSendToSentQplFlow", [
    "$InternalEnum",
    "QPLFlow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 300000;
    const s = n("$InternalEnum")({
        Image: "image",
        Video: "video",
        Audio: "audio",
        Document: "document",
        Ptt: "ptt",
        Sticker: "sticker",
        Gif: "gif",
        Text: "text",
        Unknown: "unknown"
    });
    const u = n("$InternalEnum")({
        Individual: "individual",
        Group: "group",
        Channel: "channel",
        Status: "status",
        Broadcast: "broadcast"
    });
    const c = n("$InternalEnum")({
        ClickSend: "click_send",
        MsgSaved: "msg_saved",
        MsgRendered: "msg_rendered",
        MediaUploadStart: "media_upload_start",
        MediaUploadEnd: "media_upload_end",
        EncryptStart: "encrypt_start",
        EncryptEnd: "encrypt_end",
        StanzaWritten: "stanza_written",
        ServerAckSent: "server_ack_sent"
    });
    function d({ chatType, event, messageType }) {
        return o("QPLFlow").startQPLFlow(event, {
            annotations: {
                string: {
                    chatType: chatType.valueOf(),
                    messageType: messageType.valueOf()
                }
            },
            timeoutInMs: e
        });
    }
    l.SendToSentMessageType = s;
    l.SendToSentChatType = u;
    l.SendToSentPoint = c;
    l.startSendToSentQplFlow = d;
}, 98);