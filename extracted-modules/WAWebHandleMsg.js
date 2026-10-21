__d("WAWebHandleMsg", [
    "Promise",
    "WALogger",
    "WAParsableWapNode",
    "WATimeUtils",
    "WAWap",
    "WAWebApiContact",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2UsernameInfoUpdate",
    "WAWebCreateNackFromStanza",
    "WAWebDBReportingTokenUtils",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebGetMessageCache",
    "WAWebGroupAgentReceipts",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebHandleDeferredBotOrphan",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes.flow",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebMaybePostOfflineCountTooHighMetric",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMessageQueueImpl",
    "WAWebMessageQueueTimeout",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptApi",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPaymentsODS",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebPostUnknownStanzaMetric",
    "WAWebProcessMsgInfoForLid",
    "WAWebSessionScope",
    "WAWebSetUsernameJob",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "getErrorSafe",
    "gkx"
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
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a = {}) {
            const i = a;
            const l = i.isGroupStatusStanza;
            const v = l === void 0 ? false : l;
            const S = i.isStatusStanza;
            const E = S === void 0 ? false : S;
            const D = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
            if (D.error) {
                if (r("gkx")("26258")) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handleMsg: error while parsing message stanza"
                    ]))).tags("messaging");
                } else {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleMsg: error while parsing message stanza: ",
                        ", node: ",
                        ""
                    ])), D.error, t.toString()).tags("messaging");
                }
                o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t);
                const $ = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(t);
                if ($.error) {
                    if ($.error instanceof o("WAParsableWapNode").XmppParsingFailure) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            ""
                        ])), $.error).tags("messaging").sendLogs("msg-stanza-parsing-failed-xmpp-no-ack", {
                            sampling: 0.01
                        });
                    } else {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage"
                        ]))).tags("messaging").sendLogs("msg-stanza-parsing-failed-no-ack", {
                            sampling: 0.01
                        });
                    }
                    o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidStanza(t);
                    return (R || (R = n("Promise"))).resolve(k(t, o("WAWebCreateNackFromStanza").NackReason.ParsingError, E));
                }
                const P = $.success;
                const { externalId: N, msgInfo: M, offline: w, type: A } = P;
                let F = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
                if (A == null) {
                    F = o("WAWebCreateNackFromStanza").NackReason.UnrecognizedStanzaType;
                    o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropUnknownMessageType(t);
                } else if (D.error instanceof o("WAParsableWapNode").XmppParsingFailure && D.error?.reason === `${o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza}`) {
                    F = o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza;
                    o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropForCoexV2RelayOrHostedCompanion(t, $.success.from);
                } else {
                    o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidStanza(t);
                }
                o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").maybeInsertDebugPlaceholder({
                    externalId: N,
                    nackReason: F,
                    msgInfo: M,
                    offline: w
                });
                if (D.error instanceof o("WAParsableWapNode").XmppParsingFailure) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "failedParsingMessage: ",
                        ""
                    ])), D.error).tags("messaging").sendLogs("msg-stanza-parsing-failed-xmpp", {
                        sampling: 0.01
                    });
                } else {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "failedParsingMessage"
                    ]))).tags("messaging").sendLogs("msg-stanza-parsing-failed", {
                        sampling: 0.01
                    });
                }
                return (R || (R = n("Promise"))).resolve(k(t, F, E));
            }
            const O = D.success;
            if (v) {
                O.msgMeta.isGroupStatus = true;
            }
            if (E) {
                O.msgMeta.isStatusStanza = true;
            }
            o("WAWebMaybePostOfflineCountTooHighMetric").maybePostOfflineCountTooHigh(O);
            if (O.dehydratedPaymentNode === "pay") {
                o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed();
            } else if (O.dehydratedPaymentNode === "transaction") {
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped();
            }
            const { encs: B, ghsReportingTokenInfos: W, msgBotInfo: q, msgInfo: U, msgMeta: V } = O;
            U.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs();
            if (U.offline != null) {
                o("WAWebOfflineHandler").OfflineMessageHandler.addOfflinePendingMessage();
                o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
            }
            const H = 1;
            if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
                delete O.msgInfo.offline;
            }
            if (n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, L, {
                isGroupStatusStanza: v,
                isStatusStanza: E
            })) {
                o("WAWebHandleMsgSendReceipt").sendReceipt(O.msgInfo, O.msgMeta, {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS
                });
                return null;
            }
            const G = !!O.msgInfo.offline;
            const z = U.externalId;
            return o("WAWebMessageReceiveFlow").trackMessageReceive({
                chatType: U.type,
                isOffline: G,
                queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
                queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
                stanzaId: z,
                stanzaType: V.type
            }, function(e) {
                return o("WAWebMessageQueue").onMessageQueue({
                    chatWid: U.chat,
                    isOffline: G,
                    msgCategory: U.category,
                    action: e
                }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "msg"));
            }, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMsg: chat=",
                    " id=",
                    " offline=",
                    ""
                ])), U.chat.toLogString(), U.externalId, U.offline ?? "").tags("messaging");
                U.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs();
                const a = U.metaFrom;
                if (a != null && o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(U.author, a) && !o("WAWebUserPrefsMeUser").isMeAccount(a)) {
                    const i = yield T(t, U, a, E);
                    if (i != null) {
                        return i.response;
                    }
                }
                const l = o("WAWebCoexV2UsernameInfoUpdate").maybeGetCoexV2UsernameInfoUpdatePlan(U, V);
                yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
                    msgInfo: U,
                    msgMeta: V
                });
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                    const s = [];
                    if (U.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP) {
                        const u = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                            userId: o("WAWebWidFactory").asUserWidOrThrow(U.author),
                            username: U.participantUsername
                        });
                        if (u) {
                            s.push(u);
                        }
                    } else if (U.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) {
                        U.bclParticipants.forEach((e)=>{
                            const n = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                                userId: o("WAWebWidFactory").asUserWidOrThrow(e.peerRecipientLid ?? e.wid),
                                username: e.peerRecipientUsername
                            });
                            if (n) {
                                s.push(n);
                            }
                        });
                    } else if (U.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) {
                        let c;
                        const d = U.participantLid || (c = U.participant) != null && c.isLid() ? U.participant : null;
                        const m = d ? o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                            userId: o("WAWebWidFactory").asUserWidOrThrow(d),
                            username: U.participantUsername
                        }) : null;
                        if (m) {
                            s.push(m);
                        }
                    } else {
                        let S;
                        let R;
                        if (l == null) {
                            const k = o("WAWebWidFactory").asUserWidOrThrow(U.author);
                            if (U.username == null && U.senderPn != null && k.isLid()) {
                                s.push({
                                    userId: k,
                                    deleteUsername: true,
                                    usernameCountryCode: U.senderCountryCode ?? void 0
                                });
                            } else {
                                const x = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                                    userId: k,
                                    username: U.username,
                                    usernameCountryCode: U.senderCountryCode
                                });
                                if (x) {
                                    s.push(x);
                                }
                            }
                            if (U.peerRecipientLid) {
                                R = o("WAWebWidFactory").asUserWidOrThrow(U.peerRecipientLid);
                            } else if (U.chat.isLid()) {
                                R = o("WAWebWidFactory").asUserWidOrThrow(U.chat);
                            }
                            S = U.peerRecipientUsername;
                        } else {
                            if (l.usernameInfoUpdate != null) {
                                s.push(l.usernameInfoUpdate);
                            }
                            R = l.peerRecipientUsernameInfo?.userId;
                            S = l.peerRecipientUsernameInfo?.username;
                        }
                        const N = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                            userId: R,
                            username: S
                        });
                        if (N) {
                            s.push(N);
                        }
                    }
                    if (s.length > 0) {
                        try {
                            const M = yield o("WAWebSetUsernameJob").setUsernamesJob(s);
                            yield o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(s, M, "handleMsg");
                        } catch (e) {
                            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "handleMsg: failed to learn usernames"
                            ]))).catching(r("getErrorSafe")(e)).tags("messaging", "username").sendLogs("handle-msg-username-learning-failed");
                        }
                    }
                }
                const w = o("WAWebMsgProcessingApiUtils").messageInfoToKey(U);
                if (W != null && W.length > 0) {
                    yield o("WAWebGroupHistoryReportingTokenDBUtils").storeGroupHistoryReportingTokenInfos(w.toString(), W, false);
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] Stored ",
                        " reporting tokens for bundle ",
                        ""
                    ])), W.length, w.toString()).tags("messaging", "wa-ice", "group-history");
                }
                if (V.isUnavailable) {
                    o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                        msgKey: w,
                        stanzaId: U.externalId,
                        msgTs: U.ts,
                        incomingMsgReportingTokenInfo: O.reportingTokenInfo
                    });
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "handleMessage: msgId::",
                        ", get fanout placeholder"
                    ])), U.externalId).tags("messaging");
                    let A = o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT;
                    if (q != null) {
                        A = o("WAWebHandleMsgTypes.flow").PlaceholderType.BOT_UNAVAILABLE_FANOUT;
                    } else if (V.isHostedMsgUnavailable === true) {
                        A = o("WAWebHandleMsgTypes.flow").PlaceholderType.HOSTED_UNAVAILABLE_FANOUT;
                    } else if (V.isViewOnceUnavailable === true) {
                        A = o("WAWebHandleMsgTypes.flow").PlaceholderType.VIEW_ONCE_UNAVAILABLE_FANOUT;
                    } else if (V.isAcpUnavailable === true) {
                        A = o("WAWebHandleMsgTypes.flow").PlaceholderType.ACP_UNAVAILABLE_FANOUT;
                    }
                    yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                        type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                        msgMeta: V,
                        msgInfo: U,
                        placeholderType: A
                    });
                    o("WAWebMessageReceiveFlow").trackMessageReceiveReceipt(z, o("WAWebHandleMsgSendReceipt").sendReceipt(U, V, {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
                    }), o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL).catch((e)=>{
                        o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "sendReceipt failed for unavailable/backfill message"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("send-receipt-backfill-error", {
                            sampling: 0.01
                        });
                    });
                    return null;
                }
                if ((n("cr:4122") == null ? void 0 : n("cr:4122").consumeSkipDecryptRequest(t, L, {
                    isGroupStatusStanza: v,
                    isStatusStanza: E
                })) === true) {
                    yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                        type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                        msgMeta: V,
                        msgInfo: U,
                        placeholderType: o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E
                    });
                    o("WAWebHandleMsgSendReceipt").sendReceipt(U, V, {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
                    }).catch((e)=>{
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "sendReceipt failed for a debug-held message"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("send-receipt-debug-held-error", {
                            sampling: 0.01
                        });
                    });
                    return null;
                }
                const F = o("WAWebMsgProcessingApiUtils").getFrom(U);
                const G = o("WAWebStatusSessionGatingUtils").isIncomingStatusSessionContext({
                    from: F,
                    isGroupStatus: V.isGroupStatus,
                    metaSessionScope: V.metaSessionScope
                });
                let j;
                if (G) {
                    j = o("WAWebStatusSessionGatingUtils").shouldUseStatusSessionForIncomingMessage(V.metaSessionScope) ? o("WAWebSessionScope").SessionScope.STATUS : void 0;
                } else if (B.some((e)=>e.sessionType === "pq")) {
                    j = o("WAWebSessionScope").SessionScope.PQ;
                }
                if (F.isStatus() || V.isGroupStatus === true) {
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[status-session] grpStatus=",
                        " scope=",
                        " metaScope=",
                        ""
                    ])), String(V.isGroupStatus === true), j ?? o("WAWebSessionScope").SessionScope.DEFAULT, V.metaSessionScope ?? "none").tags("messaging");
                }
                const Q = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(O, o("WAWebHandleMsgProcess").processDecryptedMessageProto, j, {
                    awaitMessageWrites: o("WAWebMessageQueueImpl").getMessageQueueImpl() === "one_queue"
                });
                if (Q.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED) {
                    o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                        msgKey: w,
                        stanzaId: U.externalId,
                        msgTs: U.ts,
                        incomingMsgReportingTokenInfo: O.reportingTokenInfo
                    });
                    yield o("WAWebHandleDeferredBotOrphan").handleDeferredBotOrphan({
                        canNack: I(O),
                        decryptResult: Q,
                        input: O,
                        node: t
                    });
                    return null;
                }
                if (U.offline != null) {
                    o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(Q.result);
                }
                if (Q.result !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS) {
                    o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                        msgKey: w,
                        stanzaId: U.externalId,
                        msgTs: U.ts,
                        incomingMsgReportingTokenInfo: O.reportingTokenInfo
                    });
                }
                const X = Q.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS && o("WAWebGroupAgentReceipts").shouldSendGroupAgentDeliveryReceipt(O);
                if (Q.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR && I(O)) {
                    o("WAWebGetMessageCache").getMessageCache().addMessages([
                        {
                            duplicateMsgReceiptInfo: {
                                externalId: U.externalId,
                                from: o("WAWebMsgProcessingApiUtils").getFrom(U),
                                author: U.author,
                                msgInfo: U,
                                msgMeta: V,
                                enc: Q.failedEnc || B[0],
                                hasHideFailEnc: B.some((e)=>e.hideFail),
                                msgReceivedTimes: H
                            }
                        }
                    ], U.offline == null);
                } else if (U.offline == null || U.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer || o("WAWebHandleMsgSendReceipt").isCoexV2SenderReceiptMessage(U) || o("WAWebHandleMsgSendReceipt").isCoexV2PeerDeliveryReceiptMessage(U) || V.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify || X || Q.result !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS && Q.result !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR) {
                    o("WAWebMessageReceiveFlow").trackMessageReceiveReceipt(z, o("WAWebHandleMsgSendReceipt").sendReceipt(U, V, Q, {
                        canNack: I(O),
                        sendsGroupAgentDeliveryReceipt: X
                    }), Q.result).catch((e)=>{
                        o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "sendReceipt failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("send-receipt-error", {
                            sampling: 0.01
                        });
                    });
                } else {
                    o("WAWebGetMessageCache").getMessageCache().addMessages([
                        {
                            receiptInfo: {
                                externalId: U.externalId,
                                from: o("WAWebMsgProcessingApiUtils").getFrom(U),
                                author: U.author,
                                receiptClass: o("WAWebDeliveryReceiptClassUtils").getDeliveryReceiptClass(F, V)
                            }
                        }
                    ], false);
                }
                return null;
            }));
        });
        return E.apply(this, arguments);
    }
    function k(e, t, n) {
        return o("WAWebCreateNackFromStanza").createNackFromStanza(n ? new (o("WAWap")).WapNode("status", e.attrs, e.content) : e, t);
    }
    function I({ encs: t, msgMeta: n }) {
        const r = t.some((e)=>e.hideFail);
        if (r) {
            return o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(n) || o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(n);
        }
        return n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text || n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media || n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify || n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll;
    }
    function T(e, t, n, r) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            let i;
            try {
                i = (yield o("WAWebApiContact").getContactRecord(n))?.isHosted;
            } catch (n) {
                o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] failed to read peer hosted state"
                ]))).catching(r("getErrorSafe")(n)).sendLogs("coexv2-peer-hosted-state-read-failed");
                o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropDBOperationFailed(e);
                x(t.offline);
                return {
                    response: k(e, o("WAWebCreateNackFromStanza").NackReason.DBOperationFailed, a)
                };
            }
            if (i === false) {
                o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay dropped: peer is not hosted"
                ]))).sendLogs("coexv2-relay-peer-not-hosted");
                o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropForCoexV2RelayOrHostedCompanion(e, o("WAWebMsgProcessingApiUtils").getFrom(t));
                x(t.offline);
                return {
                    response: k(e, o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza, a)
                };
            }
            return null;
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        if (e != null) {
            o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS);
        }
    }
    l.default = L;
}, 98);