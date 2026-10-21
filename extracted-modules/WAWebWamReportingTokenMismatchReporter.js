__d("WAWebWamReportingTokenMismatchReporter", [
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReportingTokenValidationFailureSenderWamEvent",
    "WAWebReportingTokenValidationFailureWamEvent",
    "WAWebWamEnumDeviceType",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    function e({ groupHistoryBundleMessageId, isPartOfGroupHistory, msg, reason, reportingTokenVersion }) {
        const s = msg.senderWithDevice ?? o("WAWebMsgGetters").getSender(msg);
        new (o("WAWebReportingTokenValidationFailureWamEvent")).ReportingTokenValidationFailureWamEvent({
            editType: o("WAWebMsgGetters").getWamEditType(msg),
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(msg),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(msg),
            reportingTokenValidationFailureReason: reason,
            isLid: o("WAWebMsgKeyUtils").isLidMsgKey(msg.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message),
            isMessageRetry: msg.isRetry === true,
            offline: msg.isOffline === true,
            reportingTokenVersion: reportingTokenVersion ?? undefined,
            messageIsForward: o("WAWebMsgGetters").getIsForwarded(msg),
            isSecretEncryptedMsg: msg.kind === o("WAWebMsgType").MsgKind.CommentEncrypted,
            isPartOfGroupHistory
        }).commit();
        const u = {
            clientMessageId: msg.id.id,
            e2eReceiverType: o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION,
            editType: o("WAWebMsgGetters").getWamEditType(msg),
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(msg),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(msg),
            reportingTokenValidationFailureReason: reason,
            isLid: o("WAWebMsgKeyUtils").isLidMsgKey(msg.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message),
            isMessageRetry: msg.isRetry === true,
            offline: msg.isOffline === true,
            reportingTokenVersion: reportingTokenVersion ?? undefined,
            messageIsForward: o("WAWebMsgGetters").getIsForwarded(msg),
            isSecretEncryptedMsg: msg.kind === o("WAWebMsgType").MsgKind.CommentEncrypted,
            groupHistoryBundleMessageId
        };
        if (s != null) {
            u.senderJid = s.toString();
            const c = o("WAWebWamMsgUtils").getWamE2eSenderType(s);
            if (c != null) {
                u.e2eSenderType = c;
            }
        }
        new (o("WAWebReportingTokenValidationFailureSenderWamEvent")).ReportingTokenValidationFailureSenderWamEvent(u).commit();
    }
    l.logReportingTokenValidationEvent = e;
}, 98);