__d("WAWebCreateEncryptedMessageEditMsgData", [
    "WALongInt",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebCompactMapString",
    "WAWebE2EProtoUtils",
    "WAWebMessageEditValidationError",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const u = self.crypto.getRandomValues(new Uint8Array(12));
            const originalMessageSender = o("WAWebMsgGetters").getOriginalSender(t);
            const e_messageSecret = e.messageSecret;
            const m = o("WALongInt").maybeNumberOrThrowIfTooLarge(e.latestEditSenderTimestampMs);
            if (e_messageSecret == null) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_MESSAGE_SECRET, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MISSING_MESSAGE_SECRET);
            }
            if (originalMessageSender == null) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_ORIGINAL_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (m == null) {
                throw new (o("WAWebMessageEditValidationError")).MessageEditValidationError(o("WAWebMessageEditValidationError").MessageEditValidationErrorCode.MISSING_SENDER_TIMESTAMP, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const p = e.editMsgType ?? o("WAWebMsgType").MSG_TYPE.CHAT;
            const _ = {
                mentionedJid: [],
                groupMentions: [],
                statusAttributions: [],
                experienceIds: []
            };
            if (e.mentionedJidList && e.mentionedJidList.length > 0) {
                _.mentionedJid = r("WAWebCompactMapString")(e.mentionedJidList, o("WAWebE2EProtoUtils").encodeJid);
            }
            if (e.groupMentions && e.groupMentions.length > 0) {
                _.groupMentions = e.groupMentions.map((e)=>({
                        groupSubject: e.groupSubject ?? "",
                        groupJid: o("WAWebE2EProtoUtils").encodeJid(e.groupJid) ?? ""
                    }));
            }
            if (e.isSpoiler === true) {
                _.isSpoiler = true;
            }
            const f = _.mentionedJid.length > 0 || _.groupMentions.length > 0 || _.isSpoiler === true;
            let g;
            switch(p){
                case o("WAWebMsgType").MSG_TYPE.CHAT:
                    {
                        const y = e.body ?? "";
                        const C = e.matchedText != null || e.description != null || e.title != null;
                        if (C) {
                            g = {
                                type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                                encode: {
                                    protocolMessage: {
                                        key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                                        type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT,
                                        timestampMs: m,
                                        editedMessage: {
                                            extendedTextMessage: {
                                                text: y,
                                                matchedText: e.matchedText ?? undefined,
                                                description: e.description ?? undefined,
                                                title: e.title ?? undefined,
                                                contextInfo: f ? _ : undefined
                                            }
                                        }
                                    }
                                }
                            };
                        } else {
                            g = {
                                type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                                encode: {
                                    protocolMessage: {
                                        key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                                        type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT,
                                        timestampMs: m,
                                        editedMessage: {
                                            extendedTextMessage: {
                                                text: y,
                                                contextInfo: f ? _ : undefined
                                            }
                                        }
                                    }
                                }
                            };
                        }
                        break;
                    }
                case o("WAWebMsgType").MSG_TYPE.IMAGE:
                    g = {
                        type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                        encode: {
                            protocolMessage: {
                                key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT,
                                timestampMs: m,
                                editedMessage: {
                                    imageMessage: {
                                        caption: e.caption ?? "",
                                        contextInfo: f ? _ : undefined
                                    }
                                }
                            }
                        }
                    };
                    break;
                case o("WAWebMsgType").MSG_TYPE.VIDEO:
                    g = {
                        type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                        encode: {
                            protocolMessage: {
                                key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT,
                                timestampMs: m,
                                editedMessage: {
                                    videoMessage: {
                                        caption: e.caption ?? "",
                                        contextInfo: f ? _ : undefined
                                    }
                                }
                            }
                        }
                    };
                    break;
                case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                    g = {
                        type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                        encode: {
                            protocolMessage: {
                                key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT,
                                timestampMs: m,
                                editedMessage: {
                                    documentWithCaptionMessage: {
                                        message: {
                                            documentMessage: {
                                                caption: e.caption ?? "",
                                                contextInfo: f ? _ : undefined
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    break;
                default:
                    throw r("err")(`Unsupported edit msg type: ${p}`);
            }
            const R = yield o("WAWebAddonEncryption").encryptAddOn(g, {
                messageSecret: e_messageSecret,
                iv: u,
                stanzaId: t.id.id,
                originalMessageSender,
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(e)))
            });
            const { encPayload, reportingTokenContentInfo } = R;
            return babelHelpers.extends({
                id: e.id
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(e.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage), {
                type: o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
                kind: o("WAWebMsgType").MsgKind.MessageEditEncrypted,
                subtype: "message_edit",
                t: Math.floor(m / 1000),
                ack: e.ack ?? o("WAWebAck").ACK.CLOCK,
                targetMessageKey: t.id,
                protocolMessageKey: t.id,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                encPayload,
                encIv: u.buffer,
                latestEditMsgKey: e.latestEditMsgKey,
                latestEditSenderTimestampMs: m,
                editMsgType: e.editMsgType,
                mentionedJidList: e.mentionedJidList,
                groupMentions: e.groupMentions,
                errorCode: e.errorCode,
                messageSecret: e_messageSecret,
                reportingTokenContentInfo,
                botGroupParticipant: e.botGroupParticipant
            });
        });
        return s.apply(this, arguments);
    }
    l.createEncryptedMessageEditMsgData = e;
}, 98);