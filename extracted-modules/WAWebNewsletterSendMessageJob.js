__d("WAWebNewsletterSendMessageJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebMediaMetadata",
    "WAWebMessageAssociation.flow",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMessageQueryJob",
    "WAWebNewsletterValidationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebOutgoingMessage",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgTypes",
    "encodeProtobuf",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = /[?&]id=([0-9]+)(?=&|#|$)/i;
    function m(e) {
        if (r("isStringNullOrEmpty")(e)) {
            return null;
        }
        const t = e.match(d);
        if (t) {
            return t[1];
        }
        return null;
    }
    const p = "&";
    function _(e, t) {
        try {
            if (e.type !== o("WAWebMsgType").MSG_TYPE.VIDEO || !o("WAWebChannelVideoServerTranscodeGating").isChannelVideoServerTranscodeUploadEnabled()) {
                return t;
            }
            const n = o("WAWebMediaMetadata").mediaMetadata(e);
            const a = n?.metadataUrl;
            if (a == null) {
                return t;
            }
            const i = m(a);
            if (r("isStringNullOrEmpty")(i)) {
                return t;
            }
            let l = t || "";
            if (l) {
                l += p;
            }
            l += i;
            return l;
        } catch (e) {
            return t;
        }
    }
    function f(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendNewsletterMessage", function() {
            return y(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function g(msg) {
        if ((o("WAWebMsgGetters").getIsNewsletterMsg(msg) || o("WAWebMsgGetters").getIsNewsletterStatus(msg)) && o("WAWebMsgGetters").getAiProvenance(msg)?.selfDisclosed === true && o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled()) {
            return true;
        }
    }
    function h(e, t) {
        const { msg, type } = e;
        const a = {
            messageId: msg.id.id,
            newsletterJid: e.newsletterJid,
            payload: o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, t).readByteArrayView(),
            isWamoSub: msg.isWamoSub === true || undefined
        };
        if (type === "pollCreation") {
            return babelHelpers.extends({}, a, {
                type: "pollCreation",
                contentType: msg?.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE ? "image" : "text"
            });
        }
        const i = g(msg);
        const l = babelHelpers.extends({}, a, {
            isQuestion: msg.isQuestion,
            questionReplyQuotedMessage: msg.questionReplyQuotedMessage,
            hasNewsletterAIContentMeta: i
        });
        if (type === "media") {
            const mediaHandle = _(msg, e.mediaHandle);
            return babelHelpers.extends({}, l, {
                mediaHandle,
                type: b(t),
                messageAssociationTypeMixinArgs: C(msg),
                contentId: e.contentId
            });
        }
        return babelHelpers.extends({}, l, {
            type
        });
    }
    function y(e) {
        o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(e.newsletterJid);
        switch(e.type){
            case "edit":
                {
                    const t = o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Newsletter, e.msg);
                    const a = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, t);
                    const isWamoSub = e.msg.isWamoSub === true || undefined;
                    const l = g(e.msg);
                    const s = {
                        messageId: e.msg.id.id,
                        newsletterJid: e.newsletterJid,
                        payload: a.readByteArrayView(),
                        isWamoSub,
                        hasNewsletterAIContentMeta: l
                    };
                    const u = e.editType === "media" ? babelHelpers.extends({}, s, {
                        type: "editMedia",
                        mediaType: b(t),
                        contentId: e.contentId
                    }) : babelHelpers.extends({}, s, {
                        type: "editText"
                    });
                    return o("WAWebNewsletterSendMessageQueryJob").querySendNewsletterMessage(u);
                }
            case "pollCreation":
            case "pollResultSnapshot":
            case "text":
            case "media":
                {
                    const d = o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Newsletter, e.msg);
                    const m = h(e, d);
                    return o("WAWebNewsletterSendMessageQueryJob").querySendNewsletterMessage(m);
                }
            case "revoke":
                return o("WAWebNewsletterSendMessageQueryJob").querySendNewsletterMessage({
                    messageId: e.messageId,
                    newsletterJid: e.newsletterJid,
                    type: "revoke",
                    isContentMedia: e.isContentMedia,
                    isWamoSub: e.isWamoSub === true || undefined
                });
            case "reaction":
                return o("WAWebNewsletterSendMessageQueryJob").querySendNewsletterMessage({
                    type: "reaction",
                    newsletterJid: e.newsletterJid,
                    reactionCode: e.reactionCode,
                    messageId: e.msg.id.id,
                    parentMsgServerId: e.parentMsgServerId
                });
            case "pollVote":
                return o("WAWebNewsletterSendMessageQueryJob").querySendNewsletterMessage({
                    type: "pollVote",
                    newsletterJid: e.newsletterJid,
                    votes: e.votes,
                    messageId: e.msg.id.id,
                    parentMsgServerId: e.parentMsgServerId
                });
            case "newsletterQuestionResponse":
                {
                    const p = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Newsletter, {
                        type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                        data: e.msg
                    });
                    return o("WAWebNewsletterSendMessageQueryJob").querySendNewsletterMessage({
                        messageId: e.msg.id.id,
                        newsletterJid: e.newsletterJid,
                        payload: o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, p).readByteArrayView(),
                        type: "newsletterQuestionResponse",
                        parentMsgServerId: e.parentMsgServerId
                    });
                }
            default:
                e.type;
                return (c || (c = n("Promise"))).reject(r("err")(`Unexpected message type: ${e.type}`));
        }
    }
    function C({ associationType }) {
        if (associationType == null) {
            return null;
        }
        switch(associationType){
            case o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL:
                return {
                    metaMessageAssociationType: "media_poll"
                };
            case o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM:
                return null;
            case o("WAWebMessageAssociation.flow").MessageAssociationType.BOT_PLUGIN:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HD_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.STREAMED_HD_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN:
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] unexpected msg association type: ",
                    ""
                ])), associationType).tags("newsletter").sendLogs(`newsletter-message-association-type-${associationType}`);
                return null;
        }
    }
    function b(e) {
        const t = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(e);
        if (t == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter] Failed to get media type from protobuf"
            ]))).tags("newsletter").sendLogs("newsletter-failed-media-type-from-protobuf");
            throw r("err")("Failed to get media type from protobuf");
        }
        switch(t){
            case o("WAWebBackendJobs.flow").EncMediaType.Audio:
                return "audio";
            case o("WAWebBackendJobs.flow").EncMediaType.Document:
                return "document";
            case o("WAWebBackendJobs.flow").EncMediaType.Gif:
                return "gif";
            case o("WAWebBackendJobs.flow").EncMediaType.Image:
                return "image";
            case o("WAWebBackendJobs.flow").EncMediaType.Ptt:
                return "ptt";
            case o("WAWebBackendJobs.flow").EncMediaType.Sticker:
                return "sticker";
            case o("WAWebBackendJobs.flow").EncMediaType.Url:
                return "url";
            case o("WAWebBackendJobs.flow").EncMediaType.VCard:
                return "vcard";
            case o("WAWebBackendJobs.flow").EncMediaType.Video:
                return "video";
            case o("WAWebBackendJobs.flow").EncMediaType.StickerPack:
                return "sticker_pack";
            default:
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Unsupported media type"
                ]))).tags("newsletter").sendLogs(`newsletter-unsupported-media-type-${t}`);
                throw r("err")(`Unsupported media type ${t}`);
        }
    }
    l.extractVideoIdFromMetadataUrl = m;
    l.maybeAddVideoIdToMediaHandle = _;
    l.sendNewsletterMessageJob = f;
    l.sendNewsletterMessage = y;
}, 98);