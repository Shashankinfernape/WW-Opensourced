__d("WAWebEncryptAndSendGroupMsg", [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBUpdateMessageTable",
    "WAWebE2EProtoGenerator",
    "WAWebGenerateBotGroupMetadata",
    "WAWebGroupHistorySendGroupMsgJobUtils",
    "WAWebGroupMsgSendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgRcatUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebRemoveQuotedAttachmentMediaFields",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSendGroupDirectJob",
    "WAWebSendGroupMsgJob",
    "WAWebSendMsgQueueMap",
    "WAWebSendMsgTypes",
    "WAWebStatusSessionGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = r("requireDeferred")("WAWebSendGroupSkmsgJob").__setRef("WAWebEncryptAndSendGroupMsg");
    function p({ metricReporter, msgProtobuf, msgRecord, scheduledMsgMetadata }) {
        const msgRecord_data = msgRecord.data;
        const { id, to } = msgRecord_data;
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "encryptAndSendGroupMsg: queued ",
            ""
        ])), id).tags("messaging");
        metricReporter.sendPerfReporter?.startWaitingToEncryptStage();
        return o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(to.toString(), n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: sending ",
                ""
            ])), id).tags("messaging");
            metricReporter.sendPerfReporter?.postWaitingToEncryptStage();
            metricReporter.sendPerfReporter?.startReadyToSendStage();
            const revokeMsgKey = y(msgProtobuf);
            const editedMsgKey = v(msgProtobuf);
            const keptMessageKey = C(msgProtobuf);
            const participantRecord = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(to.toString());
            const groupData = yield o("WAWebGroupMsgSendUtils").getGroupData(to.toString(), participantRecord, msgRecord);
            metricReporter.sendReporter?.setGroupData(groupData);
            metricReporter.sendPerfReporter?.setGroupData(groupData);
            const D = (participantRecord == null ? undefined : participantRecord.participants.map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e))) ?? [];
            const x = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(msgRecord_data, D);
            const $ = !!groupData.isLidAddressingMode;
            let P;
            if (groupData.isCag === true) {
                const isAdmin = !!groupData.amIAdmin;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: CAG ",
                    " "
                ])), isAdmin ? "admin" : "non-admin").tags("messaging");
                const w = msgProtobuf?.messageHistoryBundle?.messageHistoryMetadata?.historyReceivers;
                if (w != null && w.length > 0) {
                    const A = yield o("WAWebApiParticipantStore").getGroupSenderKeyListFromParticipantRecord(to, participantRecord);
                    const F = function(t) {
                        return t.map(o("WAWebLidMigrationUtils").toAddressingModeFactory($));
                    };
                    const O = yield o("WAWebGroupHistorySendGroupMsgJobUtils").getGroupSendListForGroupHistoryBundle(w.map(o("WAWebWidFactory").createWid), A, {
                        normalizeAddressingModeFn: F,
                        isLidAddressingMode: $
                    });
                    P = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(O, groupData);
                } else {
                    P = yield o("WAWebSendGroupMsgJob").getCagMessageSendList({
                        editedMsgKey,
                        groupId: to,
                        isAdmin,
                        isLidAddressingMode: $,
                        keptMessageKey,
                        msgRecord,
                        participantRecord,
                        revokeMsgKey
                    });
                }
            } else {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: ",
                    " group size: ",
                    ""
                ])), o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(groupData), participantRecord?.participants.length).tags("messaging");
                const W = yield o("WAWebSendGroupMsgJob").getMessageSendList(to, participantRecord, revokeMsgKey, editedMsgKey, $, msgProtobuf?.messageHistoryBundle?.messageHistoryMetadata?.historyReceivers);
                P = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(W, groupData);
            }
            const q = revokeMsgKey != null ? _(D, msgRecord_data.botGroupParticipants, groupData) : [];
            let groupAgentFanout;
            if (revokeMsgKey != null) {
                groupAgentFanout = {
                    configuredGroupAgentParticipants: q,
                    resolvedGroupAgentParticipants: q
                };
            } else if (P.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.SKMSG) {
                groupAgentFanout = yield o("WAWebResolveGroupAgentParticipants").resolveGroupAgentFanoutForGroupSend(groupData);
            } else {
                groupAgentFanout = {
                    configuredGroupAgentParticipants: [],
                    resolvedGroupAgentParticipants: []
                };
            }
            const V = msgRecord_data.isGroupStatus === true ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope() : undefined;
            const H = groupData?.isCapiGroup === true ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(msgProtobuf) : msgProtobuf;
            const G = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(o("WAWebRemoveQuotedAttachmentMediaFields").isGroupWithAgentParticipant(groupData) ? o("WAWebRemoveQuotedAttachmentMediaFields").removeQuotedAttachmentMediaFields(H) : H, groupData.groupAgentParticipants ?? []);
            yield f({
                groupAgentFanout,
                groupMsgProtobuf: G,
                isOpenBotGroup: groupData.isOpenBotGroup === true,
                isRevoke: revokeMsgKey != null,
                msgRecord
            });
            if (P.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT) {
                let K = [
                    null,
                    false
                ];
                if (revokeMsgKey != null) {
                    const Q = yield m.load();
                    const X = Q.createBotFanoutNode;
                    K = yield X({
                        configuredGroupAgentParticipants: q,
                        encMediaType: null,
                        groupAgentParticipants: q,
                        isOpenBotGroupSend: q.some(o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid),
                        isScheduledMessage: false,
                        msg: msgRecord_data,
                        msgProtobuf: G,
                        shouldGateInvokedBot: false
                    });
                }
                const Y = K;
                const additionalBotBody = Y[0];
                const additionalBotShouldHaveIdentity = Y[1];
                const ee = P;
                const te = ee.deviceList;
                metricReporter.sendReporter?.setDeviceCount(te.length);
                metricReporter.sendPerfReporter?.setIsDirectedMessage(true);
                return o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                    additionalBotBody,
                    additionalBotShouldHaveIdentity,
                    deviceList: te,
                    groupData,
                    metricReporter,
                    msgProtobuf: G,
                    msgRecord,
                    scheduledMsgMetadata,
                    sessionScope: V
                });
            }
            const P_senderKeyList = P.senderKeyList;
            metricReporter.sendReporter?.setDeviceCount(P_senderKeyList.skList.length + P_senderKeyList.skDistribList.length);
            const oe = yield m.load();
            const oe_encryptAndSendSenderKeyMsg = oe.encryptAndSendSenderKeyMsg;
            return oe_encryptAndSendSenderKeyMsg(msgRecord, G, P_senderKeyList, groupData, metricReporter, x, scheduledMsgMetadata, groupAgentFanout, V);
        }));
    }
    function _(e, botGroupParticipants, groupData) {
        if (groupData.isCag === true || groupData.isAnnouncementGroup === true && !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return [];
        }
        const r = new Map;
        [].concat(e, botGroupParticipants ?? []).forEach((e)=>{
            if (e.isUser() && o("WAWebBotGroupGatingUtils").isGroupRevokeAgentTarget(e)) {
                r.set(e.toString(), e);
            }
        });
        return Array.from(r.values());
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupAgentFanout, groupMsgProtobuf, isOpenBotGroup, isRevoke, msgRecord }) {
            if (!(isRevoke || msgRecord.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message || msgRecord.data.botGroupParticipants != null)) {
                const s = isOpenBotGroup || msgRecord.data.invokedBotWid != null || groupAgentFanout.configuredGroupAgentParticipants.length > 0;
                if (s) {
                    const botGroupParticipants = h(groupMsgProtobuf, groupAgentFanout.resolvedGroupAgentParticipants);
                    try {
                        yield o("WAWebDBUpdateMessageTable").updateMessageTable(msgRecord.data.id, {
                            botGroupParticipants
                        });
                    } catch (error) {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[encryptAndSendGroupMsg] failed to persist original agent targets"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("group-send-persist-original-agents-failed");
                    }
                    msgRecord.data.set({
                        botGroupParticipants
                    });
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h(groupMsgProtobuf, resolvedGroupAgentParticipants) {
        const a = groupMsgProtobuf.messageContextInfo?.botMetadata?.botGroupMetadata?.participantsMetadata ?? [];
        const i = [
            o("WAWebBotUtils").META_BOT_FBID_WID,
            o("WAWebBotUtils").META_BOT_TEE_FBID_WID
        ].concat(resolvedGroupAgentParticipants);
        return a.flatMap(({ botFbid })=>{
            const n = i.find((e)=>e.toString() === `${botFbid ?? ""}@bot`);
            if (n != null) {
                return [
                    n
                ];
            }
            return [];
        });
    }
    function y({ protocolMessage }) {
        let n = null;
        if (protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE && protocolMessage != null && protocolMessage.key) {
            const a = protocolMessage.key;
            const { id, participant, remoteJid } = a;
            if (!r("isStringNullOrEmpty")(remoteJid) && !r("isStringNullOrEmpty")(id) && !r("isStringNullOrEmpty")(participant)) {
                n = new (r("WAWebMsgKey"))({
                    remote: o("WAWebWidFactory").createWid(remoteJid),
                    fromMe: true,
                    id,
                    participant: o("WAWebWidFactory").createWid(participant)
                });
            }
        }
        return n;
    }
    function C({ keepInChatMessage }) {
        if (keepInChatMessage != null && keepInChatMessage.key) {
            const n = keepInChatMessage.key;
            const { id, participant, remoteJid } = n;
            if (!r("isStringNullOrEmpty")(remoteJid) && !r("isStringNullOrEmpty")(id) && !r("isStringNullOrEmpty")(participant)) {
                const s = new (r("WAWebMsgKey"))({
                    remote: o("WAWebWidFactory").createWid(remoteJid),
                    fromMe: true,
                    id,
                    participant: o("WAWebWidFactory").createWid(participant)
                });
                return s;
            }
        }
        return null;
    }
    function b({ id, participant, remoteJid }) {
        if (r("isStringNullOrEmpty")(remoteJid) || r("isStringNullOrEmpty")(id) || r("isStringNullOrEmpty")(participant)) {
            return null;
        }
        return new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(remoteJid),
            fromMe: true,
            id,
            participant: o("WAWebWidFactory").createWid(participant)
        });
    }
    function v(msgProtobuf) {
        const e_protocolMessage = msgProtobuf.protocolMessage;
        let a = null;
        if (e_protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT && e_protocolMessage != null && e_protocolMessage.key) {
            a = b(e_protocolMessage.key);
        } else if (msgProtobuf.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT && msgProtobuf.secretEncryptedMessage?.targetMessageKey != null) {
            a = b(msgProtobuf.secretEncryptedMessage.targetMessageKey);
        }
        return a;
    }
    l.encryptAndSendGroupMsg = p;
}, 98);