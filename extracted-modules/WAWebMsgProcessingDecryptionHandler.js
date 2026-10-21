__d("WAWebMsgProcessingDecryptionHandler", [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotMsgDecryptError",
    "WAWebBotMsgSecretError",
    "WAWebCreateNackFromStanza",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebGroupAgentReceipts",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebIsOfficialClient",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOrphanBotMsgError",
    "WAWebPostE2eMessageRecvMetric",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSendRetryReceiptJob",
    "WAWebSignalCommonErrors",
    "WAWebWamEnumE2eFailureReason",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "gkx",
    "justknobx"
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
    const v = n("$InternalEnum").Mirrored([
        "SignalRetryable",
        "SignalDuplicateMessage",
        "UnknownDevice",
        "DeviceSentMessage",
        "InvalidProtobuf",
        "HsmMismatch",
        "BroadcastEphSettings",
        "OrphanBotMsg",
        "BotMsgMissingSecret",
        "BotMsgDecryptFailure",
        "Unknown"
    ]);
    const S = new Set([
        v.SignalRetryable
    ]);
    function R(e) {
        if (e.message === "errDuplicateMsg") {
            return v.SignalDuplicateMessage;
        }
        return v.SignalRetryable;
    }
    function L(e) {
        if (e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError) {
            return v.UnknownDevice;
        }
        if (e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError) {
            return R(e);
        }
        if (e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError) {
            return v.SignalDuplicateMessage;
        }
        if (e instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
            return v.DeviceSentMessage;
        }
        if (e instanceof o("WAWebHandleMsgError").MessageValidationError) {
            return v.InvalidProtobuf;
        }
        if (e instanceof o("WAWebHandleMsgCommon").HsmMismatchError) {
            return v.HsmMismatch;
        }
        if (e instanceof o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError) {
            return v.BroadcastEphSettings;
        }
        if (e instanceof r("WAWebOrphanBotMsgError")) {
            return v.OrphanBotMsg;
        }
        if (e instanceof r("WAWebBotMsgSecretError")) {
            return v.BotMsgMissingSecret;
        }
        if (e instanceof r("WAWebBotMsgDecryptError")) {
            return v.BotMsgDecryptFailure;
        }
        return v.Unknown;
    }
    function E(e) {
        const handlerState = {
            accessedEncs: new Set,
            pkOrMsgFailedEnc: null,
            skMsgFailedEnc: null
        };
        return {
            handleError: function(r, a) {
                const errorType = L(a);
                if (r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) {
                    handlerState.skMsgFailedEnc = {
                        enc: r,
                        error: a,
                        errorType
                    };
                } else {
                    handlerState.pkOrMsgFailedEnc = {
                        enc: r,
                        error: a,
                        errorType
                    };
                }
                P(e, {
                    enc: r,
                    error: a,
                    errorType
                });
            },
            canDecryptNext: function(n) {
                if (!r("gkx")("26258")) {
                    M();
                }
                const o = handlerState.pkOrMsgFailedEnc?.errorType;
                if (o != null && S.has(o)) {
                    return false;
                }
                handlerState.accessedEncs.add(n.e2eType);
                return true;
            },
            getResult: function(hasInactiveMsg, isOrphanAddon) {
                return I({
                    handlerState,
                    hasInactiveMsg,
                    isOrphanAddon,
                    parsedMsgPayload: e
                });
            }
        };
    }
    function k({ msgInfo }) {
        const { chat, ts } = msgInfo;
        if (chat.isStatus()) {
            const a = o("WATimeUtils").unixTimeWithoutClockSkewCorrection() - (ts + o("WATimeUtils").DAY_SECONDS);
            return a > 0;
        }
        return false;
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ handlerState, hasInactiveMsg, isOrphanAddon, parsedMsgPayload }) {
            const s = handlerState.skMsgFailedEnc ?? handlerState.pkOrMsgFailedEnc;
            const u = s != null && handlerState.accessedEncs.has(o("WAWebBackendJobs.flow").CiphertextType.Skmsg) && handlerState.skMsgFailedEnc == null;
            if (s == null || u) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
                    hasInactiveMsg,
                    isOrphanAddon
                };
            }
            $(parsedMsgPayload, handlerState);
            N(parsedMsgPayload, handlerState);
            const { enc, error, errorType } = s;
            let placeholderCreated = false;
            let retryReason;
            if (error instanceof o("WAWebSignalCommonErrors").SignalDecryptionError || error instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError || error instanceof o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError) {
                retryReason = o("WAWebSendRetryReceiptJob").getRetryReasonFromError(error);
                if (errorType !== v.SignalDuplicateMessage) {
                    if (!enc.hideFail) {
                        placeholderCreated = yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                            type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                            msgMeta: parsedMsgPayload.msgMeta,
                            msgInfo: parsedMsgPayload.msgInfo,
                            placeholderType: o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E,
                            placeholderAddReason: o("WAWebBackendJobsCommon").getPlaceholderAddReason(error, parsedMsgPayload)
                        });
                    }
                } else if (parsedMsgPayload.msgInfo.chat.isGroup()) {
                    o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "GroupLidInfra: duplicate-skip drop with no placeholder, skmsg = ",
                        ", group = ",
                        ", participant = ",
                        ""
                    ])), String(handlerState.accessedEncs.has(o("WAWebBackendJobs.flow").CiphertextType.Skmsg)), parsedMsgPayload.msgInfo.chat, parsedMsgPayload.msgInfo.author).sendLogs("grouplidinfra-duplicate-skip-drop", {
                        sampling: 0.01
                    });
                }
            }
            if (errorType === v.SignalRetryable || errorType === v.UnknownDevice) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                    retryCount: enc.retryCount,
                    retryReason,
                    placeholderCreated,
                    isOrphanAddon,
                    failedEncType: enc.e2eType
                };
            }
            if (errorType === v.SignalDuplicateMessage) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR,
                    failedEnc: enc
                };
            }
            if (errorType === v.DeviceSentMessage) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_VALIDATION_ERROR,
                    e2eFailureReason: error instanceof o("WAWebHandleMsgError").DeviceSentMessageError ? error.e2eFailureReason : undefined
                };
            }
            if (errorType === v.InvalidProtobuf) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_VALIDATION_ERROR,
                    e2eFailureReason: error instanceof o("WAWebHandleMsgError").MessageValidationError ? error.e2eFailureReason : undefined
                };
            }
            if (errorType === v.HsmMismatch) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH
                };
            }
            if (errorType === v.BroadcastEphSettings) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                    retryCount: enc.retryCount,
                    retryReason,
                    placeholderCreated,
                    e2eFailureReason: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_BROADCAST_STANZA_ATTRIBUTE
                };
            }
            if (errorType === v.OrphanBotMsg) {
                if (s.error instanceof r("WAWebOrphanBotMsgError")) {
                    return {
                        deferReason: s.error.reason,
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED,
                        targetMsgKey: s.error.targetMsgKey
                    };
                }
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
                };
            }
            if (errorType === v.BotMsgMissingSecret) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR,
                    nackReason: D()
                };
            }
            if (errorType === v.BotMsgDecryptFailure) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR,
                    nackReason: x(parsedMsgPayload)
                };
            }
            if (errorType === v.Unknown) {
                return {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
                };
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${errorType}`);
            })();
        });
        return T.apply(this, arguments);
    }
    function D() {
        if (r("justknobx")._("1714")) {
            return o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret;
        }
    }
    function x(parsedMsgPayload) {
        if (o("WAWebGroupAgentReceipts").isGroupAgentMsmsgDecryptNackEnabled(parsedMsgPayload)) {
            return o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret;
        }
    }
    function $(parsedMsgPayload, { pkOrMsgFailedEnc, skMsgFailedEnc }) {
        const { msgInfo, msgMeta } = parsedMsgPayload;
        const l = skMsgFailedEnc ?? pkOrMsgFailedEnc;
        if (l != null) {
            const { enc, error, errorType } = l;
            if (k(parsedMsgPayload)) {
                o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropExpired({
                    msgInfo,
                    msgMeta,
                    enc,
                    error: error instanceof o("WAWebHandleMsgError").MessageValidationError ? error : undefined
                });
                return;
            }
            switch(errorType){
                case v.SignalRetryable:
                case v.UnknownDevice:
                case v.HsmMismatch:
                case v.BroadcastEphSettings:
                case v.SignalDuplicateMessage:
                case v.OrphanBotMsg:
                    break;
                case v.InvalidProtobuf:
                case v.DeviceSentMessage:
                    {
                        o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidProtobuf({
                            msgInfo,
                            msgMeta,
                            enc,
                            error: error instanceof o("WAWebHandleMsgError").MessageValidationError ? error : undefined
                        });
                        break;
                    }
                case v.BotMsgMissingSecret:
                case v.BotMsgDecryptFailure:
                case v.Unknown:
                    o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInvalidStanzaFromDecryptedMessageInfo({
                        msgInfo,
                        msgMeta,
                        enc
                    });
            }
        }
    }
    function P({ msgBotInfo, msgInfo, msgMeta }, { enc, error, errorType }) {
        const R = o("WAWebMsgProcessingApiUtils").getFrom(msgInfo);
        o("WAWebPostE2eMessageRecvMetric").postFailureE2eMessageRecvMetric({
            enc,
            from: R,
            msgMeta,
            msgInfo,
            msgBotInfo,
            error: error instanceof o("WAWebHandleMsgError").MessageValidationError ? error : null
        });
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "decryptE2EPayload: msgId::",
            " e2eType:",
            " error:",
            ""
        ])), msgInfo.externalId, enc.e2eType, error.stack ?? String(error)).tags("messaging");
        switch(errorType){
            case v.SignalDuplicateMessage:
                break;
            case v.SignalRetryable:
            case v.UnknownDevice:
                {
                    if (!r("gkx")("26258")) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "decryptE2EPayload: e2eType:",
                            " error:",
                            ""
                        ])), enc.e2eType, error).tags("messaging").sendLogs("handleMsg: decryption error");
                    }
                    break;
                }
            case v.InvalidProtobuf:
                {
                    if (error instanceof o("WAWebHandleMsgError").MessageValidationError) {
                        if (o("WAWebIsOfficialClient").isUnofficialStanzaId(msgInfo.externalId)) {
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "decryptE2EPayload: e2eType:",
                                " error:",
                                ""
                            ])), enc.e2eType, error).tags("messaging").sendLogs(`handleMsg from UC: ${error.name}`, {
                                sampling: error.sendLogs === true ? 0.01 : error.sendLogs
                            });
                        } else if (r("gkx")("26259") && error instanceof o("WAWebHandleMsgError").MessageProtobufInvalidMessageTypes) {
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "decryptE2EPayload: e2eType:",
                                " error:",
                                ""
                            ])), enc.e2eType, error).tags("messaging").sendLogs(`(intern) handleMsg: ${error.name}`);
                        } else {
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "decryptE2EPayload: e2eType:",
                                " error:",
                                ""
                            ])), enc.e2eType, error).tags("messaging").sendLogs(`handleMsg: ${error.name}`, error.sendLogs === true ? undefined : {
                                sampling: error.sendLogs
                            });
                        }
                    }
                    break;
                }
            case v.DeviceSentMessage:
                {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " infoType:",
                        " isDirect:",
                        " error:",
                        ""
                    ])), enc.e2eType, msgInfo.type, msgInfo.isDirect, error).tags("messaging").sendLogs("handleMsg: parse device sent message error");
                    break;
                }
            case v.HsmMismatch:
                {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " error:",
                        ""
                    ])), enc.e2eType, error).tags("messaging").sendLogs("handleMsg: hsm mismatch error");
                    break;
                }
            case v.BroadcastEphSettings:
                {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " error:",
                        ""
                    ])), enc.e2eType, error).tags("messaging").sendLogs("handleMsg: failed to decrypt broadcast ephemeral settings");
                    break;
                }
            case v.OrphanBotMsg:
                {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " orphan bot msg deferred"
                    ])), enc.e2eType).tags("messaging").sendLogs("handleMsg: orphan bot message deferred");
                    break;
                }
            case v.BotMsgMissingSecret:
                {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " error:",
                        ""
                    ])), enc.e2eType, error).tags("messaging").sendLogs("handleMsg: bot message secret missing");
                    break;
                }
            case v.BotMsgDecryptFailure:
            case v.Unknown:
                {
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " error:",
                        ""
                    ])), enc.e2eType, error).tags("messaging").sendLogs("handleMsg: parse decrypted message error");
                    break;
                }
        }
    }
    function N(parsedMsgPayload, { pkOrMsgFailedEnc, skMsgFailedEnc }) {
        const a = skMsgFailedEnc ?? pkOrMsgFailedEnc;
        if (a != null && o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()) {
            const i = parsedMsgPayload.msgInfo.chat;
            if ((i.isUser() || i.isGroup()) && !k(parsedMsgPayload)) {
                let nackReason = null;
                switch(a.errorType){
                    case v.SignalRetryable:
                    case v.SignalDuplicateMessage:
                    case v.BroadcastEphSettings:
                    case v.UnknownDevice:
                    case v.OrphanBotMsg:
                        break;
                    case v.DeviceSentMessage:
                    case v.InvalidProtobuf:
                        {
                            nackReason = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
                            break;
                        }
                    case v.BotMsgMissingSecret:
                        {
                            nackReason = D() ?? o("WAWebCreateNackFromStanza").NackReason.ParsingError;
                            break;
                        }
                    case v.BotMsgDecryptFailure:
                        {
                            nackReason = x(parsedMsgPayload) ?? o("WAWebCreateNackFromStanza").NackReason.ParsingError;
                            break;
                        }
                    case v.HsmMismatch:
                    case v.Unknown:
                        {
                            nackReason = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
                            break;
                        }
                }
                if (nackReason != null) {
                    const c = parsedMsgPayload.msgInfo.externalId;
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "messageDrop: insert a debug placeholder for ",
                        ", reason: ",
                        ""
                    ])), c, a.errorType).tags("messaging");
                    o("WAWebHandleMsgProcess").processPlaceholderMsg({
                        type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                        msgInfo: parsedMsgPayload.msgInfo,
                        nackReason
                    });
                }
            }
        }
    }
    function M() {
        if (!r("gkx")("26258")) {
            const t = (n("cr:4122") == null ? undefined : n("cr:4122").isNextMessageDropped()) ?? null;
            if (t == null) {
                return;
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "Dropping incoming message with ",
                " error"
            ])), t);
            switch(t){
                case v.SignalRetryable:
                    throw new (o("WAWebSignalCommonErrors")).SignalDecryptionError("errSignalErr");
                case v.SignalDuplicateMessage:
                    throw new (o("WAWebSignalCommonErrors")).SignalDecryptionError("errDuplicateMsg");
                case v.InvalidProtobuf:
                    throw new (o("WAWebHandleMsgError")).MessageValidationError("test", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                case v.DeviceSentMessage:
                    throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(1, 1);
                default:
                    return;
            }
        }
    }
    l.DecryptionErrorType = v;
    l.createDecryptionHandler = E;
}, 98);