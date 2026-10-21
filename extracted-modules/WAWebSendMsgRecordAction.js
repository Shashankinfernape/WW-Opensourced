__d("WAWebSendMsgRecordAction", [
    "Promise",
    "WAErrors",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebAddonSendProcess",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBlocklistCollection",
    "WAWebBotGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactBlockedErrorAction",
    "WAWebContactCollection",
    "WAWebDBProcessMessage",
    "WAWebDBUpdateMessageTable",
    "WAWebErrorType",
    "WAWebExternalCtxConfig",
    "WAWebExternalEntryPointPrefs",
    "WAWebFindChatAction",
    "WAWebGroupAgentNonInitiatorNux",
    "WAWebGroupMetadataCollection",
    "WAWebHandleMsgError",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMetaAiOpenGroupNux",
    "WAWebMsgCollection",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgUtilsBridge",
    "WAWebNoop",
    "WAWebOutgoingMessageTone",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionsBEUtils",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgJob",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebSendNotSpamAction",
    "WAWebSilentPaymentMsg",
    "WAWebSilentProtocolMsg",
    "WAWebSingleEmojiDailyUtils",
    "WAWebThreadMsgUtils",
    "WAWebUpdateUnreadChatAction",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "WAWebUtmBizUtils",
    "WAWebVoipInCallMessageSendLogger",
    "WAWebWamEnumMessageCappingActionType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWebcMessageSendWamEvent",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
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
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendMsgRecord"
            ])));
            const r = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(t, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS);
            r.sendReporter = r.sendReporter ?? r.createSendReporter();
            const remote = t.id.remote;
            const i = yield o("WAWebFindChatAction").findExistingChat(remote, "sendMsgRecord");
            if (i.contact.isEnterprise && !o("WAWebMsgGetters").getIsGroupMsg(t)) {
                const l = o("WAWebUpdateUtmAction").getUtmForChat(remote);
                if (l != null && o("WAWebUtmBizUtils").isUtmValid(i, l)) {
                    t.utm = l;
                }
            }
            t.isNewMsg = true;
            return D({
                type: "message",
                data: t
            }, i, r);
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(e, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS);
            const n = yield o("WAWebFindChatAction").findExistingChat(e.id.remote, "sendMsgRecord");
            return D({
                type: "addon",
                data: e
            }, n, t);
        });
        return v.apply(this, arguments);
    }
    const S = new Set([
        (h = o("WAWebMsgType")).MSG_TYPE.POLL_UPDATE,
        h.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
        h.MSG_TYPE.POLL_EDIT_ENCRYPTED,
        h.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
        h.MSG_TYPE.EVENT_RESPONSE
    ]);
    const R = new Set([
        h.MSG_TYPE.POLL_UPDATE,
        h.MSG_TYPE.EVENT_RESPONSE
    ]);
    function L(e, t) {
        if (r("WAWebWid").isGroup(t)) {
            if (e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
                return I(e.data);
            }
            return T(e.data);
        }
        return false;
    }
    function E(e) {
        if (e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
            return e.data.subtype !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit;
        }
        return k(e.data);
    }
    function k(data) {
        if (data.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted) {
            return data.selectedOptionLocalIds.length > 0;
        }
        return R.has(data.type);
    }
    function I(data) {
        if (data.forwardedFromWeb === true) {
            return false;
        }
        return data.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit || data.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL && data.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
    }
    function T(data) {
        if (data.type === o("WAWebMsgType").MSG_TYPE.REACTION) {
            return data.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
        }
        if (data.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted) {
            return data.selectedOptionLocalIds.length > 0;
        }
        if (data.kind === o("WAWebMsgType").MsgKind.PinInChat) {
            return data.pinMessageType === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL;
        }
        return S.has(data.type);
    }
    function D(e, t, n) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            const e_data = e.data;
            const l = r("nullthrows")(e_data.to);
            const e_data_id = e_data.id;
            const f_remote = e_data_id.remote;
            if (r("WAWebWid").isGroup(f_remote)) {
                yield r("WAWebGroupMetadataCollection").find(f_remote);
            }
            if (!t.isTrusted()) {
                r("WAWebSendNotSpamAction")(t).catch(r("WAWebNoop"));
            }
            const y = e_data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && [
                "sender_revoke",
                "admin_revoke"
            ].includes(e_data.subtype);
            const C = $(e_data);
            const b = e_data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e_data.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSetting;
            const v = o("WAWebMsgGetters").getIsReaction(e_data) && e_data.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
            if (!o("WAWebMsgGetters").getIsGroupMsg(e_data) && !y && !v && o("WAWebBlocklistCollection").BlocklistCollection.get(l)) {
                return (g || (g = n("Promise"))).reject(new (r("WAWebContactBlockedErrorAction"))("Contact is blocked", o("WAWebContactCollection").ContactCollection.assertGet(l)));
            }
            if (o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t) && e_data.subtype !== "sender_revoke") {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord blocked send in ACP2-restricted chat: ",
                    ""
                ])), e_data.id.toString());
                a.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_SEND_PRECONDITION_FAILED,
                    isTerminal: true,
                    qplFailReason: "acp2_send_blocked"
                });
                a.sendReporter = null;
                if (e.type === "message") {
                    const R = {
                        isSendFailure: true,
                        ack: o("WAWebAck").ACK.FAILED,
                        errorCode: o("WAWebErrorType").SendFailureErrorCode.Acp2Restricted
                    };
                    o("WAWebDBUpdateMessageTable").updateMessageTable(e_data_id, R);
                    e.data.set(R);
                    o("WAWebAddOnsUpdateSendStatesAction").updateAddOnSendStatesForMsgAction(e.data, R);
                } else {
                    yield o("WAWebAddonSendProcess").markAddonSendFailed(e.data);
                }
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            }
            let k;
            if (!y) {
                k = new (o("WAWebWebcMessageSendWamEvent")).WebcMessageSendWamEvent({
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(e_data),
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e_data),
                    messageIsForward: !!e_data.isForwarded
                });
            }
            if (!C) {
                o("WAWebUpdateUnreadChatAction").sendSeen({
                    chat: t,
                    threadId: o("WAWebBotGating").isAiChatThreadsEnabled() ? o("WAWebThreadMsgUtils").getMsgAiThread(e_data) : undefined
                });
            }
            if (L(e, f_remote)) {
                if (E(e)) {
                    o("WAWebMetaAiOpenGroupNux").maybeShowGroupAgentNuxes(t);
                } else {
                    o("WAWebGroupAgentNonInitiatorNux").maybeShowGroupAgentNonInitiatorNux(t);
                }
            }
            let I;
            if (r("WAWebWid").isGroup(f_remote) && e_data.messageSecret == null && o("WAWebSendMsgChatActionUtils").hasGroupAgentParticipant(t)) {
                const messageSecret = self.crypto.getRandomValues(new Uint8Array(32));
                if (e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
                    e.data.set({
                        messageSecret
                    });
                    yield o("WAWebDBProcessMessage").updateExistingMessages([
                        o("WAWebMsgDataFromModel").msgDataFromMsgModel(e.data)
                    ], f_remote);
                } else {
                    I = babelHelpers.extends({}, e.data, {
                        messageSecret
                    });
                }
            }
            if (e.type !== "addon" && e_data.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT && !C && !y) {
                o("WAWebMsgCollection").MsgCollection.trigger("new_msg_sent");
            }
            return (g || (g = n("Promise"))).resolve().then(()=>{
                if (e.type === "message") {
                    return P(e.data, a);
                }
                return o("WAWebAddonSendProcess").sendAddonProcess(I ?? e.data, a);
            }).then((()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    const r = e_data_id.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(f_remote) ? o("WAWebAck").ACK.READ : o("WAWebAck").ACK.SENT;
                    if (e.type === "message") {
                        e.data.updateAck(r);
                        o("WAWebAddOnsUpdateSendStatesAction").maybeUpdateAddOnAckForMsgAction(e.data, r);
                    }
                    o("WAWebBotGenTypingIndicatorMsg").maybeGenBotTypingIndicatorMessage(t, e_data);
                    if (k) {
                        k.markMessageSendT();
                        k.commit();
                    }
                    if (!y) {
                        o("WAWebSingleEmojiDailyUtils").maybeIncrementSingleEmojiDailyStatsCount(e_data);
                    }
                    if (e_data.utm != null) {
                        o("WAWebUpdateUtmAction").clearUtmAfterMessageSent(f_remote);
                    }
                    if (!C) {
                        o("WAWebVoipInCallMessageSendLogger").logInCallMessageSendIfNeeded(t);
                    }
                    yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(e_data);
                    if (![
                        o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                        o("WAWebMsgType").MSG_TYPE.REACTION,
                        o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
                    ].includes(e_data.type)) {
                        t.lastReceivedKey = e_data_id;
                    }
                    if (!y && !C) {
                        o("WAWebOutgoingMessageTone").playOutgoingMessageTone();
                    }
                    if (o("WAWebExternalCtxConfig").isCtxLoggingEnabled()) {
                        o("WAWebExternalEntryPointPrefs").deleteExternalEntryPoint(f_remote);
                    }
                    return {
                        messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
                        t: n.t,
                        count: n.count
                    };
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })()).then((t)=>{
                if (t.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK && e.type === "message") {
                    const n = e.data.afterReadDuration;
                    if (n != null && n > 0 && o("WAWebAfterReadUtils").isAfterReadEnabled() && !b) {
                        const expiredTimestamp = o("WATimeUtils").unixTime() + n;
                        o("WAWebDBUpdateMessageTable").updateMessageTable(e_data_id, {
                            expiredTimestamp
                        });
                        e.data.set({
                            expiredTimestamp
                        });
                    }
                }
                return t;
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status !== 408) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Phone responded ",
                        ""
                    ])), e.status).sendLogs("send-not-200");
                }
                a.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                    isTerminal: false,
                    qplFailReason: "server_status_code_error"
                });
                a.sendReporter = null;
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
                };
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAErrors").BufferTooLargeError, function() {
                a.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG,
                    isTerminal: true,
                    qplFailReason: "buffer_too_large"
                });
                a.sendReporter = null;
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebHandleMsgError").MessageValidationError, function() {
                a.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF,
                    isTerminal: true,
                    qplFailReason: "message_validation_error"
                });
                a.sendReporter = null;
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebHandleMsgError").AeaSendBlockedError, function() {
                a.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.AEA_SEND_RECONCILATION_FAILURE,
                    isTerminal: true,
                    qplFailReason: "aea_send_reconciliation_failure"
                });
                a.sendReporter = null;
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebHandleMsgError").MessageSentAckError, function(e) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord dropped msg: ",
                    ""
                ])), e_data.id.toString());
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Got error"
                ]))).catching(e).sendLogs("send-msg-server-nack-error");
                a.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                    isTerminal: true,
                    qplFailReason: "message_sent_ack_error"
                });
                a.sendReporter = null;
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN,
                    ackErrorCode: e.ackErrorCode
                };
            })).catch((t)=>{
                const l = r("getErrorSafe")(t);
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord dropped msg: ",
                    ""
                ])), e_data.id.toString());
                if (e.type === "message") {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Got error"
                    ]))).catching(l).tags("messaging").sendLogs("send-msg-error");
                } else {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Got error"
                    ]))).catching(l).tags("messaging", "addons").sendLogs(`send-addon-error: ${e_data.type}`);
                }
                a.sendReporter?.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                    isTerminal: true,
                    qplFailReason: "unknown_error"
                });
                a.sendReporter = null;
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            });
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e) || o("WAWebSilentPaymentMsg").isSilentPaymentMsg(e);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            if (e.isForwarded) {
                n = o("WAWebMsgUtilsBridge").createMessageForwardMetric(e);
            }
            try {
                const r = yield o("WAWebSendMsgJob").encryptAndSendMsg({
                    type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                    data: e
                }, t);
                if (n) {
                    n.then(o("WAWebMsgUtilsBridge").logMessageMetric);
                }
                if (r.error != null) {
                    throw new (o("WAWebHandleMsgError")).MessageSentAckError(r.error);
                }
                return {
                    t: parseInt(r.t, 10),
                    count: r.count
                };
            } catch (error) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "sendMsgRecord: send failure, msg: ",
                    ""
                ])), e.id.toString()).tags("messaging");
                let a = {
                    isSendFailure: true
                };
                if (error instanceof o("WAWebHandleMsgError").AeaSendBlockedError) {
                    a = babelHelpers.extends({}, a, {
                        ack: o("WAWebAck").ACK.FAILED
                    });
                } else if (error instanceof o("WAWebHandleMsgError").MessageSentAckError) {
                    a = babelHelpers.extends({}, a, {
                        ack: o("WAWebAck").ACK.FAILED
                    });
                    if (error.ackErrorCode === o("WAWebHandleMsgError").MessageSentAckErrorCode.NewChatMessagesCapped) {
                        a = babelHelpers.extends({}, a, {
                            errorCode: o("WAWebErrorType").SendFailureErrorCode.UserReachedMaxMonthlyLimitForNewMessages
                        });
                        if (o("WAWebIndividualNewChatMessageCappingLimitGatingUtils").isIndividualNewChatMessageCappingEnabled()) {
                            yield o("WAWebIndividualNewChatMessageCappingLimitUtils").resetCappingStatus(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.CAPPED);
                            o("WAWebCmd").Cmd.newChatMessageCappingStateChange();
                            new (o("WAWebMessageCappingWamEvent")).MessageCappingWamEvent({
                                messageCappingActionType: o("WAWebWamEnumMessageCappingActionType").MESSAGE_CAPPING_ACTION_TYPE.API,
                                userActionTarget: "nack_received",
                                extraAttributes: JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {})
                            }).commit();
                        }
                    }
                }
                o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, a);
                e.set(a);
                o("WAWebAddOnsUpdateSendStatesAction").updateAddOnSendStatesForMsgAction(e, a);
                throw error;
            }
        });
        return N.apply(this, arguments);
    }
    l.sendMsgRecord = y;
    l.sendAddonRecord = b;
}, 98);