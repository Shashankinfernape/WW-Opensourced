__d("WAWebResendStatusMsg", [
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsWapMd",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebEncryptMsgProtobuf",
    "WAWebICDCMetaApi",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebStatusPublishRequestArgs",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const { msgProtobuf, msgRecord, participant, sessionScope, to } = t;
            const u = C(participant);
            if (u == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: no LID for PN, using PN"
                ]))).sendLogs("status-retry-participant-without-lid-legacy");
            }
            const c = yield h(t, u ?? participant);
            const { authorId, participantList, skDistribList } = c;
            const _ = msgRecord.data.id;
            const f = yield o("WAWebEncryptAndSendStatusMsg").genMessageBody({
                authorId,
                msgProtobuf,
                participantList,
                sessionScope,
                skDistribList,
                to
            });
            const g = f[0];
            const y = f[1];
            const b = f[2];
            const v = f[3];
            const S = yield o("WAWebReportingTokenUtils").genReportingTokenBody(msgRecord.data, msgProtobuf);
            const stanza = o("WAWap").wap("message", {
                id: o("WAWap").CUSTOM_STRING(_.id),
                to: o("WAWebCommsWapMd").CHAT_JID(to),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf),
                edit: o("WAWebSendMsgCommonApi").editAttribute(msgProtobuf, msgRecord.data.subtype)
            }, g, y, b, o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
                sessionScope: v ? sessionScope : o("WAWebSessionScope").SessionScope.DEFAULT
            }), S);
            const stanzaClass = o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(stanza);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "createStatusDeviceMsgStanza: built retry stanza for msgId ",
                ""
            ])), _.id).tags("messaging");
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            return {
                stanza,
                stanzaClass
            };
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceMsgType, msgProtobuf, msgRecord, participant, sessionScope, to }) {
            const d = C(participant);
            if (d == null) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sendStatusRetryMsgViaSmax: dropping the retry, the requesting device has no LID"
                ]))).sendLogs("status-retry-participant-without-lid");
                throw r("err")("sendStatusRetryMsgViaSmax: retry participant has no LID");
            }
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: false,
                sessionScope,
                wids: [
                    d
                ]
            });
            const m = o("WAWebUserPrefsMeUser").isMeAccount(d) ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(msgProtobuf, to) : msgProtobuf;
            yield o("WAWebICDCMetaApi").populateICDCMeta(o("WAWebWidFactory").asUserWidOrThrow(d), m);
            const p = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(d, deviceMsgType.retryCount, m, msgRecord.data, o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(msgProtobuf, msgRecord.data), sessionScope);
            const { ciphertext, type } = p;
            const g = msgRecord.data.id;
            const h = o("WAWebStatusPublishRequestArgs").toStatusRetryPublishArgs({
                ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
                clientReportingToken: yield o("WAWebReportingTokenUtils").genClientReportingTokenMixinArgs(msgRecord.data, msgProtobuf),
                deviceIdentity: type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? yield o("WAWebAdvSignatureApi").getADVEncodedIdentity() : null,
                editOrRevoke: o("WAWebStatusPublishRequestArgs").toStatusEditOrRevokeArgs(msgProtobuf, msgRecord.data.subtype),
                encMediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(msgProtobuf),
                hideDecryptFail: o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(msgProtobuf) === o("WAWebBackendJobs.flow").DecryptFailType.Hide,
                msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf),
                retryCount: deviceMsgType.retryCount,
                retryEnc: {
                    ciphertext,
                    isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(ciphertext),
                    participant: d,
                    type
                },
                statusId: g.id,
                useStatusSessionScope: sessionScope === o("WAWebSessionScope").SessionScope.STATUS
            });
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusRetryMsgViaSmax: sending ",
                " to ",
                ""
            ])), g.id, to.toString()).tags("messaging");
            return o("WAWebEncryptAndSendStatusMsg").sendStatusPublishOrThrow(h);
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceMsgType, msgRecord, sessionScope }, t) {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: false,
                sessionScope,
                wids: [
                    t
                ]
            });
            const i = msgRecord.data.id;
            const authorId = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "prepareStatusRetryRecipients: id ",
                " to ",
                ", count: ",
                ""
            ])), i.id, t.toLogString(), deviceMsgType.retryCount).tags("messaging");
            const s = yield o("WAWebUserPrefsStatus").getStatusSkDistribList([
                t
            ], {
                isFullAudience: false
            });
            const { participantList, skDistribList } = s;
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[prepareStatusRetryRecipients] skDistrib=",
                " participants=",
                ""
            ])), skDistribList.length, participantList.length);
            return {
                authorId,
                participantList,
                skDistribList
            };
        });
        return y.apply(this, arguments);
    }
    function C(participant) {
        if (participant.isLid()) {
            return participant;
        }
        const n = o("WAWebLidMigrationUtils").toLid(o("WAWebWidFactory").asUserWidOrThrow(participant));
        if (n != null) {
            return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(n.user, n.server, participant.device ?? 0);
        }
        return null;
    }
    l.createStatusDeviceMsgStanza = p;
    l.sendStatusRetryMsgViaSmax = f;
}, 98);