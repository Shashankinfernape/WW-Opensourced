__d("WAWebGenerateWebMessageInfo", [
    "WAWebCompactMapString",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebGenerateProtocolMessageEditProto",
    "WAWebMessageSecretLocationUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const m = babelHelpers.extends({}, t);
        const e_type = e.type;
        const _ = u(e_type) ? {
            url: e.deprecatedMms3Url,
            directPath: e.directPath,
            encFilehash: e.encFilehash,
            mediaKey: e.mediaKey,
            mediaKeyTimestamp: e.mediaKeyTimestamp,
            filehash: e.filehash ?? "",
            type: e_type,
            mimetype: e.mimetype ?? "",
            filename: e.filename ?? "",
            duration: e.duration ?? "",
            width: e.width ?? 0,
            height: e.height ?? 0,
            firstFrameLength: e.firstFrameLength,
            isAnimated: e.isAnimated,
            isLottie: e.isLottie,
            isAiSticker: e.isAiSticker,
            stickerPremiumStatus: e.stickerPremiumStatus,
            thumbnailDirectPath: e.thumbnailDirectPath,
            thumbnailSha256: e.thumbnailSha256,
            thumbnailEncSha256: e.thumbnailEncSha256,
            thumbnailHeight: e.thumbnailHeight,
            thumbnailWidth: e.thumbnailWidth,
            waveform: e.waveform,
            staticUrl: e.staticUrl,
            metadataUrl: e.metadataUrl,
            dashManifestUrl: e.dashManifestUrl
        } : undefined;
        const f = s(o("WAWebE2EProtoGenerator").createProtobuf(e, _));
        if (e.latestEditMsgKey != null && e.latestEditSenderTimestampMs != null) {
            const h = {
                mentionedJid: [],
                groupMentions: [],
                statusAttributions: [],
                experienceIds: []
            };
            if (e.mentionedJidList && e.mentionedJidList.length > 0) {
                h.mentionedJid = r("WAWebCompactMapString")(e.mentionedJidList, o("WAWebE2EProtoUtils").encodeJid);
            }
            if (e.groupMentions && e.groupMentions.length > 0) {
                h.groupMentions = e.groupMentions.map((e)=>({
                        groupSubject: e.groupSubject ?? "",
                        groupJid: o("WAWebE2EProtoUtils").encodeJid(e.groupJid) ?? ""
                    }));
            }
            const y = h.mentionedJid.length > 0 || h.groupMentions.length > 0;
            const C = r("WAWebGenerateProtocolMessageEditProto")({
                json: babelHelpers.extends({}, e, {
                    protocolMessageKey: e.id,
                    editMsgType: e.type
                }),
                contextInfo: y ? h : null
            });
            const b = f.messageContextInfo?.messageSecret;
            const editedMessage = b != null ? babelHelpers.extends({}, f, {
                messageContextInfo: babelHelpers.extends({}, f.messageContextInfo, {
                    messageSecret: undefined
                })
            }) : f;
            m.message = babelHelpers.extends({
                editedMessage: {
                    message: babelHelpers.extends({}, C, {
                        protocolMessage: babelHelpers.extends({}, C.protocolMessage, {
                            editedMessage
                        })
                    })
                }
            }, b != null ? {
                messageContextInfo: {
                    messageSecret: b
                }
            } : undefined);
        } else {
            m.message = f;
        }
        if (m.message != null) {
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
                context: o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext.Sender,
                proto: m.message,
                ruleId: o("WAWebMessageSecretLocationUtils").MESSAGE_SECRET_RULE_ID_GROUP_HISTORY
            });
        }
        return m;
    }
    function s(e) {
        const r = e.audioStickerMessage?.message;
        if (r == null) {
            return e;
        }
        const o = r.stickerMessage?.isLottie === true ? {
            lottieStickerMessage: {
                message: r
            }
        } : r;
        return babelHelpers.extends({}, o, {
            messageContextInfo: e.messageContextInfo
        });
    }
    function u(e) {
        return e === "video" || e === "sticker" || e === "ptv" || e === "ptt" || e === "image" || e === "document" || e === "audio";
    }
    l.default = e;
}, 98);