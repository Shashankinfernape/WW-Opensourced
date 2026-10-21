__d("WAWebHandleMsgValidate", [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebBotUtils",
    "WAWebBrAddPixKeyOfferReceipt",
    "WAWebBroadcastInvalidChannelsContextSourceMessageDropWamEvent",
    "WAWebE2EProtoUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMessageTypes",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebMaibaWASSMigration",
    "WAWebMessagingGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPhashUtils",
    "WAWebReportingTokenUtils",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "asyncToGeneratorRuntime",
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
    const b = "message_edit";
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(encDestination, t) {
            const envelopeDestination = t.preMatChat ?? t.chat;
            if (!R({
                encDestination,
                envelopeDestination
            })) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "encDestination: ",
                    ", destination: ",
                    ", type: ",
                    ""
                ])), encDestination.toString(), envelopeDestination.toString(), t.type).sendLogs("validateMsgDestination: drop due to the deviceSentMessage meta mismatch.");
                return false;
            }
            const t_author = t.author;
            if (!o("WAWebUserPrefsMeUser").isMeAccount(t_author)) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "sender: ",
                    ""
                ])), t_author.toString()).sendLogs("validateMsgDestination: drop due to msg is not sent from your own device.");
                return false;
            }
            const l = yield o("WAWebApiDeviceList").hasDevice(t_author, t_author.device ?? 0);
            if (!l) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "no record found for sender: ",
                    ""
                ])), t_author.toString()).sendLogs("validateMsgDestination:drop due to invalid device");
            }
            return l;
        });
        return S.apply(this, arguments);
    }
    function R({ encDestination, envelopeDestination }) {
        if (encDestination.equals(envelopeDestination)) {
            return true;
        }
        const i = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidThread(encDestination);
        if (r("WAWebWid").equals(i, envelopeDestination)) {
            return true;
        }
        const l = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(encDestination);
        if (r("WAWebWid").equals(l, envelopeDestination)) {
            return true;
        }
        if (encDestination.isUser() && r("WAWebWid").equals(o("WAWebApiContact").getAlternateUserWid(encDestination), envelopeDestination)) {
            const s = envelopeDestination.toLogString();
            const u = encDestination.toLogString();
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "validateMsgDestination: match but addressing mode mismatch: envelope: ",
                ", enc: ",
                ""
            ])), s, u).sendLogs("validateMsgDestination-addressing-mode-mismatch");
            return true;
        }
        return false;
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST ? t.bclParticipants.map((e)=>e.preMatWid ?? e.wid) : t.directPeerStatusBclParticipants ?? [];
            const a = yield o("WAWebPhashUtils").phashV2(r);
            if (a !== e) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "received: ",
                    " from peer, computed: ",
                    ""
                ])), e, a).sendLogs("validateBclHash: drop due to invalid hash.");
                return false;
            }
            t.bclHashValidated = true;
            return true;
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.device ?? o("WAJids").DEFAULT_DEVICE_ID;
            if (t === o("WAJids").DEFAULT_DEVICE_ID) {
                return true;
            }
            const n = yield o("WAWebApiDeviceList").getDeviceIds([
                e
            ]);
            const r = n[0];
            return r != null && r.devices.some((e)=>e.id === t);
        });
        return I.apply(this, arguments);
    }
    function T({ buttonsMessage, highlyStructuredMessage, listMessage, templateMessage }, t) {
        if (listMessage && t?.verifiedListEnvelope !== true) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "no biz node found in list message"
            ]))).sendLogs("validateBizNode:drop due to missing biz node in invalid SMAX in list message", {
                sampling: 0.01
            });
            return false;
        }
        if (buttonsMessage) {
            const m = t?.verifiedButtonsEnvelope === true || t?.nativeFlowName != null || buttonsMessage.contextInfo?.isForwarded === true && buttonsMessage?.buttons?.length === 0;
            if (!m) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "button message is invalid"
                ]))).sendLogs("validateBizNode:drop due to invalid SMAX for buttons message");
            }
            return m;
        }
        if ((highlyStructuredMessage || templateMessage) && t?.verifiedHsmEnvelope !== true) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "no biz node found in HSM"
            ]))).sendLogs("validateBizNode:drop due to missing biz node in invalid SMAX in HSM");
            return false;
        }
        return true;
    }
    function D(e) {
        const n = e.ctwaContext?.alwaysShowAdAttribution;
        if (!o("WAWebMobilePlatforms").isSMB() && !o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebMsgGetters").getSender(e)) && n === true) {
            throw new (o("WAWebHandleMsgError")).MessageValidationError("This is a spam message sent to consumer number with 'Message Via Ad' header", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
    }
    function x(proto) {
        for (const t of Object.keys(proto)){
            const n = proto[t];
            if (n != null && typeof n === "object" && "contextInfo" in n) {
                const r = n.contextInfo;
                if (r != null) {
                    return r;
                }
            }
        }
        return null;
    }
    function $(proto, t) {
        const n = x(proto);
        const r = n?.externalAdReply;
        if (!o("WAWebMobilePlatforms").isSMB() && !o("WAWebMsgGetters").getIsSentByMe(t) && r != null && o("WAWebABProps").getABPropConfigValue("ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled")) {
            throw new (o("WAWebHandleMsgError")).MessageValidationError("This is a spam message sent to consumer number with externalAdReply", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE, {
                sendLogs: 0
            });
        }
    }
    function P(msgMeta, t) {
        const n = msgMeta?.context_source === o("WAWebHandleMsgCommon").CONTEXT_SOURCE;
        if (n && t.type !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE && o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowInvalidDroppingEnabled()) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Dropping NEWSLETTER_FOLLOWER_INVITE message without valid context_source. Message type: ",
                ", Context source: ",
                ""
            ])), t.type, msgMeta?.context_source ?? "null").sendLogs("newsletter-follower-invite-invalid-context-source");
            new (o("WAWebBroadcastInvalidChannelsContextSourceMessageDropWamEvent")).BroadcastInvalidChannelsContextSourceMessageDropWamEvent({
                wasDropped: true
            }).commit();
            throw new (o("WAWebHandleMsgError")).MessageValidationError("NEWSLETTER_FOLLOWER_INVITE message without valid context_source", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
    }
    function N({ bizInfo, info, msgMeta, proto, renderableMsgs }) {
        if (renderableMsgs.length > 0 && !T(proto, bizInfo)) {
            throw new (o("WAWebHandleMsgError")).BizNodeValidationError("[messaging] Biz node validation failed due to absence of biz node in SMAX");
        }
        const s = renderableMsgs[0];
        if (s != null && s.type !== o("WAWebMsgType").MSG_TYPE.QUARANTINED) {
            if (o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(msgMeta) && s.type !== o("WAWebMsgType").MSG_TYPE.REACTION && s.type !== o("WAWebMsgType").MSG_TYPE.REACTION_ENC) {
                throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_REACTION_STANZA);
            }
            if (o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(msgMeta)) {
                const u = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofType === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE;
                const c = s.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && s.subtype === "poll_vote";
                if (!u && !c) {
                    throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_POLL_UPDATE_STANZA);
                }
            }
            if (o("WAWebHandleMsgMetaUtils").isCommentMsgMeta(msgMeta)) {
                const d = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofType === o("WAWebMsgType").MSG_TYPE.COMMENT;
                const g = new Set([
                    o("WAWebMsgType").MsgKind.CommentEncrypted,
                    o("WAWebMsgType").MsgKind.CommentDecrypted,
                    o("WAWebMsgType").MsgKind.RevokedAddon,
                    o("WAWebMsgType").MsgKind.ProtocolRevoke,
                    o("WAWebMsgType").MsgKind.NewsletterQuestionResponse
                ]);
                if (!d && !g.has(s.kind)) {
                    throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_COMMENT_STANZA);
                }
            }
            if (info.edit !== o("WAWebAck").EDIT_ATTR.NONE) {
                if (info.edit === o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT) {
                    const h = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE;
                    if (s.type !== o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE && !h) {
                        throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_PIN_IN_CHAT_STANZA);
                    }
                } else if (info.edit === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT) {
                    if (!(o("WAWebHandleMsgMetaUtils").isEventEditMsgMeta(msgMeta) || o("WAWebHandleMsgMetaUtils").isPollEditMsgMeta(msgMeta) || o("WAWebHandleMsgMetaUtils").isMediaMsgMeta(msgMeta) && o("WAWebBotUtils").isMetaAiBot(info.author))) {
                        const y = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofSubtype === b;
                        if (s.subtype !== b && !y) {
                            throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_EDIT_STANZA);
                        }
                    }
                } else {
                    if (info.edit === o("WAWebAck").EDIT_ATTR.NEWSLETTER_MSG_EDIT) {
                        throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_NEWSLETTER_EDIT_STANZA);
                    }
                    if (info.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE) {
                        if (s.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
                            if (r("gkx")("26259")) {
                                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "RenderableMessagesValidation: msg.type: ",
                                    ""
                                ])), s.type).sendLogs("invalid-edit-attribute-admin-revoke");
                            }
                            throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_EDIT_STANZA);
                        }
                    } else if (info.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE) {
                        let C;
                        const v = [
                            (C = o("WAWebMsgType")).MSG_TYPE.REACTION,
                            C.MSG_TYPE.REACTION_ENC,
                            C.MSG_TYPE.PROTOCOL,
                            C.MSG_TYPE.KEEP_IN_CHAT
                        ];
                        if (!v.includes(s.type)) {
                            if (r("gkx")("26259")) {
                                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "RenderableMessagesValidation: msg.type: ",
                                    ""
                                ])), s.type).sendLogs("invalid-edit-attribute-sender-revoke");
                            }
                            throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_EDIT_STANZA);
                        }
                    } else {
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "RenderableMessagesValidation: Unvalidated edit attribute ",
                            ""
                        ])), info.edit).sendLogs("unvalidated-edit-attribute");
                    }
                }
            }
            if (o("WAWebHandleMsgMetaUtils").isEventResponseMsgMeta(msgMeta)) {
                const S = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofType === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE;
                const R = s.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE;
                if (!S && !R) {
                    throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_EVENT_RESPONSE_STANZA);
                }
            }
            if (o("WAWebHandleMsgMetaUtils").isEventEditMsgMeta(msgMeta)) {
                const L = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofType === o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED;
                const E = s.type === o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED;
                if (!L && !E) {
                    throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_EVENT_EDIT_STANZA);
                }
            }
            if (o("WAWebHandleMsgMetaUtils").isPollEditMsgMeta(msgMeta)) {
                const k = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofType === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED;
                const I = s.type === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED;
                if (!k && !I) {
                    throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_POLL_EDIT_STANZA);
                }
            }
            if (o("WAWebHandleMsgMetaUtils").isMemberTagMsgMeta(msgMeta)) {
                const x = s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && s.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL && s.futureproofSubtype === "member_label";
                const N = s.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && s.subtype === "member_label";
                if (!x && !N) {
                    throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_MEMBER_TAG_STANZA);
                }
            }
            if (r("gkx")("26259")) {
                const M = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(proto);
                if (M !== msgMeta?.type) {
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Type in stanza [",
                        "] is different from the one derived from protobuf [",
                        "]. Message type: ",
                        ""
                    ])), msgMeta?.type, M, s.type).tags("messaging").sendLogs("report-token-stanza-protobuf-type-mismatched", {
                        sampling: 0.01
                    });
                }
            }
            P(msgMeta, s);
            $(proto, s);
            D(s);
        }
    }
    function M({ info, proto, renderableMsgs }) {
        if (o("WAWebBrAddPixKeyOfferReceipt").shouldDropAddPixKeyOffer({
            fromMe: renderableMsgs.some((e)=>e.id.fromMe),
            proto,
            senders: [
                info.author,
                info.senderPn,
                info.senderLid
            ]
        })) {
            throw new (o("WAWebHandleMsgError")).MessageValidationError("offer_payment_account from a sender no Pix key partner claims", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE, {
                sendLogs: 0
            });
        }
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ forceDualEncryptedValidation = false, renderableMsgs }) {
            if (o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()) {
                const s = renderableMsgs[0];
                if (!(s == null || s.plainProtobufBytes == null || s.reportingTokenInfo == null)) {
                    const { plainProtobufBytes, reportingTokenInfo } = s;
                    const { reportingTag, reportingToken, version } = reportingTokenInfo;
                    if (reportingTag != null) {
                        const _ = s.protocolMessageKey?.toString();
                        const f = {
                            msgKey: F(s),
                            stanzaId: s.id.id,
                            reportingTag,
                            receivedTs: o("WATimeUtils").unixTimeMs(),
                            msgTs: reportingTokenInfo.stanzaTs ?? s.t ?? 0
                        };
                        if (s.kind === o("WAWebMsgType").MsgKind.Unknown) {
                            o("WAWebGetMessageCache").getMessageCache().addAdditionalInfo({
                                type: o("WAWebHandleMessageTypes").MsgAdditionalInfoType.ReportingInfo,
                                data: babelHelpers.extends({}, f)
                            }, _ != null);
                            return;
                        }
                        if (!((s.kind === o("WAWebMsgType").MsgKind.CommentEncrypted || s.kind === o("WAWebMsgType").MsgKind.EventEditEncrypted || s.kind === o("WAWebMsgType").MsgKind.MessageEditEncrypted || s.kind === o("WAWebMsgType").MsgKind.PollEditEncrypted || s.kind === o("WAWebMsgType").MsgKind.PollAddOptionEncrypted) && forceDualEncryptedValidation === false)) {
                            const g = yield o("WAWebReportingTokenUtils").validateReportingTokenInfo(s, plainProtobufBytes);
                            const { reportingTokenContent, reportingTokenKey, res } = g;
                            const b = reportingToken != null ? babelHelpers.extends({
                                reportingToken: reportingToken?.slice(0, res ? o("WAWebReportingTokenUtils").REPORTING_TOKEN_STORAGE_SIZE : o("WAWebReportingTokenUtils").REPORTING_TOKEN_INVALID_STORAGE_SIZE),
                                reportingTokenContentOpaqueData: reportingTokenContent,
                                version
                            }, reportingTokenKey != null && {
                                reportingTokenKey
                            }) : null;
                            o("WAWebGetMessageCache").getMessageCache().addAdditionalInfo({
                                type: o("WAWebHandleMessageTypes").MsgAdditionalInfoType.ReportingInfo,
                                data: babelHelpers.extends({}, f, b)
                            }, _ != null || forceDualEncryptedValidation === true);
                        }
                    }
                }
            }
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        if (e.kind === o("WAWebMsgType").MsgKind.PollAddOptionDecrypted) {
            return e.id.toString();
        }
        return e.protocolMessageKey?.toString() ?? e.id.toString();
    }
    l.validateMsgDestination = v;
    l.validateBclHash = L;
    l.isFromKnownDevice = k;
    l.validateBizNode = T;
    l.renderableMessagesValidation = N;
    l.validateAddPixKeyOfferSender = M;
    l.validateAndProcessReportingTokenInfo = w;
}, 98);