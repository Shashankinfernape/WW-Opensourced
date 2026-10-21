__d("WAWebGenerateNativeFlowButtonsMessageProto", [
    "WAWebButtonsMessageProtoUtils",
    "WAWebGenerateImageMessageProto",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json, mediaMetadata, message }) {
        let l = babelHelpers.extends({}, message);
        if (json.headerType === o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE) {
            const s = r("WAWebGenerateImageMessageProto")({
                json,
                mediaMetadata,
                contextInfo: undefined
            });
            const imageMessage = s.imageMessage;
            l = babelHelpers.extends({}, l, {
                imageMessage
            });
        }
        l = o("WAWebButtonsMessageProtoUtils").createDynamicReplyButtonsMessage(l, json, contextInfo);
        l.buttonsMessage = babelHelpers.extends({}, l.buttonsMessage, {
            buttons: json.nativeFlowButtons
        });
        return l;
    }
    l.default = e;
}, 98);