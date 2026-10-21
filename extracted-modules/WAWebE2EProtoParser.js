__d("WAWebE2EProtoParser", [
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMetadataProtoUtils",
    "WAWebBotModeSelectionProtoUtils",
    "WAWebBotUtils",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCrashlog",
    "WAWebDecodeJid",
    "WAWebDisappearingModeProtoUtils",
    "WAWebE2EProtoParserForCtwaContext",
    "WAWebExperienceIdReceive",
    "WAWebFutureproofProtoUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationValidation",
    "WAWebMessagePluginParseProtobuf",
    "WAWebMsgAIProvenance",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebPairedMediaTypeProtoUtils",
    "WAWebParseForwardedAiBotMessageInfo",
    "WAWebParseForwardedNewsletterMessageInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebQuestionsProtoUtils",
    "WAWebQuotedMessageProtoUtils",
    "WAWebStatusGatingUtils",
    "WAWebThreadsMetadataProtoUtils",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "isArrayNullOrEmpty",
    "justknobx",
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
    let y;
    let C;
    let b;
    let v;
    const S = 3;
    function R({ bizInfo, bizSource, depth = 0, editAttr, finalLocation, historyLidPnMappings, message, messageProtobuf, msgBotInfo, msgContext, msgMeta, paymentInfo, quotedPaymentInfo, rcat }) {
        if (!messageProtobuf) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: not Message"
            ]))).sendLogs("null-message");
        }
        const messageProtobuf_messageContextInfo = messageProtobuf.messageContextInfo;
        const C = L({
            messageProtobuf,
            message,
            msgContext,
            paymentInfo,
            finalLocation,
            quotedPaymentInfo,
            bizInfo,
            editAttr,
            rcat,
            bizSource,
            msgMeta,
            msgBotInfo,
            historyLidPnMappings,
            depth
        });
        const { contextInfo, msgData } = C;
        $({
            contextInfo,
            message: msgData,
            msgContext,
            quotedPaymentInfo
        });
        F(msgData, messageProtobuf_messageContextInfo, msgContext);
        return msgData;
    }
    function L({ bizInfo, bizSource, depth = 0, editAttr, finalLocation, historyLidPnMappings, message, messageProtobuf, msgBotInfo, msgContext, msgMeta, paymentInfo, quotedPaymentInfo, rcat }) {
        const messageProtobuf_callLogMesssage = messageProtobuf.callLogMesssage;
        const messageAssociation = o("WAWebAssociationProtoUtils").validateMessageAssociationInMessageContextInfo(message, messageProtobuf.messageContextInfo, msgContext, historyLidPnMappings);
        const v = messageAssociation != null ? o("WAWebAssociationProtoUtils").getValidatedAssociationFieldsFromProto(messageAssociation, message, msgContext) : null;
        if (v != null && v.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN) {
            return {
                contextInfo: null,
                msgData: I({
                    baseMessage: message,
                    associationType: v.associationType,
                    parentMsgKey: v.associationParentMsgKey,
                    viewMode: v.viewMode
                })
            };
        }
        const S = o("WAWebMessagePluginParseProtobuf").parseProtobuf({
            messageProtobuf,
            baseMessage: message,
            msgContext,
            paymentInfo,
            quotedPaymentInfo,
            editAttr,
            bizInfo,
            finalLocation,
            rcat,
            bizSource,
            msgMeta,
            messageAssociation,
            msgBotInfo
        });
        if (S) {
            const R = S?.msgData.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && S?.msgData.futureproofType != null;
            if (E(S.msgData, msgContext)) {
                return {
                    contextInfo: null,
                    msgData: k(message)
                };
            }
            if (!R && (o("WAWebQuestionsProtoUtils").shouldFutureProofQuestionMessage(S) || T(S))) {
                const msgData = babelHelpers.extends({}, message, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: "unknown",
                    subtype: undefined
                });
                return {
                    contextInfo: null,
                    msgData
                };
            }
            if (messageAssociation != null) {
                const P = o("WAWebAssociationProtoUtils").convertAssociationTypeFromProtoToClientSupportedAssociationType(messageAssociation.associationType);
                if (!R && P !== o("WAWebMessageAssociation.flow").MessageAssociationType.BOT_PLUGIN && S?.msgData.associationType !== P && !D(messageProtobuf)) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "parseMsgProto: Association type mismatch, parsedData Msg type: ",
                        ", associationTypeFromProtoCasted: ",
                        ", parsedData associationType: ",
                        ", editAttr: ",
                        ", protocolMessageType: ",
                        ", msgMeta type: ",
                        ", msgMeta pollType: ",
                        ", msgMeta eventType: ",
                        ", botEditType: ",
                        ""
                    ])), S?.msgData.type, P, S?.msgData.associationType, editAttr, messageProtobuf?.protocolMessage?.type, msgMeta?.type, msgMeta?.pollType, msgMeta?.eventType, msgBotInfo?.botEditType).tags("messaging").sendLogs("parseMsgProto-association-type-mismatch", {
                        sampling: 0.01
                    });
                    throw new (o("WAWebMessageAssociationValidation")).MessageAssociationValidationError(o("WAWebMessageAssociationValidation").MessageAssociationValidationErrorCode.INVALID_CHILD_MESSAGE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
            }
            o("WAWebLimitSharingProtoUtils").parseLimitSharingFromMessage(message, messageProtobuf, msgContext);
            if (o("WAWebLimitSharingGatingUtils").isAcp2Enabled()) {
                o("WAWebLimitSharingProtoUtils").parseAcp2SettingFromMessage(message, messageProtobuf, msgContext);
            } else {
                o("WAWebLimitSharingProtoUtils").updateExistingAcp2SettingFromMessage(message, messageProtobuf, msgContext);
            }
            x(S.msgData);
            return S;
        }
        const messageProtobuf_deviceSentMessage = messageProtobuf.deviceSentMessage;
        if (messageProtobuf_deviceSentMessage) {
            N(message, messageProtobuf_deviceSentMessage, msgContext, depth);
        }
        if (messageProtobuf_callLogMesssage) {
            w(message, messageProtobuf_callLogMesssage);
        }
        const messageProtobuf_groupStatusMessageV2 = messageProtobuf.groupStatusMessageV2;
        if (messageProtobuf_groupStatusMessageV2 != null) {
            A(message, messageProtobuf_groupStatusMessageV2, msgContext, depth);
        }
        const futureproofMessage = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(messageProtobuf);
        if (futureproofMessage != null) {
            M({
                depth,
                message,
                futureproofMessage,
                msgContext,
                topLevelMessageContextInfo: messageProtobuf.messageContextInfo,
                editAttr
            });
        } else {
            if (v != null && messageProtobuf.associatedChildMessage != null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "parseMsgProto: unopened associated child wrapper, associationType: ",
                    ", msgContext: ",
                    ", viewMode: ",
                    ""
                ])), v.associationType, msgContext, v.viewMode).tags("messaging").sendLogs("parseMsgProto-unopened-associated-child", {
                    sampling: 0.01
                });
                return {
                    contextInfo: null,
                    msgData: I({
                        baseMessage: message,
                        associationType: o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN,
                        parentMsgKey: v.associationParentMsgKey,
                        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
                    })
                };
            }
            if (messageProtobuf.botForwardedMessage != null) {
                return {
                    contextInfo: null,
                    msgData: k(message)
                };
            }
        }
        return {
            contextInfo: null,
            msgData: message
        };
    }
    function E(msgData, msgContext) {
        if (msgData.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE || msgContext === "quoted" || msgContext === "history_quoted") {
            return false;
        }
        const a = msgData.id?.participant;
        return msgData.id?.remote?.isGroup() === true && a != null && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(a) && !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function k(message) {
        return babelHelpers.extends({}, message, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: "unknown",
            subtype: undefined,
            futureproofType: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE
        });
    }
    function I({ associationType, baseMessage, parentMsgKey, viewMode }) {
        return babelHelpers.extends({}, baseMessage, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: "associatedUnknown",
            associationType,
            parentMsgKey,
            viewMode
        });
    }
    function T({ msgData }) {
        if (r("WAWebNewsletterIsNewsletterMsg")(msgData)) {
            return msgData.isFromTemplate === true || msgData.hydratedButtons != null || msgData.isDynamicReplyButtonsMsg === true || msgData.dynamicReplyButtons != null || msgData.carouselCardsParsed != null;
        }
        return false;
    }
    function D(messageProtobuf) {
        return messageProtobuf?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT || messageProtobuf?.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT;
    }
    function x(msgData) {
        if (msgData.isViewOnce === true) {
            [
                "body",
                "caption",
                "dashManifestUrl",
                "deprecatedMms3Url",
                "directPath",
                "encFilehash",
                "filehash",
                "mediaKey",
                "mediaKeyTimestamp",
                "scanLengths",
                "scansSidecar",
                "size",
                "staticUrl",
                "thumbnailDirectPath",
                "thumbnailEncSha256",
                "thumbnailSha256",
                "url",
                "height",
                "width"
            ].forEach((t)=>{
                msgData[t] = undefined;
            });
            if ("metadataUrl" in msgData && msgData.metadataUrl != null && o("WAWebChannelVideoServerTranscodeGating").isChannelVideoServerTranscodeUploadEnabled()) {
                msgData.metadataUrl = undefined;
            }
        }
    }
    function $({ contextInfo, message, msgContext, quotedPaymentInfo }) {
        if (contextInfo) {
            P(message, contextInfo, msgContext, quotedPaymentInfo);
            o("WAWebE2EProtoParserForCtwaContext").parseCtwaContextProto(message, contextInfo);
        }
    }
    function P(e, t, msgContext, a) {
        const { quotedMessage, mentionedJid, groupMentions } = t;
        if (quotedMessage != null && quotedMessage.reactionMessage == null) {
            const isCarouselCardReply = e.selectedCarouselCardIndex != null;
            e.quotedMsg = o("WAWebQuotedMessageProtoUtils").parseQuotedMessage({
                quotedMsg: quotedMessage,
                msgContext,
                isCarouselCardReply,
                contextInfo: t,
                targetMessageKey: e.id
            });
        }
        o("WAWebQuestionsProtoUtils").maybeAddQuestionReplyQuotedMessage(e, t.questionReplyQuotedMessage);
        if (e.quotedMsg && e.quotedMsg.type === "payment" && a) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "parseContextInfoProto: payment not supported"
            ])));
        }
        e.quotedStanzaID = t.stanzaId;
        e.quotedParticipant = o("WAWebDecodeJid").decodeJid(t.participant);
        e.quotedRemoteJid = o("WAWebDecodeJid").decodeJid(t.remoteJid);
        e.quotedGroupSubject = o("WAWebDecodeJid").decodeJid(t.groupSubject);
        e.quotedParentGroupJid = o("WAWebDecodeJid").decodeJid(t.parentGroupJid);
        e.quotedType = t.quotedType;
        e.mentionedJidList = Array.isArray(mentionedJid) ? mentionedJid.map(o("WAWebDecodeJid").decodeJid) : mentionedJid;
        e.groupMentions = Array.isArray(groupMentions) ? groupMentions.map((e)=>({
                groupSubject: e.groupSubject,
                groupJid: o("WAWebDecodeJid").decodeJid(e.groupJid)
            })) : groupMentions;
        e.isForwarded = t.isForwarded;
        e.isQuestion = t.isQuestion;
        e.isSpoiler = t.isSpoiler;
        e.forwardingScore = t.forwardingScore;
        o("WAWebExperienceIdReceive").maybeStampExperienceIds(e, t, msgContext);
        e.nonJidMentions = t.nonJidMentions;
        if (t.expiration != null) {
            e.ephemeralDuration = t.expiration;
        }
        if (t.ephemeralSettingTimestamp != null) {
            e.ephemeralSettingTimestamp = t.ephemeralSettingTimestamp;
        }
        if (t.ephemeralSharedSecret != null) {
            e.ephemeralSharedSecret = t.ephemeralSharedSecret;
        }
        const t_disappearingMode = t.disappearingMode;
        if (t_disappearingMode != null) {
            const _ = o("WAWebDisappearingModeProtoUtils").protoToDisappearingModeInitiator(e, t_disappearingMode);
            if (_ != null) {
                e.disappearingModeInitiator = _;
            }
            const f = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(e, t_disappearingMode);
            if (f != null) {
                e.disappearingModeTrigger = f.disappearingModeTrigger;
                e.disappearingModeInitiatedByMe = f.initiatedByMe;
            }
        }
        if (t.actionLink != null) {
            e.actionLink = t.actionLink;
        }
        if (t.afterReadDuration != null && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            e.afterReadDuration = t.afterReadDuration;
        }
        if (t.smbClientCampaignId != null) {
            e.smbClientCampaignId = t.smbClientCampaignId;
        }
        const g = o("WAWebPairedMediaTypeProtoUtils").pairedMediaTypeFromProto(t.pairedMediaType);
        if (g != null) {
            e.pairedMediaType = g;
        }
        if (r("WAWebNewsletterIsNewsletterMsg")(e) && o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled()) {
            const h = o("WAWebMsgAIProvenance").aiProvenanceFromProto(t.aiProvenance);
            if (h != null) {
                e.aiProvenance = h;
            }
        }
        if (t.forwardedNewsletterMessageInfo != null) {
            try {
                e.forwardedNewsletterMessageInfo = o("WAWebParseForwardedNewsletterMessageInfo").parseForwardedNewsletterMessageInfo(t.forwardedNewsletterMessageInfo);
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "parseContextInfoProto: failed to parse forwarded newsletter info"
                ]))).sendLogs("Failed to parse Forwarded Newsletter Message Info.");
            }
        }
        const t_forwardedAiBotMessageInfo = t.forwardedAiBotMessageInfo;
        if (t_forwardedAiBotMessageInfo != null && o("WAWebBotBaseGating").isAiForwardAttributionEnabled()) {
            try {
                e.forwardedAiBotMessageInfo = o("WAWebParseForwardedAiBotMessageInfo").parseForwardedAiBotMessageInfo(t_forwardedAiBotMessageInfo);
            } catch (e) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "parseContextInfoProto: failed to parse forwarded AI bot message info"
                ]))).sendLogs("Failed to parse Forwarded AI Bot Message Info.");
            }
        }
        o("WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible").updateMmSignalSharingExpirationWindow(e, t);
        if (t.statusAttributions != null && t.statusAttributions.length > 0) {
            e.statusAttributions = t.statusAttributions;
        }
        if (t.statusAudienceMetadata != null && o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled()) {
            e.statusAudienceMetadata = t.statusAudienceMetadata;
        }
        const t_featureEligibilities = t.featureEligibilities;
        if (t_featureEligibilities?.cannotBeRanked != null) {
            e.cannotBeRanked = t_featureEligibilities.cannotBeRanked;
        }
        if (t_featureEligibilities?.canBeReshared != null) {
            e.canBeReshared = t_featureEligibilities.canBeReshared;
        }
    }
    function N(message, messageProtobuf_deviceSentMessage, msgContext, a = 0) {
        if (r("justknobx")._("2451") && a >= S) {
            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "parseDeviceSentMessage: nesting depth exceeded limit of ",
                ""
            ])), S).tags("messaging").sendLogs("parse-device-sent-msg-max-depth");
            return;
        }
        if (msgContext === "relay" && r("justknobx")._("6357")) {
            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "parseDeviceSentMessage: ignoring destinationJid of an incoming deviceSentMessage"
            ]))).tags("messaging").sendLogs("parse-device-sent-msg-relay-destination-ignored");
        } else {
            const i = o("WAWebDecodeJid").decodeJid(messageProtobuf_deviceSentMessage.destinationJid);
            message.id.remote = i;
            message.to = i;
        }
        Object.assign(message, R({
            messageProtobuf: messageProtobuf_deviceSentMessage.message,
            message,
            msgContext,
            depth: a + 1
        }));
    }
    function M({ depth = 0, editAttr, futureproofMessage, message, msgContext, topLevelMessageContextInfo }) {
        if (r("justknobx")._("2451") && depth >= S) {
            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "parseFutureproofMessageProto: nesting depth exceeded limit of ",
                ""
            ])), S).tags("messaging").sendLogs("parse-futureproof-msg-max-depth");
            return;
        }
        const c = r("nullthrows")(futureproofMessage.message);
        const d = [];
        const messageContextInfo = topLevelMessageContextInfo == null ? babelHelpers.extends({}, c.messageContextInfo, {
            threadId: d
        }) : babelHelpers.extends({}, c.messageContextInfo, topLevelMessageContextInfo, {
            threadId: d
        });
        Object.assign(message, R({
            messageProtobuf: babelHelpers.extends({}, c, {
                messageContextInfo
            }),
            message,
            msgContext,
            editAttr,
            depth: depth + 1
        }));
    }
    function w(message, messageProtobuf_callLogMesssage) {
        message.type = o("WAWebMsgType").MSG_TYPE.CALL_LOG;
        const n = !!messageProtobuf_callLogMesssage.isVideo;
        if (messageProtobuf_callLogMesssage.participants.length > 1) {
            message.subtype = n ? o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MissGroupVideo : o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MissGroup;
        } else {
            message.subtype = n ? o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MissVideo : o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Miss;
        }
    }
    function A(message, messageProtobuf_groupStatusMessageV2, msgContext, a = 0) {
        if (r("justknobx")._("2451") && a >= S) {
            o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "parseGroupStatusMessageV2: nesting depth exceeded limit of ",
                ""
            ])), S).tags("messaging").sendLogs("parse-group-status-msg-max-depth");
            return;
        }
        if (messageProtobuf_groupStatusMessageV2?.message != null) {
            message.isGroupStatus = true;
            Object.assign(message, R({
                messageProtobuf: messageProtobuf_groupStatusMessageV2.message,
                message,
                msgContext,
                depth: a + 1
            }));
        } else {
            o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[parseGroupStatusMessageV2] Unable to parse possible group status message"
            ]))).sendLogs("parse-group-status-message-skipped");
        }
    }
    function F(e, t, n) {
        if (t) {
            if (t.messageSecret != null && n !== "quoted" && n !== "history_quoted") {
                e.messageSecret = new Uint8Array(t.messageSecret);
            }
            const u = e.id?.participant?.isBot() === true || e.id?.remote?.isBot() === true;
            if (u) {
                o("WAWebBotMetadataProtoUtils").parseBotMetadataProto(e, t);
            } else if (O(e.id, t)) {
                o("WAWebBotMetadataProtoUtils").parseBotMetadataProto(e, t, true);
            }
            if (t?.botMetadata?.verificationMetadata != null) {
                e.botSignatureVerificationMetadata = t.botMetadata.verificationMetadata;
            }
            if (r("WAWebWid").isCAPISupportAccount(e?.id?.remote) && t?.supportPayload != null) {
                const c = JSON.parse(t.supportPayload);
                if (c.should_show_system_message != null) {
                    e.shouldShowSupportAISystemMessage = c.should_show_system_message;
                }
                if (c.is_ai_message != null && o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled()) {
                    e.isSupportAIMessage = c.is_ai_message;
                }
                if (Array.isArray(c.citation_items) && c.citation_items.length > 0) {
                    e.supportCitations = c.citation_items.map((e)=>({
                            title: e.title,
                            subtitle: e.subtitle,
                            cmsId: e.cms_id,
                            imageUrl: e.image_url
                        }));
                }
                if (c.should_upload_client_logs === true && o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled()) {
                    if (c.ticket_id != null && c.ticket_id !== "no_ticket_created") {
                        const d = 86400000;
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "InAppSupport: Uploading logs for ticketId=",
                            ""
                        ])), c.ticket_id);
                        const m = {
                            reason: o("WAWebCrashlog").SERVER_REQUESTED,
                            immediate: true,
                            isHighPri: true,
                            logType: o("WAWebCrashlog").LogType.SUPPORT,
                            ticketId: c.ticket_id,
                            fromTimestamp: Date.now() - d
                        };
                        o("WAWebCrashlog").upload(m).then((e)=>{
                            if (e == null) {
                                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                    "InAppSupport: Logs upload failed for ticketId=",
                                    ""
                                ])), c.ticket_id);
                            } else {
                                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                    "InAppSupport: Logs upload complete for ticketId=",
                                    ", logsId=",
                                    ""
                                ])), c.ticket_id, e);
                            }
                        });
                    } else {
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "InAppSupport: Could not upload logs. No ticketId was provided."
                        ])));
                    }
                }
            }
            if (!r("isArrayNullOrEmpty")(t.threadId) && e.id != null) {
                o("WAWebThreadsMetadataProtoUtils").parseThreadsMetadataProto(e, t);
            }
            o("WAWebThreadsMetadataProtoUtils").maybeParseAiThreadInfoFromProto(e, t);
            o("WAWebBotModeSelectionProtoUtils").parseBotModeSelectionMetadataProto(e, t);
            o("WAWebThreadsMetadataProtoUtils").maybeAddHistoricalAiThreadForMetaAi(e, n);
        }
    }
    function O(e, t) {
        const i = t.botMetadata?.botGroupMetadata;
        if (i == null) {
            return false;
        }
        const l = i.participantsMetadata ?? [];
        return e?.remote?.isGroup() === true && o("WAWebBotMetadataProtoUtils").hasGroupBotMetadata(l, o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled);
    }
    l.parseMsgProto = R;
    l.parseContextInfo = $;
    l.parseContextInfoProto = P;
    l.parseMessageContextInfoProto = F;
}, 98);