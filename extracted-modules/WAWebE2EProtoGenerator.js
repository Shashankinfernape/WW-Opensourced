__d("WAWebE2EProtoGenerator", [
    "WALogger",
    "WATypeUtils",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotReplaceMentionWidsWithPushnames",
    "WAWebBotUtils",
    "WAWebButtonsMessageProtoUtils",
    "WAWebConversionTupleCollection",
    "WAWebE2EProtoUtils",
    "WAWebGenerateBotGroupMetadata",
    "WAWebGenerateBotMetadata",
    "WAWebGenerateThreadIds",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessagePluginGenerateProtobuf",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMsgAIProvenance",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPairedMediaTypeProtoUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebRemoveQuotedAttachmentMediaFields",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebSpoilerFutureproofProtoUtils",
    "WAWebStructuredClone",
    "WAWebURLUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isArrayNullOrEmpty",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    const e = [
        "messageContextInfo"
    ];
    const s = [
        "messageContextInfo"
    ];
    const u = [
        "messageContextInfo"
    ];
    const c = [
        "participant",
        "remoteJid",
        "stanzaId"
    ];
    const d = [
        "participant",
        "quotedMessage",
        "remoteJid",
        "stanzaId"
    ];
    const m = [
        "personaId"
    ];
    let p;
    function _(e, t, n) {
        if (!(!t && !n)) {
            e.messageContextInfo = babelHelpers.extends({}, e.messageContextInfo, {
                deviceListMetadata: {
                    senderKeyHash: t?.keyHash,
                    senderTimestamp: t?.timestamp,
                    senderKeyIndexes: t?.keyIndexes,
                    recipientKeyHash: n?.keyHash,
                    recipientTimestamp: n?.timestamp,
                    recipientKeyIndexes: n?.keyIndexes,
                    senderAccountType: t?.senderAccountType,
                    receiverAccountType: n?.receiverAccountType
                },
                deviceListMetadataVersion: 2
            });
        }
    }
    function f(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
            return {};
        }
        if (e.subtype === "app_state_sync_key_share") {
            return {
                protocolMessage: {
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.APP_STATE_SYNC_KEY_SHARE,
                    appStateSyncKeyShare: e.appStateSyncKeyShare
                }
            };
        }
        if (e.subtype === "app_state_sync_key_request") {
            return {
                protocolMessage: {
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.APP_STATE_SYNC_KEY_REQUEST,
                    appStateSyncKeyRequest: e.appStateSyncKeyRequest
                }
            };
        }
        if (e.subtype === "app_state_fatal_exception_notification") {
            return {
                protocolMessage: {
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.APP_STATE_FATAL_EXCEPTION_NOTIFICATION,
                    appStateFatalExceptionNotification: e.appStateFatalExceptionNotification
                }
            };
        }
        if (e.subtype === "peer_data_operation_request_message") {
            return {
                protocolMessage: {
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.PEER_DATA_OPERATION_REQUEST_MESSAGE,
                    peerDataOperationRequestMessage: e.peerDataOperationRequestMessage
                }
            };
        }
        if (e.subtype === "peer_data_operation_request_response_message") {
            return {
                protocolMessage: {
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE,
                    peerDataOperationRequestResponseMessage: e.peerDataOperationRequestResponseMessage
                }
            };
        }
        return {};
    }
    function g(e, t) {
        const r = v(e);
        return b(r, t, e.utm ?? undefined);
    }
    function h(e) {
        return b(e);
    }
    function y(e, t) {
        if (e.quotedMsg) {
            const n = e.quotedMsg.mentionedJidList;
            const r = e.quotedMsg.groupMentions;
            const mentionedJid = [];
            const i = [];
            if (Array.isArray(n) && n.length > 0) {
                mentionedJid.push(...n.map(o("WAWebE2EProtoUtils").encodeJid));
            }
            if (Array.isArray(r) && r.length > 0) {
                i.push(...r.map((e)=>({
                        groupSubject: e.groupSubject,
                        groupJid: o("WAWebE2EProtoUtils").encodeJid(e.groupJid)
                    })));
            }
            const l = mentionedJid.length > 0 || i.length > 0 ? {
                mentionedJid,
                groupMentions: i,
                statusAttributions: [],
                experienceIds: []
            } : undefined;
            t.stanzaId = e.quotedStanzaID;
            t.remoteJid = o("WAWebE2EProtoUtils").encodeJid(e.quotedRemoteJid);
            t.participant = o("WAWebE2EProtoUtils").encodeJid(e.quotedParticipant);
            const s = {
                duration: e.quotedMsg.duration,
                directPath: e.quotedMsg.directPath,
                encFilehash: e.quotedMsg.encFilehash,
                filehash: e.quotedMsg.filehash,
                height: e.quotedMsg.height,
                mediaKey: e.quotedMsg.mediaKey,
                mediaKeyTimestamp: o("WATypeUtils").isNumber(e.quotedMsg.mediaKeyTimestamp) ? e.quotedMsg.mediaKeyTimestamp : undefined,
                mimetype: e.quotedMsg.mimetype,
                url: e.quotedMsg.clientUrl || e.quotedMsg.deprecatedMms3Url,
                width: e.quotedMsg.width
            };
            t.quotedMessage = S(e.quotedMsg, s, l, undefined, "quoted");
        } else {
            if (e.quotedRemoteJid && e.quotedGroupSubject && e.quotedParentGroupJid) {
                t.remoteJid = o("WAWebE2EProtoUtils").encodeJid(e.quotedRemoteJid);
                t.groupSubject = e.quotedGroupSubject;
                t.parentGroupJid = o("WAWebE2EProtoUtils").encodeJid(e.quotedParentGroupJid);
            } else if (e.quotedRemoteJid) {
                t.remoteJid = o("WAWebE2EProtoUtils").encodeJid(e.quotedRemoteJid);
            }
        }
    }
    function C({ ephemeralDuration, afterReadDuration }) {
        if (afterReadDuration == null && ephemeralDuration != null && ephemeralDuration > 0 && o("WAWebAfterReadUtils").isAfterReadEnabled() && o("WAWebAfterReadUtils").isAfterReadDuration(ephemeralDuration)) {
            return {
                ephemeralDuration: o("WAWebAfterReadUtils").getAfterReadFallbackDuration(),
                afterReadDuration: ephemeralDuration
            };
        }
        return {
            ephemeralDuration,
            afterReadDuration
        };
    }
    function b(e, t, n) {
        const a = {};
        y(e, a);
        if (e.mentionedJidList && e.mentionedJidList.length > 0) {
            const i = e.mentionedJidList;
            a.mentionedJid = i.map(o("WAWebE2EProtoUtils").encodeJid);
        }
        if (e.groupMentions && e.groupMentions.length > 0) {
            a.groupMentions = e.groupMentions.map((e)=>({
                    groupSubject: e.groupSubject,
                    groupJid: o("WAWebE2EProtoUtils").encodeJid(e.groupJid)
                }));
        }
        if (e.conversionTuple) {
            Object.assign(a, e.conversionTuple);
        }
        if (e.isForwarded) {
            a.isForwarded = e.isForwarded;
        }
        if (e.isQuestion) {
            a.isQuestion = e.isQuestion;
        }
        if (e.isSpoiler === true) {
            a.isSpoiler = true;
        }
        if (e.questionReplyQuotedMessage) {
            a.questionReplyQuotedMessage = {
                serverQuestionId: e.questionReplyQuotedMessage.questionServerId,
                quotedQuestion: S(e.questionReplyQuotedMessage.quotedQuestion, undefined, {
                    isQuestion: true,
                    groupMentions: [],
                    mentionedJid: [],
                    statusAttributions: [],
                    experienceIds: []
                }, undefined, "quoted"),
                quotedResponse: S(e.questionReplyQuotedMessage.quotedResponse, undefined, undefined, undefined, "quoted")
            };
        }
        if (e.forwardingScore) {
            a.forwardingScore = e.forwardingScore;
        }
        if (e.nonJidMentions != null) {
            a.nonJidMentions = e.nonJidMentions;
        }
        if (e.groupId) {
            a.groupId = e.groupId;
        }
        if (e.groupIndex) {
            a.groupIndex = e.groupIndex;
        }
        if (e.groupSize) {
            a.groupSize = e.groupSize;
        }
        if (e.forwardedNewsletterMessageInfo) {
            const l = e.forwardedNewsletterMessageInfo;
            const { newsletterId, newsletterName, serverMessageId } = l;
            a.forwardedNewsletterMessageInfo = {
                newsletterJid: o("WAWebE2EProtoUtils").encodeJid(newsletterId),
                newsletterName,
                serverMessageId
            };
        }
        if (e.forwardedAiBotMessageInfo) {
            const d = e.forwardedAiBotMessageInfo;
            const { botId, botName, creatorName } = d;
            a.forwardedAiBotMessageInfo = {
                botJid: o("WAWebE2EProtoUtils").encodeJid(o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceDeprecatedBotPnWithFbid(botId)),
                botName,
                creatorName
            };
        }
        const f = C(e);
        const { afterReadDuration, ephemeralDuration } = f;
        if (ephemeralDuration != null && ephemeralDuration > 0) {
            a.expiration = ephemeralDuration;
        }
        if (e.ephemeralSettingTimestamp) {
            a.ephemeralSettingTimestamp = e.ephemeralSettingTimestamp;
        }
        if (afterReadDuration != null && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            a.afterReadDuration = afterReadDuration;
            a.expiration = o("WAWebAfterReadUtils").getAfterReadFallbackDuration();
        }
        if (e.disappearingModeInitiator || e.disappearingModeTrigger != null && e.to.isGroup()) {
            a.disappearingMode = o("WAWebE2EProtoUtils").disappearingModeInitiatorToProto(e.disappearingModeInitiator, e.disappearingModeTrigger, e.disappearingModeInitiatedByMe);
        }
        if (e.ctwaContext) {
            a.externalAdReply = {
                sourceUrl: e.ctwaContext.sourceUrl,
                sourceId: e.ctwaContext.sourceId,
                sourceType: e.ctwaContext.sourceType,
                body: e.ctwaContext.description,
                title: e.ctwaContext.title,
                thumbnailUrl: e.ctwaContext.thumbnailUrl,
                thumbnail: e.ctwaContext.thumbnail ? o("WAWebE2EProtoUtils").encodeBytes(e.ctwaContext.thumbnail) : undefined,
                mediaType: e.ctwaContext.mediaType,
                mediaUrl: e.ctwaContext.mediaUrl
            };
        }
        if (n) {
            a.utm = {
                utmCampaign: n.campaign ?? undefined,
                utmSource: n.source ?? undefined
            };
        }
        if (e.cannotBeRanked || e.canBeReshared) {
            const b = {};
            if (e.cannotBeRanked) {
                b.cannotBeRanked = e.cannotBeRanked;
            }
            if (e.canBeReshared) {
                b.canBeReshared = e.canBeReshared;
            }
            a.featureEligibilities = b;
        }
        if (e.limitSharing) {
            a.limitSharingV2 = e.limitSharing;
        }
        if (Array.isArray(e.statusAttributions) && e.statusAttributions.length > 0) {
            a.statusAttributions = e.statusAttributions;
            const v = e.statusAttributions.some((e)=>e.type === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.RESHARE);
            if (v) {
                a.statusAttributionType = o("WAWebProtobufsE2E.pb").ContextInfo$StatusAttributionType.RESHARED_FROM_POST;
            }
        }
        if (e.aiProvenance != null && o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled()) {
            const R = o("WAWebMsgAIProvenance").aiProvenanceToProto(e.aiProvenance);
            if (R != null) {
                a.aiProvenance = R;
            }
        }
        const L = o("WAWebPairedMediaTypeProtoUtils").pairedMediaTypeToProto(e.pairedMediaType);
        if (L != null) {
            a.pairedMediaType = L;
        }
        return S(e, t, r("isEmptyObject")(a) ? undefined : a);
    }
    function v(e) {
        const t = e.id;
        const n = e.toJSON();
        delete n.status;
        delete n.mimetype;
        delete n.height;
        delete n.width;
        delete n.recipients;
        delete n.chat;
        delete n.broadcast;
        delete n.ack;
        delete n.invis;
        delete n.filehash;
        delete n.recvFresh;
        delete n.mediaData;
        if (!r("WAWebURLUtils").isHttp(e.clientUrl)) {
            delete n.clientUrl;
        }
        if (!r("WAWebURLUtils").isHttp(e.deprecatedMms3Url)) {
            delete n.deprecatedMms3Url;
        }
        if (o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            delete n.limitSharing;
        }
        for(const a in n){
            if (n[a] == null) {
                delete n[a];
            }
        }
        const i = r("WAWebConversionTupleCollection").get(t.remote);
        if (i) {
            n.conversionTuple = i.serialize();
        }
        return n;
    }
    function S(e, t = {}, n = undefined, a, i) {
        let l;
        let d = R(e, t, n, a, i);
        try {
            const m = o("WAWebAssociationProtoUtils").getValidatedOutgoingMessageAssociationContextInfo(e.associationType, e.parentMsgKey);
            if (m) {
                d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, m);
            }
        } catch (error) {
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[getProtobufMessage] assoc ctx gen failed ",
                "/",
                ": ",
                ""
            ])), e.type, e.associationType, error).sendLogs("getProtobufMessage: failed to generate associated message context info");
        }
        if (!(o("WAWebBotBaseGating").isBotEnabled() && (l = e.invokedBotWid) != null && l.isBot()) && e.messageSecret && i !== "quoted") {
            d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
                messageSecret: e.messageSecret
            });
        }
        if (o("WAWebBotBaseGating").isBotEnabled() || e.botGroupParticipant != null || e.to?.isSupportAgentBot() === true || e.id?.remote != null && o("WAWebBotUtils").isHatchBot(e.id.remote)) {
            const f = d.messageContextInfo?.botMetadata;
            const g = o("WAWebGenerateBotGroupMetadata").mergeBotMetadata(f, o("WAWebGenerateBotMetadata").generateBotMetadata(e));
            if (g != null && g !== f) {
                d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
                    botMetadata: g
                });
            }
        }
        if (!r("isArrayNullOrEmpty")(e.threadIds)) {
            const h = o("WAWebGenerateThreadIds").generateThreadIds(e);
            d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
                threadId: h
            });
        }
        d = N(d, e, n);
        if (o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() && o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(e.type, e.subtype) && i !== "quoted") {
            d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
                messageSecret: d.messageContextInfo?.messageSecret ?? e.messageSecret
            });
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.COMMENT && d.messageContextInfo?.messageSecret != null) {
            d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
                messageSecret: null
            });
        }
        if (e.limitSharing) {
            d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
                limitSharingV2: e.limitSharing
            });
        }
        return d;
    }
    function R(json, mediaMetadata = {}, contextInfo = undefined, r = {}, a) {
        const i = o("WAWebMessagePluginGenerateProtobuf").generateProtobuf({
            message: r,
            msgContext: a,
            contextInfo,
            json,
            mediaMetadata
        });
        if (i != null) {
            return i;
        }
        switch(json.type){
            case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
                return {
                    conversation: json.body
                };
            case "template":
                if (json.subtype === "text") {
                    json.type = "chat";
                    if (json.title) {
                        json.body = `*${json.title}*
${json.body}`;
                    }
                } else {
                    json.type = json.subtype;
                }
                return S(json, mediaMetadata, contextInfo, r);
        }
        return r;
    }
    function L(e, t) {
        if (t.type === "ptt") {
            return {
                viewOnceMessageV2Extension: {
                    message: e
                }
            };
        }
        return {
            viewOnceMessage: {
                message: e
            }
        };
    }
    function E(t) {
        const t_messageContextInfo = t.messageContextInfo;
        const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({
            documentWithCaptionMessage: {
                message: r
            }
        }, t_messageContextInfo != null ? {
            messageContextInfo: t_messageContextInfo
        } : undefined);
    }
    function k(e) {
        if (e.stickerMessage?.audioMessage != null) {
            return {
                audioStickerMessage: {
                    message: e
                }
            };
        }
        if (e.stickerMessage?.isLottie === true) {
            return {
                lottieStickerMessage: {
                    message: e
                }
            };
        }
        return e;
    }
    function I(e) {
        return {
            groupMentionedMessage: {
                message: e
            }
        };
    }
    function T(e) {
        const e_messageContextInfo = e.messageContextInfo;
        const n = babelHelpers.objectWithoutPropertiesLoose(e, s);
        return babelHelpers.extends({
            botForwardedMessage: {
                message: n
            }
        }, e_messageContextInfo != null ? {
            messageContextInfo: e_messageContextInfo
        } : undefined);
    }
    function D(e) {
        return {
            questionMessage: {
                message: e
            }
        };
    }
    function x(e) {
        return {
            questionReplyMessage: {
                message: e
            }
        };
    }
    function $(e) {
        return {
            associatedChildMessage: {
                message: babelHelpers.extends({}, e, {
                    messageContextInfo: undefined
                })
            },
            messageContextInfo: e.messageContextInfo
        };
    }
    function P(e) {
        const e_messageContextInfo = e.messageContextInfo;
        const n = babelHelpers.objectWithoutPropertiesLoose(e, u);
        return {
            pollCreationOptionImageMessage: {
                message: n
            },
            messageContextInfo: e_messageContextInfo
        };
    }
    function N(e, t, n) {
        let a;
        let l;
        let s;
        let u = e.messageContextInfo != null ? babelHelpers.extends({}, e, {
            messageContextInfo: undefined
        }) : e;
        if (n?.isQuestion === true) {
            u = D(u);
        }
        if (n != null && n.questionReplyQuotedMessage) {
            u = x(u);
        }
        if (t.associationType != null) {
            if (t.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL) {
                u = P(u);
            } else if (o("WAWebAssociationProtoUtils").shouldWrapAssociatedChildForType(t.associationType) && o("WAWebABProps").getABPropConfigValue("wa_web_wrap_associated_child_message_enabled")) {
                u = $(u);
            }
        }
        if (t.isViewOnce) {
            u = L(u, t);
        }
        if (t.isDynamicReplyButtonsMsg === true) {
            u = o("WAWebButtonsMessageProtoUtils").createDynamicReplyButtonsMessage(u, t, n);
        }
        if (t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && (a = u.documentMessage) != null && a.caption) {
            u = E(u);
        }
        if (t.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
            u = k(u);
        }
        if (n?.groupMentions?.length) {
            u = I(u);
        }
        if (!((l = t.invokedBotWid) != null && l.isFbidBot()) && ((s = t.invokedBotWid) != null && s.isPnBot() || t.subtype === "bot_request_welcome") && o("WAWebBotBaseGating").isBotEnabled()) {
            u.messageContextInfo = babelHelpers.extends({}, u.messageContextInfo, {
                messageSecret: t.messageSecret,
                botMetadata: babelHelpers.extends({}, e.messageContextInfo?.botMetadata || {}, t.botTargetSenderJid instanceof r("WAWebWid") ? {
                    invokerJid: t.botTargetSenderJid.toJid()
                } : {})
            });
        }
        if (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && t.isForwarded === true) {
            u = T(u);
        }
        if (n?.isSpoiler === true) {
            u = o("WAWebSpoilerFutureproofProtoUtils").createSpoilerFutureproofMessage(u, n);
        }
        if (e.messageContextInfo != null) {
            u = babelHelpers.extends({}, u, {
                messageContextInfo: babelHelpers.extends({}, e.messageContextInfo, u.messageContextInfo)
            });
        }
        return u;
    }
    function M(e) {
        e.imageMessage = undefined;
        e.videoMessage = undefined;
        e.documentMessage = undefined;
        e.audioMessage = undefined;
        e.ptvMessage = undefined;
        e.stickerMessage = undefined;
        e.lottieStickerMessage = undefined;
        e.audioStickerMessage = undefined;
        e.stickerPackMessage = undefined;
        e.albumMessage = undefined;
    }
    function w(e) {
        if (e == null) {
            return false;
        }
        return !!(e.imageMessage || e.videoMessage || e.documentMessage || e.audioMessage || e.ptvMessage || e.stickerMessage || e.lottieStickerMessage || e.audioStickerMessage || e.stickerPackMessage || e.albumMessage);
    }
    const A = [
        "deviceSentMessage",
        "viewOnceMessage",
        "ephemeralMessage",
        "documentWithCaptionMessage",
        "viewOnceMessageV2",
        "editedMessage",
        "viewOnceMessageV2Extension",
        "groupMentionedMessage",
        "spoilerMessage",
        "botInvokeMessage",
        "statusMentionMessage",
        "pollCreationOptionImageMessage",
        "associatedChildMessage",
        "groupStatusMentionMessage",
        "pollCreationMessageV4",
        "statusAddYours",
        "groupStatusMessage",
        "limitSharingMessage",
        "questionMessage",
        "groupStatusMessageV2",
        "botForwardedMessage",
        "questionReplyMessage"
    ];
    function F(e) {
        const t = e;
        if (w(t)) {
            M(t);
        }
        A.forEach((e)=>{
            const r = t[e]?.message;
            if (r != null && w(r)) {
                M(r);
            }
        });
    }
    function O(e, t, hasGroupAgentTarget, hasOpenBotTarget, a) {
        if (e.quotedMessage == null || hasGroupAgentTarget && !t && !hasOpenBotTarget) {
            return e;
        }
        if (a && !B(e.quotedMessage)) {
            return W(e);
        }
        if (e.participant == null || o("WAWebWidFactory").createWid(e.participant)?.isBot() === true) {
            return e;
        }
        const { participant, remoteJid, stanzaId } = e;
        const d = babelHelpers.objectWithoutPropertiesLoose(e, c);
        if (t || hasGroupAgentTarget) {
            return d;
        }
        return W(e);
    }
    function B(e) {
        if (e.conversation != null || e.extendedTextMessage != null) {
            return true;
        }
        return o("WAWebRemoveQuotedAttachmentMediaFields").FUTUREPROOF_WRAPPER_KEYS.some((t)=>{
            const r = e[t]?.message;
            return r != null && B(r);
        });
    }
    function W(e) {
        const { participant, quotedMessage, remoteJid, stanzaId } = e;
        const a = babelHelpers.objectWithoutPropertiesLoose(e, d);
        return a;
    }
    function q(e, t, hasGroupAgentTarget, hasOpenBotTarget, o) {
        const e_botInvokeMessage = e.botInvokeMessage;
        const l = e_botInvokeMessage?.message?.extendedTextMessage;
        const s = l?.contextInfo;
        if (e_botInvokeMessage?.message != null && l != null && s != null) {
            return babelHelpers.extends({}, e, {
                botInvokeMessage: babelHelpers.extends({}, e_botInvokeMessage, {
                    message: babelHelpers.extends({}, e_botInvokeMessage.message, {
                        extendedTextMessage: babelHelpers.extends({}, l, {
                            contextInfo: O(s, t, hasGroupAgentTarget, hasOpenBotTarget, o)
                        })
                    })
                })
            });
        }
        const e_extendedTextMessage = e.extendedTextMessage;
        const c = e_extendedTextMessage?.contextInfo;
        if (e_extendedTextMessage == null || c == null) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            extendedTextMessage: babelHelpers.extends({}, e_extendedTextMessage, {
                contextInfo: O(c, t, hasGroupAgentTarget, hasOpenBotTarget, o)
            })
        });
    }
    function U(e) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ botMessageSecret, groupHasMuseAgent = false, isGroupAgentParticipantSend = false, hasGroupAgentTarget = isGroupAgentParticipantSend, hasOpenBotTarget = false, isGroupMsg = false, isOpenBotGroup = false, mentionedJidList, message, messageSecret }) {
            let S = r("WAWebStructuredClone")(message);
            let R = false;
            if (isOpenBotGroup === true && o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()) {
                R = true;
            }
            const L = R && !hasGroupAgentTarget && !groupHasMuseAgent;
            if (L) {
                F(S);
            }
            if (isGroupAgentParticipantSend) {
                S.messageContextInfo = babelHelpers.extends({}, S.messageContextInfo, {
                    botMessageSecret: null,
                    messageSecret: messageSecret ?? S.messageContextInfo?.messageSecret
                });
            } else {
                S.messageContextInfo = babelHelpers.extends({}, S.messageContextInfo, {
                    messageSecret: null
                });
            }
            if (botMessageSecret && !isGroupAgentParticipantSend) {
                S.messageContextInfo = babelHelpers.extends({}, S.messageContextInfo, {
                    botMessageSecret
                });
            }
            if (isGroupMsg && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                H(S);
            }
            S = q(S, R, hasGroupAgentTarget, hasOpenBotTarget, L);
            const k = S?.protocolMessage?.botFeedbackMessage?.messageKey;
            if (k != null && k.remoteJid != null) {
                delete k.remoteJid;
            }
            const I = S?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE ? S?.protocolMessage?.key : null;
            if (I != null && I.remoteJid != null) {
                delete I.remoteJid;
            }
            yield o("WAWebBotReplaceMentionWidsWithPushnames").replaceMentionWidsWithPushnames(S, mentionedJidList);
            return S;
        });
        return V.apply(this, arguments);
    }
    function H(e) {
        const n = e.messageContextInfo?.botMetadata;
        if (n?.personaId != null) {
            const r = n.personaId;
            const botMetadata = babelHelpers.objectWithoutPropertiesLoose(n, m);
            e.messageContextInfo = babelHelpers.extends({}, e.messageContextInfo, {
                botMetadata
            });
        }
    }
    function G(e) {
        let i = e;
        const l = e?.botInvokeMessage?.message?.extendedTextMessage?.contextInfo?.participant ?? e?.extendedTextMessage?.contextInfo?.participant;
        if (l != null) {
            const s = o("WAWebWidFactory").createWid(l);
            if (!s.isBot()) {
                i = r("WAWebStructuredClone")(e);
                const m = i?.botInvokeMessage?.message?.extendedTextMessage?.contextInfo ?? i?.extendedTextMessage?.contextInfo;
                if (m != null) {
                    const p = o("WAWebLidMigrationUtils").toLid(s);
                    m.participant = o("WAWebE2EProtoUtils").encodeJid(p);
                }
            }
        }
        return i;
    }
    function z(e) {
        let n = e;
        const a = e?.protocolMessage?.key?.participant;
        if (a != null) {
            const i = o("WAWebWidFactory").createWid(a);
            if (!i.isBot() && !i.isLid()) {
                n = r("WAWebStructuredClone")(e);
                const s = n?.protocolMessage?.key;
                if (s != null) {
                    const u = o("WAWebLidMigrationUtils").toLid(i);
                    s.participant = o("WAWebE2EProtoUtils").encodeJid(u);
                }
            }
        }
        return n;
    }
    function j(e) {
        let t = e;
        const n = e?.protocolMessage != null;
        if (n) {
            let o;
            let a;
            t = r("WAWebStructuredClone")(e);
            if (!((o = t.protocolMessage) == null || (o = o.key) == null)) {
                delete o.remoteJid;
            }
            if (!((a = t.protocolMessage) == null || (a = a.key) == null)) {
                delete a.participant;
            }
        }
        return t;
    }
    function K(e) {
        const t = r("WAWebStructuredClone")(e);
        t.messageContextInfo = babelHelpers.extends({}, t.messageContextInfo, {
            capiCreatedGroup: true
        });
        return t;
    }
    function Q(e) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const debug_information = yield o("WAWebBackendApi").frontendSendAndReceive("getDebugInfo", {
                addLanguageFields: true,
                convertFields: true,
                addUserAgentDetails: true
            });
            debug_information.sagaKey = "saga_v1_enabled";
            const n = babelHelpers.extends({
                version: 1,
                debug_information
            }, o("WAWebABPropsSaga").getIsSagaV1CarouselEnabled() ? {
                citations_carousel: true
            } : {});
            e.messageContextInfo = babelHelpers.extends({}, e.messageContextInfo, {
                supportPayload: JSON.stringify(n)
            });
        });
        return X.apply(this, arguments);
    }
    l.populateMessageContextInfo = _;
    l.createPeerMsgProtobuf = f;
    l.createMsgProtobuf = g;
    l.createAddonProtobuf = h;
    l.createProtobuf = b;
    l.getProtobufMessage = S;
    l.updateBotInvokeMsgProtoCopyForCapi = U;
    l.updateFbidBotProtobuf = G;
    l.updateFbidBotInvokeProtobuf = z;
    l.updateBotProtobuf = j;
    l.updateGroupMsgProtoWithCapiFlag = K;
    l.addDebugInfoSupportPayload = Q;
}, 98);