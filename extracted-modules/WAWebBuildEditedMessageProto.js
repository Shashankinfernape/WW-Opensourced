__d("WAWebBuildEditedMessageProto", [
    "WAWebE2EProtoGenerator",
    "WAWebMsgType",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        const i = !!(json.matchedText || json.description || json.title);
        const l = json.editMsgType ?? o("WAWebMsgType").MSG_TYPE.CHAT;
        switch(l){
            case o("WAWebMsgType").MSG_TYPE.CHAT:
                {
                    const s = babelHelpers.extends({}, json, {
                        type: o("WAWebMsgType").MSG_TYPE.CHAT,
                        subtype: i ? "url" : undefined,
                        messageSecret: undefined
                    });
                    return o("WAWebE2EProtoGenerator").getProtobufMessage(s, undefined, contextInfo);
                }
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                return {
                    imageMessage: {
                        caption: json.caption,
                        contextInfo
                    }
                };
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                return {
                    videoMessage: {
                        caption: json.caption,
                        contextInfo
                    }
                };
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return {
                    documentWithCaptionMessage: {
                        message: {
                            documentMessage: {
                                caption: json.caption,
                                contextInfo
                            }
                        }
                    }
                };
            default:
                if (!r("gkx")("26258") && l === o("WAWebMsgType").MSG_TYPE.AUDIO) {
                    return {
                        audioMessage: {}
                    };
                }
                throw r("err")(`Unsupported edit msg type: ${l}`);
        }
    }
    l.buildEditedMessageProto = e;
}, 98);