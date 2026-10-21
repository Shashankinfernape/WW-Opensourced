__d("WAWebMessageProcessRenderable", [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotIncomingInvokeSystemMsg",
    "WAWebBotSignatureVerificationPostProcessor",
    "WAWebCoexV2MessageAckProjection",
    "WAWebContactSystemMsg",
    "WAWebCurrentUser",
    "WAWebGetPrivacyModeWhenSent",
    "WAWebGroupHistoryNoticeHandler",
    "WAWebHandleBizBotMsgs",
    "WAWebHandleMsgProcessUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandlePrivacyModeChange",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMaybeUpdateMessageThreadDetails",
    "WAWebMessageAssociation.flow",
    "WAWebMessagePostprocessRenderable",
    "WAWebMessageProcessDBPipeline",
    "WAWebMessageQueueImpl",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeCounters",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeTypes",
    "WAWebPreProcessOrderEphemeralExemption",
    "WAWebProtobufsProtocol.pb",
    "WAWebSagaSystemMsg",
    "WAWebStatusDBMessageInfo",
    "WAWebSyncGroupBotSupportFields",
    "WAWebWamEnumPlaceholderPopulationType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "cr:37261",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = n("cr:37261") ?? {};
    const g = f.opusProcessChat;
    function h(e, t) {
        const n = r("WAWebMsgKey").from({
            fromMe: e.fromMe,
            id: e.id,
            participant: e.participant,
            remote: t
        });
        if (o("WAWebCurrentUser").isEmployee()) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "processRenderableMessagesForLid: override msgKey: ",
                " --> ",
                ""
            ])), e.toString(), n.toString());
        }
        return n;
    }
    function y({ chat: t, messages: n, preMatChat: r }) {
        if (r == null || !t.isRegularUser()) {
            return n;
        }
        return n.map((e)=>{
            if (o("WAWebMessageAssociation.flow").isAssociatedMsg(e)) {
                return babelHelpers.extends({}, e, {
                    parentMsgKey: h(e.parentMsgKey, t)
                });
            }
            return e;
        });
    }
    function C(e) {
        return !!e.bizBotType && !o("WAWebMsgGetters").getIsCAPISupport(e) && !o("WAWebMsgGetters").getIsCoexV2Relay(e);
    }
    function b(e, t, n = false, r = false) {
        return !n && !r && e != null && o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(e) && t?.isLegacySingular === false && o("WAWebMsmsgMsgSecretCache").getBotGroupParticipantForResponse(t, e, true) != null;
    }
    function v(e, t, n, r) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            let i = y({
                chat: t.chat,
                messages: e,
                preMatChat: t.preMatChat
            });
            const l = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(t, n);
            const s = E(a);
            if (s != null) {
                i = i.map((e)=>babelHelpers.extends({}, e, {
                        placeholderPopulationType: s
                    }));
            }
            i = l == null ? i : i.map((e)=>babelHelpers.extends({}, e, {
                    privacyModeWhenSent: l
                }));
            const u = t.addressingMode;
            i = u == null ? i : i.map((e)=>babelHelpers.extends({}, e, {
                    groupAddressingMode: u
                }));
            const { decisionId: c, deliveryContextSourceType: d, sourceType: m, decisionSources: p } = n;
            if (c != null || d != null || m != null || p != null) {
                i = i.map((e)=>babelHelpers.extends({}, e, {
                        deliveryContextSourceType: d,
                        decisionId: c,
                        sourceType: m,
                        decisionSources: p
                    }));
            }
            i = yield o("WAWebPreProcessOrderEphemeralExemption").preProcessOrderEphemeralExemption(i);
            i = i.map((e)=>{
                const n = e.messageSecret != null ? e.mentionedJidList?.find(function(e) {
                    return e && r("WAWebWid").isWid(e) && e.isBot();
                }) : null;
                if (n != null) {
                    return babelHelpers.extends({}, e, {
                        invokedBotWid: n
                    });
                }
                return e;
            });
            i = yield o("WAWebMaybeUpdateMessageThreadDetails").maybeUpdateMessageThreadDetails(i);
            return o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(i);
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n, r, o, a, i) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i, l, s, m) {
            const p = yield o("WAWebHandleMsgProcessUtils").withoutProcessedBrazilPaymentStateUpdate({
                msgs: e,
                msgInfo: t,
                msgMeta: l,
                reparsing: m
            });
            if (p.length !== 0) {
                try {
                    const y = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.PreProcessing);
                    const S = t.chat;
                    const R = t.offline != null && !m;
                    let L = "online";
                    if (m) {
                        L = "reparsing";
                    } else if (R) {
                        L = "offline";
                    }
                    const E = yield v(p, t, i, s);
                    const I = E.newMsgs;
                    y?.();
                    if (o("WAWebMessagingGatingUtils").isWebReportingTokenDelayProcessingEnabled()) {
                        const T = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.ProcessReportingTokenInfo);
                        yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                            renderableMsgs: I
                        });
                        T?.();
                    }
                    const D = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.Processing);
                    I.forEach((e)=>{
                        if (e.id.fromMe && o("WAWebMsgGetters").getIsStatus(e)) {
                            o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(e.id, R, t.statusSetting);
                        }
                    });
                    let x = null;
                    const $ = [];
                    const P = [];
                    for(let N = 0; N < I.length; N++){
                        let M;
                        const O = I[N];
                        const B = O.messageSecret;
                        const W = !!(B && (M = O.id.remote) != null && M.isBot());
                        const q = O.invokedBotWid?.isBot() ?? false;
                        const U = O.botGroupParticipant;
                        const V = O.id.participant;
                        const H = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(O.botGroupParticipants, U);
                        const G = H?.participants ?? [];
                        P.push(...G.filter((e)=>e instanceof r("WAWebWid")));
                        const z = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
                            authorWid: O.id.participant,
                            botGroupParticipant: U,
                            chatWid: O.id.remote,
                            isBotInvoke: q
                        });
                        if (B && (W || q || z) && O.isForwarded !== true) {
                            if (q) {
                                x = O;
                            }
                            o("WAWebMsmsgMsgSecretCache").msmsgMsgSecretCache.addMsmsgMsgSecretToCache(O.id.toString(), B);
                        }
                        if (z && H != null) {
                            o("WAWebMsmsgMsgSecretCache").msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(O.id.toString(), H.participants, H.isLegacySingular);
                        }
                        if (O.id.remote.isGroup() && H != null && b(V, H, R, m)) {
                            $.push({
                                groupWid: O.id.remote,
                                participantWids: H.participants
                            });
                        }
                        I[N] = yield o("WAWebBotSignatureVerificationPostProcessor").verifyForwardedBotMessage(O);
                    }
                    o("WAWebSyncGroupBotSupportFields").maybeLazySyncGroupBotSupportFields(P, $, {
                        sourceGroupWid: S.isGroup() ? S : void 0
                    }).catch((e)=>{
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "processRenderableMessage: failed to refresh group agent profiles"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("handle-msg-refresh-group-agent-profiles-error");
                    });
                    if (x != null) {
                        const j = yield o("WAWebBotIncomingInvokeSystemMsg").createSysMsgForIncomingBotInvoke(x);
                        if (j) {
                            I.unshift(j);
                        }
                    }
                    let K;
                    if (S.isUser()) {
                        K = yield o("WAWebHandlePrivacyModeChange").handlePrivacyModeChangeAndCreateChat({
                            msgs: I,
                            chatWid: S,
                            bizInfo: i,
                            msgMeta: l,
                            msgInfo: t
                        });
                    }
                    if (o("WAWebBotBaseGating").isBotEnabled()) {
                        const Q = I.filter(C);
                        if (Q.length) {
                            const X = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(S, Q);
                            I.unshift(...X);
                        }
                    }
                    const Y = yield k(I, S);
                    if (Y != null) {
                        I.unshift(Y);
                    }
                    if (r("WAWebWid").isCAPISupportAccount(S) && !S.isSupportAgentBot()) {
                        const J = I.some((e)=>e.shouldShowSupportAISystemMessage === true);
                        if (J === true) {
                            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                chatId: S,
                                newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(S),
                                handleSingleMsgOrigin: "supportSagaInit"
                            });
                        }
                    }
                    const Z = {
                        msgInfo: t,
                        messageOverwriteOption: s,
                        msgs: I,
                        isOffline: R,
                        latestPrivacyMode: K?.latestPrivacyMode,
                        shouldQueryContactInfo: K?.shouldQueryContactInfo ?? false
                    };
                    const ee = R ? null : new (o("WAResolvable")).Resolvable;
                    const te = ee == null ? o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
                        flushImmediatly: false,
                        msgData: I
                    }) : o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
                        flushImmediatly: true,
                        msgData: I,
                        uiNotified: ee
                    });
                    te.then(()=>o("WAWebLimitSharingProtoUtils").applyLimitSharingHeldForStoredMsgs(I));
                    try {
                        I.forEach((e)=>void o("WAWebGroupHistoryNoticeHandler").maybeHandleGroupHistoryNotice(e));
                        if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || m) {
                            D?.();
                            const ne = o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
                            if (ne) {
                                o("WAWebOfflineResumeCounters").maybeLogAwaitUnflushedMsgWrite(R, o("WAWebMessageQueueImpl").getMessageQueueImpl());
                                yield te;
                            }
                            const re = o("WAWebMessagePostprocessRenderable").postprocessRenderableMessages(Z);
                            const oe = o("WAWebCoexV2MessageAckProjection").reconcileCoexV2ReceiptAcksAfterMessagePersisted(I, te, re, {
                                deferUntilMessagePersisted: R && !ne
                            });
                            if (R && o("WAWebOfflineHandler").OfflineMessageHandler.getResumeType() === o("WAWebOfflineResumeTypes").ResumeType.NonBlocking) {
                                (_ || (_ = n("Promise"))).all([
                                    re,
                                    oe
                                ]).catch((e)=>{
                                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "processRenderableMessage: non-blocking message processing failed"
                                    ]))).catching(r("getErrorSafe")(e)).tags("messaging").sendLogs("handle_msg: error storing/processing single message");
                                });
                                return;
                            }
                            yield (_ || (_ = n("Promise"))).all([
                                re,
                                oe
                            ]);
                            return;
                        }
                        yield o("WAWebCoexV2MessageAckProjection").reconcileCoexV2ReceiptAcksAfterMessagePersisted(I, te, null, {
                            deferUntilMessagePersisted: R
                        });
                    } finally{
                        ee?.resolve(void 0);
                    }
                } catch (e) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "processRenderableMessage: msgId:",
                        ", failed with error: ",
                        ""
                    ])), t.externalId, e).tags("messaging").sendLogs("handle_msg: error storing/processing single message");
                }
                return (_ || (_ = n("Promise"))).resolve();
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        if (e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE || e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.FUTURE_PROOF || e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG) {
            return null;
        }
        if (e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY) {
            return o("WAWebWamEnumPlaceholderPopulationType").PLACEHOLDER_POPULATION_TYPE.RETRY;
        }
        if (e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.PEER_RETRY) {
            return o("WAWebWamEnumPlaceholderPopulationType").PLACEHOLDER_POPULATION_TYPE.PEER_MESSAGE;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebLimitSharingGatingUtils").isOpusFlagOn() || g == null) {
                return null;
            }
            const n = o("WAWebABProps").getABPropConfigValue("opus_t");
            if (n == null) {
                return null;
            }
            const r = e.some((e)=>e.t != null && e.t >= n && !(e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (e.subtype === "sender_revoke" || e.subtype === "admin_revoke")));
            if (!r) {
                return null;
            }
            try {
                const i = yield o("WAWebApiChatCommon").getChatRecord(t);
                if (i?.limitSharing?.sharingLimited !== true) {
                    return null;
                }
                yield g(t.toString(), {
                    skipSystemMessage: true,
                    skipSharingLimitedCheck: true
                });
                return babelHelpers.extends({}, o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(t, {
                    sharingLimited: false,
                    trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN
                }), {
                    t: n
                });
            } catch (e) {
                if (e instanceof Error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[opus] incoming msg fallback failed"
                    ]))).catching(e).sendLogs("opus-incoming-fail");
                } else {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[opus] incoming msg fallback failed"
                    ]))).sendLogs("opus-incoming-fail");
                }
                return null;
            }
        });
        return I.apply(this, arguments);
    }
    l.overrideParentKeyForAssociations = y;
    l.isBizBotDisclosureMsg = C;
    l.shouldCollectGroupAgentRosterGossip = b;
    l.processRenderableMessages = R;
    l.maybeCreateOpusSystemMsg = k;
}, 98);