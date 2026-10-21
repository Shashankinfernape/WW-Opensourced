__d("WAWebSendMsgCreateFanoutStanza", [
    "Promise",
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebContactCollection",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebHandleMsgCommon",
    "WAWebHatchMetadataBotCopy",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCtwaAttributionNode",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebThreadMsgUtils",
    "WAWebTrustedContactsUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWasaHatchOutboundWrapper",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err"
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
    function h(e, ciphertext, type) {
        return {
            ciphertext,
            isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(ciphertext),
            participant: e,
            type
        };
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const t_sessionScope = t.sessionScope;
            if (t_sessionScope != null && t_sessionScope !== o("WAWebSessionScope").SessionScope.DEFAULT || t.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT || e.isHosted() || e.isBot() || e.isFbidBot() || !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()) {
                return t_sessionScope;
            }
            const r = yield o("WAWebSignalSessionApi").hasSignalSessions([
                e
            ], o("WAWebSessionScope").SessionScope.PQ);
            const a = r[0];
            if (a) {
                return o("WAWebSessionScope").SessionScope.PQ;
            }
            return t_sessionScope;
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n, r, o, a, i, l, s, u, c, d) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i, l, c, d, m, p, _, relayPlan, C) {
            const v = p?.kind === "schedule" ? p.originalMediaType : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i);
            const L = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i);
            const isBotInvokeMessage = o("WAWebBotBaseGating").isBotEnabled() && e.invokedBotWid?.isBot() === true;
            const k = o("WAWebBotBaseGating").isBotEnabled() && o("WAWebMsgGetters").getIsBotFeedbackMessage(e);
            const I = o("WAWebBotBaseGating").isBotEnabled() && o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, t);
            const isBotFeedbackMessageInAgentChat = k && t.isBot() || I;
            const D = k && !t.isBot() && !I;
            const isRevokeForMsgFromOrDeliveredToBot = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e);
            const $ = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(t);
            const P = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(t, i);
            const plan = P ?? o("WAWebCoexV2RelayEligibility").getCoexV2InvokedAgentSendPlan({
                hasFbidBotDevice: a.some((e)=>e.isFbidBot()),
                isBotInvokeMessage,
                isResendingMsg: l.isResendingMsg === true,
                isRevokeForMsgFromOrDeliveredToBot,
                relayPlan
            });
            const coexV2AgentSend = plan != null;
            if (l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT && a.length === 1 && o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) && !D && !o("WAWebBotUtils").isMetaAiBot(t) && !coexV2AgentSend) {
                const w = a[0];
                const A = o("WAWebUserPrefsMeUser").isMeAccount(w) ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(i, t) : i;
                let F = A;
                if (w.isBot() && isBotFeedbackMessageInAgentChat) {
                    F = yield o("WAWebE2EProtoGenerator").updateBotInvokeMsgProtoCopyForCapi({
                        message: A,
                        mentionedJidList: e.mentionedJidList
                    });
                }
                if (o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(t, w, e.subtype)) {
                    F = yield o("WAWebHatchMetadataBotCopy").genHatchOutboundCopy({
                        msg: e,
                        innerMessage: F
                    });
                }
                const O = o("WAWebCoexV2RelayEligibility").shouldUseCoexV2StatelessSession(m, w);
                const B = yield y(w, l);
                const W = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(w, 0, F, e, d, B, O);
                const { ciphertext, type } = W;
                let botBody = null;
                if (isBotFeedbackMessageInAgentChat || $ != null) {
                    botBody = o("WAWap").wap("bot", {
                        type: isBotFeedbackMessageInAgentChat ? "feedback" : o("WAWap").DROP_ATTR,
                        persona_type: $ ? o("WAWap").CUSTOM_STRING($) : o("WAWap").DROP_ATTR
                    });
                }
                const H = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(ciphertext) ? true : undefined;
                return {
                    deviceEncs: _ ? [
                        h(w, ciphertext, type)
                    ] : [],
                    shouldHaveIdentity: type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                    body: o("WAWap").wap("enc", {
                        v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                        type: o("WAWap").CUSTOM_STRING(type),
                        session_type: H ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
                        state: O && type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
                        mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(v),
                        "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i)),
                        native_flow_name: o("WAWebBackendJobsCommon").encodeMaybeNativeFlowName(L)
                    }, ciphertext),
                    botBody,
                    isPq: H
                };
            }
            let shouldHaveIdentity = false;
            const z = a.map((()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    const r = o("WAWebUserPrefsMeUser").isMeAccount(n) ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(i, t) : i;
                    const a = l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT ? o("WAWebWidFactory").asUserWidOrThrow(n) : o("WAWebWidFactory").asUserWidOrThrow(t);
                    yield o("WAWebICDCMetaApi").populateICDCMeta(a, r);
                    const p = c?.get(o("WAWebWidToJid").widToUserJid(a));
                    const f = p != null ? o("WAWap").wap("content_binding", null, p) : null;
                    try {
                        const shouldFanoutToBot = n.isBot() && (isBotInvokeMessage || D || isRevokeForMsgFromOrDeliveredToBot);
                        const isAgentFeedbackCopy = n.isBot() && isBotFeedbackMessageInAgentChat;
                        let b = yield R({
                            coexV2AgentSend,
                            content: r,
                            isAgentFeedbackCopy,
                            msg: e,
                            shouldFanoutToBot,
                            wid: n
                        });
                        if (o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(t, n, e.subtype)) {
                            try {
                                b = yield o("WAWebHatchMetadataBotCopy").genHatchOutboundCopy({
                                    msg: e,
                                    innerMessage: b
                                });
                            } catch (error) {
                                throw error instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError ? error : new (o("WAWebWasaHatchOutboundWrapper")).WAWebWasaHatchWrapError("WASA Hatch outbound wrap failed", error);
                            }
                        }
                        const useStatelessSession = o("WAWebCoexV2RelayEligibility").shouldUseCoexV2StatelessSession(m, n);
                        const k = yield y(n, l);
                        const I = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(n, 0, b, e, d, k, useStatelessSession);
                        const { ciphertext, type } = I;
                        if (type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
                            shouldHaveIdentity = true;
                        }
                        const N = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(ciphertext) ? true : undefined;
                        if (coexV2AgentSend && n.isFbidBot()) {
                            return {
                                coexV2AgentCopy: {
                                    agentWid: n,
                                    encType: type,
                                    sharedEnc: o("WAWebCoexV2SendContribution").genCoexV2AgentSharedEncNode({
                                        ciphertext,
                                        mediaType: v,
                                        msgProtobuf: i,
                                        retryCount: 0,
                                        type,
                                        useStatelessSession
                                    })
                                },
                                isPq: N,
                                node: null,
                                shouldFanoutToBot
                            };
                        }
                        const w = o("WAWap").wap("enc", {
                            v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                            type: o("WAWap").CUSTOM_STRING(type),
                            session_type: N ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
                            state: useStatelessSession && type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
                            mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(v),
                            "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i)),
                            native_flow_name: o("WAWebBackendJobsCommon").encodeMaybeNativeFlowName(L)
                        }, ciphertext);
                        return {
                            deviceEnc: _ ? h(n, ciphertext, type) : null,
                            isPq: N,
                            shouldFanoutToBot,
                            node: o("WAWap").wap("to", {
                                jid: o("WAWebCommsWapMd").DEVICE_JID(n)
                            }, w, f)
                        };
                    } catch (error) {
                        if (error instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError) {
                            throw error;
                        }
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "encryptAndSendUserMsg: encryption fail for ",
                            ": ",
                            ""
                        ])), String(n), error);
                        if (o("WAWebSendMsgCommonApi").isPrimaryDevice(n)) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "encryptAndSendUserMsg: encryption fail for primary device: ",
                                ""
                            ])), error).tags("messaging").sendLogs("encryption-fail-for-primary-device");
                        }
                        return null;
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
            const j = yield (g || (g = n("Promise"))).all(z);
            const K = S(j);
            const { botSuccessNodes, coexV2AgentCopies, deviceEncs, isPq, successNodes } = K;
            if (o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(plan, coexV2AgentCopies.length)) {
                return (g || (g = n("Promise"))).reject(r("err")("[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy"));
            }
            if (successNodes.length > 0 || botSuccessNodes.length > 0 || coexV2AgentCopies.length > 0) {
                const agentEngagementType = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(false, t, e);
                const ne = o("WAWebCoexV2SendContribution").finalizeCoexV2AgentContribution({
                    agentCopies: coexV2AgentCopies,
                    agentEngagementType,
                    botAttrs: C,
                    isFeedback: k,
                    msg: e,
                    plan
                });
                if (ne?.seedReceipts != null) {
                    yield ne.seedReceipts();
                }
                return {
                    deviceEncs,
                    isPq,
                    body: successNodes.length > 0 ? o("WAWap").wap("participants", null, successNodes) : null,
                    botBody: ne?.node ?? o("WAWebSendMsgBotStanza").genBotFanoutNode({
                        agentEngagementType,
                        botSuccessNodes,
                        isBotFeedbackMessage: k,
                        isBotFeedbackMessageInAgentChat,
                        personaType: $ ?? null
                    }),
                    hasCoexV2RepresentedTargets: ne != null,
                    coexV2SelfHosted: ne != null && plan != null ? plan.kind === "user_agent" || plan.relayPlan.selfIsCoexV2 : null,
                    shouldHaveIdentity
                };
            }
            return g.reject(r("err")("[messaging] encryptAndSendUserMsg: encryption fail for all devices"));
        });
        return v.apply(this, arguments);
    }
    function S(t) {
        const successNodes = [];
        const botSuccessNodes = [];
        const coexV2AgentCopies = [];
        const deviceEncs = [];
        t.forEach((t)=>{
            if (t != null) {
                if (t.coexV2AgentCopy != null) {
                    if (coexV2AgentCopies.length === 0) {
                        coexV2AgentCopies.push(t.coexV2AgentCopy);
                    } else {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[coexv2] user:agent send has multiple agent devices; relaying only the first"
                        ]))).sendLogs("coexv2-user-agent-multi-device-dropped");
                    }
                    return;
                }
                const l = t.node;
                if (l != null) {
                    if (t.shouldFanoutToBot) {
                        botSuccessNodes.push(l);
                    } else {
                        successNodes.push(l);
                        if (t.deviceEnc != null) {
                            deviceEncs.push(t.deviceEnc);
                        }
                    }
                }
            }
        });
        return {
            botSuccessNodes,
            coexV2AgentCopies,
            deviceEncs,
            isPq: t.some((e)=>e?.isPq === true) ? true : undefined,
            successNodes
        };
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ coexV2AgentSend, content, isAgentFeedbackCopy = false, msg, shouldFanoutToBot, wid }) {
            const u = coexV2AgentSend && wid.isFbidBot();
            if (u) {
                return o("WAWebCoexV2SendContribution").prepareCoexV2AgentPayload(content, msg);
            }
            let c = content;
            if (shouldFanoutToBot || isAgentFeedbackCopy) {
                c = yield o("WAWebE2EProtoGenerator").updateBotInvokeMsgProtoCopyForCapi({
                    message: content,
                    botMessageSecret: isAgentFeedbackCopy ? null : msg.botMessageSecret,
                    mentionedJidList: msg.mentionedJidList
                });
            }
            if (wid.isFbidBot()) {
                c = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(c);
            }
            if (wid.isBot()) {
                c = o("WAWebE2EProtoGenerator").updateBotProtobuf(c);
            }
            return c;
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ additionalBotBody, additionalBotShouldHaveIdentity = false, chatId, collectDeviceEncs = false, deviceList, groupData, metricReporter, msgProtobuf, msgRecord, option, scheduledMsgMetadata }) {
            const msgRecord_data = msgRecord.data;
            const { from, id, subtype, to } = msgRecord_data;
            const F = yield o("WAWebCoexV2RelayEligibility").resolveCoexV2SimpleSignalPolicy({
                chatId,
                stanzaTo: to
            });
            yield o("WAWebCoexV2RelayEligibility").deleteCoexV2SimpleSignalPrimarySessions(F, deviceList);
            try {
                metricReporter.sendPerfReporter?.startPrekeysFetchStage();
                const q = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                    aeaOptions: option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT ? {
                        isSendTimeFetch: true
                    } : undefined,
                    identityChanged: false,
                    sessionScope: option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT && (option.sessionScope == null || option.sessionScope === o("WAWebSessionScope").SessionScope.DEFAULT) && o("WAWebPQGatingUtils").isPq1on1MessageEnabled() ? o("WAWebSessionScope").SessionScope.PQ : option.sessionScope ?? o("WAWebSessionScope").SessionScope.DEFAULT,
                    wids: deviceList
                });
                const U = q?.missedPrekeyCount;
                if (U != null) {
                    metricReporter.sendPerfReporter?.setFetchedPrekeyCount(U);
                }
                metricReporter.sendPerfReporter?.postPrekeysFetchStage();
                o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
                    count: q?.depletedPrekeyCount,
                    prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                    messageType: option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                    deviceSizeBucket: option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT ? r("WAWebWamNumberToSizeBucket")(deviceList.length) : null
                });
            } catch (e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error"
                ]))).tags("messaging");
            }
            const H = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(msgRecord_data, chatId);
            const G = o("WAWebBotBaseGating").isBotEnabled() && o("WAWebMsgGetters").getIsBotFeedbackMessage(msgRecord_data) && chatId.isBot() || H;
            const z = o("WAWebThreadMsgUtils").getMsgAiThread(msgRecord_data);
            const hashedAiThreadId = z != null ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(z) : null;
            const K = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(msgRecord_data, H, z != null ? z.key.id : null);
            let Q = deviceList;
            if (option.isResendingMsg) {
                Q = yield o("WAWebSendMsgCommonApi").filterDeviceWithChangedIdentity(msgRecord, w(option, deviceList));
            }
            const X = Q.map((e)=>({
                    msgKey: id,
                    receiverId: e
                }));
            yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(X);
            metricReporter.sendPerfReporter?.startClientEncryptStage();
            const Y = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(msgRecord_data, T(from, Q));
            const editType = o("WAWebMsgGetters").getWamEditType(msgRecord_data);
            const Z = o("WAWebChatCollection").ChatCollection.get(chatId);
            const ee = {
                chat: Z,
                chatId,
                msgProtobuf,
                option,
                stanzaTo: to
            };
            const relayPlan = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(ee);
            const ne = yield b(msgRecord_data, to, Q, msgProtobuf, option, Y, editType, F, scheduledMsgMetadata, collectDeviceEncs, relayPlan, K);
            metricReporter.sendReporter?.setIsPq(ne.isPq);
            metricReporter.sendPerfReporter?.setIsPq(ne.isPq);
            metricReporter.sendPerfReporter?.postClientEncryptStage();
            let re = null;
            if (option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT) {
                const oe = scheduledMsgMetadata?.kind === "schedule" ? scheduledMsgMetadata.originalMediaType : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(msgProtobuf);
                re = o("WAWap").wap("enc", {
                    v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                    type: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
                    mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(oe)
                });
            }
            const ae = o("WAWebE2EProtoUtils").getBizNativeFlowName(msgProtobuf);
            const x_nativeFlowInteractiveMsg = msgRecord_data.nativeFlowInteractiveMsg;
            let le;
            const se = o("WAWebContactCollection").ContactCollection.get(chatId);
            const ue = F?.privacyMode ?? se?.privacyMode;
            if (ue != null) {
                var ce;
                le = (ce = o("WAWap")).wap("biz", {
                    host_storage: ce.INT(ue.hostStorage),
                    actual_actors: ce.INT(ue.actualActors),
                    privacy_mode_ts: ce.INT(ue.privacyModeTs),
                    native_flow_name: ce.MAYBE_CUSTOM_STRING(ae)
                });
            }
            let de;
            let me;
            let pe;
            let _e;
            const fe = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "createFanoutMsgStanza: create fanout for a message. found chat: ",
                ". found contact: ",
                ".\n      is lid: ",
                ". lid origin: ",
                ". isLidMigrated: ",
                "\n      contact has phone number: ",
                ""
            ])), Z != null, se != null, chatId.isLid(), Z?.lidOriginType, fe, se?.phoneNumber != null);
            if (chatId.isLid()) {
                if ((Z?.lidOriginType == null || Z?.lidOriginType === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) && se?.shareOwnPn !== true && se?.phoneNumber != null) {
                    de = se?.phoneNumber;
                }
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && se?.username != null) {
                    _e = se.username;
                }
            }
            if (to.isLid()) {
                if (fe && Z?.lidOriginType !== o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) {
                    pe = o("WAWebApiContact").getPhoneNumber(to);
                }
            } else if (to.isUser() && Z != null && Z.accountLid) {
                me = Z?.accountLid;
                if (!me.isLid()) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                        ""
                    ])), me.toLogString()).sendLogs("peer-recipient-lid-not-lid-fanout");
                }
            }
            if (le == null && ae != null && x_nativeFlowInteractiveMsg === true) {
                var ce;
                le = (ce = o("WAWap")).wap("biz", null, ce.wap("interactive", {
                    v: "1",
                    type: ce.CUSTOM_STRING("native_flow")
                }, ce.wap("native_flow", {
                    name: ce.CUSTOM_STRING(ae)
                })));
            } else {
                if (le == null && ae != null) {
                    le = o("WAWap").wap("biz", {
                        native_flow_name: o("WAWap").CUSTOM_STRING(ae)
                    });
                }
            }
            if (!option.isResendingMsg) {
                yield o("WAWebSendMsgCommonApi").updateIdentityRange(msgRecord, Q);
            }
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            const ge = Y?.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(from)));
            const he = ge != null ? o("WAWap").wap("sender_content_binding", null, ge) : null;
            const ye = additionalBotBody ?? ne.botBody;
            const Ce = ye == null ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(to) : null;
            const be = ye == null ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(false, to, msgRecord_data) : null;
            let ve = option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT && option.isResendingMsg === true || ne.hasCoexV2RepresentedTargets === true ? null : o("WAWebSendMsgBotStanza").genBotStanzaNode(K, Ce ?? null, be, z != null);
            let Se = false;
            let Re = null;
            if (ye == null) {
                Re = yield o("WAWebCoexV2SendContribution").buildCoexV2RelayContribution({
                    botAttrs: K,
                    editType,
                    msg: msgRecord_data,
                    msgProtobuf,
                    relayPlan
                });
                if (Re != null) {
                    ve = Re.node;
                    Se = Re.shouldHaveIdentity;
                    yield Re.seedReceipts();
                }
            }
            const Le = o("WAWebSendMsgMetaNode").genMetaNode({
                chatId,
                groupData,
                includeAttributes: {
                    origin: Z?.lidOriginType,
                    hashedAiThreadId,
                    appendHostedSenderIntent: Re != null || ne.hasCoexV2RepresentedTargets === true,
                    hasPairwisePayload: option.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                    sessionScope: option.sessionScope
                },
                msgProtobuf,
                msgRecord,
                scheduledMsgMetadata
            });
            let Ee = null;
            if (ne.shouldHaveIdentity || additionalBotShouldHaveIdentity || Se) {
                const ke = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
                Ee = o("WAWap").wap("device-identity", null, ke);
            }
            const Ie = yield o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(msgRecord_data, msgProtobuf, id.toString());
            const Te = (yield D(Z)) ?? (yield A(Z, chatId));
            let De;
            if (groupData != null) {
                De = groupData?.isLidAddressingMode === true ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
            }
            const xe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(Z);
            const stanza = o("WAWap").wap("message", {
                id: o("WAWap").CUSTOM_STRING(id.id),
                to: o("WAWebCommsWapMd").CHAT_JID(to),
                type: scheduledMsgMetadata?.originalStanzaType ?? o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf),
                peer_recipient_lid: me ? o("WAWebCommsWapMd").USER_JID(me) : o("WAWap").DROP_ATTR,
                peer_recipient_pn: pe ? o("WAWebCommsWapMd").USER_JID(pe) : o("WAWap").DROP_ATTR,
                peer_recipient_username: _e !== undefined ? o("WAWap").CUSTOM_STRING(o("WAWebUsernameTypes").serializeUsername(_e)) : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(msgProtobuf, subtype),
                device_fanout: option.isResendingMsg === true || G ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: de ? o("WAWebCommsWapMd").USER_JID(de) : o("WAWap").DROP_ATTR,
                addressing_mode: De != null ? o("WAWap").CUSTOM_STRING(De) : o("WAWap").DROP_ATTR
            }, ne.body, ye, re, Ee, le, Le, he, ve, Ie, Te, xe);
            if (!to.isGroup() && !to.isStatus()) {
                metricReporter.sendReporter?.setOppositeHasUsername(_e != null);
            }
            I(metricReporter, ne, Re, relayPlan);
            const ackTemplate = o("WAWebCommsAckParser").toCoreAckTemplate({
                id: id.id,
                class: "message",
                from: msgRecord_data.to,
                participant: null
            });
            return {
                stanza,
                ackTemplate,
                deviceEncs: ne.deviceEncs
            };
        });
        return k.apply(this, arguments);
    }
    function I(metricReporter, t, n, relayPlan) {
        const a = t.coexV2SelfHosted ?? (n != null ? relayPlan?.selfIsCoexV2 : null);
        if (a != null) {
            metricReporter.sendReporter?.setCoexV2SendMode(a);
        }
    }
    function T(from, t) {
        const n = new Map;
        n.set(from.user, o("WAWebWidFactory").asUserWidOrThrow(from));
        for (const r of t){
            if (!n.has(r.user)) {
                n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
            }
        }
        return Array.from(n.values());
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null) {
                return null;
            }
            const { tcToken, tcTokenTimestamp } = e;
            if (tcToken == null || tcTokenTimestamp == null || o("WAWebTrustedContactsUtils").isTokenExpired(tcTokenTimestamp, o("WAWebTrustedContactsUtils").TcTokenMode.Receiver)) {
                return null;
            }
            return o("WAWap").wap("tctoken", null, tcToken);
        });
        return x.apply(this, arguments);
    }
    let $ = null;
    let P = null;
    const N = new Map;
    const M = 5;
    function w(option, deviceList) {
        if (option.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT) {
            return deviceList;
        }
        return deviceList.filter((e)=>!e.isBot());
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebABProps").getABPropConfigValue("wa_nct_token_send_enabled") !== true || !t.isRegularUser()) {
                return null;
            }
            const n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAWebNctSalt");
            if (n == null) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB"
                ])));
                return null;
            }
            const r = e?.accountLid;
            if (r == null) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null"
                ])));
                return null;
            }
            try {
                let a;
                if (n === $ && P != null) {
                    a = P;
                } else {
                    a = o("WABase64").decodeB64(n);
                    $ = n;
                    P = a;
                    N.clear();
                }
                const i = r.toString();
                const l = N.get(i);
                if (l != null) {
                    return o("WAWap").wap("cstoken", null, l);
                }
                const s = new Uint8Array((yield o("WACryptoHmac").hmacSha256(a, new TextEncoder().encode(i))));
                if (N.size >= M) {
                    const u = N.keys().next().value;
                    if (u != null) {
                        N.delete(u);
                    }
                }
                N.set(i, s);
                return o("WAWap").wap("cstoken", null, s);
            } catch (error) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    ""
                ])), String(error));
                return null;
            }
        });
        return F.apply(this, arguments);
    }
    l.classifyFanoutEncNodes = S;
    l.genBotFanoutContent = R;
    l.createFanoutMsgStanza = E;
    l.genCsTokenBody = A;
}, 98);