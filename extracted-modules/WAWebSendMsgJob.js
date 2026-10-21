__d("WAWebSendMsgJob", [
    "Promise",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptAndSendGroupMsg",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMaibaWASSMigration",
    "WAWebOutgoingMessage",
    "WAWebPnlessStanzaMigration",
    "WAWebScheduledMsgSenderJob",
    "WAWebSendTcTokenChatAction",
    "WAWebSendUserMsgJob",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(msgRecord, metricReporter, scheduledMsgMetadata_1) {
            const t_data = msgRecord.data;
            const { id, to } = t_data;
            const d = msgRecord.data.to;
            yield o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(msgRecord);
            o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceWidWithFbIdForBotSend(msgRecord);
            o("WAWebMaibaWASSMigration").maybeReplaceMaibaAiHubLidWithFbidForSend(msgRecord);
            o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceWidWithFbIdForInvoke(msgRecord, "invokedBotWid");
            o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceWidWithFbIdForInvoke(msgRecord, "botRespOrInvocationRevokeBotWid");
            if (!o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[messaging] waiting for offline delivery end ",
                    ""
                ])), id);
                yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            }
            if (!id || !id.id) {
                return (s || (s = n("Promise"))).reject(r("err")("[messaging] sending message without an id"));
            }
            if (!to) {
                return (s || (s = n("Promise"))).reject(r("err")("[messaging] sending message without an remote id"));
            }
            const msgProtobuf_1 = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat, msgRecord);
            const p = yield o("WAWebScheduledMsgSenderJob").maybeWrapScheduledMessageForSend({
                msgProtobuf: msgProtobuf_1,
                msgRecord,
                remoteWid: to,
                scheduledMsgMetadata: scheduledMsgMetadata_1
            });
            const { msgProtobuf, scheduledMsgMetadata } = p;
            if (to.isUser()) {
                if (r("WAWebWid").isCAPISupportAccount(to) && o("WAWebABPropsSaga").getIsSagaV1Enabled() && o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled()) {
                    yield o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(msgProtobuf);
                }
                const g = o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
                    chatId: d,
                    metricReporter,
                    msgProtobuf,
                    msgRecord,
                    scheduledMsgMetadata
                });
                if (msgRecord.data.type !== "protocol") {
                    o("WAWebSendTcTokenChatAction").sendTcToken(to);
                }
                return g;
            } else if (to.isGroup()) {
                return o("WAWebEncryptAndSendGroupMsg").encryptAndSendGroupMsg({
                    metricReporter,
                    msgProtobuf,
                    msgRecord,
                    scheduledMsgMetadata
                });
            }
            return (s || (s = n("Promise"))).reject(r("err")("[messaging] unsupported remote jid type"));
        });
        return c.apply(this, arguments);
    }
    l.encryptAndSendMsg = u;
}, 98);