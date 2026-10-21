__d("WAWebGenerateInteractiveMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebGenerateDocumentMessageProto",
    "WAWebGenerateImageMessageProto",
    "WAWebGenerateVideoMessageProto",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebStripBrazilPaymentState"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json, mediaMetadata }) {
        let header;
        if (json.interactiveHeader) {
            header = {
                title: json.interactiveHeader.title,
                subtitle: json.interactiveHeader.subtitle,
                hasMediaAttachment: json.interactiveHeader.hasMediaAttachment
            };
            if (json.interactiveHeader.thumbnail) {
                header = babelHelpers.extends({}, header, {
                    jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(json.interactiveHeader.thumbnail)
                });
            } else if (json.interactiveHeader.mediaType) {
                switch(json.interactiveHeader.mediaType){
                    case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO:
                        {
                            const l = r("WAWebGenerateVideoMessageProto")({
                                json,
                                mediaMetadata,
                                contextInfo
                            }).videoMessage;
                            header = babelHelpers.extends({}, header, {
                                videoMessage: babelHelpers.extends({}, l, {
                                    caption: undefined
                                })
                            });
                            break;
                        }
                    case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT:
                        header = babelHelpers.extends({}, header, {
                            documentMessage: r("WAWebGenerateDocumentMessageProto")({
                                json,
                                mediaMetadata,
                                contextInfo
                            }).documentMessage
                        });
                        break;
                    case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE:
                        header = babelHelpers.extends({}, header, {
                            imageMessage: r("WAWebGenerateImageMessageProto")({
                                json,
                                mediaMetadata,
                                contextInfo
                            }).imageMessage
                        });
                        break;
                }
            }
        }
        const interactiveMessage = babelHelpers.extends({
            body: json.caption || json.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ? {
                text: json.caption
            } : undefined,
            footer: json.footer ? {
                text: json.footer
            } : undefined,
            header
        }, contextInfo && {
            contextInfo
        });
        const c = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(json.interactiveType);
        if (c) {
            interactiveMessage[c] = s(json);
        }
        return {
            interactiveMessage
        };
    }
    function s(json) {
        if (json.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return o("WAWebStripBrazilPaymentState").stripBrazilPaymentState(json.interactivePayload);
        }
        return json.interactivePayload;
    }
    l.default = e;
}, 98);