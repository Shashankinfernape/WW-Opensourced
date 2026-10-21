__d("WAWebHandleMsgProcess", [
    "Promise",
    "WACryptoPkcs7",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonQueryUtils",
    "WAWebApiDeferredMessagesStorage",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendJobs.flow",
    "WAWebCoexV2PushnameUpdate",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebConditionalRevealPreProcessor",
    "WAWebCurrentUser",
    "WAWebDBMsgUtils",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGetMessageCache",
    "WAWebGetPlatformFromStanzaId",
    "WAWebHandleCloudApiThreadControlNotification",
    "WAWebHandleMsgError",
    "WAWebHandleMsgProcessUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandlePushnameUpdate",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebLogMissingGroupParticipantMappings",
    "WAWebLogReceivedMessages",
    "WAWebMessageAssociationConstants",
    "WAWebMessageProcessPlaceholder",
    "WAWebMessageProcessRenderable",
    "WAWebMessageSecretLocationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebParsedProtocolMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineActionUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumDsmError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWasaRootSecretWriter",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "cr:37440",
    "cr:37441",
    "cr:402",
    "decodeProtobuf",
    "isStringNullOrEmpty",
    "justknobx"
], function(t, n, r, o, a, i, l) {
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
    let L;
    let E;
    let k;
    let I;
    const T = n("cr:37440") ?? {};
    const { castToAddonMsgData: D, getParentMsgKey: x } = T;
    const $ = n("cr:37441") ?? {};
    const P = $.isUnifiedInfraEnabledForType;
    function N({ info: t, plaintext: n, quarantineExtractedText: r }) {
        return {
            deviceSent: null,
            senderKey: null,
            rootSecretDistribute: null,
            storeMsg: null,
            renderableMsgs: [
                babelHelpers.extends({}, o("WAWebMsgProcessingApiUtils").generateBaseMsg(t), {
                    type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
                    kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
                    quarantineOriginalProtobuf: n.slice().buffer,
                    quarantineExtractedText: r
                })
            ]
        };
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { bizInfo: i, decrypted: l, e2eInfo: s, hsmInfo: u, info: c, isPadded: d } = e;
            const m = d === void 0 ? true : d;
            const { msgBotInfo: p, msgMeta: _, paymentInfo: f, reparsing: g } = e;
            const h = g === void 0 ? false : g;
            const T = e.reportingTokenInfo;
            const D = s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg ? false : m;
            let x = D ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(l)) : new Uint8Array(l);
            let $ = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, x);
            o("WAWebVerifyProtobufMsgObjectKeys").verifyProtobufMessageObjectKeys($);
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
                context: o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext.Receiver,
                proto: $,
                stanzaId: c.externalId
            });
            if (!h && (n("cr:402") == null ? void 0 : n("cr:402").shouldDropAeaWassMessage(c, $.messageContextInfo)) === true) {
                throw new (o("WAWebHandleMsgError")).MessageValidationError("CoEx relay message without a valid attestation", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.WASS_INVALID_ATTESTATION);
            }
            let P = null;
            const M = $.deviceSentMessage?.message?.conditionalRevealMessage;
            const w = $.conditionalRevealMessage ?? M;
            if (w != null) {
                o("WAWebConditionalRevealPreProcessor").assertScheduledMsgStanzaType(_?.type);
                const K = $.conditionalRevealMessage == null && M != null ? $.deviceSentMessage?.destinationJid ?? c.chat?.toString() ?? "" : c.chat?.toString() ?? "";
                let Q = null;
                try {
                    Q = o("WAWebWidFactory").createWid(K);
                } catch (e) {
                    Q = null;
                }
                if (Q != null && (yield o("WAWebLimitSharingAcp2HideReceivedMsgs").hideScheduledMsgInAcp2RestrictedChat({
                    chatWid: Q,
                    messageType: c.type,
                    t: c.ts
                }))) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] hidden in ACP2-restricted chat, skip processing msgId=",
                        ""
                    ])), c.externalId);
                    return {
                        hasInactiveMsg: false
                    };
                }
                const X = c.author != null && !o("WAWebUserPrefsMeUser").isMeAccount(c.author) ? c.author.toString() : null;
                const Y = yield o("WAWebConditionalRevealPreProcessor").maybePreProcessConditionalRevealForReceive({
                    conditionalRevealMessage: w,
                    msgId: c.externalId,
                    outerMessageContextInfo: $.messageContextInfo,
                    rawChatJid: K,
                    reportingTokenInfo: T,
                    senderJid: X,
                    stanzaScheduledMsgMeta: _?.scheduledMsgMeta ?? null
                });
                if (Y.proto != null && Y.protoBytes != null) {
                    $ = Y.proto;
                    x = Y.protoBytes;
                    o("WAWebVerifyProtobufMsgObjectKeys").verifyProtobufMessageObjectKeys($);
                    o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
                        context: o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext.Receiver,
                        proto: $,
                        stanzaId: c.externalId
                    });
                }
                P = Y.scheduledMsgViewMode;
                if (Y.isRevealPending) {
                    const J = c.author != null && o("WAWebUserPrefsMeUser").isMeAccount(c.author);
                    if (!J) {
                        o("WAWebLogReceivedMessages").logConditionalRevealMessageReceive({
                            chatWid: c.chat,
                            clientReceivedTsMillis: c.clientReceivedTsMillis,
                            msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                            offline: j(c.offline),
                            tsMillis: c.ts * 1000
                        });
                    }
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] reveal-pending, skip processing msgId=",
                        ""
                    ])), c.externalId);
                    return {
                        hasInactiveMsg: false
                    };
                }
            }
            const Z = o("WAWebMsgProcessingApiUtils").getFrom(c);
            const ee = s.retryCount > 0 && o("WAWebMsgProcessingApiUtils").isRevokeInfo(c) || h;
            const te = ee ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE;
            let ne = null;
            if (h) {
                ne = r("justknobx")._("5752") ? yield o("WAWebQuarantineActionUtils").getQuarantineAction($, Z) : o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine;
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[processDecryptedMessageProto] reparsing msgId=",
                    ""
                ])), c.externalId).tags("messaging");
                const re = ne === o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: $,
                    paymentInfo: f,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: T,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: x
                }) : N({
                    info: c,
                    plaintext: x,
                    quarantineExtractedText: o("WAWebQuarantineActionUtils").maybeGetQuarantineText(ne)
                });
                if (re.renderableMsgs == null) {
                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "parsed render able msgs not reparsed as expected"
                    ])));
                } else {
                    const oe = o("WAWebConditionalRevealPreProcessor").applyScheduledMsgViewMode(re.renderableMsgs, P);
                    o("WAWebHandleMsgValidate").renderableMessagesValidation({
                        renderableMsgs: oe,
                        msgMeta: _,
                        info: c,
                        proto: $,
                        bizInfo: i
                    });
                    o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                        info: c,
                        proto: $,
                        renderableMsgs: oe
                    });
                    if (!o("WAWebMessagingGatingUtils").isWebReportingTokenDelayProcessingEnabled()) {
                        yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                            renderableMsgs: oe
                        });
                    }
                    const ae = F({
                        renderableMsgs: oe,
                        reparsing: true,
                        bizInfo: i,
                        msgMeta: _,
                        paymentInfo: f,
                        info: c,
                        messageOverwriteOption: te
                    });
                    const { hasInactiveMsg: ie, tasks: le } = ae;
                    yield (I || (I = n("Promise"))).all(le);
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[processDecryptedMessageProto] reparsed msgId=",
                        ""
                    ])), c.externalId).tags("messaging");
                    return {
                        hasInactiveMsg: ie
                    };
                }
            }
            const se = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, $);
            if (se?.senderOrRecipientAccountTypeHosted === true) {
                c.senderOrRecipientAccountTypeHosted = true;
            }
            if (se?.hostedBizEncMismatch === true) {
                c.hostedBizEncStateMismatch = true;
            }
            if (c.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST && s.retryCount > 0) {
                const ue = yield o("WAWebDBMsgUtils").getMsgByMsgKey(o("WAWebMsgProcessingApiUtils").messageInfoToKey(c));
                if (ue?.bclParticipants != null) {
                    c.bclParticipants = ue.bclParticipants;
                } else if (ue?.broadcastParticipants != null) {
                    c.bclParticipants = ue.broadcastParticipants.map((e)=>({
                            wid: o("WAWebWidFactory").asUserWidOrThrow(e)
                        }));
                }
            }
            const ce = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.Parsing);
            const de = ne ?? (yield o("WAWebQuarantineActionUtils").getQuarantineAction($, Z));
            const me = de === o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                info: c,
                ciphertextType: s.e2eType,
                msgProtobuf: $,
                paymentInfo: f,
                bizInfo: i,
                hsmInfo: u,
                hidePlaceholder: s.hideFail,
                processDecryptedProtoParams: e,
                msgBotInfo: p,
                meta: _,
                reportingTokenInfo: T,
                isMessageRetry: s.retryCount > 0,
                isOffline: c.offline != null,
                protobufBytes: x
            }) : N({
                info: c,
                plaintext: x,
                quarantineExtractedText: o("WAWebQuarantineActionUtils").maybeGetQuarantineText(de)
            });
            if (o("WAWebCurrentUser").isEmployee() && o("WAWebABProps").getABPropConfigValue("wa_web_debug_color_code_retry_messages")) {
                me.renderableMsgs?.forEach(function(e) {
                    if (s.retryCount > 0) {
                        e.backgroundColor = 16711680;
                    }
                });
            }
            ce?.();
            let _e = null;
            if (me.history) {
                _e = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY;
            } else if (me.appStateSyncKeyShare) {
                _e = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE;
            } else if (me.appStateSyncKeyRequest) {
                _e = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST;
            } else if (me.peerDataOperationRequestResponseMessage) {
                _e = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE;
            } else if (me.peerDataOperationRequestMessage) {
                _e = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_MESSAGE;
            }
            if (o("WAWebRuntimeEnvironmentUtils").isWorker() && _e) {
                yield o("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
                    {
                        id: c.externalId,
                        type: _e,
                        plaintext: x,
                        info: c,
                        paymentInfo: f,
                        bizInfo: i
                    }
                ]);
            } else if (me.history) {
                o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handleHistorySyncNotification", {
                    historySyncMetaData: me.history,
                    from: Z,
                    externalId: c.externalId
                });
            } else if (me.appStateSyncKeyShare) {
                yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handleAppStateSyncKeyShare", {
                    keyShare: me.appStateSyncKeyShare,
                    from: Z
                });
            } else if (me.appStateSyncKeyRequest) {
                o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handleAppStateSyncKeyRequest", {
                    keyRequest: me.appStateSyncKeyRequest,
                    from: Z
                });
            } else if (me.peerDataOperationRequestResponseMessage) {
                o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handlePeerDataOperationRequestResponse", {
                    stanzaId: c.externalId,
                    response: me.peerDataOperationRequestResponseMessage
                });
            } else if (me.peerDataOperationRequestMessage) {
                o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("handlePeerDataOperationRequest", {
                    stanzaId: c.externalId,
                    request: me.peerDataOperationRequestMessage
                });
            } else if (me.securityNotificationEnabled) {
                if (Z == null || !(Z instanceof r("WAWebWid"))) {
                    o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error"
                    ]))).sendLogs("Handle security notification empty wid error");
                } else if (o("WAWebUserPrefsMeUser").isMePrimary(Z)) {
                    o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications(me.securityNotificationEnabled.isEnabled);
                } else {
                    o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification payload wid error"
                    ]))).sendLogs("Handle security notification payload wid error");
                }
            } else if (me.cloudApiThreadControlNotification) {
                r("WAWebHandleCloudApiThreadControlNotification")(me.cloudApiThreadControlNotification);
            } else if (me.lidMigrationSyncMessage != null) {
                o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] received peer migration stanza but client-to-LID migration is no longer supported, sender: ",
                    ""
                ])), o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(c.externalId)).sendLogs(o("WAWebUserPrefsMeUser").isMeAccount(Z) ? "lid-migration-peer-stanza-received" : "lid-migration-non-peer-stanza-received");
            } else {
                let fe = false;
                if (me.deviceSent == null) {
                    fe = true;
                } else if (me.deviceSent.phash != null && me.deviceSent.phash !== "") {
                    fe = yield o("WAWebHandleMsgValidate").validateBclHash(me.deviceSent.phash, me.deviceSent.info);
                } else if (me.deviceSent.destination) {
                    fe = yield o("WAWebHandleMsgValidate").validateMsgDestination(me.deviceSent.destination, c);
                }
                if (!fe) {
                    throw new (o("WAWebHandleMsgError")).DeviceSentMessageError(o("WAWebMsgProcessingApiUtils").getDeviceType(c.author), o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM);
                }
                const ge = me.renderableMsgs;
                o("WAWebHandleMsgValidate").renderableMessagesValidation({
                    renderableMsgs: ge,
                    msgMeta: _,
                    info: c,
                    proto: $,
                    bizInfo: i
                });
                o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                    info: c,
                    proto: $,
                    renderableMsgs: ge
                });
                if (!o("WAWebMessagingGatingUtils").isWebReportingTokenDelayProcessingEnabled()) {
                    const he = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.ProcessReportingTokenInfo);
                    yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                        renderableMsgs: ge
                    });
                    he?.();
                }
                const ye = yield o("WAWebGalaxyFlowsUtils").maybeAddGalaxyFlowMessageIds(ge);
                const Ce = yield o("WAWebLimitSharingAcp2HideReceivedMsgs").hideMsgsReceivedInAcp2RestrictedChat({
                    messageType: c.type,
                    msgs: o("WAWebConditionalRevealPreProcessor").applyScheduledMsgViewMode(me.storeMsg != null ? [
                        me.storeMsg
                    ].concat(ye) : ye, P),
                    proto: $
                });
                const be = F({
                    renderableMsgs: Ce,
                    reparsing: h,
                    bizInfo: i,
                    msgMeta: _,
                    paymentInfo: f,
                    info: c,
                    messageOverwriteOption: te
                });
                const { hasInactiveMsg: ve, tasks: Se } = be;
                let Re = false;
                if (o("WAWebABProps").getABPropConfigValue("web_send_orphan_in_receipts_enabled")) {
                    const Le = Ce[0];
                    const Ee = B(Le);
                    if (Ee != null) {
                        const ke = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                            Ee
                        ]);
                        const Ie = ke.get(Ee.toString());
                        Re = Ie == null || Ie.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || Ie.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && (Ie.futureproofType == null || !o("WAWebMessageAssociationConstants").orphanIneligibleFutureproofTypes.has(Ie.futureproofType));
                    }
                }
                const Te = me.senderKey;
                if (Te != null) {
                    Se.push(o("WAWebSignal").Session.createGroupSignalSession(c.author, Te.groupId, Te.key));
                }
                const De = me.rootSecretDistribute;
                if (De != null) {
                    if (o("WAWebUserPrefsMeUser").isMeAccount(c.author)) {
                        const { chatJid: xe, rootSecret: $e, stanzaId: Pe } = De;
                        Se.push(o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(xe, Pe, $e));
                    } else {
                        o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                            "[wasa] dropping rootSecretDistribute from non-self author ",
                            ""
                        ])), c.author.toString());
                    }
                }
                W(c, _);
                const Ne = z(c.chat);
                yield (I || (I = n("Promise"))).all(Se);
                const Me = yield Ne;
                o("WAWebLogMissingGroupParticipantMappings").logMissingGroupParticipantMappings({
                    author: c.author,
                    groupId: c.chat,
                    localAddressingMode: Me,
                    serverAddressingMode: c.addressingMode
                });
                o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                    msgs: ye,
                    offline: j(c.offline),
                    tsMillis: c.ts * 1000,
                    clientReceivedTsMillis: c.clientReceivedTsMillis,
                    msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                    serverAddressingMode: c.addressingMode,
                    isPq: s.isPq,
                    localAddressingMode: Me,
                    oppositeHasUsername: o("WAWebUserPrefsMeUser").isMeAccount(c.author) ? c.peerRecipientUsername != null : c.username != null,
                    sessionScope: o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScopeForMessageReceive({
                        from: o("WAWebMsgProcessingApiUtils").getFrom(c),
                        isGroupStatus: _?.isGroupStatus,
                        isSkdm: _?.isSkdm,
                        metaSessionScope: _?.metaSessionScope
                    })
                });
                return {
                    hasInactiveMsg: ve,
                    isOrphanAddon: Re
                };
            }
            return {
                hasInactiveMsg: false
            };
        });
        return w.apply(this, arguments);
    }
    const A = new Set([
        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BizAIMetadataSync,
        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.HatchMetadataSync
    ]);
    function F({ bizInfo: l, info: s, messageOverwriteOption: y, msgMeta: C, paymentInfo: b, renderableMsgs: v, reparsing: S }) {
        const R = [];
        let L = false;
        const E = v[0];
        const k = P != null && P(E?.type) ? D?.(E) : null;
        if (k != null) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "processMsgs: addon"
            ])));
            L = true;
            R.push(H({
                messageOverwriteOption: y,
                msg: k,
                msgInfo: s,
                reparsing: S
            }));
        } else if (E != null && E.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "processMsgs: pollVote"
            ])));
            R.push(U(E, s, S));
        } else if (v[0]?.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "processMsgs: keepInChat"
            ])));
            L = true;
            R.push(o("WAWebHandleMsgProcessUtils").processKeepInChatMsg({
                msg: v[0],
                msgInfo: s,
                msgMeta: C,
                reparsing: S
            }));
        } else if (v[0]?.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && v[0]?.subtype === "message_edit") {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "processMsgs: messageEdit"
            ])));
            R.push(o("WAWebHandleMsgProcessUtils").processEditProtocolMsg({
                msg: v[0],
                msgInfo: s,
                msgMeta: C,
                reparsing: S
            }));
        } else if (v[0]?.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && v[0]?.subtype === "ephemeral_sync_response") {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "processMsgs: ephemeralSyncResponse"
            ])));
            R.push(o("WAWebHandleMsgProcessUtils").processEphemeralSyncResponseMsg({
                msg: v[0],
                msgInfo: s,
                msgMeta: C,
                reparsing: S
            }));
        } else if (v.length > 0) {
            if (E?.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && E?.subtype === "member_label") {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: memberLabel"
                ])));
                L = true;
            } else if (E?.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && A.has(E.subtype)) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: aiMetadataSync"
                ])));
                L = true;
            } else if (E?.type === o("WAWebMsgType").MSG_TYPE.REACTION || E?.type === o("WAWebMsgType").MSG_TYPE.REACTION_ENC) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: reaction"
                ])));
                L = true;
            } else if (E?.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE || E?.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE) {
                L = true;
            } else {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: renderableMsgs"
                ])));
            }
            R.push(O(v, s, b, l, C, y, S));
        }
        return {
            tasks: R,
            hasInactiveMsg: L
        };
    }
    function O(e, t, n, r, a, i, l) {
        return o("WAWebMessageProcessRenderable").processRenderableMessages(e, t, n, r, a, i, l);
    }
    function B(e) {
        if (e == null) {
            return null;
        }
        if (D?.(e) != null) {
            return x?.(e) ?? null;
        }
        if (e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted && e.pollUpdateParentKey) {
            return e.pollUpdateParentKey;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT && e.kicKey) {
            return e.kicKey;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype === "message_edit" && e.protocolMessageKey != null) {
            return e.protocolMessageKey;
        }
        return null;
    }
    function W(e, t) {
        const n = e.pushname;
        if (!r("isStringNullOrEmpty")(n)) {
            const a = o("WAWebCoexV2PushnameUpdate").maybeGetCoexV2PushnameUpdatePlan(e, t);
            const i = a == null ? e.author : a.target;
            if (i != null) {
                o("WAWebHandlePushnameUpdate").updatePushname(i, n, e.offline != null);
            }
        }
    }
    function q(e) {
        return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function U(e, t, n) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = t.offline != null && !n;
            const i = o("WAWebGetMessageCache").getMessageCache().addMessages([
                {
                    msg: e
                }
            ], !r);
            if (n || o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd && o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                yield i;
            }
        });
        return V.apply(this, arguments);
    }
    function H(e) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ messageOverwriteOption: t, msg: n, msgInfo: r, reparsing: a }) {
            const i = r.offline != null && !a;
            const s = o("WAWebGetMessageCache").getMessageCache().addMessages([
                {
                    msg: n
                }
            ], !i);
            if (a || o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd && o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                yield s;
            }
            if (t === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY) {
                o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
                    msg: n
                });
            }
        });
        return G.apply(this, arguments);
    }
    function z(e) {
        return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function j(e) {
        const t = parseInt(e, 10);
        if (Number.isNaN(t)) {
            return null;
        }
        return t;
    }
    l.processDecryptedMessageProto = M;
    l.processMsgs = F;
    l.processRenderableMsg = O;
    l.updateIncomingMessagePushname = W;
    l.processPlaceholderMsg = q;
}, 98);