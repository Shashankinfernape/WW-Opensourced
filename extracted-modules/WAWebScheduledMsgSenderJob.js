__d("WAWebScheduledMsgSenderJob", [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendJobsCommon",
    "WAWebE2EProtoUtils",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenUtils",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgStore",
    "WAWebSendMsgTypes",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, msgId, msgProtobuf, scheduledTimestampS }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Preparing scheduled message ",
                " for chat ",
                ""
            ])), msgId, chatId);
            const revealKey = o("WAWebScheduledMsgCrypto").generateRevealKey();
            const revealKeyId = o("WAWebScheduledMsgCrypto").generateRevealKeyId();
            const _ = msgProtobuf.messageContextInfo?.messageSecret;
            const f = _ != null ? new Uint8Array(_) : self.crypto.getRandomValues(new Uint8Array(32));
            const g = babelHelpers.extends({}, msgProtobuf, {
                messageContextInfo: babelHelpers.extends({}, msgProtobuf.messageContextInfo, {
                    messageSecret: f
                })
            });
            const h = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, g).readByteArrayView();
            const y = yield o("WAWebScheduledMsgCrypto").encryptWithRevealKey(h, revealKey);
            const { encIv, encPayload } = y;
            const v = o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion();
            const reportingTokenContentInfo = v > 0 ? o("WAWebReportingTokenUtils").calculateSenderReportingTokenContent(h, v) : null;
            const wrappedProtobuf = {
                conditionalRevealMessage: {
                    conditionalRevealMessageType: o("WAWebProtobufsE2E.pb").Message$ConditionalRevealMessage$ConditionalRevealMessageType.SCHEDULED_MESSAGE,
                    encIv,
                    encPayload,
                    revealKeyId
                },
                messageContextInfo: {
                    messageSecret: new Uint8Array(f)
                }
            };
            const L = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
                chatId,
                msgId,
                revealKey,
                revealKeyId,
                scheduledTimestampS,
                encPayload: new Uint8Array(encPayload),
                encIv: new Uint8Array(encIv),
                isAssociationChild: msgProtobuf.messageContextInfo?.messageAssociation != null
            });
            if (!L) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] per-chat limit reached for ",
                    ""
                ])), chatId);
                throw r("err")("[scheduled_msg] Per-chat scheduled message limit reached");
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Scheduled message prepared: ",
                ", revealKeyId: ",
                ""
            ])), msgId, revealKeyId);
            return {
                innerMessageSecret: f,
                reportingTokenContentInfo,
                revealKey,
                revealKeyId,
                scheduledTimestampS,
                wrappedProtobuf
            };
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgProtobuf, msgRecord, remoteWid, scheduledMsgMetadata }) {
            if (msgRecord.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message || msgRecord.data.isScheduledMsg !== true || scheduledMsgMetadata != null) {
                return {
                    msgProtobuf,
                    scheduledMsgMetadata
                };
            }
            const scheduledTimestampS = msgRecord.data.scheduledTimestampS;
            if (scheduledTimestampS == null) {
                return {
                    msgProtobuf,
                    scheduledMsgMetadata
                };
            }
            const s = o("WAWebWidToJid").widToChatJid(remoteWid);
            const scheduledTimestampS_1 = o("WATimeUtils").castToUnixTime(scheduledTimestampS);
            const originalStanzaType = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf);
            const originalMediaType = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(msgProtobuf);
            const originalMessageAssociationType = msgProtobuf.messageContextInfo?.messageAssociation?.associationType;
            const _ = yield c({
                chatId: s,
                msgId: msgRecord.data.id.toString(),
                msgProtobuf,
                scheduledTimestampS: scheduledTimestampS_1
            });
            msgRecord.data.messageSecret = _.innerMessageSecret;
            if (_.reportingTokenContentInfo != null) {
                msgRecord.data.reportingTokenContentInfo = _.reportingTokenContentInfo;
            }
            return {
                msgProtobuf: _.wrappedProtobuf,
                scheduledMsgMetadata: {
                    kind: "schedule",
                    scheduledTimestampS: _.scheduledTimestampS,
                    revealKeyId: _.revealKeyId,
                    revealKey: _.revealKey,
                    originalStanzaType,
                    originalMediaType,
                    originalMessageAssociationType
                }
            };
        });
        return p.apply(this, arguments);
    }
    l.prepareScheduledMessage = c;
    l.maybeWrapScheduledMessageForSend = m;
}, 98);