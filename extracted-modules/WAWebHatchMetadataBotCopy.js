__d("WAWebHatchMetadataBotCopy", [
    "WAWebGenerateHatchProtocolMessage",
    "WAWebMsgType",
    "WAWebWasaHatchOutboundWrapper"
], function(t, n, r, o, a, i, l) {
    function e({ innerMessage, msg }) {
        return o("WAWebWasaHatchOutboundWrapper").wrapHatchOutboundMessage({
            currentStanzaId: msg.id.id,
            innerMessage: s(msg, innerMessage)
        });
    }
    function s(msg, innerMessage) {
        const e_hatchMetadataSync = msg.hatchMetadataSync;
        if (!u(msg, innerMessage) || e_hatchMetadataSync?.type !== "req") {
            return innerMessage;
        }
        return babelHelpers.extends({}, o("WAWebGenerateHatchProtocolMessage").generateHatchProtocolMessage(e_hatchMetadataSync), {
            messageContextInfo: innerMessage.messageContextInfo
        });
    }
    function u(msg, innerMessage) {
        return msg.type === o("WAWebMsgType").MSG_TYPE.CHAT && innerMessage.protocolMessage == null && innerMessage.editedMessage == null;
    }
    l.genHatchOutboundCopy = e;
}, 98);