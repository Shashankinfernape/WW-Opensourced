__d("WAWebScheduledMsgUnscheduleDirectSend", [
    "WALogger",
    "WAWebEncryptAndSendGroupMsg",
    "WAWebGenerateProtocolUnscheduleMessageProto",
    "WAWebSendUserMsgJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid, metricReporter, msgRecord, originalMsgKey, revealKeyId }) {
            const originalMsgKey_id = originalMsgKey.id;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                '[scheduled_msg][unschedule] send edit="7" ',
                ""
            ])), originalMsgKey_id);
            const msgProtobuf = o("WAWebGenerateProtocolUnscheduleMessageProto").buildProtocolUnscheduleMessage(originalMsgKey);
            const p = chatWid.isGroup();
            const scheduledMsgMetadata = {
                kind: "unschedule",
                revealKeyId
            };
            try {
                if (p) {
                    yield o("WAWebEncryptAndSendGroupMsg").encryptAndSendGroupMsg({
                        msgRecord,
                        msgProtobuf,
                        metricReporter,
                        scheduledMsgMetadata
                    });
                } else {
                    yield o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
                        msgRecord,
                        msgProtobuf,
                        metricReporter,
                        chatId: chatWid,
                        scheduledMsgMetadata
                    });
                }
            } catch (error) {
                const f = r("getErrorSafe")(error);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule] send failed for ",
                    ""
                ])), originalMsgKey_id).catching(f).sendLogs("scheduled-msg-unschedule-send-failed");
                throw f;
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][unschedule] ACKed ",
                ""
            ])), originalMsgKey_id);
        });
        return d.apply(this, arguments);
    }
    l.sendUnscheduleStanza = c;
}, 98);