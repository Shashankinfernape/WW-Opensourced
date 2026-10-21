__d("WAWebGenerateChatMessageProto", [
    "WAWebGenerateExtendedTextMessageProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        if (json.quotedMsg || json.quotedRemoteJid || Array.isArray(json.mentionedJidList) && json.mentionedJidList.length > 0 || Array.isArray(json.groupMentions) && json.groupMentions.length > 0 || json.conversionTuple || json.isForwarded || json.forwardingScore || json._isPaymentNoteMsg || json.ephemeralDuration || json.ephemeralSettingTimestamp || json.ctwaContext || json.backgroundColor || contextInfo != null && contextInfo.utm || contextInfo?.isSpoiler === true || contextInfo?.isQuestion === true || contextInfo != null && contextInfo.questionReplyQuotedMessage || json.paymentLinkMetadata || contextInfo?.nonJidMentions != null && contextInfo.nonJidMentions > 0) {
            return r("WAWebGenerateExtendedTextMessageProtoUtils")({
                json,
                contextInfo
            });
        }
        return {
            conversation: json.body
        };
    }
    l.default = e;
}, 98);