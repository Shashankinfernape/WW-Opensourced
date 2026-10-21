__d("WAWebSendGroupSkmsgJob", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebAck",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebApiParticipantStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTos",
    "WAWebBotUtils",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebGroupHandleAddressingModeMismatch",
    "WAWebGroupQueryBridge",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebPhashUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebResendGroupMsg",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaMessage",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:10199",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupData, metricReporter, sessionScope, skDistribList }) {
            metricReporter.sendPerfReporter?.startPrekeysFetchStage();
            metricReporter.sendPerfReporter?.setFetchedPrekeyCount(0);
            if (skDistribList.length > 0) {
                try {
                    const d = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                        identityChanged: false,
                        sessionScope: sessionScope ?? o("WAWebSessionScope").SessionScope.DEFAULT,
                        wids: skDistribList
                    });
                    metricReporter.sendPerfReporter?.setFetchedPrekeyCount(d?.missedPrekeyCount);
                    o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
                        count: d?.depletedPrekeyCount,
                        prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                        messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP,
                        deviceSizeBucket: groupData.deviceSizeBucket
                    });
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: failed for ",
                        " devices: ",
                        ""
                    ])), skDistribList.length, error).tags("messaging");
                }
            }
            metricReporter.sendPerfReporter?.postPrekeysFetchStage();
        });
        return y.apply(this, arguments);
    }
    function C(e, t, n, r, o, a, i, l, s, u, c) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i, l, s, u, c, d) {
            const g = o("WAWebBotBaseGating").isBotEnabled() && e.invokedBotWid?.isBot() === true;
            const h = o("WAWebBotBaseGating").isBotEnabled() && o("WAWebMsgGetters").getIsBotFeedbackMessage(e);
            const y = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e);
            const { configuredGroupAgentParticipants, resolvedGroupAgentParticipants } = d;
            const v = x(e, i);
            const e_invokedBotWid = e.invokedBotWid;
            l.sendPerfReporter?.startClientEncryptStage();
            const R = o("WAWebSendMsgCommonApi").encodeAndPad(a);
            const L = c?.kind === "schedule" ? c.originalMediaType : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a);
            const E = yield o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(e, t, R, i);
            const { ciphertext, senderKeyBytes } = E;
            let T;
            if (n.length > 0) {
                T = yield o("WAWebGetGroupKeyDistributionMsg").getKeyDistributionMsg(e, t, n, senderKeyBytes, false, undefined, u);
            }
            l.sendPerfReporter?.postClientEncryptStage();
            let keyDistributionMsg = null;
            let P = false;
            if (T && T.length > 0 && !h) {
                keyDistributionMsg = o("WAWap").wap("participants", null, T.map(({ ciphertext, participant, type })=>{
                    if (type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
                        P = true;
                    }
                    const i = s?.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(participant)));
                    const l = i != null ? o("WAWap").wap("content_binding", null, i) : null;
                    return o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(participant)
                    }, o("WAWap").wap("enc", {
                        v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                        type: o("WAWap").CUSTOM_STRING(type),
                        "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(a))
                    }, ciphertext), l);
                }));
            } else if (s != null) {
                keyDistributionMsg = o("WAWap").wap("participants", null, r.map((e)=>{
                    const t = s?.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(e)));
                    if (t != null) {
                        return o("WAWap").wap("to", {
                            jid: o("WAWebCommsWapMd").DEVICE_JID(e)
                        }, o("WAWap").wap("content_binding", null, t));
                    }
                    return null;
                }));
            }
            const skeyEncryptedGroupMsg = h ? null : o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                type: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(L),
                "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(a))
            }, ciphertext);
            let identityNode = null;
            const shouldGateInvokedBot = g && e_invokedBotWid != null && !o("WAWebBotUtils").isAnyMetaAiBot(e_invokedBotWid) && (yield o("WAWebResolveGroupAgentParticipants").isGroupAgentProfile(e_invokedBotWid));
            const A = resolvedGroupAgentParticipants.length > 0;
            const F = !v && (g || h || y || o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i.isOpenBotGroup === true || A) ? yield $({
                configuredGroupAgentParticipants,
                encMediaType: L,
                groupAgentParticipants: resolvedGroupAgentParticipants,
                isOpenBotGroupSend: i.isOpenBotGroup ?? false,
                isScheduledMessage: c?.kind === "schedule",
                msg: e,
                msgProtobuf: a,
                shouldGateInvokedBot
            }) : [
                null,
                false
            ];
            const botMsgNode = F[0];
            const B = F[1];
            if (P || B) {
                const W = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
                identityNode = o("WAWap").wap("device-identity", null, W);
            }
            return {
                keyDistributionMsg,
                skeyEncryptedGroupMsg,
                identityNode,
                botMsgNode,
                hasPairwisePayload: T != null && T.length > 0 && !h
            };
        });
        return b.apply(this, arguments);
    }
    function v(e, { data }) {
        const a = o("WAWebE2EProtoUtils").getBizNativeFlowName(e);
        const data_nativeFlowInteractiveMsg = data.nativeFlowInteractiveMsg;
        if (a != null && r("WAWebInteractiveMessagesNativeFlowName").cast(a) === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO && data_nativeFlowInteractiveMsg === true) {
            let l;
            return (l = o("WAWap")).wap("biz", null, l.wap("interactive", {
                v: "1",
                type: l.CUSTOM_STRING("native_flow")
            }, l.wap("native_flow", {
                name: l.CUSTOM_STRING(a)
            })));
        }
        return null;
    }
    function S(e, t, n, r, o, a, i, l, s) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(msgRecord, t, a, groupData, metricReporter, s, scheduledMsgMetadata, f, y) {
            const e_data = msgRecord.data;
            const { id, to } = e_data;
            const e_data_1 = msgRecord.data;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendSenderKeyMsg: sending ",
                ""
            ])), id).tags("messaging");
            const F = id.id;
            const { rotateKey, skDistribList, skList } = a;
            const q = (groupData.groupAgentParticipants ?? []).map(I);
            const U = new Set(q.map(T));
            const skDistribList_1 = k(skDistribList, U);
            const H = k(skList, U);
            D(to, metricReporter);
            metricReporter.sendPerfReporter?.setSenderKeyDistributionCount(skDistribList_1.length);
            const oldList = H.concat(skDistribList_1);
            const z = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            const j = yield o("WAWebPhashUtils").phashV2([].concat(oldList, [
                z
            ], q), o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && groupData.isOpenBotGroup === true, groupData.isTeeBotGroup === true);
            const K = o("WAWebMsgGetters").getIsBotFeedbackMessage(e_data_1);
            yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(oldList.map((e)=>({
                    msgKey: id,
                    receiverId: e
                })));
            if (rotateKey) {
                yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(to, z);
            }
            yield h({
                groupData,
                metricReporter,
                sessionScope: y,
                skDistribList: skDistribList_1
            });
            const Q = f ?? (yield o("WAWebResolveGroupAgentParticipants").resolveGroupAgentFanoutForGroupSend(groupData));
            const X = yield C(e_data_1, to, skDistribList_1, H, t, groupData, metricReporter, s, y, scheduledMsgMetadata, Q);
            const { botMsgNode, hasPairwisePayload, identityNode, keyDistributionMsg, skeyEncryptedGroupMsg } = X;
            const ne = s?.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(z)));
            const re = ne != null ? o("WAWap").wap("sender_content_binding", null, ne) : null;
            const localAddressingMode = groupData.isLidAddressingMode === true ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
            const ae = yield o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(e_data_1, t, id.toString());
            const ie = o("WAWap").wap("message", {
                id: o("WAWap").CUSTOM_STRING(F),
                to: o("WAWebCommsWapMd").CHAT_JID(to),
                phash: K ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(j),
                type: scheduledMsgMetadata?.originalStanzaType ?? o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                edit: o("WAWebSendMsgCommonApi").editAttribute(t, e_data_1.subtype),
                addressing_mode: o("WAWap").CUSTOM_STRING(localAddressingMode)
            }, keyDistributionMsg, skeyEncryptedGroupMsg, identityNode, v(t, msgRecord), o("WAWebSendMsgMetaNode").genMetaNode({
                chatId: to,
                groupData,
                includeAttributes: {
                    hasPairwisePayload,
                    sessionScope: y
                },
                msgProtobuf: t,
                msgRecord,
                scheduledMsgMetadata
            }), botMsgNode, re, ae);
            yield o("WAWebSendMsgCommonApi").updateIdentityRange(msgRecord, oldList);
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            metricReporter.sendPerfReporter?.postReadyToSendStage();
            metricReporter.sendPerfReporter?.startWrittenWireStage();
            if (n("cr:10199") != null) {
                n("cr:10199").printEncNode(t);
            }
            const le = yield o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(ie, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: F,
                class: "message",
                from: to,
                participant: null
            }));
            if (keyDistributionMsg) {
                metricReporter.sendReporter?.setMessageDistributionType(o("WAWebWamEnumMessageDistributionEnumType").MESSAGE_DISTRIBUTION_ENUM_TYPE.SENDER_KEY_DISTRIBUTION_MESSAGE);
            }
            metricReporter.sendPerfReporter?.postWrittenWireStage();
            metricReporter.sendPerfReporter = null;
            metricReporter.sendReporter?.postSuccess();
            metricReporter.sendReporter = null;
            const ue = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(le);
            if (ue.error) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: invalid ack from server for ",
                    ""
                ])), e_data_1.id).tags("messaging");
                return (g || (g = n("Promise"))).reject(r("err")("[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server"));
            }
            const error = ue.success.error;
            if (error != null && (error === o("WAWebHandleMsgError").MessageSentAckErrorCode.StaleGroupAddressingMode || error === o("WAWebHandleMsgError").MessageSentAckErrorCode.MessageNotAllowed)) {
                return L(to, msgRecord, error);
            }
            yield o("WAWebApiParticipantStore").markHasSenderKey(to, skDistribList_1);
            const ue_success = ue.success;
            const { addressingMode, count, phash } = ue_success;
            if (phash != null && phash !== j) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: phash mismatch ",
                    " server=",
                    ""
                ])), e_data_1.id, phash).tags("messaging");
                o("WAWebResendGroupMsg").resendPersistedGroupMsgWrapper({
                    isDirect: false,
                    msgRecord,
                    msgProtobuf: t,
                    oldList,
                    ackTime: o("WATimeUtils").unixTime(),
                    groupData,
                    metricReporter,
                    serverAddressingMode: addressingMode
                }).catch((t)=>{
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: failed to resend group msg: ",
                        ", type: ",
                        ""
                    ])), msgRecord.data.id.toString(), msgRecord.data.type).tags("messaging");
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: failed to resend group msg: ",
                        ""
                    ])), t).tags("messaging").sendLogs("message-resend-failed", {
                        sampling: 0.01
                    });
                });
            } else if (addressingMode != null && addressingMode !== localAddressingMode) {
                o("WAWebGroupHandleAddressingModeMismatch").handleAddressingModeMismatch(to, {
                    localAddressingMode,
                    serverAddressingMode: addressingMode,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType").MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE
                });
            }
            if (count != null) {
                o("WAWebSchemaMessage").getMessageTable().merge(String(id), {
                    count
                });
            }
            return ue.success;
        });
        return R.apply(this, arguments);
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendSenderKeyMsg: ack with error code ",
                ""
            ])), a).tags("messaging");
            (g || (g = n("Promise"))).resolve().then(()=>o("WAWebGroupQueryBridge").sendQueryGroup(e)).catch((e)=>{
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: sendQueryGroup failed ",
                    ""
                ])), e).tags("messaging");
            });
            if (t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
                yield t.data.updateAck(o("WAWebAck").ACK.FAILED, false);
            }
            throw a === o("WAWebHandleMsgError").MessageSentAckErrorCode.MessageNotAllowed ? new (o("WAWebHandleMsgError")).MessageSentAckError(a) : r("err")(`[messaging] encryptAndSendSenderKeyMsg: ack with error code ${a}`);
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        if (t.size === 0) {
            return e;
        }
        return e.filter((e)=>!t.has(T(e)));
    }
    function I(e) {
        if (e.isUser()) {
            return o("WAWebWidFactory").asUserWidOrThrow(e);
        }
        return e;
    }
    function T(e) {
        return I(e).toString();
    }
    function D(e, metricReporter) {
        const n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
        if (n) {
            metricReporter.sendPerfReporter?.setMessageIsFirstUserMessage(true);
            metricReporter.sendReporter?.setMessageIsFirstUserMessage(true);
        }
    }
    function x(e, t) {
        if (t.isCag === true) {
            return true;
        }
        return t.isAnnouncementGroup === true && !(o("WAWebMsgGetters").getIsRevoke(e) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled());
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ configuredGroupAgentParticipants, encMediaType, groupAgentParticipants, isOpenBotGroupSend, isScheduledMessage, msg, msgProtobuf, shouldGateInvokedBot }) {
            const isBotFeedbackMessage = o("WAWebMsgGetters").getIsBotFeedbackMessage(msg);
            const isBotRespOrInvocationRevoke = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(msg);
            const m = yield o("WAWebResolveGroupAgentParticipants").hasMuseNoticeGroupAgent(configuredGroupAgentParticipants);
            const p = w({
                configuredGroupAgentParticipants,
                groupAgentParticipants,
                isBotFeedbackMessage,
                isBotRespOrInvocationRevoke,
                isOpenBotGroupSend,
                msg,
                omitNonParticipantInvokedBot: m === true,
                shouldGateInvokedBot
            });
            const _ = p[0];
            if (_ == null) {
                return [
                    null,
                    false
                ];
            }
            const hasOpenBotTarget = p.some((e)=>e.equals(o("WAWebBotUtils").META_BOT_FBID_WID));
            const g = N(msg, p, groupAgentParticipants);
            const hasGroupAgentTarget = M(p, groupAgentParticipants, isBotFeedbackMessage, isBotRespOrInvocationRevoke);
            const isGroupAgentParticipantSend = !hasOpenBotTarget && !g && hasGroupAgentTarget;
            const groupHasMuseAgent = isOpenBotGroupSend && m;
            yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(p.map((e)=>({
                    msgKey: msg.id,
                    receiverId: e
                })));
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: false,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [
                    _
                ]
            });
            let b = yield o("WAWebE2EProtoGenerator").updateBotInvokeMsgProtoCopyForCapi({
                message: msgProtobuf,
                messageSecret: msg.messageSecret,
                botMessageSecret: msg.botMessageSecret,
                groupHasMuseAgent,
                hasGroupAgentTarget,
                hasOpenBotTarget,
                isGroupAgentParticipantSend,
                isGroupMsg: true,
                isOpenBotGroup: o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && isOpenBotGroupSend,
                mentionedJidList: isGroupAgentParticipantSend ? null : msg.mentionedJidList
            });
            if (_.isFbidBot()) {
                b = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(b);
            }
            if (isBotRespOrInvocationRevoke && _.isFbidBot()) {
                b = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(b);
            }
            const v = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(_, 0, b, msg, 0);
            const { ciphertext, type } = v;
            let L = null;
            if (hasGroupAgentTarget || groupHasMuseAgent) {
                L = isScheduledMessage ? encMediaType : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(b);
            }
            const E = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                type: o("WAWap").CUSTOM_STRING(type),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(L)
            }, ciphertext);
            const k = p.length === 1 ? [
                o("WAWap").wap("to", {
                    jid: o("WAWebCommsWapMd").DEVICE_JID(_)
                }, E)
            ] : [].concat(p.map((e)=>o("WAWap").wap("to", {
                    jid: o("WAWebCommsWapMd").DEVICE_JID(e)
                })), [
                E
            ]);
            const I = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(isOpenBotGroupSend || isGroupAgentParticipantSend, null, msg);
            const T = o("WAWap").wap("bot", {
                type: isBotFeedbackMessage ? "feedback" : o("WAWap").DROP_ATTR,
                agent_engagement_type: I != null ? o("WAWap").CUSTOM_STRING(I) : o("WAWap").DROP_ATTR
            }, k);
            return [
                T,
                type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
            ];
        });
        return P.apply(this, arguments);
    }
    function N(msg, t, groupAgentParticipants) {
        const r = B(msg.invokedBotWid);
        return r != null && !r.equals(o("WAWebBotUtils").META_BOT_FBID_WID) && t.some((e)=>e.equals(r)) && !groupAgentParticipants.some((e)=>e.equals(r));
    }
    function M(e, groupAgentParticipants, isBotFeedbackMessage, isBotRespOrInvocationRevoke) {
        return !isBotFeedbackMessage && !isBotRespOrInvocationRevoke && e.some((e)=>groupAgentParticipants.some((t)=>t.equals(e)));
    }
    function w({ configuredGroupAgentParticipants, groupAgentParticipants, isBotFeedbackMessage, isBotRespOrInvocationRevoke, isOpenBotGroupSend, msg, omitNonParticipantInvokedBot, shouldGateInvokedBot }) {
        if (isBotFeedbackMessage) {
            const c = F(msg, isBotFeedbackMessage, isBotRespOrInvocationRevoke);
            if (c == null) {
                return [];
            }
            return [
                c
            ];
        }
        const d = new Map;
        if (isBotRespOrInvocationRevoke) {
            const m = F(msg, isBotFeedbackMessage, isBotRespOrInvocationRevoke);
            if (m != null) {
                d.set(m.toString(), m);
            }
            groupAgentParticipants.forEach((e)=>{
                d.set(e.toString(), e);
            });
            return Array.from(d.values());
        }
        const p = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && isOpenBotGroupSend;
        const _ = !p || A(msg);
        const f = p && _;
        if (f) {
            d.set(o("WAWebBotUtils").META_BOT_FBID_WID.toString(), o("WAWebBotUtils").META_BOT_FBID_WID);
        }
        const g = O({
            configuredGroupAgentParticipants,
            groupAgentParticipants,
            isOpenBotGroupSend,
            msg,
            omitNonParticipantInvokedBot,
            shouldGateInvokedBot
        });
        if (g != null && (groupAgentParticipants.some((e)=>e.equals(g)) || !p)) {
            d.set(g.toString(), g);
        }
        groupAgentParticipants.forEach((e)=>{
            if (e.isBot()) {
                d.set(e.toString(), e);
            }
        });
        if (!_) {
            d.delete(o("WAWebBotUtils").META_BOT_FBID_WID.toString());
        }
        return Array.from(d.values());
    }
    function A(msg) {
        if (o("WAWebMsgGetters").getIsRevoke(msg) || o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice()) {
            return true;
        }
        o("WAWebBotTos").refreshMetaAiOpenGroupNotice().catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getBotFanoutWids: Meta AI Open group notice refresh failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("meta-ai-open-group-notice-refresh-failed");
        });
        return false;
    }
    function F(msg, isBotFeedbackMessage, isBotRespOrInvocationRevoke) {
        if (isBotFeedbackMessage) {
            return B(msg.protocolMessageKey?.participant);
        }
        if (isBotRespOrInvocationRevoke) {
            return B(msg.botRespOrInvocationRevokeBotWid);
        }
        return null;
    }
    function O({ configuredGroupAgentParticipants, groupAgentParticipants, isOpenBotGroupSend, msg, omitNonParticipantInvokedBot, shouldGateInvokedBot }) {
        const s = B(msg.invokedBotWid);
        if (s == null) {
            return null;
        }
        if (groupAgentParticipants.some((e)=>e.equals(s))) {
            return s;
        }
        if (shouldGateInvokedBot || configuredGroupAgentParticipants.some((e)=>e.equals(s)) || omitNonParticipantInvokedBot && !(isOpenBotGroupSend && o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(s))) {
            return null;
        }
        return s;
    }
    function B(e) {
        if (e != null && e.isBot()) {
            return e;
        }
        return null;
    }
    l.encryptAndSendSenderKeyMsg = S;
    l.createBotFanoutNode = $;
}, 98);